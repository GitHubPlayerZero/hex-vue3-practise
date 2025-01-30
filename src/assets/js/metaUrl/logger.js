export const logger = {
  /**
   * log 印出分隔線
   */
  logDivider(num = 50) {
    console.log('='.repeat(num));
  },

  /**
   * log 印出測試項目
   * @param {string} item  - 測試項目名稱
   */
  logTestItem(item) {
    console.log(`\n${'='.repeat(8)} 測試 ${item} ${'='.repeat(8)}\n\n`);
  },

  /**
   * log 印出測試標題
   * @param {string} title - 測試標題
   */
  logTestTitle(title) {
    console.log(`\n\n🌸 ${title} 🌸`);
  },

  /**
   * log 印出 URL 資訊。
   * @param {URL} urlObj - URL 物件。
   */
  logUrlObj(urlObj) {
    console.log(urlObj);
    console.log(`origin ==>`, urlObj.origin);
    console.log(`pathname ==>`, urlObj.pathname);
    console.log(`href ==>`, urlObj.href);
  },
};
