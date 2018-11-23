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
public class ServicoManagedBean {
	Servico servico;
	Collection<Servico> aColecaoServico;

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
			resultado = RetornoManagedBean.INSERIDO;
		}
		return resultado;
	}
	
	public void excluir(ActionEvent evento) {
		this.servico = (Servico)evento.getComponent().getAttributes().get("excluir");
		
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
		if(this.servico != null) {
			Fachada.getFachada().excluirServico((Integer)this.servico.getPK());
			resultado = RetornoManagedBean.EXCLUIDO;
		}
		return resultado;
	}
	
	public String alterar() {
		String resultado = "";
		if(this.servico != null) {
			Fachada.getFachada().alteraServico(this.servico);
			resultado = RetornoManagedBean.ALTERADO;
		}
		return resultado;
	}
	
	public String consultar(String cpf) {
		String resultado = "";
		if(this.servico != null) {
			Fachada.getFachada().ProcurarServico((Integer)this.servico.getPK());
			resultado = RetornoManagedBean.CONSULTAR;
		}
		return resultado;
	}
	
	public String consultaGeral() {
		this.aColecaoServico= Fachada.getFachada().ConsultarServicos();
		
		return RetornoManagedBean.CONSULTAR;
		
	}

}
