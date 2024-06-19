import{b,r as N,u as P,j as a,a as e,L as w}from"./app.70eb7c5f.js";import{I as l}from"./InputError.afc03b2f.js";import{I as n}from"./InputLabel.b913582c.js";import{P as I}from"./PrimaryButton.09893f04.js";import{T as m}from"./TextInput.9faad775.js";import{_ as t}from"./Translate.dc83ae5b.js";import{W as L}from"./transition.a700d2e8.js";function T({mustVerifyEmail:d,status:u,className:f}){const i=b().props.auth.user,[g,p]=N.exports.useState(i.profile_picture),{data:c,setData:s,post:h,errors:o,processing:v,recentlySuccessful:x}=P({name:i.name,email:i.email,username:i.username}),y=r=>{r.preventDefault(),h(route("profile.update"),{preserveState:!1})},k=r=>{s("profilePicture",r),p((window.URL?URL:webkitURL).createObjectURL(r))};return a("section",{className:f,children:[a("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:t("Profile Information")}),e("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:t("Update your account's profile information and email address.")})]}),a("form",{onSubmit:y,className:"mt-6 space-y-6",children:[a("div",{children:[e(n,{for:"username",value:t("Username")}),e(m,{id:"username",className:"mt-1 block w-full",value:c.username,handleChange:r=>s("username",r.target.value),required:!0,autofocus:!0}),e(l,{className:"mt-2",message:o.username})]}),a("div",{children:[e(n,{for:"name",value:"Name"}),e(m,{id:"name",className:"mt-1 block w-full",value:c.name,handleChange:r=>s("name",r.target.value),required:!0,autofocus:!0,autocomplete:"name"}),e(l,{className:"mt-2",message:o.name})]}),a("div",{children:[e(n,{for:"email",value:"Email"}),e(m,{id:"email",type:"email",className:"mt-1 block w-full",value:c.email,handleChange:r=>s("email",r.target.value),required:!0,autocomplete:"email"}),e(l,{className:"mt-2",message:o.email})]}),a("div",{children:[e(n,{for:"profilePicture",value:t("Profile Picture - 80x80 recommended")}),e(m,{className:"p-1 block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-300 focus:outline-none dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-zinc-900",id:"profilePicture",type:"file",handleChange:r=>k(r.target.files[0])}),e(l,{className:"mt-2",message:o.profilePicture}),e("img",{src:g,alt:"profile picture",className:"h-20 rounded-full mt-2 border-white border-2 dark:border-indigo-200"})]}),d&&i.email_verified_at===null&&a("div",{children:[a("p",{className:"text-sm mt-2 text-gray-800 dark:text-gray-200",children:[t("Your email address is unverified."),e(w,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:t("Click here to re-send the verification email.")})]}),u==="verification-link-sent"&&e("div",{className:"mt-2 font-medium text-sm text-green-600 dark:text-green-400",children:t("A new verification link has been sent to your email address.")})]}),a("div",{className:"flex items-center gap-4",children:[e(I,{processing:v,children:t("Save")}),e(L,{show:x,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:a("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[t("Saved"),"."]})})]})]})]})}export{T as default};
