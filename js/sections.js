'use strict'

//alert('soy la nueva seccion');
$(function(){

    function getArticle(){
        let extension=window.location.href.indexOf("article");
        return(extension > -1? '../' : '');
    }

    let extensionImg=getArticle()+'ico.png';
    console.log(extensionImg);
    $('#ico').attr('href',extensionImg);

    let header= `
        <header>
            <div id="date"></div>
            <div id="logo">
                <h1>Project JS</h1>
            </div>
            <div class="clearfix"></div>                  
            <nav id="menu">
                <ul>
                    <li class="linkMain"><a href="${getArticle()}index.html">Main</a></li>
                    <li class="linkClock"><a href="${getArticle()}clock.html">Clock</a></li>
                    <li class="linkAbout"><a href="${getArticle()}about.html">About</a></li>
                    <li class="linkContact"><a href="${getArticle()}contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
    `;
    //<div id="header"></div>
    $("#header").append(header);
    
    let selectorTheme=`
        <p class="textTheme">Themes</p>
        <div class="colorContainer">
            <div id="to-purple"></div>
            <div id="to-blue"></div>
            <div id="to-pink"></div>
        </div>
    `;
    //<div id="selector-theme"></div>
    $('#selector-theme').append(selectorTheme);

    let aside=`
        <div id="identity"></div>
        <div id="login">
            <h4><span>|  Log In  |</span></h4>
            <form id=login2>
                <label for="name">Name</label>
                <input id="form_name" type="text" name="name"/>

                <label for="email">E-mail</label>
                <input id="form_email" type="email" name="email"/>

                <label for="password">password</label>
                <input id="form_password" type="password" name="password"/> 

                <input type="submit" value="Log In"/>
            </form>
        </div>

        <div id="about">
            <h4><span>|  About  |</span></h4>
            <img src="${getArticle()}img/cooldog.jpg"/>
            <p>
                turpis nisi sodales nisi. Donec mollis vulputate pellentesque. 
                Donec quam mi, vulputate a diam tempus, euismod efficitur leo.  
            </p>
        </div>
    `;
    //<aside id="sidebar"></aside>
    $("#sidebar").append(aside);

    let footer=`
        JavaScript Project 
        <a href="#" class="top">
            Top
            <i class="fas fa-angle-double-up"></i>
        </a>
    `;
    //<footer id="footer"></footer>
    $('#footer').append(footer);

});