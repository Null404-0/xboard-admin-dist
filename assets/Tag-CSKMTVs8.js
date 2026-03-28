import{b as X,e as q,c as Pe,f as ze,m as K}from"./Button-Dm9V3Icf.js";import{ag as Ie,a9 as Be,a5 as $e,aa as J,ao as N,ap as f,d as P,p as u,V as U,s as Re,an as Me,ar as v,ax as S,aE as He,aM as we,aG as s,aq as y,as as Y,r as Te,n as F,aH as b,R as Le,N as je}from"./index-DhXyGojB.js";import{u as Ee,a as Oe}from"./use-css-vars-class-3iYd34Yx.js";import{g as _e}from"./index-BlkMem2H.js";var Fe="[object Symbol]";function We(e){return typeof e=="symbol"||Ie(e)&&Be(e)==Fe}function Ae(e,r){for(var o=-1,a=e==null?0:e.length,n=Array(a);++o<a;)n[o]=r(e[o],o,e);return n}var Z=J?J.prototype:void 0,G=Z?Z.toString:void 0;function Q(e){if(typeof e=="string")return e;if($e(e))return Ae(e,Q)+"";if(We(e))return G?G.call(e):"";var r=e+"";return r=="0"&&1/e==-1/0?"-0":r}function Ne(e){return e==null?"":Q(e)}function Ue(e,r,o){var a=-1,n=e.length;r<0&&(r=-r>n?0:n+r),o=o>n?n:o,o<0&&(o+=n),n=r>o?0:o-r>>>0,r>>>=0;for(var c=Array(n);++a<n;)c[a]=e[a+r];return c}function Ve(e,r,o){var a=e.length;return o=o===void 0?a:o,!r&&o>=a?e:Ue(e,r,o)}var De="\\ud800-\\udfff",qe="\\u0300-\\u036f",Ke="\\ufe20-\\ufe2f",Je="\\u20d0-\\u20ff",Ze=qe+Ke+Je,Ge="\\ufe0e\\ufe0f",Xe="\\u200d",Ye=RegExp("["+Xe+De+Ze+Ge+"]");function ee(e){return Ye.test(e)}function Qe(e){return e.split("")}var oe="\\ud800-\\udfff",eo="\\u0300-\\u036f",oo="\\ufe20-\\ufe2f",ro="\\u20d0-\\u20ff",no=eo+oo+ro,lo="\\ufe0e\\ufe0f",ao="["+oe+"]",W="["+no+"]",A="\\ud83c[\\udffb-\\udfff]",so="(?:"+W+"|"+A+")",re="[^"+oe+"]",ne="(?:\\ud83c[\\udde6-\\uddff]){2}",le="[\\ud800-\\udbff][\\udc00-\\udfff]",co="\\u200d",ae=so+"?",se="["+lo+"]?",to="(?:"+co+"(?:"+[re,ne,le].join("|")+")"+se+ae+")*",io=se+ae+to,uo="(?:"+[re+W+"?",W,ne,le,ao].join("|")+")",ho=RegExp(A+"(?="+A+")|"+uo+io,"g");function bo(e){return e.match(ho)||[]}function go(e){return ee(e)?bo(e):Qe(e)}function fo(e){return function(r){r=Ne(r);var o=ee(r)?go(r):void 0,a=o?o[0]:r.charAt(0),n=o?Ve(o,1).join(""):r.slice(1);return a[e]()+n}}var vo=fo("toUpperCase");const Co=N("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[f("svg",`
 height: 1em;
 width: 1em;
 `)]),po=P({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){X("-base-icon",Co,U(e,"clsPrefix"))},render(){return u("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});function mo(e,r){const o=P({render(){return r()}});return P({name:vo(e),setup(){var a;const n=(a=Re(Me,null))===null||a===void 0?void 0:a.mergedIconsRef;return()=>{var c;const t=(c=n==null?void 0:n.value)===null||c===void 0?void 0:c[e];return t?t():u(o,null)}}})}const ko=mo("close",()=>u("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},u("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},u("g",{fill:"currentColor","fill-rule":"nonzero"},u("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),xo=N("base-close",`
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
`,[v("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),f("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),S("disabled",[f("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),f("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),f("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),f("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),f("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),v("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),v("round",[f("&::before",`
 border-radius: 50%;
 `)])]),yo=P({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return X("-base-close",xo,U(e,"clsPrefix")),()=>{const{clsPrefix:r,disabled:o,absolute:a,round:n,isButtonTag:c}=e;return u(c?"button":"div",{type:c?"button":void 0,tabindex:o||!e.focusable?-1:0,"aria-disabled":o,"aria-label":"close",role:c?void 0:"button",disabled:o,class:[`${r}-base-close`,a&&`${r}-base-close--absolute`,o&&`${r}-base-close--disabled`,n&&`${r}-base-close--round`],onMousedown:d=>{e.focusable||d.preventDefault()},onClick:e.onClick},u(po,{clsPrefix:r},{default:()=>u(ko,null)}))}}});function So(e){const{textColor2:r,primaryColorHover:o,primaryColorPressed:a,primaryColor:n,infoColor:c,successColor:t,warningColor:d,errorColor:h,baseColor:k,borderColor:x,opacityDisabled:C,tagColor:B,closeIconColor:z,closeIconColorHover:m,closeIconColorPressed:l,borderRadiusSmall:i,fontSizeMini:p,fontSizeTiny:g,fontSizeSmall:$,fontSizeMedium:R,heightMini:M,heightTiny:H,heightSmall:w,heightMedium:T,closeColorHover:L,closeColorPressed:j,buttonColor2Hover:E,buttonColor2Pressed:O,fontWeightStrong:_}=e;return Object.assign(Object.assign({},we),{closeBorderRadius:i,heightTiny:M,heightSmall:H,heightMedium:w,heightLarge:T,borderRadius:i,opacityDisabled:C,fontSizeTiny:p,fontSizeSmall:g,fontSizeMedium:$,fontSizeLarge:R,fontWeightStrong:_,textColorCheckable:r,textColorHoverCheckable:r,textColorPressedCheckable:r,textColorChecked:k,colorCheckable:"#0000",colorHoverCheckable:E,colorPressedCheckable:O,colorChecked:n,colorCheckedHover:o,colorCheckedPressed:a,border:`1px solid ${x}`,textColor:r,color:B,colorBordered:"rgb(250, 250, 252)",closeIconColor:z,closeIconColorHover:m,closeIconColorPressed:l,closeColorHover:L,closeColorPressed:j,borderPrimary:`1px solid ${s(n,{alpha:.3})}`,textColorPrimary:n,colorPrimary:s(n,{alpha:.12}),colorBorderedPrimary:s(n,{alpha:.1}),closeIconColorPrimary:n,closeIconColorHoverPrimary:n,closeIconColorPressedPrimary:n,closeColorHoverPrimary:s(n,{alpha:.12}),closeColorPressedPrimary:s(n,{alpha:.18}),borderInfo:`1px solid ${s(c,{alpha:.3})}`,textColorInfo:c,colorInfo:s(c,{alpha:.12}),colorBorderedInfo:s(c,{alpha:.1}),closeIconColorInfo:c,closeIconColorHoverInfo:c,closeIconColorPressedInfo:c,closeColorHoverInfo:s(c,{alpha:.12}),closeColorPressedInfo:s(c,{alpha:.18}),borderSuccess:`1px solid ${s(t,{alpha:.3})}`,textColorSuccess:t,colorSuccess:s(t,{alpha:.12}),colorBorderedSuccess:s(t,{alpha:.1}),closeIconColorSuccess:t,closeIconColorHoverSuccess:t,closeIconColorPressedSuccess:t,closeColorHoverSuccess:s(t,{alpha:.12}),closeColorPressedSuccess:s(t,{alpha:.18}),borderWarning:`1px solid ${s(d,{alpha:.35})}`,textColorWarning:d,colorWarning:s(d,{alpha:.15}),colorBorderedWarning:s(d,{alpha:.12}),closeIconColorWarning:d,closeIconColorHoverWarning:d,closeIconColorPressedWarning:d,closeColorHoverWarning:s(d,{alpha:.12}),closeColorPressedWarning:s(d,{alpha:.18}),borderError:`1px solid ${s(h,{alpha:.23})}`,textColorError:h,colorError:s(h,{alpha:.1}),colorBorderedError:s(h,{alpha:.08}),closeIconColorError:h,closeIconColorHoverError:h,closeIconColorPressedError:h,closeColorHoverError:s(h,{alpha:.12}),closeColorPressedError:s(h,{alpha:.18})})}const Po={common:He,self:So},zo={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},Io=N("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[v("strong",`
 font-weight: var(--n-font-weight-strong);
 `),y("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),y("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),y("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),y("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),v("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[y("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),y("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),v("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),v("icon, avatar",[v("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),v("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),v("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[S("disabled",[f("&:hover","background-color: var(--n-color-hover-checkable);",[S("checked","color: var(--n-text-color-hover-checkable);")]),f("&:active","background-color: var(--n-color-pressed-checkable);",[S("checked","color: var(--n-text-color-pressed-checkable);")])]),v("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[S("disabled",[f("&:hover","background-color: var(--n-color-checked-hover);"),f("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Bo=Object.assign(Object.assign(Object.assign({},Y.props),zo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),$o=je("n-tag"),To=P({name:"Tag",props:Bo,slots:Object,setup(e){const r=Te(null),{mergedBorderedRef:o,mergedClsPrefixRef:a,inlineThemeDisabled:n,mergedRtlRef:c,mergedComponentPropsRef:t}=Ee(e),d=F(()=>{var l,i;return e.size||((i=(l=t==null?void 0:t.value)===null||l===void 0?void 0:l.Tag)===null||i===void 0?void 0:i.size)||"medium"}),h=Y("Tag","-tag",Io,Po,e,a);Le($o,{roundRef:U(e,"round")});function k(){if(!e.disabled&&e.checkable){const{checked:l,onCheckedChange:i,onUpdateChecked:p,"onUpdate:checked":g}=e;p&&p(!l),g&&g(!l),i&&i(!l)}}function x(l){if(e.triggerClickOnClose||l.stopPropagation(),!e.disabled){const{onClose:i}=e;i&&ze(i,l)}}const C={setTextContent(l){const{value:i}=r;i&&(i.textContent=l)}},B=Pe("Tag",c,a),z=F(()=>{const{type:l,color:{color:i,textColor:p}={}}=e,g=d.value,{common:{cubicBezierEaseInOut:$},self:{padding:R,closeMargin:M,borderRadius:H,opacityDisabled:w,textColorCheckable:T,textColorHoverCheckable:L,textColorPressedCheckable:j,textColorChecked:E,colorCheckable:O,colorHoverCheckable:_,colorPressedCheckable:ce,colorChecked:te,colorCheckedHover:ie,colorCheckedPressed:de,closeBorderRadius:ue,fontWeightStrong:he,[b("colorBordered",l)]:be,[b("closeSize",g)]:ge,[b("closeIconSize",g)]:fe,[b("fontSize",g)]:ve,[b("height",g)]:V,[b("color",l)]:Ce,[b("textColor",l)]:pe,[b("border",l)]:me,[b("closeIconColor",l)]:D,[b("closeIconColorHover",l)]:ke,[b("closeIconColorPressed",l)]:xe,[b("closeColorHover",l)]:ye,[b("closeColorPressed",l)]:Se}}=h.value,I=_e(M);return{"--n-font-weight-strong":he,"--n-avatar-size-override":`calc(${V} - 8px)`,"--n-bezier":$,"--n-border-radius":H,"--n-border":me,"--n-close-icon-size":fe,"--n-close-color-pressed":Se,"--n-close-color-hover":ye,"--n-close-border-radius":ue,"--n-close-icon-color":D,"--n-close-icon-color-hover":ke,"--n-close-icon-color-pressed":xe,"--n-close-icon-color-disabled":D,"--n-close-margin-top":I.top,"--n-close-margin-right":I.right,"--n-close-margin-bottom":I.bottom,"--n-close-margin-left":I.left,"--n-close-size":ge,"--n-color":i||(o.value?be:Ce),"--n-color-checkable":O,"--n-color-checked":te,"--n-color-checked-hover":ie,"--n-color-checked-pressed":de,"--n-color-hover-checkable":_,"--n-color-pressed-checkable":ce,"--n-font-size":ve,"--n-height":V,"--n-opacity-disabled":w,"--n-padding":R,"--n-text-color":p||pe,"--n-text-color-checkable":T,"--n-text-color-checked":E,"--n-text-color-hover-checkable":L,"--n-text-color-pressed-checkable":j}}),m=n?Oe("tag",F(()=>{let l="";const{type:i,color:{color:p,textColor:g}={}}=e;return l+=i[0],l+=d.value[0],p&&(l+=`a${K(p)}`),g&&(l+=`b${K(g)}`),o.value&&(l+="c"),l}),z,e):void 0;return Object.assign(Object.assign({},C),{rtlEnabled:B,mergedClsPrefix:a,contentRef:r,mergedBordered:o,handleClick:k,handleCloseClick:x,cssVars:n?void 0:z,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender})},render(){var e,r;const{mergedClsPrefix:o,rtlEnabled:a,closable:n,color:{borderColor:c}={},round:t,onRender:d,$slots:h}=this;d==null||d();const k=q(h.avatar,C=>C&&u("div",{class:`${o}-tag__avatar`},C)),x=q(h.icon,C=>C&&u("div",{class:`${o}-tag__icon`},C));return u("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:a,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:t,[`${o}-tag--avatar`]:k,[`${o}-tag--icon`]:x,[`${o}-tag--closable`]:n}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},x||k,u("span",{class:`${o}-tag__content`,ref:"contentRef"},(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e)),!this.checkable&&n?u(yo,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:t,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?u("div",{class:`${o}-tag__border`,style:{borderColor:c}}):null)}});export{To as N,Ae as a,po as b,We as i,mo as r,Ne as t};
