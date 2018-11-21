package projeto.controller.managedbean;

import java.util.Collection;

import javax.faces.bean.ManagedBean;
import javax.faces.event.ActionEvent;

import org.omnifaces.util.Messages;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.OrdemServico;
import projeto.model.util.RetornoManagedBean;

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
	
	public Collection<OrdemServico> getaColecaoOrdemServico() {
		return aColecaoOrdemServico;
	}

	public void setaColecaoOrdemServico(Collection<OrdemServico> aColecaoOrdemServico) {
		this.aColecaoOrdemServico = aColecaoOrdemServico;
	}

	public String inserir() {
		String resultado = "";
		if(this.ordemServico != null) {
			Fachada.getFachada().InserirOrdemServico(this.ordemServico);
			resultado = RetornoManagedBean.INSERIDO;
		}
		return resultado;
	}
	
	public void excluir(ActionEvent evento) {
		this.ordemServico = (OrdemServico)evento.getComponent().getAttributes().get("excluir");
		
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
		if(this.ordemServico != null) {
			Fachada.getFachada().excluirOrdemServico((Integer)this.ordemServico.getPK());
			resultado = RetornoManagedBean.EXCLUIDO;
		}
		return resultado;
	}
	
	public String alterar() {
		String resultado = "";
		if(this.ordemServico != null) {
			Fachada.getFachada().alteraOrdemServico(this.ordemServico);
			resultado = RetornoManagedBean.ALTERADO;
		}
		return resultado;
	}
	
	public String consultar(String cpf) {
		String resultado = "";
		if(this.ordemServico != null) {
			Fachada.getFachada().ProcurarOrdemServico((Integer)this.ordemServico.getPK());
			resultado = RetornoManagedBean.CONSULTAR;
		}
		return resultado;
	}
	
	public String consultaGeral() {
		this.aColecaoOrdemServico= Fachada.getFachada().ConsultarOrdemServicos();
		
		return RetornoManagedBean.CONSULTAR;
		
	}
}
