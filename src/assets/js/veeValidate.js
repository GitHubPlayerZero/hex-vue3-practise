// 匯入 vee-validate 基本功能
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';

// 匯入 vee-validate 多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';

// 匯入 vee-validate 語系檔案
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json'; // 繁體中文
import en from '@vee-validate/i18n/dist/locale/en.json'; // 英文 (預設為英文，可以不須匯入，除非要自訂義英文訊息)

// // 匯入 vee-validate 相關規則，如必填、email 等等
// import { required, email, regex } from '@vee-validate/rules';

// 匯入 vee-validate 所有規則
import { all } from '@vee-validate/rules';

// 匯入自訂義的規則
import { validationRules } from '@/assets/js';

// 語系設定檔
const languageConf = {
  zh_TW: {
    code: 'zh_TW',
    name: '繁體中文',
  },
  en: {
    code: 'en',
    name: '英文',
  },
};

// 目前語系，預設為英文
let currentLanguage = { ...languageConf.en };

/**
 * 使用 VeeValidate。
 * @returns {Object} Object - 客製化的 VeeValidate 用法。
 */
export function useVeeValidate() {

  /**
   * 初始化 VeeValidate 環境，預設為繁體中文
   */
  function initEnvironment() {
    console.log(`# Initial VeeValidate environment ...`);
    // 定義 vee-validate 驗證規則
    // defineRule('required', required);
    // defineRule('email', email);
    // defineRule('regex', regex);

    // 定義 vee-validate 所有驗證規則
    Object.entries(all).forEach(([name, rule]) => {
      // console.log(`${name} ==>`, rule);
      defineRule(name, rule);
    });

    // 自訂義手機驗證規則 1
    // 僅吐回驗證是否通過（true / false）
    defineRule('mobileRule1', (value) => {
      return validationRules.checkMobile(value);
    });

    // 自訂義手機驗證規則 2
    // 驗證不通過時，直接吐回錯誤訊息
    defineRule('mobileRule2', (value) => {
      return validationRules.checkMobile(value) ? true : '[defineRule mobileRule2] 手機格式不正確';
    });

    // 自訂義手機驗證規則 3
    // 僅吐回驗證是否通過（true / false）
    // 在語系中自訂相對應的錯誤訊息
    defineRule('mobileRule3', (value) => {
      return validationRules.checkMobile(value);
    });

    // 自訂義手機驗證規則 4
    // 僅吐回驗證是否通過（true / false）
    // 在語系中自訂相對應的錯誤訊息
    // 能夠傳入額外的參數
    defineRule('mobileRule4', (value, ...rest) => {
      console.log(`[mobileRule4] rest ==>`, rest);
      return validationRules.checkMobile(value);
    });

    // 配置 vee-validate 相關設定
    configure({
      // validateOnInput: true, // 當輸入任何內容直接進行驗證

      // 載入語系
      // generateMessage: localize({ zh_TW }), // 繁體中文
      // generateMessage: localize({ zh_TW, en }), // 多個語系示範 (英文為預設語系，可以不須載入，這邊僅為示範載入多個語系的寫法)
      // generateMessage: localize({ zhTW: zh_TW }), // 繁體中文 (六角範例寫法，取別名)

      // 在語系中自訂驗證訊息
      generateMessage: localize({
        // 繁體中文
        zh_TW: {
          messages: {
            ...zh_TW.messages,
            mobileRule3: '[defineRule mobileRule3 zh_TW] {field} 格式錯誤',

            mobileRule4: (context) => {
              console.log(`[defineRule mobileRule4] context ==>`, context);
              const param = JSON.stringify(context.rule.params);
              return `[defineRule mobileRule4 zh_TW] ${context.label} 格式錯誤。傳入參數：${param}`;
            },
          },
        }, // 繁體中文 end

        // 英文為預設語系，可以不用再註冊，除非想自訂英文訊息
        en: {
          messages: {
            ...en.messages,
            mobileRule3: '[defineRule mobileRule3 en] {field} format error',
            // mobileRule4 客製訊息僅定義於繁體中文，英文沒定義會使用預設訊息
          },
        }, // 英文 end
      }), // generateMessage end
    });

    // 設定 vee-validate 預設語系
    // setLocale('zhTW'); // 繁體中文 (六角範例取別名寫法)
    // setLocale('en');  // 英文 (英文為預設語系，可以不用設定)
    setLocale('zh_TW'); // 繁體中文
    
    // 設定目前語系
    currentLanguage = { ...languageConf.zh_TW };
  }

  /**
   * 切換語系。
   * @param {String} language - 語系代碼，參考 languageConf.code
   * @returns {Object} Object - 回傳目前語系設定
   */
  function switchLanguage(language) {
    console.log(`[switchLanguage] language ==>`, language);
    // console.log(this);
    setLocale(language);
    
    // 設定目前語系
    currentLanguage = { ...languageConf[language] };
    return currentLanguage;
  }
  
  /**
   * 取得目前語系。
   * @returns {Object} Object - 語系資訊，包含代碼、名稱。
   */
  function getCurrentLanguage() {
    return currentLanguage;
  }

  /**
   * 取得使用到的 VeeValidate 元件，會另外命名。
   * @returns {Object} Object - VeeValidate 元件：VeeForm、VeeField、VeeErrorMessage。
   */
  function getComponents() {
    return {
      VeeForm: Form,
      VeeField: Field,
      VeeErrorMessage: ErrorMessage,
    };
  }

  return {
    languageConf,
    initEnvironment,
    switchLanguage,
    getCurrentLanguage,
    getComponents,
  };
}
