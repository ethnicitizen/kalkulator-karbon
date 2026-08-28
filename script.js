// Kamus Bahasa (Multi-Language)
const kamus = {
    id: {
        title: "Hitung Jejak Karbonmu",
        subtitle: "Platform Crowdfunding Ethnicitizen — Pengelolaan Hutan Berbasis Masyarakat",
        lblNama: "Nama Anda / Nama Kelompok",
        sec1: "1. Sektor Utilitas & Bahan Bakar",
        lblListrik: "Konsumsi Listrik Bulanan (kWh)",
        lblBbm: "Konsumsi BBM Kendaraan (Liter / Bulan)",
        lblSampah: "Produksi Sampah Organik (Kg / Hari)",
        sec2: "2. Sektor Perjalanan & Transportasi",
        lblMotor: "Jarak Tempuh Motor Pribadi (Km / Bulan)",
        lblMobil: "Jarak Tempuh Mobil Pribadi (Km / Bulan)",
        lblPesawat: "Jarak Penerbangan Udara (Km / Bulan)",
        lblLaut: "Jarak Jelajah Kapal / Feri Laut (Km / Bulan)",
        sec3: "3. Metode Penyeimbangan Karbon (Offset)",
        lblMetode: "Pilih Program Kontribusi Anda",
        optPohon: "Pohon Asuh (Reforestasi & Agroforestry)",
        optPatroli: "Patroli Areal Pengelolaan Hutan Berbasis Masyarakat",
        btnHitung: "🍃 Mulai Analisis Dampak",
        txtHasilTitle: "Hasil Analisis Dampak Ekologis:",
        txtHasilEmisi: "Estimasi Emisi Bulanan:",
        txtHasilBeban: "Target Beban Kompensasi:",
        btnTelegram: '<i class="fab fa-telegram"></i> Salurkan Kontribusi via Telegram'
    },
    en: {
        title: "Calculate Your Carbon Footprint",
        subtitle: "Ethnicitizen Crowdfunding Platform — Community-Based Forest Management",
        lblNama: "Your Name / Group Name",
        sec1: "1. Utility & Fuel Sector",
        lblListrik: "Monthly Electricity Usage (kWh)",
        lblBbm: "Vehicle Fuel Consumption (Liters / Month)",
        lblSampah: "Organic Waste Production (Kg / Day)",
        sec2: "2. Travel & Transportation Sector",
        lblMotor: "Motorcycle Distance (Km / Month)",
        lblMobil: "Car Distance (Km / Month)",
        lblPesawat: "Flight Distance (Km / Month)",
        lblLaut: "Ship / Ferry Distance (Km / Month)",
        sec3: "3. Carbon Offset Method",
        lblMetode: "Select Your Contribution Program",
        optPohon: "Tree Adoption (Reforestation & Agroforestry)",
        optPatroli: "Community Forest Patrol Program",
        btnHitung: "🍃 Start Impact Analysis",
        txtHasilTitle: "Ecological Impact Analysis Results:",
        txtHasilEmisi: "Estimated Monthly Emission:",
        txtHasilBeban: "Compensation Target:",
        btnTelegram: '<i class="fab fa-telegram"></i> Submit Contribution via Telegram'
    }
};

let bahasaAktif = 'id';

// Fungsi Switch Bahasa
function gantiBahasa(lang) {
    bahasaAktif = lang;
    const t = kamus[lang];
    
    document.getElementById('txt-title').innerText = t.title;
    document.getElementById('txt-subtitle').innerText = t.subtitle;
    document.getElementById('lbl-nama').innerText = t.lblNama;
    document.getElementById('sec-1').innerText = t.sec1;
    document.getElementById('lbl-listrik').innerText = t.lblListrik;
    document.getElementById('lbl-bbm').innerText = t.lblBbm;
    document.getElementById('lbl-sampah').innerText = t.lblSampah;
    document.getElementById('sec-2').innerText = t.sec2;
    document.getElementById('lbl-motor').innerText = t.lblMotor;
    document.getElementById('lbl-mobil').innerText = t.lblMobil;
    document.getElementById('lbl-pesawat').innerText = t.lblPesawat;
    document.getElementById('lbl-laut').innerText = t.lblLaut;
    document.getElementById('sec-3').innerText = t.sec3;
    document.getElementById('lbl-metode').innerText = t.lblMetode;
    document.getElementById('opt-pohon').innerText = t.optPohon;
    document.getElementById('opt-patroli').innerText = t.optPatroli;
    document.getElementById('btn-hitung').innerText = t.btnHitung;
    document.getElementById('txt-hasil-title').innerText = t.txtHasilTitle;
    document.getElementById('txt-hasil-emisi').innerText = t.txtHasilEmisi;
    document.getElementById('txt-hasil-beban').innerText = t.txtHasilBeban;
    document.getElementById('btn-telegram-kirim').innerHTML = t.btnTelegram;

    // Toggle kelas aktif pada tombol bahasa
    document.getElementById('btn-id').classList.toggle('active', lang === 'id');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}

// Fungsi Utama Kalkulasi Karbon (Standar IPCC AR6 & Rujukan Perpres 110/2025)
function prosesHitungKarbon() {
    const nama = document.getElementById('nama').value.trim() || (bahasaAktif === 'id' ? 'Sahabat Hijau' : 'Green Friend');
    
    // Ambil input angka (default 0 jika kosong)
    const listrik = parseFloat(document.getElementById('listrik').value) || 0;
    const bbm = parseFloat(document.getElementById('bbm').value) || 0;
    const sampah = parseFloat(document.getElementById('sampah').value) || 0;
    const motor = parseFloat(document.getElementById('jarak_motor').value) || 0;
    const mobil = parseFloat(document.getElementById('jarak_mobil').value) || 0;
    const pesawat = parseFloat(document.getElementById('jarak_pesawat').value) || 0;
    const laut = parseFloat(document.getElementById('jarak_laut').value) || 0;
    const wilayah = document.getElementById('wilayah').value;
    const metode = document.getElementById('metode_donasi').value;

    // Faktor Emisi (kg CO2e)
    const faktorListrik = wilayah === 'jawa_bali' ? 0.85 : 0.75;
    const emisiListrik = listrik * faktorListrik;
    const emisiBbm = bbm * 2.31;
    const emisiSampah = (sampah * 30) * 0.5; // dikali 30 hari
    const emisiMotor = motor * 0.04;
    const emisiMobil = mobil * 0.19;
    const emisiPesawat = pesawat * 0.24;
    const emisiLaut = laut * 0.08;

    const totalEmisi = Math.round(emisiListrik + emisiBbm + emisiSampah + emisiMotor + emisiMobil + emisiPesawat + emisiLaut);

    // Hitung Kompensasi
    let targetBeban = 0;
    let labelBeban = '';
    
    if (metode === 'pohon_asuh') {
        // 1 Pohon Asuh = 22 - 25 kg CO2e/tahun (~1.83kg/bulan) | Harga: Rp25.000 / batang
        targetBeban = Math.max(1, Math.ceil(totalEmisi / 22));
        labelBeban = bahasaAktif === 'id' ? 'Batang Pohon Asuh' : 'Adopted Trees';
        hargaPerUnit = 25000;
    } else {
        // 1 Hari Patroli Hutan = Menjaga serapan Area 50 kg CO2e | Harga: Rp50.000 / hari
        targetBeban = Math.max(1, Math.ceil(totalEmisi / 50));
        labelBeban = bahasaAktif === 'id' ? 'Hari Patroli Hutan' : 'Forest Patrol Days';
        hargaPerUnit = 50000;
    }

    // Total Biaya Kompensasi Rupiah
    const totalRupiah = targetBeban * hargaPerUnit

    // Tampilkan Hasil di Layar HTML
    document.getElementById('totalEmisi').innerText = totalEmisi.toLocaleString('id-ID');
    document.getElementById('totalAktivitas').innerText = targetBeban.toLocaleString('id-ID');
    document.getElementById('labelAktivitas').innerText = labelBeban;

    // Tampilkan / Update Elemen Nominal Biaya Rupiah (jika ada elemen id="totalRupiah")
    const elemRupiah = document.getElementById('totalRupiah');
    if (elemRupiah) {
        elemRupiah.innerText = "Rp " + totalRupiah.toLocaleString('id-ID');
    }

    document.getElementById('hasilBox').style.display = 'block';

    // Simpan data lengkap ke localStorage
    const dataKarbon = {
        nama: nama,
        totalEmisi: totalEmisi,
        targetBeban: targetBeban,
        labelBeban: labelBeban,
        hargaPerUnit: hargaPerUnit,
        totalRupiah: totalRupiah,
        metode: metode === 'pohon_asuh' ? 'Pohon Asuh' : 'Patroli Hutan',
        bahasa: bahasaAktif
    };
    localStorage.setItem('karbonData', JSON.stringify(dataKarbon));
    
    // Redirect ke Halaman Hasil Analisis
    window.location.href = "hasil.html";
}

// Fungsi Kirim ke Telegram dengan Rincian Nominal Pembayaran
function kirimTelegram() {
    const data = JSON.parse(localStorage.getItem('karbonData')) || {
        nama: document.getElementById('nama').value.trim() || 'Sahabat Hijau',
        totalEmisi: '0',
        targetBeban: '0',
        labelBeban: 'Unit',
        totalRupiah: 0,
        metode: 'Kompensasi Karbon'
    };

    const usernameTelegram = "ethnicitizen";
    const nominalFormatted = "Rp " + (data.totalRupiah || 0).toLocaleString('id-ID');
    
    const teksPesan = 
        "Halo Admin @ethnicitizen,\n\n" +
        "Saya telah menghitung estimasi jejak karbon di Ethnicitizen Carbon Calculator:\n" +
        "👤 Nama/Kelompok: " + data.nama + "\n" +
        "💨 Total Emisi: " + data.totalEmisi.toLocaleString('id-ID') + " kg CO2e\n" +
        "🌱 Program Kompensasi: " + data.metode + " (" + data.targetBeban.toLocaleString('id-ID') + " " + data.labelBeban + ")\n" +
        "💰 Total Kompensasi: " + nominalFormatted + "\n\n" +
        "💳 Pembayaran ke Ethnicitizen Wallet - DANA pada link https://bit.ly/Ec97wallet.\n\n" +
        "Mohon konfirmasi pembayaran dan penerbitan Sertifikat resmi saya. Terima kasih!";

    const urlTelegram = "https://t.me/" + usernameTelegram + "?text=" + encodeURIComponent(teksPesan);
    window.open(urlTelegram, '_blank');
}
