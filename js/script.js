let step = document.getElementsByClassName('step');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');
let form = document.getElementsByTagName('form')[0];
let preloader = document.getElementById('preloader-wrapper');
let bodyElement = document.querySelector('body');
let succcessDiv = document.getElementById('success');

form.onsubmit = () => {
    return false
}
let current_step = 0;
let stepCount = 5
step[current_step].classList.add('d-block');
if (current_step == 0) {
    prevBtn.classList.add('d-none');
    submitBtn.classList.add('d-none');
    nextBtn.classList.add('d-inline-block');
}

const progress = (value) => {
    document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}


nextBtn.addEventListener('click', () => {
    /* INSERIRE QUI VALIDATION PER PAGINA */

    current_step++;
    let previous_step = current_step - 1;
    if ((current_step > 0) && (current_step <= stepCount)) {
        prevBtn.classList.remove('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step == stepCount) {
            submitBtn.classList.remove('d-none');
            submitBtn.classList.add('d-inline-block');
            nextBtn.classList.remove('d-inline-block');
            nextBtn.classList.add('d-none');
        }
    } else {
        if (current_step > stepCount) {
            form.onsubmit = () => {
                return true
            }
        }
    }
    progress((100 / stepCount) * current_step);
});


prevBtn.addEventListener('click', () => {
    if (current_step > 0) {
        current_step--;
        let previous_step = current_step + 1;
        prevBtn.classList.add('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step < stepCount) {
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            nextBtn.classList.remove('d-none');
            nextBtn.classList.add('d-inline-block');
            prevBtn.classList.remove('d-none');
            prevBtn.classList.add('d-inline-block');
        }
    }

    if (current_step == 0) {
        prevBtn.classList.remove('d-inline-block');
        prevBtn.classList.add('d-none');
    }
    progress((100 / stepCount) * current_step);
});


submitBtn.addEventListener('click', () => {
    preloader.classList.add('d-block');

    const timer = ms => new Promise(res => setTimeout(res, ms));

    timer(3000)
        .then(() => {
            bodyElement.classList.add('loaded');
        }).then(() => {
            step[stepCount].classList.remove('d-block');
            step[stepCount].classList.add('d-none');
            prevBtn.classList.remove('d-inline-block');
            prevBtn.classList.add('d-none');
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            succcessDiv.classList.remove('d-none');
            succcessDiv.classList.add('d-block');
        })

});

/* generato checkboxes per compattare html e in caso cambiamenti, vedere se è meglio direttamente statico se performance intaccate */


listacomuni = ["Borso del Grappa (TV)", "Castelfranco Veneto (TV)", "Pieve del Grappa (TV)", "San Zenone degli Ezzelini (TV)", "Caorle (VE)", "Venezia (VE)", "Arcugnano (VI)", "Bassano del Grappa (VI)", "Cassola (VI)", "Colceresa (VI)", "Marostica (VI)", "Mussolente (VI)", "Nove (VI)", "Pove del Grappa (VI)", "Quinto Vicentino (VI)", "Romano d'Ezzelino (VI)", "Schiavon (VI)", "Vicenza (VI)"];
listatipologia = ["1 locale", "2 locali", "3 locali", "4 o più locali", "Attico", "Baita", "Capannone", "Casa singola", "Crotto", "Dépendance", "Duplex", "Garage", "Hotel", "Laboratorio", "Loft", "Magazzino", "Maisonette", "Mansarda", "Negozio", "Porzione di Casa", "Porzione Villa", "Posto Auto", "Posto Barca", "Rustico/Casale", "Stanza", "Terreno", "Trullo", "Ufficio", "Villa", "Villa Bifamiliare", "Villetta schiera"]
listaaltrep = ["Ho animali", "Sono fumatore", "Giardino privato", "Posto auto", "Terrazzo vivibile", "Con ascensore", "Piano terra"]

function comunimkr() {
    var i = 0
    var comuni = ""
    listacomuni.forEach(element => {
        var k = '<div class="col-6"><div class="form-check form-check-inline">';
        i += 1
        k += '<input class="form-check-input" type="checkbox" value="" id="chkcomuni' + i + '">';
        k += '<label class="form-check-label" for="chkcomuni' + i + '">' + element + '</label>'
        k += "</div></div>";
        comuni += k
    });
    document.getElementById("rowcomuni").innerHTML = comuni;
}

function tipologiamkr() {
    var i = 0
    var tipologia = ""
    listatipologia.forEach(element => {
        var b = '<div class="col-6"><div class="form-check form-check-inline">';
        i += 1
        b += '<input class="form-check-input" type="checkbox" value="" id="chktipologia' + i + '">';
        b += '<label class="form-check-label" for="chktipologia' + i + '">' + element + '</label>'
        b += "</div></div>";
        tipologia += b
    });
    document.getElementById("rowtip").innerHTML = tipologia;
}

function altremkr() {
    var i = 0
    var altrep = ""
    listaaltrep.forEach(element => {
        var b = '<div class="col-6"><div class="form-check form-check-inline">';
        i += 1
        b += '<input class="form-check-input" type="checkbox" value="" id="chkaltrep' + i + '">';
        b += '<label class="form-check-label" for="chkaltrep' + i + '">' + element + '</label>'
        b += "</div></div>";
        altrep += b
    });
    document.getElementById("rowaltrep").innerHTML = altrep;
}

window.onload = (event) => {

    comunimkr();
    tipologiamkr();
    altremkr();
};
