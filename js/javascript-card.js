const slider = document.querySelector(".rango");
const casas = document.querySelector("#casas");
const pagesViews = document.querySelector("#pageviews");
const price = document.querySelector("#price");
const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");
let promoSwitch = document.querySelector("#switch");

// Modificar vistas y precio del mes
function printCasas(){
    if(slider.value == "0"){
        casas.src = "./images/casas/c2.png";
        pagesViews.textContent = "Básica";
        l1.textContent = "1 Habitación";
        l2.textContent = "1 Baño";
        l3.textContent = "Techo en Madera";
        price.textContent = "80";
    }else if(slider.value == "25"){
        casas.src = "./images/casas/c4.png";
        pagesViews.textContent = "Ecológica";
        l1.textContent = "2 Habitaciones";
        l2.textContent = "1 Baño";
        l3.textContent = "Techo en Panel Solar";
        price.textContent = "120";
    }else if(slider.value == "50"){
        casas.src = "./images/casas/c8.png";
        pagesViews.textContent = "Unifamiliar";
        l1.textContent = "5 Habitaciones";
        l2.textContent = "2 Baños";
        l3.textContent = "Techo en Teja Asfáltica";
        price.textContent = "180";
    }else if(slider.value == "75"){
        casas.src = "./images/casas/c10.png";
        pagesViews.textContent = "Mansión";
        l1.textContent = "8 Habitaciones";
        l2.textContent = "9 Baños";
        l3.textContent = "Techo en Teja de Concreto";
        price.textContent = "240";
    }else if(slider.value == "100"){
        casas.src = "./images/casas/c12.png";
        pagesViews.textContent = "Hotel";
        l1.textContent = "30 Habitaciones";
        l2.textContent = "35 Baños";
        l3.textContent = "Techo en Pizarra";
        price.textContent = "460";
    };
};



// Animar Fondo de Slider
slider.addEventListener("input", function(){
    let x = slider.value;
    let color = `linear-gradient(90deg, hsl(207, 100%, 50%) ${x}%, hsl(207, 74%, 75%) ${x}%`;
    console.log(color);
    slider.style.background = color;

    printCasas();
    printCasas2();

    if(promoSwitch.checked == true){
        let x = price.textContent*0.20;
        price.textContent = price.textContent - x;
        console.log(x);
    }else{
        printCasas();
    };
    
});

// Descuento al activar el checkbox
promoSwitch.addEventListener("input", function(){
    if(promoSwitch.checked == true){
        let x = price.textContent*0.20;
        price.textContent = price.textContent - x;
        console.log(x);
        printCasas2();
    }else{
        printCasas();
    };
});


function printCasas2(){
    if(slider.value == "0"){
        casas.src = "./images/casas/c1.png";
        // price.textContent = price.textContent - x;
        // price.textContent = "80";
    }else if(slider.value == "25"){
        casas.src = "./images/casas/c3.png";
        // price.textContent = price.textContent - x;
        // price.textContent = "120";
    }else if(slider.value == "50"){
        casas.src = "./images/casas/c7.png";
        // price.textContent = price.textContent - x;
        // price.textContent = "180";
    }else if(slider.value == "75"){
        casas.src = "./images/casas/c9.png";
        // price.textContent = price.textContent - x;
        // price.textContent = "240";
    }else if(slider.value == "100"){
        casas.src = "./images/casas/c11.png";
        // price.textContent = price.textContent - x;
        // price.textContent = "460";
    };
};
