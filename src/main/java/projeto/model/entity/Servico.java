package projeto.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Servico  implements Entidade, Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int codigoServico;
	
	@Enumerated(EnumType.ORDINAL)
	private TipoServico tipoServico;
	
	@Column
	private double quantidade;
	
	@Column
	private double valorUnitario;
	
	@ManyToOne
	private OrdemServico ordemServico;

	public TipoServico getTipoServico() {
		return tipoServico;
	}

	public void setTipoServico(TipoServico tipoServico) {
		this.tipoServico = tipoServico;
	}

	public double getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(double quantidade) {
		this.quantidade = quantidade;
	}

	public double getValorUnitario() {
		return valorUnitario;
	}

	public void setValorUnitario(double valorUnitario) {
		this.valorUnitario = valorUnitario;
	}

	public OrdemServico getOrdemServico() {
		return ordemServico;
	}

	public void setOrdemServico(OrdemServico ordemServico) {
		this.ordemServico = ordemServico;
	}

	public Object getPK() {
		// TODO Auto-generated method stub
		return this.codigoServico;
	}
	
	
	
	
}
