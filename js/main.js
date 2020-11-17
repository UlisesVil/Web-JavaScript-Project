//$(document).ready(function(){  ----ready --deprecated instead we use $(function(){
//window.addEventListener("load",function(){
$(function(){

    //Login Falso
    $("#login form").submit(function(){
        let form_name = $("#form_name").val();
        let form_email = $("#form_email").val();
        let form_password = $("#form_password").val();

        localStorage.setItem("form_name", form_name);
        localStorage.setItem("form_email", form_email);
        localStorage.setItem("form_password", form_password);
    }); 

    let form_name = localStorage.getItem("form_name");

    if(form_name !=null && form_name !="undefined"){
        let about_parrafo = $("#identity");
        
        about_parrafo.html("<br/><strong>Bienvenido, "+" "+form_name + "  " +"</strong>"+"<br/>"+"<br/>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");
            
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }


    //Selector de tema
    let theme = $("#theme");
    let themeArt = $("#themeArt");
    $("#to-purple").click(function(){
        theme.attr("href", "css/purple.css");
        themeArt.attr("href", "css/purple.css");
    });

    $("#to-azul").click(function(){
        theme.attr("href", "css/azul.css");
        themeArt.attr("href", "css/azul.css");
    });

    $("#to-pink").click(function(){
        theme.attr("href", "css/pink.css");
        themeArt.attr("href", "css/pink.css");
    });
    

    //Acordeon
    if(window.location.href.indexOf("about")> -1 ){    
        $("#acordeon").accordion();
    }


    //Reloj   
    if(window.location.href.indexOf("reloj")> -1){
        
        setInterval(function(){
            let reloj = moment().format('h:mm:ss');
            $("#reloj").html(reloj);
        },200);
        //copiamos de https://momentjs.com/  el codigo de la fecha
    } 
    
    
    //Validacion de Formulario seccion Contacto
    if(window.location.href.indexOf("contact")> -1){
            
        $("form input[name='date']").datepicker({
            dateFormat:'dd-mm-yy'
        });

        $.validate({
        lang: 'es',
        errorMessagePosition: "top",
        scrollToTopOnError: true 
        });
    }


    //Slider
    if(window.location.href.indexOf("index")> -1 | window.location.href.indexOf("github")> -1){
        
        $('.bxslider').bxSlider({
            
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            pager: true,
            slideWidth: 1470
                
        });
    }    


    //POST

    if(window.location.href.indexOf("index")> -1 | window.location.href.indexOf("github")> -1){    
        var posts =[
            {
                title: "Prueba de titulo 1",
                date: "Publicado el dia: "+ moment() .format("dddd") +" " + moment().date() + " de " + moment() .format("MMMM") + " del " +  moment() .format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.",
                link: "articles/article01.html"
            },
            {
                title: "Prueba de titulo 2",
                date: "Publicado el dia: "+ moment() .format("dddd") +" " + moment().date() + " de " + moment() .format("MMMM") + " del " +  moment() .format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.',
                link: "articles/article02.html"
            },
            {
                title: "Prueba de titulo 3",
                date: "Publicado el dia: "+ moment() .format("dddd") +" " + moment().date() + " de " + moment() .format("MMMM") + " del " +  moment() .format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.',
                link: "articles/article03.html"
            },
            {
                title: "Prueba de titulo 4",
                date: "Publicado el dia: "+ moment() .format("dddd") +" " + moment().date() + " de " + moment() .format("MMMM") + " del " +  moment() .format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.',
                link: "articles/article04.html"
            },
            {
                title: "Prueba de titulo 5",
                date: "Publicado el dia: "+ moment() .format("dddd") +" " + moment().date() + " de " + moment() .format("MMMM") + " del " +  moment() .format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.',
                link: "articles/article05.html"
            },
            {
                title: "Prueba de titulo 6",
                date: "Publicado el dia: "+ moment() .format("dddd") +" " + moment().date() + " de " + moment() .format("MMMM") + " del " +  moment() .format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.',
                link: "articles/article06.html"
            },
            {
                title: "Prueba de titulo 7",
                date: "Publicado el dia: "+ moment() .format("dddd") +" " + moment().date() + " de " + moment() .format("MMMM") + " del " +  moment() .format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.',
                link: "articles/article07.html"
            },
        
        ];
        
        posts.forEach((item, index) =>{
            let post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}    
                </p>
                <a href="${item.link}" class="button-more">Leer más</a>
            </article>
            `;


        $("#posts").append(post);   

        });
    }
        
    //Scroll arriba de la Web

    $(".subir").click(function(e){
        e.preventDefault();          //se agrega para evitar el redireccionamiento que tiene por deafult la funcion
        
        $("html, body").animate({
            scrollTop: 0              //El cero representa el primer pixel de la pagina
        },2000);
        return false;     //agregamos un tiempo para la animacion
    });
});

    