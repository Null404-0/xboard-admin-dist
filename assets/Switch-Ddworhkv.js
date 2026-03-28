import{a as A,e as D,f as y,m as de,N as ce,j as ue,h as W,p as K,d}from"./AddOutline-Et-WcBf-.js";import{y as he,n as z,aE as be,aL as fe,aG as ve,ao as L,aq as i,ap as M,as as c,ax as E,d as ge,p as o,at as I,h as H,aH as x,V as we}from"./index-A2uw8C6e.js";import{u as me,a as pe}from"./use-css-vars-class-BJzDdfJr.js";function ye(e,r){return he(e,l=>{l!==void 0&&(r.value=l)}),z(()=>e.value===void 0?r.value:e.value)}function xe(e){const{primaryColor:r,opacityDisabled:l,borderRadius:n,textColor3:v}=e;return Object.assign(Object.assign({},fe),{iconColor:v,textColor:"white",loadingColor:r,opacityDisabled:l,railColor:"rgba(0, 0, 0, .14)",railColorActive:r,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${ve(r,{alpha:.2})}`})}const ke={common:be,self:xe},Ce=L("switch",`
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
 `),L("base-loading",`
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
 `),M("&:focus",[i("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),c("round",[i("rail","border-radius: calc(var(--n-rail-height) / 2);",[i("button","border-radius: calc(var(--n-button-height) / 2);")])]),E("disabled",[E("icon",[c("rubber-band",[c("pressed",[i("rail",[i("button","max-width: var(--n-button-width-pressed);")])]),i("rail",[M("&:active",[i("button","max-width: var(--n-button-width-pressed);")])]),c("active",[c("pressed",[i("rail",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),i("rail",[M("&:active",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),c("active",[i("rail",[i("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),i("rail",`
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
 `)]),c("active",[i("rail","background-color: var(--n-rail-color-active);")]),c("loading",[i("rail",`
 cursor: wait;
 `)]),c("disabled",[i("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Se=Object.assign(Object.assign({},I.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]});let R;const ze=ge({name:"Switch",props:Se,slots:Object,setup(e){R===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?R=CSS.supports("width","max(1px)"):R=!1:R=!0);const{mergedClsPrefixRef:r,inlineThemeDisabled:l,mergedComponentPropsRef:n}=me(e),v=I("Switch","-switch",Ce,ke,e,r),g=de(e,{mergedSize(t){var u,h;if(e.size!==void 0)return e.size;if(t)return t.mergedSize.value;const p=(h=(u=n==null?void 0:n.value)===null||u===void 0?void 0:u.Switch)===null||h===void 0?void 0:h.size;return p||"medium"}}),{mergedSizeRef:C,mergedDisabledRef:w}=g,S=H(e.defaultValue),_=we(e,"value"),m=ye(_,S),V=z(()=>m.value===e.checkedValue),a=H(!1),s=H(!1),B=z(()=>{const{railStyle:t}=e;if(t)return t({focused:s.value,checked:V.value})});function F(t){const{"onUpdate:value":u,onChange:h,onUpdateValue:p}=e,{nTriggerFormInput:j,nTriggerFormChange:O}=g;u&&W(u,t),p&&W(p,t),h&&W(h,t),S.value=t,j(),O()}function X(){const{nTriggerFormFocus:t}=g;t()}function Y(){const{nTriggerFormBlur:t}=g;t()}function q(){e.loading||w.value||(m.value!==e.checkedValue?F(e.checkedValue):F(e.uncheckedValue))}function G(){s.value=!0,X()}function J(){s.value=!1,Y(),a.value=!1}function Q(t){e.loading||w.value||t.key===" "&&(m.value!==e.checkedValue?F(e.checkedValue):F(e.uncheckedValue),a.value=!1)}function Z(t){e.loading||w.value||t.key===" "&&(t.preventDefault(),a.value=!0)}const U=z(()=>{const{value:t}=C,{self:{opacityDisabled:u,railColor:h,railColorActive:p,buttonBoxShadow:j,buttonColor:O,boxShadowFocus:ee,loadingColor:te,textColor:ie,iconColor:ae,[x("buttonHeight",t)]:b,[x("buttonWidth",t)]:oe,[x("buttonWidthPressed",t)]:ne,[x("railHeight",t)]:f,[x("railWidth",t)]:$,[x("railBorderRadius",t)]:re,[x("buttonBorderRadius",t)]:le},common:{cubicBezierEaseInOut:se}}=v.value;let P,T,N;return R?(P=`calc((${f} - ${b}) / 2)`,T=`max(${f}, ${b})`,N=`max(${$}, calc(${$} + ${b} - ${f}))`):(P=K((d(f)-d(b))/2),T=K(Math.max(d(f),d(b))),N=d(f)>d(b)?$:K(d($)+d(b)-d(f))),{"--n-bezier":se,"--n-button-border-radius":le,"--n-button-box-shadow":j,"--n-button-color":O,"--n-button-width":oe,"--n-button-width-pressed":ne,"--n-button-height":b,"--n-height":T,"--n-offset":P,"--n-opacity-disabled":u,"--n-rail-border-radius":re,"--n-rail-color":h,"--n-rail-color-active":p,"--n-rail-height":f,"--n-rail-width":$,"--n-width":N,"--n-box-shadow-focus":ee,"--n-loading-color":te,"--n-text-color":ie,"--n-icon-color":ae}}),k=l?pe("switch",z(()=>C.value[0]),U,e):void 0;return{handleClick:q,handleBlur:J,handleFocus:G,handleKeyup:Q,handleKeydown:Z,mergedRailStyle:B,pressed:a,mergedClsPrefix:r,mergedValue:m,checked:V,mergedDisabled:w,cssVars:l?void 0:U,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:r,checked:l,mergedRailStyle:n,onRender:v,$slots:g}=this;v==null||v();const{checked:C,unchecked:w,icon:S,"checked-icon":_,"unchecked-icon":m}=g,V=!(D(S)&&D(_)&&D(m));return o("div",{role:"switch","aria-checked":l,class:[`${e}-switch`,this.themeClass,V&&`${e}-switch--icon`,l&&`${e}-switch--active`,r&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},o("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},y(C,a=>y(w,s=>a||s?o("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),a),o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),s)):null)),o("div",{class:`${e}-switch__button`},y(S,a=>y(_,s=>y(m,B=>o(ce,null,{default:()=>this.loading?o(ue,Object.assign({key:"loading",clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(s||a)?o("div",{class:`${e}-switch__button-icon`,key:s?"checked-icon":"icon"},s||a):!this.checked&&(B||a)?o("div",{class:`${e}-switch__button-icon`,key:B?"unchecked-icon":"icon"},B||a):null})))),y(C,a=>a&&o("div",{key:"checked",class:`${e}-switch__checked`},a)),y(w,a=>a&&o("div",{key:"unchecked",class:`${e}-switch__unchecked`},a)))))}});export{ze as N,ye as u};
