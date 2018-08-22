const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

// console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
	// console.log(e);

	let included = false;
	if (e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			// console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) {
				included = !included;
				// console.log("checked/unchecked");
			}

			if (included) {
				checkbox.checked = true;
			}
		});
	}

	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

