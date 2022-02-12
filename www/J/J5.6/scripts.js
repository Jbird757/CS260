function fetchInfo() {

    url = "https://cors-anywhere.herokuapp.com";
    url += "/xkcd.com/info.0.json";
    fetch(url, {mode: 'cors'})
        .then(function(response) {
        return response.json();
        }).then(function(json) {
        console.log(json);
        const photo = document.createElement('img');
        photo.src = json["img"];
        photo.style.display="block";
        const alt = document.createTextNode(json["alt"]);
        const container = document.getElementById("output");
        container.textContent = "";
        container.appendChild(photo);
        container.appendChild(alt);
        window.max = json['num'];
        });
}

function fetchInfo2() {

    url = "https://cors-anywhere.herokuapp.com/xkcd.com/";
    url += Math.floor(Math.random() * max);
    url += "/info.0.json";
    console.log(url);
    fetch(url, {mode: 'cors'})
        .then(function(response) {
        return response.json();
        }).then(function(json) {
        console.log(json);
        const photo = document.createElement('img');
        photo.src = json["img"];
        photo.style.display="block";
        const alt = document.createTextNode(json["alt"]);
        const container = document.getElementById("output");
        container.textContent = "";
        container.appendChild(photo);
        container.appendChild(alt);
        });
}

window.onload = fetchInfo;