package projeto.model.dao;

import projeto.model.entity.Cliente;
import projeto.model.entity.ValidaCPF;
import projeto.model.exception.CampoNaoInformadoException;
import projeto.model.exception.CpfInvalidoException;

public class ClienteDAO extends AbstractDAO<Cliente>{
	
	public void inserir(Cliente pEntidade) {
		if (pEntidade.getCPF().isEmpty()){
			try {
				throw new CampoNaoInformadoException("CPF");
			} catch (CampoNaoInformadoException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if(ValidaCPF.isCPF(pEntidade.getCPF())) {
			try {
				throw new CpfInvalidoException();
			} catch (CpfInvalidoException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		super.inserir(pEntidade);
	}

}
