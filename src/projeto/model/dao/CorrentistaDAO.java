package projeto.model.dao;
import javax.persistence.EntityManager;
import projeto.model.entity.Correntista;

public class CorrentistaDAO {
	
	public static void create(Correntista pCorrentista) {
		EntityManager teste = GenericDao.getEntityManager();

		beginTransaction(teste);
		
		teste.persist(pCorrentista);
		
		commitTransaction(teste);
		
		teste.close();
		teste.close();
	}

	private static void commitTransaction(EntityManager em) {
		em.getTransaction().commit();
	}

	private static void beginTransaction(EntityManager em) {
		em.getTransaction().begin();
	}

	
	
	public static Correntista restore(String pCPF) {
		Correntista retorno = null;
		
		Correntista correntistaConsulta = new Correntista();
		correntistaConsulta.setCPF(pCPF);
		
		EntityManager 			em	= GenericDao.getEntityManager();
		
		beginTransaction(em);
		
		retorno = em.find(Correntista.class, correntistaConsulta);
		
		commitTransaction(em);
		
		return retorno;
	}
	
	public static Correntista restore(Correntista pCorrentista) {
		Correntista retorno = null;
		EntityManager 			em	= GenericDao.getEntityManager();
		
		beginTransaction(em);
		
		retorno = em.find(Correntista.class, pCorrentista);
		
		commitTransaction(em);
		
		return retorno;
	}
	
	public static void delete(Correntista pCorrentista) {
		EntityManager 			em	= GenericDao.getEntityManager();
		
		beginTransaction(em);
		
		em.remove(pCorrentista);
		
		commitTransaction(em);
	}
	
}