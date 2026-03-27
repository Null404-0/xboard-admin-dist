import{h as G}from"./index-A6PtB-ed.js";import{u as ue,r as ne,a as je,c as Ue,g as Ee,b as te,B as T,A as Oe}from"./AddOutline-BmpnmqLa.js";import{R as Fe,S as We,T as Ae,U as ae,l as Q,n as w,d as L,p as b,V as ee,B as De,W as Ne,m as S,X as V,Y as Ve,Z as Ke,_ as d,$ as H,s as fe,v as Z,h as R,a0 as y,a1 as qe,a2 as Je,f as Ze,c as se,j as x,a as g,w as C,u as N,t as q,r as $,o as ie,b as J,L as Xe,M as Ye}from"./index-qLhjYwDL.js";import{u as Ge,a as Qe}from"./use-css-vars-class-qYO_Zn3b.js";import{u as eo}from"./use-message-CZt9QT83.js";import{u as oo}from"./composables-CZVJ6alU.js";import"./index-42ANG6Sg.js";import"./warn-D1_Pwkgb.js";var ro="[object Symbol]";function lo(e){return typeof e=="symbol"||Fe(e)&&We(e)==ro}function no(e,r){for(var o=-1,a=e==null?0:e.length,l=Array(a);++o<a;)l[o]=r(e[o],o,e);return l}var ce=ae?ae.prototype:void 0,de=ce?ce.toString:void 0;function he(e){if(typeof e=="string")return e;if(Ae(e))return no(e,he)+"";if(lo(e))return de?de.call(e):"";var r=e+"";return r=="0"&&1/e==-1/0?"-0":r}function to(e){return e==null?"":he(e)}function ao(e,r,o){var a=-1,l=e.length;r<0&&(r=-r>l?0:l+r),o=o>l?l:o,o<0&&(o+=l),l=r>o?0:o-r>>>0,r>>>=0;for(var s=Array(l);++a<l;)s[a]=e[a+r];return s}function so(e,r,o){var a=e.length;return o=o===void 0?a:o,!r&&o>=a?e:ao(e,r,o)}var io="\\ud800-\\udfff",co="\\u0300-\\u036f",uo="\\ufe20-\\ufe2f",fo="\\u20d0-\\u20ff",ho=co+uo+fo,vo="\\ufe0e\\ufe0f",go="\\u200d",bo=RegExp("["+go+io+ho+vo+"]");function ve(e){return bo.test(e)}function po(e){return e.split("")}var ge="\\ud800-\\udfff",mo="\\u0300-\\u036f",Co="\\ufe20-\\ufe2f",yo="\\u20d0-\\u20ff",ko=mo+Co+yo,xo="\\ufe0e\\ufe0f",wo="["+ge+"]",X="["+ko+"]",Y="\\ud83c[\\udffb-\\udfff]",zo="(?:"+X+"|"+Y+")",be="[^"+ge+"]",pe="(?:\\ud83c[\\udde6-\\uddff]){2}",me="[\\ud800-\\udbff][\\udc00-\\udfff]",So="\\u200d",Ce=zo+"?",ye="["+xo+"]?",Po="(?:"+So+"(?:"+[be,pe,me].join("|")+")"+ye+Ce+")*",_o=ye+Ce+Po,Bo="(?:"+[be+X+"?",X,pe,me,wo].join("|")+")",Io=RegExp(Y+"(?="+Y+")|"+Bo+_o,"g");function $o(e){return e.match(Io)||[]}function Ro(e){return ve(e)?$o(e):po(e)}function Mo(e){return function(r){r=to(r);var o=ve(r)?Ro(r):void 0,a=o?o[0]:r.charAt(0),l=o?so(o,1).join(""):r.slice(1);return a[e]()+l}}var To=Mo("toUpperCase");const Ho=Q("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[w("svg",`
 height: 1em;
 width: 1em;
 `)]),Lo=L({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){ue("-base-icon",Ho,ee(e,"clsPrefix"))},render(){return b("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});function jo(e,r){const o=L({render(){return r()}});return L({name:To(e),setup(){var a;const l=(a=De(Ne,null))===null||a===void 0?void 0:a.mergedIconsRef;return()=>{var s;const i=(s=l==null?void 0:l.value)===null||s===void 0?void 0:s[e];return i?i():b(o,null)}}})}const Uo=jo("close",()=>b("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},b("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},b("g",{fill:"currentColor","fill-rule":"nonzero"},b("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),Eo=Q("base-close",`
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
`,[S("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),w("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),V("disabled",[w("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),w("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),w("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),w("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),w("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),S("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),S("round",[w("&::before",`
 border-radius: 50%;
 `)])]),Oo=L({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return ue("-base-close",Eo,ee(e,"clsPrefix")),()=>{const{clsPrefix:r,disabled:o,absolute:a,round:l,isButtonTag:s}=e;return b(s?"button":"div",{type:s?"button":void 0,tabindex:o||!e.focusable?-1:0,"aria-disabled":o,"aria-label":"close",role:s?void 0:"button",disabled:o,class:[`${r}-base-close`,a&&`${r}-base-close--absolute`,o&&`${r}-base-close--disabled`,l&&`${r}-base-close--round`],onMousedown:f=>{e.focusable||f.preventDefault()},onClick:e.onClick},b(Lo,{clsPrefix:r},{default:()=>b(Uo,null)}))}}});function Fo(e){const{textColor2:r,primaryColorHover:o,primaryColorPressed:a,primaryColor:l,infoColor:s,successColor:i,warningColor:f,errorColor:p,baseColor:_,borderColor:h,opacityDisabled:z,tagColor:j,closeIconColor:M,closeIconColorHover:P,closeIconColorPressed:t,borderRadiusSmall:v,fontSizeMini:k,fontSizeTiny:m,fontSizeSmall:U,fontSizeMedium:u,heightMini:n,heightTiny:E,heightSmall:I,heightMedium:O,closeColorHover:B,closeColorPressed:F,buttonColor2Hover:W,buttonColor2Pressed:A,fontWeightStrong:D}=e;return Object.assign(Object.assign({},Ke),{closeBorderRadius:v,heightTiny:n,heightSmall:E,heightMedium:I,heightLarge:O,borderRadius:v,opacityDisabled:z,fontSizeTiny:k,fontSizeSmall:m,fontSizeMedium:U,fontSizeLarge:u,fontWeightStrong:D,textColorCheckable:r,textColorHoverCheckable:r,textColorPressedCheckable:r,textColorChecked:_,colorCheckable:"#0000",colorHoverCheckable:W,colorPressedCheckable:A,colorChecked:l,colorCheckedHover:o,colorCheckedPressed:a,border:`1px solid ${h}`,textColor:r,color:j,colorBordered:"rgb(250, 250, 252)",closeIconColor:M,closeIconColorHover:P,closeIconColorPressed:t,closeColorHover:B,closeColorPressed:F,borderPrimary:`1px solid ${d(l,{alpha:.3})}`,textColorPrimary:l,colorPrimary:d(l,{alpha:.12}),colorBorderedPrimary:d(l,{alpha:.1}),closeIconColorPrimary:l,closeIconColorHoverPrimary:l,closeIconColorPressedPrimary:l,closeColorHoverPrimary:d(l,{alpha:.12}),closeColorPressedPrimary:d(l,{alpha:.18}),borderInfo:`1px solid ${d(s,{alpha:.3})}`,textColorInfo:s,colorInfo:d(s,{alpha:.12}),colorBorderedInfo:d(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:d(s,{alpha:.12}),closeColorPressedInfo:d(s,{alpha:.18}),borderSuccess:`1px solid ${d(i,{alpha:.3})}`,textColorSuccess:i,colorSuccess:d(i,{alpha:.12}),colorBorderedSuccess:d(i,{alpha:.1}),closeIconColorSuccess:i,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:i,closeColorHoverSuccess:d(i,{alpha:.12}),closeColorPressedSuccess:d(i,{alpha:.18}),borderWarning:`1px solid ${d(f,{alpha:.35})}`,textColorWarning:f,colorWarning:d(f,{alpha:.15}),colorBorderedWarning:d(f,{alpha:.12}),closeIconColorWarning:f,closeIconColorHoverWarning:f,closeIconColorPressedWarning:f,closeColorHoverWarning:d(f,{alpha:.12}),closeColorPressedWarning:d(f,{alpha:.18}),borderError:`1px solid ${d(p,{alpha:.23})}`,textColorError:p,colorError:d(p,{alpha:.1}),colorBorderedError:d(p,{alpha:.08}),closeIconColorError:p,closeIconColorHoverError:p,closeIconColorPressedError:p,closeColorHoverError:d(p,{alpha:.12}),closeColorPressedError:d(p,{alpha:.18})})}const Wo={common:Ve,self:Fo},Ao={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},Do=Q("tag",`
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
`,[S("strong",`
 font-weight: var(--n-font-weight-strong);
 `),H("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),H("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),H("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),H("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),S("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[H("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),H("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),S("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),S("icon, avatar",[S("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),S("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),S("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[V("disabled",[w("&:hover","background-color: var(--n-color-hover-checkable);",[V("checked","color: var(--n-text-color-hover-checkable);")]),w("&:active","background-color: var(--n-color-pressed-checkable);",[V("checked","color: var(--n-text-color-pressed-checkable);")])]),S("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[V("disabled",[w("&:hover","background-color: var(--n-color-checked-hover);"),w("&:active","background-color: var(--n-color-checked-pressed);")])])])]),No=Object.assign(Object.assign(Object.assign({},fe.props),Ao),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Vo=Je("n-tag"),Ko=L({name:"Tag",props:No,slots:Object,setup(e){const r=R(null),{mergedBorderedRef:o,mergedClsPrefixRef:a,inlineThemeDisabled:l,mergedRtlRef:s,mergedComponentPropsRef:i}=Ge(e),f=Z(()=>{var t,v;return e.size||((v=(t=i==null?void 0:i.value)===null||t===void 0?void 0:t.Tag)===null||v===void 0?void 0:v.size)||"medium"}),p=fe("Tag","-tag",Do,Wo,e,a);qe(Vo,{roundRef:ee(e,"round")});function _(){if(!e.disabled&&e.checkable){const{checked:t,onCheckedChange:v,onUpdateChecked:k,"onUpdate:checked":m}=e;k&&k(!t),m&&m(!t),v&&v(!t)}}function h(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){const{onClose:v}=e;v&&Ue(v,t)}}const z={setTextContent(t){const{value:v}=r;v&&(v.textContent=t)}},j=je("Tag",s,a),M=Z(()=>{const{type:t,color:{color:v,textColor:k}={}}=e,m=f.value,{common:{cubicBezierEaseInOut:U},self:{padding:u,closeMargin:n,borderRadius:E,opacityDisabled:I,textColorCheckable:O,textColorHoverCheckable:B,textColorPressedCheckable:F,textColorChecked:W,colorCheckable:A,colorHoverCheckable:D,colorPressedCheckable:c,colorChecked:oe,colorCheckedHover:ke,colorCheckedPressed:xe,closeBorderRadius:we,fontWeightStrong:ze,[y("colorBordered",t)]:Se,[y("closeSize",m)]:Pe,[y("closeIconSize",m)]:_e,[y("fontSize",m)]:Be,[y("height",m)]:re,[y("color",t)]:Ie,[y("textColor",t)]:$e,[y("border",t)]:Re,[y("closeIconColor",t)]:le,[y("closeIconColorHover",t)]:Me,[y("closeIconColorPressed",t)]:Te,[y("closeColorHover",t)]:He,[y("closeColorPressed",t)]:Le}}=p.value,K=Ee(n);return{"--n-font-weight-strong":ze,"--n-avatar-size-override":`calc(${re} - 8px)`,"--n-bezier":U,"--n-border-radius":E,"--n-border":Re,"--n-close-icon-size":_e,"--n-close-color-pressed":Le,"--n-close-color-hover":He,"--n-close-border-radius":we,"--n-close-icon-color":le,"--n-close-icon-color-hover":Me,"--n-close-icon-color-pressed":Te,"--n-close-icon-color-disabled":le,"--n-close-margin-top":K.top,"--n-close-margin-right":K.right,"--n-close-margin-bottom":K.bottom,"--n-close-margin-left":K.left,"--n-close-size":Pe,"--n-color":v||(o.value?Se:Ie),"--n-color-checkable":A,"--n-color-checked":oe,"--n-color-checked-hover":ke,"--n-color-checked-pressed":xe,"--n-color-hover-checkable":D,"--n-color-pressed-checkable":c,"--n-font-size":Be,"--n-height":re,"--n-opacity-disabled":I,"--n-padding":u,"--n-text-color":k||$e,"--n-text-color-checkable":O,"--n-text-color-checked":W,"--n-text-color-hover-checkable":B,"--n-text-color-pressed-checkable":F}}),P=l?Qe("tag",Z(()=>{let t="";const{type:v,color:{color:k,textColor:m}={}}=e;return t+=v[0],t+=f.value[0],k&&(t+=`a${te(k)}`),m&&(t+=`b${te(m)}`),o.value&&(t+="c"),t}),M,e):void 0;return Object.assign(Object.assign({},z),{rtlEnabled:j,mergedClsPrefix:a,contentRef:r,mergedBordered:o,handleClick:_,handleCloseClick:h,cssVars:l?void 0:M,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender})},render(){var e,r;const{mergedClsPrefix:o,rtlEnabled:a,closable:l,color:{borderColor:s}={},round:i,onRender:f,$slots:p}=this;f==null||f();const _=ne(p.avatar,z=>z&&b("div",{class:`${o}-tag__avatar`},z)),h=ne(p.icon,z=>z&&b("div",{class:`${o}-tag__icon`},z));return b("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:a,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:i,[`${o}-tag--avatar`]:_,[`${o}-tag--icon`]:h,[`${o}-tag--closable`]:l}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},h||_,b("span",{class:`${o}-tag__content`,ref:"contentRef"},(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e)),!this.checkable&&l?b(Oo,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?b("div",{class:`${o}-tag__border`,style:{borderColor:s}}):null)}}),qo=()=>G.get("notice/fetch"),Jo=e=>G.post("notice/save",e),Zo=e=>G.post("notice/delete",{id:e}),Xo={style:{display:"flex","align-items":"center",gap:"12px","margin-bottom":"16px"}},Yo={style:{"margin-top":"12px","font-size":"13px",color:"rgba(255,255,255,0.4)"}},Go={style:{"font-size":"16px","font-weight":"600"}},Qo={style:{width:"100%",border:"1px solid rgba(255,255,255,0.12)","border-radius":"4px",overflow:"hidden"}},er={style:{display:"flex",gap:"1px",padding:"6px 8px","border-bottom":"1px solid rgba(255,255,255,0.08)","flex-wrap":"wrap",background:"rgba(255,255,255,0.02)"}},or={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"16px"}},rr={style:{display:"flex","justify-content":"flex-end",gap:"12px"}},ur=L({__name:"index",setup(e){const r=eo(),o=oo(),a=R(""),l=R(!1),s=R(!1),i=R(!1),f=R([]),p=R([]),_=()=>({id:0,title:"",content:"",img_url:"",tags:[],show:!1}),h=R(_()),z=[{icon:"T",before:"# ",after:""},{icon:"B",before:"**",after:"**"},{icon:"I",before:"_",after:"_"},{icon:"U",before:"<u>",after:"</u>"},{icon:"~~",before:"~~",after:"~~"},{icon:"• ",before:"- ",after:""},{icon:"1.",before:"1. ",after:""},{icon:">",before:"> ",after:""},{icon:"`",before:"`",after:"`"},{icon:"{}",before:"```\n",after:"\n```"},{icon:"---",before:`---
`,after:""}];function j(u,n){h.value.content+=u+n}const M=Z(()=>a.value?f.value.filter(u=>u.title.includes(a.value)):f.value),P={pageSize:50,showSizePicker:!0,pageSizes:[10,20,50,100],showQuickJumper:!0},t=[{type:"selection"},{title:"ID",key:"id",sorter:"default",width:80},{title:"显示状态",key:"show",width:100,render:u=>b(Ko,{type:u.show?"success":"default",size:"small",bordered:!1},()=>u.show?"显示":"隐藏")},{title:"标题",key:"title"},{title:"操作",key:"actions",width:140,fixed:"right",render:u=>b("div",{style:"display:flex;gap:8px"},[b(T,{size:"small",onClick:()=>k(u)},()=>"编辑"),b(T,{size:"small",type:"error",onClick:()=>U(u)},()=>"删除")])}];async function v(){l.value=!0;try{f.value=(await qo()).data||[]}catch{}finally{l.value=!1}}function k(u){h.value=u?{...u}:_(),i.value=!0}async function m(){if(h.value.title){s.value=!0;try{await Jo(h.value),r.success("保存成功"),i.value=!1,await v()}catch(u){r.error((u==null?void 0:u.message)||"保存失败")}finally{s.value=!1}}}function U(u){o.warning({title:"删除公告",content:`确认删除「${u.title}」？`,positiveText:"删除",negativeText:"取消",onPositiveClick:async()=>{try{await Zo(u.id),r.success("删除成功"),await v()}catch(n){r.error((n==null?void 0:n.message)||"删除失败")}}})}return Ze(v),(u,n)=>{const E=$("n-icon"),I=$("n-input"),O=$("n-data-table"),B=$("n-form-item"),F=$("n-dynamic-tags"),W=$("n-switch"),A=$("n-form"),D=$("n-modal");return ie(),se("div",null,[n[14]||(n[14]=x("div",{style:{"margin-bottom":"20px"}},[x("div",{style:{"font-size":"22px","font-weight":"600","margin-bottom":"6px"}},"公告管理"),x("div",{style:{"font-size":"13px",color:"rgba(255,255,255,0.45)"}},"在这里可以配置公告，包括添加、删除、编辑等操作。")],-1)),x("div",Xo,[g(N(T),{type:"primary",onClick:n[0]||(n[0]=c=>k())},{icon:C(()=>[g(E,{component:N(Oe)},null,8,["component"])]),default:C(()=>[n[10]||(n[10]=J(" 添加公告 ",-1))]),_:1}),g(I,{value:a.value,"onUpdate:value":n[1]||(n[1]=c=>a.value=c),placeholder:"搜索公告标题...",style:{width:"240px"},clearable:""},null,8,["value"])]),g(O,{columns:t,data:M.value,loading:l.value,pagination:P,"row-key":c=>c.id,"checked-row-keys":p.value,"onUpdate:checkedRowKeys":n[2]||(n[2]=c=>p.value=c)},null,8,["data","loading","row-key","checked-row-keys"]),x("div",Yo," 已选择 "+q(p.value.length)+" 项，共 "+q(f.value.length)+" 项 ",1),g(D,{show:i.value,"onUpdate:show":n[9]||(n[9]=c=>i.value=c),preset:"card",style:{width:"680px"}},{header:C(()=>[x("div",null,[x("div",Go,q(h.value.id?"编辑公告":"添加公告"),1),n[11]||(n[11]=x("div",{style:{"font-size":"12px",color:"rgba(255,255,255,0.4)","margin-top":"4px"}},"发布或编辑系统公告，支持 Markdown 格式。",-1))])]),footer:C(()=>[x("div",rr,[g(N(T),{onClick:n[8]||(n[8]=c=>i.value=!1)},{default:C(()=>[...n[12]||(n[12]=[J("取消",-1)])]),_:1}),g(N(T),{type:"primary",loading:s.value,onClick:m},{default:C(()=>[...n[13]||(n[13]=[J("提交",-1)])]),_:1},8,["loading"])])]),default:C(()=>[g(A,{model:h.value,"label-placement":"top",style:{"margin-top":"4px"}},{default:C(()=>[g(B,{label:"标题",required:""},{default:C(()=>[g(I,{value:h.value.title,"onUpdate:value":n[3]||(n[3]=c=>h.value.title=c),placeholder:"请输入公告标题"},null,8,["value"])]),_:1}),g(B,{label:"公告内容"},{default:C(()=>[x("div",Qo,[x("div",er,[(ie(),se(Xe,null,Ye(z,c=>g(N(T),{key:c.icon,size:"tiny",text:"",quaternary:"",style:{padding:"3px 7px","font-size":"13px","min-width":"28px"},onClick:oe=>j(c.before,c.after)},{default:C(()=>[J(q(c.icon),1)]),_:2},1032,["onClick"])),64))]),g(I,{value:h.value.content,"onUpdate:value":n[4]||(n[4]=c=>h.value.content=c),type:"textarea",rows:12,bordered:!1,placeholder:"请输入公告内容（支持 Markdown）",style:{"font-family":"monospace","font-size":"13px"}},null,8,["value"])])]),_:1}),g(B,{label:"公告背景"},{default:C(()=>[g(I,{value:h.value.img_url,"onUpdate:value":n[5]||(n[5]=c=>h.value.img_url=c),placeholder:"请输入公告背景图片URL"},null,8,["value"])]),_:1}),x("div",or,[g(B,{label:"节点标签"},{default:C(()=>[g(F,{value:h.value.tags,"onUpdate:value":n[6]||(n[6]=c=>h.value.tags=c)},null,8,["value"])]),_:1}),g(B,{label:"显示"},{default:C(()=>[g(W,{value:h.value.show,"onUpdate:value":n[7]||(n[7]=c=>h.value.show=c)},null,8,["value"])]),_:1})])]),_:1},8,["model"])]),_:1},8,["show"])])}}});export{ur as default};
