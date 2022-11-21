        $(document).ready(function() {
          $('select').material_select();
        });

         $('.datepicker').pickadate({
          selectMonths: true, // Creates a dropdown to control month
          selectYears: 15, // Creates a dropdown of 15 years to control year,
          today: 'Today',
          clear: 'Clear',
          close: 'Ok',
          closeOnSelect: true // Close upon selecting a date,
        });


      $(".add_question_field input").keyup(function(){
        if($(".add_question_field input").val() !== ''){     
          $(".add_question_field i").addClass("green-text").removeClass("grey-text text-lighten-2");
        }
        else{
          $(".add_question_field i").removeClass("green-text").addClass("grey-text text-lighten-2");  
        }
      });


// Time Picker ********************
   $('.timepicker').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: true, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function(){} //Function for after opening timepicker
    });

//Models****************************

  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );

  $(document).ready(function(){
    $('.modal').modal();
  });

//Initiate Side Nav *****************

   $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left', 
      closeOnClick: false,
      draggable: true,
    }
  );

  //************* Side Nav Right
    $('.button-collapse-right').sideNav({
      menuWidth: 400, 
      edge: 'right', 
      closeOnClick: false, 
      draggable: true, 
      onOpen: function(el) {

      }, 
      onClose: function(el) {  }, 
    }
  );

 $('.close-filters').sideNav('destroy');

//Initiate Tooltip*******************

    $(document).ready(function(){
      $('.tooltipped').tooltip({delay: 50});
    });


// Tabs
  $(document).ready(function(){
    $('ul.tabs').tabs();
  });  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
  

//Sidebar Toggle**********************

      $(".toggle-sidebar").click(function(){
        $("#main_navigation, #content_wrapper").addClass("collapsed");
        $("#header").addClass("expand");
        $(this).addClass("hide");
        $(".expand-sidebar").removeClass("hide");
        $(".side-nav .logo").find("img").attr('src', 'images/logo-small.png');
      });

      $(".expand-sidebar").click(function(){
        $('div').attr('data-info', '222');
        $("#main_navigation, #content_wrapper").removeClass("collapsed");
        $("#header").removeClass("expand");
        $(this).addClass("hide");
        $(".toggle-sidebar").removeClass("hide");
        $(".side-nav .logo").find("img").attr('src', 'images/logo.png');

      });


      $("#main_navigation ul li a").click(function(){
        $("#main_navigation ul li a").removeClass("active");
        $(this).addClass("active");
      });

// Side Nav Active classes 
$("#main_navigation ul li a").click(function(){
  $("#main_navigation ul li a").removeClass("active");
  $(this).addClass("active");
});      

// Header Search bar
$(".search_button-open").click(function(e){
  $(".search_header").addClass("expand");
  $(".responsive-search").toggleClass("show");
  e.stopPropagation();
});

  var $win = $(window); // or $box parent container
  var $box = $("#header-search");
  
   $win.on("click.Bst", function(event){    
    if ( 
      $box.has(event.target).length == 0 //checks if descendants of $box was clicked
      &&
      !$box.is(event.target) //checks if the $box itself was clicked
    )    {
      $(".search_header").removeClass("expand");
    };
  });



// Product View options
/*$(".product-display ul li a").click(function(){
    $(".product-display ul li a").removeClass("active");
    $(this).addClass("active");
});*/

$(".custom-table .check-table input").change(function(){
  if($(this).is(':checked', true)){
    $(this).closest("tr").addClass("active");
  }
  else{
    $(this).closest("tr").removeClass("active");
  }
});

//Table sorting icons
$(".sortin-icons i").click(function(){
    $(this).parent(".sortin-icons").find("i").removeClass("active");
    $(this).addClass("active");
});

//Media Options 
$(".media-options ul li a").click(function(){
  $(".media-options ul li a").removeClass("active");
  $(this).addClass("active");
});


// Add New Decoration
function decorationAdd() {
    setTimeout(function(){
      $(".modal-overlay").addClass("pattern");
      $(".side-nav, #header").addClass("index-up");
     }, 100);
}

// add class on overlay
$('body').on('click', '.modal-trigger', function(){
  $(".modal-overlay").addClass("pattern");
});

// $('body').on('click', '.showAddress', function(){
//   //alert('test');
//   $(this).toggleClass("active");
// });

$(".switch").find("input[type=checkbox]").on("change",function() {
    var status = $(this).prop('checked');

     $(".shippingAddress").toggleClass("active");
});

//Explore Buttons
function addButtons() {
  $(".add-buttons").toggle();
}

//************ Filter Tags
$(".filter-tags a").click(function(){
  $(this).toggleClass("enabled");
});

  // Select Color
  $('body').on('click', '.color-bullet .color-circle', function() {
    $(this).toggleClass("active");
  });

  // show vendor list

  $('.vendorSelect').click(function(){
    $('.customDropdown').show();
  });

    // Select Size
  $('body').on('click', '.size-bullet .color-circle', function() {
    $(this).toggleClass("active");
  }); 

// Hide Drop Menu
$(".filter-drop h4").click(function(){
  $(this).siblings("div").toggle("");
  $(this).find("a > i").toggleClass("up");
});


$(".applied-filter").click(function(){
 $("#filter-select").addClass("less");
});

function hideoverlay(){
   setTimeout(function(){
   $("#sidenav-overlay").addClass("hide");
   },0);
}

function closenav(){
  $('.close-filters').sideNav('destroy');
}
$(".editQuoteTable tbody tr").click(function(){
  if($(".editQuoteTable tbody tr").not("shadow")){
        $(".editQuoteTable tbody tr").removeClass("shadow");
        $(".editQuoteTable tbody tr td").addClass("input-disabled");
        $(".editQuoteTable tbody tr").removeClass("shadow");
        $(".editQuoteTable tbody tr").children("td").addClass("input-disabled").find(".copy-icon").addClass("hide");
        $(".editQuoteTable tbody tr").children("td").find("input").prop('disabled',true);
    }
});


$(".editQuoteTable tbody tr").click(function(){
    $(".editQuoteTable tbody tr").removeClass("shadow");
    $(this).addClass("shadow");
    if($(".editQuoteTable tbody tr").hasClass("shadow")){
        $(".editQuoteTable tbody tr.shadow").children("td").removeClass("input-disabled").find(".copy-icon").removeClass("hide");
        $(".editQuoteTable tbody tr.shadow").children("td").find("input").prop('disabled', false);
        $(".editQuoteTable tbody tr.shadow").children("td").find(".select-wrapper").removeClass("disabled");
    }
      $(".editQuoteTable tbody tr.shadow").find("input").focusout(function() {
        $(this).attr("disabled","disabled");
      });  
});


/*$(".editQuoteTable tbody tr .input-field").click(function(){
  setTimeout(function(){
    $(this).parents("td").removeClass("input-disabled");
    $(this).children("td").find(".select-wrapper").removeClass("disabled");
    $(this).prop('disabled', false);
   }, 500);
});*/

  


// Add New Decoration
function watchVideo() {
    setTimeout(function(){
      $(".modal-overlay").addClass("pattern");
      $(".side-nav, #header").addClass("index-up");
     }, 100);
}

//**********  Initiate Carousal
   $('.carousel').carousel();
$(".attachment-listing ul li a").click(function(){
     $('.carousel').carousel();
  });

$(window).on('click','.attachment-listing ul li a', function(){
  $('.carousel').carousel();
});
$(".attachment-listing ul li a").click(function(){
    setTimeout(function(){
      $(".modal-overlay").addClass("pattern");
      $(".side-nav, #header").addClass("index-up");
     }, 100);
});

$(".product-wrapper .options-product ul li").mouseenter(function(){
    $(this).parents(".options-product").css("overflow","visible");    
});

$(".product-wrapper").mouseleave(function(){
  $(".product-wrapper .options-product").css("overflow","hidden");
});

$("#mobile-filters").click(function(){
  $(".filters-left .sort-by, .filter-right-catalog").toggle("");
});

// Toggle Size Chart Quote Detail page
function togglechart(){
  $(".nested-table").toggleClass("hide",1000);
};


// Open Add Customer Dropdown
function customerDropdown(){
  $(".customDropdown").toggle("");
};

// Add Name Category

$('body').on('click', '.WrappercustomerList .customerList li a', function() {
  var listValue = $(this).text();
  console.log(listValue);
  $(this).parents(".nameDropdownWrapper").children("span").find("div").text(listValue);
  $(".customDropdown").hide();
}); 


// Search Customers 

$(".quoteCustomerSearch .custom-search #addCust_search").focus(function(){
  $(this).siblings(".customDropdown").show("");
  $(this).siblings(".customDropdown").find("ul").children("li").click(function(){  
    $(this).parents(".custom-search").siblings("h5").removeClass("hide");
    $(this).parents(".custom-search").addClass("hide");
    $(this).parents(".quoteCustomerSearch").siblings(".details_cust").removeClass("hide");
  });
});

$(".quoteCustomerSearch .custom-search #addCust_search").focusout(function(){
  $(this).siblings(".customDropdown").hide("");
});


// Add Tax 
$(".calcTax >  input[type=text]").focus(function(){
  $(this).siblings("#taxDropdown").show("");
  $(this).siblings("#taxDropdown").find(".taxList li a").click(function(){
    var valTax = $(this).text();
    $(this).parents("#taxDropdown").siblings("input").val(valTax);
  });

$(this).siblings("#taxDropdown").find("a.addNewTax").click(function(){
    $(this).parents("#taxDropdown").siblings("#introNewTax").show("");
    $(this).parents("#taxDropdown").siblings("#introNewTax").find(".taxList > li > a").click(function(){
      var addNewTax = $(this).text();     
      //console.log(addNewTax); 
      $(this).parents("#introNewTax").siblings("input").val(addNewTax);
      $(this).parents("#introNewTax").hide();
    });
  });

});
$(".calcTax >  input[type=text]").focusout(function(){
  $(this).siblings("#taxDropdown").hide("");
});

//Remove tag
$('.removeTag').click(function() {
  //alert('test');
  $(this).parent().hide();
});



$('body').on('click', '.closeBtnCust', function() {  
  $('#includedCustContent').removeClass('iamActive'); 
});

$('.addCust').click(function() {
  $('#includedCustContent').addClass('iamActive'); 
});





// Double Range Slider
  var slider = document.getElementById('double-slider');
  noUiSlider.create(slider, {
   start: [0, 20],
   connect: true,
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': 0,
     'max': 100
   },
   format: wNumb({
     decimals: 0
   })
  });

// Double Range Slider
  var slider = document.getElementById('double-slider-1');
  noUiSlider.create(slider, {
   start: [00, 20],
   connect: true,
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': 0,
     'max': 100
   },
   format: wNumb({
     decimals: 0
   })
  });

