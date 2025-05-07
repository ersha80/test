import {createI18n} from "vue-i18n";

const zhCN = {
  message: {
    hello: "你好",
    welcome: "欢迎，{name}"
  }
};

const en = {
  message: {
    hello: "Hello",
    welcome: "Welcome, {name}"
  }
};

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en',
  messages: {
    'zh-CN': zhCN,
    'en': en
  }
});

export { i18n };
