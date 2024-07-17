const body = document.querySelector("body");

const main = document.createElement("main");

console.log(buildSection1());

main.appendChild(buildSection1());
main.appendChild(buildSection2());
body.appendChild(main);

function buildSection1() {
	const section = document.createElement("section");
	const h2Section = document.createElement("h2");
	h2Section.textContent = "Titre 1";
	const pSection = document.createElement("p");
	pSection.textContent = "Paragraphe 1";
	section.appendChild(h2Section);
	section.appendChild(pSection);
	return section;
}
function buildSection2() {
	const section = document.createElement("section");
	const h2Section = document.createElement("h2");
	h2Section.textContent = "Titre 2";
	const pSection = document.createElement("p");
	pSection.textContent = "Paragraphe 2";
	section.appendChild(h2Section);
	section.appendChild(pSection);
	return section;
}

console.log(sayHello("Faysal"));

function sayHello(name) {
	return "Hello " + name;
}
