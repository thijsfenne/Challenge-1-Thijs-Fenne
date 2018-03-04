// Get modal element BRANDSTOF
var brandstofmodal = document.getElementById('brandstofModal');
// Get open modal button
var modalBtn = document.getElementById('brandstofBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for a open
brandstofBtn.addEventListener('click', openBrandstofmodal);

// Listen for a close
closeBtn.addEventListener('click', closeBrandstofmodal);

// Close by outside click
window.addEventListener('click', outsideBrandstof);

//Function to open modal
function openBrandstofmodal() {
    brandstofmodal.style.display = 'block';
}

//Function to close modal
function closeBrandstofmodal() {
    brandstofmodal.style.display = 'none';
}

//Function to close modal by outside click 
function outsideBrandstof(e) {
    if(e.target == brandstofmodal) {
    brandstofmodal.style.display = 'none';
    }
}

// SNELHEID
var snelheidmodal = document.getElementById('snelheidModal');
var modalBtn = document.getElementById('snelheidBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[1];

snelheidBtn.addEventListener('click', openSnelheidmodal);

closeBtn.addEventListener('click', closeSnelheidmodal);

window.addEventListener('click', outsideSnelheid);

function openSnelheidmodal() {
    snelheidmodal.style.display = 'block';
}

function closeSnelheidmodal() {
    snelheidmodal.style.display = 'none';
}

function outsideSnelheid(e) {
    if(e.target == snelheidmodal) {
    snelheidmodal.style.display = 'none';
    }
}

// ACCELERATIE
var acceleratiemodal = document.getElementById('acceleratieModal');
var modalBtn = document.getElementById('acceleratieBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[2];

acceleratieBtn.addEventListener('click', openAcceleratiemodal);

closeBtn.addEventListener('click', closeAcceleratiemodal);

window.addEventListener('click', outsideAcceleratie);

function openAcceleratiemodal() {
    acceleratiemodal.style.display = 'block';
}

function closeAcceleratiemodal() {
    acceleratiemodal.style.display = 'none';
}

function outsideAcceleratie(e) {
    if(e.target == acceleratiemodal) {
    acceleratiemodal.style.display = 'none';
    }
}

// GFORCE
var gforcemodal = document.getElementById('gforceModal');
var modalBtn = document.getElementById('gforceBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[3];

gforceBtn.addEventListener('click', openGforcemodal);

closeBtn.addEventListener('click', closeGforcemodal);

window.addEventListener('click', outsideGforce);

function openGforcemodal() {
    gforcemodal.style.display = 'block';
}

function closeGforcemodal() {
    gforcemodal.style.display = 'none';
}

function outsideGforce(e) {
    if(e.target == gforcemodal) {
    gforcemodal.style.display = 'none';
    }
}

// ZWAARTEKRACHT
var zwaartekrachtmodal = document.getElementById('zwaartekrachtModal');
var modalBtn = document.getElementById('zwaartekrachtBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[4];

zwaartekrachtBtn.addEventListener('click', openZwaartekrachtmodal);

closeBtn.addEventListener('click', closeZwaartekrachtmodal);

window.addEventListener('click', outsideZwaartekracht);

function openZwaartekrachtmodal() {
    zwaartekrachtmodal.style.display = 'block';
}

function closeZwaartekrachtmodal() {
    zwaartekrachtmodal.style.display = 'none';
}

function outsideZwaartekracht(e) {
    if(e.target == zwaartekrachtmodal) {
    zwaartekrachtmodal.style.display = 'none';
    }
}

// AFSTAND
var afstandmodal = document.getElementById('afstandModal');
var modalBtn = document.getElementById('afstandBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[5];

afstandBtn.addEventListener('click', openAfstandmodal);

closeBtn.addEventListener('click', closeAfstandmodal);

window.addEventListener('click', outsideAfstand);

function openAfstandmodal() {
    afstandmodal.style.display = 'block';
}

function closeAfstandmodal() {
    afstandmodal.style.display = 'none';
}

function outsideAfstand(e) {
    if(e.target == afstandmodal) {
    afstandmodal.style.display = 'none';
    }
}

// ATMOSFEER
var atmosfeermodal = document.getElementById('atmosfeerModal');
var modalBtn = document.getElementById('atmosfeerBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[6];

atmosfeerBtn.addEventListener('click', openAtmosfeermodal);

closeBtn.addEventListener('click', closeAtmosfeermodal);

window.addEventListener('click', outsideAtmosfeer);

function openAtmosfeermodal() {
    atmosfeermodal.style.display = 'block';
}

function closeAtmosfeermodal() {
    atmosfeermodal.style.display = 'none';
}

function outsideAtmosfeer(e) {
    if(e.target == atmosfeermodal) {
    atmosfeermodal.style.display = 'none';
    }
}


// ETEN
var etenmodal = document.getElementById('etenModal');
var modalBtn = document.getElementById('etenBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[7];

etenBtn.addEventListener('click', openEtenmodal);

closeBtn.addEventListener('click', closeEtenmodal);

window.addEventListener('click', outsideEten);

function openEtenmodal() {
    etenmodal.style.display = 'block';
}

function closeEtenmodal() {
    etenmodal.style.display = 'none';
}

function outsideEten(e) {
    if(e.target == etenmodal) {
    etenmodal.style.display = 'none';
    }
}


// DRINKEN
var drinkenmodal = document.getElementById('drinkenModal');
var modalBtn = document.getElementById('drinkenBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[9];

drinkenBtn.addEventListener('click', openDrinkenmodal);

closeBtn.addEventListener('click', closeDrinkenmodal);

window.addEventListener('click', outsideDrinken);

function openDrinkenmodal() {
    drinkenmodal.style.display = 'block';
}

function closeDrinkenmodal() {
    drinkenmodal.style.display = 'none';
}

function outsideDrinken(e) {
    if(e.target == drinkenmodal) {
    drinkenmodal.style.display = 'none';
    }
}


// ZWAARTEKRACHT OMZETTEN
var zomodal = document.getElementById('zoModal');
var modalBtn = document.getElementById('zoBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[10];

zoBtn.addEventListener('click', openZomodal);

closeBtn.addEventListener('click', closeZomodal);

window.addEventListener('click', outsideZo);

function openZomodal() {
    zomodal.style.display = 'block';
}

function closeZomodal() {
    zomodal.style.display = 'none';
}

function outsideZo(e) {
    if(e.target == zomodal) {
    zomodal.style.display = 'none';
    }
}


// Mars naar Aardse afstand
var marsaardemodal = document.getElementById('marsaardeModal');
var modalBtn = document.getElementById('marsaardeBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[11];

marsaardeBtn.addEventListener('click', openMarsaardemodal);

closeBtn.addEventListener('click', closeMarsaardemodal);

window.addEventListener('click', outsideMarsaarde);

function openMarsaardemodal() {
    marsaardemodal.style.display = 'block';
}

function closeMarsaardemodal() {
    marsaardemodal.style.display = 'none';
}

function outsideMarsaarde(e) {
    if(e.target == marsaardemodal) {
    marsaardemodal.style.display = 'none';
    }
}







