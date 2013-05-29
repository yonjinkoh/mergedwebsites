$(document).ready(function(){

$("#intro").click(function(){
	$('body, html').animate({ scrollTop: '550px'}, 800);
});

$("#references").click(function(){
	$('body, html').animate({ scrollTop: '1005px'}, 800);
});

$("#credits").click(function(){
	$('body, html').animate({ scrollTop: '4505px'}, 800);
});



$(window).scroll(function() {
		
var scrollOffset = $(window).scrollTop();
	
console.log(scrollOffset);

if (scrollOffset >= 0 && scrollOffset <= 10) {
		$("#headlineText").html(" ");
		$("#centerContent").html(" ");
		$('#intro').css("border-bottom", "solid black 2px");
		$('#references').css("border-bottom", "none");
		$('#credits').css("border-bottom", "none");
		$('#captions').html(" ");
		$('#aboutMe').html("");
		$('#page-wrap').css("background-color", "white");
		$('body').css("color","black");
	}
	else if (scrollOffset >= 10 && scrollOffset <= 100) {
			$("#headlineText").html("Week");
			$("#centerContent").html(" ");
			$('#intro').css("border-bottom", "solid black 2px");
			$('#references').css("border-bottom", "none");
			$('#credits').css("border-bottom", "none");
			$('#captions').html(" ");
			$('#aboutMe').html("");
			$('#page-wrap').css("background-color", "white");
			$('body').css("color","black");
		}
	else if (scrollOffset > 100 && scrollOffset <= 200) {
		$("#headlineText").html("Week").append("<br /> in");
		$("#centerContent").html(" ");
		$('#intro').css("border-bottom", "solid black 2px");
		$('#references').css("border-bottom", "none");
		$('#credits').css("border-bottom", "none");
		$('#captions').html(" ");
		$('#aboutMe').html("");
		$('#page-wrap').css("background-color", "white");
		$('body').css("color","black");
	}
	else if (scrollOffset > 300 && scrollOffset <= 500) {
		$("#headlineText").html("Week").append("<br /> in").append("<br /> References");
		$("#centerContent").html(" ");
		$('#intro').css("border-bottom", "solid black 2px");
		$('#references').css("border-bottom", "none");
		$('#credits').css("border-bottom", "none");
		$('#captions').html(" ");
		$('#aboutMe').html("");
		$('#page-wrap').css("background-color", "white");
		$('body').css("color","black");
	}
	else if (scrollOffset > 500 && scrollOffset <= 1000) {
		$("#headlineText").html("Week").append("<br /> in").append("<br /> References").append("<br /> <div id='smallType'>(via Tumblr)</div>");
		$("#centerContent").html(" ");
		$('#intro').css("border-bottom", "solid black 2px");
		$('#references').css("border-bottom", "none");
		$('#credits').css("border-bottom", "none");
		$('#captions').html(" ");
		$('#aboutMe').html("");
		$('#page-wrap').css("background-color", "white");
		$('body').css("color","black");
	}
	else if (scrollOffset > 1000 && scrollOffset <= 1700) {
		$("#headlineText").html(" ");
		$("#centerContent").html("<img src='img/1.jpg' />");
		$('#intro').css("border-bottom", "none");
		$('#references').css("border-bottom", "solid black 2px");
		$('#credits').css("border-bottom", "none");
		$('#captions').html("").html("<span class='paragraphOne'>1</span> <span class='paragraphTwo'>HENNING BOHL'S exhibition at Casey Kaplan Gallery in New York City entitled, History of Garden Theory.</span>");
		$('#aboutMe').html("");
		$('#page-wrap').css("background-color", "#fb492b");
		$('body').css("color","white");
	}
	else if (scrollOffset > 1700 && scrollOffset <= 2400) {
		$("#headlineText").html(" ");
		$("#centerContent").html("<img src='img/2.jpg' />");
		$('#intro').css("border-bottom", "none");
		$('#references').css("border-bottom", "solid black 2px");
		$('#credits').css("border-bottom", "none");
		$('#captions').html("").html("<span class='paragraphOne'>2</span> <span class='paragraphTwo'>DANIEL BUREN'S performance, Voile/Toile, <br />was a piece consisting of boat races folled by museum displays of sail-canvasses originally created for a regatta in Berlin in 1975.</span>");
		$('#aboutMe').html("");
		$('#page-wrap').css("background-color", "#5d4328");
		$('body').css("color","white");
	}
	else if (scrollOffset > 2400 && scrollOffset <= 3100) {
		$("#headlineText").html(" ");
		$("#centerContent").html("<img src='img/3.jpg' />");
		$('#intro').css("border-bottom", "none");
		$('#references').css("border-bottom", "solid black 2px");
		$('#credits').css("border-bottom", "none");
		$('#captions').html("").html("<span class='paragraphOne'>3</span> <span class='paragraphTwo'>How to Build Your Own Living Structures, is a book about modular, flexible living structures written by KEN ISAACS in 1974.</span>");
		$('#aboutMe').html("");
		$('#page-wrap').css("background-color", "#cfa24f");
		$('body').css("color","white");
	
	}
	else if (scrollOffset > 3100 && scrollOffset <= 3800) {
		$("#headlineText").html(" ");
		$("#centerContent").html("<iframe src='http://player.vimeo.com/video/36347459?byline=0&amp;portrait=0&amp;color=00ff97' width='500' height='375' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
		$('#intro').css("border-bottom", "none");
		$('#references').css("border-bottom", "solid black 2px");
		$('#credits').css("border-bottom", "none");
		$('#captions').html("").html("<span class='paragraphOne'>4</span> <span class='paragraphTwo'>FIGURE is a Paris-based cultural journal featuring art, design, music, architecture, nature, medias, gastronomy, style, sport and art de vivre investigations.</span>");
		$('#aboutMe').html("");
		$('#page-wrap').css("background-color", "#13ff97");
		$('body').css("color","white");
	}
	else if (scrollOffset > 3800 && scrollOffset <= 4500) {
		$("#headlineText").html(" ");
		$("#centerContent").html("<img src='img/4.jpg' />");
		$('#intro').css("border-bottom", "none");
		$('#references').css("border-bottom", "solid black 2px");
		$('#credits').css("border-bottom", "none");
		$('#captions').html("").html("<span class='paragraphOne'>5</span> <span class='paragraphTwo'>ARMIN HOFMANN is a Swiss graphic designer and head of the design department at the Schule Fur Gestaltung Basel.</span>");
		$('#aboutMe').html("");
		$('#page-wrap').css("background-color", "black");
		$('body').css("color","white");
	}
	else if (scrollOffset > 4500 && scrollOffset <= 5000) {
		$("#headlineText").html(" ");
		$("#centerContent").html("");
		$('#intro').css("border-bottom", "none");
		$('#references').css("border-bottom", "none");
		$('#credits').css("border-bottom", "solid black 2px");
		$('#captions').html("");
		$('#aboutMe').html("<span id='aboutMeParagraphOne'>ABOUT</span>Eric Nylund is a graphic designer based in New Haven, Connecticut and Brooklyn, New York. This is a weekly update of the work that is currently influencing his practice.<br /><br /><span id='aboutMeParagraphOne'>ARCHIVE</span><a href='index.html'>Current</a>, 27 May 2013, 3 June 2013");
		$('#page-wrap').css("background-color", "white");
		$('body').css("color","black");
	}

	
});




});

