import prov from "./data.js";

// Mendapatkan elemen container dari HTML
const cardsContainer = document.getElementById("cards-container");

// Pastikan container ada sebelum manipulasi DOM
if (cardsContainer) {
  // Iterasi setiap item dalam array prov dan membuat elemen .kartu
  prov.forEach((item) => {
    // Membuat elemen div dengan class 'kartu'
    const card = document.createElement("div");
    card.classList.add("kartu");

    // Menambahkan konten ke dalam elemen .kartu
    card.innerHTML = `
      <h3>${item.provinsi}</h3>
      <p>Ibu Kota: ${item.ibuKota}</p>
    `;

    // Menambahkan elemen .kartu ke dalam container
    cardsContainer.appendChild(card);
  });
} else {
  console.error("Elemen dengan ID 'profil-wilayah' tidak ditemukan.");
}

console.log(cardsContainer);
