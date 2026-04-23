function generatePDF() {
    const element = document.createElement('div');
    element.innerHTML = `
        <div style="padding: 40px; border: 10px solid #1a73e8;">
            <h1 style="text-align: center;">RASMIY BILDIRISHNOMA</h1>
            <p>Hurmatli <b>${userData.name}</b>,</p>
            <p>Sizning qurilmangizda xavfsizlik qoidalari buzilganligi aniqlandi.</p>
            <p>Telefon raqamingiz: <b>${userData.phone}</b></p>
            <hr>
            <p style="font-size: 10px;">ID: ${Math.floor(Math.random() * 1000000)}</p>
        </div>
    `;
    html2pdf().from(element).save('Hujjat_Xabarnoma.pdf');
}
