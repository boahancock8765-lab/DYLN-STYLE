function hitungRekomendasi() {
    // Mengambil nilai dari input
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const berat = parseFloat(document.getElementById('berat').value);
    const kaki = parseFloat(document.getElementById('kaki').value);

    // Validasi input
    if (isNaN(tinggi) || isNaN(berat) || isNaN(kaki)) {
        alert("Mohon masukkan semua data dengan benar!");
        return;
    }

    let ukuranBaju = "";
    let ukuranSepatu = "";

    // 1. Logika Ukuran Baju (Berdasarkan Tinggi & Berat)
    if (berat < 50 && tinggi < 160) {
        ukuranBaju = "S";
    } else if (berat < 70 && tinggi < 175) {
        ukuranBaju = "M";
    } else if (berat < 85 && tinggi < 185) {
        ukuranBaju = "L";
    } else {
        ukuranBaju = "XL";
    }

    // 2. Logika Ukuran Sepatu (Berdasarkan panjang kaki)
    // Contoh standar umum: 24cm=38, 25cm=40, 26cm=42, dst.
    if (kaki <= 24) {
        ukuranSepatu = "37 - 38";
    } else if (kaki <= 25) {
        ukuranSepatu = "39 - 40";
    } else if (kaki <= 26) {
        ukuranSepatu = "41 - 42";
    } else {
        ukuranSepatu = "43 - 44";
    }

    // 3. Menampilkan Hasil
    document.getElementById('ukuran-baju').innerText = ukuranBaju;
    document.getElementById('ukuran-sepatu').innerText = ukuranSepatu;
    
    // Memberikan saran berdasarkan BMI sederhana
    const bmi = berat / ((tinggi/100) ** 2);
    let saran = "";
    if (bmi < 18.5) saran = "Saran: Pilih pakaian dengan motif horizontal agar terlihat lebih berisi.";
    else if (bmi > 25) saran = "Saran: Pilih warna gelap untuk memberikan kesan ramping.";
    else saran = "Saran: Kamu cocok menggunakan model pakaian apa saja!";

    document.getElementById('saran-tambahan').innerText = saran;

    // Tampilkan container hasil
    document.getElementById('hasil').style.display = "block";
}