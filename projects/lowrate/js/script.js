 $(document).ready(function(){

// Call Modals 
	$('.modal').modal();
// Calling Dropdowns  
	$('select').material_select();

	// Registratiion page card Detail toggles 
	$("#visaDetail").click(function(){
		$(this).parents(".methods").hide();
		$(this).parents(".methods").siblings(".cardDetail").show();
	});

	$("#saveCard").click(function(){
		$(this).parents(".cardDetail").hide();
		$(this).parents(".cardDetail").siblings(".saveCardDetail").show();
	});
	$("#payPalDetail").click(function(){
		$(this).parents(".methods").hide();
		$(this).parents(".methods").siblings(".paypal_payment").show();
	});
});

// User Detail Page Tabs
/*$(".detail_Tabs .tab_Group a").click(function(){
	$(".detail_Tabs .tab_Group a").removeClass("active");
	$(this).addClass("active");
}); */

$("#userCalls").click(function(){
	$(".tab").hide();
	$(".detail_Tabs .tab_two").show();
});

$("#userpolicy").click(function(){
	$(".tab").hide();
	$(".detail_Tabs .tab_one").show();
});

$("#chat").click(function(){
	$(".tab").hide();
	$(".detail_Tabs .tab_call").show();
});


// Initialize Sidenav
$(".button-collapse").sideNav();

// Agent Dashboard Page
$("#agents").click(function(){
	$(".agents_avail").toggleClass("expanded");
});


// User Details Page More Tabs
/*var autocollapse = function() {
  
  var tabs = $('.tab_Group');
  var tabsHeight = tabs.innerHeight();
  
  if (tabsHeight >= 50) {
    while(tabsHeight > 50) {
      //console.log("new"+tabsHeight);      
      var children = tabs.children('li:not(:last-child)');
      var count = children.length;
      console.log(count); 
      $(children[count-1]).prependTo('#moreList');     
      tabsHeight = tabs.innerHeight();
    }
  }
  else {
  	while(tabsHeight < 50 && (tabs.children('li').size()>0)) {      
      var collapsed = $('#moreList').children('li');
      var count = collapsed.length;
      //console.log(count);
      $(collapsed[0]).insertBefore(tabs.children('li:last-child'));	
      tabsHeight = tabs.innerHeight();
    }
    if (tabsHeight>50) { // double chk height again
    	autocollapse();
    }
  }
  
};
$(document).ready(function() {
  	autocollapse(); // when document first loads
	$(window).on('resize', autocollapse); // when window is resized
});
*/

// Initiate Modal
$('.modal').modal({
  dismissible: true, // Modal can be dismissed by clicking outside of the modal
  opacity: .5, // Opacity of modal background
  inDuration: 300, // Transition in duration
  outDuration: 200, // Transition out duration
  startingTop: '5%', // Starting top style attribute
  endingTop: '10%', // Ending top style attribute
  ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    alert("Ready");
    console.log(modal, trigger);
  },
  complete: function() { alert('Closed'); } // Callback for Modal close
}
);

// Ongoing Call Right side
var callchatheight = function() {
var panelHeight = $(".ongoingCall .chat").height();
var chatHeight = $(".ongoingCall .chat_msgs").height();
if(chatHeight > panelHeight){
	$(".ongoingCall .chat_msgs").css({"max-height":panelHeight+"px"});
/*	console.log(chatHeight);	
	console.log(chatHeight);*/	
} 
else{
	$(".ongoingCall .chat_msgs").css({"height":panelHeight+"px"});
/*	console.log(chatHeight);	
	console.log(chatHeight);*/
}
};
$(window).on('resize', callchatheight);

// Calling box options
$(".call_options i").click(function(){
  $(".call_options i").removeClass("active");
  $(this).addClass("active");
});

// Agent List Page Call click 
$(".userListSection .action .make_call").click(function(){
  $(".ongoingCall").removeClass("cut chat_only").addClass("default_call active");
});

/*$(".userListSection .action .send_message").click(function(){
  $(".ongoingCall").removeClass("default_call").addClass("chat_only active");
});*/

$(".call_chat").click(function(){
  if($(".ongoingCall").hasClass("default_call")){
    //console.log("Class Found");
    $(".ongoingCall").removeClass("default_call");
  }
  else{
    $(".ongoingCall").addClass("default_call");
  }
});

$(".end_call").click(function(){
  $(".ongoingCall").addClass("cut");
  setTimeout(function(){
     $(".ongoingCall").removeClass("default_call active").addClass("cut");
  }, 2000); 
});

$('body').on('click', function () {
  var imgWidth = $("#imgpreview img").width();
  $("#imgpreview").width(imgWidth);
});