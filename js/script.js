var bar=new ProgressBar.Line(splash_text,{
    easing:'easeInOut',
    duration:3000,
    strokeWidth:0.4,
    color:'#555',
    trailWidth:0.2,
    trailColor:'#bbb',
    text:{
        style:{
            position:'absolute',
            left:'50%',
            top:'50%',
            padding:'0',
            margin:'-30px 0 0 0',
            transform:'translate(-50%,-50%)',
            'font-size':'1rem',
            color:'#fff',
        },
        autoStyleContainer:false
    },
    step:function(state,bar){
        bar.setText(Math.round(bar.value()*100)+'%');
    }
});

bar.animate(1.0,function(){
    $("#splash").delay(500).fadeOut(800);
})

//アコーディオン 料金
$('.strength-button').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作

    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
        $(this).addClass('close');//クラス名closeを付与
    }
});

//アコーディオン お問い合わせ
$('.footer-contact-button').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作

    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
        $(this).addClass('close');//クラス名closeを付与
    }
});

//スムーススクロール
$('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});


//トップへ戻るボタン
// 変数宣言と代入
var pageTop = $("#page-top");
// ボタン非表示
pageTop.hide();


// 80pxスクロールしたらボタン表示
$ (window).scroll(function () {
    if ($(this).scrollTop() > 80) {
    // 0.3秒でフェードイン
    pageTop.fadeIn(300);
} else {
    // 0.3秒でフェードアウト
    pageTop.fadeOut(300);
}
});
// 0.5秒でページトップへ戻る
pageTop.click(function () {
    $("body, html").animate({ scrollTop: 0}, 500);
    return false;
})

//スキルのところ
$(function(){
    $(".skill-item").click(function(){
        $(this).css("opacity","0.6")})
})


/*$(function(){
    $(".skill-item").mousemove(function(){
        if($(this).hasClass("skill-item-prepare-one") && $(this).hasClass("skill-item-prepare-two") && $(this).hasClass("skill-item-prepare-three") && $(this).hasClass("skill-item-prepare-four")){
            $(this).addClass("open")
        }
    })
})*/

$(function(){
    $(".skill-item").mousemove(function(){
        if($(this).hasClass("skill-item-prepare-one") && $(this).hasClass("skill-item-prepare-two") && $(this).hasClass("skill-item-prepare-three") && $(this).hasClass("skill-item-prepare-four")){
            $(".skill-main").textillate({
                loop: true,
                in: {
                    effect:'flash',
                    delay:50,
                },
                out: {
                    effect:'flipOutX',
                    delay:50,
                }
            });
        }
    })
})

/*$(function(){
    $(".open").mousemove(function(){
        $(".skill-text").textillate({
            loop:true,
        });
    })
})*/

/*$(function(){
    $(".skill-text").textillate({
        loop:true,
    });
})*/


//これができない
/*$(function(){
    $(".open").click(function(){
        $(this).addClass("oooopen")
    })
})*/



$(function(){
    $(".skill-item-one").click(function(){
        $(".skill-item").addClass("skill-item-prepare-one")
    })
})
$(function(){
    $(".skill-item-two").click(function(){
        $(".skill-item").addClass("skill-item-prepare-two")
    })
})
$(function(){
    $(".skill-item-three").click(function(){
        $(".skill-item").addClass("skill-item-prepare-three")
    })
})
$(function(){
    $(".skill-item-four").click(function(){
        $(".skill-item").addClass("skill-item-prepare-four")
    })
})


tippy(".cap",{
    placement:"bottom",
    animation:"shift-toward-extreme",
    theme:"translucent",
})

//ハンバーガー
$(".header-button").click(function(){
    $(this).toggleClass("active");
    $(".header-right").toggleClass("panelactive");
});

//スクロールで閉じる
$(window).scroll(function(){
    if($(".header-right").hasClass("panelactive")){
        $(".panelactive").toggleClass("panelactive");
        $(".header-button").toggleClass("active");
    }
});