var keys = document.querySelectorAll('.key');
var screen = document.getElementById('screen_para');
var texte = '';
var lastInputType = '';

Array.from(keys).map((key) => {
	key.addEventListener('click', function () {

		if (key.classList.contains('op') && texte.length === 0) {
			alert('Veuillez saisir un chiffre en premier');
		} else {
			if(key.classList.contains("op") && lastInputType.contains("op")){
				return 0;
			}
			console.log(key.textContent);
			if (key.textContent === '=') {
				let result = eval(texte);
				screen.textContent = result;
				texte = '';
			} else {
				texte += key.textContent;
				screen.textContent = texte;
				lastInputType = key.classList;
			}
		}
		
	});
});
//ne pas pouvoir tapper operateur en premier ou suivant un operateur
// ne pas pouvoir tapper 2 operateur à la suite
