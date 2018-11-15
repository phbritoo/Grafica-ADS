package projeto.model.dao;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import projeto.model.entity.Entidade;

public abstract class AbstractDAO<T> implements InterfaceDAO<T>{

	
	public void inserir(T pEntidade) {
		inserir(pEntidade, UtilJPA.getEntityManager(), true);

	}
	
	private void inserir(T pEntidade, EntityManager pEM, boolean pFecharEM) {
		pEM.getTransaction().begin();
		
		pEM.persist(pEntidade);
		
		pEM.getTransaction().commit();
		
		if(pFecharEM) {
			pEM.close();
		}
		
	}
	
	public T inserirMerge(T pEntidade) {
		return inserirMerge(pEntidade, UtilJPA.getEntityManager(), true);

	}
	
	private T inserirMerge(T pEntidade, EntityManager pEM, boolean pFecharEM) {
		pEM.getTransaction().begin();
		
		T retorno = pEM.merge(pEntidade);
		
		pEM.getTransaction().commit();
		
		if(pFecharEM) {
			pEM.close();
		}
		
		return retorno;
		
	}

	public void alterar(T pEntidade) {
		// TODO Auto-generated method stub

	}

	public void excluirPorChavePrimaria(Class pClasse, Object pPrimarykey) {
		excluirPorChavePrimaria(pClasse, pPrimarykey, UtilJPA.getEntityManager(), true);
	}
	
	private void excluirPorChavePrimaria(Class pClasse, Object pPrimaryKey, EntityManager pEntityManager, boolean pFecharEntityManager) {
		
		pEntityManager.getTransaction().begin();
		
		Object registro = pEntityManager.find(pClasse, pPrimaryKey);
		
		pEntityManager.remove(registro);
		
		pEntityManager.getTransaction().commit();
		
		if( pFecharEntityManager) {
			pEntityManager.close();
		}
		
	}

	public void excluirPorObjeto(T entidade) {
		excluirPorObjeto(entidade, UtilJPA.getEntityManager(), true);

	}
	
	private void excluirPorObjeto(T entidade, EntityManager pEntityManager, boolean pFecharEntityManager) {
		
		Entidade ent = (Entidade)entidade;
		
		pEntityManager.getTransaction().begin();
		
		Object registro = pEntityManager.find(entidade.getClass(), (T)ent.getPK());
		
		pEntityManager.remove(registro);
		
		pEntityManager.getTransaction().commit();
		
		if(pFecharEntityManager) {
			pEntityManager.close();
		}
		
	}
	

	public void excluirPorObjetoDireto(T entidade) {
		excluirPorObjeto(entidade, UtilJPA.getEntityManager(), true);

	}
	
	private void excluirPorObjetoDireto(T entidade, EntityManager pEntityManager, boolean pFecharEntityManager) {
		
		pEntityManager.getTransaction().begin();
		
		pEntityManager.remove(entidade);
		
		pEntityManager.getTransaction().commit();
		
		if(pFecharEntityManager) {
			pEntityManager.close();
		}
		
	}


	public T consultarPorChavePrimaria(Class pClasse, Object pPrimaryKey) {
		return consultarPorChavePrimaria(pClasse, pPrimaryKey, UtilJPA.getEntityManager(), true);

	}
	
	private T consultarPorChavePrimaria(Class pClasse, Object pPrimaryKey, EntityManager pEntityManager, boolean pFecharEntityManager) {
		T registro = (T)pEntityManager.find(pClasse, pPrimaryKey);
		
		if (pFecharEntityManager) {
			pEntityManager.close();
		}
		
		return registro;
	}


	public T consultarPorObjeto(T pEntidade) {
		return consultarPorObjeto(pEntidade, UtilJPA.getEntityManager(), true);

	}
	
	private T consultarPorObjeto(T pEntidade, EntityManager pEntityManager, boolean pFecharEntityManager) {
		
		Entidade ent = (Entidade)pEntidade;
		
		T registro = (T)pEntityManager.find(pEntidade.getClass(), ent.getPK());
		
		if (pFecharEntityManager) {
			pEntityManager.close();
		}
		
		return registro;
		
	}
	
	public List<T> consultarGeral(Class pClasse, String tabela) {
		return consultarGeral(pClasse, tabela, UtilJPA.getEntityManager(), true);
	}

	private List<T> consultarGeral(Class pClasse, String tabela, EntityManager pEntityManager, boolean pFecharEntityManager) {
		String querySelect = "Select p From "+ tabela +" p";

		TypedQuery<T> typedQuery =  pEntityManager.createQuery(querySelect, pClasse);

		List<T> resultSet = typedQuery.getResultList();

		return resultSet;
	}
	
}
