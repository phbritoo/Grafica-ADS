package projeto.model.managedbean;

import java.util.Collection;

import javax.faces.bean.ManagedBean;

import projeto.model.Fachada.Fachada;
import projeto.model.Fachada.IFachada;
import projeto.model.entity.Funcionario;

@ManagedBean
public class FuncionarioManagedBean {

	private Funcionario funcionario;
	private Collection<Funcionario> aColecaoFuncionarios;

	public Funcionario getFuncionario() {
		if (this.funcionario == null) {
			this.funcionario = new Funcionario();
		}
		return this.funcionario;
	}

	public void setFuncionario(Funcionario pFuncionario) {
		this.funcionario = pFuncionario;
	}
	
	public String inserir() {
		String resultado = "";
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