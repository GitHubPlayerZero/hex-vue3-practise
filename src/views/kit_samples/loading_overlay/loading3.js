import { useLoading } from 'vue-loading-overlay';

const baseSettings = {
	color: 'blue',
	zIndex: 1059,	// 避免遮蔽 SWAL2 (SWAL2 的 z-index 為 1060)
	enforceFocus: false,	// 避免使 SWAL2 失焦
};


/**
 * 禁止鍵盤動作。
 * @param {Object} elem - 要禁止鍵盤動作的 DOM 元素。
 * @param {AbortSignal} [abortSignal] - 若需要中止阻擋鍵盤效果，使用 AbortSignal。
 */
function preventKeyboard(elem, abortSignal)
{
	const options = { capture: true };
	
	if (abortSignal) {
		options.signal = abortSignal;
	}
	
	// 只需屏蔽 keydown、keyup，因為只要屏蔽了 keydown 就不會觸發 keypress
	["keydown", "keyup"].forEach((item) => {
		elem.addEventListener(
			item, 
			(event) => {
				event.preventDefault();
				event.stopPropagation();
			}, 
			options
		);
	});
}


/**
 * 使用自定義的 loading。  
 * 允許傳入自己另外的設定，若有與基本設定重複的項目，會使用傳入的設定。  
 * 注意，此方法只會開啟整頁 loading，若需要區域性的 loading，請使用 useMyAreaLoading。
 * @param {Object} [options = {}] vue-loading-overlay 的設定。
 * @returns 相關的使用方法或物件。
 */
export function useMyLoading(options = {})
{
	const $loading = useLoading({
		... baseSettings,
		... options,
	});
	
	
	/**
	 * 開啟全域 loading，允許傳入自己另外的設定。
	 * @param {Object} [options = {}] vue-loading-overlay 的設定。
	 * @returns 針對這次開啟的 loader，提供調用的方法。
	 */
	function open(options = {})
	{
		// 取得當前動作中的元素，以便 loading 結束後重新設定為 focus
		const elemActive = document.activeElement;
		
		// loading 期間屏蔽鍵盤動作
		const abortController = new AbortController();
		preventKeyboard(document.querySelector("#app"), abortController.signal);
		
		// 開啟 loading。
		// 會強制 container 為 undefined 以確保開啟整頁 loading。
		const loader = $loading.show({
			... options,
			container: undefined,
		});
		
		// 使 loading 取得焦點，並且禁止鍵盤操作 (主要防止 tab)
		const elemOverlay = document.querySelector(".vl-overlay.vl-full-page");
		preventKeyboard(elemOverlay);
		elemOverlay.focus();
		
		
		/**
		 * 關閉 loading。
		 */
		function close() {
			abortController.abort();	// 取消鍵盤阻擋
			elemActive.focus();	// 讓元素回復焦點
			loader.hide();
		}
		
		return { close };
	}
	
	return { open };
}


/**
 * 使用自定義的 loading。  
 * 允許傳入自己另外的設定，若有與基本設定重複的項目，會使用傳入的設定。  
 * 注意，此方法為開啟區域性的 loading，若需要整頁 loading，請使用 useMyLoading。
 * @param {Object} options - vue-loading-overlay 的設定。
 * @returns 相關的使用方法或物件。
 */
export function useMyAreaLoading(options = {})
{
	const $loading = useLoading({
		... baseSettings,
		... options,
	});
	
	
	/**
	 * 開啟 loading，允許傳入自己另外的設定。
	 * @param {Object} [options = {}] vue-loading-overlay 的設定。
	 * @returns 針對這次開啟的 loader，提供調用的方法。
	 */
	function open(options = {})
	{
		if (!options.container) {
			console.error("container 參數不可為空！");
			return;
		}
		
		// 開啟 loading
		const loader = $loading.show(options);
		
		// 取得當前動作中的元素，以便 loading 結束後重新設定為 focus
		const elemActive = document.activeElement;
		
		// 取得 container 的 tabindex 供之後還原
		const tabindex = options.container.getAttribute("tabindex");
		
		// loading 期間屏蔽 container 區域的鍵盤動作
		const abortController = new AbortController();
		preventKeyboard(options.container, abortController.signal);
		
		// 將 container 的 tabindex 設為 0，以便取得焦點 (以防止 tab)
		options.container.setAttribute("tabindex", "0");
		options.container.focus();
		
		
		/**
		 * 關閉 loading。
		 */
		function close()
		{
			// 復原 container 的 tabindex
			options.container.setAttribute("tabindex", tabindex);
			
			// 若作用中的元素為 container 或其 loading，則恢復原焦點
			const activeElement = document.activeElement;
			if (activeElement === options.container 
				|| activeElement === options.container.querySelector(".vl-overlay"))
			{
				elemActive.focus();	// 讓元素回復焦點
			}
			
			abortController.abort();	// 取消鍵盤監聽
			loader.hide();
		}
		
		return { close };
	}
	
	return { open };
}
