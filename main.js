const input = document.getElementById('input');
const buttonEncriptar = document.getElementById('button-encriptar');
const buttonDesencriptar = document.getElementById('button-desencriptar');
const imagePerson = document.getElementById('img-person');
const title = document.getElementById('title');
const text = document.getElementById('text');
const buttonCopiar = document.getElementById('button-copiar');
const result = document.getElementById('result');

const encryptionRules = [
	{ letter: 'e', replacement: 'enter' },
	{ letter: 'i', replacement: 'imes' },
	{ letter: 'a', replacement: 'ai' },
	{ letter: 'o', replacement: 'ober' },
	{ letter: 'u', replacement: 'ufat' },
];

function applyRules(text, rules) {
	return rules.reduce(
		(acc, rule) => acc.replaceAll(rule.letter, rule.replacement),
		text.toLowerCase()
	);
}

function encriptar() {
	updateDisplay(applyRules(input.value, encryptionRules));
}

function desencriptar() {
	const decryptionRules = encryptionRules.map(({ letter, replacement }) => ({
		letter: replacement,
		replacement: letter,
	}));
	updateDisplay(applyRules(input.value, decryptionRules));
}

function updateDisplay(transformedText) {
	imagePerson.hidden = true;
	title.hidden = true;
	text.hidden = true;
	buttonCopiar.style.display = 'block';
	result.innerText = transformedText;
	result.hidden = false;
	input.value = '';
}

function copy() {
	navigator.clipboard.writeText(result.innerText);
	input.value = '';
}

buttonEncriptar.addEventListener('click', encriptar);
buttonDesencriptar.addEventListener('click', desencriptar);
buttonCopiar.addEventListener('click', copiar);
