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

    $("#play> i").on("click", function(){
        audio.play();
    });
    $("#stop> i").on("click", function(){
        audio.pause();
    });
    $("#start> i").on("click", function(){
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

    $("nav> ul> li").on("click", function(e){
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

    // hobby에서 사진 갤러리
    $(".tab-div> div").on("click", function(){
        let b = $(this).index();

        $(".cont").removeClass("on");
        $(".tab-div> div").removeClass("on");
        $(".cont").eq(b).addClass("on");
        $(".tab-div> div").eq(b).addClass("on");
    });

    //jpg 파일 확장자 -> gif로 변환
    $("#ppt> ul> li").click(function(){
        let hwac = $(this).children("img").attr("src").split(".");
        let hwac2 = $("#ppt .cont2> img").attr("src").split(".");
        let name = "";

        name = hwac[0] + ".gif";
        $(this).children("img").attr("src", name);

        name = hwac2[0] + ".png";
        $("#ppt .cont2> img").attr("src", name);

        name ="";
    })

    //중앙으로 배치
    $(".cont> ul> li").on("click",function(){
        let a = $(this).attr("class");
        if(a == "cont1"){
            $(this).removeClass("cont1").addClass("cont2").siblings(".cont2").removeClass("cont2").addClass("cont1");
        }
        else if(a == "cont3"){
            $(this).removeClass("cont3").addClass("cont2").siblings(".cont2").removeClass("cont2").addClass("cont3");
        }
        else if(a == "cont2"){
            alert("다시 움직이게 하려면 양 옆의 사진을 눌러주세요 :)");
        }

    });

    //colors
    function bg_on(color){
        let re = new Array;

        if(color == "violet"){
            re[0] = ".vil";
            re[1] = ".violet-b";
        }
        else if(color == "gray"){
            re[0] = ".gr";
            re[1] = ".gray-b";
        }
        else if(color == "blue"){
            re[0] = ".br";
            re[1] = ".blue-b";
        }
        else if(color == "green"){
            re[0] = ".gn";
            re[1] = ".green-b";
        }

        return re;
    }

    $(".footer-div> .menu> div").on("click",function(e){
        e.preventDefault();

        let idx = $(this).index()+1;
        let top = idx * he;

        $("html, body").stop().animate({"scrollTop":top}, 1000, "easeOutQuad");
    });
});