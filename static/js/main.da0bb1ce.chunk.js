(this["webpackJsonpada-widget-stripe"]=this["webpackJsonpada-widget-stripe"]||[]).push([[0],{1:function(e,t,a){e.exports={wrapper:"App_wrapper__RCHjb",stripeWrapper:"App_stripeWrapper__2xGp3",stripeBtn:"App_stripeBtn__35gA4",errorsWrapper:"App_errorsWrapper__3VnvC",msg:"App_msg__jRWrr",error:"App_error__1LS0k App_msg__jRWrr",success:"App_success__3gLML App_msg__jRWrr"}},10:function(e,t,a){e.exports=a(20)},15:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(3),s=a.n(n),c=(a(15),a(8)),o=a(4),p=a(5),l=a(9),m=a(7),d=a(6),u=a.n(d),g=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(t).reduce((function(i,r){var n=a.length?a+".":"";return"object"===typeof t[r]&&null!==t[r]?Object.assign(i,e(t[r],n+r)):i[n+r]=t[r],i}),{})},A=a(1),v=a.n(A),b=new(a(19)),_=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).stripeRef=r.a.createRef(),e.state={isActive:!1,stripeKey:"",initStripe:!1,name:"",description:"",image:"",panelLabel:"",amount:0,currency:"",locale:"",email:"",shippingAddress:!1,billingAddress:!1,zipCode:!1,alipay:!1,bitcoin:!1,allowRememberMe:!1,errorMsgs:{initialized:"ADA SDK could not be initialized"},errors:[],success:!1},e.sendDataToADA=function(t){b.widgetIsActive&&b.sendUserData(Object(c.a)({},g(t)),(function(){e.setState({isActive:!1,success:!0})}))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;try{b.init((function(t){"WIDGET_INITIALIZED"===t.type&&e.setState({isActive:!0,stripeKey:t.metaData.stripe_key,name:t.metaData.name,description:t.metaData.description,image:t.metaData.image,panelLabel:t.metaData.panel_label,amount:+t.metaData.amount||0,currency:t.metaData.currency,locale:t.metaData.locale,email:t.metaData.email,shippingAddress:"true"===t.metaData.shipping_address,billingAddress:"true"===t.metaData.billing_address,zipCode:"true"===t.metaData.zip_code,alipay:"true"===t.metaData.alipay,bitcoin:"true"===t.metaData.bitcoin,allowRememberMe:"true"===t.metaData.allow_remember_me})}))}catch(t){console.error("ADA SDK could not be initialized"),this.setState({isActive:!1,errors:["initialized"]})}}},{key:"componentDidUpdate",value:function(e,t){var a=this,i=this.state,r=i.isActive,n=i.stripeKey;!b.widgetIsActive&&t.isActive&&this.setState({isActive:!1}),r&&!t.isActive&&n&&!t.stripeKey&&this.setState({initStripe:!0},(function(){var e,t=null===(e=a.stripeRef.current)||void 0===e?void 0:e.getElementsByTagName("button")[0];t&&t.click()}))}},{key:"render",value:function(){var e=this.state,t=e.isActive,a=e.stripeKey,i=e.initStripe,n=e.name,s=e.description,c=e.image,o=e.panelLabel,p=e.amount,l=e.currency,m=e.locale,d=e.email,g=e.shippingAddress,A=e.billingAddress,b=e.zipCode,_=e.alipay,y=e.bitcoin,h=e.allowRememberMe,f=e.errorMsgs,D=e.errors,w=e.success,j={name:n,description:s,image:c,panelLabel:o,amount:p,currency:l,locale:m,email:d,shippingAddress:g,billingAddress:A,zipCode:b,alipay:_,bitcoin:y,allowRememberMe:h};return Object.keys(j).forEach((function(e){return void 0===j[e]&&delete j[e]})),r.a.createElement("div",{className:v.a.wrapper},t&&r.a.createElement("div",{className:v.a.stripeWrapper,ref:this.stripeRef},i&&r.a.createElement(u.a,Object.assign({token:this.sendDataToADA,stripeKey:a},j),r.a.createElement("button",{className:v.a.stripeBtn}))),r.a.createElement("div",{className:v.a.errorsWrapper},D.map((function(e){return r.a.createElement("div",{key:e,className:v.a.error},f[e])}))),w&&r.a.createElement("div",{className:v.a.success},"Payment Successful"))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.da0bb1ce.chunk.js.map