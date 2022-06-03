
let first = document.getElementById('first');
let second = document.getElementById('second');
const carp = document.getElementById('carp')
const topla = document.getElementById('top')
const bol = document.getElementById('bol')
const cık = document.getElementById('cık')

let sonu = 0;
let topla2 = document.getElementById("carp").addEventListener("click", function(e){let sonu = first.value * second.value; 
    console.log(sonu);
    document.getElementById('res').innerText = `İşleminizin sonucu ${sonu}`
});

let bol2 = document.getElementById("bol").addEventListener("click", function(e){let sonu = first.value / second.value
console.log(sonu)
document.getElementById('res').innerText = `İşleminizin sonucu ${sonu}`
});
let top2 =document.getElementById("top").addEventListener("click", function(e){let sonu = Number(first.value) + Number(second.value)
    console.log(sonu)
    document.getElementById('res').innerText = `İşleminizin sonucu ${sonu}`});
let cık2 = document.getElementById("cık").addEventListener("click", function(e){let sonu = first.value-second.value
    console.log(sonu)
    document.getElementById('res').innerText = `İşleminizin sonucu ${sonu}`
});


let fah = document.getElementById('fah');
let fahe = 0;

let fahren = document.getElementById("dereceye").addEventListener("click", function(e){let fahe = ((fah.value-32)/1.80);
    console.log(fahe)
    document.getElementById('derecell').innerText = `İşleminizin sonucu ${fahe}`
});

let dere = document.getElementById('der');

let dereee = 0

let deree = document.getElementById("fahrena").addEventListener("click", function(e){let dereee = ((der.value*1.8)+32);
    console.log(dereee)
    document.getElementById('derecell').innerText = `İşleminizin sonucu ${dereee}`
});

