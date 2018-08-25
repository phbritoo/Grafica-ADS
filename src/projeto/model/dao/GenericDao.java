package projeto.model.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class GenericDao {
	
	private static EntityManagerFactory emf;
	
	public static void createEntityManagerFactory() {
		
		if ( emf == null ) {
			emf = Persistence.createEntityManagerFactory("projeto");
		}
	}
	
	public static EntityManager getEntityManager() {
		
		if ( emf == null ) {
			createEntityManagerFactory();
		}
		return emf.createEntityManager();
	}
	
	
	public static void closeEntityManagerFactory() {
		emf.close();
	}
	
}
