let gridAreas = document.querySelectorAll('main>div>div');

for (let i = 0; i < gridAreas.length; i++) {
    const area = gridAreas[i];
    area.addEventListener('click', (e) => {
        if (area.classList.contains('selected')) {
            area.classList.remove('selected');
            return
        }
        gridAreas.forEach(gridArea => {
            gridArea.classList.remove('selected')
        });
        area.classList.add('selected');
    })
}