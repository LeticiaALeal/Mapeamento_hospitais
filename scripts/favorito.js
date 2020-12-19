	var busca;
	function favoritar(){
		busca = txtBusca.value;
		
	let enderecos = ["Av. John Boyd Dunlop,S/N - Jardim Londres, Campinas - SP, 13034-685",
					"Av.Ruy Rodrigues, 3434 - Chácara São José, Campinas - SP, 13060-646", 
					"Av. Pref. Faria Lima, 340 - Parque Italia, Campinas - SP, 13036-902",
					"R. Vital Brasil, 251 - Cidade Universitária, Campinas - SP, 13083-888",
					"Rua Eng. Monlevade, 206 - Vila Joao Jorge, Campinas - SP, 13041-304",
					"Av. Andrade Neves, 402 - Botafogo, Campinas - SP, 13013-908",
					"Av. Júlio de Mesquita, 571 - Cambuí, Campinas - SP, 13024-180",
					"Av. Orosimbo Maia, 165 - Vila Itapura, Campinas - SP, 13023-002",
					"R. São Carlos, 369 - Vila Industrial, Campinas - SP, 13035-420",
					"Av. Barão de Itapura, 1444 - Jardim Guanabara, Campinas - SP, 13020-432"];
					
							
			enderecos.map( (item) => {
				if(item.includes(busca) === true){
					localStorage.setItem("enderecoSalvo",item);
					alert('Endereço salvo');
				}
			});
	}
	
	function retornarFavorito(){
		var favoritos = localStorage.getItem("enderecoSalvo");
		if(favoritos == null){
			favoritos = "Não há favoritos!";
		}
		alert(favoritos);		
	}
	
	function desfavoritar(){
		var favoritos = localStorage.getItem("enderecoSalvo");
		if(favoritos == null){
			favoritos = "Não há favoritos para remover";
			alert(favoritos);	
		}
		else{
			localStorage.removeItem("enderecoSalvo");
			alert('Endereço foi desfavoritado');
		}
		
	}