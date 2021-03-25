
$(function(){

    let theme = $("#theme");
    let themeArt = $("#themeArt");
    $("#to-purple").click(function(){
        theme.attr("href", "css/purple.css");
        themeArt.attr("href", "../css/purple.css");
        localStorage.setItem("color","purple");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
        themeArt.attr("href", "../css/blue.css");
        localStorage.setItem("color","blue");
    });

    $("#to-pink").click(function(){
        theme.attr("href", "css/pink.css");
        themeArt.attr("href", "../css/pink.css");
        localStorage.setItem("color","pink");
    });

    let colorTheme=localStorage.getItem("color");
    console.log(colorTheme);
    switch(colorTheme){
        case "purple":
        theme.attr("href", "css/purple.css");
        themeArt.attr("href", "../css/purple.css");
        break;
        case "blue":
        theme.attr("href", "css/blue.css");
        themeArt.attr("href", "../css/blue.css");
        break;
        case "pink":
        theme.attr("href", "css/pink.css");
        themeArt.attr("href", "../css/pink.css");
        break;
    }

    let indexLoc=window.location.href.indexOf("index");
    let clockLoc=window.location.href.indexOf("clock");
    let aboutLoc=window.location.href.indexOf("about");
    let contactLoc=window.location.href.indexOf("contact");

    if(indexLoc > -1){
        $('.linkMain').addClass('selected');
        $('.linkClock,.linkAbout,.linkContact').removeClass('selected');
    }
    if(clockLoc > -1){
        $('.linkClock').addClass('selected');
        $('.linkMain,.linkAbout,.linkContact').removeClass('selected');
    }
    if(aboutLoc > -1){
        $('.linkAbout').addClass('selected');
        $('.linkClock,.linkMain,.linkContact').removeClass('selected');
    }
    if(contactLoc > -1){
        $('.linkContact').addClass('selected');
        $('.linkClock,.linkAbout,.linkMain').removeClass('selected');
    }

});




