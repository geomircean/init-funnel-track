(this["webpackJsonpinit-funnel-track"]=this["webpackJsonpinit-funnel-track"]||[]).push([[0],{11:function(e,t,n){e.exports=n(21)},16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(8),o=n.n(a),s=(n(16),n(17),n(4)),c=n(24),u=n(25),l=n(23);const d=[{name:"Home",route:"/"},{name:"About",route:"/about"},{name:"Products",route:"/products"},{name:"Cart",route:"/cart"},{name:"Checkout",route:"/checkout"}];class h extends r.Component{constructor(e){super(e),this.onClick=e=>this.setState({selected:e});const t=window.location.pathname.replace("/init-funnel-track","");this.state={selected:t}}render(){const e=this.state.selected;return i.a.createElement("ul",{className:"App-menu"},d.map((t,n)=>i.a.createElement("li",{key:"menu-".concat(n),className:"App-menu-item ".concat(e===t.route?"highlight":"")},i.a.createElement(l.a,{to:t.route,onClick:()=>this.onClick(t.route)},t.name))))}}var p=h;const m=[{id:1,name:"Dwarf Cleric",price:1.59,image:"https://i.pinimg.com/originals/c5/c7/aa/c5c7aac7fb4ff96bd2053a554a8279c3.png"},{id:2,name:"Gnome Wizard",price:.69,image:"https://i.pinimg.com/originals/0f/0d/25/0f0d250fe7e1d5777b9a6582f4046fab.png"},{id:3,name:"Human Paladin",price:1.99,image:"https://images-na.ssl-images-amazon.com/images/I/41s2IzP8XIL.jpg"},{id:4,name:"Tiefling Sorcerer",price:2.89,image:"https://i.pinimg.com/originals/72/99/60/729960dc128e541aede6ac1c65a5941a.png"},{id:5,name:"Simic Hybrid Wizard",price:1.49,image:"http://pm1.narvii.com/6975/55445d4116488200622caef68c2420bf0351b8e4r1-296-320v2_00.jpg"},{id:6,name:"Loxodon Fighter",price:2.79,image:"https://sites.google.com/site/redcapland/_/rsrc/1534711050772/races/loxodon/Loxodon%20Bounce%20Light.jpg?height=293&width=400"},{id:7,name:"Goblin Rogue",price:1.39,image:"https://i.pinimg.com/originals/33/cb/e6/33cbe6cb9db0daf0d2e1e606a7b3cc3f.png"},{id:8,name:"Hafling Bard",price:2.59,image:"https://static1.squarespace.com/static/559d227be4b0d7e075eecfd4/58bc82e53a04117b5338abdf/5a2dbb19f9619a5b7c8a7e5e/1512946459334/Halfling+Bard+72dpi.jpg?format=500w"}];function f(){!function(e,t){var n="https://g000.enterprise.ipost.com/weh/handler/event_data/save/",r="iqs",i=function(){this.pageUrl=e.location.href},a=function(e,t,n){this.name=e||null,this.value=t||null,this.days=n||null},o=function(){this.blobKey=null,this.blobValue=null,this.blobExist=!1,this.href=e.location.href,this.search=e.location.search,this.iPostBlobKey=r,this.isLoadedFromIframe=!1},c=function(){var e=new i,t=e.getConversionTrackingSetting(),n=e.getFunnelTrackingSetting(),r=e.getPageTrackingSetting();if(this.iPTD=t.hasOwnProperty("isConversionTrackingOn")||n&&n.length>0||r.hasOwnProperty("isPageTrackingOn")?{websiteId:e.getWebsiteId()}:null,t.hasOwnProperty("isConversionTrackingOn"))switch(this.iPTD.conversion={EventType:"Conversion",ConversionPage:t.pageName,ConversionType:t.conversionType},this.iPTD.conversion.ConversionType.toLowerCase()){case"custom":this.iPTD.conversion.EventTitle=t.eventTitle(),this.iPTD.conversion.ConversionDate=t.conversionDate(),this.iPTD.conversion.Details=t.details();break;case"order":this.iPTD.conversion.OrderID=t.orderId(),this.iPTD.conversion.OrderSubTotal=t.orderSubTotal(),this.iPTD.conversion.OrderTax=t.orderTax(),this.iPTD.conversion.OrderShipping=t.orderShipping(),this.iPTD.conversion.OrderGrandTotal=t.orderGrandTotal(),this.iPTD.conversion.CouponUsed=t.couponUsed(),this.iPTD.conversion.OnSale=t.onSale(),this.iPTD.conversion.OrderDomain=t.orderDomain(),this.iPTD.conversion.OrderDate=t.orderDate(),this.iPTD.conversion.OrderSource=t.orderSource(),this.iPTD.conversion.OrderStoreId=t.orderStoreId(),this.iPTD.conversion.Items=t.items()}if(n&&n.length>0)for(this.iPTD.funnel=[],l=0;l<n.length;l++)"start"===n[l].funnelEntry?this.iPTD.funnel.push({FunnelId:n[l].funnelId,EventType:"Funnel",FunnelName:n[l].funnelName(),Status:"Started",Details:n[l].details(),Items:n[l].items(),HTMLContent:n[l].htmlContent(),AbandonedURL:n[l].abandonedURL()}):this.iPTD.funnel.push({FunnelId:n[l].funnelId,EventType:"Funnel",Status:"Completed"});r.hasOwnProperty("isPageTrackingOn")&&(this.iPTD.pages={EventType:"Pages",PageName:r.pageName?r.pageName:e.getPageName(),PageTitle:e.getPageTitle(),BasePageURL:e.getBaseURL(),Parameter:e.getParameter(),PageCategory:r.pageCategory?r.pageCategory():"",PageType:r.pageType?r.pageType():""})},u=function(e){this.endPointWEH=e?n+e:null},l=function(){this.iPostBlobKey=r,this.iPostBlobExist=!1,this.href=e.location.href,this.search=e.location.search,this.domain=t.domain,this.navigator=e.navigator,this.iPostEventHandler=new u,this.cookie=new a,this.request={},this.response={}};i.prototype.getWebsiteId=function(){return 17},i.prototype.getConversionTrackingSetting=function(){var e={};return-1!==this.pageUrl.indexOf("/thank-you")&&(e.isConversionTrackingOn=!0,e.pageName="/thank-you",e.conversionType="order",e.orderId=function(){try{return document.getElementById("OrderId").innerText}catch(o){return""}},e.orderSubTotal=function(){return"0.00"},e.orderTax=function(){return"0.00"},e.orderShipping=function(){return"0.00"},e.orderGrandTotal=function(){try{return document.getElementById("OrderTotal").innerText}catch(o){return""}},e.couponUsed=function(){return""},e.onSale=function(){return""},e.orderDomain=function(){return""},e.orderSource=function(){return""},e.orderStoreId=function(){return""},e.orderDate=function(){try{return document.getElementById("OrderDate").innerText}catch(o){return""}},e.items=function(){try{let e=[];return document.getElementById("items").childNodes.forEach((t,n)=>{const r=Object(s.a)(t.childNodes,3),i=(r[0],r[1]),a=r[2],o={};o.Title=i.innerText,o.Price=a.innerText,o.Quantity=1,o.Sku=i.innerText+1,e.push(o)}),e}catch(o){return""}}),e},i.prototype.getFunnelTrackingSetting=function(){var e=[];if("https://geomircean.github.io/init-funnel-track/about"==this.pageUrl){var t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:18,funnelName:function(){try{return"aboutCheckout"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/checkout"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:18};e.push(t)}if("https://geomircean.github.io/init-funnel-track/about"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:19,funnelName:function(){try{return"aboutTy"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/thank-you"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:19};e.push(t)}if("https://geomircean.github.io/init-funnel-track/cart"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:24,funnelName:function(){try{return"cartAbout"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/about"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:24};e.push(t)}if("https://geomircean.github.io/init-funnel-track/checkout"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:23,funnelName:function(){try{return"checkoutAbout"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/about"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:23};e.push(t)}if(-1!==this.pageUrl.indexOf("init-funnel-track/checkout")){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:14,funnelName:function(){try{return"Github-funnel"}catch(o){return""}},items:function(){try{return document.getElementById("items").outerHTML}catch(o){return""}},details:function(){try{return document.getElementById("details").outerHTML}catch(o){return""}},htmlContent:function(){try{return document.getElementById("htmlcontent").outerHTML}catch(o){return""}},abandonedURL:function(){try{return document.getElementById("abandonedUrl").children[0].href}catch(o){return""}}};e.push(t)}if(-1!==this.pageUrl.indexOf("init-funnel-track/thank-you")){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:14};e.push(t)}if("https://geomircean.github.io/init-funnel-track/"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:20,funnelName:function(){try{return"homeProducts"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/products"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:20};e.push(t)}if(-1!==this.pageUrl.indexOf("init-funnel-track/cart")){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:31,funnelName:function(){try{return"PaulaSiGabi"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if(-1!==this.pageUrl.indexOf("init-funnel-track/about")){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:31};e.push(t)}if("https://geomircean.github.io/init-funnel-track/products"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:22,funnelName:function(){try{return"productsAbout"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/about"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:22};e.push(t)}if("https://geomircean.github.io/init-funnel-track/products"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:17,funnelName:function(){try{return"ProductsCart"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/cart"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:17};e.push(t)}if("https://geomircean.github.io/init-funnel-track/"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:21,funnelName:function(){try{return"stef"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/checkout"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:21};e.push(t)}return e},i.prototype.getPageTrackingSetting=function(){var e={isPageTrackingOn:!0};return e},i.prototype.getPageTitle=function(){return t.title},i.prototype.getPageName=function(){return e.location.pathname.substring(1)},i.prototype.getBaseURL=function(){return e.location.origin},i.prototype.getParameter=function(){var t=e.location.search.split("?")[1];return t||!1!==e.location.search.search("=")&&(t=this.search),t||""},a.prototype.set=function(e,t,n){this.name=e,this.value=t,this.days=n||3650},a.prototype.setCookie=function(e){if(this.days){var n=new Date;n.setTime(n.getTime()+24*this.days*60*60*1e3);var r="; expires="+n.toGMTString()+";"}else r=";";if(e)var i="SameSite=None; Secure ;";else i="";t.cookie=this.name+"="+this.value+r+" "+i+" path=/"},a.prototype.getCookie=function(e){for(var n=(e=e||this.name)+"=",r=t.cookie.split(";"),i=0;i<r.length;i++){for(var a=r[i];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(n))return a.substring(n.length,a.length)}return null},o.prototype.getQueryString=function(){var e=this.search.split("?")[1];return e||!1!==this.search.search("=")&&(e=this.search),e},o.prototype.isBlobExist=function(){var e=this.getQueryString();if(e)for(var t=e.split("&"),n=0;n<t.length;n++){var r=t[n].split("="),i=r[0],a=r[1]||"";i===this.iPostBlobKey&&(this.blobKey=i,this.blobValue=a,this.blobExist=!0),"iframe"===i&&"true"===a&&(this.isLoadedFromIframe=!0)}return this.blobExist},o.prototype.isCrossDomainTrackingEnabled=function(){return!1},o.prototype.getWebsiteURL=function(){return"https://geomircean.github.io"},o.prototype.getCrossDomainURL=function(e,t,n){var r=-1!==e.indexOf("?")?"&":"?";return e+r+t+"="+n+"&iframe=true"},u.prototype.set=function(e){this.endPointWEH=e?n+e:n},u.prototype.send=function(e,t,n){var r;if(!(r=new XMLHttpRequest))return n.error="Error: Cannot create an XMLHTTP instance"+this.endPointWEH,n.status="error",n.responseText="",!1;r.open("POST",this.endPointWEH),r.setRequestHeader("Content-type","text/plain"),t.data=e,r.send(JSON.stringify({data:e})),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(n.error="",n.status="success",n.responseText=r.responseText):(n.error="Error: Not able to save tracking data via WEH!",n.status="error",n.responseText=""))}},c.prototype.get=function(){return this.iPTD},c.prototype.set=function(e,t){this.iPTD&&(this.iPTD[e]=t)},l.prototype.start=function(){var n=new o;n.isBlobExist()&&(this.cookie.set(n.blobKey,n.blobValue),this.cookie.setCookie(n.isLoadedFromIframe));var i=this.cookie.getCookie(r);if(n.isCrossDomainTrackingEnabled()&&null!==i){var a=n.getWebsiteURL(),s=e.location.href;if(!(a.replace("http://","").replace("https://","").split(/[/?#]/)[0]===s.replace("http://","").replace("https://","").split(/[/?#]/)[0])){var u=t.createElement("iframe");u.setAttribute("src",n.getCrossDomainURL(a,r,i)),u.style.width="0px",u.style.height="0px",u.style.display="none",t.body.appendChild(u)}}var l=new c;l.set(r,i),this.iPostEventHandler.set(i),l.get()&&this.iPostEventHandler.send(l.get(),this.request,this.response)},l.prototype.send=function(e){var t=new i,n=this.cookie.getCookie(r);n&&(e.websiteId=t.getWebsiteId(),e.iqs=n,this.iPostEventHandler.send(e,this.request,this.response))},e.iPostAnalytic=new l,e.iPostAnalytic.start()}(window,document)}class g extends r.Component{componentDidMount(){setTimeout(f,10)}render(){const e=this.props.children;return i.a.createElement("div",{className:"container"},e)}}var y=g;var b=()=>i.a.createElement(y,null,i.a.createElement("h2",null,"Home"));var E=()=>i.a.createElement(y,{key:"about"},i.a.createElement("h1",null,"About"),i.a.createElement("h3",null," This app is just for testing a couple of tracking scripts and the functionality behind them."));var T=e=>i.a.createElement(y,null,i.a.createElement("h2",null,"Cart")),v=n(10);var k=e=>{const t=e.name,n=e.price,r=e.image,a=isNaN(n)?"N/A":"$".concat(n);return i.a.createElement("span",{className:"product"},i.a.createElement("div",{className:"product-image"},i.a.createElement("img",{src:r,alt:t})),i.a.createElement("div",{className:"product-name"},t||"My product"),i.a.createElement("div",{className:"product-price"},a))};var P=e=>{const t=Object(v.a)(),n=new Date,r=e.rndNo,a=e.products,o=isNaN(r)?a:a.filter(e=>e.id%r===0),s=o.reduce((e,t)=>e+t.price,0).toFixed(2);return i.a.createElement(y,null,i.a.createElement("h2",null,"Thank You!"),i.a.createElement("div",{className:"order-id"},i.a.createElement("span",null,"Your Order Id: \xa0 "),i.a.createElement("span",{id:"OrderId"},t)),i.a.createElement("div",{className:"order-date"},i.a.createElement("span",null," Order Date: "),i.a.createElement("span",{id:"OrderDate"},n.toString())),i.a.createElement("div",{className:"order-total"},i.a.createElement("span",null,"Grand Total: ")," ",i.a.createElement("span",{id:"OrderTotal"},s)),i.a.createElement("div",{id:"items",className:"products"},o.map(e=>i.a.createElement(k,Object.assign({key:"ordered-".concat(e.id)},e)))),i.a.createElement(l.a,{to:"/"},"Go Back Home"))};class O extends i.a.Component{componentDidUpdate(e,t){e.rndNo!==this.props.rndNo&&f()}render(){const e=this.props,t=e.rndNo,n=e.products,r=e.updateNo,a=isNaN(t)?n:n.filter(e=>e.id%t===0),o=a.reduce((e,t)=>e+t.price,0).toFixed(2);return i.a.createElement(y,null,i.a.createElement("h2",null,"Checkout"),i.a.createElement("div",{className:"cart-content"},i.a.createElement("input",{type:"number",min:1,max:7,value:t,onChange:e=>r(e.currentTarget.value)}),i.a.createElement("div",{id:"htmlcontent"},i.a.createElement("div",{id:"items",className:"products"},a.map(e=>i.a.createElement(k,Object.assign({key:"ordered-".concat(e.id)},e)))),i.a.createElement("div",{id:"details"},i.a.createElement("div",{className:"totals"},"Order Total: $",o),i.a.createElement("div",null,i.a.createElement(l.a,{className:"order-btn",to:"/thank-you"},"Order Now!")),i.a.createElement("div",{id:"abandonedUrl"},i.a.createElement("a",{href:"https://geomircean.github.io/init-funnel-track/"},"Recovery url"))))))}}var N=O;var C=e=>i.a.createElement(y,{key:"products"},i.a.createElement("h2",null,"Products"),i.a.createElement("div",{className:"products"},m.map(e=>i.a.createElement(k,Object.assign({key:"product-".concat(e.id)},e)))));var I=()=>{const e=Object(r.useState)(2),t=Object(s.a)(e,2),n=t[0],a=t[1];return i.a.createElement(c.a,{basename:"/init-funnel-track"},i.a.createElement("div",null,i.a.createElement(p,null),i.a.createElement(u.a,{path:"/",exact:!0,component:b}),i.a.createElement(u.a,{path:"/about/",exact:!0,component:E}),i.a.createElement(u.a,{path:"/products/",exact:!0,component:C}),i.a.createElement(u.a,{path:"/checkout/",exact:!0,render:e=>i.a.createElement(N,Object.assign({},e,{rndNo:n,products:m,updateNo:a}))}),i.a.createElement(u.a,{path:"/thank-you/",exact:!0,render:e=>i.a.createElement(P,Object.assign({},e,{rndNo:n,products:m,updateNo:a}))}),i.a.createElement(u.a,{path:"/cart/",exact:!0,component:T})))};class D extends r.Component{render(){return i.a.createElement("div",{className:"App"},i.a.createElement(I,null))}}var x=D;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.b0876e2d.chunk.js.map