var enemy = createEnemy(currentLevel, 10, 'Images/player');
document.getElementById('attackButton').addEventListener('click', attack());
function attack() {
    if (enemy == null) {
        enemy = createEnemy(currentLevel, 10, 'Images/player');
        document.getElementById('attackButton').innerHTML = 'ATTACK';
        canAttack = false;
    }
    if (enemy.health != 0 && canAttack) {
        enemy.health -= mainPlayer.damage;
    }
    if (enemy.health < 1 && canAttack) {
        enemy.sprite.remove();
        placeholder.style.display = 'initial';
        currentLevel += 1;
        enemy = null;
        document.getElementById('attackButton').innerHTML = 'NEXT';
    }
    canAttack = true;
}