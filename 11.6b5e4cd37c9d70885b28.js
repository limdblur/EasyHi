webpackJsonp([11],{636:function(t,n,e){var o,a;o=e(655);var d=e(705);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=d.render,a.staticRenderFns=d.staticRenderFns,t.exports=o},655:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=void 0;n.default={data:function(){return{options:{backdrop:!1,transition:"bounce",show:!0}}},methods:{addModal:function(){o=this.$modal.open({id:o,component:e.e(14).then(e.bind(null,638)),options:this.options})},clearModal:function(){this.$modal.clear()}}},t.exports=n.default},705:function(t,n){t.exports={render:function(){var t=this;return t._h("div",[t._h("button",{staticClass:"btn btn-theme-primary",on:{click:t.addModal}},["Add modal"])," ",t._h("button",{staticClass:"btn btn-theme-default",on:{click:t.clearModal}},["Clear modal"])])},staticRenderFns:[]}}});