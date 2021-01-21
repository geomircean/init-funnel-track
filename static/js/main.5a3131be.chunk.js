(this["webpackJsonpinit-funnel-track"]=this["webpackJsonpinit-funnel-track"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(7),o=n.n(a),s=(n(14),n(15),n(22)),u=n(23),c=n(21);const l=[{name:"Home",route:"/"},{name:"About",route:"/about"},{name:"Products",route:"/products"},{name:"Cart",route:"/cart"},{name:"Checkout",route:"/checkout"}];class h extends i.Component{constructor(e){super(e),this.onClick=e=>this.setState({selected:e}),this.state={selected:"/"}}render(){const e=this.state.selected;return r.a.createElement("ul",{className:"App-menu"},l.map((t,n)=>r.a.createElement("li",{key:"menu-".concat(n),className:"App-menu-item ".concat(e===t.route?"highlight":"")},r.a.createElement(c.a,{to:t.route,onClick:()=>this.onClick(t.route)},t.name))))}}var d=h;function p(){!function(e,t){var n="https://immqa3.devnest.ro/weh/handler/event_data/save/",i="iqs",r=function(){this.pageUrl=e.location.href},a=function(e,t,n){this.name=e||null,this.value=t||null,this.days=n||null},o=function(){this.blobKey=null,this.blobValue=null,this.blobExist=!1,this.href=e.location.href,this.search=e.location.search,this.iPostBlobKey=i},s=function(){var e=new r,t=e.getConversionTrackingSetting(),n=e.getFunnelTrackingSetting(),i=e.getPageTrackingSetting();if(this.iPTD=t.hasOwnProperty("isConversionTrackingOn")||n&&n.length>0||i.hasOwnProperty("isPageTrackingOn")?{websiteId:e.getWebsiteId()}:null,t.hasOwnProperty("isConversionTrackingOn"))switch(this.iPTD.conversion={EventType:"Conversion",ConversionPage:t.pageName,ConversionType:t.conversionType},this.iPTD.conversion.ConversionType.toLowerCase()){case"custom":this.iPTD.conversion.EventTitle=t.eventTitle(),this.iPTD.conversion.ConversionDate=t.conversionDate(),this.iPTD.conversion.Details=t.details();break;case"order":this.iPTD.conversion.OrderID=t.orderId(),this.iPTD.conversion.OrderSubTotal=t.orderSubTotal(),this.iPTD.conversion.OrderTax=t.orderTax(),this.iPTD.conversion.OrderShipping=t.orderShipping(),this.iPTD.conversion.OrderGrandTotal=t.orderGrandTotal(),this.iPTD.conversion.CouponUsed=t.couponUsed(),this.iPTD.conversion.OnSale=t.onSale(),this.iPTD.conversion.OrderDomain=t.orderDomain(),this.iPTD.conversion.OrderDate=t.orderDate(),this.iPTD.conversion.OrderSource=t.orderSource(),this.iPTD.conversion.OrderStoreId=t.orderStoreId(),this.iPTD.conversion.Items=t.items()}if(n&&n.length>0)for(this.iPTD.funnel=[],c=0;c<n.length;c++)"start"===n[c].funnelEntry?this.iPTD.funnel.push({FunnelId:n[c].funnelId,EventType:"Funnel",FunnelName:n[c].funnelName(),Status:"Started",Details:n[c].details(),Items:n[c].items(),HTMLContent:n[c].htmlContent(),AbandonedURL:n[c].abandonedURL()}):this.iPTD.funnel.push({FunnelId:n[c].funnelId,EventType:"Funnel",Status:"Completed"});i.hasOwnProperty("isPageTrackingOn")&&(this.iPTD.pages={EventType:"Pages",PageName:i.pageName?i.pageName:e.getPageName(),PageTitle:e.getPageTitle(),BasePageURL:e.getBaseURL(),Parameter:e.getParameter(),PageCategory:i.pageCategory?i.pageCategory():"",PageType:i.pageType?i.pageType():""})},u=function(e){this.endPointWEH=e?n+e:null},c=function(){this.iPostBlobKey=i,this.iPostBlobExist=!1,this.href=e.location.href,this.search=e.location.search,this.domain=t.domain,this.navigator=e.navigator,this.iPostEventHandler=new u,this.cookie=new a,this.request={},this.response={}};r.prototype.getWebsiteId=function(){return 1},r.prototype.getConversionTrackingSetting=function(){return{}},r.prototype.getFunnelTrackingSetting=function(){var e=[];if("/"==this.pageUrl){var t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:1,funnelName:function(){try{return"Abbandoned Git"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("/checkout"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:1};e.push(t)}if("/a"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:2,funnelName:function(){try{return"Abbandoned Git2"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("/checkout"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:2};e.push(t)}if("/a"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:3,funnelName:function(){try{return"Abbandoned Git3"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("/about"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:3};e.push(t)}if("/b"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:4,funnelName:function(){try{return"Abbandoned Git4"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("/about"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:4};e.push(t)}if(-1!==this.pageUrl.indexOf("git")){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:5,funnelName:function(){try{return"RaulG"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("git"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:5};e.push(t)}return e},r.prototype.getPageTrackingSetting=function(){return{}},r.prototype.getPageTitle=function(){return t.title},r.prototype.getPageName=function(){return e.location.pathname.substring(1)},r.prototype.getBaseURL=function(){return e.location.origin},r.prototype.getParameter=function(){var t=e.location.search.split("?")[1];return t||!1!==e.location.search.search("=")&&(t=this.search),t||""},a.prototype.set=function(e,t,n){this.name=e,this.value=t,this.days=n||3650},a.prototype.setCookie=function(){if(this.days){var e=new Date;e.setTime(e.getTime()+24*this.days*60*60*1e3);var n="; expires="+e.toGMTString()}else n="";t.cookie=this.name+"="+this.value+n+"; path=/"},a.prototype.getCookie=function(e){for(var n=(e=e||this.name)+"=",i=t.cookie.split(";"),r=0;r<i.length;r++){for(var a=i[r];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(n))return a.substring(n.length,a.length)}return null},o.prototype.getQueryString=function(){var e=this.search.split("?")[1];return e||!1!==this.search.search("=")&&(e=this.search),e},o.prototype.isBlobExist=function(){var e=this.getQueryString();if(e)for(var t=e.split("&"),n=0;n<t.length;n++){var i=t[n].split("="),r=i[0],a=i[1]||"";r===this.iPostBlobKey&&(this.blobKey=r,this.blobValue=a,this.blobExist=!0)}return this.blobExist},u.prototype.set=function(e){this.endPointWEH=e?n+e:n},u.prototype.send=function(e,t,n){var i;if(!(i=new XMLHttpRequest))return n.error="Error: Cannot create an XMLHTTP instance"+this.endPointWEH,n.status="error",n.responseText="",!1;i.open("POST",this.endPointWEH),i.setRequestHeader("Content-type","text/plain"),t.data=e,i.send(JSON.stringify({data:e})),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(200===i.status?(n.error="",n.status="success",n.responseText=i.responseText):(n.error="Error: Not able to save tracking data via WEH!",n.status="error",n.responseText=""))}},s.prototype.get=function(){return this.iPTD},s.prototype.set=function(e,t){this.iPTD&&(this.iPTD[e]=t)},c.prototype.start=function(){var e=new o;e.isBlobExist()&&(this.cookie.set(e.blobKey,e.blobValue),this.cookie.setCookie());var t=this.cookie.getCookie(i),n=new s;n.set(i,t),this.iPostEventHandler.set(t),n.get()&&this.iPostEventHandler.send(n.get(),this.request,this.response)},c.prototype.send=function(e){var t=new r,n=this.cookie.getCookie(i);n&&(e.websiteId=t.getWebsiteId(),e.iqs=n,this.iPostEventHandler.send(e,this.request,this.response))},e.iPostAnalytic=new c,e.iPostAnalytic.start()}(window,document)}class f extends i.Component{componentDidMount(){setTimeout(p,10)}render(){const e=this.props.children;return r.a.createElement("div",{className:"container"},e)}}var g=f;var m=()=>r.a.createElement(g,null,r.a.createElement("h2",null,"Home"));var y=()=>r.a.createElement(g,{key:"about"},r.a.createElement("h1",null,"About"),r.a.createElement("h3",null," This app is just for testing a couple of tracking scripts and the functionality behind them."));var T=e=>r.a.createElement(g,null,r.a.createElement("h2",null,"Cart"));var b=e=>r.a.createElement(g,null,r.a.createElement("h2",null,"Thank You!"),r.a.createElement(c.a,{to:"/"},"Go Back Home"));var v=e=>{const t=e.name,n=e.price,i=e.image,a=isNaN(n)?"N/A":"$".concat(n);return r.a.createElement("span",{className:"product"},r.a.createElement("div",{className:"product-image"},r.a.createElement("img",{src:i,alt:t})),r.a.createElement("div",{className:"product-name"},t||"My product"),r.a.createElement("div",{className:"product-price"},a))};function k(){!function(e,t){var n="https://g000.enterprise.ipost.com/weh/handler/event_data/save/",i="iqs",r=function(){this.pageUrl=e.location.href},a=function(e,t,n){this.name=e||null,this.value=t||null,this.days=n||null},o=function(){this.blobKey=null,this.blobValue=null,this.blobExist=!1,this.href=e.location.href,this.search=e.location.search,this.iPostBlobKey=i},s=function(){var e=new r,t=e.getConversionTrackingSetting(),n=e.getFunnelTrackingSetting(),i=e.getPageTrackingSetting();if(this.iPTD=t.hasOwnProperty("isConversionTrackingOn")||n&&n.length>0||i.hasOwnProperty("isPageTrackingOn")?{websiteId:e.getWebsiteId()}:null,t.hasOwnProperty("isConversionTrackingOn"))switch(this.iPTD.conversion={EventType:"Conversion",ConversionPage:t.pageName,ConversionType:t.conversionType},this.iPTD.conversion.ConversionType.toLowerCase()){case"custom":this.iPTD.conversion.EventTitle=t.eventTitle(),this.iPTD.conversion.ConversionDate=t.conversionDate(),this.iPTD.conversion.Details=t.details();break;case"order":this.iPTD.conversion.OrderID=t.orderId(),this.iPTD.conversion.OrderSubTotal=t.orderSubTotal(),this.iPTD.conversion.OrderTax=t.orderTax(),this.iPTD.conversion.OrderShipping=t.orderShipping(),this.iPTD.conversion.OrderGrandTotal=t.orderGrandTotal(),this.iPTD.conversion.CouponUsed=t.couponUsed(),this.iPTD.conversion.OnSale=t.onSale(),this.iPTD.conversion.OrderDomain=t.orderDomain(),this.iPTD.conversion.OrderDate=t.orderDate(),this.iPTD.conversion.OrderSource=t.orderSource(),this.iPTD.conversion.OrderStoreId=t.orderStoreId(),this.iPTD.conversion.Items=t.items()}if(n&&n.length>0)for(this.iPTD.funnel=[],c=0;c<n.length;c++)"start"===n[c].funnelEntry?this.iPTD.funnel.push({FunnelId:n[c].funnelId,EventType:"Funnel",FunnelName:n[c].funnelName(),Status:"Started",Details:n[c].details(),Items:n[c].items(),HTMLContent:n[c].htmlContent(),AbandonedURL:n[c].abandonedURL()}):this.iPTD.funnel.push({FunnelId:n[c].funnelId,EventType:"Funnel",Status:"Completed"});i.hasOwnProperty("isPageTrackingOn")&&(this.iPTD.pages={EventType:"Pages",PageName:i.pageName?i.pageName:e.getPageName(),PageTitle:e.getPageTitle(),BasePageURL:e.getBaseURL(),Parameter:e.getParameter(),PageCategory:i.pageCategory?i.pageCategory():"",PageType:i.pageType?i.pageType():""})},u=function(e){this.endPointWEH=e?n+e:null},c=function(){this.iPostBlobKey=i,this.iPostBlobExist=!1,this.href=e.location.href,this.search=e.location.search,this.domain=t.domain,this.navigator=e.navigator,this.iPostEventHandler=new u,this.cookie=new a,this.request={},this.response={}};r.prototype.getWebsiteId=function(){return 17},r.prototype.getConversionTrackingSetting=function(){return{}},r.prototype.getFunnelTrackingSetting=function(){var e=[];if("https://geomircean.github.io/init-funnel-track/about"==this.pageUrl){var t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:18,funnelName:function(){try{return"aboutCheckout"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/checkout"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:18};e.push(t)}if("https://geomircean.github.io/init-funnel-track/about"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:19,funnelName:function(){try{return"aboutTy"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/thank-you"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:19};e.push(t)}if("https://geomircean.github.io/init-funnel-track/cart"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:24,funnelName:function(){try{return"cartAbout"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/about"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:24};e.push(t)}if("https://geomircean.github.io/init-funnel-track/checkout"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:23,funnelName:function(){try{return"checkoutAbout"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/about"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:23};e.push(t)}if(-1!==this.pageUrl.indexOf("init-funnel-track/checkout")){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:14,funnelName:function(){try{return"Github-funnel"}catch(o){return""}},items:function(){try{return document.getElementById("items").outerHTML}catch(o){return""}},details:function(){try{return document.getElementById("details").outerHTML}catch(o){return""}},htmlContent:function(){try{return document.getElementById("htmlcontent").outerHTML}catch(o){return""}},abandonedURL:function(){try{return document.getElementById("abandonedUrl").children[0].href}catch(o){return""}}};e.push(t)}if(-1!==this.pageUrl.indexOf("init-funnel-track/thank-you")){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:14};e.push(t)}if("https://geomircean.github.io/init-funnel-track/"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:20,funnelName:function(){try{return"homeProducts"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/products"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:20};e.push(t)}if(-1!==this.pageUrl.indexOf("init-funnel-track/cart")){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:31,funnelName:function(){try{return"PaulaSiGabi"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if(-1!==this.pageUrl.indexOf("init-funnel-track/about")){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:31};e.push(t)}if("https://geomircean.github.io/init-funnel-track/products"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:22,funnelName:function(){try{return"productsAbout"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/about"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:22};e.push(t)}if("https://geomircean.github.io/init-funnel-track/products"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:17,funnelName:function(){try{return"ProductsCart"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/cart"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:17};e.push(t)}if("https://geomircean.github.io/init-funnel-track/"==this.pageUrl){t={funnelEntry:"start",isFunnelTrackingOn:!0,funnelId:21,funnelName:function(){try{return"stef"}catch(o){return""}},items:function(){return""},details:function(){return""},htmlContent:function(){return""},abandonedURL:function(){return""}};e.push(t)}if("https://geomircean.github.io/init-funnel-track/checkout"==this.pageUrl){t={funnelEntry:"end",isFunnelTrackingOn:!0,funnelId:21};e.push(t)}return e},r.prototype.getPageTrackingSetting=function(){var e={isPageTrackingOn:!0};return e},r.prototype.getPageTitle=function(){return t.title},r.prototype.getPageName=function(){return e.location.pathname.substring(1)},r.prototype.getBaseURL=function(){return e.location.origin},r.prototype.getParameter=function(){var t=e.location.search.split("?")[1];return t||!1!==e.location.search.search("=")&&(t=this.search),t||""},a.prototype.set=function(e,t,n){this.name=e,this.value=t,this.days=n||3650},a.prototype.setCookie=function(){if(this.days){var e=new Date;e.setTime(e.getTime()+24*this.days*60*60*1e3);var n="; expires="+e.toGMTString()}else n="";t.cookie=this.name+"="+this.value+n+"; path=/"},a.prototype.getCookie=function(e){for(var n=(e=e||this.name)+"=",i=t.cookie.split(";"),r=0;r<i.length;r++){for(var a=i[r];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(n))return a.substring(n.length,a.length)}return null},o.prototype.getQueryString=function(){var e=this.search.split("?")[1];return e||!1!==this.search.search("=")&&(e=this.search),e},o.prototype.isBlobExist=function(){var e=this.getQueryString();if(e)for(var t=e.split("&"),n=0;n<t.length;n++){var i=t[n].split("="),r=i[0],a=i[1]||"";r===this.iPostBlobKey&&(this.blobKey=r,this.blobValue=a,this.blobExist=!0)}return this.blobExist},u.prototype.set=function(e){this.endPointWEH=n+e},u.prototype.send=function(e,t,n){var i;if(!(i=new XMLHttpRequest))return n.error="Error: Cannot create an XMLHTTP instance"+this.endPointWEH,n.status="error",n.responseText="",!1;i.open("POST",this.endPointWEH),i.setRequestHeader("Content-type","text/plain"),t.data=e,i.send(JSON.stringify({data:e})),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(200===i.status?(n.error="",n.status="success",n.responseText=i.responseText):(n.error="Error: Not able to save tracking data via WEH!",n.status="error",n.responseText=""))}},s.prototype.get=function(){return this.iPTD},s.prototype.set=function(e,t){this.iPTD&&(this.iPTD[e]=t)},c.prototype.start=function(){var e=new o;e.isBlobExist()&&(this.cookie.set(e.blobKey,e.blobValue),this.cookie.setCookie());var t=this.cookie.getCookie(i);if(t){var n=new s;n.set(i,t),this.iPostEventHandler.set(t),n.get()&&this.iPostEventHandler.send(n.get(),this.request,this.response)}},c.prototype.send=function(e){var t=new r,n=this.cookie.getCookie(i);n&&(e.websiteId=t.getWebsiteId(),e.iqs=n,this.iPostEventHandler.send(e,this.request,this.response))},e.iPostAnalytic=new c,e.iPostAnalytic.start()}(window,document)}const P=[{id:1,name:"Dwarf Cleric",price:1.59,image:"https://i.pinimg.com/originals/c5/c7/aa/c5c7aac7fb4ff96bd2053a554a8279c3.png"},{id:2,name:"Gnome Wizard",price:.69,image:"https://i.pinimg.com/originals/0f/0d/25/0f0d250fe7e1d5777b9a6582f4046fab.png"},{id:3,name:"Human Paladin",price:1.99,image:"https://images-na.ssl-images-amazon.com/images/I/41s2IzP8XIL.jpg"},{id:4,name:"Tiefling Sorcerer",price:2.89,image:"https://i.pinimg.com/originals/72/99/60/729960dc128e541aede6ac1c65a5941a.png"},{id:5,name:"Simic Hybrid Wizard",price:1.49,image:"http://pm1.narvii.com/6975/55445d4116488200622caef68c2420bf0351b8e4r1-296-320v2_00.jpg"},{id:6,name:"Loxodon Fighter",price:2.79,image:"https://sites.google.com/site/redcapland/_/rsrc/1534711050772/races/loxodon/Loxodon%20Bounce%20Light.jpg?height=293&width=400"},{id:7,name:"Goblin Rogue",price:1.39,image:"https://i.pinimg.com/originals/33/cb/e6/33cbe6cb9db0daf0d2e1e606a7b3cc3f.png"},{id:8,name:"Hafling Bard",price:2.59,image:"https://static1.squarespace.com/static/559d227be4b0d7e075eecfd4/58bc82e53a04117b5338abdf/5a2dbb19f9619a5b7c8a7e5e/1512946459334/Halfling+Bard+72dpi.jpg?format=500w"}];class E extends r.a.Component{constructor(e){super(e),this.state={rndNo:2},this.changeValue=this.changeValue.bind(this)}changeValue(e){const t=e.currentTarget.value;this.setState({rndNo:t})}componentDidMount(){k()}componentDidUpdate(e,t){t.rndNo!==this.state.rndNo&&k()}render(){const e=this.state.rndNo,t=isNaN(e)?P:P.filter(t=>t.id%e===0),n=t.reduce((e,t)=>e+t.price,0).toFixed(2);return r.a.createElement(g,null,r.a.createElement("h2",null,"Checkout"),r.a.createElement("div",{className:"cart-content"},r.a.createElement("input",{type:"number",min:1,max:7,value:e,onChange:this.changeValue}),r.a.createElement("div",{id:"htmlcontent"},r.a.createElement("div",{id:"items",className:"products"},t.map(e=>r.a.createElement(v,Object.assign({key:"ordered-".concat(e.id)},e)))),r.a.createElement("div",{id:"details"},r.a.createElement("div",{className:"totals"},"Order Total: $",n),r.a.createElement("div",null,r.a.createElement(c.a,{className:"order-btn",to:"/thank-you"},"Order Now!")),r.a.createElement("div",{id:"abandonedUrl"},r.a.createElement("a",{href:"https://geomircean.github.io/init-funnel-track/"},"Recovery url"))))))}}var O=E;var C=e=>r.a.createElement(g,{key:"products"},r.a.createElement("h2",null,"Products"),r.a.createElement("div",{className:"products"},P.map(e=>r.a.createElement(v,Object.assign({key:"product-".concat(e.id)},e)))));var D=()=>r.a.createElement(s.a,{basename:"/init-funnel-track"},r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(u.a,{path:"/",exact:!0,component:m}),r.a.createElement(u.a,{path:"/about/",exact:!0,component:y}),r.a.createElement(u.a,{path:"/thank-you/",exact:!0,component:b}),r.a.createElement(u.a,{path:"/products/",exact:!0,component:C}),r.a.createElement(u.a,{path:"/checkout/",exact:!0,component:O}),r.a.createElement(u.a,{path:"/cart/",exact:!0,component:T})));class I extends i.Component{render(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null))}}var U=I;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.5a3131be.chunk.js.map