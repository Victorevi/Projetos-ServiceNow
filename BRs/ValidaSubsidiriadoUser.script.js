(function executeRule(current, previous /*null when async*/) {

	// Obtém o ID do usuário atual
	var user = gs.getUserID();

	// Obtém os dados do usuário atual
	var dadosUser = new GlideRecord("sys_user");
	dadosUser.get(user);

	// Obtém os sys_id das subsidiárias do usuário atual
    var subsidiariasUsuarioIds = dadosUser.u_subsidiarias.split(',');
    var subsidiariasUsuario = [];

    for (var i = 0; i < subsidiariasUsuarioIds.length; i++) {
        // Obtém o registro da subsidiária atual		
        var glideSubsidiarias = new GlideRecord("question_choice");
        glideSubsidiarias.get(subsidiariasUsuarioIds[i]);

		// Adiciona o nome da subsidiária ao array
        subsidiariasUsuario.push(glideSubsidiarias.text.toString());
    }

	// Verifica se o usuário atual possui permissão para criar o registro de caso
	switch (true) {
		// Verifica se o usuário possui permissão para a subsidiáriaA 
		case (subsidiariasUsuario.indexOf("subsidiáriaA") !== -1 || subsidiariasUsuario.indexOf("subsidiáriaA Barueri") !== -1 || subsidiariasUsuario.indexOf("subsidiáriaA BPO") !== -1) && (current.u_subsidiary.indexOf("subsidiáriaA") !== -1 || current.u_subsidiary.indexOf("subsidiáriaA Barueri") !== -1 || current.u_subsidiary.indexOf("subsidiáriaA BPO") !== -1):
			return;

		// Verifica se o usuário possui permissão para a subsidiáriaB
		case (subsidiariasUsuario.indexOf("subsidiáriaB") !== -1 || subsidiariasUsuario.indexOf("subsidiáriaB Barueri") !== -1) && (current.u_subsidiary.indexOf("subsidiáriaB") !== -1 || current.u_subsidiary.indexOf("subsidiáriaB Barueri") !== -1):
			return;

		// Verifica se o usuário possui permissão para a subsidiáriaC
		case subsidiariasUsuario.indexOf("subsidiáriaC") !== -1 && current.u_subsidiary.indexOf("subsidiáriaC") !== -1:
			return;

		// Verifica se o usuário possui permissão para a subsidiáriaD
		case subsidiariasUsuario.indexOf("subsidiáriaD") !== -1 && current.u_subsidiary.indexOf("subsidiáriaD") !== -1:
			return;

		// Verifica se o usuário possui permissão para a subsidiáriaE
		case subsidiariasUsuario.indexOf("subsidiáriaE") !== -1 && current.u_subsidiary.indexOf("subsidiáriaE") !== -1:
			return;
			
		// Se o usuário não possui permissão, bloqueia a criação do registro e exibe uma mensagem de erro
		default:
			gs.addErrorMessage('Verifique a subsidiária antes de criar o caso.');
			current.setAbortAction(true);
	}

})(current, previous);