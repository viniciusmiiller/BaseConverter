window.onload = ()=>{
	document.querySelectorAll('input[id^="txtNum"]').forEach((input)=>{
		input.addEventListener('input', (e)=>{
			limparCamposCasoVazio(e.target);
		}, false);
	});

	document.querySelector('#txtNumDecimal').oninput = (e)=>{
		if(e.target.value!=''){
			document.querySelector('#txtNumBinario').value = decimalParaBinario(parseInt(e.target.value));
		}
	};
}

const limparCamposCasoVazio = (input)=>{
	if(input.value==""){
		document.querySelectorAll('input[id^="txtNum"]').forEach((input)=>{
			input.value = "";
		});
	}
}

//ENTRADA DECIMAL
const decimalParaHexadecimal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

const decimalParaOctal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

const decimalParaBinario = (numero)=>{
	var arrayNumero = [], mod;

	while(numero!=0){
		mod = numero%2;
		arrayNumero.push(mod);
		if(mod==1){
			numero = numero-1;
		}
		numero = numero/2;
	};

	var resultado = arrayNumero.reverse().join('');
	return resultado == '' ? 0 : resultado;
}

//ENTRADA HEXADECIMAL
const hexadecimalParaDecimal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

const hexadecimalParaOctal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

const hexadecimalParaBinario = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

//ENTRADA OCTAL
const octalParaDecimal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

const octalParaBinario = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

const octalParaHexadecimal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

//ENTRADA BINARIO
const binarioParaDecimal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}
const binarioParaHexadecimal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}
const binarioParaOctal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}
