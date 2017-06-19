/**
 * Created by ludynice on 2017/4/6.
 */

/*nav*/
$(function(){

    $(".banner_box").my_slider({
        width:"1920",height:"800",interval:3000,selected:"seleted",deriction:"left",classSelector:"slider"});

/*    //banner 图片轮播
    var picIndex = 0;
    var moveLeftId = setInterval(moveLeft,1000);
    function moveLeft() {
        $('.banner li').hide();
        $('.banner li').eq(picIndex).show();
        picIndex=picIndex+1;
        if(picIndex>3){
            picIndex=0;
        }
    }*/

    $('.nav_box li').hover(function(){
        $('span',this).stop().css('height','2px');
        $('span',this).animate({
            left:'0',
            width:'100%',
            right:'0'
        },100);
    },function(){
        $('span',this).stop().animate({
            left:'50%',
            width:'0'
        },100);
    });
});
