(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{src:"https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png"}}),n("div",{staticClass:"column is-half is-offset-one-quarter"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.busca,expression:"busca"}],staticClass:"input is-rounded mb-2",attrs:{type:"text",name:"",id:"",placeholder:"Buscar pelo nome"},domProps:{value:t.busca},on:{input:function(e){e.target.composing||(t.busca=e.target.value)}}}),n("button",{staticClass:"button is-primary is-light"},[t._v("Buscar")]),t._l(t.resultadoBusca,(function(t){return n("div",{key:t.id},[n("Pokemon",{attrs:{name:t.name,url:t.url,num:t.id}})],1)}))],2)])},a=[],i=n("5530"),s=(n("d81d"),n("a9e3"),n("ac1f"),n("498a"),n("4de4"),n("caad"),n("2532"),n("b0c0"),n("bc3a")),u=n.n(s),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-4by3 pixel-fix"},[n("img",{attrs:{src:t.currentImg,alt:"Placeholder image"}})])]),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v(t._s(t.num)+" "+t._s(t._f("upper")(t.name)))]),n("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.pokemon.type)+" ")])])]),n("div",{staticClass:"content"},[n("button",{staticClass:"button is-medium is-fullwidth",on:{click:t.mudarSprite}},[t._v("Mudar Sprite")])])])])])},l=[],p=(n("fb6a"),{created:function(){var t=this;u.a.get(this.url).then((function(e){t.pokemon.type=e.data.types[0].type.name,t.pokemon.front=e.data.sprites.front_default,t.pokemon.back=e.data.sprites.back_default,t.currentImg=t.pokemon.front})).catch((function(t){console.error(t)}))},data:function(){return{isFront:!0,currentImg:"",pokemon:{type:"",front:"",back:""}}},props:{num:Number,name:String,url:String},filters:{upper:function(t){var e=t[0].toUpperCase()+t.slice(1);return e}},methods:{mudarSprite:function(){this.isFront?(this.isFront=!1,this.currentImg=this.pokemon.back):(this.isFront=!0,this.currentImg=this.pokemon.front)}}}),d=p,f=(n("7bb8"),n("2877")),m=Object(f["a"])(d,c,l,!1,null,null,null),b=m.exports,h={name:"App",components:{Pokemon:b},data:function(){return{pokemons:[],busca:""}},created:function(){var t=this;u.a.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then((function(e){console.log("Pegou a lista de pokémon"),t.pokemons=e.data.results})).catch((function(t){console.error(t)}))},computed:{pokemonsWithId:function(){return this.pokemons.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{id:Number(/(\d+)\/$/.exec(t.url)[1])})}))},resultadoBusca:function(){var t=this;return this.busca.trim().length?this.pokemonsWithId.filter((function(e){return e.name.toLowerCase().includes(t.busca.toLowerCase())||e.id===Number(t.busca)})):this.pokemonsWithId}}},v=h,g=(n("034f"),Object(f["a"])(v,o,a,!1,null,null,null)),k=g.exports;n("92c6");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(k)}}).$mount("#app")},"7bb8":function(t,e,n){"use strict";n("99b2")},"85ec":function(t,e,n){},"99b2":function(t,e,n){}});
//# sourceMappingURL=app.439d6160.js.map