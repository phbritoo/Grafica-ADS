package projeto.model.entity;

import java.io.Serializable;

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
	
	@ManyToOne
	private Cliente cliente;

	public TipoServico getTipoServico() {
		return tipoServico;
	}

	public void setTipoServico(TipoServico tipoServico) {
		this.tipoServico = tipoServico;
	}

	public Object getPK() {
		// TODO Auto-generated method stub
		return this.codigoServico;
	}
	
	
	
	
}
