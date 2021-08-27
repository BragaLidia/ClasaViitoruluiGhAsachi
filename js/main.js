function show(){
    document.getElementById("side-menu").classList.toggle("show")
}

function data(){
    var span;
    var date = new Date();

    an = date.getFullYear();

    span = document.getElementById("data");

    span.innerHTML ="@ Clasa Viitorului - IPLT „Gheorghe Asachi” <br/>" + an;
}

data();