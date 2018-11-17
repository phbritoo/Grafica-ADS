package projeto.model.dao;

import java.io.Serializable;
import java.util.List;

import javax.persistence.TypedQuery;

import projeto.model.entity.Funcionario;

public class FuncionarioDAO extends AbstractDAO<Funcionario> implements Serializable{
	private static final long serialVersionUID = 1L;

	public List<Funcionario> consultarTodosOsFuncionarios(){
		String querySelect = "Select c From Funcionario c";
		TypedQuery<Funcionario> typedQuery = UtilJPA.getEntityManager().createQuery(querySelect, Funcionario.class);
		List<Funcionario> resultSet = typedQuery.getResultList();
		return resultSet;
	}
	
}
