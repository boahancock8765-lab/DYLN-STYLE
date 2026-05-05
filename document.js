document.addEventListener('DOMContentLoaded', () => {
    const btnGenerate = document.getElementById('btn-generate');
    const btnReset = document.getElementById('btn-reset');
    const resultSection = document.getElementById('result-section');
    
    btnGenerate.addEventListener('click', () => {
        // Ambil Nilai Input
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const footSize = parseInt(document.getElementById('footSize').value);

        // Validasi Input Kosong
        if (!height || !weight || !footSize) {
            alert("Harap isi semua data terlebih dahulu!");
            return;
        }

        // 1. Logika Perhitungan Ukuran Baju/Celana (Berdasarkan Tinggi & Berat)
        // Kita gunakan logika BMI sederhana untuk menentukan ukuran
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        
        let size = "";
        let bodyStatus = "";

        if (bmi < 18.5) {
            size = "S";
            bodyStatus = "Tubuhmu cenderung slim.";
        } else if (bmi >= 18.5 && bmi < 25) {
            size = "M";
            bodyStatus = "Tubuhmu proporsional (Ideal).";
        } else if (bmi >= 25 && bmi < 30) {
            size = "L";
            bodyStatus = "Tubuhmu berisi (Fit).";
        } else {
            size = "XL / XXL";
            bodyStatus = "Tubuhmu besar dan tegap.";
        }

        // 2. Logika Rekomendasi Gaya
        let topRec = "";
        let bottomRec = "";

        if (height > 175) {
            topRec = "Oversized T-Shirt atau Jaket Bomber";
            bottomRec = "Slim Fit Jeans atau Chino Pants";
        } else if (height < 160) {
            topRec = "Vertical Striped Shirt (Kemeja Garis Vertikal)";
            bottomRec = "High-waist Trousers atau Celana Pendek";
        } else {
            topRec = "Regular Fit Polo atau Hoodie";
            bottomRec = "Jogger Pants atau Cargo";
        }

        // 3. Tampilkan Hasil ke UI
        document.getElementById('body-status').textContent = bodyStatus;
        document.getElementById('top-rec').textContent = topRec;
        document.getElementById('top-size').textContent = `Size: ${size}`;
        
        document.getElementById('bottom-rec').textContent = bottomRec;
        document.getElementById('bottom-size').textContent = `Size: ${size}`;

        document.getElementById('shoe-rec').textContent = "Sneakers Casual atau Slip-on";
        document.getElementById('shoe-size').textContent = `Size: ${footSize}`;

        // Sembunyikan form input dan munculkan hasil
        resultSection.classList.remove('hidden');
        document.querySelector('.input-section').classList.add('hidden');
        window.scrollTo(0, 0);
    });

    // Tombol Reset
    btnReset.addEventListener('click', () => {
        resultSection.classList.add('hidden');
        document.querySelector('.input-section').classList.remove('hidden');
        // Reset field input
        document.getElementById('height').value = "";
        document.getElementById('weight').value = "";
        document.getElementById('footSize').value = "";
    });
});