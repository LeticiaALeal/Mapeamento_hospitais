/*BUSCA DE ENDEREÇO*/

var busca;

	function buscar(){	
		busca = txtBusca.value.toUpperCase();
		console.log(busca);
		
	let enderecos = ["PUC CAMPINAS - AV. JOHN BOYD DUNLOP,S/N - JARDIM LONDRES, CAMPINAS - SP, 13034-685",
					"HOSPITAL PREFEITO EDIVALDO ORSI - AV.RUY RODRIGUES, 3434 - CHÁCARA SÃO JOSÉ, CAMPINAS - SP, 13060-646", 
					"MÁRIO GATTI - AV. PREF. FARIA LIMA, 340 - PARQUE ITALIA, CAMPINAS - SP, 13036-902",
					"HOSPITAL DE CLÍNICAS - R. VITAL BRASIL, 251 - CIDADE UNIVERSITÁRIA, CAMPINAS - SP, 13083-888",
					"SAMARITANO CAMPINAS - RUA ENG. MONLEVADE, 206 - VILA JOAO JORGE, CAMPINAS - SP, 13041-304",
					"VERA CRUZ - AV. ANDRADE NEVES, 402 - BOTAFOGO, CAMPINAS - SP, 13013-908",
					"SANTA CASA - AV. JÚLIO DE MESQUITA, 571 - CAMBUÍ, CAMPINAS - SP, 13024-180",
					"MATERNIDADE - AV. OROSIMBO MAIA, 165 - VILA ITAPURA, CAMPINAS - SP, 13023-002",
					"UNIMED CAMPINAS - R. SÃO CARLOS, 369 - VILA INDUSTRIAL, CAMPINAS - SP, 13035-420",
					"RENASCENÇA - AV. BARÃO DE ITAPURA, 1444 - JARDIM GUANABARA, CAMPINAS - SP, 13020-432"];
			
			
				if(txtBusca.value == ''){
					alert('Não há itens para pesquisar');
				}
				
				else{
				enderecos.map( (item) => {
				if(item.includes(busca) === true){
					alert(item);
						}		
					});
				}
	}
	
