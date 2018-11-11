package projeto.model.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
public class Cliente extends Pessoa{
	
	@OneToMany(mappedBy="codigoOrdemServico")
	private List<OrdemServico> ordemServicos;

}
