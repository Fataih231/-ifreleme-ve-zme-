<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Metin Şifreleme</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
</head>
<body>
    <h2>Metin Şifreleme</h2>
    
    <label for="text">Şifrelemek istediğiniz metni girin:</label>
    <input type="text" id="text">
    
    <label for="key">Şifreleme Anahtarı:</label>
    <input type="text" id="key">
    
    <button onclick="encrypt()">Şifrele</button>
    <button onclick="decrypt()">Çöz</button>
    
    <h3>Sonuç:</h3>
    <p id="result"></p>

    <script>
        function encrypt() {
            let text = document.getElementById("text").value;
            let key = document.getElementById("key").value;
            if (!text || !key) {
                alert("Lütfen metin ve anahtar girin!");
                return;
            }
            let encrypted = CryptoJS.AES.encrypt(text, key).toString();
            document.getElementById("result").innerText = "🔒 Şifrelenmiş Metin: " + encrypted;
        }

        function decrypt() {
            let encryptedText = document.getElementById("text").value;
            let key = document.getElementById("key").value;
            if (!encryptedText || !key) {
                alert("Lütfen şifrelenmiş metin ve anahtar girin!");
                return;
            }
            let decrypted = CryptoJS.AES.decrypt(encryptedText, key);
            try {
                let originalText = decrypted.toString(CryptoJS.enc.Utf8);
                document.getElementById("result").innerText = "✅ Çözülen Metin: " + originalText;
            } catch (e) {
                alert("❌ Hatalı anahtar veya metin!");
            }
        }
    </script>
</body>
</html>