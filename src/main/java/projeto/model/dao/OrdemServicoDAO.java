package projeto.model.dao;

import projeto.model.entity.OrdemServico;
import projeto.model.entity.Servico;

public class OrdemServicoDAO extends AbstractDAO<OrdemServico>{
	
	public double valorTotalOrdemServico(OrdemServico ordemServico) {
		double totalServico =0;
		for(Servico servico: ordemServico.getServicos()) {
			totalServico = totalServico + (servico.getValorUnitario() * servico.getQuantidade());
		}
		return totalServico;
	}

}
