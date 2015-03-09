var showNav,hideNav,navShown;
Template.nav.rendered = function() {
/*	var initNav = function(show) {
		if(show){
			$('nav.main').css('top',0).css('opacity',1).css('background-opacity',0);
			alert("alooo")
			navShown = true;
		} else
			navShown = false;
			
	}*/
	navShown = true;
	showNav = function() {
		if(!navShown){
			var tween = new TweenLite($('nav.main'),0.5,{opacity:1,top:0});
			navShown = true;
		}
		
	}
	hideNav = function() {
		if(navShown) {
			var nav = $('nav.main');
			var height = nav.height();
			var tween = new TweenLite(nav,0.5,{opacity:0.5,top:-height});
			navShown = false;
		}

	}
/*	initNav(true);*/
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
Template.nav.events = {
	"click .toggleLang": function(ev) {
		if(Router.getLanguage() == "fr")
			Router.setLanguage("en")
		else
			Router.setLanguage("fr")
	}
}