(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[881],{3130:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authrecovery",function(){return s(3867)}])},6643:function(e,r,s){"use strict";var t=s(9669),n=s.n(t),a=s(3361),o=function(e){return toast(e,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};n().defaults.baseURL="https://ims.crionline.africa/api/",n().interceptors.request.use((function(e){var r,s,t,n,o=a.Z.getState();return(null===(r=o.user)||void 0===r||null===(s=r.user)||void 0===s?void 0:s.token)&&(e.headers.Authorization="Bearer ".concat(null===(t=o.user)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.token)),e})),n().interceptors.response.use((function(e){return"201"===(null===e||void 0===e?void 0:e.status)&&o("Request was successful"),e}),(function(e){var r;if(null===(r=e.response)||void 0===r?void 0:r.status){var s=e.response,t=s.data;switch(s.status){case 400:if(null===t||void 0===t?void 0:t.errors){var n=[];for(var a in t.errors)t.errors[a]&&n.push(t.errors[a]);o(n.flat().join("\n"))}else o(t);break;case 201:o("request was successful");break;case 403:case 401:o("You are not authorised to access this page");break;case 404:o("The resource you are accessing is not available at the moment");break;case 500:case 501:case 503:o("Server failed");break;default:o("Failed to load resources")}}}));var u=function(e){return e.data},i={get:function(e){return n().get(e).then(u)},post:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n().post(e,r).then(u)},put:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n().put(e,r).then(u)},del:function(e){return n().delete(e).then(u)}};r.Z=i},3867:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return d}});var t=s(5893),n=s(1664),a=s.n(n),o=s(9473),u=s(7294),i=s(6643),c=s(1163);function l(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function d(){var e=(0,o.v9)((function(e){return e.user})),r=(0,u.useState)({username:"",password:""}),s=r[0],n=r[1],d=((0,o.I0)(),(0,c.useRouter)()),p=function(e){e.persist();var r=e.target,s="checkbox"===r.type?r.checked:r.value,t=r.name;n((function(e){return function(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{},t=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(r){l(e,r,s[r])}))}return e}({},e,l({},t,s))}))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h4",{className:"mt-0",children:"Reset your password"}),(0,t.jsx)("p",{className:"text-muted mb-4",children:"Enter your new password to access farmer portal."}),(0,t.jsxs)("form",{onSubmit:function(r){return function(r){var t,n;r.preventDefault(),(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.email)?i.Z.post("Auth/reset/"+(null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.email),s).then((function(e){d.push("/login")})):d.push("/login")}(r)},children:[(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsx)("label",{for:"password",className:"form-label",children:"Password"}),(0,t.jsxs)("div",{className:"input-group input-group-merge",children:[(0,t.jsx)("input",{required:!0,defaultValue:s.password,className:"form-control",type:"password",name:"password",placeholder:"Password",onChange:p}),(0,t.jsx)("div",{className:"input-group-text","data-password":"false",children:(0,t.jsx)("span",{className:"password-eye"})})]})]}),(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsx)("label",{for:"password",className:"form-label",children:"Confirm Password"}),(0,t.jsxs)("div",{className:"input-group input-group-merge",children:[(0,t.jsx)("input",{required:!0,defaultValue:s.confirmPassword,className:"form-control",type:"password",name:"ConfirmPassword",placeholder:"Confirm password",onChange:p}),(0,t.jsx)("div",{className:"input-group-text","data-password":"false",children:(0,t.jsx)("span",{className:"password-eye"})})]})]}),(0,t.jsx)("div",{className:"d-grid text-center",children:(0,t.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Reset"})})]}),(0,t.jsx)("footer",{className:"footer footer-alt",children:(0,t.jsxs)("p",{className:"text-muted",children:["Don't have an account?"," ",(0,t.jsx)(a(),{href:"register",children:(0,t.jsx)("a",{className:"text-primary fw-medium ms-1",children:"Sign Up"})})]})})]})}}},function(e){e.O(0,[669,774,888,179],(function(){return r=3130,e(e.s=r);var r}));var r=e.O();_N_E=r}]);