package projeto.model.Fachada;

import java.util.List;

import projeto.model.entity.Cliente;
import projeto.model.entity.Funcionario;
import projeto.model.entity.OrdemServico;
import projeto.model.entity.Servico;

public interface IFachada {

	void InserirCliente(Cliente cliente);

	void alteraCliente(Cliente cliente);

	void excluirCliente(String cpf);

	Cliente ProcurarCliente(String cpf);
	
	List<Cliente> ConsultarClientes();

	void InserirFuncionario(Funcionario funcionario);

	void alteraFuncionario(Funcionario funcionario);

	void excluirFuncionario(String cpf);

	Funcionario ProcurarFuncionario(String cpf);
	
	List<Funcionario> ConsultarFuncionarios();

	void InserirServico(Servico servico);

	void alteraServico(Servico servico);

	void excluirServico(int codigoServico);

	Servico ProcurarServico(int codigoServico);
	
	List<Servico> ConsultarServicos();
	
	void InserirOrdemServico(OrdemServico ordemServico);

	void alteraOrdemServico(OrdemServico ordemServico);

	void excluirOrdemServico(int codigoOrdemServico);

	OrdemServico ProcurarOrdemServico(int codigoOrdemServico);
	
	double valorTotalOrdemServico(OrdemServico ordemServico);
	
	List<OrdemServico> ConsultarOrdemServicos();

}
