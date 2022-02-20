const btnDaily = document.querySelector('#daily');
const btnWeekly = document.querySelector('#weekly');
const btnMonthly = document.querySelector('#monthly');
const contenedorCard = document.querySelector('.col-2');

document.querySelectorAll('.col-2').forEach(div => {
    div.addEventListener('click', (e) => {
        if (e.target.classList == 'content-card' || e.target.classList == 'content-card content-card2') {
            if (e.target.classList != 'content-card') {
                e.target.classList.remove('content-card2');

            } else {
                e.target.classList.add('content-card2');
            }
        }
    });
});




ejecutarEvento();

function ejecutarEvento() {
    document.addEventListener('DOMContentLoaded', mostrarDatos);
    btnDaily.addEventListener('click', mostrarDatos);
    btnMonthly.addEventListener('click', mostrarDatos);
    btnWeekly.addEventListener('click', mostrarDatos);

}

//Funcion encargada de cargar o mostrar los datos que solicitan
function mostrarDatos(e) {
    limpiarHtml();
    visualizarOpcion(e);
    fetch('data.json').then(valor => valor.json()).then(valor => {
        valor.forEach(i => {
            const card = document.createElement('div');
            card.classList = 'card card-date';

            if (e.target.innerHTML === "Daily") {
                card.innerHTML = `<div class="bg-top ${i.bgtop}">
                    <img src="${i.image}" alt="">
                    </div>
                    <div class="content-card">
                        <div class="header-card">
                            <p class="actividad">${i.title}</p>
                            <img src="images/icon-ellipsis.svg" alt="">
                        </div>
                        <div class="bottom-card">
                            <h1 class="title">${i.timeframes.daily.current}hrs</h1>
                            <div class="date description">Last Daily - ${i.timeframes.daily.previous}hrs</div>
                        </div>
                    </div>`;
            } else if (e.target.innerHTML === 'Monthly') {
                card.innerHTML = `<div class="bg-top ${i.bgtop}">
                <img src="${i.image}" alt="">
                    </div>
                    <div class="content-card">
                        <div class="header-card">
                            <p class="actividad">${i.title}</p>
                            <img src="images/icon-ellipsis.svg" alt="">
                        </div>
                        <div class="bottom-card">
                            <h1 class="title">${i.timeframes.monthly.current}hrs</h1>
                            <div class="date description">Last Monthly - ${i.timeframes.monthly.previous}hrs</div>
                        </div>
                    </div>`;
            } else {
                card.innerHTML = `<div class="bg-top ${i.bgtop}">
                <img src="${i.image}" alt="">
                </div>
                <div class="content-card">
                    <div class="header-card">
                        <p class="actividad">${i.title}</p>
                        <img src="images/icon-ellipsis.svg" alt="">
                    </div>
                    <div class="bottom-card">
                        <h1 class="title">${i.timeframes.weekly.current}hrs</h1>
                        <div class="date description">Last Week - ${i.timeframes.weekly.previous}hrs</div>
                    </div>
                </div>
                `;
            }
            contenedorCard.appendChild(card);

        })
    })
}

/**Funcion encargada de limpiar los datos del html */
function limpiarHtml() {
    while (contenedorCard.firstChild) {
        contenedorCard.removeChild(contenedorCard.firstChild);
    }
}

/**Funcion que permite resaltar la opcion el cual los datos estan mostrandose */

function visualizarOpcion(e) {
    btnDaily.classList.remove('active');
    btnMonthly.classList.remove('active');
    btnWeekly.classList.remove('active');

    if (e.target.innerHTML === "Daily") {
        btnDaily.classList.add('active');
    } else if (e.target.innerHTML === "Monthly") {
        btnMonthly.classList.add('active');
    } else {
        btnWeekly.classList.add('active');
    }
}

function activarCard(e) {
    console.log(e.target);
}