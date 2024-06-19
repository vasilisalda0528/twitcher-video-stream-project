import{_ as a}from"./Translate.dc83ae5b.js";import{P as N}from"./PrimaryButton.09893f04.js";import{S as o}from"./SecondaryButton.d42a89f3.js";import{D as y}from"./DangerButton.dc51b525.js";import{r as c,j as r,a as e,H as w,L as n,f as i,F as k}from"./app.70eb7c5f.js";import{A as b}from"./AuthenticatedLayout.37d9e013.js";import{d as v}from"./index.esm.dc99be0f.js";import{a as _}from"./Front.5dab1473.js";import{K as P}from"./react-tooltip.esm.min.cb5a3799.js";/* empty css                      */import{M as C}from"./Modal.ea61d8f0.js";import{c as V}from"./index.esm.b47aa8e1.js";import D from"./AccountNavi.ce160f74.js";import{M as S}from"./index.esm.b743b834.js";import"./iconBase.19c775b5.js";import"./transition.a700d2e8.js";import"./react-toastify.esm.b9d392e3.js";import"./TextInput.9faad775.js";import"./index.esm.80e20a61.js";function J({videos:s}){const[m,l]=c.exports.useState(!1),[p,x]=c.exports.useState(0),h=(t,d)=>{t.preventDefault(),l(!0),x(d)},u=()=>{i.Inertia.visit(route("videos.delete"),{method:"POST",data:{video:p},preserveState:!1})},g="text-xl font-bold mr-2 md:mr-4 text-indigo-800 dark:text-indigo-500 border-b-2 border-indigo-800",f="text-xl font-bold mr-2 md:mr-4 hover:text-indigo-800 dark:text-white dark:hover:text-indigo-500";return r(b,{children:[e(w,{title:a("Videos")}),e(C,{show:m,onClose:t=>l(!1),children:r("div",{className:"px-5 py-10 text-center",children:[e("h3",{className:"text-xl mb-3 text-zinc-700 dark:text-white",children:a("Are you sure you want to remove this Video?")}),e(y,{onClick:t=>u(),children:a("Yes")}),e(o,{className:"ml-3",onClick:t=>l(!1),children:a("No")})]})}),r("div",{className:"lg:flex lg:space-x-10",children:[e(D,{active:"upload-videos"}),r("div",{className:"ml-0",children:[e(n,{href:route("videos.list"),className:g,children:a("Upload Videos")}),e(n,{href:route("videos.ordered"),className:f,children:a("Videos Ordered")}),r("div",{className:"mt-5 p-4 sm:p-8 bg-white dark:bg-zinc-900 shadow sm:rounded-lg",children:[r("header",{children:[r("h2",{className:"text-lg inline-flex items-center md:text-xl font-medium text-gray-600 dark:text-gray-100",children:[e(S,{className:"mr-2"}),a("My Videos")]}),e("p",{className:"mt-1 mb-2 text-sm text-gray-600 dark:text-gray-400",children:a("Upload & manage videos for the channel")}),e(N,{onClick:t=>i.Inertia.visit(route("videos.upload")),children:a("Upload Video")})]}),e("hr",{className:"my-5"}),s.total===0&&e("div",{className:"text-gray-600 dark:text-white",children:a("You didn't upload any videos yet.")}),s.total!==0&&e("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-10",children:s.data.map(t=>r("div",{className:"w-full md:w-[340px] xl:w-[420px] mt-5",children:[e("video",{className:"w-full rounded-lg aspect-video",controls:!0,disablePictureInPicture:!0,controlsList:"nodownload",poster:t.thumbnail,children:e("source",{src:`${t.videoUrl}`,type:"video/mp4"})}),r("div",{className:"my-3 h-6 overflow-hidden text-gray-600 text-sm font-semibold dark:text-white",children:[e("a",{"data-tooltip-content":t.title,"data-tooltip-id":`tooltip-${t.id}`,children:t.title}),e(P,{anchorSelect:"a"})]}),r("div",{className:"dark:text-white text-gray-600 flex items-center space-x-2 text-xs",children:[e(V,{className:"mr-1"})," ",t.category.category]}),r("div",{className:"mt-3 flex items-center space-x-2 text-sm justify-between",children:[r("span",{className:"text-gray-600 dark:text-white",children:[a("Price")," "]}),e("span",{className:"px-2 py-1 text-sm rounded-lg bg-sky-500 text-white",children:t.price>0?a(":tokensPrice tokens",{tokensPrice:t.price}):a("Free")})]}),r("div",{className:"mt-2 flex items-center space-x-2 text-sm justify-between",children:[r("span",{className:"text-gray-600 dark:text-white",children:[a("Free for subs")," "]}),e("span",{className:"px-2 py-1 rounded-lg bg-teal-500 text-white",children:t.free_for_subs})]}),r("div",{className:"flex mt-2 items-center space-x-2 text-sm justify-between",children:[r("span",{className:"text-gray-600 dark:text-white",children:[a("Views")," "]}),e("span",{className:"px-2 py-1 rounded-lg bg-gray-500 text-white",children:t.views})]}),r("div",{className:"flex mt-2 items-center space-x-2 text-sm justify-between",children:[r("span",{className:"text-gray-600 dark:text-white",children:[a("Earnings")," "]}),e("span",{className:"px-2 py-1 rounded-lg bg-pink-500 text-white",children:t.sales_sum_price?a(":salesTokens tokens",{salesTokens:t.sales_sum_price}):"--"})]}),r("div",{className:"border-t pt-3 mt-3  flex items-center",children:[e(n,{href:route("videos.edit",{video:t.id}),children:e(v,{className:"w-6 h-6 mr-2 text-sky-600"})}),e("button",{onClick:d=>h(d,t.id),children:e(_,{className:"text-red-600 w-5 h-5"})})]})]},`video-${t.id}`))}),s.last_page>1&&r(k,{children:[e("hr",{className:"my-5"}),e("div",{className:"flex text-gray-600 my-3 text-sm",children:a("Page: :pageNumber of :lastPage",{pageNumber:s.current_page,lastPage:s.last_page})}),e(o,{processing:!s.prev_page_url,className:"mr-3",onClick:t=>i.Inertia.visit(s.prev_page_url),children:a("Previous")}),e(o,{processing:!s.next_page_url,onClick:t=>i.Inertia.visit(s.next_page_url),children:a("Next")})]})]})]})]})]})}export{J as default};
