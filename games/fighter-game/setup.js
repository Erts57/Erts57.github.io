const canvas = document.getElementById('playarea');
let currentLevel = 1;
let canAttack = false;
let mainPlayer = {
    sprite: canvas.appendChild(document.createElement('button')),
    img: 'Images/player',
    health: 50,
    max: 50,
    damage: 1,
}

mainPlayer.sprite.style.minWidth = '200px';
mainPlayer.sprite.style.minHeight = '200px';
mainPlayer.sprite.style.backgroundColor = 'transparent';
mainPlayer.sprite.style.border = 'none';
mainPlayer.sprite.innerHTML = `<img id='playerImg' src='${mainPlayer.img}.png' alt='refresh!'>`;

var placeholder = document.createElement('img');
placeholder.id = 'place-holder';
placeholder.src = 'Images/player.png'
placeholder.style.display = 'none';
placeholder.style.visibility = 'hidden';
document.getElementById('playarea').appendChild(placeholder);

function createEnemy(level, health, src) {
    placeholder.style.display = 'none';

    let e = document.createElement('button');
    e.style.minWidth = '200px';
    e.style.minHeight = '200px';
    e.style.backgroundColor = 'transparent';
    e.style.border = 'none';
    canvas.appendChild(e);
    e.innerHTML = `<img id='enemyImg' src='${src == '' ? currentLevel : src}.png' alt='refresh!'>`;
    
    return {
        sprite: e,
        healthbar: document.getElementById('enemyHealth'),
        health: health,
        max: health,
        level: level
    }
}