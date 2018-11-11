package projeto.model.Fachada;

import projeto.model.dao.ClienteDAO;
import projeto.model.dao.FuncionarioDAO;
import projeto.model.dao.ServicoDAO;
import projeto.model.entity.Cliente;
import projeto.model.entity.Funcionario;
import projeto.model.entity.Servico;

public class Fachada implements IFachada {
	
	private ClienteDAO controladorCliente;
	private FuncionarioDAO controladorFuncionario;
	private ServicoDAO controladorServico;	
	
	private static IFachada fachadaInstanciada;
	
	public static IFachada getFachada(){ 
		if(fachadaInstanciada == null){
			fachadaInstanciada = new Fachada(); 
		}
		return fachadaInstanciada;
	}

	public void InserirCliente(Cliente cliente) {
		controladorCliente.inserir(cliente);

	}

	public void alteraCliente(Cliente cliente) {
		controladorCliente.alterar(cliente);

	}

	public void excluirCliente(Cliente cliente) {
		controladorCliente.excluirPorObjeto(cliente);

	}

	public Cliente ProcurarCliente(String cpf) {
		return controladorCliente.consultarPorChavePrimaria(Cliente.class, cpf);
	}

	public void InserirFuncionario(Funcionario funcionario) {
		// TODO Auto-generated method stub

	}

	public void alteraFuncionario(Funcionario funcionario) {
		// TODO Auto-generated method stub

	}

	public void excluirFuncionario(Funcionario funcionario) {
		// TODO Auto-generated method stub

	}

	public Funcionario ProcurarFuncionario(String cpf) {
		// TODO Auto-generated method stub
		return null;
	}

	public void InserirServico(Servico servico) {
		// TODO Auto-generated method stub

	}

	public void alteraServico(Servico servico) {
		// TODO Auto-generated method stub

	}

	public void excluirServico(Servico servico) {	
		// TODO Auto-generated method stub

	}

	public Funcionario ProcurarServico(String cpf) {
		// TODO Auto-generated method stub
		return null;
	}

}
