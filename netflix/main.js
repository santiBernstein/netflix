document.addEventListener('DOMContentLoaded', function () {

    let body = document.body;

    const imagenes = [
        "url(assets/images/adam.jpg)",
        "url(assets/images/fatal.jpg)",
        "url(assets/images/mitchells.jpg)",
        "url(assets/images/outlander.jpg)"
    ];

    body.style.backgroundImage = imagenes[0];
    
    document.querySelector('.media-menu').addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('show');
    });
    
    let el = document.querySelector('.glider');
    new Glider(el, {
        slidesToShow: 1,
        dots: '#dots',
        draggable: true,
        scrollLock: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2
              }
            },{
              breakpoint: 732,
              settings: {
                slidesToShow: 4
              }
            }
          ]
      });


    let glider = document.querySelector('.glider')

   

    glider.addEventListener('glider-slide-visible', function(event){
        let imagen = imagenes[event.detail.slide]
        body.style.backgroundImage = imagen;

    });

//en 480 reconocer y ejecutar algo



  }, false);

