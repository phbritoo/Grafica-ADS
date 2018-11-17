package projeto.controller.managedbean;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;

import projeto.model.Fachada.Fachada;
import projeto.model.dao.ClienteDAO;
import projeto.model.dao.FuncionarioDAO;
import projeto.model.entity.Cliente;
import projeto.model.entity.Endereco;
import projeto.model.entity.Funcionario;
import projeto.model.entity.ValidaCPF;
import projeto.model.exception.CampoNaoInformadoException;
import projeto.model.exception.CpfInvalidoException;
import projeto.model.exception.ObjetoNuloException;
import projeto.model.util.RetornoManagedBean;

@ManagedBean
public class FuncionarioManagedBean implements Serializable{
	private static final long serialVersionUID = 1L;
	
	Funcionario funcionario;
	
	FuncionarioDAO funcionarioDAO = new FuncionarioDAO();
	
	List<Funcionario> listaFuncionarios;
	
	public List<Funcionario> getListaFuncionarios() {
		return listaFuncionarios;
	}

	public void setListaFuncionarios(List<Funcionario> listaFuncionarios) {
		this.listaFuncionarios = listaFuncionarios;
	}

	/*private Funcionario funcionario;*/
	Collection<Funcionario> aColecaoFuncionarios;
	String erro;
	
	@PostConstruct
	public void atualizaListaFuncionarios() {
		this.listaFuncionarios = funcionarioDAO.consultarTodosOsFuncionarios();
		
	}

	public Funcionario getFuncionario() {
		if (this.funcionario == null) {
			this.funcionario = new Funcionario();
			this.funcionario.setEndereco(new Endereco());
		}
		return this.funcionario;
	}

	public void setFuncionario(Funcionario pFuncionario) {
		this.funcionario = pFuncionario;
	}
	
	public String inserir() {
		String resultado = "";
		String erro = "";
		try{
		if (this.funcionario == null) {
			throw new ObjetoNuloException("funcionario");
		}
		if (this.funcionario.getCPF() == null) {
			throw new CampoNaoInformadoException("CPF");
		}
		if (ValidaCPF.isCPF(this.funcionario.getCPF())) {
			throw new CpfInvalidoException();
		}
		
		Fachada.getFachada().InserirFuncionario(this.funcionario);
		resultado = RetornoManagedBean.INSERIDO;
		
		}
		catch(Exception e) {
			erro = e.getMessage();
			resultado = RetornoManagedBean.ERRO;
		}
		return resultado;
		
	}
	
	public String excluir() {
		String resultado = "";
		if(this.funcionario != null && this.funcionario.getCPF() != null) {
			Fachada.getFachada().excluirFuncionario(this.funcionario.getCPF());
			resultado = RetornoManagedBean.EXCLUIDO;
		}
		return resultado;
	}
	
	public String alterar() {
		String resultado = "";
		if(this.funcionario != null && this.funcionario.getCPF() != null) {
			Fachada.getFachada().alteraFuncionario(this.funcionario);
			resultado = RetornoManagedBean.ALTERADO;
		}
		return resultado;
	}
	
	public String consultar(String cpf) {
		String resultado = "";
		if(this.funcionario != null && this.funcionario.getCPF() != null) {
			Fachada.getFachada().ProcurarCliente(this.funcionario.getCPF());
			resultado = RetornoManagedBean.CONSULTAR;
		}
		return resultado;
	}
	
	public String consultaGeral() {
		this.aColecaoFuncionarios= Fachada.getFachada().ConsultarFuncionarios();
		
		return RetornoManagedBean.CONSULTAR;
		
	}
}