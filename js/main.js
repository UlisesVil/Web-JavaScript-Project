//$(document).ready(function(){  ----ready --deprecated instead we use $(function(){
//window.addEventListener("load",function(){
$(function(){
    

    //Fake Login
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



    //Acordeon
    if(window.location.href.indexOf("about")> -1 ){    
        $("#acordeon").accordion();
    }


    //Reloj   
    if(window.location.href.indexOf("clock")> -1){
        
        setInterval(function(){
            let clock = moment().format('h:mm:ss');
            $("#clock").html(clock);
        },200);
        //copy from https://momentjs.com/  format date
    } 
    
    
    //Form Validation Contact Section
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
        if($('.bxslider')){
            $('.bxslider').bxSlider({
                
                auto: true,
                autoControls: true,
                stopAutoOnClick: true,
                pager: true,
                slideWidth: 1470
                    
            });
        }
    }    


    //POST

    if(window.location.href.indexOf("index")> -1 | window.location.href.indexOf("github")> -1){    
        var posts =[
            {
                title: "Title 1",
                date: "Published on: 2021-Jan-02",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.",
                link: "articles/article01.html"
            },
            {
                title: "Title 2",
                date: "Published on: 2021-Jan-06",
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.',
                link: "articles/article02.html"
            },
            {
                title: "Title 3",
                date: "Published on: 2021-Jan-12",
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.',
                link: "articles/article03.html"
            },
            {
                title: "Title 4",
                date: "Published on: 2021-Jan-14",
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.',
                link: "articles/article04.html"
            },
            {
                title: "Title 5",
                date: "Published on: 2021-Jan-20",
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.',
                link: "articles/article05.html"
            },
            {
                title: "Title 6",
                date: "Published on: 2021-Jan-21",
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.',
                link: "articles/article06.html"
            },
            {
                title: "Title 7",
                date: "Published on: 2021-Jan-25",
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa iaculis, sagittis urna et, hendrerit lorem. Curabitur pulvinar orci arcu, quis lacinia ante sagittis eget. Morbi eget rhoncus turpis. Integer tristique magna ac fermentum fermentum. In commodo nisl eros, nec eleifend nunc dignissim nec. Phasellus commodo, dui in sodales ullamcorper, justo ligula mollis leo, quis maximus turpis nisi sodales nisi. Donec mollis vulputate pellentesque. Donec quam mi, vulputate a diam tempus, euismod efficitur leo.',
                link: "articles/article07.html"
            },
        
        ];

        let sortedData = [...posts].sort(function(obj1, obj2) {
            return (
              -(obj2.title < obj1.title)
            );
          });

          console.log(sortedData);
        
          sortedData.forEach((item, index) =>{
            let post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}    
                </p>
                <a href="${item.link}" class="button-more">See more</a>
            </article>
            `;


        $("#posts").append(post);   

        });
    }

    //Date
    let date=moment().date() + " / " + moment() .format("MM") + " / " +  moment() .format("YYYY");
    $('#date').append(date);

    //Scroll arriba de la Web
    $(".subir").click(function(e){
        e.preventDefault();          //se agrega para evitar el redireccionamiento que tiene por deafult la funcion
        
        $("html, body").animate({
            scrollTop: 0              //El cero representa el primer pixel de la pagina
        },2000);
        return false;     //agregamos un tiempo para la animacion
    });
});

    