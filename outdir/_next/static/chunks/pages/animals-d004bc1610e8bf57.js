(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{8073:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/animals",function(){return n(2494)}])},6643:function(e,r,n){"use strict";var t=n(9669),s=n.n(t),a=n(3361),i=function(e){return toast(e,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};s().defaults.baseURL="https://ims.crionline.africa/api/",s().interceptors.request.use((function(e){var r,n,t,s,i=a.Z.getState();return(null===(r=i.user)||void 0===r||null===(n=r.user)||void 0===n?void 0:n.token)&&(e.headers.Authorization="Bearer ".concat(null===(t=i.user)||void 0===t||null===(s=t.user)||void 0===s?void 0:s.token)),e})),s().interceptors.response.use((function(e){return"201"===(null===e||void 0===e?void 0:e.status)&&i("Request was successful"),e}),(function(e){var r;if(null===(r=e.response)||void 0===r?void 0:r.status){var n=e.response,t=n.data;switch(n.status){case 400:if(null===t||void 0===t?void 0:t.errors){var s=[];for(var a in t.errors)t.errors[a]&&s.push(t.errors[a]);i(s.flat().join("\n"))}else i(t);break;case 201:i("request was successful");break;case 403:case 401:i("You are not authorised to access this page");break;case 404:i("The resource you are accessing is not available at the moment");break;case 500:case 501:case 503:i("Server failed");break;default:i("Failed to load resources")}}}));var o=function(e){return e.data},l={get:function(e){return s().get(e).then(o)},post:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s().post(e,r).then(o)},put:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s().put(e,r).then(o)},del:function(e){return s().delete(e).then(o)}};r.Z=l},4160:function(e,r,n){"use strict";var t=n(5893);r.Z=function(e){var r=e.children,n=e.Page;return(0,t.jsxs)("div",{className:"content-page",children:[(0,t.jsx)("div",{className:"content",children:(0,t.jsxs)("div",{className:"container-fluid",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"page-title-box",children:[(0,t.jsx)("h4",{className:"page-title",children:"Farmer Information"}),(0,t.jsx)("div",{className:"page-title-right",children:(0,t.jsxs)("ol",{className:"breadcrumb m-0",children:[(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)("a",{href:"javascript: void(0);",children:"Farmer"})}),(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)("a",{href:"javascript: void(0);",children:"info"})}),(0,t.jsx)("li",{className:"breadcrumb-item active",children:"Input"})]})})]})})}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h4",{className:"header-title",children:n}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("div",{className:"p-2",children:r})})})]})})})})]})}),(0,t.jsx)("footer",{className:"footer",children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-md-6",children:[(0,t.jsx)("script",{children:"document.write(new Date().getFullYear())"})," \xa9 Zep-Re"]}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:"text-md-end footer-links d-none d-sm-block",children:[(0,t.jsx)("a",{href:"javascript:void(0);",children:"About Us"}),(0,t.jsx)("a",{href:"javascript:void(0);",children:"Help"}),(0,t.jsx)("a",{href:"javascript:void(0);",children:"Contact Us"})]})})]})})})]})}},2494:function(e,r,n){"use strict";n.r(r);var t=n(5893),s=n(4160),a=n(9473),i=n(7294),o=n(6643),l=n(1163);function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){u(e,r,n[r])}))}return e}function m(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return c(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=function(){var e,r,n=(0,a.v9)((function(e){return e.user})),c=(0,i.useState)({}),h=c[0],f=c[1],v=(0,i.useState)({}),p=v[0],j=v[1],b=(0,l.useRouter)();(0,i.useEffect)((function(){var e;o.Z.get("Auth/"+(null===n||void 0===n||null===(e=n.user)||void 0===e?void 0:e.email)).then((function(e){f(e)}))}),[]);return(0,t.jsx)(s.Z,{Page:"Insured amimals",children:(0,t.jsxs)("form",{className:"form-horizontal",onSubmit:function(e){return function(e){var r;e.preventDefault(),f((function(e){return d({},e,{insured:m(e.insured).concat([p])})})),o.Z.put("Auth/"+(null===n||void 0===n||null===(r=n.user)||void 0===r?void 0:r.email),d({},h,{insured:m(h.insured).concat([p])})).then((function(e){b.push("/")}))}(e)},role:"form",children:[(0,t.jsxs)("div",{className:"mb-2 row",children:[(0,t.jsx)("label",{className:"col-md-2 col-form-label",for:"example-placeholder",children:"Animal name"}),(0,t.jsx)("div",{className:"col-md-10",children:(0,t.jsxs)("select",{selected:null===h||void 0===h||null===(e=h.insured)||void 0===e?void 0:e.name,onChange:function(e){j((function(r){return d({},r,{name:e.target.value})}))},className:"form-control",children:[(0,t.jsx)("option",{children:"Oxen"}),(0,t.jsx)("option",{children:"Cows"}),(0,t.jsx)("option",{children:"Heifer"}),(0,t.jsx)("option",{children:"Calfs"}),(0,t.jsx)("option",{children:"Goats"}),(0,t.jsx)("option",{children:"Sheep"}),(0,t.jsx)("option",{children:"Camels"})]})})]}),(0,t.jsxs)("div",{className:"mb-2 row",children:[(0,t.jsx)("label",{className:"col-md-2 col-form-label",for:"example-placeholder",children:"Animal Count"}),(0,t.jsx)("div",{className:"col-md-10",children:(0,t.jsx)("input",{type:"number",className:"form-control",placeholder:"count",name:"number",required:!0,defaultValue:null===h||void 0===h||null===(r=h.insured)||void 0===r?void 0:r.number,onChange:function(e){e.persist();var r=e.target,n="checkbox"===r.type?r.checked:r.value,t=r.name;j((function(e){return d({},e,u({},t,n))}))}})})]}),(0,t.jsx)("div",{className:"d-grid text-center",children:(0,t.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})})]})})}}},function(e){e.O(0,[669,774,888,179],(function(){return r=8073,e(e.s=r);var r}));var r=e.O();_N_E=r}]);