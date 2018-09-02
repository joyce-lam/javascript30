const bands = ["Maroon 5", "Coldplay", "At 17", "Mayday", "Twins"];

function strip(bandName) {
	return bandName.replace(/^(a|the|an)/i, "").trim();
}

const sortedBands = bands.sort((a, b) => 
	strip(a) > strip(b) ? 1 : -1
);

console.log(sortedBands);

document.querySelector("#bands").innerHTML = sortedBands.map(band => `<li>${band}</li>`).join("");