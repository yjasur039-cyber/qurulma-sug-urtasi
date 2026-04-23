/**
 * ANTI.V Security Suite - Professional PDF Generation Module
 * 1x1 Real-world Document Replication Engine
 */

function generatePDF(name, phone) {
    const element = document.createElement('div');
    
    // Tasodifiy unikal hujjat raqami va joriy sana
    const docID = `AV/SEC-${Math.floor(100000 + Math.random() * 900000)}`;
    const currentDate = new Date().toLocaleDateString('uz-UZ');

    // Haqiqiy rasmiy hujjat dizayni (HTML/CSS)
    element.innerHTML = `
        <div style="width: 794px; height: 1123px; padding: 90px 75px; font-family: 'Times New Roman', Times, serif; background: white; position: relative; box-sizing: border-box; color: #000; line-height: 1.6; border: 1px solid #ffffff;">
            
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 2.5px solid #000; padding-bottom: 15px;">
                <div style="font-size: 20pt; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px;">ANTI.V GLOBAL SECURITY SOLUTIONS</div>
                <div style="font-size: 10pt; margin-top: 5px; font-style: italic; color: #333;">Cybersecurity Compliance & Digital Forensic Division</div>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 12pt; margin-bottom: 45px; font-weight: bold;">
                <div>Hujjat №: ${docID}</div>
                <div>Sana: ${currentDate} yil</div>
            </div>

            <div style="text-align: center; margin-bottom: 40px;">
                <h2 style="font-size: 17pt; font-weight: bold; text-transform: uppercase; text-decoration: underline; margin: 0;">XAVFSIZLIK SERTIFIKATI VA RASMIY BILDIRISHNOMA</h2>
            </div>

            <div style="font-size: 13pt; text-align: justify; text-indent: 50px;">
                <p style="margin-bottom: 20px;">
                    Ushbu rasmiy bildirishnoma orqali ANTI.V Global xavfsizlik qo'mitasi shuni tasdiqlaydi-ki, foydalanuvchi <b>${name}</b> (ro'yxatga olingan telefon: <b>${phone}</b>) 
                    tomonidan foydalanilayotgan elektron hisoblash qurilmasi kompleks auditdan o'tkazildi.
                </p>

                <p style="margin-bottom: 20px;">
                    Audit natijasida tizimda aniqlangan barcha yashirin tahdidlar, jumladan, foydalanuvchi ma'lumotlarini o'g'irlashga yo'naltirilgan 
                    josuslik paketlari (Spyware) va ruxsatsiz "Unknown Miner" algoritmlari to'liq bartaraf etildi. Hozirgi kunda qurilmaning tarmoq trafigi 
                    <b>AES 256-bitli</b> shifrlash protokollari bilan himoyalangan va xalqaro kiberxavfsizlik standartlariga muvofiqlashtirilgan.
                </p>

                <p style="margin-bottom: 20px;">
                    Mazkur litsenziya tasdiqnomasi foydalanuvchining shaxsiy ma'lumotlari daxlsizligini kafolatlaydi hamda unga 12 oy muddatga 
                    ANTI.V Premium Security Suite xizmatidan foydalanish huquqini taqdim etadi.
                </p>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-top: 35px; font-size: 11pt; border: 1.5px solid #000;">
                <thead>
                    <tr style="background: #f0f0f0;">
                        <th style="border: 1.5px solid #000; padding: 12px; text-align: left;">Audit/Tekshiruv yo'nalishi</th>
                        <th style="border: 1.5px solid #000; padding: 12px; text-align: center;">Xulosa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid #000; padding: 10px;">Tizim yadrosining butunligi (Kernel Integrity)</td>
                        <td style="border: 1px solid #000; padding: 10px; text-align: center; font-weight: bold;">Muvaffaqiyatli</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 10px;">AI-asosli zararli paketlar skaneri</td>
                        <td style="border: 1px solid #000; padding: 10px; text-align: center; font-weight: bold;">Tozalangan</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 10px;">Shifrlangan tunnel (VPN) holati</td>
                        <td style="border: 1px solid #000; padding: 10px; text-align: center; font-weight: bold;">Faol</td>
                    </tr>
                </tbody>
            </table>

            <div style="margin-top: 100px; display: flex; justify-content: space-between; align-items: flex-end; position: relative;">
                <div style="position: relative; width: 350px;">
                    <p style="margin-bottom: 45px; font-weight: bold;">Kiberxavfsizlik departamenti boshlig'i:</p>
                    
                    <div style="position: absolute; top: 30px; left: 80px; font-family: 'Brush Script MT', cursive, sans-serif; font-size: 28pt; color: #1a237e; opacity: 0.8; transform: rotate(-5deg); z-index: 2;">
                        A.Jasur
                    </div>
                    
                    <div style="border-top: 1px solid #000; width: 100%; font-size: 12pt; padding-top: 5px;">
                        (Imzo) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A. Jasur
                    </div>
                </div>

                <div style="position: relative; width: 170px; height: 170px; border: 4px double #1a237e; border-radius: 50%; display: flex; align-items: center; justify-content: center; transform: rotate(-15deg); opacity: 0.85; z-index: 1;">
                    <div style="border: 1.5px solid #1a237e; border-radius: 50%; width: 150px; height: 150px; display: flex; align-items: center; justify-content: center; text-align: center; color: #1a237e; font-size: 9pt; font-weight: bold; border-style: dashed;">
                        <div style="padding: 10px;">
                            ANTI.V GLOBAL<br>
                            * OFFICIAL SEAL *<br>
                            CERTIFIED SECURITY<br>
                            2026
                        </div>
                    </div>
                </div>
            </div>

            <div style="position: absolute; bottom: 50px; left: 75px; right: 75px; text-align: center; font-size: 8.5pt; color: #555; border-top: 1px solid #ddd; padding-top: 15px;">
                Ushbu bildirishnoma elektron shaklda tasdiqlangan va uning haqiqiyligi ANTI.V bulutli tizimi orqali nazorat qilinadi. <br>
                Tekshiruv kodi: https://verify.antiv.security/id/${Math.random().toString(36).substr(2, 9).toUpperCase()}
            </div>
        </div>
    `;

    // html2pdf.js uchun maksimal sifat sozlamalari
    const options = {
        margin: [0, 0, 0, 0],
        filename: `ANTI-V_Rasmiy_Bildirishnoma_${name}.pdf`,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { 
            scale: 4, // 4 barobar yuqori aniqlik (Haqiqiy 1x1 uchun muhim)
            letterRendering: true, 
            useCORS: true,
            logging: false
        },
        jsPDF: { 
            unit: 'px', 
            format: [794, 1123], // A4 o'lchami pikselda
            orientation: 'portrait',
            compress: true
        }
    };

    // PDF ni yaratish va yuklash
    html2pdf().from(element).set(options).save();
}
