(function() {
  var extend = function(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i])
        continue;
      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key))
          out[key] = arguments[i][key];
      }
    }
    return out;
  };

  var addEventListener = function(el, eventName, handler) {
    if (el.addEventListener) {
      el.addEventListener(eventName, handler);
    } else {
      el.attachEvent('on' + eventName, function(){
        handler.call(el);
      });
    }
  };

  window.StickyNav = {
    init: function() {
      for (var i = 0; i < arguments.length; i++) {
        (function(options) {

          // setup
          var elem = document.querySelector(options.selector);
          var topMargin = options.topMargin;
          var rect = elem.getBoundingClientRect();
          var initialOffset = {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
          };
          var initialStyle = extend({}, elem.style);

          // on scroll
          addEventListener(window, 'scroll', function(event) {
            if (document.body.scrollTop + topMargin > initialOffset.top) {
              // without fixed position the element would be above its margin
              // set fixed position
              extend(elem.style, {
                marginTop: '0px',
                marginBottom: '0px',
                marginLeft: '0px',
                marginRight: '0px',
                top: topMargin + 'px',
                left: initialOffset.left + 'px',
                position: 'fixed'
              });
            } else {
              // with fixed position the element would be above
              // its initial postion
              // restore initial inline css
              extend(elem.style, initialStyle);
            }
          });
        }).call(this, arguments[i]);
      }
    }
  };
}).call(this);
