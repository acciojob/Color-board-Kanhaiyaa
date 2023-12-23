//your JS code here. If required.
document.addEventListener('DOMContentLoaded'), function () {
	const colorBoard=document.getElementById('color-board')

	for (let i = 0; i < 800; i++) {
		const box=document.createElement('div')
		box.classList.add('square')

		box.addEventListener('mouseover', function () {
			box.style.backgroungColor='#e74c3c'
		})

		box.addEventListener('mouseout' ,function () {
			setTimer(() => {
				bax.style.bacgroundColor='#ccc'
			},1000)
		})
		colorBoard.appendChild(box)
	}
}