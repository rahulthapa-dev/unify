/**
* 
*
* 
* @version 1.1.0
**/

"use strict";
!function () {

    window.Element.prototype.removeClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.remove(className);
        }
        return this;
    }, window.Element.prototype.addClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.add(className);
        }
        return this;
    }, window.Element.prototype.toggleClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.toggle(className);
        }
        return this;
    }, window.Element.prototype.isVariableDefined = function () {
        return !!this && typeof (this) != 'undefined' && this != null;
    }
}();

// Get CSS var value
var ThemeColor = function () {
  return {
    getCssVariableValue: function (e) {
      var t = getComputedStyle(document.documentElement).getPropertyValue(e);
      return t && t.length > 0 && (t = t.trim()), t;
    }
  };
}();

var e = {
    init: function () {
        e.preLoader(),
        e.stickyHeader(),
        e.stickyBar(),
        e.backTotop(),
        e.enableIsotope(),
        e.choicesSelect(),
        e.aosFunc()
        
    },
    isVariableDefined: function (el) {
        return typeof !!el && (el) != 'undefined' && el != null;
    },
    getParents: function (el, selector, filter) {
        const result = [];
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        // match start from parent
        el = el.parentElement;
        while (el && !matchesSelector.call(el, selector)) {
            if (!filter) {
                if (selector) {
                    if (matchesSelector.call(el, selector)) {
                        return result.push(el);
                    }
                } else {
                    result.push(el);
                }
            } else {
                if (matchesSelector.call(el, filter)) {
                    result.push(el);
                }
            }
            el = el.parentElement;
            if (e.isVariableDefined(el)) {
                if (matchesSelector.call(el, selector)) {
                    return el;
                }
            }

        }
        return result;
    },
    getNextSiblings: function (el, selector, filter) {
        let sibs = [];
        let nextElem = el.parentNode.firstChild;
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        do {
            if (nextElem.nodeType === 3) continue; // ignore text nodes
            if (nextElem === el) continue; // ignore elem of target
            if (nextElem === el.nextElementSibling) {
                if ((!filter || filter(el))) {
                    if (selector) {
                        if (matchesSelector.call(nextElem, selector)) {
                            return nextElem;
                        }
                    } else {
                        sibs.push(nextElem);
                    }
                    el = nextElem;

                }
            }
        } while (nextElem = nextElem.nextSibling)
        return sibs;
    },
    on: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            if (!(selectors instanceof HTMLElement) && selectors !== null) {
                selectors = document.querySelector(selectors);
            }
            selectors.addEventListener(type, listener);
        });
    },
    onAll: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(selectors).forEach((element) => {
                if (type.indexOf(',') > -1) {
                    let types = type.split(',');
                    types.forEach((type) => {
                        element.addEventListener(type, listener);
                    });
                } else {
                    element.addEventListener(type, listener);
                }


            });
        });
    },
    removeClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.removeClass(className);
        }
    },
    removeAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors) && (selectors instanceof HTMLElement)) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.removeClass(className);
            });
        }

    },
    toggleClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.toggleClass(className);
        }
    },
    toggleAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors)  && (selectors instanceof HTMLElement)) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.toggleClass(className);
            });
        }
    },
    addClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.addClass(className);
        }
    },
    select: function (selectors) {
        return document.querySelector(selectors);
    },
    selectAll: function (selectors) {
        return document.querySelectorAll(selectors);
    },

    

    // START: 01 Preloader
    preLoader: function () {
        window.onload = function () {
            var preloader = e.select('.preloader');
            if (e.isVariableDefined(preloader)) {
                preloader.className += ' animate__animated animate__fadeOut';
                setTimeout(function(){
                    preloader.style.display = 'none';
                }, 200);
            }
        };
    },
    // END: Preloader

    

    // START: 03 Sticky Header
    stickyHeader: function () {
        var stickyNav = e.select('.navbar-sticky');
        if (e.isVariableDefined(stickyNav)) {
            var stickyHeight = stickyNav.offsetHeight;
            stickyNav.insertAdjacentHTML('afterend', '<div id="sticky-space"></div>');
            var stickySpace = e.select('#sticky-space');
            if (e.isVariableDefined(stickySpace)) {
                document.addEventListener('scroll', function (event) {
                    var scTop = window.pageYOffset || document.documentElement.scrollTop;
                    if (scTop >= 400) {
                        stickySpace.addClass('active');
                        e.select("#sticky-space.active").style.height = stickyHeight + 'px';
                        stickyNav.addClass('navbar-sticky-on');
                    } else {
                        stickySpace.removeClass('active');
                        stickySpace.style.height = '0px';
                        stickyNav.removeClass("navbar-sticky-on");
                    }
                });
            }
        }
    },
    // END: Sticky Header

    

    
    // START: 05 Sticky Bar
    stickyBar: function () {
        var sb = e.select('[data-sticky]');
        if (e.isVariableDefined(sb)) {
            var sticky = new Sticky('[data-sticky]');
        }
    },
    // END: Sticky Bar

    // START: 08 Back to Top
    backTotop: function () {
        var scrollpos = window.scrollY;
        var backBtn = e.select('.back-top');
        if (e.isVariableDefined(backBtn)) {
            var add_class_on_scroll = () => backBtn.addClass("back-top-show");
            var remove_class_on_scroll = () => backBtn.removeClass("back-top-show");

            window.addEventListener('scroll', function () {
                scrollpos = window.scrollY;
                if (scrollpos >= 800) {
                    add_class_on_scroll()
                } else {
                    remove_class_on_scroll()
                }
            });

            backBtn.addEventListener('click', () => window.scrollTo({
                top: 0,
                behavior: 'smooth',
            }));
        }
    },
    // END: Back to Top

    

    // START: 11 Isotope
    enableIsotope: function () {
        var isGridItem = e.select('.grid-item');
        if (e.isVariableDefined(isGridItem)) {

            // Code only for normal Grid
            var onlyGrid = e.select('[data-isotope]');
            if (e.isVariableDefined(onlyGrid)) {
                var allGrid = e.selectAll("[data-isotope]");
                allGrid.forEach(gridItem => {
                    var gridItemData = gridItem.getAttribute('data-isotope');
                    var gridItemDataObj = JSON.parse(gridItemData);
                    var iso = new Isotope(gridItem, {
                        itemSelector: '.grid-item',
                        layoutMode: gridItemDataObj.layoutMode
                    });

                    imagesLoaded(gridItem).on('progress', function () {
                        // layout Isotope after each image loads
                        iso.layout();
                    });
                });
            }

            // Code only for normal Grid
            var onlyGridFilter = e.select('.grid-menu');
            if (e.isVariableDefined(onlyGridFilter)) {
                var filterMenu = e.selectAll('.grid-menu');
                filterMenu.forEach(menu => {
                    var filterContainer = menu.getAttribute('data-target');
                    var a = menu.dataset.target;
                    var b = e.select(a);
                    var filterContainerItemData = b.getAttribute('data-isotope');
                    var filterContainerItemDataObj = JSON.parse(filterContainerItemData);
                    var filter = new Isotope(filterContainer, {
                        itemSelector: '.grid-item',
                        transitionDuration: '0.7s',
                        layoutMode: filterContainerItemDataObj.layoutMode
                    });

                    var menuItems = menu.querySelectorAll('li a');
                    menuItems.forEach(menuItem => {
                        menuItem.addEventListener('click', function (event) {
                            var filterValue = menuItem.getAttribute('data-filter');
                            filter.arrange({filter: filterValue});
                            menuItems.forEach((control) => control.removeClass('active'));
                            menuItem.addClass('active');
                        });
                    });

                    imagesLoaded(filterContainer).on('progress', function () {
                        filter.layout();
                    });
                });
            }

        }
    },
    // END: Isotope

    // START: 12 Choices
    choicesSelect: function () {
       var choice = e.select('.js-choice');
       
       if (e.isVariableDefined(choice)) {
         var element = document.querySelectorAll('.js-choice');

         element.forEach(function (item) {
           var removeItemBtn = item.getAttribute('data-remove-item-button') == 'true' ? true : false;
           var placeHolder = item.getAttribute('data-placeholder') == 'false' ? false : true;
           var placeHolderVal = item.getAttribute('data-placeholder-val') ? item.getAttribute('data-placeholder-val') : 'Type and hit enter';
           var maxItemCount = item.getAttribute('data-max-item-count') ? item.getAttribute('data-max-item-count') : 3;
           var searchEnabled = item.getAttribute('data-search-enabled') == 'false' ? false : true;

           var choices = new Choices(item, {
               removeItemButton: removeItemBtn,
               placeholder: placeHolder,
               placeholderValue: placeHolderVal,
               maxItemCount: maxItemCount,
               searchEnabled: searchEnabled
           });

         });
       }
    },
    // END: Choices

    // START: 13 AOS Animation
    aosFunc: function () {
        var aos = e.select('.aos');
        if (e.isVariableDefined(aos)) {
            AOS.init({
                duration: 500,
                easing: 'ease-out-quart',
                once: true
            });
        }
    },
    // END: AOS Animation

    

    // START: 22 Stepper
    stepper: function () {
        var stp = e.select('#stepper');
        if (e.isVariableDefined(stp)) {
          var nxtBtn = document.querySelectorAll('.next-btn');
          var prvBtn = document.querySelectorAll('.prev-btn');

          var stepper = new Stepper(document.querySelector('#stepper'), {
            linear: false,
            animation: true
          });

          nxtBtn.forEach(function (button) {
            button.addEventListener("click", () =>{
            stepper.next()
          })
          });

          prvBtn.forEach(function (button) {
            button.addEventListener("click", () =>{
            stepper.previous()
          })
          });
        }
    },
    // END: Stepper

    // START: 26 Sticky element
    stickyElement: function () {
    var scrollpos = window.scrollY;
    var sp = e.select('.sticky-element');
    if (e.isVariableDefined(sp)) {
        var add_class_on_scroll = () => sp.addClass("sticky-element-sticked");
        var remove_class_on_scroll = () => sp.removeClass("sticky-element-sticked");

        window.addEventListener('scroll', function () {
            scrollpos = window.scrollY;
            if (scrollpos >= 800) {
                add_class_on_scroll()
            } else {
                remove_class_on_scroll()
            }
        });
    }
    },
    // END: Sticky element

 
    // START: 27 Overlay scrollbars
    overlayScrollbars: function () {
      var os = e.select('.custom-scrollbar');
      if (os) {
        document.addEventListener("DOMContentLoaded", function() {
          var cs = document.querySelectorAll('.custom-scrollbar');
          cs.forEach(c => {
              OverlayScrollbars(c, {
                scrollbars: {
                  autoHide: 'leave',
                  autoHideDelay: 200
                },
                overflowBehavior : {
                    x : "visible-hidden",
                    y : "scroll"
                }
               });
          });
        });
      }
    }
    // END: Overlay scrollbars

};
e.init();