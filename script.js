const kamus = {
    id: {
        title: "Hitung Jejak Karbonmu", subtitle: "Platform Crowdfunding Komunitas Ethnicitizen — Bersama Jaga Hutan Kita",
        sec1: "1. Sektor Utilitas & Bahan Bakar", labelNama: "Nama Anda / Nama Kelompok", placeholderNama: "Contoh: Sahabat Hijau",
        labelListrik: "Konsumsi Listrik Bulanan (kWh)", labelBbm: "Konsumsi BBM Kendaraan (Liter / Bulan)", labelSampah: "Produksi Sampah Organik (Kg / Hari)",
        sec2: "2. Sektor Perjalanan & Transportasi", labelMotor: "Jarak Motor Pribadi (Km / Bulan)", labelMobil: "Jarak Mobil Pribadi (Km / Bulan)",
        labelPesawat: "Jarak Penerbangan Udara (Km / Bulan)", labelLaut: "Jarak Kapal / Feri Laut (Km / Bulan)",
        sec3: "3. Metode Penyeimbangan Karbon (Offset)", labelMetode: "Pilih Program Kontribusi Anda",
        optPohon: "Pohon Asuh (Penanaman & Agroforestry - Rp 50.000 / unit)", optPatroli: "Patroli Hutan (Areal Pengelolaan Hutan Berbasis Masyarakat - Rp 35.000 / unit)",
        btnHitung: "Mulai Analisis Emisi", hasilTitle: "Hasil Analisis Dampak Ekologis:", hasilEmisi: "Estimasi Emisi Bulanan:",
        hasilBeban: "Target Beban Kompensasi:", btnWa: "Salurkan Dukungan Via WhatsApp Sekarang", certTitle: "CERTIFICATE OF REFORESTATION",
        certSub: "Piagam Komitmen Kelestarian Iklim diberikan kepada:", certTxt1: "Telah berpartisipasi aktif menyeimbangkan dampak emisi gas rumah kaca harian sebesar ",
        certTxt2: " kg CO₂e melalui pendanaan program aksi ", certTxt3: " sebanyak ", certTxt4: " unit aksi. Program ini dioperasikan oleh komunitas garda depan warga lokal demi mempertahankan tutupan hutan alam, perlindungan pangan lokal (*Agroforestry*), serta pemantauan intensif berkala, selaras dengan ketentuan Perpres No. 110/2025.",
        certTgl: "Tanggal Terbit: ", certMetode: "Metode Hitung: IPCC Sektor Energi & Transportasi", ttdJabatan: "Inisiator Ethnicitizen",
        pohonNama: "Adopsi & Perawatan Pohon Agroforestry", patroliNama: "Operasional Patroli Areal Pengelolaan Hutan Berbasis Masyarakat",
        btnCetak: "🖨️ Cetak PDF Sertifikat"
    },
    en: {
        title: "Calculate Your Carbon Footprint", subtitle: "Ethnicitizen Community Crowdfunding Platform — Together Protecting Our Forests",
        sec1: "1. Utility & Fuel Sector", labelNama: "Your Name / Group Name", placeholderNama: "e.g., Green Friend",
        labelListrik: "Monthly Electricity Consumption (kWh)", labelBbm: "Vehicle Fuel Consumption (Liters / Month)", labelSampah: "Organic Waste Production (Kg / Day)",
        sec2: "2. Travel & Transportation Sector", labelMotor: "Motorcycle Distance (Km / Month)", labelMobil: "Car Distance (Km / Month)",
        labelPesawat: "Air Travel Distance (Km / Month)", labelLaut: "Sea/Ferry Travel Distance (Km / Month)",
        sec3: "3. Carbon Offset Method", labelMetode: "Choose Your Contribution Program",
        optPohon: "Tree Adoption (Planting & Agroforestry - IDR 50,000 / unit)", optPatroli: "Forest Patrol (Community-Based Forest Management Area - IDR 35,000 / unit)",
        btnHitung: "Start Emission Analysis", hasilTitle: "Ecological Impact Analysis Results:", hasilEmisi: "Estimated Monthly Emissions:",
        hasilBeban: "Target Compensation Load:", btnWa: "Send Support Via WhatsApp Now", certTitle: "CERTIFICATE OF REFORESTATION",
        certSub: "Climate Sustainability Commitment Certificate awarded to:", certTxt1: "Has actively participated in balancing the daily greenhouse gas emissions impact of ",
        certTxt2: " kg CO₂e by funding the action program ", certTxt3: " for ", certTxt4: " units of action. This program is operated by local frontline communities to maintain natural forest cover, protect local food security (*Agroforestry*), and conduct regular intensive monitoring, in line with Indonesian Regulation Perpres No. 110/2025.",
        certTgl: "Date of Issue: ", certMetode: "Calculation Method: IPCC Energy & Transport Sector", ttdJabatan: "Ethnicitizen Initiator",
        pohonNama: "Agroforestry Tree Adoption & Care", patroliNama: "Forest Patrol Operations in Community-Based Forest Management Areas",
        btnCetak: "🖨️ Download PDF Certificate"
    }
};

let bahasaAktif = 'id';

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
    document.getElementById('btn-cetak').innerText = kamus[lang].btnCetak;
}

window.addEventListener('DOMContentLoaded', () => {
    let browserLang = navigator.language || navigator.userLanguage;
    browserLang = browserLang.substr(0, 2);
    gantiBahasa(browserLang);
});

function prosesHitungKarbon() {
    const namaUser = document.getElementById('nama').value || 'Citizen';
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
    const DAYA_SERAP_POHON_BULAN = 22 / 12; const BIAYA_POHON_ASUH = 50000; const BIAYA_PATROLI_HUTAN = 35000;

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

    document.getElementById('wpCertTitle').innerText = kamus[bahasaAktif].certTitle;
    document.getElementById('wpCertSub').innerText = kamus[bahasaAktif].certSub;
    document.getElementById('certNama').innerText = namaUser;

    document.getElementById('certTextContainer').innerHTML = kamus[bahasaAktif].certTxt1 + `<strong>${totalEmisi.toFixed(2)}</strong>` + kamus[bahasaAktif].certTxt2 + `<strong>${namaProgram}</strong>` + kamus[bahasaAktif].certTxt3 + `<strong>${targetJumlahUnit}</strong>` + kamus[bahasaAktif].certTxt4;

    document.getElementById('certTanggal').innerText = kamus[bahasaAktif].certTgl + new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('certMetode').innerText = kamus[bahasaAktif].certMetode;
    document.getElementById('wpTtdJabatan').innerText = kamus[bahasaAktif].ttdJabatan;
    document.getElementById('linkDonasi').innerText = kamus[bahasaAktif].btnWa;

    const randomHash = "0x" + Array.from({length: 8}, () => Math.floor(Math.random()*16).toString(16)).join('').toUpperCase();
    document.getElementById('hashId').innerText = randomHash;

    const pesanWA = `Platform: Ethnicitizen Crowdfunding\nName: ${namaUser}\nEmissions: ${totalEmisi.toFixed(2)} kg CO2e\nProgram: ${namaProgram} (${targetJumlahUnit} Unit)\nTotal Support: IDR ${totalBiayaDonasi.toLocaleString('id-ID')}\nLedger ID: ${randomHash}`;
    
    document.getElementById('linkDonasi').href = `https://whatsapp.com{encodeURIComponent(pesanWA)}`;

    document.getElementById('hasilBox').style.display = 'block';
    document.getElementById('sertifikatBox').style.display = 'block';
    document.getElementById('sertifikatBox').scrollIntoView({ behavior: 'smooth' });
}

function unduhPDF() {
    const elemenSertifikat = document.getElementById("sertifikatBox");
    const opsiCetak = {
        margin:       0.5,
        filename:     'Sertifikat-Hijau-Ethnicitizen.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useClowd: true, logging: false },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    html2pdf().set(opsiCetak).from(elemenSertifikat).save();
}
