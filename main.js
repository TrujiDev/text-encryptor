document.getElementById('encrypt-btn').addEventListener('click', function () {
	const inputText = document.getElementById('input-text').value;
	const encryptedText = encrypt(inputText);
	displayResult(encryptedText);
});

document.getElementById('decrypt-btn').addEventListener('click', function () {
	const inputText = document.getElementById('input-text').value;
	const decryptedText = decrypt(inputText);
	displayResult(decryptedText);
});

document.getElementById('copy-btn').addEventListener('click', function () {
	const outputText = document.getElementById('output-text');
	outputText.select();
	document.execCommand('copy');
});

function encrypt(text) {
	return text
		.replace(/e/g, 'enter')
		.replace(/i/g, 'imes')
		.replace(/a/g, 'ai')
		.replace(/o/g, 'ober')
		.replace(/u/g, 'ufat');
}

function decrypt(text) {
	return text
		.replace(/enter/g, 'e')
		.replace(/imes/g, 'i')
		.replace(/ai/g, 'a')
		.replace(/ober/g, 'o')
		.replace(/ufat/g, 'u');
}

function displayResult(text) {
	const placeholderImage = document.getElementById('placeholder-image');
	const outputText = document.getElementById('output-text');

	placeholderImage.style.display = 'none';
	outputText.style.display = 'block';
	outputText.value = text;
}
