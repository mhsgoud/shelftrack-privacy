(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".faq details").forEach(function (el) {
    el.addEventListener("toggle", function () {
      if (!el.open || reduce) return;
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  });
})();
