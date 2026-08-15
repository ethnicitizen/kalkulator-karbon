const kamus = {
    id: {
        title: "Hitung Jejak Karbonmu", subtitle: "Platform Crowdfunding Komunitas Ethnicitizen — Bersama Jaga Hutan Kita",
        sec1: "1. Sektor Utilitas & Bahan Bakar", labelNama: "Nama Anda / Nama Kelompok", placeholderNama: "Contoh: Sahabat Hijau",
        labelListrik: "Konsumsi Listrik Bulanan (kWh)", labelBbm: "Konsumsi BBM Kendaraan (Liter / Bulan)", labelSampah: "Produksi Sampah Organik (Kg / Hari)",
        sec2: "2. Sektor Perjalanan & Transportasi", labelMotor: "Jarak Motor Pribadi (Km / Bulan)", labelMobil: "Jarak Mobil Pribadi (Km / Bulan)",
        labelPesawat: "Jarak Penerbangan Udara (Km / Bulan)", labelLaut: "Jarak Kapal / Feri Laut (Km / Bulan)",
        sec3: "3. Metode Penyeimbangan Karbon (Offset)", labelMetode: "Pilih Program Kontribusi Anda",
        optPohon: "Pohon Asuh (Penanaman & Agroforestry - Rp 30.000 / unit)", optPatroli: "Patroli Hutan (Areal Pengelolaan Hutan Berbasis Masyarakat - Rp 50.000 / unit)",
        btnHitung: "Mulai Analisis Emisi", hasilTitle: "Hasil Analisis Dampak Ekologis:", hasilEmisi: "Estimasi Emisi Bulanan:",
        hasilBeban: "Target Beban Kompensasi:", btnWa: "Salurkan Dukungan Via WhatsApp Sekarang",
        pohonNama: "Adopsi & Perawatan Pohon Agroforestry", patroliNama: "Operasional Patroli Areal Pengelolaan Hutan Berbasis Masyarakat"
    },
    en: {
        title: "Calculate Your Carbon Footprint", subtitle: "Ethnicitizen Community Crowdfunding Platform — Together Protecting Our Forests",
        sec1: "1. Utility & Fuel Sector", labelNama: "Your Name / Group Name", placeholderNama: "e.g., Green Friend",
        labelListrik: "Monthly Electricity Consumption (kWh)", labelBbm: "Vehicle Fuel Consumption (Liters / Month)", labelSampah: "Organic Waste Production (Kg / Day)",
        sec2: "2. Travel & Transportation Sector", labelMotor: "Motorcycle Distance (Km / Month)", labelMobil: "Car Distance (Km / Month)",
        labelPesawat: "Air Travel Distance (Km / Month)", labelLaut: "Sea/Ferry Travel Distance (Km / Month)",
        sec3: "3. Carbon Offset Method", labelMetode: "Choose Your Contribution Program",
        optPohon: "Tree Adoption (Planting & Agroforestry - IDR 30,000 / unit)", optPatroli: "Forest Patrol (Community-Based Forest Management Area - IDR 50,000 / unit)",
        btnHitung: "Start Emission Analysis", hasilTitle: "Ecological Impact Analysis Results:", hasilEmisi: "Estimated Monthly Emissions:",
        hasilBeban: "Target Compensation Load:", btnWa: "Send Support Via WhatsApp Now",
        pohonNama: "Agroforestry Tree Adoption & Care", patroliNama: "Forest Patrol Operations in Community-Based Forest Management Areas"
    }
};

let bahasaAktif = 'id';
let globalLinkWA = "";

function gantiBahasa(lang) {
    if (!kamus[lang]) lang = 'id';
    bahasaAktif = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');

    document.getElementById('txt-title').innerText = kamus[lang].title;
    document.getElementById('txt-subtitle').innerText = kamus[lang].subtitle;
    document.getElementById('sec-1').innerText = kamus[lang].sec1;
    document.getElementById('lbl-nama').innerText = kamus[lang].labelNama;
    document.getElementById('nama').placeholder = kamus[lang].placeholderNama;
    document.getElementById('lbl-listrik').innerText = kamus[lang].labelListrik;
    document.getElementById('lbl-bbm').innerText = kamus[lang].labelBbm;
    document.getElementById('lbl-sampah').innerText = kamus[lang].labelSampah;
    document.getElementById('sec-2').innerText = kamus[lang].sec2;
    document.getElementById('lbl-motor').innerText = kamus[lang].labelMotor;
    document.getElementById('lbl-mobil').innerText = kamus[lang].labelMobil;
    document.getElementById('lbl-pesawat').innerText = kamus[lang].labelPesawat;
    document.getElementById('lbl-laut').innerText = kamus[lang].labelLaut;
    document.getElementById('sec-3').innerText = kamus[lang].sec3;
    document.getElementById('lbl-metode').innerText = kamus[lang].labelMetode;
    
    document.getElementById('opt-pohon').innerText = kamus[lang].optPohon;
    document.getElementById('opt-patroli').innerText = kamus[lang].optPatroli;
    
    document.getElementById('btn-hitung').innerText = kamus[lang].btnHitung;
    document.getElementById('txt-hasil-title').innerText = kamus[lang].hasilTitle;
    document.getElementById('txt-hasil-emisi').innerText = kamus[lang].hasilEmisi;
    document.getElementById('txt-hasil-beban').innerText = kamus[lang].hasilBeban;
    document.getElementById('btn-wa-kirim').innerText = kamus[lang].btnWa;
}

window.addEventListener('DOMContentLoaded', () => {
    let browserLang = navigator.language || navigator.userLanguage;
    browserLang = browserLang.substr(0, 2);
    gantiBahasa(browserLang);
});

function prosesHitungKarbon() {
    const namaUser = document.getElementById('nama').value || 'Ethnicitizen';
    const listrik = parseFloat(document.getElementById('listrik').value) || 0;
    const wilayah = document.getElementById('wilayah').value;
    const bbm = parseFloat(document.getElementById('bbm').value) || 0;
    const sampahHarian = parseFloat(document.getElementById('sampah').value) || 0;
    const kmMotor = parseFloat(document.getElementById('jarak_motor').value) || 0;
    const kmMobil = parseFloat(document.getElementById('jarak_mobil').value) || 0;
    const kmPesawat = parseFloat(document.getElementById('jarak_pesawat').value) || 0;
    const kmLaut = parseFloat(document.getElementById('jarak_laut').value) || 0;
    const jenisKompensasi = document.getElementById('metode_donasi').value;

    const FAKTOR_LISTRIK_JAWA = 0.87; const FAKTOR_LISTRIK_LUAR = 1.11; const FAKTOR_BBM = 2.33; const FAKTOR_SAMPAH_ORGANIK = 0.41; 
    const FAKTOR_MOTOR = 0.05; const FAKTOR_MOBIL = 0.18; const FAKTOR_PESAWAT = 0.12; const FAKTOR_LAUT = 0.04;    
    const DAYA_SERAP_POHON_BULAN = 22 / 12; const BIAYA_POHON_ASUH = 30000; const BIAYA_PATROLI_HUTAN = 50000;

    let emisiListrik = listrik * (wilayah === 'jawa_bali' ? FAKTOR_LISTRIK_JAWA : FAKTOR_LISTRIK_LUAR);
    let totalEmisi = emisiListrik + (bbm * FAKTOR_BBM) + ((sampahHarian * 30) * FAKTOR_SAMPAH_ORGANIK) + (kmMotor * FAKTOR_MOTOR) + (kmMobil * FAKTOR_MOBIL) + (kmPesawat * FAKTOR_PESAWAT) + (kmLaut * FAKTOR_LAUT);
    if (totalEmisi < 0) totalEmisi = 0;

    let targetJumlahUnit = Math.ceil(totalEmisi / DAYA_SERAP_POHON_BULAN);
    let totalBiayaDonasi = targetJumlahUnit * (jenisKompensasi === 'pohon_asuh' ? BIAYA_POHON_ASUH : BIAYA_PATROLI_HUTAN);
    
    let labelUnitText = jenisKompensasi === 'pohon_asuh' ? "Unit" : "Pack";
    let namaProgram = jenisKompensasi === 'pohon_asuh' ? kamus[bahasaAktif].pohonNama : kamus[bahasaAktif].patroliNama;

    document.getElementById('totalEmisi').innerText = totalEmisi.toFixed(2);
    document.getElementById('totalAktivitas').innerText = targetJumlahUnit;
    document.getElementById('labelAktivitas').innerText = labelUnitText;

    // Generate Verification Code (Contoh: ETH-8921) dan Ledger Hash
    const autoGenCode = "ETH-" + Math.floor(1000 + Math.random() * 9000);
    const randomHash = "0x" + Array.from({length: 8}, () => Math.floor(Math.random()*16).toString(16)).join('').toUpperCase();
    
    // Auto-update Tanggal Pengisian Hari Ini
    const tanggalHariIni = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

    // Simpan Ke Local Storage
    localStorage.setItem("eth_nama", namaUser);
    localStorage.setItem("eth_emisi", totalEmisi.toFixed(2));
    localStorage.setItem("eth_unit", targetJumlahUnit);
    localStorage.setItem("eth_program", namaProgram);
    localStorage.setItem("eth_hash", randomHash);
    localStorage.setItem("eth_vcode", autoGenCode);
    localStorage.setItem("eth_tanggal", tanggalHariIni);
    localStorage.setItem("eth_verified", "false"); // Status verifikasi default: false

    // Susun Pesan WhatsApp dengan Kode Verifikasi
    const nomorWA = "6285766594397"; // ⚠️ GANTI DENGAN NOMOR WA ADMIN ETHNICITIZEN
    const teksWA = `Halo Admin Ethnicitizen! 🌿\n\n` +
                   `Saya ingin menyalurkan kompensasi karbon:\n` +
                   `• *Nama:* ${namaUser}\n` +
                   `• *Estimasi Emisi:* ${totalEmisi.toFixed(2)} kg CO₂e\n` +
                   `• *Program:* ${namaProgram} (${targetJumlahUnit} ${labelUnitText})\n` +
                   `• *Total Donasi:* Rp ${totalBiayaDonasi.toLocaleString('id-ID')}\n` +
                   `• *Ledger ID:* ${randomHash}\n\n` +
                   `🔐 *KODE VERIFIKASI SERTIFIKAT:* ${autoGenCode}\n\n` +
                   `Mohon konfirmasi kode di atas untuk mengaktifkan Sertifikat Hijau saya. Terima kasih!`;

    globalLinkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(teksWA)}`;

    document.getElementById('hasilBox').style.display = 'block';
    document.getElementById('hasilBox').scrollIntoView({ behavior: 'smooth' });
}

function kirimWhatsApp() {
    if (globalLinkWA !== "") {
        window.open(globalLinkWA, '_blank');
        setTimeout(() => {
            window.location.href = "sertifikat.html";
        }, 1000);
    } else {
        alert("Silakan klik tombol 'Mulai Analisis Emisi' terlebih dahulu.");
    }
}
