(function executeRule(current, previous /*null when async*/ ) {

	// Obtém o ID da subsidiária do caso pai
    var caso = current.parent.sys_id.toString();

	// Obtém os dados do caso
	var glideCaso = new GlideRecord("sn_customerservice_case");
	glideCaso.get(caso);

    // Define a variável "casoSubsidiaria" com o valor da subsidiaria do caso pai
	var casoSubsidiaria = glideCaso.u_subsidiary.toString();

    // Define a variável "subsidiaria" como uma string vazia
	var subsidiaria;
	
	switch (true) {
		// Verifica se a subsidiária do caso é "subsidiaria1"
		case casoSubsidiaria == "subsidiaria1":
			// Define o valor de "subsidiaria" com o valor correspondente à subsidiária "subsidiaria1"
			subsidiaria = "34";

			// Encerra o switch
			break;

		// Verifica se a subsidiária do caso é "subsidiaria1 Barueri"
		case casoSubsidiaria == "subsidiaria1 Barueri":
			// Define o valor de "subsidiaria" com o valor correspondente à subsidiária "subsidiaria1 Barueri"
			subsidiaria = "35";

			// Encerra o switch
			break;

		// Verifica se a subsidiária do caso é "subsidiaria1 BPO"
		case casoSubsidiaria == "subsidiaria1 BPO":
			// Define o valor de "subsidiaria" com o valor correspondente à subsidiária "subsidiaria1 BPO"
			subsidiaria = "47";
		
			// Encerra o switch
			break;
		
		// Verifica se a subsidiária do caso é "subsidiaria2"
		case casoSubsidiaria == "subsidiaria2":
			// Define o valor de "subsidiaria" com o valor correspondente à subsidiária "subsidiaria2"
			subsidiaria = "31";

			// Encerra o switch
			break;

		// Verifica se a subsidiária do caso é "subsidiaria2 Barueri"
		case casoSubsidiaria == "subsidiaria2 Barueri":
			// Define o valor de "subsidiaria" com o valor correspondente à subsidiária "subsidiaria2 Barueri"
			subsidiaria = "32";

			// Encerra o switch
			break;

		// Verifica se a subsidiária do caso é "subsidiaria3"
		case casoSubsidiaria == "subsidiaria3":
			// Define o valor de "subsidiaria" com o valor correspondente à subsidiária "subsidiaria3"
			subsidiaria = "37";

			// Encerra o switch
			break;

		// Verifica se a subsidiária do caso é "subsidiaria4 Barueri"
		case casoSubsidiaria == "subsidiaria4 Barueri":
			// Define o valor de "subsidiaria" com o valor correspondente à subsidiária "subsidiaria4 Barueri"
			subsidiaria = "29";

			// Encerra o switch
			break;

		// Verifica se a subsidiária do caso é "subsidiaria5"
		case casoSubsidiaria == "subsidiaria5":
			// Define o valor de "subsidiaria" com o valor correspondente à subsidiária "subsidiaria5"
			subsidiaria = "38";

			// Encerra o switch
			break;
	}

	// Define o valor de subsidiária atual com o valor correspondente à variável "subsidiaria"
	current.u_subsidiaria = subsidiaria;
	
})(current, previous);