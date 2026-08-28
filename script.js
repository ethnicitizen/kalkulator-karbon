// Kamus Bahasa
const kamus = {
    id: {
        title: "Hitung Jejak Karbonmu",
        subtitle: "Platform Crowdfunding Ethnicitizen",
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
        btnHitung: "🍃 Mulai Analisis Dampak"
    },
    en: {
        title: "Calculate Your Carbon Footprint",
        subtitle: "Ethnicitizen Crowdfunding Platform",
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
    const namaInput = document.getElementById('nama');
    const nama = (namaInput && namaInput.value.trim() !== "") ? namaInput.value.trim() : "Sahabat Hijau";
    
    const listrik = parseFloat(document.getElementById('listrik')?.value) || 0;
    const bbm = parseFloat(document.getElementById('bbm')?.value) || 0;
    const sampah = parseFloat(document.getElementById('sampah')?.value) || 0;
    const motor = parseFloat(document.getElementById('jarak_motor')?.value) || 0;
    const mobil = parseFloat(document.getElementById('jarak_mobil')?.value) || 0;
    const pesawat = parseFloat(document.getElementById('jarak_pesawat')?.value) || 0;
    const laut = parseFloat(document.getElementById('jarak_laut')?.value) || 0;
    const wilayah = document.getElementById('wilayah')?.value || 'jawa_bali';
    const metode = document.getElementById('metode_donasi')?.value || 'pohon_asuh';

    // Perhitungan IPCC AR6 & Perpres 110/2025
    const faktorListrik = (wilayah === 'jawa_bali') ? 0.87 : 0.78;
    const emisiListrik = listrik * faktorListrik;
    const emisiBbm = bbm * 2.35;
    const emisiSampah = (sampah * 30) * 0.58;
    const emisiMotor = motor * 0.045;
    const emisiMobil = mobil * 0.192;
    const emisiPesawat = pesawat * 0.245;
    const emisiLaut = laut * 0.082;

    const totalEmisi = Math.round(emisiListrik + emisiBbm + emisiSampah + emisiMotor + emisiMobil + emisiPesawat + emisiLaut);

    let targetBeban = 0;
    let labelBeban = '';
    let hargaPerUnit = 0;
    
    if (metode === 'pohon_asuh') {
        targetBeban = Math.max(1, Math.ceil(totalEmisi / 22));
        labelBeban = 'Batang Pohon Asuh';
        hargaPerUnit = 25000;
    } else {
        targetBeban = Math.max(1, Math.ceil(totalEmisi / 50));
        labelBeban = 'Hari Patroli Hutan';
        hargaPerUnit = 50000;
    }

    const totalRupiah = targetBeban * hargaPerUnit;

    // Simpan Data
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

    // Redirect ke hasil.html
    window.location.href = "hasil.html";
}
