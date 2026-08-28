// Kamus Bahasa
const kamus = {
    id: {
        title: "Hitung Jejak Karbonmu",
        subtitle: "Platform Crowdfunding Ethnicitizen",
        lblNama: "Nama Anda / Nama Kelompok",
        lblEmail: "Email Anda",
        lblNoPhone: "Nomor Handphone",
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
        optPohon: "Pohon Asuh (Reforestasi & Agroforestry) - Rp. 25.000/batang",
        optPatroli: "Patroli Perlindungan Kawasan Kelola - Rp. 50.000/orang/hari",
        btnHitung: "🍃 Mulai Analisis Dampak"
    },
    en: {
        title: "Calculate Your Carbon Footprint",
        subtitle: "Ethnicitizen Crowdfunding Platform",
        lblNama: "Your Name / Group Name",
        lblEmail: "Your Email",
        lblNoPhone: "Handphone Number",
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
        optPohon: "Tree Adoption (Reforestation & Agroforestry) - IDR 25.000/batang",
        optPatroli: "Community Forest Patrol Program - IDR 50.000/person/day",
        btnHitung: "🍃 Start Impact Analysis"
    }
};

let bahasaAktif = 'id';

function gantiBahasa(lang) {
    bahasaAktif = lang;
    const t = kamus[lang];
    if(!t) return;
    
    if(document.getElementById('txt-title')) document.getElementById('txt-title').innerText = t.title;
    if(document.getElementById('txt-subtitle')) document.getElementById('txt-subtitle').innerText = t.subtitle;
    if(document.getElementById('lbl-nama')) document.getElementById('lbl-nama').innerText = t.lblNama;
    if(document.getElementById('lbl-email')) document.getElementById('lbl-email').innerText = t.lblEmail;
    if(document.getElementById('lbl-nophone')) document.getElementById('lbl-nophone').innerText = t.lblNoPhone;
    if(document.getElementById('sec-1')) document.getElementById('sec-1').innerText = t.sec1;
    if(document.getElementById('lbl-listrik')) document.getElementById('lbl-listrik').innerText = t.lblListrik;
    if(document.getElementById('lbl-bbm')) document.getElementById('lbl-bbm').innerText = t.lblBbm;
    if(document.getElementById('lbl-sampah')) document.getElementById('lbl-sampah').innerText = t.lblSampah;
    if(document.getElementById('sec-2')) document.getElementById('sec-2').innerText = t.sec2;
    if(document.getElementById('lbl-motor')) document.getElementById('lbl-motor').innerText = t.lblMotor;
    if(document.getElementById('lbl-mobil')) document.getElementById('lbl-mobil').innerText = t.lblMobil;
    if(document.getElementById('lbl-pesawat')) document.getElementById('lbl-pesawat').innerText = t.lblPesawat;
    if(document.getElementById('lbl-laut')) document.getElementById('lbl-laut').innerText = t.lblLaut;
    if(document.getElementById('sec-3')) document.getElementById('sec-3').innerText = t.sec3;
    if(document.getElementById('lbl-metode')) document.getElementById('lbl-metode').innerText = t.lblMetode;
    if(document.getElementById('opt-pohon')) document.getElementById('opt-pohon').innerText = t.optPohon;
    if(document.getElementById('opt-patroli')) document.getElementById('opt-patroli').innerText = t.optPatroli;
    if(document.getElementById('btn-hitung')) document.getElementById('btn-hitung').innerText = t.btnHitung;

    if(document.getElementById('btn-id')) document.getElementById('btn-id').classList.toggle('active', lang === 'id');
    if(document.getElementById('btn-en')) document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}

function prosesHitungKarbon() {
    // Ambil Input Nama & Email
    const inputNama = document.getElementById('nama').value.trim();
    const namaUser = inputNama !== "" ? inputNama : "Sahabat Hijau";
    
    const inputEmail = document.getElementById('email').value.trim();
    const emailUser = inputEmail !== "" ? inputEmail : "-";

    // Validation Sederhana (Jika email dan nomor phone wajib diisi)
    if (inputEmail === "") {
        alert("Silakan masukkan email Anda untuk konfirmasi.");
        document.getElementById('email').focus();
        return;
    if (inputNoPhone === "") {
        alert("Silakan masukkan nomor handphone Anda untuk konfirmasi.");
        document.getElementById('email').focus();
        return;
    }

    // Ambil Input Angka (Default 0)
    const listrik = parseFloat(document.getElementById('listrik').value) || 0;
    const bbm = parseFloat(document.getElementById('bbm').value) || 0;
    const sampah = parseFloat(document.getElementById('sampah').value) || 0;
    const motor = parseFloat(document.getElementById('jarak_motor').value) || 0;
    const mobil = parseFloat(document.getElementById('jarak_mobil').value) || 0;
    const pesawat = parseFloat(document.getElementById('jarak_pesawat').value) || 0;
    const laut = parseFloat(document.getElementById('jarak_laut').value) || 0;
    const wilayah = document.getElementById('wilayah').value;
    const metode = document.getElementById('metode_donasi').value;

    // Hitung Emisi Karbon (IPCC AR6 Standard)
    const faktorListrik = (wilayah === 'jawa_bali') ? 0.87 : 0.78;
    const emisiListrik = listrik * faktorListrik;
    const emisiBbm = bbm * 2.35;
    const emisiSampah = (sampah * 30) * 0.58;
    const emisiMotor = motor * 0.045;
    const emisiMobil = mobil * 0.192;
    const emisiPesawat = pesawat * 0.245;
    const emisiLaut = laut * 0.082;

    const totalEmisi = Math.round(emisiListrik + emisiBbm + emisiSampah + emisiMotor + emisiMobil + emisiPesawat + emisiLaut);

    // Hitung Beban & Rupiah
    let targetBeban = 0;
    let labelBeban = '';
    let hargaPerUnit = 0;
    let namaMetode = '';

    if (metode === 'pohon_asuh') {
        targetBeban = Math.max(1, Math.ceil(totalEmisi / 22));
        labelBeban = 'Batang Pohon Asuh';
        hargaPerUnit = 25000;
        namaMetode = 'Pohon Asuh (Reforestasi & Agroforestry) - Rp. 25.000/batang';
    } else {
        targetBeban = Math.max(1, Math.ceil(totalEmisi / 50));
        labelBeban = 'Hari Patroli Hutan';
        hargaPerUnit = 50000;
        namaMetode = 'Patroli Perlindungan Kawasan Kelola - Rp. 50.000/orang/hari';
    }

    const totalRupiah = targetBeban * hargaPerUnit;

    // Simpan data lengkap ke LocalStorage
    const dataKarbon = {
        nama: namaUser,
        email: emailUser,
        nophone: nophoneUser
        totalEmisi: totalEmisi,
        targetBeban: targetBeban,
        labelBeban: labelBeban,
        totalRupiah: totalRupiah,
        metode: namaMetode
    };

    localStorage.setItem('karbonData', JSON.stringify(dataKarbon));

    // Pindah ke halaman hasil.html secara pasti
    window.location.href = "./hasil.html";
}
