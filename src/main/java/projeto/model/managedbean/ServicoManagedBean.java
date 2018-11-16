package projeto.model.managedbean;

import java.util.Collection;

import javax.faces.bean.ManagedBean;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.OrdemServico;
import projeto.model.entity.Servico;

@ManagedBean
public class ServicoManagedBean {
	private Servico servico;
	private Collection<Servico> aColecaoServico;

	public Servico getFuncionario() {
		if (this.servico == null) {
			this.servico = new Servico();
			this.servico.setOrdemServico(new OrdemServico());
		}
		return this.servico;
	}

	public void setServico(Servico pServico) {
		this.servico = pServico;
	}
	
	public String inserir() {
		String resultado = "";
		if(this.servico != null) {
			Fachada.getFachada().InserirServico(this.servico);
			resultado = "inserido";
		}
		return resultado;
	}
	
	public String excluir() {
		String resultado = "";
		if(this.servico != null) {
			Fachada.getFachada().excluirServico((Integer)this.servico.getPK());
			resultado = "excluido";
		}
		return resultado;
	}
	
	public String alterar() {
		String resultado = "";
		if(this.servico != null) {
			Fachada.getFachada().alteraServico(this.servico);
			resultado = "alterado";
		}
		return resultado;
	}
	
	public String consultar(String cpf) {
		String resultado = "";
		if(this.servico != null) {
			Fachada.getFachada().ProcurarServico((Integer)this.servico.getPK());
			resultado = "consultar";
		}
		return resultado;
	}
	
	public String consultaGeral() {
		this.aColecaoServico= Fachada.getFachada().ConsultarServicos();
		
		return "consultar";
		
	}

}
