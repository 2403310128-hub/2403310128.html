// loginModule.js
// Contoh penggunaan Callback dan Promise

// === CALLBACK ===
function login(username, callback) {
  console.log("Memeriksa username...");

  setTimeout(() => {
    if (username === "admin") {
      console.log("Login berhasil sebagai admin!");
      callback(null, username);
    } else {
      callback("Username salah!");
    }
  }, 1000);
}

// === PROMISE ===
function generateKey(username) {
  return new Promise((resolve, reject) => {
    console.log("Membuat key untuk:", username);

    setTimeout(() => {
      if (username === "admin") {
        const key = "KEY-" + Math.random().toString(36).substring(2, 10);
        resolve(key);
      } else {
        reject("Gagal membuat key!");
      }
    }, 1000);
  });
}

module.exports = { login, generateKey };
