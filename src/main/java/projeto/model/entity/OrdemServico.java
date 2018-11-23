package projeto.model.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class OrdemServico implements Entidade, Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int codigoOrdemServico;
	
	@ManyToOne
	private Cliente cliente;
	
	@OneToMany(mappedBy="codigoServico")
	private List<Servico> servicos;
	

	public Cliente getCliente() {
		return cliente;
	}


	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	
	
	
	public List<Servico> getServicos() {
		return servicos;
	}


	public void setServicos(List<Servico> servicos) {
		this.servicos = servicos;
	}

	public int getCodigoOrdemServico() {
		return codigoOrdemServico;
	}


	public Object getPK() {
		return this.codigoOrdemServico;
	}
	
	
}
