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
        primary700: '#1d4ed8',
        primary600: '#2563eb',
        primary500: '#3b82f6',
        primary200: '#bfdbfe',
        primary100: '#dbeafe',
        buttonPrimary600: '#2563eb',
        buttonPrimary500: '#3b82f6',
      }
    },
    dark: {
      colors: {
        primary700: '#172554',
        primary600: '#1e3a8a',
        primary500: '#ffffff',
        primary200: '#172554',
        primary100: '#3b82f6',
        buttonPrimary600: '#2563eb',
        buttonPrimary500: '#3b82f6',
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
