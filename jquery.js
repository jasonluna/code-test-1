// jquery part 1
// jquery part 2
$("#clickEvent").click(function(){  
  $( "<p>This is a click Event</p>").appendTo( "#clickEvent" );  
});
$("#clickEvent").dblclick(function(){  
 $( "<p>This is a double-click Event</p>"  ).appendTo( "#clickEvent" );  
})

// jquery part 3
$("#h1").click(function(){  
  $( "#h1").hide( "#h1" );  
});
$("#h2").click(function(){  
 $( "#h2"  ).hide( "#h2" );  
})
$("#h3").click(function(){  
 $( "#h3"  ).hide( "#h3" );  
})

// jquery part 4 

$("div").on( "click", "#color", function( event ) {
  $(event.delegateTarget ).css( "background-color", "#66ff99");
});