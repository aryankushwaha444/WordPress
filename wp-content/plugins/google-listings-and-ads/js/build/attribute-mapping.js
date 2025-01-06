"use strict";(globalThis.webpackChunkgoogle_listings_and_ads=globalThis.webpackChunkgoogle_listings_and_ads||[]).push([[456],{8885:(e,t,a)=>{a.r(t),a.d(t,{default:()=>te});var l=a(1609),n=a(7723),i=a(8242);const o=()=>(0,l.createElement)("p",null,(0,n.__)("Create attribute rules to control what product data gets sent to Google and to manage product attributes in bulk.","google-listings-and-ads"));var s=a(8846),r=a(6427),g=a(6087),c=a(7892),d=a(2159),u=a(6494),p=a(9039),m=a(3905),_=a(1340);const b=({categories:e})=>(0,l.createElement)("div",{className:"gla-attribute-mapping__table-categories-help"},(0,n.sprintf)(
// translators: %d: number of categories.
// translators: %d: number of categories.
(0,n._n)("%d category","%d categories",e.length,"google-listings-and-ads"),e.length)),E=({categories:e,condition:t})=>{const a=e?.split(",")||[],{names:i}=(0,_.A)(a);if(t===m.aL.ALL)return(0,n.__)("All","google-listings-and-ads");const o=a.length>m.vL?(0,n.sprintf)(
// translators: %d: The number of categories.
// translators: %d: The number of categories.
(0,n.__)("+ %d more","google-listings-and-ads"),a.length-m.vL):"";return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("span",null,t===m.aL.ONLY?(0,n.__)("Only in","google-listings-and-ads"):(0,n.__)("All except","google-listings-and-ads")),(0,l.createElement)(p.A,{text:(0,l.createElement)("div",{className:"gla-attribute-mapping__table-categories-tooltip"},i,o&&(0,l.createElement)("span",null,o))},(0,l.createElement)(b,{categories:a})))};var h=a(8468),v=a(8771),y=a(9457),A=a(7568),C=a(7437),f=a(771);const L=({sources:e=[],help:t,...a})=>(0,l.createElement)(l.Fragment,null,(0,l.createElement)(A.A,{options:[{value:"",label:(0,n.__)("Select an option","google-listings-and-ads")},...e.map((e=>({...e,disabled:e.value.includes("disabled:")})))],...a}),t);var x=a(8683),k=a(5092),N=a(1177),w=a(6257);const P="fixed",T="field",S=(0,n.__)("Set a fixed value","google-listings-and-ads"),F=(0,n.__)("Use value from existing product field","google-listings-and-ads"),R=({sources:e=[],onChange:t=h.noop,value:a})=>{const[i,o]=(0,g.useState)(!a||a?.includes(":")?T:P),s=e=>{t(""),o(e)};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(v.A.Subtitle,{className:"gla_attribute_mapping_helper-text"},(0,n.__)("Choose how to assign a value to the target attribute","google-listings-and-ads")),(0,l.createElement)(x.A,{className:"gla-attribute-mapping__radio-control",label:(0,l.createElement)(l.Fragment,null,F,(0,l.createElement)(w.A,{id:`${T}-helper-popover`},(0,l.createElement)("div",null,(0,n.__)("Auto-populate the target attribute with the value of the field you link it to.","google-listings-and-ads")))),onChange:s,value:T,selected:i,collapsible:!0},(0,l.createElement)(L,{value:a,onChange:t,"aria-label":F,sources:e,help:(0,l.createElement)(v.A.HelperText,{className:"gla-attribute-mapping__help-text"},(0,g.createInterpolateElement)((0,n.__)("Can’t find an appropriate field? <link>Create a new attribute</link>","google-listings-and-ads"),{link:(0,l.createElement)(N.A,{context:"attribute-mapping",linkId:"create-new-attribute",href:"/wp-admin/edit.php?post_type=product&page=product_attributes"})}))})),(0,l.createElement)(x.A,{className:"gla-attribute-mapping__radio-control",label:(0,l.createElement)(l.Fragment,null,S,(0,l.createElement)(w.A,{id:`${P}-helper-popover`},(0,l.createElement)("div",null,(0,g.createInterpolateElement)((0,n.__)("Use fixed values to populate the target attribute with a value you specify. For example, you can enter a fixed value of <em>'White'</em> to specify a single color for all your products.","google-listings-and-ads"),{em:(0,l.createElement)("em",null)})))),onChange:s,value:P,selected:i,collapsible:!0},(0,l.createElement)(k.A,{value:a,maxLength:100,onChange:t,"aria-label":S,placeholder:(0,n.__)("Enter a value","google-listings-and-ads")})))};var q=a(4301);const M=({selectedConditionalType:e=m.aL.ALL,selectedCategories:t,onConditionalTypeChange:a=h.noop,onCategoriesChange:i=h.noop})=>{const{categories:o,selected:s}=(0,_.A)(t);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(A.A,{options:[{value:m.aL.ALL,label:(0,n.__)("Apply to all categories","google-listings-and-ads")},{value:m.aL.EXCEPT,label:(0,n.__)("Apply to all categories EXCEPT","google-listings-and-ads")},{value:m.aL.ONLY,label:(0,n.__)("Apply ONLY to these categories","google-listings-and-ads")}],value:e,onChange:a}),(e===m.aL.ONLY||e===m.aL.EXCEPT)&&(0,l.createElement)(q.A,{options:o,isSearchable:!0,placeholder:(0,n.__)("Type for search","google-listings-and-ads"),selected:s,onChange:e=>i(e.map((e=>e.value))),multiple:!0,inlineTags:!0}))};var D=a(3741),j=a(5306),G=a(6473);const I=(0,n.__)("Select default value","google-listings-and-ads"),O=(0,n.__)("Select a Google attribute that you want to manage","google-listings-and-ads"),Y=(e=[])=>[...e.map((e=>({value:e.id,label:e.label})))],X=({rule:e,onRequestClose:t=h.noop})=>{const[a,i]=(0,g.useState)(e?{...e}:{category_condition_type:m.aL.ALL}),[o,s]=(0,g.useState)(!1),{updateMappingRule:r,createMappingRule:d}=(0,j.j)(),{data:u}=(0,C.A)(),{data:p=[],hasFinishedResolution:_}=(0,f.A)(a.attribute),b=u.find((({id:e})=>e===a.attribute))?.enum||!1,E=Y(p),x=[{value:"",label:(0,n.__)("Select an attribute","google-listings-and-ads")},...Y(u)],k=a.source&&a.attribute&&(a.category_condition_type===m.aL.ALL||a.categories?.length>0)&&!(0,h.isEqual)(a,e),N=e=>{i((e=>({...e,categories:e.category_condition_type===m.aL.ALL?"":e.categories}))(e))},w=e=>{N({...a,source:e})},P=()=>{o||t("dismiss")};return(0,l.createElement)(y.A,{overflow:"visible",onRequestClose:P,className:"gla-attribute-mapping__rule-modal",title:e?(0,n.__)("Manage attribute rule","google-listings-and-ads"):(0,n.__)("Create attribute rule","google-listings-and-ads"),buttons:[(0,l.createElement)(c.A,{disabled:o,key:"cancel",isLink:!0,onClick:P},(0,n.__)("Cancel","google-listings-and-ads")),(0,l.createElement)(c.A,{disabled:!k||o,key:"save-rule",isPrimary:!0,text:o?(0,n.__)("Saving…","google-listings-and-ads"):(0,n.__)("Save rule","google-listings-and-ads"),eventName:"gla_attribute_mapping_save_rule_click",eventProps:{context:e?"attribute-mapping-manage-rule-modal":"attribute-mapping-create-rule-modal"},onClick:async()=>{s(!0);try{e?(await r(a),(0,G.ce)("gla_attribute_mapping_update_rule",{context:"attribute-mapping-manage-rule-modal"})):(await d(a),(0,G.ce)("gla_attribute_mapping_create_rule",{context:"attribute-mapping-create-rule-modal"})),t("confirm")}catch(e){s(!1)}}})]},(0,l.createElement)(v.A,null,(0,l.createElement)(v.A.Title,null,(0,n.__)("Target attribute","google-listings-and-ads")),(0,l.createElement)(v.A.Subtitle,{className:"gla_attribute_mapping_helper-text"},O),(0,l.createElement)(A.A,{value:a.attribute,"aria-label":O,onChange:e=>{N({...a,attribute:e,source:""})},options:x})),!_&&(0,l.createElement)(D.A,null),E.length>0&&_&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(v.A,null,(0,l.createElement)(v.A.Title,null,b?I:(0,n.__)("Assign value","google-listings-and-ads")),b?(0,l.createElement)(L,{sources:E,onChange:w,value:a.source,"aria-label":I}):(0,l.createElement)(R,{sources:E,onChange:w,value:a.source})),(0,l.createElement)(v.A,null,(0,l.createElement)(v.A.Title,null,(0,n.__)("Categories","google-listings-and-ads")),(0,l.createElement)(M,{selectedConditionalType:a.category_condition_type,selectedCategories:a.categories?.length?a.categories.split(","):[],onConditionalTypeChange:e=>{N({...a,category_condition_type:e})},onCategoriesChange:e=>{N({...a,categories:e.join(",")})}}))))},$=({onRequestClose:e=h.noop,rule:t})=>{const[a,i]=(0,g.useState)(!1),{deleteMappingRule:o}=(0,j.j)(),s=()=>{a||e("dismiss")};return(0,l.createElement)(y.A,{onRequestClose:s,title:(0,n.__)("Delete attribute rule?","google-listings-and-ads"),buttons:[(0,l.createElement)(c.A,{disabled:a,key:"cancel",isLink:!0,onClick:s},(0,n.__)("Cancel","google-listings-and-ads")),(0,l.createElement)(c.A,{disabled:a,key:"delete-rule",isPrimary:!0,text:a?(0,n.__)("Deleting…","google-listings-and-ads"):(0,n.__)("Delete attribute rule","google-listings-and-ads"),eventName:"gla_attribute_mapping_delete_rule_click",eventProps:{context:"attribute-mapping-delete-rule-modal"},onClick:async()=>{i(!0);try{await o(t),(0,G.ce)("gla_attribute_mapping_delete_rule",{context:"attribute-mapping-delete-rule-modal"}),e("confirm")}catch(e){i(!1)}}})]},(0,l.createElement)("div",null,(0,l.createElement)("p",null,(0,n.__)("Deleting a rule does’t affect any data that has already been submitted to Google.","google-listings-and-ads")),(0,l.createElement)("p",null,(0,n.__)("Product data is re-submitted to Google every 30 days to ensure that the information in your product listings are up-to-date.","google-listings-and-ads")),(0,l.createElement)("p",null,(0,n.__)("To ensure your products continue to be approved and promoted by Google, make sure that your product fields include all the required information.","google-listings-and-ads"))))};var U=a(8443),V=a(33),W=a(6520),z=a(3376);const B=()=>{const{data:e,start:t}=(0,V.A)({path:`${W.RV}/mc/mapping/sync`});if((0,g.useEffect)((()=>{t()}),[t]),!e)return null;const a=(0,n.__)("Scheduled for sync","google-listings-and-ads"),i=e.last_sync?(0,U.format)(z.Z,new Date(1e3*e.last_sync)):(0,n.__)("Never","google-listings-and-ads");return(0,l.createElement)(r.Flex,{justify:"end",align:"center"},(0,l.createElement)("strong",null,(0,n.__)("Last sync:","google-listings-and-ads")),(0,l.createElement)("span",{className:"gla-attribute-mapping__sync-status"},e.is_scheduled?a:i),(0,l.createElement)(w.A,{id:"gla-attribute-mapping-last-sync-helper-popover",position:"bottom left"},(0,l.createElement)("div",null,(0,n.__)("When an attribute rule is added or changed, data will be synced to Google Merchant Center via an async job. Note that it may take a while for the update to show up on Merchant Center, especially if it involves products that have not been synced and approved before.","google-listings-and-ads"))))};var H=a(993),Z=a(1396);const J=[{key:"attribute",label:(0,n.__)("Target Attribute","google-listings-and-ads"),isLeftAligned:!0,required:!0},{key:"source",label:(0,n.__)("Data Source / Default Value","google-listings-and-ads"),isLeftAligned:!0,required:!0},{key:"categories",label:(0,n.__)("Categories","google-listings-and-ads"),isLeftAligned:!0,required:!0},{key:"controls",label:"",required:!0}],K=()=>{const{page:e,setPage:t}=(0,Z.A)("attribute-mapping"),{data:{rules:a,total:o},hasFinishedResolution:p}=(0,H.A)({page:e,perPage:10}),{data:m,hasFinishedResolution:_}=(0,C.A)(),b=!_||!p;return(0,g.useEffect)((()=>{p&&0===a?.length&&e>1&&t(e-1)}),[e,a,p,t]),(0,l.createElement)(d.A,null,(0,l.createElement)(i.A.Card,null,(0,l.createElement)(r.CardBody,{size:null},b?(0,l.createElement)(s.TablePlaceholder,{headers:J,caption:(0,n.__)("Loading Attribute Mapping rules","google-listings-and-ads")}):(0,l.createElement)(s.Table,{emptyMessage:(0,n.__)("You have no attribute rules","google-listings-and-ads"),caption:(0,n.__)("Attribute Mapping configuration","google-listings-and-ads"),headers:J,rows:a.map((e=>{return[{display:(t=e.attribute,m.find((e=>e.id===t))?.label||"")},{display:(0,l.createElement)("span",{className:"gla-attribute-mapping__table-label"},e.source)},{display:(0,l.createElement)("span",{className:"gla-attribute-mapping__table-categories"},(0,l.createElement)(E,{categories:e.categories,condition:e.category_condition_type}))},{display:(0,l.createElement)(r.Flex,{justify:"end"},(0,l.createElement)(r.FlexItem,null,(0,l.createElement)(u.A,{button:(0,l.createElement)(c.A,{isLink:!0,text:(0,n.__)("Edit","google-listings-and-ads"),eventName:"gla_modal_open",eventProps:{context:"attribute-mapping-manage-rule-modal"}}),modal:(0,l.createElement)(X,{rule:e,onRequestClose:e=>{(0,G.ce)("gla_modal_closed",{context:"attribute-mapping-manage-rule-modal",action:e})}})})),(0,l.createElement)(r.FlexItem,null,(0,l.createElement)(u.A,{button:(0,l.createElement)(c.A,{isLink:!0,text:(0,n.__)("Delete","google-listings-and-ads"),eventName:"gla_modal_open",eventProps:{context:"attribute-mapping-delete-rule-modal"}}),modal:(0,l.createElement)($,{rule:e,onRequestClose:e=>{(0,G.ce)("gla_modal_closed",{context:"attribute-mapping-delete-rule-modal",action:e})}})})))}];var t}))})),(0,l.createElement)(r.CardFooter,{align:"between",className:"gla-attribute-mapping__table-footer"},(0,l.createElement)(u.A,{button:(0,l.createElement)(c.A,{isSecondary:!0,text:(0,n.__)("Create attribute rule","google-listings-and-ads"),eventName:"gla_modal_open",eventProps:{context:"attribute-mapping-create-rule-modal"}}),modal:(0,l.createElement)(X,{onRequestClose:e=>{(0,G.ce)("gla_modal_closed",{context:"attribute-mapping-create-rule-modal",action:e})}})}),(0,l.createElement)(s.Pagination,{className:"gla-attribute-mapping__pagination",page:e,perPage:10,total:o,showPagePicker:!1,showPerPagePicker:!1,onPageChange:(e,a)=>{t(e),(0,G.Xh)("attribute-mapping-rules",e,a)}}),(0,l.createElement)(B,null))))};var Q=a(9927),ee=a(5246);const te=()=>(0,l.createElement)("div",{className:"gla-attribute-mapping"},(0,l.createElement)(Q.A,null),(0,l.createElement)(ee.A,null),(0,l.createElement)(i.A,{title:(0,n.__)("Manage attributes","google-listings-and-ads"),description:(0,l.createElement)(o,null)},(0,l.createElement)(K,null)))}}]);