/* eslint-disable */
const init = function(j, f) {
  var b = 'https://g000.enterprise.ipost.com/weh/handler/event_data/save/',
    k = "iqs",
    t = function() {
      this.pageUrl = j.location.href;
    },
    g = function(d, l, m) {
      this.name = d || null;
      this.value = l || null;
      this.days = m || null;
    },
    e = function() {
      this.blobKey = null;
      this.blobValue = null;
      this.blobExist = false;
      this.href = j.location.href;
      this.search = j.location.search;
      this.iPostBlobKey = k;
      this.isLoadedFromIframe = false;
    },
    c = function() {
      var d = new t(),
        cTracking = d.getConversionTrackingSetting(),
        fTracking = d.getFunnelTrackingSetting(),
        pTracking = d.getPageTrackingSetting();
      this.iPTD = (cTracking.hasOwnProperty("isConversionTrackingOn") || (fTracking && fTracking.length > 0) || pTracking.hasOwnProperty("isPageTrackingOn")) ? {
        websiteId: d.getWebsiteId()
      } : null;
      if (cTracking.hasOwnProperty("isConversionTrackingOn")) {
        this.iPTD.conversion = {
          EventType: "Conversion",
          ConversionPage: cTracking.pageName,
          ConversionType: cTracking.conversionType
        };
        switch (this.iPTD.conversion.ConversionType.toLowerCase()) {
          case "custom":
            this.iPTD.conversion.EventTitle = cTracking.eventTitle();
            this.iPTD.conversion.ConversionDate = cTracking.conversionDate();
            this.iPTD.conversion.Details = cTracking.details();
            break;
          case "order":
            this.iPTD.conversion.OrderID = cTracking.orderId();
            this.iPTD.conversion.OrderSubTotal = cTracking.orderSubTotal();
            this.iPTD.conversion.OrderTax = cTracking.orderTax();
            this.iPTD.conversion.OrderShipping = cTracking.orderShipping();
            this.iPTD.conversion.OrderGrandTotal = cTracking.orderGrandTotal();
            this.iPTD.conversion.CouponUsed = cTracking.couponUsed();
            this.iPTD.conversion.OnSale = cTracking.onSale();
            this.iPTD.conversion.OrderDomain = cTracking.orderDomain();
            this.iPTD.conversion.OrderDate = cTracking.orderDate();
            this.iPTD.conversion.OrderSource = cTracking.orderSource();
            this.iPTD.conversion.OrderStoreId = cTracking.orderStoreId();
            this.iPTD.conversion.Items = cTracking.items();
            break;
          default:
        }
      }
      if (fTracking && fTracking.length > 0) {
        this.iPTD.funnel = [];
        for (i = 0; i < fTracking.length; i++) {
          if (fTracking[i].funnelEntry === 'start') {
            this.iPTD.funnel.push({
              FunnelId: fTracking[i].funnelId,
              EventType: "Funnel",
              FunnelName: fTracking[i].funnelName(),
              Status: "Started",
              Details: fTracking[i].details(),
              Items: fTracking[i].items(),
              HTMLContent: fTracking[i].htmlContent(),
              AbandonedURL: fTracking[i].abandonedURL()
            });
          } else {
            this.iPTD.funnel.push({
              FunnelId: fTracking[i].funnelId,
              EventType: "Funnel",
              Status: "Completed"
            });
          }
        }
      }
      if (pTracking.hasOwnProperty("isPageTrackingOn")) {
        this.iPTD.pages = {
          EventType: "Pages",
          PageName: pTracking.pageName ? pTracking.pageName : d.getPageName(),
          PageTitle: d.getPageTitle(),
          BasePageURL: d.getBaseURL(),
          Parameter: d.getParameter(),
          PageCategory: pTracking.pageCategory ? pTracking.pageCategory() : '',
          PageType: pTracking.pageType ? pTracking.pageType() : ''
        };
      }
    },
    a = function(d) {
      this.endPointWEH = (d) ? b + d : null;
    },
    i = function() {
      this.iPostBlobKey = k;
      this.iPostBlobExist = false;
      this.href = j.location.href;
      this.search = j.location.search;
      this.domain = f.domain;
      this.navigator = j.navigator;
      this.iPostEventHandler = new a();
      this.cookie = new g();
      this.request = {};
      this.response = {};
    };
  t.prototype.getWebsiteId = function() {
    return 17;
  };
  t.prototype.getConversionTrackingSetting = function() {
    var conversion = {};
    if(this.pageUrl.indexOf('/thank-you') !== -1) {
      conversion.isConversionTrackingOn = true;
      conversion.pageName = '/thank-you';
      conversion.conversionType = 'order';
      conversion.orderId = function() {
        try { return document.getElementById('OrderId').innerText; }
        catch (e) { return ''; }
      };
      conversion.orderSubTotal = function() {
        return '0.00';
      };
      conversion.orderTax = function() {
        return '0.00';
      };
      conversion.orderShipping = function() {
        return '0.00';
      };
      conversion.orderGrandTotal = function() {
        try { return document.getElementById('OrderTotal').innerText; }
        catch (e) { return ''; }
      };
      conversion.couponUsed = function() {
        return '';
      };
      conversion.onSale = function() {
        return '';
      };
      conversion.orderDomain = function() {
        return '';
      };
      conversion.orderSource = function() {
        return '';
      };
      conversion.orderStoreId = function() {
        return '';
      };
      conversion.orderDate = function() {
        try { return document.getElementById('OrderDate').innerText; }
        catch (e) { return ''; }
      };
      conversion.items = function() {
        try { let items = [];
          const itemList  = document.getElementById('items').childNodes;

          itemList.forEach((item, index) => {
            const [img, name, price] = item.childNodes;
            const itemObject = {};
            itemObject.Title = name.innerText;
            itemObject.Price = price.innerText;
            itemObject.Quantity = 1;
            itemObject.Sku = name.innerText + 1;
            items.push(itemObject);
          });

          return items; }
        catch (e) { return ''; }
      };
    }


    return conversion;
  };
  t.prototype.getFunnelTrackingSetting = function() {
    var funnels = [];
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/about') {
      var funnel = {};
      funnel.funnelEntry = 'start';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 18;
      funnel.funnelName = function(){
        try { return 'aboutCheckout'; }
        catch (e) { return ''; }
      };
      funnel.items = function() {
        return '';
      };
      funnel.details = function() {
        return '';
      };
      funnel.htmlContent = function() {
        return '';
      };
      funnel.abandonedURL = function() {
        return '';
      };
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/checkout') {
      var funnel = {};
      funnel.funnelEntry = 'end';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 18;
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/about') {
      var funnel = {};
      funnel.funnelEntry = 'start';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 19;
      funnel.funnelName = function(){
        try { return 'aboutTy'; }
        catch (e) { return ''; }
      };
      funnel.items = function() {
        return '';
      };
      funnel.details = function() {
        return '';
      };
      funnel.htmlContent = function() {
        return '';
      };
      funnel.abandonedURL = function() {
        return '';
      };
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/thank-you') {
      var funnel = {};
      funnel.funnelEntry = 'end';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 19;
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/cart') {
      var funnel = {};
      funnel.funnelEntry = 'start';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 24;
      funnel.funnelName = function(){
        try { return 'cartAbout'; }
        catch (e) { return ''; }
      };
      funnel.items = function() {
        return '';
      };
      funnel.details = function() {
        return '';
      };
      funnel.htmlContent = function() {
        return '';
      };
      funnel.abandonedURL = function() {
        return '';
      };
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/about') {
      var funnel = {};
      funnel.funnelEntry = 'end';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 24;
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/checkout') {
      var funnel = {};
      funnel.funnelEntry = 'start';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 23;
      funnel.funnelName = function(){
        try { return 'checkoutAbout'; }
        catch (e) { return ''; }
      };
      funnel.items = function() {
        return '';
      };
      funnel.details = function() {
        return '';
      };
      funnel.htmlContent = function() {
        return '';
      };
      funnel.abandonedURL = function() {
        return '';
      };
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/about') {
      var funnel = {};
      funnel.funnelEntry = 'end';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 23;
      funnels.push(funnel);
    }
    if(this.pageUrl.indexOf('init-funnel-track/checkout') !== -1) {
      var funnel = {};
      funnel.funnelEntry = 'start';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 14;
      funnel.funnelName = function(){
        try { return 'Github-funnel'; }
        catch (e) { return ''; }
      };
      funnel.items = function() {
        try { return document.getElementById("items").outerHTML; }
        catch (e) { return ''; }
      };
      funnel.details = function() {
        try { return document.getElementById("details").outerHTML; }
        catch (e) { return ''; }
      };
      funnel.htmlContent = function() {
        try { return document.getElementById("htmlcontent").outerHTML; }
        catch (e) { return ''; }
      };
      funnel.abandonedURL = function() {
        try { return document.getElementById("abandonedUrl").children[0].href }
        catch (e) { return ''; }
      };
      funnels.push(funnel);
    }
    if(this.pageUrl.indexOf('init-funnel-track/thank-you') !== -1) {
      var funnel = {};
      funnel.funnelEntry = 'end';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 14;
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/') {
      var funnel = {};
      funnel.funnelEntry = 'start';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 20;
      funnel.funnelName = function(){
        try { return 'homeProducts'; }
        catch (e) { return ''; }
      };
      funnel.items = function() {
        return '';
      };
      funnel.details = function() {
        return '';
      };
      funnel.htmlContent = function() {
        return '';
      };
      funnel.abandonedURL = function() {
        return '';
      };
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/products') {
      var funnel = {};
      funnel.funnelEntry = 'end';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 20;
      funnels.push(funnel);
    }
    if(this.pageUrl.indexOf('init-funnel-track/cart') !== -1) {
      var funnel = {};
      funnel.funnelEntry = 'start';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 31;
      funnel.funnelName = function(){
        try { return 'PaulaSiGabi'; }
        catch (e) { return ''; }
      };
      funnel.items = function() {
        return '';
      };
      funnel.details = function() {
        return '';
      };
      funnel.htmlContent = function() {
        return '';
      };
      funnel.abandonedURL = function() {
        return '';
      };
      funnels.push(funnel);
    }
    if(this.pageUrl.indexOf('init-funnel-track/about') !== -1) {
      var funnel = {};
      funnel.funnelEntry = 'end';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 31;
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/products') {
      var funnel = {};
      funnel.funnelEntry = 'start';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 22;
      funnel.funnelName = function(){
        try { return 'productsAbout'; }
        catch (e) { return ''; }
      };
      funnel.items = function() {
        return '';
      };
      funnel.details = function() {
        return '';
      };
      funnel.htmlContent = function() {
        return '';
      };
      funnel.abandonedURL = function() {
        return '';
      };
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/about') {
      var funnel = {};
      funnel.funnelEntry = 'end';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 22;
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/products') {
      var funnel = {};
      funnel.funnelEntry = 'start';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 17;
      funnel.funnelName = function(){
        try { return 'ProductsCart'; }
        catch (e) { return ''; }
      };
      funnel.items = function() {
        return '';
      };
      funnel.details = function() {
        return '';
      };
      funnel.htmlContent = function() {
        return '';
      };
      funnel.abandonedURL = function() {
        return '';
      };
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/cart') {
      var funnel = {};
      funnel.funnelEntry = 'end';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 17;
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/') {
      var funnel = {};
      funnel.funnelEntry = 'start';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 21;
      funnel.funnelName = function(){
        try { return 'stef'; }
        catch (e) { return ''; }
      };
      funnel.items = function() {
        return '';
      };
      funnel.details = function() {
        return '';
      };
      funnel.htmlContent = function() {
        return '';
      };
      funnel.abandonedURL = function() {
        return '';
      };
      funnels.push(funnel);
    }
    if(this.pageUrl == 'https://geomircean.github.io/init-funnel-track/checkout') {
      var funnel = {};
      funnel.funnelEntry = 'end';
      funnel.isFunnelTrackingOn = true;
      funnel.funnelId = 21;
      funnels.push(funnel);
    }


    return funnels;
  };
  t.prototype.getPageTrackingSetting = function() {
    var page = {};
    page.isPageTrackingOn = true;


    return page;
  };
  t.prototype.getPageTitle = function() {
    return f.title;
  };
  t.prototype.getPageName = function() {
    return j.location.pathname.substring(1);
  };
  t.prototype.getBaseURL = function() {
    return j.location.origin;
  };
  t.prototype.getParameter = function() {
    var d = j.location.search.split("?")[1];
    if (!d) {
      if (j.location.search.search("=") !== false) {
        d = this.search
      }
    }
    return d ? d : '';
  };
  g.prototype.set = function(d, l, m) {
    this.name = d;
    this.value = l;
    this.days = m || 3650;
  };
  g.prototype.setCookie = function(iframe) {
    if (this.days) {
      var l = new Date();
      l.setTime(l.getTime() + (this.days * 24 * 60 * 60 * 1000));
      var d = "; expires=" + l.toGMTString() + ";";
    } else {
      var d = ";";
    }
    if (iframe) {
      var i = "SameSite=None; Secure ;";
    } else {
      var i = "";
    }
    f.cookie = this.name + "=" + this.value + d + " " + i + " path=/";
  };
  g.prototype.getCookie = function(d) {
    var d = d || this.name,
      n = d + "=",
      m = f.cookie.split(";");
    for (var l = 0; l < m.length; l++) {
      var o = m[l];
      while (o.charAt(0) == " ") {
        o = o.substring(1, o.length);
      }
      if (o.indexOf(n) == 0) {
        return o.substring(n.length, o.length);
      }
    }
    return null;
  };
  e.prototype.getQueryString = function() {
    var d = this.search.split("?")[1];
    if (!d) {
      if (this.search.search("=") !== false) {
        d = this.search;
      }
    }
    return d;
  };
  e.prototype.isBlobExist = function() {
    var p = this.getQueryString();
    if (p) {
      var n = p.split("&");
      for (var d = 0; d < n.length; d++) {
        var o = n[d].split("="),
          l = o[0],
          m = o[1] || "";
        if (l === this.iPostBlobKey) {
          this.blobKey = l;
          this.blobValue = m;
          this.blobExist = true;
        }

        if (l === 'iframe' && m === 'true') {
          this.isLoadedFromIframe = true;
        }
      }
    }
    return this.blobExist;
  };
  e.prototype.isCrossDomainTrackingEnabled = function() {
    return false;
  };
  e.prototype.getWebsiteURL = function() {
    return 'https://geomircean.github.io';
  };
  e.prototype.getCrossDomainURL = function(baseURL, key, value) {
    var separator = baseURL.indexOf('?') !== -1 ? "&" : "?";
    return baseURL + separator + key + "=" + value + "&iframe=true";
  };
  a.prototype.set = function(d) {
    this.endPointWEH = d ? b + d : b;
  };
  a.prototype.send = function(l, req, res) {
    var d;
    d = new XMLHttpRequest();
    if (!d) {
      res.error = "Error: Cannot create an XMLHTTP instance" + this.endPointWEH;
      res.status = "error";
      res.responseText = "";
      return false;
    }
    d.open("POST", this.endPointWEH);
    d.setRequestHeader("Content-type", "text/plain");
    req.data = l;
    d.send(JSON.stringify({
      data: l
    }));
    d.onreadystatechange = function() {
      if (d.readyState === XMLHttpRequest.DONE) {
        if (d.status === 200) {
          res.error = "";
          res.status = "success";
          res.responseText = d.responseText;
        } else {
          res.error = "Error: Not able to save tracking data via WEH!";
          res.status = "error";
          res.responseText = "";
        }
      }
    }
  };
  c.prototype.get = function() {
    return this.iPTD;
  };
  c.prototype.set = function(d, l) {
    if (this.iPTD) {
      this.iPTD[d] = l;
    }
  };
  i.prototype.start = function() {
    var d = new e();
    if (d.isBlobExist()) {
      this.cookie.set(d.blobKey, d.blobValue);
      this.cookie.setCookie(d.isLoadedFromIframe);
    }
    var l = this.cookie.getCookie(k);

    // set the iframe if cross-domain is enabled for the website
    if (d.isCrossDomainTrackingEnabled() && l !== null) {
      var urlFromConfig = d.getWebsiteURL();
      var urlFromAddress = j.location.href;
      var domainFromConfig = urlFromConfig.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
      var domainFromAddress = urlFromAddress.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
      var isSameWebsite = domainFromConfig === domainFromAddress;

      if (!isSameWebsite) {
        var iframe = f.createElement('iframe');
        iframe.setAttribute("src", d.getCrossDomainURL(urlFromConfig, k, l));
        iframe.style.width = "0px";
        iframe.style.height = "0px";
        iframe.style.display = "none";
        f.body.appendChild(iframe);
      }
    }

    var m = new c();
    m.set(k, l);
    this.iPostEventHandler.set(l);
    if (m.get()) {
      this.iPostEventHandler.send(m.get(), this.request, this.response);
    }
  };
  i.prototype.send = function(d) {
    var w = new t(),
      c = this.cookie.getCookie(k);
    if (c) {
      d.websiteId = w.getWebsiteId();
      d[k] = c;
      this.iPostEventHandler.send(d, this.request, this.response);
    }
  };
  (function() {
    j.iPostAnalytic = new i();
    j.iPostAnalytic.start();
  })()
};

export default function loadTrackingScript() {
  init(window, document);
}