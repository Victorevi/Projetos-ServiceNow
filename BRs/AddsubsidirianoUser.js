(function executeRule(current, previous /*null when async*/ ) {

	// Obtém o endereço de e-mail e o nome do usuário criado
    var email = current.email.toString();
    var user = current.user_name.toString();
	
	// Atualiza a variável "atual" para o objeto "current"
	var atual = current;

    // Define a variável "subsidiarias" como uma string vazia
    var subsidiarias;

    switch (true) {
		// Verifica se o endereço de e-mail do usuário contém o domínio "@empresa1.com.br"
        case user.includes("@empresa1.com.br") || email.includes("@empresa1.com.br"):
            // Define o valor de "subsidiarias" com os IDs das subsidiárias correspondentes ao domínio
            subsidiarias = '11111111111111111111111111111111,22222222222222222222222222222222';

            // Define o valor do campo "u_subsidiarias" no objeto "atual" com o valor de "subsidiarias"
			atual.u_subsidiarias.setValue(subsidiarias);

            // Retorna a função para interromper a execução
			return;

		// Verifica se o endereço de e-mail do usuário contém o domínio "@empresa2.com.br"
        case user.includes("@empresa2.com.br") || email.includes("@empresa2.com.br"):
			// Define o valor de "subsidiarias" com os IDs das subsidiárias correspondentes ao domínio
			subsidiarias = '33333333333333333333333333333333,44444444444444444444444444444444,55555555555555555555555555555555';

			// Define o valor do campo "u_subsidiarias" no objeto "atual" com o valor de "subsidiarias"
			atual.u_subsidiarias.setValue(subsidiarias);

			// Retorna a função para interromper a execução
			return;

		// Verifica se o endereço de e-mail do usuário contém o domínio "@empresa3.com.br"
		case user.includes("@empresa3.com.br") || email.includes("@empresa3.com.br"):
			// Define o valor de "subsidiarias" com os IDs das subsidiárias correspondentes ao domínio
			subsidiarias = '66666666666666666666666666666666';

			// Define o valor do campo "u_subsidiarias" no objeto "atual" com o valor de "subsidiarias"
			atual.u_subsidiarias.setValue(subsidiarias);

			// Retorna a função para interromper a execução
			return;

		// Verifica se o endereço de e-mail do usuário contém o domínio "@empresa4.com.br"
		case user.includes("@empresa4.com.br") || email.includes("@empresa4.com.br"):
			// Define o valor de "subsidiarias" com os IDs das subsidiárias correspondentes ao domínio
			subsidiarias = '77777777777777777777777777777777,88888888888888888888888888888888';

			// Define o valor do campo "u_subsidiarias" no objeto "atual" com o valor de "subsidiarias"
			atual.u_subsidiarias.setValue(subsidiarias);

			// Retorna a função para interromper a execução
			return;

		// Verifica se o endereço de e-mail do usuário contém o domínio "@empresa5.com.br"
		case user.includes("@empresa5.com.br") || email.includes("@empresa5.com.br"):
			// Define o valor de "subsidiarias" com os IDs das subsidiárias correspondentes ao domínio
			subsidiarias = '99999999999999999999999999999999';

			// Define o valor do campo "u_subsidiarias" no objeto "atual" com o valor de "subsidiarias"
			atual.u_subsidiarias.setValue(subsidiarias);

			// Retorna a função para interromper a execução
			return;
    }

})(current, previous);