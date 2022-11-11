
"card emagrecimento: "[
    {
    "id": 1,
    "nome": "Teino A",
    "video1" : "Queima de Gordura",
    "video2": "Cardio Hit",
    "video3" : "Cardio Intenso",
    "video4": "15 minutos de cardio"
},
{
   "id": 2,
   "nome": "Treino B",
   "video1" : "Queima de Caloria",
   "video2": "Cardio Hit",
   "video3" : "Desafio",
   "video4": "5 exercícios"
  
}    
]
"card ganho de massa: "[
    {
    "id": 3,
    "nome": "Treino A",
    "video1" : "Costas",
    "video2": "Bíceps em Casa",
    "video3" : "Tríceps",
    "video4": "Peitoral e Ombro "
},
{

    "id": 4,
    "nome": "Teino B",
    "video1" : "Quadríceps",
    "video2": "Posterior",
    "video3" : "Panturrilha",
    "video4": "Glúteo"
}

]
"card definicao:"[
    {
        
            "id": 5,
            "nome": "Teino A",
            "video1" : "Pernas e Glúteo ",
            "video2": "30 Minutos Intensos",
            "video3" : "Ênfase nos Quadríceps",
            "video4": "Exercícios Pesados"
        }, 
        {

            "id": 6,
            "nome": "Teino B",
            "video1" : "Desafio",
            "video2": "Treino Intenso de Superiores",
            "video3" : "Desafio",
            "video4": "Definindo Abdômen"
        } 

    
]








var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else {
        navigationHeader.style.marginLeft = '-100vw';
        content.style.filter = '';
    }
}

function closeSidebar() {
    if (showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
}

window.addEventListener('resize', function (event) {
    if (window.innerWidth > 768 && showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
});





