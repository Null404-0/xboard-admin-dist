import{aD as B,aw as $,as as A,ax as b,f as v,d as t,m as l,h as a,H as p,s as T,t as z,i as c,aK as P}from"./index-D4hu185B.js";import{j as m}from"./Button-DCiSaXd8.js";var j="[object Symbol]";function I(e){return typeof e=="symbol"||B(e)&&$(e)==j}function F(e,o){for(var r=-1,i=e==null?0:e.length,n=Array(i);++r<i;)n[r]=o(e[r],r,e);return n}var g=b?b.prototype:void 0,h=g?g.toString:void 0;function y(e){if(typeof e=="string")return e;if(A(e))return F(e,y)+"";if(I(e))return h?h.call(e):"";var o=e+"";return o=="0"&&1/e==-1/0?"-0":o}function H(e){return e==null?"":y(e)}function N(e,o,r){var i=-1,n=e.length;o<0&&(o=-o>n?0:n+o),r=r>n?n:r,r<0&&(r+=n),n=o>r?0:r-o>>>0,o>>>=0;for(var s=Array(n);++i<n;)s[i]=e[i+o];return s}function O(e,o,r){var i=e.length;return r=r===void 0?i:r,!o&&r>=i?e:N(e,o,r)}var D="\\ud800-\\udfff",U="\\u0300-\\u036f",q="\\ufe20-\\ufe2f",E="\\u20d0-\\u20ff",J=U+q+E,V="\\ufe0e\\ufe0f",Z="\\u200d",K=RegExp("["+Z+D+J+V+"]");function C(e){return K.test(e)}function W(e){return e.split("")}var S="\\ud800-\\udfff",_="\\u0300-\\u036f",G="\\ufe20-\\ufe2f",X="\\u20d0-\\u20ff",Y=_+G+X,Q="\\ufe0e\\ufe0f",ee="["+S+"]",d="["+Y+"]",f="\\ud83c[\\udffb-\\udfff]",oe="(?:"+d+"|"+f+")",k="[^"+S+"]",w="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",re="\\u200d",R=oe+"?",L="["+Q+"]?",ne="(?:"+re+"(?:"+[k,w,x].join("|")+")"+L+R+")*",ie=L+R+ne,se="(?:"+[k+d+"?",d,w,x,ee].join("|")+")",ae=RegExp(f+"(?="+f+")|"+se+ie,"g");function te(e){return e.match(ae)||[]}function le(e){return C(e)?te(e):W(e)}function ue(e){return function(o){o=H(o);var r=C(o)?le(o):void 0,i=r?r[0]:o.charAt(0),n=r?O(r,1).join(""):o.slice(1);return i[e]()+n}}var ce=ue("toUpperCase");const de=v("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[t("svg",`
 height: 1em;
 width: 1em;
 `)]),fe=l({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){m("-base-icon",de,p(e,"clsPrefix"))},render(){return a("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});function be(e,o){const r=l({render(){return o()}});return l({name:ce(e),setup(){var i;const n=(i=T(z,null))===null||i===void 0?void 0:i.mergedIconsRef;return()=>{var s;const u=(s=n==null?void 0:n.value)===null||s===void 0?void 0:s[e];return u?u():a(r,null)}}})}const ge=be("close",()=>a("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},a("g",{fill:"currentColor","fill-rule":"nonzero"},a("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),he=v("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[c("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),t("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),P("disabled",[t("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),t("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),t("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),t("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),t("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),c("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),c("round",[t("&::before",`
 border-radius: 50%;
 `)])]),me=l({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return m("-base-close",he,p(e,"clsPrefix")),()=>{const{clsPrefix:o,disabled:r,absolute:i,round:n,isButtonTag:s}=e;return a(s?"button":"div",{type:s?"button":void 0,tabindex:r||!e.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:s?void 0:"button",disabled:r,class:[`${o}-base-close`,i&&`${o}-base-close--absolute`,r&&`${o}-base-close--disabled`,n&&`${o}-base-close--round`],onMousedown:M=>{e.focusable||M.preventDefault()},onClick:e.onClick},a(fe,{clsPrefix:o},{default:()=>a(ge,null)}))}}});export{me as N,fe as a,F as b,I as i,be as r,H as t};
