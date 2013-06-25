(function(window, document, body, undefined) {
  var CSS_CLASS = "zoinked";
  
  var Z = function() {
    body = ( body ) ? body : document.body;
    this.hasScrolled = false;
    
    if (window.addEventListener) {
      window.addEventListener("scroll", this, false);
    } else {
      this.load();
    }
  };
  
  Z.prototype.handleEvent = function(e) {
    if (window.pageYOffset > 2) {
      this.hasScrolled = true;
      window.removeEventListener("scroll", this);
      this.load();
    }
  };
  
  Z.prototype.load = function() {
    if (typeof $ !== "undefined") {
      $(body).addClass(CSS_CLASS);
    } else if (document.body.classList) {
      body.classList.add(CSS_CLASS);
    } else {
      body.className += CSS_CLASS;
    }
  };
  
  if (typeof define !== "undefined") {
    define([], function() {
      return Z;
    });
  } else {
    window.Zoink = Z;
  }
  
})(window, document, document.body);