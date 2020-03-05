$(function(){
    let he = $(window).height();
    $(".side> .menu> li, nav> ul> li, .gl, .gl>i, .tab-div> div").addClass("click");
    $(".info-box *, footer .menu> div, footer .sns> a> i").addClass("click");
    
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

    $(".side> .menu> li").on("click",function(e){
        e.preventDefault();
        $("#sidemenu").css("margin-left","-390px");
        setTimeout(function(){
            $(".ham").css("display","block");
        }, 500);
        let idx = $(this).index();
        let top = idx * he;

        $("html, body").stop().animate({"scrollTop":top}, 1000, "easeOutQuad");
    });

    $("nav> ul> li").on("click",function(e){
        e.preventDefault();

        let idx = $(this).index() + 1;
        let top = idx * he;

        $("html, body").stop().animate({"scrollTop":top}, 1000, "easeOutQuad");
    });

    let scrolling = false;

    $("body> section").on("wheel", function(e){
        e.preventDefault();
        if(scrolling) return;

        let delta = e.originalEvent.deltaY;
        let idx = $(this).index();

        if(delta > 0 && idx <= 8) {            
            scrolling = true;
            let next = $("body> section").eq(idx+1).offset().top;
            $("html, body").stop().animate({"scrollTop": next}, 1500, "easeOutQuad", function(){scrolling = 0;});
        }
        else if(delta < 0 && idx > 0){
            scrolling = true;
            let prev = $("body> section").eq(idx-1).offset().top;
            $("html, body").stop().animate({"scrollTop": prev}, 1500, "easeOutQuad", function(){scrolling = 0;});
        }
    });

    /*
    $(window).scroll(function(){
        let here = $("#ability").offset().top;
        let height = $(document).scrollTop();
        
        if(here == height){
            $(".grap").addClass("on");
        };
        if(here != height){
            $(".grap").delay(3000).removeClass("on");
        };
    });
*/

    $(window).scroll(function(){
        let here = $("#ability").offset().top;
        let sectionHeight = $("#ability").height();
        
        let height = $(document).scrollTop();
        
        if(height >= here && height <= here + sectionHeight){
            $(".grap").addClass("on");
        }else {
            $(".grap").delay(3000).removeClass("on");
        };
    });

    $(".ability").on("click", function(){    
        // setTimeout(function(){
        //     $(".grap").addClass("on");
        // }, 1000);
        $(".grap").addClass("on");

    })

    $(".gl").on("click", function(){
        let a = $(this).parent().index();
        
        $("#popup").addClass("on");
        $(".popup").eq(a).css({"visibility":"visible"});

        $("#popup").on("click", function(){
            $("#popup").removeClass("on");
            $(".popup").eq(a).css({"visibility":"hidden"});                
        })
    });

    $(".tab-div> div").on("click", function(){
        let a = $(this).index();

        $(".cont").removeClass("on");
        $(".tab-div> div").removeClass("on");
        $(".cont").eq(a).addClass("on");
        $(".tab-div> div").eq(a).addClass("on");
    });

    $(".cont> ul> li").on("click",function(){
        let a = $(this).attr("class");
        let b = $(this).index();
        let img = $(this).children("img");
        
        let hwac = img.split(".");
        let name = '';

        for(var i = 0; i < 4; i++){
            name = hwac[i]+".gif";
        }

        console.log(name);
        
        // if(b == 0)  $(img).attr("src","img/ppt1.gif").siblings(".cont2").
        // else if(b == 1) $(".cont2> img").attr("src","img/ppt2.gif")
        // else if(b == 2) $(".cont2> img").attr("src","img/ppt3.gif")

        if(a == "cont1"){
            $(this).removeClass("cont1").addClass("cont2").siblings(".cont2").removeClass("cont2").addClass("cont1");
        }
        else if(a == "cont3"){
            $(this).removeClass("cont3").addClass("cont2").siblings(".cont2").removeClass("cont2").addClass("cont3");
        }

        
        // let temp = $(this).html();
        // let i = $(".cont2").html();

        // $(".cont2").html(temp);
        // $(this).html(i);
    });

    $(".hoho").mouseover(function(){
        
    }) 

    $(".footer-div> .menu> div").on("click",function(e){
        e.preventDefault();

        let idx = $(this).index()+1;
        let top = idx * he;

        $("html, body").stop().animate({"scrollTop":top}, 1000, "easeOutQuad");
    });
    
})