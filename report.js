// reportModule.js
function laporanPenghasilan(username, key) {
  console.log("\n=== LAPORAN PENGHASILAN ===");
  console.log("User:", username);
  console.log("Key:", key);
  console.log("Total Penghasilan: Rp 15.000.000");
  console.log("============================");
}

module.exports = { laporanPenghasilan };
