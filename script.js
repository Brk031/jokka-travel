let ui = document.querySelectorAll('.ui');
let teksBaru = document.createElement('p');
teksBaru.classList.add('teksss')
let teks1 = {
      nama: 'Balon Udara',
      biaya: 'Rp. 8.000.000',
      lokasi: 'Turki',
}
let teks2 = {
      nama: 'Mendaki Gunung',
      biaya: 'Rp. 2.000.000',
      lokasi: 'Jawa Tengah',
}
let teks3 = {
      nama: 'Menjelajahi Pulau',
      biaya: 'Rp. 4.000.000',
      lokasi: 'Bali',
}
let teks4 = {
      nama: 'Jalan-jalan Melihat Sakura',
      biaya: 'Rp. 7.000.000',
      lokasi: 'Jepang',
}

ui[0].addEventListener('click', function(){
      teksBaru.innerHTML = `<b>${teks1.nama}</b> <br> ${teks1.biaya} <br> ${teks1.lokasi}`;
      ui[0].appendChild(teksBaru);
})
ui[1].addEventListener('click', function(){
      teksBaru.innerHTML = `<b>${teks2.nama}</b> <br> ${teks2.biaya} <br> ${teks2.lokasi}`;
      ui[1].appendChild(teksBaru);
})
ui[2].addEventListener('click', function(){
      teksBaru.innerHTML = `<b>${teks3.nama}</b> <br> ${teks3.biaya} <br> ${teks3.lokasi}`;
      ui[2].appendChild(teksBaru);
})
ui[3].addEventListener('click', function(){
      teksBaru.innerHTML = `<b>${teks4.nama}</b> <br> ${teks4.biaya} <br> ${teks4.lokasi}`;
      ui[3].appendChild(teksBaru);
})
