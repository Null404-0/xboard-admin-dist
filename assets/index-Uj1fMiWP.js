import{h as X}from"./index-A6PtB-ed.js";import{i as ie,d as ee,r as M,N as we,e as xe,f as ke,c as te,p as ne,h as z,B as A,A as _e}from"./AddOutline-BmpnmqLa.js";import{E as Ce,v as K,Y as Se,a3 as ze,_ as Be,l as le,$ as i,n as ae,m as B,X as re,d as de,p as d,s as ue,h as x,a0 as T,V as $e,f as Re,c as Ve,j as v,a as s,w as h,u as I,t as oe,r as U,o as Fe,b as N}from"./index-qLhjYwDL.js";import{u as Pe,a as Ue}from"./use-css-vars-class-qYO_Zn3b.js";import{u as De}from"./use-message-CZt9QT83.js";import{u as Me}from"./composables-CZVJ6alU.js";import"./index-42ANG6Sg.js";import"./warn-D1_Pwkgb.js";function Te(e,c){return Ce(e,p=>{p!==void 0&&(c.value=p)}),K(()=>e.value===void 0?c.value:e.value)}function je(e){const{primaryColor:c,opacityDisabled:p,borderRadius:u,textColor3:g}=e;return Object.assign(Object.assign({},ze),{iconColor:g,textColor:"white",loadingColor:c,opacityDisabled:p,railColor:"rgba(0, 0, 0, .14)",railColorActive:c,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:u,railBorderRadiusMedium:u,railBorderRadiusLarge:u,buttonBorderRadiusSmall:u,buttonBorderRadiusMedium:u,buttonBorderRadiusLarge:u,boxShadowFocus:`0 0 0 2px ${Be(c,{alpha:.2})}`})}const Oe={common:Se,self:je},Ne=le("switch",`
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
 `),le("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[ie({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),i("checked, unchecked",`
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
 `),ae("&:focus",[i("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),B("round",[i("rail","border-radius: calc(var(--n-rail-height) / 2);",[i("button","border-radius: calc(var(--n-button-height) / 2);")])]),re("disabled",[re("icon",[B("rubber-band",[B("pressed",[i("rail",[i("button","max-width: var(--n-button-width-pressed);")])]),i("rail",[ae("&:active",[i("button","max-width: var(--n-button-width-pressed);")])]),B("active",[B("pressed",[i("rail",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),i("rail",[ae("&:active",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),B("active",[i("rail",[i("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),i("rail",`
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
 `,[ie()]),i("button",`
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
 `)]),B("active",[i("rail","background-color: var(--n-rail-color-active);")]),B("loading",[i("rail",`
 cursor: wait;
 `)]),B("disabled",[i("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ke=Object.assign(Object.assign({},ue.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]});let E;const We=de({name:"Switch",props:Ke,slots:Object,setup(e){E===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?E=CSS.supports("width","max(1px)"):E=!1:E=!0);const{mergedClsPrefixRef:c,inlineThemeDisabled:p,mergedComponentPropsRef:u}=Pe(e),g=ue("Switch","-switch",Ne,Oe,e,c),y=ke(e,{mergedSize(n){var _,C;if(e.size!==void 0)return e.size;if(n)return n.mergedSize.value;const S=(C=(_=u==null?void 0:u.value)===null||_===void 0?void 0:_.Switch)===null||C===void 0?void 0:C.size;return S||"medium"}}),{mergedSizeRef:w,mergedDisabledRef:m}=y,$=x(e.defaultValue),R=$e(e,"value"),k=Te(R,$),l=K(()=>k.value===e.checkedValue),r=x(!1),b=x(!1),D=K(()=>{const{railStyle:n}=e;if(n)return n({focused:b.value,checked:l.value})});function V(n){const{"onUpdate:value":_,onChange:C,onUpdateValue:S}=e,{nTriggerFormInput:o,nTriggerFormChange:J}=y;_&&te(_,n),S&&te(S,n),C&&te(C,n),$.value=n,o(),J()}function H(){const{nTriggerFormFocus:n}=y;n()}function Y(){const{nTriggerFormBlur:n}=y;n()}function q(){e.loading||m.value||(k.value!==e.checkedValue?V(e.checkedValue):V(e.uncheckedValue))}function a(){b.value=!0,H()}function t(){b.value=!1,Y(),r.value=!1}function j(n){e.loading||m.value||n.key===" "&&(k.value!==e.checkedValue?V(e.checkedValue):V(e.uncheckedValue),r.value=!1)}function O(n){e.loading||m.value||n.key===" "&&(n.preventDefault(),r.value=!0)}const L=K(()=>{const{value:n}=w,{self:{opacityDisabled:_,railColor:C,railColorActive:S,buttonBoxShadow:o,buttonColor:J,boxShadowFocus:ce,loadingColor:he,textColor:ve,iconColor:fe,[T("buttonHeight",n)]:F,[T("buttonWidth",n)]:pe,[T("buttonWidthPressed",n)]:me,[T("railHeight",n)]:P,[T("railWidth",n)]:W,[T("railBorderRadius",n)]:be,[T("buttonBorderRadius",n)]:ge},common:{cubicBezierEaseInOut:ye}}=g.value;let Q,G,Z;return E?(Q=`calc((${P} - ${F}) / 2)`,G=`max(${P}, ${F})`,Z=`max(${W}, calc(${W} + ${F} - ${P}))`):(Q=ne((z(P)-z(F))/2),G=ne(Math.max(z(P),z(F))),Z=z(P)>z(F)?W:ne(z(W)+z(F)-z(P))),{"--n-bezier":ye,"--n-button-border-radius":ge,"--n-button-box-shadow":o,"--n-button-color":J,"--n-button-width":pe,"--n-button-width-pressed":me,"--n-button-height":F,"--n-height":G,"--n-offset":Q,"--n-opacity-disabled":_,"--n-rail-border-radius":be,"--n-rail-color":C,"--n-rail-color-active":S,"--n-rail-height":P,"--n-rail-width":W,"--n-width":Z,"--n-box-shadow-focus":ce,"--n-loading-color":he,"--n-text-color":ve,"--n-icon-color":fe}}),f=p?Ue("switch",K(()=>w.value[0]),L,e):void 0;return{handleClick:q,handleBlur:t,handleFocus:a,handleKeyup:j,handleKeydown:O,mergedRailStyle:D,pressed:r,mergedClsPrefix:c,mergedValue:k,checked:l,mergedDisabled:m,cssVars:p?void 0:L,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:c,checked:p,mergedRailStyle:u,onRender:g,$slots:y}=this;g==null||g();const{checked:w,unchecked:m,icon:$,"checked-icon":R,"unchecked-icon":k}=y,l=!(ee($)&&ee(R)&&ee(k));return d("div",{role:"switch","aria-checked":p,class:[`${e}-switch`,this.themeClass,l&&`${e}-switch--icon`,p&&`${e}-switch--active`,c&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},d("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:u},M(w,r=>M(m,b=>r||b?d("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),r),d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),b)):null)),d("div",{class:`${e}-switch__button`},M($,r=>M(R,b=>M(k,D=>d(we,null,{default:()=>this.loading?d(xe,Object.assign({key:"loading",clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(b||r)?d("div",{class:`${e}-switch__button-icon`,key:b?"checked-icon":"icon"},b||r):!this.checked&&(D||r)?d("div",{class:`${e}-switch__button-icon`,key:D?"unchecked-icon":"icon"},D||r):null})))),M(w,r=>r&&d("div",{key:"checked",class:`${e}-switch__checked`},r)),M(m,r=>r&&d("div",{key:"unchecked",class:`${e}-switch__unchecked`},r)))))}}),Ae=()=>X.get("payment/fetch"),se=e=>X.post("payment/save",e),Ee=e=>X.post("payment/delete",{id:e}),He=()=>X.get("payment/getPaymentMethods"),Le={style:{display:"flex","align-items":"center",gap:"12px","margin-bottom":"16px"}},Ie={style:{"margin-top":"12px","font-size":"13px",color:"rgba(255,255,255,0.4)"}},Xe={style:{width:"100%"}},Ye={style:{width:"100%"}},qe={style:{width:"100%"}},Je={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"16px"}},Qe={style:{width:"100%"}},Ge={style:{display:"flex","justify-content":"flex-end",gap:"12px"}},rt=de({__name:"index",setup(e){const c=De(),p=Me(),u=x(""),g=x(!1),y=x(!1),w=x(!1),m=x([]),$=x([]),R=x([]),k=()=>({id:0,name:"",icon:"",notify_domain:"",handling_fee_percent:0,handling_fee_fixed:0,payment:"",enable:!0}),l=x(k()),r=K(()=>u.value?m.value.filter(a=>a.name.includes(u.value)):m.value),b={pageSize:10,showSizePicker:!0,pageSizes:[10,20,50],showQuickJumper:!0},D=[{type:"selection"},{title:"ID",key:"id",sorter:"default",width:80},{title:"启用",key:"enable",width:80,render:a=>d(We,{value:a.enable,size:"small","onUpdate:value":async t=>{a.enable=t;try{await se({...a})}catch{}}})},{title:"显示名称",key:"name"},{title:"支付接口",key:"payment"},{title:"通知地址 ⓘ",key:"notify_domain",render:a=>a.notify_domain||d("span",{style:"color:rgba(255,255,255,0.3)"},"未设置")},{title:"操作",key:"actions",width:140,fixed:"right",render:a=>d("div",{style:"display:flex;gap:8px"},[d(A,{size:"small",onClick:()=>H(a)},()=>"编辑"),d(A,{size:"small",type:"error",onClick:()=>q(a)},()=>"删除")])}];async function V(){g.value=!0;try{const[a,t]=await Promise.all([Ae(),He()]);m.value=a.data||[],$.value=(t.data||[]).map(j=>({label:j.name,value:j.id}))}catch{}finally{g.value=!1}}function H(a){l.value=a?{...a}:k(),w.value=!0}async function Y(){if(!(!l.value.name||!l.value.payment)){y.value=!0;try{await se(l.value),c.success("保存成功"),w.value=!1,await V()}catch(a){c.error((a==null?void 0:a.message)||"保存失败")}finally{y.value=!1}}}function q(a){p.warning({title:"删除支付方式",content:`确认删除「${a.name}」？`,positiveText:"删除",negativeText:"取消",onPositiveClick:async()=>{try{await Ee(a.id),c.success("删除成功"),await V()}catch(t){c.error((t==null?void 0:t.message)||"删除失败")}}})}return Re(V),(a,t)=>{const j=U("n-icon"),O=U("n-input"),L=U("n-data-table"),f=U("n-form-item"),n=U("n-input-number"),_=U("n-select"),C=U("n-form"),S=U("n-modal");return Fe(),Ve("div",null,[t[20]||(t[20]=v("div",{style:{"margin-bottom":"20px"}},[v("div",{style:{"font-size":"22px","font-weight":"600","margin-bottom":"6px"}},"支付配置"),v("div",{style:{"font-size":"13px",color:"rgba(255,255,255,0.45)"}},"在这里可以配置支付方式，包括支付宝、微信等。")],-1)),v("div",Le,[s(I(A),{type:"primary",onClick:t[0]||(t[0]=o=>H())},{icon:h(()=>[s(j,{component:I(_e)},null,8,["component"])]),default:h(()=>[t[11]||(t[11]=N(" 添加支付方式 ",-1))]),_:1}),s(O,{value:u.value,"onUpdate:value":t[1]||(t[1]=o=>u.value=o),placeholder:"搜索支付方式...",style:{width:"240px"},clearable:""},null,8,["value"])]),s(L,{columns:D,data:r.value,loading:g.value,pagination:b,"row-key":o=>o.id,"checked-row-keys":R.value,"onUpdate:checkedRowKeys":t[2]||(t[2]=o=>R.value=o)},null,8,["data","loading","row-key","checked-row-keys"]),v("div",Ie," 已选择 "+oe(R.value.length)+" 项，共 "+oe(m.value.length)+" 项 ",1),s(S,{show:w.value,"onUpdate:show":t[10]||(t[10]=o=>w.value=o),preset:"card",style:{width:"560px"}},{header:h(()=>[N(oe(l.value.id?"编辑支付方式":"添加支付方式"),1)]),footer:h(()=>[v("div",Ge,[s(I(A),{onClick:t[9]||(t[9]=o=>w.value=!1)},{default:h(()=>[...t[18]||(t[18]=[N("取消",-1)])]),_:1}),s(I(A),{type:"primary",loading:y.value,onClick:Y},{default:h(()=>[...t[19]||(t[19]=[N("确认",-1)])]),_:1},8,["loading"])])]),default:h(()=>[s(C,{model:l.value,"label-placement":"top"},{default:h(()=>[s(f,{label:"显示名称",required:""},{default:h(()=>[v("div",Xe,[s(O,{value:l.value.name,"onUpdate:value":t[3]||(t[3]=o=>l.value.name=o),placeholder:"请输入支付名称"},null,8,["value"]),t[12]||(t[12]=v("div",{style:{"font-size":"12px",color:"rgba(255,255,255,0.35)","margin-top":"4px"}},"用于前端显示",-1))])]),_:1}),s(f,{label:"图标URL"},{default:h(()=>[v("div",Ye,[s(O,{value:l.value.icon,"onUpdate:value":t[4]||(t[4]=o=>l.value.icon=o),placeholder:"https://example.com/icon.svg"},null,8,["value"]),t[13]||(t[13]=v("div",{style:{"font-size":"12px",color:"rgba(255,255,255,0.35)","margin-top":"4px"}},"用于前端显示的图标地址",-1))])]),_:1}),s(f,{label:"通知域名"},{default:h(()=>[v("div",qe,[s(O,{value:l.value.notify_domain,"onUpdate:value":t[5]||(t[5]=o=>l.value.notify_domain=o),placeholder:"https://example.com"},null,8,["value"]),t[14]||(t[14]=v("div",{style:{"font-size":"12px",color:"rgba(255,255,255,0.35)","margin-top":"4px"}},"网关通知将发送到该域名",-1))])]),_:1}),v("div",Je,[s(f,{label:"百分比手续费(%)"},{default:h(()=>[s(n,{value:l.value.handling_fee_percent,"onUpdate:value":t[6]||(t[6]=o=>l.value.handling_fee_percent=o),min:0,max:100,precision:2,style:{width:"100%"}},{suffix:h(()=>[...t[15]||(t[15]=[N("%",-1)])]),_:1},8,["value"])]),_:1}),s(f,{label:"固定手续费"},{default:h(()=>[s(n,{value:l.value.handling_fee_fixed,"onUpdate:value":t[7]||(t[7]=o=>l.value.handling_fee_fixed=o),min:0,precision:2,style:{width:"100%"}},{suffix:h(()=>[...t[16]||(t[16]=[N("元",-1)])]),_:1},8,["value"])]),_:1})]),s(f,{label:"支付接口",required:""},{default:h(()=>[v("div",Qe,[s(_,{value:l.value.payment,"onUpdate:value":t[8]||(t[8]=o=>l.value.payment=o),options:$.value,placeholder:"请选择支付接口"},null,8,["value","options"]),t[17]||(t[17]=v("div",{style:{"font-size":"12px",color:"rgba(255,255,255,0.35)","margin-top":"4px"}},"选择要使用的支付接口",-1))])]),_:1})]),_:1},8,["model"])]),_:1},8,["show"])])}}});export{rt as default};
