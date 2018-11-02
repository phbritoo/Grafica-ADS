package projeto.model.dao;
import javax.persistence.EntityManager;

import projeto.model.entity.Entidade;

public abstract class AbstractDao implements InterfaceDao {
	
	//INSERINDO UM DADO NO BANCO
	public void create(Entidade e) {
		EntityManager teste = UtilJPA.getEntityManager();
		beginTransaction(teste);
		teste.persist(e);
		commitTransaction(teste);
		teste.close();
	}
	private void commitTransaction(EntityManager em) {
		em.getTransaction().commit();
	}

	private void beginTransaction(EntityManager em) {
		em.getTransaction().begin();
	}

	public Entidade consultarPorChavePrimaria(Class e,Object ChavePrimaria) {
		Entidade retorno = null;
		EntityManager 			em	= UtilJPA.getEntityManager();
		beginTransaction(em);
		retorno = (Entidade) em.find(e, ChavePrimaria);
		commitTransaction(em);
		
		return retorno;
	}
	
	public Entidade consultarPorObjeto(Entidade e) {
		Entidade retorno = null;
		EntityManager em	= UtilJPA.getEntityManager();
		beginTransaction(em);
		retorno = em.find(Entidade.class, e);
		commitTransaction(em);
		
		return retorno;
	}
	
	public void excluirPorObjeto(Entidade e) {
		EntityManager 			em	= UtilJPA.getEntityManager();
		beginTransaction(em);
		em.remove(e);
		commitTransaction(em);
	}
	
	public void excluirPorChavePrimaria(Class e,Object ChavePrimaria) {
		Entidade retorno = null;
		EntityManager em	= UtilJPA.getEntityManager();
		beginTransaction(em);
		em.remove(ChavePrimaria);
		commitTransaction(em);
	}
	
	public void alterar(Entidade e) {
		// TODO Auto-generated method stub
		
	}
	
}
