(this["webpackJsonpredux-cart"]=this["webpackJsonpredux-cart"]||[]).push([[0],[,,,,function(t,e,a){},,,,,,,,,,,function(t,e,a){},function(t,e,a){},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var c=a(0),r=a.n(c),n=a(5),i=a.n(n),s=(a(15),a(16),a(4),a(3)),l=a(1),o=Object(s.b)((function(t){return{total_items:t.total_items}}))((function(t){var e=t.total_items;return 0===e?Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)("h1",{className:"hero-heading",children:"Cart is empty"})}):Object(l.jsx)("div",{className:"navbar",children:Object(l.jsxs)("h1",{className:"hero-heading",children:[e," Items in the Cart"]})})})),d=a(2),b=(a(22),a(23),"INCREASE"),u="DECREASE",j="CLEAR_CART",p="REMOVE",O=Object(s.b)(null,(function(t,e){var a=e.id,c=e.price,r=e.quantity;return{increase:function(){return t({type:b,payload:{id:a,price:c,quantity:r}})},decrease:function(){return t({type:u,payload:{id:a,price:c,quantity:r}})},remove:function(){return t({type:p,payload:{id:a,price:c,quantity:r}})}}}))((function(t){var e=t.id,a=t.name,c=t.category,r=t.description,n=t.price,i=t.quantity,s=t.increase,o=t.decrease,d=t.remove;return Object(l.jsx)("article",{children:Object(l.jsxs)("div",{className:"cart-item",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"cart-item-name",children:a}),Object(l.jsxs)("p",{children:["Category: ",c]}),Object(l.jsxs)("p",{children:["Description: ",r]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Price:"})," $",n,"/-"]})]}),Object(l.jsxs)("div",{className:"quantity",children:[Object(l.jsx)("button",{className:"btn btn-quantity",onClick:function(){return s()},children:"+"}),i,Object(l.jsx)("button",{className:"btn btn-quantity",onClick:function(){return o()},children:"-"}),Object(l.jsx)("button",{className:"btn-remove",onClick:function(){return d()},children:"Remove"})]})]})},e)})),h=Object(s.b)((function(t){return{cart:t.cart,total_items:t.total_items,quantity:t.quantity,bill:t.bill}}))((function(t){var e=t.cart,a=void 0===e?[]:e,c=t.total_items,r=t.bill,n=t.dispatch;return 0===c?Object(l.jsx)("div",{className:"cart-container",children:Object(l.jsx)("a",{className:"link-reload",href:"/redux-cart",children:"RELOAD"})}):Object(l.jsxs)("div",{className:"cart-container",children:[a.map((function(t){return Object(l.jsx)(O,Object(d.a)({},t),t.id)})),Object(l.jsxs)("h4",{className:"cart-item cart-bill",children:[Object(l.jsx)("p",{children:"Total:"}),Object(l.jsxs)("p",{children:["$",r,".00/-"]})]}),Object(l.jsx)("button",{className:"btn btn-clear",onClick:function(){return n({type:j})},children:"Clear Cart"})]})})),m=(a(24),function(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("p",{children:[Object(l.jsx)("a",{className:"footer-link",href:"https://github.com/codesnerd/redux-cart",target:"_blank",rel:"noreferrer",children:"</>"})," ","with \u2764\ufe0f by"," ",Object(l.jsx)("a",{className:"footer-link",href:"https://codesnerd.com",target:"_blank",rel:"noreferrer",children:"codesnerd"})]})})});var y=function(){return Object(l.jsxs)("main",{children:[Object(l.jsx)(o,{}),Object(l.jsx)(h,{}),Object(l.jsx)(m,{})]})},f=[{id:1,name:"Party Makeup",category:"Makeup",description:"We offer the best party makeup in the town.",price:"100.00",quantity:1},{id:2,name:"No Makeup Look",category:"Makeup",description:"We offer the best no makeup look.",price:"300.00",quantity:1},{id:3,name:"Hair Styling",category:"Hair",description:"We offer the best hair styling.",price:"200.00",quantity:1},{id:4,name:"Cleansing Facial",category:"Facial",description:"We offer the best cleansing facial in the town.",price:"250.00",quantity:1}],x=a(9);var _=function(t,e){if(e.type===j)return Object(d.a)(Object(d.a)({},t),{},{cart:[],total_items:0,bill:0});if(e.type===b){var a=t.cart,c=!1;return a=t.cart.map((function(t){return e.payload.id===t.id&&(t=Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity+1}),c=!0),t})),!1===c&&(a=[].concat(Object(x.a)(t.cart),[e.payload])),Object(d.a)(Object(d.a)({},t),{},{cart:a,total_items:t.total_items+1,bill:t.bill+parseFloat(e.payload.price)})}if(e.type===u){var r=t.cart;return r=1===e.payload.quantity?t.cart.filter((function(t){return t.id!==e.payload.id})):t.cart.map((function(t){return e.payload.id===t.id&&(t=Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity-1})),t})),Object(d.a)(Object(d.a)({},t),{},{cart:r,total_items:t.total_items-1,bill:t.bill-parseFloat(e.payload.price)})}return e.type===p?Object(d.a)(Object(d.a)({},t),{},{cart:t.cart.filter((function(t){return t.id!==e.payload.id})),total_items:t.total_items-parseInt(e.payload.quantity),bill:t.bill-parseInt(e.payload.quantity)*parseFloat(e.payload.price)}):t},v=a(10),N={cart:f,total_items:4,bill:850},q=Object(v.a)(_,N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{store:q,children:Object(l.jsx)(y,{})})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.5e19e72d.chunk.js.map