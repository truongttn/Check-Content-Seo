function Count(field, count) {
	count.value = field.value.length;
}

function CheckContent() {
	let key = document.getElementById("txtdanhsach");
	var array = key.value.split("\n");
	let content = document.getElementById("txtcontent").value;
	var arr = [];
	for (var i = 0; i < array.length; i++) {
		let tukhoa = array[i].trim();
		let key2 = content.split(tukhoa).length - 1;
		if (key2 <= 0) {
			arr.push(tukhoa);
		}
	}
	for (var j = 0; j < arr.length; j++) {
		document.getElementById("txtresult").value = arr.join("\n");
	}
}


function convertLinks() {
	let inputText = document.getElementById("linkin").value;
	let links = inputText.split("\n");
	let outputText = links.map(link => link.trim() ? `<a href="${link.trim()}">${link.trim()}</a>` : '').join("\n");
	document.getElementById("linkout").value = outputText;
}
