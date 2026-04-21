<div class="input-container">
    <h2>Ma'muriy Bayonnoma Shakllantirish</h2>
    <input type="text" id="fullname" placeholder="F.I.SH (Masalan: Aliyev Vali)">
    <input type="text" id="address" placeholder="Yashash manzili">
    <select id="offense">
        <option value="91-moddasi">91-modda (Chiqindilarni tashlash)</option>
        <option value="161-moddasi">161-modda (Obodonlashtirish qoidalarini buzish)</option>
    </select>
    <label for="visit_time">Chaqirilish vaqti:</label>
    <input type="datetime-local" id="visit_time">
    <button onclick="generatePDF()">Hujjatni Generatsiya Qilish (PDF)</button>
</div>

function generatePDF() {
    const name = document.getElementById('fullname').value;
    const address = document.getElementById('address').value;
    const timeInput = document.getElementById('visit_time').value;
    const offense = document.getElementById('offense').value;

    // Sanani chiroyli formatga keltirish
    const date = new Date(timeInput);
    const formattedTime = date.toLocaleString('uz-UZ', { 
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' 
    });

    const content = `
        <div id="pdf-template" style="padding: 25mm; font-family: 'Times New Roman', serif; line-height: 1.5;">
            <div style="text-align: center; font-weight: bold; text-transform: uppercase; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px;">
                O‘ZBEKISTON RESPUBLIKASI<br>
                ICHKI ISHLAR VAZIRLIGI JAMOAT XAVFSIZLIGI DEPARTAMENTI
            </div>
            
            <div style="text-align: right; margin-bottom: 30px;">
                <b>№ ${Math.floor(Math.random() * 1000)}/CH-sonli Chaqiruv</b><br>
                ${new Date().toLocaleDateString()} yil
            </div>

            <h2 style="text-align: center; text-decoration: underline;">RASMIY CHAQIRUV QOG‘OZI</h2>
            
            <p style="margin-top: 30px;"><b>Fuqaro:</b> ${name.toUpperCase()}</p>
            <p><b>Yashash manzili:</b> ${address}</p>
            
            <p style="text-indent: 50px; text-align: justify;">
                Sizga shuni ma’lum qilamizki, aniqlangan huquqbuzarlik holatlari yuzasidan, O‘zbekiston Respublikasi Ma’muriy javobgarlik to‘g‘risidagi kodeksning <b>${offense}</b> (Atrof-muhitni muhofaza qilish va obodonlashtirish qoidalarini buzish) bo'yicha ma'muriy ish qo'zg'atilgan.
            </p>
            
            <p style="text-indent: 50px; text-align: justify;">
                Ushbu holat yuzasidan tushuntirish berish va tegishli bayonnomani imzolash maqsadida, Siz <b>${formattedTime}</b>da hududiy profilaktika inspektori xonasiga shaxsingizni tasdiqlovchi hujjat (pasport/ID-karta) bilan kelishingiz shart.
            </p>
            
            <p style="color: #333; font-style: italic; margin-top: 20px; font-size: 13px;">
                <b>Eslatma:</b> MJtKning 194-moddasiga muvofiq, ichki ishlar organlari xodimining qonuniy talablarini bajarmaslik qonuniy javobgarlikka sabab bo'ladi.
            </p>

            <div style="margin-top: 60px; display: flex; justify-content: space-between;">
                <div>
                    <p><b>Mas'ul xodim:</b> _________________</p>
                    <p style="font-size: 12px; margin-left: 80px;">(imzo, F.I.SH)</p>
                </div>
                <div style="border: 2px double #000; border-radius: 50%; width: 100px; height: 100px; text-align: center; display: flex; align-items: center; justify-content: center; font-size: 10px; opacity: 0.6;">
                    MUHR UCHUN<br>JOY
                </div>
            </div>
            
            <div style="margin-top: 40px; text-align: center;">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://iiv.uz/oz/check/${Math.random()}" alt="QR-Code">
                <p style="font-size: 10px;">Hujjatning haqiqiyligini tekshirish uchun QR-kodni skanerlang</p>
            </div>
        </div>
    `;

    const opt = {
        margin: 0,
        filename: `Chaqiruv_${name.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3, letterRendering: true, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(content).set(opt).save();
}

