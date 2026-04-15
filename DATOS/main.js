onload = () => {
    document.body.classList.remove("container");

    // Generar estrellas
    const starsDiv = document.createElement('div');
    starsDiv.id = 'stars-flores';
    document.body.insertBefore(starsDiv, document.body.firstChild);

    for (let i = 0; i < 110; i++) {
        const star = document.createElement('div');
        star.className = 'star-f';
        const size = Math.random() * 2.5 + 0.5;
        star.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${size}px;
            height: ${size}px;
            --d: ${(Math.random() * 3 + 2).toFixed(1)}s;
            --delay: ${(Math.random() * 5).toFixed(1)}s;
        `;
        starsDiv.appendChild(star);
    }

    // Corazones flotantes continuos
    const heartsContainer = document.getElementById('hearts-container');
    const heartEmojis = ['🌹', '💕', '💎', '🐻', '🍫', '🎀', '💖', '✨', '💐', '⭐'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        const duration = (Math.random() * 4 + 5).toFixed(1);
        const delay    = (Math.random() * 2).toFixed(1);
        const rot      = (Math.random() * 60 - 30).toFixed(0) + 'deg';
        heart.style.cssText = `
            left: ${Math.random() * 100}%;
            font-size: ${(Math.random() * 1.4 + 0.9).toFixed(1)}rem;
            --duration: ${duration}s;
            --delay: ${delay}s;
            --rot: ${rot};
        `;
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), (parseFloat(duration) + parseFloat(delay) + 0.5) * 1000);
    }

    // Ráfaga inicial
    for (let i = 0; i < 6; i++) {
        setTimeout(createHeart, i * 250);
    }
    // Corazones continuos
    setInterval(createHeart, 900);

    // Mostrar tarjeta de mensaje después de 6 segundos
    setTimeout(() => {
        const card = document.getElementById('message-card');
        if (card) card.classList.add('visible');
    }, 6000);
};
