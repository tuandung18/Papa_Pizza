var preis = 0;

const menu = [ 
    { 
        article_id: 1, 
        name: "Salami", 
        picture: "img/salami.jpg", 
        price: 8.5 
    }, { 
        article_id: 2, 
        name: "Vegetaria", 
        picture: "img/vegeterian.jpg", 
        price: 12.5 
    }, { 
        article_id: 3, 
        name: "Spinat-Hühnchen", 
        picture: "img/spinatHühnchen.jpg", 
        price: 12 
    }, { 
        article_id: 4, 
        name: "Margherita", 
        picture: "img/margherita.jpg", 
        price: 8 
    }, { 
        article_id: 5, 
        name: "Hawaii", 
        picture: "img/hawaii.jpg", 
        price: 11 
    }, { 
        article_id: 6, 
        name: "Quattro Formaggi", 
        picture: "img/QuattroFormaggi.jpg", 
        price: 10
    }
]

let menuNode = document.getElementById("speisekarte"); 
for (let i = 0; i < menu.length; i++) {
    let menuItem = document.createElement("li");
    let menuItemBox = document.createElement("div");
    menuItemBox.class = "imgBox";

    let itemImg = document.createElement("img");
    itemImg.class = "image";
    itemImg.src = menu[i].picture;
    itemImg.alt = menu[i].name;
    menuItemBox.appendChild(itemImg);

    menuItemBox.appendChild(document.createTextNode(
        menu[i].name + ": " + menu[i].price + "€"
    ));

    menuItem.appendChild(menuItemBox);

    menuItem.addEventListener("click", function() {
        let select = document.getElementById("Auswahl");
        let item = document.createElement("option");

        item.value = menu[i].price;
        item.innerHTML = menu[i].name;
        select.appendChild(item);

        preis += menu[i].price;
        document.getElementById("preis").textContent = "Gesamtpreis: " + preis + "€";
        document.getElementById("submitBtn").disabled = false; 
    }, false)
    menuNode.appendChild(menuItem);
}

/*
document.getElementById("hawaii").addEventListener("click", function() {;
    let select = document.getElementById("korb");
    let item = document.createElement("option");

    item.value = 11;
    item.innerHTML = "hawaii";
    select.appendChild(item);
    preis += 11;
    document.getElementById("preis").textContent = "Gesamtpreis: " + preis + "€";
    document.getElementById("submitBtn").disabled = false;
});
document.getElementById("margheritta").addEventListener("click", function() {
    let select = document.getElementById("korb");
    let item = document.createElement("option");

    item.value = 8;
    item.innerHTML = "margheritta";
    select.appendChild(item);
    preis  += 8;
    document.getElementById("preis").textContent = "Gesamtpreis: " + preis + "€";
    document.getElementById("submitBtn").disabled = false;
});
document.getElementById("QuattroFormaggi").addEventListener("click", function() {
    let select = document.getElementById("korb");
    let item = document.createElement("option");

    item.value = 10;
    item.innerHTML = "Quattro Formaggie";
    select.appendChild(item);

    preis += 10;
    document.getElementById("preis").textContent = "Gesamtpreis: " + preis + "€";
    document.getElementById("submitBtn").disabled = false;
}, false);
*/

document.getElementById("erasebtn").onclick = () => {
    let list = document.getElementById("korb");
    preis -= list.value;
    document.getElementById("preis").textContent = "Gesamtpreis: " + preis + "€";
    list.remove(list.selectedIndex);
    if (preis == 0) 
        document.getElementById("submitBtn").disabled = true;
};
