(function ($) {
	$(document).ready(function(){
		var types = gmo_go_to_top.types;
		var fontsytle = gmo_go_to_top.fontsytle;
		var color = gmo_go_to_top.color;
		var image = gmo_go_to_top.image;
		var iconsize = gmo_go_to_top.iconsize;
		var marginlr = gmo_go_to_top.marginlr;
		var marginbottom = gmo_go_to_top.marginbottom;
		var direction = gmo_go_to_top.direction;
		
		scrollev();
		
		if(types == 'icon_select'){
			var goup= '<i class="'+fontsytle+'"></i>';
		}
		if(types == 'images_select'){
			var goup= '<img src="'+image+'">';
		}
		
		//set
		var cssscript = {};
		cssscript['color'] = color;
		cssscript[direction] = marginlr + 'px';
		cssscript['bottom'] = marginbottom+ 'px';
		cssscript['font-size'] = iconsize+ 'px';
		$("#gmo_go_top").css(cssscript);
		$("#gmo_go_top").append(goup);

		//go top
		$("#gmo_go_top").click(function () {
			$('html,body').animate({ scrollTop: 0 }, 'fast');
			return false;
		});
		$(window).scroll(function() {
			scrollev();
		});
		function scrollev(){
			if ($(window).scrollTop() > 100) {
				 $("#gmo_go_top").fadeIn();
			} else {
				$("#gmo_go_top").fadeOut();
			}
		}
	});
})(jQuery);
/* <![CDATA[ */
var gmo_go_to_top = {"types":"icon_select","fontsytle":"gene genericon-collapse","color":"#e2e2e2","direction":"right","iconsize":"40","marginlr":"30","marginbottom":"30"};
/* ]]> */