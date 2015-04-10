$(document).ready(
    function(){
        //rotate the screen shots
        $('#screenshots').innerfade({
            animationtype: 'fade',
            speed: 1500,
            timeout: 2000,
            type: 'sequence',
            containerheight: '460px'
        });
        //use fancy box if we ever need it again
        // $(".fancybox").fancybox({
            //maxWidth	: 500,
            //maxHeight	: 600,
            //fitToView	: false,
            //padding : 40,
            //width		: '95%',
            //height		: '95%',
            //autoSize	: false,
            //closeClick	: false,
            //openEffect	: 'none',
            //closeEffect	: 'none'
            //});
        });
