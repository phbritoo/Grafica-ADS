package projeto.controller.managedbean;

import java.util.Collection;

import javax.faces.bean.ManagedBean;

import projeto.model.Fachada.Fachada;
import projeto.model.Fachada.IFachada;
import projeto.model.entity.Endereco;
import projeto.model.entity.Funcionario;
import projeto.model.dao.*;

@ManagedBean
public class FuncionarioManagedBean {
	
	
	private Funcionario funcionario;
	private Collection<Funcionario> aColecaoFuncionarios;
	private String	mensagemErro;

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
		String mensagemErro = "";
		if(this.funcionario != null && this.funcionario.getCPF() != null) {
			Fachada.getFachada().InserirFuncionario(this.funcionario);
			resultado = "inserido";
		}
		return resultado;
	}
	
	public String excluir() {
		String resultado = "";
		if(this.funcionario != null && this.funcionario.getCPF() != null) {
			Fachada.getFachada().excluirFuncionario(this.funcionario.getCPF());
			resultado = "excluido";
		}
		return resultado;
	}
	
	public String alterar() {
		String resultado = "";
		if(this.funcionario != null && this.funcionario.getCPF() != null) {
			Fachada.getFachada().alteraFuncionario(this.funcionario);
			resultado = "alterado";
		}
		return resultado;
	}
	
	public String consultar(String cpf) {
		String resultado = "";
		if(this.funcionario != null && this.funcionario.getCPF() != null) {
			Fachada.getFachada().ProcurarCliente(this.funcionario.getCPF());
			resultado = "consultar";
		}
		return resultado;
	}
	
	public String consultaGeral() {
		this.aColecaoFuncionarios= Fachada.getFachada().ConsultarFuncionarios();
		
		return "consultar";
		
	}
}