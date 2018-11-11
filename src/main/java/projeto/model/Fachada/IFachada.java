package projeto.model.Fachada;

import projeto.model.entity.Cliente;
import projeto.model.entity.Funcionario;
import projeto.model.entity.Servico;

public interface IFachada {

	void InserirCliente(Cliente cliente);

	void alteraCliente(Cliente cliente);

	void excluirCliente(Cliente cliente);

	Cliente ProcurarCliente(String cpf);

	void InserirFuncionario(Funcionario funcionario);

	void alteraFuncionario(Funcionario funcionario);

	void excluirFuncionario(Funcionario funcionario);

	Funcionario ProcurarFuncionario(String cpf);

	void InserirServico(Servico servico);

	void alteraServico(Servico servico);

	void excluirServico(Servico servico);

	Funcionario ProcurarServico(String cpf);

}
