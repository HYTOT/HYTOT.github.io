(window.webpackJsonp=window.webpackJsonp||[]).push([["pages"],{"05ba":function(t,s,a){"use strict";a("7083")},"14c3":function(t,s,a){var e=a("c6b6"),i=a("9263");t.exports=function(t,s){var a=t.exec;if("function"==typeof a){var n=a.call(t,s);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==e(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,s)}},"159b":function(t,s,a){var e=a("da84"),i=a("fdbc"),n=a("17c2"),r=a("9112");for(var c in i){var o=e[c],l=o&&o.prototype;if(l&&l.forEach!==n)try{r(l,"forEach",n)}catch(t){l.forEach=n}}},"17c2":function(t,s,a){"use strict";var e=a("b727").forEach,i=a("a640"),n=a("ae40"),r=i("forEach"),c=n("forEach");t.exports=r&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},"198c":function(t,s,a){},"242b":function(t,s,a){"use strict";a.r(s),a("4160"),a("ac1f"),a("5319"),a("159b");var e=a("d4ec"),i=a("bee2"),n=a("262e"),r=a("2caf"),c=a("9ab4"),o=a("60a3"),l=function(t){Object(n.a)(a,t);var s=Object(r.a)(a);function a(){var t;return Object(e.a)(this,a),(t=s.apply(this,arguments)).show=!1,t.routes=[{id:1,path:"/first"},{id:2,path:"/second"},{id:3,path:"/third"},{id:4,path:"/fourth"}],t}return Object(i.a)(a,[{key:"toFirstPage",value:function(){var t=this,s=this.routes;s.forEach((function(a){setTimeout((function(){return t.$router.replace(a.path)}),500*(s.length-a.id))}))}},{key:"created",value:function(){var t=this;setTimeout((function(){return t.show=!0}),1500)}}]),a}(o.b),u=l=Object(c.a)([o.a],l),d=(a("a8f4"),a("2877")),f=Object(d.a)(u,(function(){var t=this.$createElement,s=this._self._c||t;return s("article",{staticClass:"fifth"},[s("section",{staticClass:"summary",class:{show:this.show}},[s("div",{staticClass:"_row _top"},[this._v("I admire Evan a lot because...")]),s("div",{staticClass:"_row _top"},[this._v("He makes a great contribution to...")]),s("img",{attrs:{src:"images/summary.jpg"},on:{click:this.toFirstPage}}),s("div",{staticClass:"_row _bottom"},[this._v("There are many websites to know...")]),s("div",{staticClass:"_row _bottom"},[this._v("In addition to programming...")])])])}),[],!1,null,"0bf59c1a",null);s.default=f.exports},3787:function(t,s,a){},4160:function(t,s,a){"use strict";var e=a("23e7"),i=a("17c2");e({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},5319:function(t,s,a){"use strict";var e=a("d784"),i=a("825a"),n=a("7b0b"),r=a("50c4"),c=a("a691"),o=a("1d80"),l=a("8aa5"),u=a("14c3"),d=Math.max,f=Math.min,h=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,_=/\$([$&'`]|\d\d?)/g;e("replace",2,(function(t,s,a,e){var p=e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=e.REPLACE_KEEPS_$0,m=p?"$":"$0";return[function(a,e){var i=o(this),n=null==a?void 0:a[t];return void 0!==n?n.call(a,i,e):s.call(String(i),a,e)},function(t,e){if(!p&&g||"string"==typeof e&&-1===e.indexOf(m)){var n=a(s,t,this,e);if(n.done)return n.value}var o=i(t),h=String(this),v="function"==typeof e;v||(e=String(e));var _=o.global;if(_){var w=o.unicode;o.lastIndex=0}for(var C=[];;){var E=u(o,h);if(null===E)break;if(C.push(E),!_)break;""===String(E[0])&&(o.lastIndex=l(h,r(o.lastIndex),w))}for(var x,j="",y=0,$=0;$<C.length;$++){E=C[$];for(var O=String(E[0]),k=d(f(c(E.index),h.length),0),S=[],R=1;R<E.length;R++)S.push(void 0===(x=E[R])?x:String(x));var I=E.groups;if(v){var A=[O].concat(S,k,h);void 0!==I&&A.push(I);var T=String(e.apply(void 0,A))}else T=b(O,h,k,S,I,e);k>=y&&(j+=h.slice(y,k)+T,y=k+O.length)}return j+h.slice(y)}];function b(t,a,e,i,r,c){var o=e+t.length,l=i.length,u=_;return void 0!==r&&(r=n(r),u=v),s.call(c,u,(function(s,n){var c;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,e);case"'":return a.slice(o);case"<":c=r[n.slice(1,-1)];break;default:var u=+n;if(0===u)return s;if(u>l){var d=h(u/10);return 0===d?s:d<=l?void 0===i[d-1]?n.charAt(1):i[d-1]+n.charAt(1):s}c=i[u-1]}return void 0===c?"":c}))}}))},"55bc":function(t,s,a){},"607c":function(t,s,a){},"611f":function(t,s,a){"use strict";a.r(s);var e=a("d4ec"),i=a("bee2"),n=a("262e"),r=a("2caf"),c=a("9ab4"),o=a("60a3"),l=function(t){Object(n.a)(a,t);var s=Object(r.a)(a);function a(){var t;return Object(e.a)(this,a),(t=s.apply(this,arguments)).loaded=!1,t.show=!0,t}return Object(i.a)(a,[{key:"created",value:function(){var t=this;setTimeout((function(){return t.loaded=!0}),1500)}}]),a}(o.b),u=l=Object(c.a)([o.a],l),d=(a("05ba"),a("2877")),f=Object(d.a)(u,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"second"},[a("img",{staticClass:"evan",attrs:{src:"images/evan.jpg"},on:{click:function(s){t.show=!t.show}}}),a("img",{staticClass:"vue",class:{show:t.show&&t.loaded},attrs:{src:"images/progressive.png"}}),a("aside",{staticClass:"info",class:{show:t.show&&t.loaded}},[t._m(0),t._m(1),t._m(2)]),a("img",{staticClass:"childhood",attrs:{src:"images/childhood.jpg"}}),a("section",{staticClass:"beginning",class:{show:!t.show}},[a("div",{staticClass:"_row"},[t._v("beginning:")]),t._m(3),t._m(4),a("br"),a("br"),a("div",{staticClass:"_row"},[t._v("majored in:")]),t._m(5),t._m(6),a("br"),a("br"),a("div",{staticClass:"_row _after",on:{click:function(s){return t.$router.replace("/third")}}},[t._v("afterwards 👉")])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[s("i",{staticClass:"iconfont icon-jiaoyudaka"}),this._v("Evan You / 尤雨溪 ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[s("i",{staticClass:"iconfont icon-dingwei1"}),this._v("Wuxi, China ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[s("i",{staticClass:"iconfont icon-xueshi"}),this._v("High school (Shanghai, China) "),s("br"),this._v("👉 Higher degrees (US) ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[s("i",{staticClass:"iconfont icon-ziyuanldpi"}),this._v("get into programming ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[s("i",{staticClass:"iconfont icon-ziyuanldpi1"}),this._v("more interested in playing games ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[s("i",{staticClass:"iconfont icon-xueshi"}),this._v("art & art history ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[s("i",{staticClass:"iconfont icon-yiwenwenhaoduihuakuangjiedaxianxing"}),this._v("but he realized that ... ")])}],!1,null,"ac73ff5e",null);s.default=f.exports},7083:function(t,s,a){},"7f63":function(t,s,a){"use strict";a("3787")},"8aa5":function(t,s,a){"use strict";var e=a("6547").charAt;t.exports=function(t,s,a){return s+(a?e(t,s).length:1)}},9263:function(t,s,a){"use strict";var e,i,n=a("ad6d"),r=a("9f7f"),c=RegExp.prototype.exec,o=String.prototype.replace,l=c,u=(e=/a/,i=/b*/g,c.call(e,"a"),c.call(i,"a"),0!==e.lastIndex||0!==i.lastIndex),d=r.UNSUPPORTED_Y||r.BROKEN_CARET,f=void 0!==/()??/.exec("")[1];(u||f||d)&&(l=function(t){var s,a,e,i,r=this,l=d&&r.sticky,h=n.call(r),v=r.source,_=0,p=t;return l&&(-1===(h=h.replace("y","")).indexOf("g")&&(h+="g"),p=String(t).slice(r.lastIndex),r.lastIndex>0&&(!r.multiline||r.multiline&&"\n"!==t[r.lastIndex-1])&&(v="(?: "+v+")",p=" "+p,_++),a=new RegExp("^(?:"+v+")",h)),f&&(a=new RegExp("^"+v+"$(?!\\s)",h)),u&&(s=r.lastIndex),e=c.call(l?a:r,p),l?e?(e.input=e.input.slice(_),e[0]=e[0].slice(_),e.index=r.lastIndex,r.lastIndex+=e[0].length):r.lastIndex=0:u&&e&&(r.lastIndex=r.global?e.index+e[0].length:s),f&&e&&e.length>1&&o.call(e[0],a,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(e[i]=void 0)})),e}),t.exports=l},"9f7f":function(t,s,a){"use strict";var e=a("d039");function i(t,s){return RegExp(t,s)}s.UNSUPPORTED_Y=e((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),s.BROKEN_CARET=e((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,s,a){"use strict";var e=a("d039");t.exports=function(t,s){var a=[][t];return!!a&&e((function(){a.call(null,s||function(){throw 1},1)}))}},a8f4:function(t,s,a){"use strict";a("55bc")},ac1f:function(t,s,a){"use strict";var e=a("23e7"),i=a("9263");e({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ae40:function(t,s,a){var e=a("83ab"),i=a("d039"),n=a("5135"),r=Object.defineProperty,c={},o=function(t){throw t};t.exports=function(t,s){if(n(c,t))return c[t];s||(s={});var a=[][t],l=!!n(s,"ACCESSORS")&&s.ACCESSORS,u=n(s,0)?s[0]:o,d=n(s,1)?s[1]:void 0;return c[t]=!!a&&!i((function(){if(l&&!e)return!0;var t={length:-1};l?r(t,1,{enumerable:!0,get:o}):t[1]=1,a.call(t,u,d)}))}},c4cd:function(t,s,a){"use strict";a.r(s);var e=a("d4ec"),i=a("262e"),n=a("2caf"),r=a("9ab4"),c=a("60a3"),o=function(t){Object(i.a)(a,t);var s=Object(n.a)(a);function a(){var t;return Object(e.a)(this,a),(t=s.apply(this,arguments)).loaded=!1,t.show=!1,t}return a}(c.b),l=o=Object(r.a)([c.a],o),u=(a("dbfa"),a("2877")),d=Object(u.a)(l,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"third",class:{loaded:t.loaded}},[a("section",{staticClass:"js"},[a("img",{attrs:{src:"images/js.jpg"},on:{click:function(s){t.loaded=!0}}}),a("div",{staticClass:"_reason"},[t._v("convenient to share things")]),t._m(0)]),a("img",{staticClass:"work",class:{loaded:t.loaded},attrs:{src:"images/work.jpg"},on:{click:function(s){t.loaded=!1}}}),a("aside",{staticClass:"info",class:{loaded:t.loaded}},[t._m(1),a("div",{staticClass:"_row"},[t._v(" to get involved in "),a("span",{on:{click:function(s){t.show=!1}}},[t._v("Angular")])])]),a("section",{staticClass:"angular",class:{show:t.loaded&&!t.show}},[a("img",{attrs:{src:"images/angular.jpg"}}),a("div",{staticClass:"_row _angular"},[t._v("deep researched...")]),a("div",{staticClass:"_row _angular"},[t._v("started his "),a("span",{on:{click:function(s){t.show=!0}}},[t._v("personal open source project...")])])]),a("section",{staticClass:"vuejs",class:{show:t.loaded&&t.show}},[a("img",{attrs:{src:"images/vue.jpg"},on:{click:function(s){return t.$router.replace("/fourth")}}}),a("div",{staticClass:"_row _vue"},[t._v("imitated & combined with...")]),a("div",{staticClass:"_row _vue"},[t._v("was becoming more and more famous...")])]),a("img",{staticClass:"famous",class:{show:t.loaded&&t.show},attrs:{src:"images/famous.png"}})])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_job"},[this._v(" with his hard work..."),s("i",{staticClass:"iconfont icon-code"}),this._v("then he got a job... ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[this._v(" Google Creative Lab"),s("i",{staticClass:"iconfont icon-centericjob"})])}],!1,null,"d4515390",null);s.default=d.exports},d784:function(t,s,a){"use strict";a("ac1f");var e=a("6eeb"),i=a("d039"),n=a("b622"),r=a("9263"),c=a("9112"),o=n("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u="$0"==="a".replace(/./,"$0"),d=n("replace"),f=!!/./[d]&&""===/./[d]("a","$0"),h=!i((function(){var t=/(?:)/,s=t.exec;t.exec=function(){return s.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,s,a,d){var v=n(t),_=!i((function(){var s={};return s[v]=function(){return 7},7!=""[t](s)})),p=_&&!i((function(){var s=!1,a=/a/;return"split"===t&&((a={}).constructor={},a.constructor[o]=function(){return a},a.flags="",a[v]=/./[v]),a.exec=function(){return s=!0,null},a[v](""),!s}));if(!_||!p||"replace"===t&&(!l||!u||f)||"split"===t&&!h){var g=/./[v],m=a(v,""[t],(function(t,s,a,e,i){return s.exec===r?_&&!i?{done:!0,value:g.call(s,a,e)}:{done:!0,value:t.call(a,s,e)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=m[0],w=m[1];e(String.prototype,t,b),e(RegExp.prototype,v,2==s?function(t,s){return w.call(t,this,s)}:function(t){return w.call(t,this)})}d&&c(RegExp.prototype[v],"sham",!0)}},d85f:function(t,s,a){"use strict";a("198c")},dbfa:function(t,s,a){"use strict";a("607c")},e198:function(t,s,a){"use strict";a.r(s);var e=a("d4ec"),i=a("262e"),n=a("2caf"),r=a("9ab4"),c=a("60a3"),o=function(t){Object(i.a)(a,t);var s=Object(n.a)(a);function a(){var t;return Object(e.a)(this,a),(t=s.apply(this,arguments)).loaded=!1,t.show=!1,t}return a}(c.b),l=o=Object(r.a)([c.a],o),u=(a("7f63"),a("2877")),d=Object(u.a)(l,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"fourth"},[a("div",{staticClass:"background",class:{loaded:t.loaded},staticStyle:{"background-image":"url('images/product.jpg')"}}),a("aside",{staticClass:"product",class:{loaded:t.loaded}},[a("div",{staticClass:"_row"},[t._v("Last several years,")]),a("div",{staticClass:"_row"},[t._v("Vue expanded to "),a("span",{on:{click:function(s){t.loaded=!0}}},[t._v("a complete product")]),t._v(" that")])]),a("aside",{staticClass:"nowadays",class:{loaded:t.loaded&&!t.show}},[a("div",{staticClass:"_row"},[t._v("Nowadays:")]),t._m(0),t._m(1),a("br"),a("br"),a("div",{staticClass:"_row"},[t._v("Vue is:")]),t._m(2),t._m(3)]),a("aside",{staticClass:"chinese",class:{loaded:t.loaded&&!t.show}},[a("div",{staticClass:"_row"},[t._v("Because:")]),t._m(4),t._m(5),a("br"),a("br"),a("div",{staticClass:"_row"},[t._v("Now:")]),t._m(6),t._m(7)]),a("section",{staticClass:"become",class:{loaded:t.loaded&&!t.show}},[a("div",{staticClass:"_row",on:{click:function(s){t.show=!0}}},[t._v("It becomes... 👉")])]),a("img",{staticClass:"websites",class:{loaded:t.loaded&&!t.show},attrs:{src:"images/websites.png"},on:{click:function(s){t.loaded=!1}}}),a("section",{staticClass:"both",class:{show:t.loaded&&t.show}},[a("div",{staticClass:"_row"},[t._v("most popular JavaScript frameworks")]),a("img",{attrs:{src:"images/both.jpg"},on:{click:function(s){t.show=!1}}}),a("div",{staticClass:"_row"},[t._v("developers of them:")]),t._m(8),a("br"),a("br"),a("div",{staticClass:"_row _summary",on:{click:function(s){t.show&&t.$router.replace("/fifth")}}},[t._v("All in all... 👉")])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[s("i",{staticClass:"iconfont icon-centericjob"}),this._v(" an independent"),s("br"),this._v("software developer ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[s("i",{staticClass:"iconfont icon-ziyuan1"}),this._v("the project leader ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[s("i",{staticClass:"iconfont icon-B"}),this._v("simple to learn ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[s("i",{staticClass:"iconfont icon-B"}),this._v("use it to easily build ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[this._v(" he is a Chinese"),s("br"),this._v("undoubtedly, "),s("i",{staticClass:"iconfont icon-wode"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[this._v(" Chinese-friendly "),s("i",{staticClass:"iconfont icon-Get-Content"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[this._v(" companies in China "),s("i",{staticClass:"iconfont icon-qunti"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[this._v(" including Baidu, Tencent "),s("i",{staticClass:"iconfont icon-qunti"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_row"},[s("span",[this._v("Google")]),s("span",[this._v("Evan You")]),s("span",[this._v("Facebook")])])}],!1,null,"89584b5a",null);s.default=d.exports},f967:function(t,s,a){"use strict";a.r(s);var e=a("d4ec"),i=a("262e"),n=a("2caf"),r=a("9ab4"),c=a("60a3"),o=function(t){Object(i.a)(a,t);var s=Object(n.a)(a);function a(){var t;return Object(e.a)(this,a),(t=s.apply(this,arguments)).show=!1,t}return a}(c.b),l=o=Object(r.a)([c.a],o),u=(a("d85f"),a("2877")),d=Object(u.a)(l,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"first"},[a("img",{attrs:{src:"images/ajax.png"},on:{click:function(s){t.show=!t.show}}}),a("p",{staticClass:"job",class:{show:t.show}},[t._v("a web front-end programmer")]),a("p",{staticClass:"full-name",class:{show:t.show}},[t._v(" Asynchronous "),a("span",{staticClass:"js",on:{click:function(s){return t.$router.replace("/second")}}},[t._v("JavaScript")]),t._v(" And XML ")])])}),[],!1,null,"05461e34",null);s.default=d.exports}}]);