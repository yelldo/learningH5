// JavaScript Document
$(function(){
    //功能区交互效果
    var img_num=0//记录图像位置数
    $(".shop dl").mouseenter(//鼠标经过
        function(){
            img_num = $(".shop dl").index($(this))//这张图位置数就是当前标题是四个标题中的哪一个
            //四个按钮都恢复到灰色图
            $(".d_title img:eq(0)").attr("src","images/shop_img00_gray.png")
            $(".d_title img:eq(1)").attr("src","images/shop_img01_gray.png")
            $(".d_title img:eq(2)").attr("src","images/shop_img02_gray.png")
            $(".d_title img:eq(3)").attr("src","images/shop_img03_gray.png")
            //当前按钮的图片属性设置为彩色的图
            $(this).find("img").attr("src","images/shop_img0"+img_num+".png")
        }
    )
    //广告区交互效果
    //控图圆形按钮
    var n=0//广告图的位置数
    //定时器
    var tLeft=setInterval(runLeft,3000)//自动向左走
    var tRight=setInterval(runRight,3000)//自动向右走的变量名
    clearInterval(tRight)//停止向右走
    $(".ctrl span").click(
        function(){
            n=$(this).index()//当前按钮是第几个
            $(".bn_dots li").removeClass("add")//所有按钮去掉当前样式类
            $(this).addClass("add")//点谁谁添加当前样式类
            $(".banner_box .banner").stop().animate({marginLeft:-960-(1920*n)})//让图片行走相应的距离
            clearInterval(tLeft)
            clearInterval(tRight)
            if(n<3){
                tLeft = setInterval(runLeft,3000)
            }else{
                tRight = setInterval(runRight,3000)
            }

        }
    )
    //箭头控图
    $(".a_right").click(//点右箭头
        function(){
            if(n>0){
                n=n-1
            }else{
                n=0
            }
            $(".banner_box .banner").stop().animate({marginLeft:-960-(1920*n)})
            //圆形按钮的提示样式更换
            $(".bn_dots li").removeClass("add")
            $(".bn_dots li").eq(n).addClass("add")
        }
    )
    $(".a_left").click(//点左箭头
        function(){
            clearInterval(tLeft)
            tLeft = setInterval(runLeft,3000)
            if(n<3){
                n=n+1
            }else{
                n=3			}
            $(".banner_box .banner").stop().animate({marginLeft:-960-(1920*n)})
            //圆形按钮的提示样式更换
            $(".bn_dots li").removeClass("add")
            $(".bn_dots li").eq(n).addClass("add")
        }
    )
    //向左走
    function runLeft(){
        if(n<3){
            n=n+1
        }else{
            n=3
            clearInterval(tLeft)
            clearInterval(tRight)
            tRight = setInterval(runRight,3000)
        }
        $(".banner_box .banner").stop().animate({marginLeft:-960-(1920*n)})
        //圆形按钮的提示样式更换
        $(".bn_dots li").removeClass("add")
        $(".bn_dots li").eq(n).addClass("add")
    }
    //向右走
    function runRight(){
        if(n>0){
            n=n-1
        }else{
            n=0
            clearInterval(tLeft)
            clearInterval(tRight)
            tLeft = setInterval(runLeft,3000)
        }
        $(".banner_box .banner").stop().animate({marginLeft:-960-(1920*n)})
        //圆形按钮的提示样式更换
        $(".bn_dots li").removeClass("add")
        $(".bn_dots li").eq(n).addClass("add")
    }
})


/*click*/
$(function(){
        $(".mail_two img").hide()
        $(".mail").click(
            function(){
                $(".mail_two img").show(100)

            }

        )
        $(".mail").click(
            function(){
                $(".mail_two img").hide()

            }

        )


    }
)

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


