import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: "en-US",
  title: "Sims-Editor",
  description: "Just playing around",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    navbar: [
      // 导航栏配置
      { text: "API", link: "/Outher/" },
      { text: "组件", link: "/ES6-guides/intro" },
    ],
    logo: "https://vuejs.org/images/logo.png",
  },
});
