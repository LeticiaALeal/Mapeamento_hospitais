	var mymap = L.map('mapid').setView([-22.9064, -47.0616],12);
		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: 'pk.eyJ1IjoibGV0aWNpYWxlYWwiLCJhIjoiY2tpbmhwMmptMDZ4bTJ6bzRhMHRuZXFlZiJ9.y-MBOEUUCBEhIWo51HQTjg'
		}).addTo(mymap);
		
		var marker = L.marker([-22.92087, -47.11981]).addTo(mymap).bindPopup("<b>Hospital PUC Campinas</b><br><br>" +
		"Avenida John Boyd Dunlop, S/N - Jardim Londres, Campinas - SP, 13034-685 <br><br>" + 
		"Site: http://www.hospitalpuc-campinas.com.br/ <br><br> Telefone: (19) 3343-8600").openPopup();
		
		var marker = L.marker([-22.96326, -47.13478]).addTo(mymap).bindPopup("<b>Hospital Prefeito Edivaldo Orsi</b><br><br>" + 
		"Avenida Ruy Rodrigues, 3434 - Chácara São José, Campinas - SP, 13060-646 <br><br>" +  
		"Site: http://www.saude.campinas.sp.gov.br <br><br> Telefone: (19) 3772-8300").openPopup();
		
		var marker = L.marker([-22.9161, -47.06855]).addTo(mymap).bindPopup("<b>Hospital Mário Gatti</b><br><br>" + 
		"Avenida Prefeito Faria Lima, 340 - Parque Italia, Campinas - SP, 13036-902 <br><br>" + 
		"Site: http://www.hmmg.sp.gov.br/ <br><br> Telefone: (19) 3772-5700").openPopup();
		
		var marker = L.marker([-22.82695, -47.06411]).addTo(mymap).bindPopup("<b>Hospital de Clínicas</b><br><br>" + 
		"Rua Vital Brasil, 251 - Cidade Universitária, Campinas - SP, 13083-888 <br><br>" + 
		"Site: http://www.hmmg.sp.gov.br/ <br><br> Telefone: (19) 3772-5700").openPopup();
		
		var marker = L.marker([-22.91758, -47.05944]).addTo(mymap).bindPopup("<b>Hospital Samaritano Campinas</b><br><br>" + 
		"Rua Engenheiro Monlevade, 206 - Vila Joao Jorge, Campinas - SP, 13041-304 <br><br>" + 
		"Site: http://www.samaritanocampinas.com.br/ <br><br> Telefone: (19) 3726-1000").openPopup();
		
		var marker = L.marker([-22.90307, -47.04128]).addTo(mymap).bindPopup("<b>Hospital Vera Cruz De Campinas</b><br><br>" + 
		"Avenida Andrade Neves, 402 - Botafogo, Campinas - SP, 13013-908 <br><br>" + 
		"Site: http://www.hospitalveracruz.com.br/ <br><br> Telefone: (19) 3734-3000").openPopup();
		
		var marker = L.marker([-22.9005, -47.05495]).addTo(mymap).bindPopup("<b>Santa Casa Campinas</b><br><br>" + 
		"Avenida Júlio de Mesquita, 571 - Cambuí, Campinas - SP, 13024-180 <br><br>" + 
		"Site: http://santacasacampinas.com.br/ <br><br> Telefone: (19) 2515-3100").openPopup();
		
		var marker = L.marker([-22.89955, -47.06323]).addTo(mymap).bindPopup("<b>Maternidade de Campinas</b><br><br>" + 
		"Avenida Orosimbo Maia, 165 - Vila Itapura, Campinas - SP, 13023-002 <br><br>" + 
		"Site: http://maternidadedecampinas.com.br <br><br> Telefone: (19) 3306-6000").openPopup();
		
		var marker = L.marker([-22.91416, -47.0648]).addTo(mymap).bindPopup("<b>Hospital Unimed Campinas</b><br><br>" + 
		"Rua São Carlos, 369 - Vila Industrial, Campinas - SP, 13035-420 <br><br>" + 
		"Site: https://www.unimedcampinas.com.br <br><br> Telefone: (19) 3773-9310").openPopup();
		
		var marker = L.marker([-22.89251, -47.06379]).addTo(mymap).bindPopup("<b>Hospital Renascença Campinas</b><br><br>" + 
		"Avenida Barão de Itapura, 1444 - Jardim Guanabara, Campinas - SP, 13020-432 <br><br>" + 
		"Site: gndi.com.br <br><br> Telefone: (19) 3727-5200").openPopup();
		
		
		
		
	
		
