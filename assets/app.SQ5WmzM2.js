import{j as o,ME as p,MF as u,MG as l,MH as c,MI as f,MJ as d,MK as m,ML as M,MM as h,MN as A,X as g,d as P,u as v,l as w,z as y,MO as C,MP as R,MQ as E,a7 as _}from"./chunks/framework.66XcOYhx.js";import{R as b}from"./chunks/theme.IWaTQrqE.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(b),D=P({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=v();return w(()=>{y(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&C(),R(),E(),s.setup&&s.setup(),()=>_(s.Layout)}});async function L(){const e=T(),t=O();t.provide(u,e);const a=l(e.route);return t.provide(c,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function O(){return M(D)}function T(){let e=o,t;return h(a=>{let n=A(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=g(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&L().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{L as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}