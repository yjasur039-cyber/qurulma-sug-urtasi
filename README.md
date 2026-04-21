<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma'muriy Bayonnoma</title>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            text-align: center;
            width: 350px;
        }
        input {
            width: 100%;
            padding: 12px;
            margin: 20px 0;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 16px;
        }
        button {
            background-color: #1a73e8;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
            width: 100%;
        }
        button:hover {
            background-color: #1557b0;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Sudga Chaqiruv</h2>
    <p>Fuqaro ism-sharifini kiriting:</p>
    <input type="text" id="fullname" placeholder="F.I.SH">
    <button onclick="generatePDF()">PDF YARATISH</button>
</div>

<script>
function generatePDF() {
    const name = document.getElementById('fullname').value;
    
    if(!name) {
        alert("Ism-sharifni kiriting!");
        return;
    }

    // PDF kontenti (Manzil va modda matn ichiga qotirilgan)
    const content = `
        <div style="padding: 25mm; font-family: 'Times New Roman', serif; line-height: 1.6;">
            <div style="text-align: center; font-weight: bold; text-transform: uppercase; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 25px;">
                O‘ZBEKISTON RESPUBLIKASI<br>
                ICHKI ISHLAR VAZIRLIGI JAMOAT XAVFSIZLIGI DEPARTAMENTI
            </div>

            <div style="text-align: right; margin-bottom: 30px;">
                <b>№ ${Math.floor(Math.random() * 5000) + 1000}/CH-sonli Chaqiruv</b><br>
                ${new Date().toLocaleDateString()} yil
            </div>

            <h2 style="text-align: center; text-decoration: underline; margin-bottom: 35px;">RASMIY CHAQIRUV QOG‘OZI</h2>
            
            <p><b>Fuqaro:</b> ${name.toUpperCase()}</p>
            
            <p style="text-indent: 50px; text-align: justify; margin-top: 30px;">
                Sizga shuni ma’lum qilamizki, aniqlangan huquqbuzarlik holati yuzasidan O‘zbekiston Respublikasining 
                <b>Ma’muriy javobgarlik to‘g‘risidagi kodeksining 91-moddasi</b> (Maishiy chiqindilarni belgilanmagan joylarga tashlash) 
                bo'yicha Sizga nisbatan ma'muriy bayonnoma rasmiylashtirildi.
            </p>
            
            <p style="text-indent: 50px; text-align: justify;">
                Ushbu qoidabuzarlik yuzasidan tushuntirish berish uchun zudlik bilan hududiy profilaktika inspektori 
                huzuriga shaxsingizni tasdiqlovchi hujjat bilan kelishingiz talab etiladi.
            </p>
            
            <div style="margin-top: 25px; padding: 10px; border: 1px solid #000; font-size: 13px;">
                <b>DIQQAT:</b> MJtKning 194-moddasiga muvofiq, ichki ishlar organlari xodimining qonuniy talablarini 
                bajarmaslik og'irroq ma'muriy jazoga sabab bo'ladi.
            </div>

            <div style="margin-top: 70px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <p><b>Mas'ul xodim:</b> _________________</p>
                    <p style="font-size: 12px; margin-left: 80px;">(kapitan A. Shermatov)</p>
                </div>
                <div style="border: 2px double #000; border-radius: 50%; width: 100px; height: 100px; text-align: center; display: flex; align-items: center; justify-content: center; font-size: 10px;">
                    MUHR UCHUN<br>JOY
                </div>
            </div>
            
            <div style="margin-top: 40px; text-align: center;">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=85x85&data=https://iiv.uz/id${Math.random()}" alt="QR">
                <p style="font-size: 10px; margin-top: 5px;">Hujjatning haqiqiyligini tekshirish uchun skanerlang</p>
            </div>
        </div>
    `;

    const opt = {
        margin: 0,
        filename: 'Chaqiruv_Qogozi.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(content).set(opt).save();
}
</script>

</body>
</html>
