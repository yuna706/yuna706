$(function() {
    //마우스 포인터 클래스 배부
    $(".side> .menu> li, nav> ul> li, .gl, .gl>i, .port> .imgdiv, .tab-div> div").addClass("click");
    $(".info-box *, footer .menu> div, footer .sns> a> i").addClass("click");
    
    //햄버거 메뉴 클릭시
    $(".ham").on("click",function(){
        $(".ham").css("display","none");
        $("#sidemenu").css("margin-left",0);
        $("section").not("#sidemenu").on("click",function(){
            $("#sidemenu").css("margin-left","-390px");
            setTimeout(function(){
                $(".ham").css("display","block");
            }, 500);
        });
    });

    //노래재생
    let audio = new Audio();
    audio.src = "./lukewarm.mp3";

    $("#play").on("click", function(){
        audio.play();
    });
    $("#stop").on("click", function(){
        audio.pause();
    });
    $("#start").on("click", function(){
        audio.pause();
        audio.currentTime = 0;
    });

    //메뉴 클릭시 스크롤 이동
    let he = $(window).height(); //화면 높이 구함

    $(window).resize(function() {
        he = $(window).height();
    });

    $(".side> .menu> li").on("click",function(e){
        e.preventDefault();

        $("#sidemenu").css("margin-left","-390px"); //햄버거 메뉴 사라지기
        setTimeout(function(){
            $(".ham").css("display","block");
        }, 500);

        let id = $(e.currentTarget).data("value");
        let top = $(`#${id}`).offset().top;

        $("html, body").stop().animate({ "scrollTop": top }, 1000, "easeOutQuad");
    });

    $("nav> ul> li, .footer-div> .menu> li").on("click", function(e){
        e.preventDefault();

        let id = $(e.currentTarget).data("value");
        let top = $(`#${id}`).offset().top;

        $("html, body").stop().animate({ "scrollTop": top }, 1000, "easeOutQuad");
    });

    //ability화면에 도달하면 그래프 움직이기
    $(window).scroll(function(){
        let here = $("#ability").offset().top - 300;
        let sectionHeight = $("#ability").height();
        
        let height = $(document).scrollTop();
        
        if(height >= here && height <= here + sectionHeight){
            $(".grap").map((index, element, sourse) => {
                console.log(element);
                $(element).attr("style", $(element).data("value"));
            });
        }else {
            $(".grap").delay(3000).attr("style", "");
        };
    });

    //팝업창 띄우기
    $(".port").on("click", function(){
        $("#popup").addClass("on");
        $(".popup").eq($(this).index()).css({"visibility":"visible"});
        $(".ham").css("display", "none");
    });

    //팝업창 닫기
    $("#popup").on("click", function(){
        $("#popup").removeClass("on");
        $(".popup").css({"visibility":"hidden"});
        $(".ham").css("display", "block");
    });
});