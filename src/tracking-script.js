/* eslint-disable */
const init = function (j, f) {
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
      for (i=0; i<fTracking.length; i++) {
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
  //##REPLACE-WITH-CONVERSION-TRACKING-SETTINGS##//

  return conversion;
};
t.prototype.getFunnelTrackingSetting = function() {
  var funnels = [];
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
if(this.pageUrl.indexOf('init-funnel-track/thank-you') !== -1) { 
var funnel = {};
funnel.funnelEntry = 'end';
funnel.isFunnelTrackingOn = true;
funnel.funnelId = 14;
funnels.push(funnel);
} 
if(this.pageUrl.indexOf('/about', this.pageUrl.length - '/about'.length) !== -1) { 
var funnel = {};
funnel.funnelEntry = 'start';
funnel.isFunnelTrackingOn = true;
funnel.funnelId = 15;
funnel.funnelName = function(){
try { return 'aboutProductsFunnel'; } 
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
if(this.pageUrl.indexOf('products') !== -1) { 
var funnel = {};
funnel.funnelEntry = 'end';
funnel.isFunnelTrackingOn = true;
funnel.funnelId = 15;
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
g.prototype.setCookie = function() {
  if (this.days) {
    var l = new Date();
    l.setTime(l.getTime() + (this.days * 24 * 60 * 60 * 1000));
    var d = "; expires=" + l.toGMTString();
  } else {
    var d = "";
  }
  f.cookie = this.name + "=" + this.value + d + "; path=/";
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
    }
  }
  return this.blobExist;
};
a.prototype.set = function(d) {
  this.endPointWEH = b + d;
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
  d.send(JSON.stringify({ data: l }));
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
    this.cookie.setCookie();
  }
  var l = this.cookie.getCookie(k);
  if (l) {
    var m = new c();
    m.set(k, l);
    this.iPostEventHandler.set(l);
    if (m.get()) {
      this.iPostEventHandler.send(m.get(), this.request, this.response);
    }
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
