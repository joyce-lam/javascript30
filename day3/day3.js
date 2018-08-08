const inputs = document.querySelectorAll(".controls input");
// console.log(inputs);

function handleChange() {
	// console.log(this.value);
	const suffix = this.dataset.sizing || "";
	// console.log(suffix);
	// console.log(this.name);
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => {
	input.addEventListener("change", handleChange);
});

inputs.forEach(input => {
	input.addEventListener("mousemove", handleChange);
});