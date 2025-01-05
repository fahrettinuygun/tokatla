let slapCount = 0;
const character = document.getElementById('character');
const counter = document.getElementById('counter');
const slapSound = document.getElementById('slap-sound');
const bigSlapSound = document.getElementById('big-slap-sound');
const explosion = document.getElementById('explosion');
const boom = document.getElementById('boom');

character.addEventListener('click', (event) => {
    slapCount++;
    counter.textContent = `Tokat Sayısı: ${slapCount}`;
    slapSound.play();

    boom.style.top = `${event.clientY - 50}px`;
    boom.style.left = `${event.clientX - 50}px`;
    boom.classList.add('boom');
    boom.style.display = 'block';
    
    // // İmleç animasyonu
    // document.body.style.cursor = 'url("./public/img/boom.png"), pointer';
    // setTimeout(() => {
    //     document.body.style.cursor = 'url("./public/img/slap.png"), pointer';
    // }, 200); // 200ms sonra orijinal imlece dön

    // Titreme animasyonu
    character.classList.add('shake');
    setTimeout(() => {
        character.classList.remove('shake');
        boom.classList.remove('boom');
        boom.style.display = 'none';
    }, 500); // 500ms sonra titreme animasyonunu kaldır
});

character.addEventListener('mouseover', () => {
    document.body.style.cursor = 'url("./public/img/slap.png"), pointer';
});

// İmleç karakterin üzerinden ayrıldığında varsayılan imlece dönsün
character.addEventListener('mouseout', () => {
    document.body.style.cursor = 'auto';
});

// Sağ tıklama olayını dinle
character.addEventListener('contextmenu', (event) => {
    slapCount += 5;
    counter.textContent = `Tokat Sayısı: ${slapCount}`;
    event.preventDefault(); // Sağ tıklama menüsünü engelle
    bigSlapSound.play();

    explosion.style.top = `${event.clientY - 250}px`;
    explosion.style.left = `${event.clientX - 250}px`;
    explosion.classList.add('explode');
    explosion.style.display = 'block';

    // // İmleç animasyonu
    // document.body.style.cursor = 'url("./public/img/boom.png"), pointer';
    // setTimeout(() => {
    //     document.body.style.cursor = 'url("./public/img/slap.png"), pointer';
    // }, 200); // 200ms sonra orijinal imlece dön

    // Büyük titreme animasyonu
    character.classList.add('big-shake');
    setTimeout(() => {
        character.classList.remove('big-shake');
        explosion.classList.remove('explode');
        explosion.style.display = 'none';
    }, 500); // 500ms sonra büyük titreme animasyonunu kaldır
});