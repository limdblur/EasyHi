webpackJsonp([8],{622:function(t,n,o){var e,s,i={};i.$style=o(736),e=o(686);var u=o(722);s=e=e||{},"object"!=typeof e.default&&"function"!=typeof e.default||(s=e=e.default),"function"==typeof s&&(s=s.options),s.render=u.render,s.staticRenderFns=u.staticRenderFns,s.computed||(s.computed={}),Object.keys(i).forEach(function(t){var n=i[t];s.computed[t]=function(){return n}}),t.exports=e},686:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{msg:"try to move me!",x:0,y:0}},computed:{touchOptions:function(){return{x:!1,y:!1,handler:{start:this.start,moving:this.moving}}}},methods:{add:function(t){this[t]++},start:function(){console.log("start")},moving:function(){console.log("moving")}}},t.exports=n.default},698:function(t,n,o){n=t.exports=o(136)(),n.push([t.i,"",""])},722:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_m(0)," ",_h("button",{directives:[{name:"touch",rawName:"v-touch",value:touchOptions,expression:"touchOptions"}],staticClass:"btn btn-primary"},["\n    "+_s(msg)+", "+_s(x+y)+"\n  "])," ",_h("span",[_s(x)+", "+_s(y)])," ",_m(1)," ",_m(2)," ",_h("button",{staticClass:"btn btn-default",on:{click:function(t){add("x")}}},["add x"])," ",_h("button",{staticClass:"btn btn-default",on:{click:function(t){add("y")}}},["add y"])])},staticRenderFns:[function(){with(this)return _h("br")},function(){with(this)return _h("br")},function(){with(this)return _h("br")}]}},736:function(t,n,o){var e=o(698);"string"==typeof e&&(e=[[t.i,e,""]]);o(137)(e,{});e.locals&&(t.exports=e.locals)}});