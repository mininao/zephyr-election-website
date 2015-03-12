var showNav,hideNav,navShown;
Template.nav.rendered = function() {
	navShown = false;
	showNav = function() {
		if(!navShown){
			var tween = new TweenLite($('nav.main'),0.5,{opacity:1,top:0});
			navShown = true;
		}
		
	}
	hideNav = function(nomove) {
		if(navShown) {
			var nav = $('nav.main');
			var height = nav.height();
			if(nomove === true)
				var tween = new TweenLite(nav,0.15,{opacity:0,top:-height});
			else
				var tween = new TweenLite(nav,0.5,{opacity:0.5,top:-height});
			navShown = false;
		}

	}
	$('nav.main .menu').on("click", function(){
		$('nav.topnav .toggle').click();
		hideNav(true);
	});
	
	
	
	;(function () {
		var previousScroll = 0;

		$(window).scroll(function(){
		   var currentScroll = $(this).scrollTop();
		   if (currentScroll > previousScroll){
			   hideNav();
		   } else {
			  showNav();
		   }
		   previousScroll = currentScroll;
		});
	}());	
}
/*Template.nav.events = {
	"click .menu": function() {
		$('nav.topnav .toggle').click();
		
	}
}*/