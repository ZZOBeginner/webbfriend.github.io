// Fungsi untuk berpindah ke halaman 2 setelah mengisi nama
function goToPage2() {
  const name = document.getElementById('name-input').value;
  if (name) {
    document.getElementById('page-1').classList.remove('active');
    document.getElementById('page-2').classList.add('active');
  } else {
    alert('Mohon isi nama terlebih dahulu.');
  }
}

// Fungsi untuk berpindah ke halaman 3 setelah mengisi jawaban kangen
function goToPage3() {
  const kangen = document.getElementById('kangen-input').value;
  if (kangen) {
    document.getElementById('page-2').classList.remove('active');
    document.getElementById('page-3').classList.add('active');
  } else {
    alert('Mohon jawab pertanyaan terlebih dahulu.');
  }
}

// Fungsi untuk berpindah ke halaman 4 setelah mengisi pilihan grup
function goToPage4() {
  const groupChoice = document.getElementById('group-input').value;
  if (groupChoice) {
    document.getElementById('page-3').classList.remove('active');
    document.getElementById('page-4').classList.add('active');
  } else {
    alert('Mohon pilih gambar wisata terlebih dahulu.');
  }
}

// Fungsi untuk memilih gambar wisata
function selectImage(wisataNumber) {
  document.getElementById('group-input').value = `Wisata ${wisataNumber} dipilih`;
  alert(`Kamu memilih Wisata ${wisataNumber}`);
}

// Menambahkan animasi dan tampilan halaman pertama saat web dimuat
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('page-1').classList.add('active');
});
