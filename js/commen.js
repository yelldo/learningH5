/**
 * Created by ludynice on 2017/4/6.
 */

/*nav*/
$(function(){
    $('.nav_box li').hover(function(){
        $('span',this).stop().css('height','2px');
        $('span',this).animate({
            left:'0',
            width:'100%',
            right:'0'
        },200);
    },function(){
        $('span',this).stop().animate({
            left:'50%',
            width:'0'
        },200);
    });
});

