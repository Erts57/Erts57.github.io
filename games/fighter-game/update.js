setInterval(() => {
    update()
}, 50);

function update() {
    placeholder.style.visibility = 'hidden';

    document.getElementById('playerHealth').value = mainPlayer.health;
    if (enemy == null) {
        document.getElementById('enemyHealth').value = 0;
        document.getElementById('enemyHealth').style.background = 'red';
        document.getElementById('enemyHealth').style.opacity = '0';

        placeholder.style.display = 'initial';
    } else if (enemy != null) {
        document.getElementById('enemyHealth').style.opacity = '100';
        document.getElementById('enemyHealth').value = enemy.health;
        document.getElementById('enemyHealth').max = enemy.max;
        var eh = enemy.health*100 / enemy.max;
        document.getElementById('enemyHealth').style.background = 'linear-gradient(to right, limegreen 0%, limegreen '+eh+'%, red '+eh+'%, red 100%)';

        placeholder.style.display = 'none';
    }
    document.getElementById('playerHealth').max = mainPlayer.max;
    var ph = mainPlayer.health*100 / mainPlayer.max;
    document.getElementById('playerHealth').style.background = 'linear-gradient(to right, limegreen 0%, limegreen '+ph+'%, red '+ph+'%, red 100%)';
}
