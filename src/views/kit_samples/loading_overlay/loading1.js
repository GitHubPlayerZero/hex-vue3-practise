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
		// 讓動作中的元素失去焦點，以避免使用鍵盤觸發
		const elemActive = document.activeElement;
		elemActive.blur();
		
		const loader = $loading.show({
			... options
		});
		
		
		/**
		 * 關閉 loading。
		 */
		function close() {
			loader.hide();
			elemActive.focus();	// 讓元素回復焦點
		}
		
		return { close };
	}
	
	return { open };
}
