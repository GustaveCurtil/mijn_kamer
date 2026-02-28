let gridAreas = document.querySelectorAll('main>div>div');

for (let i = 0; i < gridAreas.length; i++) {
    const area = gridAreas[i];
    area.addEventListener('mousedown', (e) => {
        if (area.classList.contains('selected')) {
            area.style.backgroundImage = "none";
            area.classList.remove('selected');
            return
        }
        gridAreas.forEach(gridArea => {
            gridArea.style.backgroundImage = "none";
            gridArea.classList.remove('selected')
            gridArea.style.backgroundImage = "none";
        });
        area.classList.add('selected');
        area.style.backgroundImage = "url(explosion1.gif?v=" + Math.random() + ")"
    })
}