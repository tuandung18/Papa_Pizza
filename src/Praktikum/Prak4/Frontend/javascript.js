let preis = 0;

fetch('article.json', {
    method: 'GET',
})
    .then(response => response.json())
    .then(menu => {
        let menuNode = document.getElementById("speisekarte");
        for (let i = 0; i < menu.length; i++) {
            let menuItem = document.createElement("li");
            let menuItemBox = document.createElement("div");
            menuItemBox.className = "item";
            menuItem.className = "list"

            let itemImg = document.createElement("img");
            itemImg.className = "image";
            itemImg.src = menu[i].picture;
            itemImg.alt = menu[i].name;
            menuItemBox.appendChild(itemImg);

            menuItemBox.appendChild(document.createTextNode(
                menu[i].name + ": " + menu[i].price + "€"
            ));

            menuItem.appendChild(menuItemBox);

            menuItem.addEventListener("click", function () {
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
    })
    .catch(error => console.error('Error:', error));

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

document.getElementById("delete").onclick = () => {
    let list = document.getElementById("Auswahl");
    preis -= list.value;
    document.getElementById("preis").textContent = "Gesamtpreis: " + preis + "€";
    list.remove(list.selectedIndex);
    if (preis === 0)
        document.getElementById("submitBtn").disabled = true;
};

document.querySelector('form').addEventListener('submit', function (event) {
    let name = document.querySelector('input[name="Name"]');
    let email = document.querySelector('input[name="Email"]');
    let address = document.querySelector('input[name="Adresse"]');
    let nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
    let htmlRegex = /<[^>]*>/;

    // Remove previous error indications
    [name, email, address].forEach(input => {
        input.style.borderColor = '';
    });

    // Check if all fields are filled
    if (!name.value || !email.value || !address.value) {
        alert('Bitte füllen Sie alle Felder aus.');
        event.preventDefault();
        return;
    }

    // Check name validity
    if (!nameRegex.test(name.value)) {
        alert('Bitte geben Sie einen gültigen Namen ein (Vor- und Nachname, nur Buchstaben, getrennt durch ein Leerzeichen).');
        name.style.borderColor = 'red';
        event.preventDefault();
        return;
    }

    // Check for problematic content in address
    if (htmlRegex.test(address.value)) {
        alert('Die Adresse darf keinen HTML-Code enthalten.');
        address.style.borderColor = 'red';
        event.preventDefault();
        return;
    }

    // Remove error indication on focus
    [name, email, address].forEach(input => {
        input.addEventListener('focus', function () {
            this.style.borderColor = '';
        });
    });
});