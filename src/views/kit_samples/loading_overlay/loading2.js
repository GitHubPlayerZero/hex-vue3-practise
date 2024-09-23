import { useLoading } from 'vue-loading-overlay';

const baseSettings = {
	color: 'blue',
	zIndex: 1059,	// 避免遮蔽 SWAL2 (SWAL2 的 z-index 為 1060)
	enforceFocus: false,	// 避免使 SWAL2 失焦
};


/**
 * 使用自定義的 loading。  
 * 允許傳入自己另外的設定，若有與基本設定重複的項目，會使用傳入的設定。
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
	 * 開啟 loading，允許傳入自己另外的設定。
	 * @param {Object} [options = {}] vue-loading-overlay 的設定。
	 * @returns 針對這次開啟的 loader，提供調用的方法。
	 */
	function open(options = {})
	{
		/* loading 期間屏蔽鍵盤動作 */
		
		// 鎖整個 document 會使 SWAL 也無法操作，改成鎖 app div 即可
		// const elem = options.container ?? document;
		const elem = options.container ?? document.querySelector("#app");
		
		const abortController = new AbortController();
		const abortSignal = abortController.signal;
		
		// 只需屏蔽 keydown、keyup，因為只要屏蔽了 keydown 就不會觸發 keypress
		["keydown", "keyup"].forEach((item) => {
			elem.addEventListener(
				item, 
				(event) => {
					console.log(`disable keyboard [${item}]`);
					event.preventDefault();
					event.stopPropagation();
				}, 
				{
					signal: abortSignal,
					capture: true,
				}
			);
		})
		
		
		// 開啟 loading
		const loader = $loading.show({
			... options
		});
		
		
		/**
		 * 關閉 loading。
		 */
		function close() {
			loader.hide();
			abortController.abort();
		}
		
		return { close };
	}
	
	return { open };
}
