// pizzas


let pizza1 = new Pizza ("classic","Muzzarela", 1000, "Queso muzzarela, salsa de tomate y una lluvia de orégano.")
let pizza2 = new Pizza ("classic","Fugazzeta", 1000, "Queso muzzarela, salsa de tomate y una cebolla.")
let pizza3 = new Pizza ("classic","Caramela", 1000, "Queso muzzarela, salsa de tomate y cebolla caramelizada.")
let pizza4 = new Pizza ("special","4 Quesos", 1150, "Queso Muzzarela, Provolone, Roquefort y Parmesano.")
let pizza5 = new Pizza ("special","Peperoni", 1150, "Queso muzzarela, salsa de tomate y longaniza española.")
let pizza6 = new Pizza ("special","Provolone", 1150, "Queso provolone, queso muzzarela y salsa de tomate.")
let pizza7 = new Pizza ("deluxe","Champis", 1500, "Queso muzzarela, salsa de tomate y cebolla caramelizada.")
let pizza8 = new Pizza ("deluxe","Jamón&Morrón", 1500, "Queso Muzzarela, Provolone, Roquefort y Parmesano.")
let pizza9 = new Pizza ("deluxe","Caramelizada&Azul", 1500, "Queso Muzzarela, Provolone, Roquefort y Parmesano.")

let array_pizzas = new Array ();
array_pizzas.push(pizza1);
array_pizzas.push(pizza2);
array_pizzas.push(pizza3);
array_pizzas.push(pizza4);
array_pizzas.push(pizza5);
array_pizzas.push(pizza6);
array_pizzas.push(pizza7);
array_pizzas.push(pizza8);

// combos

let combo1 = new Combo (1,"Tres Quillas", 3200, "1 Classic, 1 Special, 1 Deluxe.")
let combo2 = new Combo (2,"Battaglia", 5200, "2 Classic, 2 Special, 1 Deluxe.")
let combo3 = new Combo (3,"Pack Rider", 9900, "4 Classic, 4 Special, 2 Deluxe.")

let array_combos = new Array ();
array_combos.push(combo1);
array_combos.push(combo2);
array_combos.push(combo3);

// div padre de pizzas clasicas c1c2

let filtro_classic = array_pizzas.slice(0,3);
let c1c2 = document.getElementById("c1c2");


filtro_classic.forEach(piz => {

    let piz_caja = document.createElement("div")
    piz_caja.classList.add("col-sm-6")

    piz_caja.innerHTML = `

                        <div class="card">
                        <div class="card-body">
                        <h3 class="card-title">${piz.title}</h3>
                        <h4>$${piz.price}</h4>
                        <p class="card-text">${piz.description}</p>
                        <a href="#" class="btn btn-primary">Agregar</a>
                        </div>
                        </div>
    `
    c1c2.appendChild(piz_caja);

});

// div padre de pizzas clasicas Special

let filtro_special = array_pizzas.slice(4,7);
let special = document.getElementById("special");


filtro_special.forEach(piz => {

    let piz_caja = document.createElement("div")
    piz_caja.classList.add("col-sm-6")

    piz_caja.innerHTML = `

                        <div class="card">
                        <div class="card-body">
                        <h3 class="card-title">${piz.title}</h3>
                        <h4>$${piz.price}</h4>
                        <p class="card-text">${piz.description}</p>
                        <a href="#" class="btn btn-primary">Agregar</a>
                        </div>
                        </div>
    `
    special.appendChild(piz_caja);

});

// div padre de pizzas Deluxe 

let filtro_deluxe= array_pizzas.slice(5,8);
let deluxe = document.getElementById("deluxe");


filtro_deluxe.forEach(piz => {

    let piz_caja = document.createElement("div")
    piz_caja.classList.add("col-sm-6")

    piz_caja.innerHTML = `

                        <div class="card">
                        <div class="card-body">
                        <h3 class="card-title">${piz.title}</h3>
                        <h4>$${piz.price}</h4>
                        <p class="card-text">${piz.description}</p>
                        <a href="#" class="btn btn-primary">Agregar</a>
                        </div>
                        </div>
    `
    deluxe.appendChild(piz_caja);

});




// div padre de Combos

let combo1y2 = document.getElementById("combo1y2");

array_combos.forEach(comb => {

    let comb_caja = document.createElement("div")
    comb_caja.classList.add("col-sm-6")

    comb_caja.innerHTML = `

                        <div class="card">
                        <div class="card-body">
                        <h3 class="card-title">${comb.title}</h3>
                        <h4>$${comb.price}</h4>
                        <p class="card-text">${comb.description}</p>
                        <a href="#" class="btn btn-primary">Agregar</a>
                        </div>
                        </div>
    `
    combo1y2.appendChild(comb_caja);

});

