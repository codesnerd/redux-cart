(this["webpackJsonpredux-cart"]=this["webpackJsonpredux-cart"]||[]).push([[0],{14:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var c=a(0),i=a.n(c),r=a(4),n=a.n(r),s=(a(14),a(3)),l=a(1),o=Object(s.b)((function(t){return{total_items:t.total_items}}))((function(t){var e=t.total_items;return 0===e?Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)("h1",{className:"hero-heading",children:"Cart is empty"})}):Object(l.jsx)("div",{className:"navbar",children:Object(l.jsxs)("h1",{className:"hero-heading",children:[e," Items in the Cart"]})})})),d=a(2),b="INCREASE",j="DECREASE",u="CLEAR_CART",p="REMOVE",O=Object(s.b)(null,(function(t,e){var a=e.id,c=e.price,i=e.quantity;return{increase:function(){return t({type:b,payload:{id:a,price:c,quantity:i}})},decrease:function(){return t({type:j,payload:{id:a,price:c,quantity:i}})},remove:function(){return t({type:p,payload:{id:a,price:c,quantity:i}})}}}))((function(t){var e=t.id,a=t.name,c=t.category,i=t.description,r=t.price,n=t.quantity,s=t.increase,o=t.decrease,d=t.remove;return Object(l.jsx)("article",{children:Object(l.jsxs)("div",{className:"cart-card",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"cart-item-name",children:a}),Object(l.jsxs)("p",{children:["Category: ",c]}),Object(l.jsxs)("p",{children:["Description: ",i]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Price:"})," $",r,"/-"]})]}),Object(l.jsxs)("div",{className:"quantity",children:[Object(l.jsx)("button",{className:"btn btn-quantity",onClick:function(){return s()},children:"+"}),n,Object(l.jsx)("button",{className:"btn btn-quantity",onClick:function(){return o()},children:"-"}),Object(l.jsx)("button",{className:"btn-remove",onClick:function(){return d()},children:"Remove"})]})]})},e)})),h=Object(s.b)((function(t){return{cart:t.cart,total_items:t.total_items,quantity:t.quantity,bill:t.bill}}))((function(t){var e=t.cart,a=void 0===e?[]:e,c=t.total_items,i=t.bill,r=t.dispatch;return 0===c?Object(l.jsx)("div",{className:"cart-container",children:Object(l.jsx)("a",{className:"link-reload",href:"/redux-cart",children:"RELOAD"})}):Object(l.jsxs)("div",{className:"cart-container",children:[a.map((function(t){return Object(l.jsx)(O,Object(d.a)({},t),t.id)})),Object(l.jsxs)("h4",{className:"cart-card cart-bill",children:[Object(l.jsx)("p",{children:"Total:"}),Object(l.jsxs)("p",{children:["$",i,".00/-"]})]}),Object(l.jsx)("button",{className:"btn btn-clear",onClick:function(){return r({type:u})},children:"Clear Cart"})]})})),y=function(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("p",{children:[Object(l.jsx)("a",{className:"footer-link",href:"https://github.com/codesnerd/redux-cart",children:"</>"})," ","with \u2764\ufe0f by"," ",Object(l.jsx)("a",{className:"footer-link",href:"https://codesnerd.com/",children:"codesnerd"})]})})};var m=function(){return Object(l.jsxs)("main",{children:[Object(l.jsx)(o,{}),Object(l.jsx)(h,{}),Object(l.jsx)(y,{})]})},f=a(8);var x=function(t,e){if(e.type===u)return Object(d.a)(Object(d.a)({},t),{},{cart:[],total_items:0,bill:0});if(e.type===b){var a=t.cart,c=!1;return a=t.cart.map((function(t){return e.payload.id===t.id&&(t=Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity+1}),c=!0),t})),!1===c&&(a=[].concat(Object(f.a)(t.cart),[e.payload])),Object(d.a)(Object(d.a)({},t),{},{cart:a,total_items:t.total_items+1,bill:t.bill+parseFloat(e.payload.price)})}if(e.type===j){var i=t.cart;return i=1===e.payload.quantity?t.cart.filter((function(t){return t.id!==e.payload.id})):t.cart.map((function(t){return e.payload.id===t.id&&(t=Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity-1})),t})),Object(d.a)(Object(d.a)({},t),{},{cart:i,total_items:t.total_items-1,bill:t.bill-parseFloat(e.payload.price)})}return e.type===p?Object(d.a)(Object(d.a)({},t),{},{cart:t.cart.filter((function(t){return t.id!==e.payload.id})),total_items:t.total_items-parseInt(e.payload.quantity),bill:t.bill-parseInt(e.payload.quantity)*parseFloat(e.payload.price)}):t},_=a(9),v={cart:[{id:1,name:"Party Makeup",category:"Makeup",description:"We offer the best party makeup in the town.",price:"100.00",quantity:1},{id:2,name:"No Makeup Look",category:"Makeup",description:"We offer the best no makeup look.",price:"300.00",quantity:1},{id:3,name:"Hair Styling",category:"Hair",description:"We offer the best hair styling.",price:"200.00",quantity:1},{id:4,name:"Cleansing Facial",category:"Facial",description:"We offer the best cleansing facial in the town.",price:"250.00",quantity:1}],total_items:4,bill:850},N=Object(_.a)(x,v,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(s.a,{store:N,children:Object(l.jsx)(m,{})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1e588dc7.chunk.js.map