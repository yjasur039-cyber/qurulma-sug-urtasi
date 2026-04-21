<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Xabarnoma Professional Tizimi</title>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

    <style>
        :root {
            --primary: #1a73e8;
            --dark: #202124;
            --bg: #f8f9fa;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        .container {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 400px;
        }

        h2 { text-align: center; color: var(--dark); margin-bottom: 25px; font-weight: 700; }

        .input-group { margin-bottom: 15px; }
        
        label { display: block; margin-bottom: 5px; font-size: 14px; font-weight: 600; color: #555; }

        input, select {
            width: 100%;
            padding: 12px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 16px;
            box-sizing: border-box;
            transition: 0.3s;
        }

        input:focus { border-color: var(--primary); outline: none; }

        button {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #1a73e8, #0d47a1);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            box-shadow: 0 4px 15px rgba(26, 115, 232, 0.3);
        }

        button:active { transform: scale(0.98); }
        button:disabled { background: #bdc1c6; cursor: not-allowed; }
    </style>
</head>
<body>

<div class="container">
    <h2>Rasmiy Tizim</h2>
    
    <div class="input-group">
        <label>To'liq Ism va Familiya:</label>
        <input type="text" id="fullname" placeholder="Masalan: Alisher Navoiy" required>
    </div>
    
    <div class="input-group">
        <label>Telefon Raqami:</label>
        <input type="text" id="phone" value="+998" maxlength="13">
    </div>

    <div class="input-group">
        <label>Huquqbuzarlik Turi:</label>
        <select id="reason">
            <option value="91">91-modda (Chiqindi tashlash)</option>
            <option value="183">183-modda (Mayda bezorilik)</option>
            <option value="202">202-modda (Yolg'on ma'lumot tarqatish)</option>
            <option value="41">41-modda (Haqorat qilish)</option>
        </select>
    </div>
    
    <button id="submitBtn" onclick="generateOfficialPDF()">Hujjatni Yuklash</button>
</div>

<script>
function generateOfficialPDF() {
    const name = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const modda = document.getElementById('reason').value;
    const btn = document.getElementById('submitBtn');

    // 1. 100% TEKSHIRUV (Validatsiya)
    const nameRegex = /^[a-zA-Z'‘’ʻ ]{5,50}$/;
    const nameWords = name.split(' ').filter(w => w.length > 1);

    if (nameWords.length < 2 || !nameRegex.test(name)) {
        alert("XATO: Iltimos, haqiqiy ism va familiyangizni kiriting!");
        return;
    }

    const phoneRegex = /^\+998\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("XATO: Telefon raqami noto'g'ri (+998XXXXXXXXX)!");
        return;
    }

    btn.innerText = "PDF yaratilmoqda...";
    btn.disabled = true;

    // 2. PDF TARKIBI (Silliq imzo va muhr bilan)
    const element = `
        <div style="padding: 25mm; font-family: 'Times New Roman', serif; background: white; color: black; line-height: 1.6;">
            
            <div style="text-align: center; border-bottom: 2px solid black; padding-bottom: 10px; margin-bottom: 25px;">
                <h3 style="margin: 0; text-transform: uppercase; font-size: 18px;">O‘ZBEKISTON RESPUBLIKASI</h3>
                <p style="margin: 5px 0; font-size: 14px;">ICHKI ISHLAR VAZIRLIGI JAMOAT XAVFSIZLIGI DEPARTAMENTI</p>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 40px;">
                <span>№ ${Math.floor(Math.random() * 5000) + 1000}/CH-2024</span>
                <span>Sana: ${new Date().toLocaleDateString()} yil</span>
            </div>

            <h1 style="text-align: center; text-decoration: underline; margin-bottom: 50px; font-size: 24px;">RASMIY CHAQIRUV QOG‘OZI</h1>
            
            <p><b>FUQARO:</b> ${name.toUpperCase()}</p>
            <p><b>ALOQA:</b> ${phone}</p>
            
            <p style="text-indent: 50px; text-align: justify; margin-top: 35px;">
                Sizga shuni ma’lum qilamizki, aniqlangan huquqbuzarlik holati yuzasidan O‘zbekiston Respublikasining 
                <b>Ma’muriy javobgarlik to‘g‘risidagi kodeksining ${modda}-moddasi</b> 
                talablarini buzganingiz sababli Sizga nisbatan ma'muriy bayonnoma rasmiylashtirildi.
            </p>

            <p style="text-indent: 50px; text-align: justify;">
                Ushbu holat yuzasidan tushuntirish berish uchun zudlik bilan hududiy profilaktika inspektori 
                huzuriga shaxsingizni tasdiqlovchi hujjat (Pasport yoki ID-karta) bilan yetib kelishingiz shart. 
            </p>

            <div style="margin-top: 80px; display: flex; justify-content: space-between; align-items: flex-end; position: relative;">
                <div style="position: relative; width: 60%;">
                    <p style="margin-bottom: 40px;"><b>Mas'ul xodim:</b> _________________</p>
                    
                    <div style="position: absolute; left: 85px; top: -20px; transform: rotate(-5deg); pointer-events: none;">
                        <svg width="150" height="60" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 45C30 40 50 15 60 10C70 5 80 25 85 35C90 45 100 50 130 20M35 30L145 15" stroke="black" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
                            <path d="M40 35C45 35 50 45 45 50C40 55 35 45 40 35Z" fill="black" opacity="0.7"/>
                        </svg>
                    </div>
                    
                    <p style="font-size: 14px; margin-left: 85px;">(Kapitan A. Shermatov)</p>
                </div>
                
                <div style="border: 2px solid #003399; border-radius: 50%; width: 130px; height: 130px; position: relative; color: #003399; font-weight: bold; opacity: 0.85; transform: rotate(-8deg); background: rgba(0, 51, 153, 0.02);">
                    <svg viewBox="0 0 100 100" style="position: absolute; width: 100%; height: 100%;">
                        <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
                        <text font-size="6.5" font-family="Arial" fill="#003399">
                            <textPath href="#textPath">O‘ZBEKISTON RESPUBLIKASI IIV • JAMOAT XAVFSIZLIGI DEPARTAMENTI •</textPath>
                        </text>
                    </svg>
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 70%;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Coat_of_arms_of_Uzbekistan.svg/100px-Coat_of_arms_of_Uzbekistan.svg.png" style="width: 40px; filter: grayscale(1) brightness(0.5) sepia(1) hue-rotate(200deg) saturate(3);">
                        <p style="font-size: 7px; margin: 2px 0;">RASMIY HUJJATLAR</p>
                        <p style="font-size: 9px; margin: 0;">№ 77412</p>
                    </div>
                </div>
            </div>

            <div style="margin-top: 100px; text-align: center;">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=VERIFY-IIV-${Math.random()}" style="border: 1px solid #eee; padding: 5px;">
                <p style="font-size: 10px; color: #666; margin-top: 10px;">Hujjat elektron shaklda tasdiqlangan va qonuniy kuchga ega.</p>
            </div>
        </div>
    `;

    const opt = {
        margin: 0,
        filename: `Chaqiruv_${name.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save().then(() => {
        btn.innerText = "Hujjatni Yuklash";
        btn.disabled = false;
    });
}
</script>

</body>
</html>
