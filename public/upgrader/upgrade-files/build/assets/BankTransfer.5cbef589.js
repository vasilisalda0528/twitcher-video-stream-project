import{b as x,u as b,j as a,a as e,H as y}from"./app.70eb7c5f.js";import{A as k}from"./AuthenticatedLayout.37d9e013.js";import{_ as r}from"./Translate.dc83ae5b.js";import{I as n}from"./InputLabel.b913582c.js";import{T as N}from"./TextInput.9faad775.js";import{T as v}from"./Textarea.d9722257.js";import{P as I}from"./PrimaryButton.09893f04.js";import{I as i}from"./InputError.afc03b2f.js";import"./Front.5dab1473.js";import"./index.esm.dc99be0f.js";import"./iconBase.19c775b5.js";import"./index.esm.b743b834.js";import"./index.esm.b47aa8e1.js";import"./transition.a700d2e8.js";import"./Modal.ea61d8f0.js";import"./react-toastify.esm.b9d392e3.js";import"./index.esm.80e20a61.js";function Y({auth:l,tokenPack:o,bankImg:c,bankInstructions:d}){const{currency_symbol:p,currency_code:w}=x().props,{data:u,setData:s,post:f,processing:g,errors:m,reset:T}=b({proofDetails:"",proofImage:""}),h=t=>{t.preventDefault(),f(route("bank.confirmPurchase",{tokenPack:o.id}))};return a(k,{auth:l,children:[e(y,{title:r("Bank Transfer - Purchase Tokens")}),a("div",{className:"p-4 sm:p-8 bg-white max-w-3xl mx-auto dark:bg-zinc-900 shadow sm:rounded-lg",children:[a("div",{className:"flex justify-center items-center",children:[e("div",{className:"mr-2",children:e("img",{src:c,alt:"bank img",className:"h-14"})}),e("div",{children:e("h3",{className:"text-3xl font-semibold dark:text-white text-center",children:r("Bank Transfer")})})]}),e("h3",{className:"mt-5 text-2xl font-semibold dark:text-white text-center",children:r("You are purchasing :tokensAmount tokens for :moneyAmount",{tokensAmount:o.tokensFormatted,moneyAmount:`${p}${o.price}`})}),e("div",{className:"text-center mt-5 dark:text-white",dangerouslySetInnerHTML:{__html:d}}),e("div",{className:"mt-5 justify-center mx-auto text-center",children:a("form",{onSubmit:h,children:[e(n,{className:"font-bold text-lg",value:r("Enter your payment proof details")}),e(v,{value:u.proofDetails,handleChange:t=>s("proofDetails",t.target.value),rows:"6",required:!0,className:"w-full mt-3"}),e(i,{message:m.proofDetails}),e(n,{className:"mt-5 font-bold text-lg",value:r("Payment Proof Image")}),e(N,{className:"p-1 block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-300 focus:outline-none dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-zinc-900",id:"proof_image",type:"file",accept:"image/jpeg,image/png",required:!0,handleChange:t=>s("proofImage",t.target.files[0])}),e(i,{message:m.proofImage}),e(I,{className:"mt-5 py-4",processing:g,children:r("Send Request")})]})})]})]})}export{Y as default};