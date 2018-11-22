package projeto.controller.managedbean;

import java.util.Collection;

import javax.faces.bean.ManagedBean;
import javax.faces.event.ActionEvent;

import org.omnifaces.util.Messages;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.OrdemServico;
import projeto.model.entity.Servico;
import projeto.model.util.RetornoManagedBean;

@ManagedBean
public class OrdemServicoManagedBean {
	private OrdemServico ordemServico;
	private Collection<OrdemServico> aColecaoOrdemServico;
	private Servico servico;
	private double totalOrdemServico = 0;

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
	

	public Servico getServico() {
		return servico;
	}

	public void setServico(Servico servico) {
		this.servico = servico;
	}

	public double getTotalOrdemServico() {
		return totalOrdemServico;
	}

	public void setTotalOrdemServico(double totalOrdemServico) {
		this.totalOrdemServico = totalOrdemServico;
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
	
	public void TotalOrdemSevico() {
		if(this.ordemServico != null) {
			this.totalOrdemServico = Fachada.getFachada().valorTotalOrdemServico(ordemServico);
		}
	}
	
	public void IncluirServico() {
		this.ordemServico.getServicos().add(this.servico);
	}
	
	public void excluirServico() {
		this.ordemServico.getServicos().remove(this.servico);
	}
}
