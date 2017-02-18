$(function(){
     
        
       /* var header = document.getElementById('header');
        
        var headroom  = new Headroom(header);
        
        headroom.init(); */
         
    

    
 /*(function($) {
     
        $.fn.visible = function(partial) {
            
            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;
            
            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

        };
            
        })(jQuery);

        var win = $(window);

        var allMods = $(".descripcion");
    

        allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible"); 
        } 
        });

        win.scroll(function(event) {
        
        allMods.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
            el.addClass("come-in"); 
            } 
        });
        });

*/

});


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('#navegacion-rr ul li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 2000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navegacion-rr a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navegacion-rr ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


