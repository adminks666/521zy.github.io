setTimeout(function () {
  $('.scene').css('opacity', 1);
}, 1000);

// ## Deep-ui | 3D User interface builder
// ## Depths can be defined on the html element as data-depth.
// ## Depth is calculated from the parent element with depth-ui set as true.
// ## Set data-deep-animate & data-deep-animate-time to true on parent to animate to point.

function deep_ui() {

  // Options
  var global_perspective = 800; // Global perspective set to parent
  var pivot = 80; // The higher this number the more subtle the pivot effect
  var debug = false; // Shows various debug information
  var animation_delay = 100; // Delay before animation starts cannot be 0. In ms.
  var animation_easing = 'ease'; // Animation easing

  // Variables
  var deep_parent = $('*[data-deep-ui="true"]'); // Parent with deep active
  var deep_element = $('[data-depth]'); // Elements with depth
  var count = 0;

  // Set perspective
  deep_parent.each(function () {

    $(this).css({
      'perspective': global_perspective + 'px',
      'transform-style': 'preserve-3d',
      'transform': 'translateY(-50%) tra' });
    // Set perspective of parent

    // If animation else is turned on, set the transition

    if ($(this).data('deep-animate') == true) {
      set_depth_animation(); // Set depths
    } else {
      set_depth(); // Set depths
    }

  });

  // Set the depths of each child element
  function set_depth() {
    // Set element depth
    deep_element.each(function () {
      $(this).css({
        'transform': 'translatez(' +
        $(this).data('depth') +
        'px) translateY(-0%)',
        'transform-style': 'preserve-3d' // Set CSS to all elements
      });
    });
  }

  function set_depth_animation() {
    // Set element depth

    deep_element.each(function () {
      $(this).css({
        'transform': 'translatez(1000px) translateY(-0%)',
        'transform-style': 'preserve-3d' // Set CSS to all elements
      });
      var deep_animate = 2;
      $(this).css('transition', 'all ' + 1.4 + 's ' + .3 * count + 's ' + animation_easing); // Set the transition on elements
      count++;
    });
  }
  // Pivot
  $(document).on('mousemove', function (e) {
    var x = -($(window).innerWidth() / 2 - e.pageX) / pivot; // Get current mouse x
    var y = ($(window).innerHeight() / 2 - e.pageY) / pivot; // Get current mouse y
    deep_parent.css('transform', 'rotateY(' + x + 'deg) rotateX(' + y + 'deg) translateY(-0%)'); // Set parent element rotation
  });

  // Debug
  function deep_debug() {
    deep_element.each(function () {
      $(this).append('<span class="d_label">Depth: ' + $(this).data('depth') + '</span>'); // Append depth tags
    });
    deep_parent.each(function () {
      $(this).append('<span class="d_b_label">Deep parent</span>'); // Append parent tags
    });
  }

  // Run debug if true
  if (debug) {
    deep_debug();
  }
}

// Init
deep_ui();
!function () {"use strict";var o = [],n = 0,e = 0,t = { window: "object" == typeof window, module: "object" == typeof module && "object" == typeof module.exports, amd: "function" == typeof define && define.amd, global: "object" == typeof global },r = { defineProp: "undefined" != typeof Object.defineProperty },a = { valuesCount: 1e4, randomInterval: 30, removeOptions: !0 },d = {};t.window && window.fastrandomOptions ? d = window.fastrandomOptions : t.global && global.fastrandomOptions ? d = global.fastrandomOptions : "object" == typeof fastrandomOptions && (d = fastrandomOptions);for (var i in a) a.hasOwnProperty(i) && !d.hasOwnProperty(i) && (d[i] = a[i]);d.removeOptions && (t.window && window.fastrandomOptions ? delete window.fastrandomOptions : t.global && global.fastrandomOptions && delete global.fastrandomOptions);var f = function (e) {return e ? o[e] : (n == d.valuesCount && (n = 0), o[n++]);};f.randomChanger = function () {e == d.valuesCount && (e = 0), o[e++] = Math.random();};for (var s = 0; s < d.valuesCount; s++) f.randomChanger();d.randomInterval && setInterval(f.randomChanger, d.randomInterval), f.valueOf = f, f.options = d, r.defineProp && (Object.defineProperty(f, "random", { get: function () {return f();} }), Object.defineProperty(f, "randomArray", { get: function () {return o;} }), Object.defineProperty(f, "currentRandomIndex", { get: function () {return n;} })), t.module ? module.exports = f : t.amd && define("fastrandom", [], function () {return f;}), t.window && (window.random = f);}();

class ParticulateUI {
  constructor() {
    this.elements = [];
  }

  add(el, render) {
    // Add the element to the particulate class ready for render
    el.height = Math.floor($(el.elem).outerHeight());
    el.width = Math.floor($(el.elem).outerWidth());
    el.html = $(el.elem).get(0).outerHTML;
    el.render = render;
    el.positionX = $(el.elem)[0].getBoundingClientRect().left + $(window)['scrollLeft']();
    el.positionY = $(el.elem)[0].getBoundingClientRect().top + $(window)['scrollTop']();
    el.pixels = [];
    el.data = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${el.width}" height="${el.height}"><foreignObject width="100%" height="100%">${el.html}</foreignObject><defs><style type="text/css">@font-face {font-family: "${primaryFont}"}</style></defs></svg>`;

    this.elements.push(el);



  }

  render() {
    // Render the elements

    this.elements.forEach(function (element) {
      // For each elements create a precursor canvas and append it the body
      var preCanvasElement = $('<canvas id="' + element.elem.split('.')[1] + '--pre"/>');
      $('.scene').append(preCanvasElement);

      // Get the context of this pre canvas
      var preCanvas = document.getElementById(element.elem.split('.')[1] + '--pre');
      var preCanvasCtx = preCanvas.getContext('2d');

      // Hide the pre canvas
      if (!element.render) {
        $('canvas#' + element.elem.split('.')[1] + '--pre').hide();
      }

      $('canvas#' + element.elem.split('.')[1] + '--pre').css({ 'left': element.positionX, 'top': element.positionY });

      // Set the height of the canvas to match the rendered element
      preCanvas.height = element.height;
      preCanvas.width = element.width;

      // Create BLOB from the elements data
      var DOMURL = window.URL || window.webkitURL || window;
      var img = new Image();
      var svg = new Blob([element.data], { type: 'image/svg+xml;charset=utf-8' });



      // Read and draw onto our preCanvas
      var reader = new FileReader();
      reader.readAsDataURL(svg);
      reader.onloadend = function () {

        img.src = reader.result;

        img.onload = function () {

          // Draw the SVG onto the canvas
          preCanvasCtx.drawImage(img, 0, 0);

          // Now get the pixel data
          for (var y = 0; y < img.height; y += 1.6) {
            for (var x = 0; x < img.width; x += 1.6) {

              // Get current pixel
              let pixel = preCanvasCtx.getImageData(x, y, 1, 1).data;

              // Get r,g,b values from pixel
              let r = pixel[0],
              g = pixel[1],
              b = pixel[2],
              a = pixel[3];

              if (a !== 0) {
                // Create a pixel object and stroe that information to it
                let pixelData = {
                  x: x,
                  y: y,
                  r: r,
                  g: g,
                  b: b,
                  a: 255,
                  yv: (random() - 0.5) * 0.8,
                  xv: (random() - 0.5) * 0.8,
                  sx: x,
                  sy: y,
                  initX: x + $(window).width() / 2 - 50,
                  initY: y + $(window).height() / 2 - 50,
                  life: random() * 100



                  // Push this object to a pixel data array
                };element.pixels.push(pixelData);
              }
            }
          }

          console.log(element.pixels.length + ' Total particles');

          // Now we have the pixel data, lets create a second canvas and draw on the pixels

          // So now we have an array filled with all the pixels in the canvas. We can now draw all of them onto a
          // fresh canvas and animate them as we please.

          // Let's start off by creating a canvas element and appending it to the target
          if (element.render) {
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext("2d");

            canvas.id = element.elem.split('.')[1];

            canvas.width = $(window).width() * 2;
            canvas.height = $(window).height() * 2;

            // Append the dynamically generated canvas to the target element.
            $('.scene').append(canvas);

            $('.scene_inner__slider, .wrap').hide();
          }
        };
      };
    });
  }}


class ParticulateElement {
  constructor(elem) {
    this.elem = elem;
    this.children = [];
    this.render = true;
    this.isDispersing = false;
    var that = this;
    this.draw = function (pixel) {

      let canvas = $('#' + that.elem.split('.')[1]).get(0);
      let ctx = canvas.getContext("2d");
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      let x = pixel.x + that.positionX;
      let y = pixel.y + that.positionY;
      let r = pixel.r;
      let g = pixel.g;
      let b = pixel.b;
      let a = pixel.a;
      ctx.fillRect(x, y, 2, 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`; // rgba(10, 10, 10, 255)
      ctx.fill();

    };

    this.morphTo = function (to) {
      for (let i = 0; i < this.pixels.length; i++) {
        var p = this.pixels[i];
        var t = to['pixels'][i];
        TweenLite.fromTo(p, 1.78, {
          x: p.x,
          y: p.y },
        {
          x: t.x,
          y: t.y,
          ease: Elastic.easeOut.config(1.2, .35),
          onUpdateParams: [p],
          delay: .0002 * i,
          onUpdate: this.draw });

      }
    };



    this.disperse = function () {
      let canvas = $('#' + this.elem.split('.')[1]).get(0);
      let ctx = canvas.getContext("2d");

      setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        $('canvas#' + this.elem.split('.')[1] + '--pre').hide();
        $('canvas#' + this.elem.split('.')[1]).show();

        for (let i = 0; i < this.pixels.length; i++) {
          var p = this.pixels[i];

          if (p.life > 0) {
            p.life -= 1;
            p.x += p.xv * Math.sin((150 - p.sx + 1) / (180 / Math.PI));
            p.y += p.yv * Math.sin((150 - p.sx + 1) / (180 / Math.PI));
            p.yv += (random() - 0.5) * 8 / 2.4;
            p.xv += (random() - 0.5) * 8 / 2.4;
            p.a = ~~p.life;
          }
        }

        this.pixels.forEach(function (pixel) {
          if (pixel.life > 0) {

            ctx.beginPath();
            let x = pixel.x + this.positionX;
            let y = pixel.y + this.positionY;
            let r = pixel.r;
            let g = pixel.g;
            let b = pixel.b;
            let a = pixel.a;

            ctx.fillRect(x, y, 2, 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`; // rgba(10, 10, 10, 255)
            ctx.fill();
          }
        }.bind(this));
      }.bind(this), 1000 / 60);
    };
  }

  style(styles) {

    // Style the root element
    this.styles = styles;
    Object.keys(styles).forEach(function (key) {
      let property = key;
      let value = styles[property];
      $(this.elem).css(property, value);
    }.bind(this));
  }

  addChildren(addChildren) {
    let children = addChildren.split(',');

    children.forEach(function (child) {
      this.children[child] = [];
      this.children[child].push(child);
    }.bind(this));
  }

  styleChild(elem, styles) {
    this.children[elem]['style'] = styles;

    // Style child
    Object.keys(this.children[elem]['style']).forEach(function (key) {
      let property = key;
      let value = this.children[elem]['style'][property];
      $(this.elem + ' ' + this.children[elem][0]).css(property, value);
    }.bind(this));
  }}


/* =========================================================================
     
     Add html to particulateUI 
     
     ============================================================================ */

// Instanstiate particulateUI
ParticulateUI = new ParticulateUI();

const tileOne = new ParticulateElement('.slide_one');
const tileTwo = new ParticulateElement('.slide_two');
const tileThree = new ParticulateElement('.slide_three');
const tileFour = new ParticulateElement('.slide_four');
const tileFive = new ParticulateElement('.slide_five');

tileOne.style({
  'background': '#000',
  'width': '150px',
  'height': '180px',
  'border-radius': '8px',
  'color': 'white',
  'font-family': 'Lato',
  'display': 'inline-block',
  'margin-right': '10px',
  'background': 'black',
  'background-repeat': 'no-repeat',
  'background-image': "url(" + avengersImage + ")" });


tileOne.addChildren('.slide_title,.slide_text');

tileOne.styleChild('.slide_title', {
  'font-size': '15px',
  'padding': '70px 20px 0 20px' });


tileOne.styleChild('.slide_text', {
  'font-size': '12px',
  'line-height': '16px',
  'padding': '0 20px 0 20px',
  'opacity': '0.8' });


tileTwo.style({
  'background': '#000',
  'width': '150px',
  'height': '180px',
  'border-radius': '8px',
  'color': 'white',
  'font-family': 'Lato',
  'display': 'inline-block',
  'margin-right': '10px',
  'background': 'black',
  'background-repeat': 'no-repeat',
  'background-image': "url(" + readyPlayerOne + ")" });


tileTwo.addChildren('.slide_title,.slide_text');

tileTwo.styleChild('.slide_title', {
  'font-size': '15px',
  'padding': '70px 20px 0 20px' });


tileTwo.styleChild('.slide_text', {
  'font-size': '12px',
  'line-height': '16px',
  'padding': '0 20px 0 20px',
  'opacity': '0.8' });


ParticulateUI.add(tileTwo, true);

tileThree.style({
  'background': '#000',
  'width': '150px',
  'height': '180px',
  'border-radius': '8px',
  'color': 'white',
  'font-family': 'Lato',
  'display': 'inline-block',
  'margin-right': '10px',
  'background': 'black',
  'background-repeat': 'no-repeat',
  'background-image': "url(" + annabelle + ")" });


tileThree.addChildren('.slide_title,.slide_text');

tileThree.styleChild('.slide_title', {
  'font-size': '15px',
  'padding': '70px 20px 0 20px' });


tileThree.styleChild('.slide_text', {
  'font-size': '12px',
  'line-height': '16px',
  'padding': '0 20px 0 20px',
  'opacity': '0.8' });


tileFour.style({
  'background': '#000',
  'width': '150px',
  'height': '180px',
  'border-radius': '8px',
  'color': 'white',
  'font-family': 'Lato',
  'display': 'inline-block',
  'margin-right': '10px',
  'background': 'black',
  'background-repeat': 'no-repeat',
  'background-image': "url(" + phoenix + ")" });


tileFour.addChildren('.slide_title,.slide_text');

tileFour.styleChild('.slide_title', {
  'font-size': '15px',
  'padding': '70px 20px 0 20px' });


tileFour.styleChild('.slide_text', {
  'font-size': '12px',
  'line-height': '16px',
  'padding': '0 20px 0 20px',
  'opacity': '0.8' });


tileFive.style({
  'background': '#000',
  'width': '150px',
  'height': '180px',
  'border-radius': '8px',
  'color': 'white',
  'font-family': 'Lato',
  'display': 'inline-block',
  'margin-right': '10px',
  'background': 'black',
  'background-repeat': 'no-repeat',
  'background-image': "url(" + avengersImage + ")" });


tileFive.addChildren('.slide_title,.slide_text');

tileFive.styleChild('.slide_title', {
  'font-size': '15px',
  'padding': '70px 20px 0 20px' });


tileFive.styleChild('.slide_text', {
  'font-size': '12px',
  'line-height': '16px',
  'padding': '0 20px 0 20px',
  'opacity': '0.8' });


ParticulateUI.add(tileOne, true);

ParticulateUI.add(tileThree, true);
ParticulateUI.add(tileFour, true);
ParticulateUI.add(tileFive, true);


const textOne = new ParticulateElement('.textOne');

textOne.style({
  'width': '300px',
  'font-family': 'lato',
  'left': '60px',
  'padding-left': '60px',
  'color': 'white' });


textOne.addChildren('.left_title,.left_description,.left_cta');

textOne.styleChild('.left_title', {
  'font-size': '20px',
  'margin-bottom': '10px' });


textOne.styleChild('.left_description', {
  'font-size': '12px',
  'line-height': '16px',
  'opacity': '0.7' });


textOne.styleChild('.left_cta', {
  'padding': '10px 20px 12px 20px',
  'border-radius': '4px',
  'font-size': '14px',
  'color': 'white',
  'border': '2px solid white',
  'display': 'inline-block',
  'margin-top': '20px' });


ParticulateUI.add(textOne, true);

const textTwo = new ParticulateElement('.textTwo');

textTwo.style({
  'width': '300px',
  'font-family': 'lato',
  'left': '60px',
  'padding-left': '60px',
  'color': 'white' });


textTwo.addChildren('.left_title,.left_description,.left_cta');

textTwo.styleChild('.left_title', {
  'font-size': '20px',
  'margin-bottom': '10px' });


textTwo.styleChild('.left_description', {
  'font-size': '12px',
  'line-height': '16px',
  'opacity': '0.7' });


textTwo.styleChild('.left_cta', {
  'padding': '10px 20px 12px 20px',
  'border-radius': '4px',
  'font-size': '14px',
  'color': 'white',
  'border': '2px solid white',
  'display': 'inline-block',
  'margin-top': '20px' });


ParticulateUI.add(textTwo, true);

const textThree = new ParticulateElement('.textThree');

textThree.style({
  'width': '300px',
  'font-family': 'lato',
  'left': '60px',
  'padding-left': '60px',
  'color': 'white' });


textThree.addChildren('.left_title,.left_description,.left_cta');

textThree.styleChild('.left_title', {
  'font-size': '20px',
  'margin-bottom': '10px' });


textThree.styleChild('.left_description', {
  'font-size': '12px',
  'line-height': '16px',
  'opacity': '0.7' });


textThree.styleChild('.left_cta', {
  'padding': '10px 20px 12px 20px',
  'border-radius': '4px',
  'font-size': '14px',
  'color': 'white',
  'border': '2px solid white',
  'display': 'inline-block',
  'margin-top': '20px' });


ParticulateUI.add(textThree, true);

const textFour = new ParticulateElement('.textFour');

textFour.style({
  'width': '300px',
  'font-family': 'lato',
  'left': '60px',
  'padding-left': '60px',
  'color': 'white' });


textFour.addChildren('.left_title,.left_description,.left_cta');

textFour.styleChild('.left_title', {
  'font-size': '20px',
  'margin-bottom': '10px' });


textFour.styleChild('.left_description', {
  'font-size': '12px',
  'line-height': '16px',
  'opacity': '0.7' });


textFour.styleChild('.left_cta', {
  'padding': '10px 20px 12px 20px',
  'border-radius': '4px',
  'font-size': '14px',
  'color': 'white',
  'border': '2px solid white',
  'display': 'inline-block',
  'margin-top': '20px' });


ParticulateUI.add(textFour, true);

const textFive = new ParticulateElement('.textFive');

textFive.style({
  'width': '300px',
  'font-family': 'lato',
  'left': '60px',
  'padding-left': '60px',
  'color': 'white' });


textFive.addChildren('.left_title,.left_description,.left_cta');

textFive.styleChild('.left_title', {
  'font-size': '20px',
  'margin-bottom': '10px' });


textFive.styleChild('.left_description', {
  'font-size': '12px',
  'line-height': '16px',
  'opacity': '0.7' });


textFive.styleChild('.left_cta', {
  'padding': '10px 20px 12px 20px',
  'border-radius': '4px',
  'font-size': '14px',
  'color': 'white',
  'border': '2px solid white',
  'display': 'inline-block',
  'margin-top': '20px' });


ParticulateUI.add(textFive, true);
// Instanstiate a new particulate element class and attach to DOM node
ParticulateUI.render();

var sliderProgress = 0;
var canClick = true;

$('.arrow').click(function () {
  if (canClick) {
    canClick = false;
    if (sliderProgress < 4) {


      sliderProgress++;
      $('#slide_one, #slide_one--pre,#slide_two, #slide_two--pre,#slide_three, #slide_three--pre,#slide_four, #slide_four--pre,#slide_five, #slide_five--pre').css('transform', 'translateX(-' + sliderProgress * 162 + 'px)  translateZ(30px)');
    }
    //textOne.morphTo(textTwo)
    if (sliderProgress == 1) {
      $('.coverTwo').css('clip-path', 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)');
      setTimeout(function () {
        tileOne.disperse();
      }, 300);
      setTimeout(function () {

        $('canvas#textTwo, canvas#textTwo--pre').css('opacity', '1');
      }, 500);
      setTimeout(function () {
        canClick = true;
      }, 1000);

      textOne.disperse();
    }

    if (sliderProgress == 2) {
      $('.coverThree').css('clip-path', 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)');
      setTimeout(function () {
        tileTwo.disperse();
      }, 300);
      setTimeout(function () {
        $('canvas#textThree, canvas#textThree--pre').css('opacity', '1');
      }, 500);
      setTimeout(function () {
        canClick = true;
      }, 1000);
      textTwo.disperse();
    }

    if (sliderProgress == 3) {
      $('.coverFour').css('clip-path', 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)');
      setTimeout(function () {
        tileThree.disperse();
      }, 300);
      setTimeout(function () {
        $('canvas#textFour, canvas#textFour--pre').css('opacity', '1');
      }, 500);
      setTimeout(function () {
        canClick = true;
      }, 1000);
      textThree.disperse();
    }

    if (sliderProgress == 4) {
      $('.coverFive').css('clip-path', 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)');
      setTimeout(function () {
        tileFour.disperse();
      }, 300);
      setTimeout(function () {
        $('canvas#textFive, canvas#textFive--pre').css('opacity', '1');
      }, 500);
      setTimeout(function () {
        canClick = true;
      }, 1000);

      textFour.disperse();
    }
  }
});


$(window).bind('resize', function () {
  window.location.href = window.location.href;
});