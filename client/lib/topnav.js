Template.topnav.events = {
	"click .toggleLang": function(ev) {
		if(Router.getLanguage() == "fr")
			Router.setLanguage("en")
		else
			Router.setLanguage("fr")
	},
	"click .toggle": function(){
		var nav = $('nav.topnav');
		if(nav.attr("data-hidden") == "false") {
			var height = nav.height();
			var tween = new TweenLite(nav,0.5,{marginTop:-height});
			nav.attr("data-hidden","true")
		} else {
			var tween = new TweenLite(nav,0.5,{marginTop:0});
			var items = $('nav.topnav .item');
			var itemTween = TweenMax.staggerFrom(items, 0.6, {opacity:0, marginTop:"-80px"},0.25);
			nav.attr("data-hidden","false");
		}
		
	}
}

Template.topnav.rendered = function() {
	var nav = $('nav.topnav');
	var height = nav.height();
	nav.css('margin-top',-height);
	

	;(function () {
		var previousScroll = 0;

	$(window).scroll(function(){
	   var currentScroll = $(this).scrollTop();
	   if (currentScroll > previousScroll){
		   if(nav.attr("data-hidden") == "false")
		   $('nav.topnav .toggle').click();
	   }
	   previousScroll = currentScroll;
	});
	}());	
}