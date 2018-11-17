package projeto.controller.managedbean;

import java.util.Collection;

import javax.faces.bean.ManagedBean;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.OrdemServico;

@ManagedBean
public class OrdemServicoManagedBean {
	private OrdemServico ordemServico;
	private Collection<OrdemServico> aColecaoOrdemServico;

	public OrdemServico getFuncionario() {
		if (this.ordemServico == null) {
			this.ordemServico = new OrdemServico();
		}
		return this.ordemServico;
	}

	public void setOrdemServico(OrdemServico pOrdemServico) {
		this.ordemServico = pOrdemServico;
	}
	
	public String inserir() {
		String resultado = "";
		if(this.ordemServico != null) {
			Fachada.getFachada().InserirOrdemServico(this.ordemServico);
			resultado = "inserido";
		}
		return resultado;
	}
	
	public String excluir() {
		String resultado = "";
		if(this.ordemServico != null) {
			Fachada.getFachada().excluirOrdemServico((Integer)this.ordemServico.getPK());
			resultado = "excluido";
		}
		return resultado;
	}
	
	public String alterar() {
		String resultado = "";
		if(this.ordemServico != null) {
			Fachada.getFachada().alteraOrdemServico(this.ordemServico);
			resultado = "alterado";
		}
		return resultado;
	}
	
	public String consultar(String cpf) {
		String resultado = "";
		if(this.ordemServico != null) {
			Fachada.getFachada().ProcurarOrdemServico((Integer)this.ordemServico.getPK());
			resultado = "consultar";
		}
		return resultado;
	}
	
	public String consultaGeral() {
		this.aColecaoOrdemServico= Fachada.getFachada().ConsultarOrdemServicos();
		
		return "consultar";
		
	}
}
