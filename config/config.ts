import { defineConfig } from "umi";
import routes from "./routes";
export default defineConfig({
  nodeModulesTransform: {
    type: "none",
  },
  routes,
  // 开启项目视图骨架配置
  layout: {
    // 产品名，默认值为包名
    name: "Ant Design",
    // 是否开始国际化配置
    locale: true,
    // 用于运行时配置默认 Layout 的 UI 中，点击退出登录的处理逻辑，默认不做处理
    layout: "side",
  },
  antd: {
    dark: false,
  },
  fastRefresh: {},
});
