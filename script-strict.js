var acc = document.getElementsByClassName("accordion");
var i;
console.log(acc);

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		// Toggle .active for button element w/ .accordion.
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		// 1. Non-Animated code for div .panel
		// if (panel.style.display === "block") {
		// 	panel.style.display = "none";
		// }
		// else {
		// 	panel.style.display = "block";
		// }

		// 2. Animated code for div .panel.
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		}
		else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
		console.log("panel.scrollHeight: ", panel.scrollHeight);
	});
}