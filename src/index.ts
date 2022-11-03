import { createApp } from "vue/dist/vue.esm-bundler.js";

// import JSXButton from './JSXButton';
import SmartyUI from './entry'
console.log('123')
createApp({
  template: `
    <div>
      <SButton color="blue" round plain icon="search" ></SButton>
      <SButton color="green" round plain icon="edit" ></SButton>
      <SButton color="gray" round plain icon="check" ></SButton>
      <SButton color="yellow" round plain icon="message" >黄色按钮</SButton>
      <SButton color="red" round plain icon="delete" >红色按钮</SButton>
    </div>
  `
}).use(SmartyUI).mount("#app");