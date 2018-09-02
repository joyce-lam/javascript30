const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".tasks");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
	console.log("add item");
	e.preventDefault();
	
	const text = (this.querySelector("[name=item]")).value;
	
	const item = {
		text,
		done: false
	};
	console.log(item);

	items.push(item);
	// console.table(items);
	populateList(items, itemsList);
	
	localStorage.setItem("items", JSON.stringify(items));

	this.reset();
}

function populateList(tasks = [], tasksList) {
	tasksList.innerHTML = tasks.map((task, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${task.done ? "checked" : " "} />
          <label for="item${i}">${task.text}</label>
        </li>
      `;
    }).join('');
}

function toggleDone(e) {
	// console.log(e);
	if (!e.target.matches("input")) {
		return;
	}
	const idx = e.target.dataset.index;
	items[idx].done = !items[idx].done;
	localStorage.setItem("items", JSON.stringify(items));
	populateList(items,itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items,itemsList);


