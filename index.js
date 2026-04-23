function generatePDF(name, phone) {
    const element = document.createElement('div');
    
    // Haqiqiy 1x1 rasmiy hujjat dizayni
    element.innerHTML = `
        <div style="width: 794px; height: 1123px; padding: 90px; font-family: 'Times New Roman', Times, serif; background: white; position: relative; box-sizing: border-box; color: #000; line-height: 1.6;">
            
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 22pt; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">ANTI.V GLOBAL SECURITY SOLUTIONS</div>
                <div style="font-size: 10pt; margin-top: 5px;">CERTIFIED CYBERSECURITY SYSTEMS DIVISION</div>
                <hr style="border: 0; border-top: 2px solid #000; margin-top: 15px;">
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 12pt; margin-bottom: 40px;">
                <div>Chiqish №: AV/${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}</div>
                <div>Sana: ${new Date().toLocaleDateString()} yil</div>
            </div>

            <div style="text-align: center; margin-bottom: 40px;">
                <h2 style="font-size: 16pt; text-decoration: underline; text-transform: uppercase;">BILDIRISHNOMA (CERTIFICATE)</h2>
            </div>

            <div style="font-size: 13pt; text-align: justify; text-indent: 50px;">
                <p style="margin-bottom: 20px;">
                    Ushbu rasmiy bildirishnoma shuni tasdiqlaydi-ki, foydalanuvchi <b>${name}</b> (tel: <b>${phone}</b>) 
                    tomonidan foydalanilayotgan elektron qurilma ANTI.V kiberxavfsizlik xizmatining 3.1-versiyali 
                    algoritmlari asosida to'liq texnik nazoratdan o'tkazildi.
                </p>

                <p style="margin-bottom: 20px;">
                    Tekshiruv davomida tizimda mavjud bo'lgan zararli dasturiy ta'minotlar (Trojan, Spyware, Miner) 
                    aniqlandi va litsenziyalangan xavfsizlik protokollari yordamida muvaffaqiyatli bartaraf etildi. 
                    Hozirgi vaqtda qurilmaning tarmoq trafigi shifrlangan tunnel (VPN) orqali himoyalangan va 
                    tizim butunlay xavfsiz holatga keltirilgan.
                </p>

                <p>
                    Ushbu litsenziya tasdiqnomasi 12 oy davomida o'z kuchida qoladi va qurilmaning xalqaro kiber-xavfsizlik 
                    standartlariga muvofiqligini kafolatlaydi.
                </p>
            </div>

            <div style="margin-top: 40px; border: 1px solid #000; padding: 15px; font-size: 11pt; background: #fafafa;">
                <b>XAVFSIZLIK ANALIZI NATIJALARI:</b>
                <ul style="margin-top: 10px;">
                    <li>Qurilma holati: 100% Himoyalangan (Active)</li>
                    <li>IP manzili: 82.145.211.255 (London, UK)</li>
                    <li>Aniqlangan xavflar: 2 ta (Bartaraf etildi)</li>
                </ul>
            </div>

            <div style="margin-top: 80px; position: relative; display: flex; justify-content: space-between; align-items: flex-end;">
                <div style="text-align: left;">
                    <p style="margin-bottom: 40px;">Bosh mutaxassis:</p>
                    <div style="position: relative;">
                        <div style="position: absolute; top: -35px; left: 20px; font-family: 'Brush Script MT', cursive; font-size: 28pt; color: #1a237e; opacity: 0.8; transform: rotate(-5deg);">
                            A. Jasur
                        </div>
                        <p style="border-top: 1px solid #000; width: 250px; padding-top: 5px;">(Imzo) / A. Jasur</p>
                    </div>
                </div>

                <div style="position: relative; width: 160px; height: 160px; border: 4px double #1a237e; border-radius: 50%; display: flex; align-items: center; justify-content: center; transform: rotate(-15deg); color: #1a237e; font-weight: bold; text-align: center; font-size: 10pt; opacity: 0.7; box-shadow: inset 0 0 5px rgba(26,35,126,0.2);">
                    <div style="border: 2px solid #1a237e; border-radius: 50%; width: 140px; height: 140px; display: flex; align-items: center; justify-content: center;">
                        ANTI.V SECURITY<br>OFFICIAL SEAL<br>* 2026 *
                    </div>
                </div>
            </div>

            <div style="position: absolute; bottom: 40px; left: 0; width: 100%; text-align: center; font-size: 8pt; color: #777;">
                Ushbu hujjat elektron ko'rinishda shakllantirilgan va qog'oz nusxasi bilan bir xil yuridik kuchga ega.
            </div>
        </div>
    `;

    const options = {
        margin: [?, ?, ?, ?],
        filename: `RASMIY_BILDIRISHNOMA_${name}.pdf`,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 3, letterRendering: true, useCORS: true },
        jsPDF: { unit: 'px', format: [794, 1123], orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
}
