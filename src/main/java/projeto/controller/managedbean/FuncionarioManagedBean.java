package projeto.controller.managedbean;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;

import org.omnifaces.util.Messages;
import org.omnifaces.util.Messages.Message;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.Endereco;
import projeto.model.entity.Funcionario;
import projeto.model.util.ValidaCPF;
import projeto.model.exception.CampoNaoInformadoException;
import projeto.model.exception.CpfInvalidoException;
import projeto.model.exception.ObjetoNuloException;
import projeto.model.util.RetornoManagedBean;


@ManagedBean
public class FuncionarioManagedBean{
	
	Funcionario funcionario;
	List<Funcionario> aListaFuncionarios;

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

	public List<Funcionario> getaListaFuncionarios() {
		return aListaFuncionarios;
	}

	public void setaListaFuncionarios(List<Funcionario> aListaFuncionarios) {
		this.aListaFuncionarios = aListaFuncionarios;
	}

	@PostConstruct
	public void atualizaListaFuncionarios() {
		this.consultaGeral();
	}

	public String inserir() {
		String resultado = "";
		
		try{
		if (this.funcionario == null) {
			throw new ObjetoNuloException("funcionario");
		}
		if (this.funcionario.getNome() == null || this.funcionario.getNome() == "") {
			throw new CampoNaoInformadoException("Nome");
		}
		if (this.funcionario.getCPF() == null || this.funcionario.getCPF() == "") {
			throw new CampoNaoInformadoException("CPF");
		}
		String cpf = this.funcionario.getCPF().replaceAll("\\.", "");
		cpf = cpf.replace("-", "");
		if (!ValidaCPF.isCPF(cpf)) {
			throw new CpfInvalidoException();
		}
		if (this.funcionario.getDataNascimento() == null) {
			throw new CampoNaoInformadoException("Nascimento");
		}
		if (this.funcionario.getCargo() == null) {
			throw new CampoNaoInformadoException("Cargo");
		}
		if (this.funcionario.getSalario() == null) {
			throw new CampoNaoInformadoException("Salario");
		}
		if (this.funcionario.getSenha() == null || this.funcionario.getSenha() == "") {
			throw new CampoNaoInformadoException("Senha");
		}
		
		Fachada.getFachada().InserirFuncionario(this.funcionario);
		resultado = RetornoManagedBean.INSERIDO;
		
		}
		catch(Exception e) {
			FacesContext context = FacesContext.getCurrentInstance();  
	         context.addMessage(null, new FacesMessage(e.getMessage()));
			resultado = RetornoManagedBean.ERRO;
		}
		return resultado;
		
	}
	
	public void excluir(ActionEvent evento) {
		funcionario = (Funcionario)evento.getComponent().getAttributes().get("excluir");
		
		if (this.excluir() == RetornoManagedBean.EXCLUIDO) {
			this.consultaGeral();
			Messages.addGlobalInfo("Removido com sucesso");
		}
		else
		{
			Messages.addGlobalInfo("Erro na exclusão");
		}
		
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
	
	@PostConstruct
	public String consultaGeral() {
		this.aListaFuncionarios= Fachada.getFachada().ConsultarFuncionarios();
		
		return RetornoManagedBean.CONSULTAR;
		
	}
}