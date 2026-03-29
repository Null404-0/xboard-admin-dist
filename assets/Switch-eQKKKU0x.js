import{a as A,d as D,e as y,k as de,N as ce,g as ue,f as K}from"./Button-BMy4Aq8T.js";import{y as he,n as z,aE as be,aK as fe,aG as ve,ao as E,aq as i,ap as W,ar as d,ax as L,d as ge,p as a,as as I,r as M,aH as x,V as me}from"./index-CIVLzlTh.js";import{u as we,a as pe}from"./use-css-vars-class-B58SC7NW.js";import{p as H,d as c}from"./index-BlkMem2H.js";function ye(e,r){return he(e,l=>{l!==void 0&&(r.value=l)}),z(()=>e.value===void 0?r.value:e.value)}function xe(e){const{primaryColor:r,opacityDisabled:l,borderRadius:n,textColor3:v}=e;return Object.assign(Object.assign({},fe),{iconColor:v,textColor:"white",loadingColor:r,opacityDisabled:l,railColor:"rgba(0, 0, 0, .14)",railColorActive:r,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${ve(r,{alpha:.2})}`})}const ke={common:be,self:xe},Ce=E("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[i("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),i("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),i("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),E("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[A({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),i("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),i("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),i("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),W("&:focus",[i("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),d("round",[i("rail","border-radius: calc(var(--n-rail-height) / 2);",[i("button","border-radius: calc(var(--n-button-height) / 2);")])]),L("disabled",[L("icon",[d("rubber-band",[d("pressed",[i("rail",[i("button","max-width: var(--n-button-width-pressed);")])]),i("rail",[W("&:active",[i("button","max-width: var(--n-button-width-pressed);")])]),d("active",[d("pressed",[i("rail",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),i("rail",[W("&:active",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),d("active",[i("rail",[i("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),i("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[i("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[A()]),i("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),d("active",[i("rail","background-color: var(--n-rail-color-active);")]),d("loading",[i("rail",`
 cursor: wait;
 `)]),d("disabled",[i("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Se=Object.assign(Object.assign({},I.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]});let R;const _e=ge({name:"Switch",props:Se,slots:Object,setup(e){R===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?R=CSS.supports("width","max(1px)"):R=!1:R=!0);const{mergedClsPrefixRef:r,inlineThemeDisabled:l,mergedComponentPropsRef:n}=we(e),v=I("Switch","-switch",Ce,ke,e,r),g=de(e,{mergedSize(t){var u,h;if(e.size!==void 0)return e.size;if(t)return t.mergedSize.value;const p=(h=(u=n==null?void 0:n.value)===null||u===void 0?void 0:u.Switch)===null||h===void 0?void 0:h.size;return p||"medium"}}),{mergedSizeRef:C,mergedDisabledRef:m}=g,S=M(e.defaultValue),_=me(e,"value"),w=ye(_,S),V=z(()=>w.value===e.checkedValue),o=M(!1),s=M(!1),B=z(()=>{const{railStyle:t}=e;if(t)return t({focused:s.value,checked:V.value})});function F(t){const{"onUpdate:value":u,onChange:h,onUpdateValue:p}=e,{nTriggerFormInput:j,nTriggerFormChange:O}=g;u&&K(u,t),p&&K(p,t),h&&K(h,t),S.value=t,j(),O()}function X(){const{nTriggerFormFocus:t}=g;t()}function Y(){const{nTriggerFormBlur:t}=g;t()}function q(){e.loading||m.value||(w.value!==e.checkedValue?F(e.checkedValue):F(e.uncheckedValue))}function G(){s.value=!0,X()}function J(){s.value=!1,Y(),o.value=!1}function Q(t){e.loading||m.value||t.key===" "&&(w.value!==e.checkedValue?F(e.checkedValue):F(e.uncheckedValue),o.value=!1)}function Z(t){e.loading||m.value||t.key===" "&&(t.preventDefault(),o.value=!0)}const U=z(()=>{const{value:t}=C,{self:{opacityDisabled:u,railColor:h,railColorActive:p,buttonBoxShadow:j,buttonColor:O,boxShadowFocus:ee,loadingColor:te,textColor:ie,iconColor:oe,[x("buttonHeight",t)]:b,[x("buttonWidth",t)]:ae,[x("buttonWidthPressed",t)]:ne,[x("railHeight",t)]:f,[x("railWidth",t)]:$,[x("railBorderRadius",t)]:re,[x("buttonBorderRadius",t)]:le},common:{cubicBezierEaseInOut:se}}=v.value;let P,T,N;return R?(P=`calc((${f} - ${b}) / 2)`,T=`max(${f}, ${b})`,N=`max(${$}, calc(${$} + ${b} - ${f}))`):(P=H((c(f)-c(b))/2),T=H(Math.max(c(f),c(b))),N=c(f)>c(b)?$:H(c($)+c(b)-c(f))),{"--n-bezier":se,"--n-button-border-radius":le,"--n-button-box-shadow":j,"--n-button-color":O,"--n-button-width":ae,"--n-button-width-pressed":ne,"--n-button-height":b,"--n-height":T,"--n-offset":P,"--n-opacity-disabled":u,"--n-rail-border-radius":re,"--n-rail-color":h,"--n-rail-color-active":p,"--n-rail-height":f,"--n-rail-width":$,"--n-width":N,"--n-box-shadow-focus":ee,"--n-loading-color":te,"--n-text-color":ie,"--n-icon-color":oe}}),k=l?pe("switch",z(()=>C.value[0]),U,e):void 0;return{handleClick:q,handleBlur:J,handleFocus:G,handleKeyup:Q,handleKeydown:Z,mergedRailStyle:B,pressed:o,mergedClsPrefix:r,mergedValue:w,checked:V,mergedDisabled:m,cssVars:l?void 0:U,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:r,checked:l,mergedRailStyle:n,onRender:v,$slots:g}=this;v==null||v();const{checked:C,unchecked:m,icon:S,"checked-icon":_,"unchecked-icon":w}=g,V=!(D(S)&&D(_)&&D(w));return a("div",{role:"switch","aria-checked":l,class:[`${e}-switch`,this.themeClass,V&&`${e}-switch--icon`,l&&`${e}-switch--active`,r&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},a("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},y(C,o=>y(m,s=>o||s?a("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),o),a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),s)):null)),a("div",{class:`${e}-switch__button`},y(S,o=>y(_,s=>y(w,B=>a(ce,null,{default:()=>this.loading?a(ue,Object.assign({key:"loading",clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(s||o)?a("div",{class:`${e}-switch__button-icon`,key:s?"checked-icon":"icon"},s||o):!this.checked&&(B||o)?a("div",{class:`${e}-switch__button-icon`,key:B?"unchecked-icon":"icon"},B||o):null})))),y(C,o=>o&&a("div",{key:"checked",class:`${e}-switch__checked`},o)),y(m,o=>o&&a("div",{key:"unchecked",class:`${e}-switch__unchecked`},o)))))}});export{_e as N,ye as u};
