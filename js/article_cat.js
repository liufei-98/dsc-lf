$(function(){
    $(".classify").hover(function(){
        $(".all-goods").show()
    },function(){
        $(".all-goods").hide()
    })
    $(".all-goods").hover(function(){
        $(".all-goods").show()
    },function(){
        $(".all-goods").hide()
    })

    $(".search input:eq('0')").focus(function(){
        var text_value=$(this).val();
        if(text_value=="Five Plus"){
            $(this).val("");
        }
    })
    $(".search input:eq('0')").blur(function(){
        var text_value=$(this).val();
        if(text_value==""){
            $(this).val("Five Plus");
        }
    })

    // 图标上下箭头切换
    $(".list-con ul li").on('click',function(){
        var i = $(this).children('div').children('span:last');
        i.toggleClass('icon-down').toggleClass('icon-up1');
    })


    $('.first>li').on('click',function(){
        $(this).find('.second').slideToggle();
        event.stopPropagation();
    })
    $('.second>li').on('click',function(){
        $(this).find('.third').slideToggle();
        event.stopPropagation();
    })
    $("li").on('click', function() {
            event.stopPropagation();
        })
})