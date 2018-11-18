package projeto.model.dao;

import java.io.Serializable;
import java.util.List;

import javax.persistence.TypedQuery;

import projeto.model.entity.Cliente;
import projeto.model.entity.ValidaCPF;
import projeto.model.exception.CampoNaoInformadoException;
import projeto.model.exception.CpfInvalidoException;
import projeto.model.exception.ObjetoNuloException;

public class ClienteDAO extends AbstractDAO<Cliente> implements Serializable {
	private static final long serialVersionUID = 1L;

	
	public List<Cliente> consultarTodosOsClientes(){
		String querySelect = "Select c From Cliente c";
		TypedQuery<Cliente> typedQuery = UtilJPA.getEntityManager().createQuery(querySelect, Cliente.class);
		List<Cliente> resultSet = typedQuery.getResultList();
		return resultSet;
	}
	
	@Override
	public void inserir(Cliente pEntidade) {
//		if (pEntidade == null) {
//			try {
//				throw new ObjetoNuloException("Cliente");
//			} catch (ObjetoNuloException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}
//		if (pEntidade.getCPF() == null){
//			try {
//				throw new CampoNaoInformadoException("CPF");
//			} catch (CampoNaoInformadoException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}
//		else if(ValidaCPF.isCPF(pEntidade.getCPF())) {
//			try {
//				throw new CpfInvalidoException();
//			} catch (CpfInvalidoException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}
//		if(pEntidade.getNome().isEmpty()) {
//			try {
//				throw new CampoNaoInformadoException("NOME");
//			} catch (CampoNaoInformadoException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}
		
		
		super.inserir(pEntidade);
	}

}
