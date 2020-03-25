$(function(){
    
    $("section> div").eq(0).find("div").addClass("on");

    $(".ham").on("click",function(){
        $(".ham").css("display","none");
        $("nav").addClass("on");
        $("section").addClass("on");
    });
    $("nav li").on("click",function(){
        $(".ham").fadeIn(1000);
        $("nav").removeClass("on");
        $("section").removeClass("on");

        let num = $(this).index();

        $("section > div").removeClass("on");
        $("section > div").eq(num).addClass("on");

        let lan = $("section> div.on> div");

        lan.removeClass("on");
        for(let i = 0; i < lan.length; i++){
            setTimeout(function(){
                lan.eq(i).addClass("on");
            }, 200*i)
        }

    });
})