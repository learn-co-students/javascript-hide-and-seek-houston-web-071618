function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
	const ranked = document.querySelectorAll(".ranked-list li");
	for (let i = 0; i < (ranked.length); i++) {
		ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
		}
	}

function deepestChild() {
	const grand_node = document.getElementById("grand-node").querySelectorAll("div");
	let count = -1;
	for (element of grand_node) {
		count++;
	}
	return grand_node[count];
}