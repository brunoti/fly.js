if(typeof jQuery == 'undefined') throw new Error('You need jQuery to use this library!');

(function (w, $) {
  $.fn.fly = function () {
    var _this = this;
    _this.on('submit', function (el) {
      el.preventDefault();
      el.stopPropagation();
      $.ajax({
        url: el.target.action,
        method: el.target.method,
        success: function (data) {
        }
      });
    });
    return this;
  }
}(window, jQuery));
