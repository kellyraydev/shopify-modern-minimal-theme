// Modern Minimal Shopify Theme
// Main JavaScript

(function() {
  function ready(callback) {
    if (document.readyState !== "loading") {
      callback();
    } else {
      document.addEventListener("DOMContentLoaded", callback);
    }
  }

  function init() {
    var mobileBtn = document.querySelector(".mobile-menu-btn");
    var mobileNav = document.querySelector(".mobile-nav");
    if (mobileBtn && mobileNav) {
      mobileBtn.addEventListener("click", function() {
        mobileNav.classList.add("active");
        document.body.style.overflow = "hidden";
      });
      mobileNav.querySelector(".mobile-nav-close").addEventListener("click", function() {
        mobileNav.classList.remove("active");
        document.body.style.overflow = "";
      });
    }
  }

  ready(init);
})();