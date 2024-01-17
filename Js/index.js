$(document).ready(function(){
    if(window.location.href.indexOf('index') > -1){    
    $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 600
        });
     
    }

    if(window.location.href.indexOf('index') > -1){
      var posts = [
        
        {
            title: '¿Que se enseña en cada nivel de la ESI?',
            date: moment().date()+ " de " + moment().format("MMMM") +" del " +moment().format("YYYY"),
            content: 'La ESI trabaja con contenidos adaptados a cada nivel y etapa evolutiva. Por ej. en el nivel inicial se enseña a reconocer las partes del cuerpo y prevenir abusos sexuales infantiles. Y en el nivel secundario se enseña la pareja, el amor y el cuidado mutuo en las relaciones afectivas'

        },
        {
            title: '¿Cuál es el enfoque de la ESI?',
            date: moment().date()+ " de " + moment().format("MMMM") +" del " +moment().format("YYYY"),
            content: 'ENFOQUES: GÉNERO, BIOMÉDICO, MORALISTA Y JUDICIALIZANTE.'
    },
        {
           title: '¿Cuáles son los cinco ejes de la ESI?',
           date: moment().date()+ " de " + moment().format("MMMM") +" del " +moment().format("YYYY"),
        content: 'stos ejes son: cuidar el cuerpo y la salud, valorar la afectividad, garantizar la equidad de género, respetar la diversidad y ejercer los derechos'
    },
        {
            title: '¿Cuáles son las dimensiones de la ESI',
            date: moment().date()+ " de " + moment().format("MMMM") +" del " +moment().format("YYYY"),
            content: 'La ley propone un cambio de paradigma en cuanto a la sexualidad. La dimensión “integral” de la sexualidad abarca aspectos biológicos, psicológicos, sociales, afectivos y éticos.'
    },
      ]; 
      
      
      posts.forEach((item, index) => {
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p class="p"> ${item.content}</p>
              <a href="#" class="button-more">Leer más</a>
              </article>
              `;

              $("#posts").append(post);

      }); 
    }

     var theme = $("#theme");

     $("#to-green").click(function(){
        theme.attr("href", "css/green.css");

     });
     $("#to-red").click(function(){
        theme.attr("href", "css/red.css");

     });
     $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");

     });
           //scroll hacia arriba
     $('.subir').click(function(e){
        e.preventDeFault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;

        });

        $("#login form").submit(function(){
           var form_name = $("#form_name").val();
           localStorage.setItem("form_name", form_name);

        });
        var form_name = localStorage.getItem("form_name");
        if(form_name != null && form_name != "undefined"){
            var about_parrafo = $("#about p");
        
            about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
            about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();

        });
        }
        if(window.location.href.indexOf('about') > -1){
            $("#acordeon").accordion();
        }

        if(window.location.href.indexOf('reloj') > -1){
            setInterval(() => {
                var reloj = moment().format('hh:mm:ss');
                $('#reloj').html(reloj);
                }, 1000);
        }
        if(window.location.href.indexOf('contact') > -1){
            $("form input[name='date']").datepicker({
                dateFormat: 'dd-mm-yy'
            });

            $.validate({
              lang: 'es',
              errorMessagePosition: 'top',
              scrollToTopOnError: true
            });
            $("form_contact").validate({
                debug: true
              });
        }
        console.log("esta funcionando");
     });
     