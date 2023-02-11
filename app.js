let kret1 = 'https://i.imgur.com/xExWDb9.png';
let kret2 = 'https://i.imgur.com/vd1jnet.png';
let kret3 = 'https://cdn.discordapp.com/attachments/749599041892909146/1074059397719920640/316682679_816597202902710_1442333648782414651_n.jpg';
let kret4 = 'https://cdn.discordapp.com/attachments/749599041892909146/1074059426509619331/316586854_846190083371367_7984892024377896631_n.jpg';
let kret5 = 'https://i.imgur.com/qkILgyI.jpeg';
let kret6 = 'https://i.imgur.com/ANf2Z8W.png';
let kreciki = [ kret1, kret2, kret3, kret4, kret5, kret6 ];
let stan = 0;
let kliczki = 0;
let kliksy = document.getElementById('kliki');

if (window.localStorage.getItem('kliki') == null) {
    window.localStorage.setItem('kliki', 0);
} else {
    kliczki = window.localStorage.getItem('kliki');
    kliksy.innerHTML = kliczki;
}

let audio = document.getElementById("animedziefczynka");
audio.volume = 0.05;
audio.play();

function woda() {
    kliczki++;
    if (stan !== kreciki.length - 1) {
        stan++;
    } else {
        stan = 0;
    }
    console.log(kreciki[stan])
    document.getElementById('zdjecie').src = kreciki[stan];
    kliksy.innerHTML = kliczki;
    window.localStorage.setItem('kliki', kliczki);
}