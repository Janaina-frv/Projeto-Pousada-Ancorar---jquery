$(document).ready(function(){

// Menu ficar branco quando clica nos links
$('.nav-link').on('click', function() {
        $('#mainNav').addClass("menuEstilizado");
        $('.nav-link').addClass("menuEstilizadoLinks");
        $('.navbar-brand').addClass("menuEstilizadoLinks");
});

// Menu ficar branco quando clica no logo
    $('#mainNav').bind('click',function() {
        $('#mainNav').addClass("menuEstilizado");
        $('.nav-link').addClass("menuEstilizadoLinks");
        $('.navbar-brand').addClass("menuEstilizadoLinks");
    });

// quando fazemos scoll muda o menu
 $(window).scroll(function() {
    if ($(document).scrollTop() > 700) {
        $('#mainNav').addClass("menuEstilizado");
        $('.nav-link').addClass("menuEstilizadoLinks");
        $('.navbar-brand').addClass("menuEstilizadoLinks");
    } else{
        $('#mainNav').removeClass("menuEstilizado");
        $('.nav-link').removeClass("menuEstilizadoLinks");
        $('.navbar-brand').removeClass("menuEstilizadoLinks");
    }
});

// Animação da Logo da pousada ao clicar nela
    $('.navbar-brand').bind('click',function(){
        $('.navbar-brand').animate(
            { 'font-size' : '35px',  },
        {duration:1000,  complete:function(){
            $('.navbar-brand').animate(
                {  'font-size' : '20px',  },1500);
            }
        });
    });

// Animação do Carrossel infinito
    slideHeadLine1()
    function slideHeadLine1(){
        $('#div1').removeClass("esconder"); 
        $('#div2').addClass("esconder");
        $('#div3').addClass("esconder"); 
        setTimeout(slideHeadLine2, 6000);
    }
    function slideHeadLine2(){
        $('#div2').removeClass("esconder");
        $('#div3').addClass("esconder");
        $('#div1').addClass("esconder");
        setTimeout(slideHeadLine3, 6000);
    }
    function slideHeadLine3(){
        $('#div3').removeClass("esconder");
        $('#div1').addClass("esconder");
        $('#div2').addClass("esconder");
       setTimeout(slideHeadLine1, 6000);
    }

// Animação do Texto sobre a pousada Ancorar na tela principal
    var newsArray = ["Sobre a Pousada Ancorar",
    "Localizada a 5min (carro) tanto do Centro de Cabo Frio quanto de Arraial do Cabo, e a",
    "2min a pe da Praia do Foguete, a Pousada e uma excelente opcao para quem busca",
    "contato com a natureza, gastronomia e vida noturna.",
    ];

    var newsLength = newsArray.length;
    var newsInterval = 2000;

    $('#chamada').after('<div id="news-feed" style="color:#173f5f;"></div>');
        $('#news-feed').css({ 'height' : '200px' });
    $('#news-feed').append('<h3 style="color:white; opacity:50%; padding-bottom:20px">' + newsArray[0] + '</h3>');
    for (i=1; i < newsLength; i++){
        $('#news-feed').append('<p>' + newsArray[i] + '</p>');
    }

    function slideHeadLine(){
        $('#news-feed p:first').clone().appendTo('#news-feed').css('display', 'none');
        $('#news-feed p:last').slideDown().toggleClass("esconder");
        $('#news-feed p:first').remove();
    }
    setInterval(slideHeadLine,newsInterval);
});
