webpackJsonp([11],{547:function(t,o,n){var e,a;e=n(569);var i=n(607);a=e=e||{},"object"!=typeof e.default&&"function"!=typeof e.default||(a=e=e.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=e},569:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n(11),a=void 0;o.default={data:function(){return{options:{backdrop:!1,show:!0,destroy:!0},promptText:""}},methods:{addModal:function(){a=this.$modal.open({id:a,component:n.e(13).then(n.bind(null,553)),options:this.options,props:{bodyMsg:"Just test body",transition:!0}})},clearModal:function(){this.$modal.clear()},confirmModal:function(){(0,e.confirm)({tipText:"测试confirm 模态框",confirmText:"蓝瘦,香菇",confirm:function(){console.log("It is after confirm btn"),this.$modal.close()},close:function(){console.log("It is after cancel modal"),this.$modal.close()}})},tipModal:function(){(0,e.tip)({tipText:'I am  a confirm <span style="color: red">red</span> modal tip Text',confirm:function(){this.$modal.close()}})},toastModal:function(){(0,e.toast)({tipText:"I am  a confirm modal tip Text",close:function(){console.log("It is a toast"),this.$modal.close()}})},promptModal:function(){var t=this;(0,e.prompt)({tipText:"还不赶紧写原因？",promptText:this.promptText,placeholder:'在此填写原因(50字以内)，或者直接点击"确定"',confirm:function(o){t.promptText=o,t.$modal.close()}})}}},t.exports=o.default},607:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement;return o("div",[o("button",{staticClass:"btn btn-theme-primary",on:{click:t.addModal}},["Add modal"])," ",o("button",{staticClass:"btn btn-theme-default",on:{click:t.clearModal}},["Clear modal"])," ",o("button",{staticClass:"btn btn-theme-default",on:{click:t.confirmModal}},["Confirm modal"])," ",o("button",{staticClass:"btn btn-theme-default",on:{click:t.tipModal}},["Tip modal"])," ",o("button",{staticClass:"btn btn-theme-default",on:{click:t.toastModal}},["Toast modal"])," ",o("button",{staticClass:"btn btn-theme-default",on:{click:t.promptModal}},["edit confirm modal"])," ",o("div",{staticClass:"theme-color",domProps:{innerHTML:t._s(t.promptText)}})])},staticRenderFns:[]}}});