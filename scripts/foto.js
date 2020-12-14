
	imagens = new Array();
	   imagens[0] = "<img class='foto' src='imagens/puc.jpg' />"
	   imagens[1] = "<img class='foto' src='imagens/unicamp.jpg' />"
	   imagens[2] = "<img class='foto' src='imagens/ouroverde.jpg' />"
	   imagens[3] = "<img class='foto' src='imagens/Samaritano.jpg' />"
	   imagens[4] = "<img class='foto' src='imagens/maternidade.jpg' />"
	   imagens[5] = "<img class='foto' src='imagens/santacasa.jpg' />"
	   imagens[6] = "<img class='foto' src='imagens/veracruz.jpg' />"
	   imagens[7] = "<img class='foto' src='imagens/renascenca.jpg' />"
	   imagens[8] = "<img class='foto' src='imagens/unimed.jpg' />"
	   imagens[9] = "<img class='foto' src='imagens/mariogatti.jpg' />"
	   	 		
		aleatorio = Math.floor(Math.random()*imagens.length)
		document.write(imagens[aleatorio])
		aleatorio = Math.floor(Math.random()*imagens.length)
		document.write(imagens[aleatorio])
		aleatorio = Math.floor(Math.random()*imagens.length)
		document.write(imagens[aleatorio])
	