// =================================================================
// BAGIAN B: MESIN UTAMA PERHITUNGAN EMISI (TEMPEL TEPAT DI BAWAHNYA)
// =================================================================

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

    const FAKTOR_LISTRIK_JAWA = 0.87; 
    const FAKTOR_LISTRIK_LUAR = 1.11; 
    const FAKTOR_BBM = 2.33; 
    const FAKTOR_SAMPAH_ORGANIK = 0.41; 
    const FAKTOR_MOTOR = 0.05; 
    const FAKTOR_MOBIL = 0.18; 
    const FAKTOR_PESAWAT = 0.12; 
    const FAKTOR_LAUT = 0.04;    
    const DAYA_SERAP_POHON_BULAN = 22 / 12; 
    const BIAYA_POHON_ASUH = 50000; 
    const BIAYA_PATROLI_HUTAN = 35000;

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
