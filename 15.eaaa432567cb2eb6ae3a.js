webpackJsonp([15],{660:function(t,e,s){var o,n;o=s(678);var i=s(713);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=o},663:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(24);e.default={props:{id:{validator:function(t){return(0,o.isNumber)(t)||(0,o.isString)(t)}},header:{validator:function(t){return(0,o.isBoolean)(t)||(0,o.isString)(t)}},footer:Boolean,transition:String,close:Function,confirm:Function},computed:{label:function(){var t=this.header;return(0,o.isEmptyStr)(t)?"&nbsp;":t}},methods:{closeModal:function(){this.close?this.close.apply(this,arguments):this.$modal.close(this.id||(0,o.warn)("there is no modal id found, then the current modal will be close!"))},confirmModal:function(){this.confirm&&this.confirm.apply(this,arguments)}}},t.exports=e.default},678:function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(731),i=o(n),r=s(24),a=void 0;e.default={props:{bodyMsg:{type:String,required:!0},transition:String},data:function(){return{msg:"My name is msg"}},components:{ModalItem:i.default},methods:{confirm:function(){a=this.$modal.open({id:a,component:Promise.resolve().then(s.bind(null,660)),options:{backdrop:!0,destroy:!0,show:!0},props:{bodyMsg:(0,r.reverse)(this.bodyMsg),transition:this.transition}})},reverseMsg:function(){this.msg=(0,r.reverse)(this.msg)}}},t.exports=e.default},711:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("transition",{attrs:{name:t.transition}},[e("div",{staticClass:"modal",attrs:{id:t.id}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t.$slots.header?e("div",{staticClass:"modal-header"},[t._t("header")]):t.label?e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeModal}},[e("span",{attrs:{"aria-hidden":"true"}},["×"])," ",e("span",{staticClass:"sr-only"},["关闭"])])," ",e("h4",{staticClass:"modal-title",domProps:{innerHTML:t._s(t.label)}})]):t._e()," "," "," ",e("div",{staticClass:"modal-body"},[t._t("default")])," "," ",t.$slots.footer?e("div",{staticClass:"modal-footer"},[t._t("footer")]):t.footer?e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-theme-default",attrs:{type:"button"},on:{click:t.closeModal}},["取消"])," ",e("button",{staticClass:"btn btn-theme-primary",attrs:{type:"button"},on:{click:t.confirmModal}},["确定"])]):t._e()," "])])])])},staticRenderFns:[]}},713:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("ModalItem",{attrs:{header:"标题",footer:!0,confirm:t.confirm.bind(this),transition:t.transition}},[e("template",{slot:"header"},["\n    My Header\n  "])," ",[e("p",[t._s(t.bodyMsg)]),"\n    "+t._s(t.msg)+"\n    ",e("br")," ",e("button",{staticClass:"btn btn-theme-primary",on:{click:t.reverseMsg}},["Reverse Msg"])]," "," "," "])},staticRenderFns:[]}},731:function(t,e,s){var o,n;o=s(663);var i=s(711);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=o}});