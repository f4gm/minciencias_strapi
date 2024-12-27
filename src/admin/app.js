const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  theme: {
    light: {
      colors: {
        primary700: '#006AB3',
        primary600: '#007acb',
        primary500: '#0a9bed',
        primary200: '#b9e2fe',
        primary100: '#dff0ff',
        secondary700: '#247145',
        secondary600: '#2a8f55',
        secondary500: '#38a968',
        secondary200: '#c4eed5',
        secondary100: '#e1f7e9',
        alternative700: '#bb6802',
        alternative600: '#e29300',
        alternative500: '#fabb00',
        alternative200: '#fff885',
        alternative100: '#fffbc5',
        buttonPrimary600: '#007acb',
        buttonPrimary500: '#0a9bed',
      }
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
