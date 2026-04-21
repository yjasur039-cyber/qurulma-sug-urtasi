<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rasmiy E-Xabarnoma Tizimi</title>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

    <style>
        :root {
            --primary-color: #1a73e8;
            --dark-blue: #0d47a1;
        }

        body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f4f7f9;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        .card {
            background: #ffffff;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 420px;
            transition: transform 0.3s ease;
        }

        h2 {
            text-align: center;
            color: #202124;
            font-size: 24px;
            margin-bottom: 25px;
            border-bottom: 2px solid #f1f3f4;
            padding-bottom: 15px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #5f6368;
            font-size: 14px;
        }

        input, select {
            width: 100%;
            padding: 14px;
            border: 2px solid #e8eaed;
            border-radius: 10px;
            font-size: 16px;
            transition: all 0.3s;
            box-sizing: border-box;
        }

        input:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 8px rgba(26, 115, 232, 0.2);
        }

        button {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, var(--primary-color), var(--dark-blue));
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            box-shadow: 0 4px 12px rgba(26, 115, 232, 0.3);
            transition: 0.3s;
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(26, 115, 232, 0.4);
        }

        button:disabled {
            background: #bdc1c6;
            cursor: not-allowed;
        }
    </style>
</head>
<body>

<div class="card">
    <h2>Sudga Chaqiruv</h2>
    
    <div class="form-group">
        <label>To'liq Ism va Familiya:</label>
        <input type="text" id="fullname" placeholder="Masalan: Alisher Navoiy" required>
    </div>
    
    <div class="form-group">
        <label>Telefon Raqami:</label>
        <input type="text" id="phone" value="+998" maxlength="13">
    </div>

    <div class="form-group">
        <label>Huquqbuzarlik Moddasi:</label>
        <select id="reason">
            <option value="91">91-modda (Chiqindi tashlash)</option>
            <option value="183">183-modda (Mayda bezorilik)</option>
            <option value="40">40-modda (Tuhmat)</option>
            <option value="202">202-modda (Yolg'on ma'lumot tarqatish)</option>
        </select>
    </div>
    
    <button id="mainBtn" onclick="processAndGenerate()">PDF YARATISH</button>
</div>

<script>
function processAndGenerate() {
    const nameInput = document.getElementById('fullname').value.trim();
    const phoneInput = document.getElementById('phone').value.trim();
    const modda = document.getElementById('reason').value;
    const btn = document.getElementById('mainBtn');

    // 1. ISM TEKSHIRUVI (Kamida 2 ta so'z, faqat harflar)
    const nameRegex = /^[a-zA-Z'‘’ʻ ]{5,50}$/;
    const nameParts = nameInput.split(' ').filter(p => p.length > 1);

    if (nameParts.length < 2 || !nameRegex.test(nameInput)) {
        alert("Xato: Iltimos, haqiqiy ism va familiyangizni kiriting!");
        return;
    }

    // 2. TELEFON TEKSHIRUVI (+998XXXXXXXXX)
    const phoneRegex = /^\+998\d{9}$/;
    if (!phoneRegex.test(phoneInput)) {
        alert("Xato: Telefon raqami formati noto'g'ri (+998XXXXXXXXX)!");
        return;
    }

    // Jarayonni boshlash
    btn.innerText = "Hujjat tayyorlanmoqda...";
    btn.disabled = true;

    // PDF Uchun HTML Content
    const pdfContent = `
        <div style="padding: 25mm; font-family: 'Times New Roman', serif; line-height: 1.5; background: white; color: black;">
            <div style="text-align: center; border-bottom: 2px solid black; padding-bottom: 10px; margin-bottom: 20px;">
                <h3 style="margin: 0; text-transform: uppercase;">O‘ZBEKISTON RESPUBLIKASI</h3>
                <p style="margin: 5px 0; font-size: 14px;">ICHKI ISHLAR VAZIRLIGI JAMOAT XAVFSIZLIGI DEPARTAMENTI</p>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 30px;">
                <span>№ ${Math.floor(Math.random() * 8999) + 1000}/CH-2024</span>
                <span>Sana: ${new Date().toLocaleDateString()} yil</span>
            </div>

            <h2 style="text-align: center; text-decoration: underline; margin-bottom: 40px;">RASMIY CHAQIRUV QOG‘OZI</h2>
            
            <p><b>KIMGA:</b> ${nameInput.toUpperCase()}</p>
            <p><b>TEL:</b> ${phoneInput}</p>
            
            <p style="text-indent: 50px; text-align: justify; margin-top: 30px;">
                Sizga shuni ma’lum qilamizki, aniqlangan huquqbuzarlik holati yuzasidan O‘zbekiston Respublikasining 
                <b>Ma’muriy javobgarlik to‘g‘risidagi kodeksining ${modda}-moddasi</b> 
                talablarini buzganingiz sababli Sizga nisbatan ma'muriy ish qo'zg'atildi.
            </p>

            <p style="text-indent: 50px; text-align: justify;">
                Ushbu holatga aniqlik kiritish va tushuntirish berish uchun zudlik bilan hududiy profilaktika inspektori 
                huzuriga shaxsingizni tasdiqlovchi hujjat bilan kelishingiz shart. 
            </p>

            <div style="margin-top: 60px; display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                    <p style="margin-bottom: 40px;"><b>Mas'ul xodim:</b> _________________</p>
                    <p style="font-size: 14px;">(Kapitan A. Shermatov)</p>
                </div>
                <div style="border: 3px double #333; border-radius: 50%; width: 110px; height: 110px; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 10px; font-weight: bold;">
                    MUHR UCHUN<br>JOY
                </div>
            </div>

            <div style="margin-top: 80px; text-align: center; font-size: 12px; color: #444;">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=VERIFY-CERT-${Math.random()}" alt="QR">
                <p>Hujjatning haqiqiyligini ushbu QR-kod orqali tekshiring.</p>
            </div>
        </div>
    `;

    const options = {
        margin: 0,
        filename: `Chaqiruv_${nameInput.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(pdfContent).set(options).save().then(() => {
        btn.innerText = "PDF YARATISH";
        btn.disabled = false;
        alert("Hujjat muvaffaqiyatli yuklandi!");
    });
}
</script>

</body>
</html>
