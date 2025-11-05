// Import modul login dan laporan
const { login, generateKey } = require('./loginmodule');
const { laporanPenghasilan } = require('./report');

// Jalankan proses login
login("admin", (err, username) => {
  if (err) {
    console.log("Login gagal:", err);
  } else {
    // Setelah login sukses, buat key menggunakan Promise
    generateKey(username)
      .then((key) => {
        console.log("Key berhasil dibuat:", key);
        // Jalankan laporan setelah key berhasil dibuat
        laporanPenghasilan(username, key);
      })
      .catch((error) => {

        console.log("Terjadi kesalahan saat membuat key:", error);
      });
  }
});