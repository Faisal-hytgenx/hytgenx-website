(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{8750:(e,t,s)=>{Promise.resolve().then(s.bind(s,4804))},4804:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var l=s(5155),a=s(6432);s(862);var r=s(2115);let c=()=>{let[e,t]=(0,r.useState)("1600px"),[s,c]=(0,r.useState)(""),[o,n]=(0,r.useState)(""),[i,d]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[m,h]=(0,r.useState)(""),[p,g]=(0,r.useState)(""),[b,f]=(0,r.useState)(!1),[y,j]=(0,r.useState)("+92");(0,r.useEffect)(()=>{let e=()=>{t(window.innerWidth<962?"2000px":"1400px")};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let[N,v]=(0,r.useState)({firstName:"",lastName:"",email:"",phoneNumber:"",companyName:"",description:"",attachment:null}),w=async e=>{e.preventDefault();let t={firstName:s,lastName:o,email:m,companyName:u,phoneNumber:i,description:p};console.log("form data",t),f(!0);try{if(!(await fetch("http://localhost:8000/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)throw Error("Failed to send email");alert("Email Send successfully!"),c(""),n(""),h(""),x(""),d(""),g(""),f(!1)}catch(e){alert("Failed to submit the form. Please try again.")}};return(0,l.jsx)(a.default,{children:(0,l.jsxs)("div",{className:"relative text-white overflow-hidden",style:{height:e},children:[(0,l.jsx)("div",{className:"h-[600px] bg-center relative rounded-b-[130px] overflow-hidden",style:{backgroundImage:"url('/background/contact-us/map-pattern-lite.png')"},children:(0,l.jsx)("div",{className:"absolute inset-0",style:{backgroundColor:"#262c3f",opacity:.111}})}),(0,l.jsx)("div",{className:"absolute -left-[50%] top-40 transform -translate-y-1/2 opacity-90",children:(0,l.jsx)("img",{src:"/background/effects/ellipse.png",alt:"Left Ellipse",className:"w-full h-full object-cover"})}),(0,l.jsx)("div",{className:"absolute -right-[50%] top-40 transform -translate-y-1/2 opacity-90",children:(0,l.jsx)("img",{src:"/background/effects/ellipse.png",alt:"Left Ellipse",className:"w-full h-full object-cover"})}),(0,l.jsx)("div",{className:"absolute top-[600px] -left-[20%] -translate-y-1/2 w-full opacity-70",children:(0,l.jsx)("img",{src:"/background/ellipse-purple.png",alt:"Bottom Left Ellipse",className:"w-full h-full object-cover"})}),(0,l.jsx)("div",{className:"absolute top-[60%] left-[0%]",children:(0,l.jsx)("img",{src:"/background/contact-us/half-circle.png",alt:"Bottom Left Ellipse",className:"w-12 h-auto object-cover"})}),(0,l.jsx)("div",{className:"absolute top-[1150px] right-[2%]",children:(0,l.jsx)("img",{src:"/background/contact-us/yellow-circle.png",alt:"Bottom Left Ellipse",className:"w-4 h-auto object-cover"})}),(0,l.jsx)("div",{className:"absolute top-[0%] -right-[10%] w-full opacity-80",children:(0,l.jsx)("img",{src:"/background/effects/ellipse.png",alt:"Bottom Right Ellipse",className:"w-full h-full object-cover"})}),(0,l.jsx)("div",{className:"absolute -top-[0%] -right-[40%] w-full opacity-70",children:(0,l.jsx)("img",{src:"/background/effects/ellipse.png",alt:"Bottom Right Ellipse",className:"w-full h-full object-cover"})}),(0,l.jsxs)("div",{className:"flex justify-start items-center flex-col absolute inset-0 mt-20",children:[(0,l.jsx)("span",{className:"text-blue-700 p-4",children:"Contact Us"}),(0,l.jsxs)("div",{className:"w-full px-10 lg:px-20 lg:w-[70%] text-center",children:[(0,l.jsxs)("h2",{className:"text-5xl text-white mb-6",children:["\uD83D\uDCAC How can we"," ",(0,l.jsx)("span",{className:"text-blue-700 font-bold",children:"Help?"})]}),(0,l.jsxs)("p",{className:"text-gray-300 text-sm",children:["At hytGenX, we’re dedicated to providing you with the best solutions for your business needs.",(0,l.jsx)("br",{})," Whether you have questions about our services, want to discuss a project, or need support, we’re just a message or a phone call away!"]})]}),(0,l.jsx)("div",{className:"w-[100%] max-w-3xl bg-black p-8 rounded-lg shadow-lg mt-12 z-40",children:(0,l.jsxs)("form",{className:"space-y-6",onSubmit:w,children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-white text-xs mb-2",children:"First Name"}),(0,l.jsx)("input",{type:"text",className:"w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none text-xs",placeholder:"Enter First Name...",value:s,onChange:e=>c(e.target.value),required:!0})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-white text-xs mb-2",children:"Last Name"}),(0,l.jsx)("input",{type:"text",className:"w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none text-xs",placeholder:"Enter Last Name...",value:o,onChange:e=>n(e.target.value),required:!0})]})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-white text-xs mb-2",children:"Email Address"}),(0,l.jsx)("input",{type:"email",className:"w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none text-xs",placeholder:"Enter Email...",value:m,onChange:e=>h(e.target.value),required:!0})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-white text-xs mb-2",children:"Phone Number"}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("select",{className:"p-3 bg-gray-700 text-white rounded-l-md focus:outline-none text-xs",value:y,onChange:e=>j(e.target.value),children:[{code:"+1",country:"USA"},{code:"+44",country:"UK"},{code:"+92",country:"Pakistan"},{code:"+91",country:"India"},{code:"+61",country:"Australia"},{code:"+86",country:"China"},{code:"+81",country:"Japan"},{code:"+49",country:"Germany"},{code:"+33",country:"France"},{code:"+39",country:"Italy"},{code:"+34",country:"Spain"},{code:"+7",country:"Russia"},{code:"+55",country:"Brazil"},{code:"+27",country:"South Africa"},{code:"+966",country:"Saudi Arabia"},{code:"+971",country:"UAE"},{code:"+20",country:"Egypt"},{code:"+62",country:"Indonesia"},{code:"+234",country:"Nigeria"},{code:"+63",country:"Philippines"},{code:"+31",country:"Netherlands"},{code:"+41",country:"Switzerland"},{code:"+46",country:"Sweden"},{code:"+47",country:"Norway"},{code:"+358",country:"Finland"},{code:"+32",country:"Belgium"},{code:"+43",country:"Austria"},{code:"+351",country:"Portugal"},{code:"+45",country:"Denmark"},{code:"+90",country:"Turkey"}].map(e=>(0,l.jsxs)("option",{value:e.code,children:[e.country," (",e.code,")"]},e.code))}),(0,l.jsx)("input",{type:"text",className:"w-full p-3 bg-gray-700 text-white rounded-r-md focus:outline-none text-xs",placeholder:"Enter Phone Number...",value:i,onChange:e=>d(e.target.value),required:!0})]})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-white text-xs mb-2",children:"Company Name"}),(0,l.jsx)("input",{type:"text",className:"w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none text-xs",placeholder:"Enter Company Name...",value:u,onChange:e=>x(e.target.value),required:!0})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-white text-xs mb-2",children:"Description"}),(0,l.jsx)("textarea",{rows:"4",className:"w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none text-xs",placeholder:"Enter Description...",value:p,onChange:e=>g(e.target.value),required:!0})]}),(0,l.jsx)("button",{type:"submit",className:"w-full p-3 bg-blue-700 rounded-md hover:bg-blue-800 transition text-white font-bold",children:b?"Sending...":"Send Message"})]})}),(0,l.jsxs)("div",{className:"relative mx-auto lg:px-20 px-10",style:{height:"1000px"},children:[(0,l.jsx)("div",{className:"absolute bottom-0 w-full opacity-70",children:(0,l.jsx)("img",{src:"/background/effects/ellipse.png",alt:"Bottom Right Ellipse",className:"w-full h-full object-cover"})}),(0,l.jsx)("div",{className:"mt-20",children:(0,l.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:[(0,l.jsxs)("div",{className:"bg-glass-no-border rounded-lg px-8 py-12 text-center w-full h-full flex flex-col justify-center items-center border border-transparent hover:border-[#fa9f17] transition-all duration-300",children:[(0,l.jsx)("div",{className:"flex justify-center items-center text-6xl mb-4",children:(0,l.jsx)("img",{src:"/background/contact-us/phone.png",alt:"phone-logo"})}),(0,l.jsx)("h2",{className:"text-2xl text-white mb-2 break-words",children:"+1-206-665-5160"}),(0,l.jsx)("p",{className:"text-sm text-gray-300 break-words",children:"Phone call"})]}),(0,l.jsxs)("div",{className:"bg-glass-no-border rounded-lg px-8 py-12 text-center w-full h-full flex flex-col justify-center items-center border border-transparent hover:border-green-500 transition-all duration-300",children:[(0,l.jsx)("div",{className:"flex justify-center items-center text-6xl mb-4",children:(0,l.jsx)("img",{src:"/background/contact-us/contact.png",alt:"contact-logo"})}),(0,l.jsx)("h2",{className:"text-2xl text-white mb-2 break-words",children:"business@hytgenx.com"}),(0,l.jsx)("p",{className:"text-sm text-gray-300 break-words",children:"Quick chat"})]}),(0,l.jsxs)("div",{className:"bg-glass-no-border rounded-lg px-8 py-12 text-center w-full h-full flex flex-col justify-center items-center border border-transparent hover:border-[#056fd2] transition-all duration-300",children:[(0,l.jsx)("div",{className:"flex justify-center items-center text-6xl mb-4",children:(0,l.jsx)("img",{src:"/background/contact-us/location.png",alt:"location-logo"})}),(0,l.jsxs)("h2",{className:"text-2xl text-white mb-2 break-words",children:["522 W Riverside Ave ",(0,l.jsx)("br",{})," Spokane, WA, 99201"]}),(0,l.jsx)("p",{className:"text-sm text-gray-300 break-words",children:"Physical Address"})]})]})})]})]})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[564,862,432,441,517,358],()=>t(8750)),_N_E=e.O()}]);