// # 1. Will open clicking on link but will remain open 
//      if another link is clicked.
// Listen for clicks in the browser
// document.addEventListener('click', function (event) {
// 	// Only run if it has an accordian toggle
// 	if (!event.target.classList.contains('accordion-toggle')) return;

// 	// Get content area by hash.
// 	var content = document.querySelector(event.target.hash);
// 	// If no content area hash found then quit (return undefined).
// 	if (!content) return;
// 	console.log(content);

// 	// Show/ hide content. Hash add/ remove class='active'.
// 	content.classList.toggle('active');

// 	// Prevent default link behaviour.
// 	event.preventDefault();

// }, false);


// #2
// True accordion functionality.

// Listen for clicks in the browser
document.addEventListener('click', function (event) {
	// Only run if it has an accordian toggle
	if (!event.target.classList.contains('accordion-toggle')) return;

	// Get content area by hash.
	var content = document.querySelector(event.target.hash);
	// If no content area hash found then quit (return undefined).
	if (!content) return;
	console.log(content);

	// Prevent default link behaviour.
	event.preventDefault();
	console.log("preventDefault()");
	console.log("Stops here");
	// Check if our content area is already open.
	// a. If .active exists then remove it.
	if ( content.classList.contains('active') ) {
			content.classList.remove('active');
			return;
	}
	console.log("if...remove()");


	// Get all .accordion.
	var accordions = document.querySelectorAll('.accordion');
	console.log("accordions: ", accordions);
	for (var i = 0; i < accordions.length; i++) {
		accordions[i].classList.remove('active');
	}
	console.log("Add .active");
	content.classList.add('active');

}, false); 