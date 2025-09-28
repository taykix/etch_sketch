const container = document.createElement("div")
container.className = "grid-container"

const btn = document.createElement("button");
btn.className = "reset-btn";
btn.textContent = "Change #squares"
document.querySelector("body").appendChild(btn);
document.querySelector("body").appendChild(container);
console.log(container);

container.style.height = "960px";
container.style.width = "960px";


function drawGrid(size) {
	for(let j = 0; j < size; j++) {
		const gridRow = document.createElement("div");
		for (let i = 0; i < size; i++) {
			const gridItem = document.createElement("div");
			gridItem.className = "grid-item";
			//gridItem.textContent = "";
			gridItem.style.height = `${960 / size}px`;
			gridItem.style.width = `${960 / size}px`;

			gridRow.appendChild(gridItem);
		}
		container.appendChild(gridRow);
	}
	
	document.querySelectorAll(".grid-item").forEach(el => el.addEventListener('mouseenter', entering));
	//document.querySelectorAll(".grid-item").forEach(el => el.addEventListener('mouseleave', leaving));
}


btn.addEventListener("click", () => {
	let num;
	while (true) {
		num = prompt("Give me Grid Size n! (limited to 100)");
		if (!isNaN(num) && num >= 0 && num <= 100) {
			break;
		}
	}
	document.querySelectorAll(".grid-item").forEach(el => el.remove());
	drawGrid(num);
});

function entering(event) {
	event.currentTarget.style.backgroundColor = 'black';
	console.log("mouse enter");
}
function leaving(event) {
	event.currentTarget.style.backgroundColor = 'white';
	console.log("mouse leave");
}

drawGrid(16);