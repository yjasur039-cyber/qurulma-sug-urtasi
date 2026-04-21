<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma'muriy Bayonnoma Generatori</title>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #eef2f3;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        .input-container {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 450px;
        }

        h2 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 22px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
            color: #666;
        }

        input, select {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-sizing: border-box;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 15px;
            background-color: #0056b3;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s;
        }

        button:hover {
            background-color: #004494;
        }

        .footer-note {
            text-align: center;
            font-size: 12px;
            color: #999;
            margin-top: 15px;
        }
    </style>
</head>
<body>

<div class="input-container">
    <h2>Ma'muriy Chaqiruv</h2>
    
    <label>Fuqaro F.I.SH:</label>
    <input type="text" id="fullname" placeholder="Masalan: Aliyev Vali">
    
    <label>Yashash manzili:</label>
    <input type="text" id="address" placeholder="Toshkent sh, Yunusobod tumani...">
    
    <label>Huquqbuzarlik turi:</label>
    <select id="offense">
        <option value="91-moddasi">91-modda (Chiqindilarni tashlash)</option>
        <option value="161-moddasi">161-modda (Obodonlashtirish qoidalarini buzish)</option>
    </select>
    
    <label>Chaqirilish vaqti:</label>
    <input type="datetime-local" id="visit_time">
    
    <button onclick="generatePDF()">PDF HUJJATNI YUKLASH</button>
    
    <div class="footer-note">Tizim orqali rasmiy shakldagi PDF yaratiladi.</div>
</div>

<script>
function generatePDF() {
    const name = document.getElementById('fullname').value;
    const address = document.getElementById('address').value;
    const timeInput = document.getElementById('visit_time').value;
    const offense = document.getElementById('offense').value;

    if(!name || !address || !timeInput) {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }

    // Sanani formatlash
    const dateObj = new Date(timeInput);
    const formattedDate = dateObj.toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' });
    const formattedTime = dateObj.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });

    // PDF Ichidagi kontent (Dizayn bilan)
    const content = `
        <div style="padding: 20mm; font-family: 'Times New Roman', serif; color: #000; line-height: 1.6;">
            <div style="text-align: center; font-weight: bold; text-transform: uppercase; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px;">
                O‘ZBEKISTON RESPUBLIKASI<br>
                ICHKI ISHLAR VAZIRLIGI JAMOAT XAVFSIZLIGI DEPARTAMENTI
            </div>
            
            <div style="text-align: right; margin-bottom: 30px;">
                <b>№ ${Math.floor(Math.random() * 9000) + 1000}/CH-sonli Chaqiruv</b><br>
                ${new Date().toLocaleDateString()} yil
            </div>

            <h2 style="text-align: center; text-decoration: underline; margin-bottom: 40px;">RASMIY CHAQIRUV QOG‘OZI</h2>
            
            <p><b>Fuqaro:</b> ${name.toUpperCase()}</p>
            <p><b>Yashash manzili:</b> ${address}</p>
            
            <p style="text-indent: 50px; text-align: justify; margin-top: 30px;">
                Sizga shuni ma’lum qilamizki, aniqlangan huquqbuzarlik holatlari yuzasidan, O‘zbekiston Respublikasi Ma’muriy javobgarlik to‘g‘risidagi kodeksning <b>${offense}</b> bo'yicha ma'muriy ish qo'zg'atilgan. 
                Xususan, belgilangan hududda <u>maishiy chiqindilarni belgilanmagan joyga tashlaganligingiz</u> holati qayd etilgan.
            </p>
            
            <p style="text-indent: 50px; text-align: justify;">
                Ushbu holatga aniqlik kiritish maqsadida, Siz <b>${formattedDate} yil soat ${formattedTime}</b>da hududiy profilaktika inspektori huzuriga shaxsingizni tasdiqlovchi hujjat bilan kelishingiz so'raladi.
            </p>
            
            <p style="color: #444; font-style: italic; margin-top: 25px; font-size: 13px; border-left: 3px solid #000; padding-left: 10px;">
                <b>ESLATMA:</b> O‘zbekiston Respublikasi MJtKning 194-moddasiga asosan, ichki ishlar organlari xodimining qonuniy talablarini bajarmaslik qonuniy javobgarlikka va jarimaga sabab bo'ladi.
            </p>

            <div style="margin-top: 80px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <p><b>Mas'ul xodim:</b> _________________</p>
                    <p style="font-size: 12px; margin-left: 80px;">(imzo, F.I.SH)</p>
                </div>
                <div style="border: 2px double #000; border-radius: 50%; width: 110px; height: 110px; text-align: center; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #555;">
                    MUHR UCHUN<br>JOY
                </div>
            </div>
            
            <div style="margin-top: 50px; text-align: center;">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=https://iiv.uz/check/id${Math.random()}" alt="QR">
                <p style="font-size: 10px; margin-top: 5px;">Hujjatning haqiqiyligini tekshirish uchun QR-kodni skanerlang</p>
            </div>
        </div>
    `;

    // PDF yaratish sozlamalari
    const opt = {
        margin: 0,
        filename: `Rasmiy_Chaqiruv_${name.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // PDF-ni yuklab olish
    html2pdf().from(content).set(opt).save();
}
</script>

</body>
</html>
