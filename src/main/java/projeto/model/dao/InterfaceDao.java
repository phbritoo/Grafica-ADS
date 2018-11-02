package projeto.model.dao;
import projeto.model.entity.Entidade;

public interface InterfaceDao {

	//metodo que vai ser chamado do AbstractDao - tem que ser do mesmo jeito que esta aqui.
	public void create (Entidade e);
	public void alterar (Entidade e);
	public void excluirPorChavePrimaria(Class pClasse, Object getPK);
	public void excluirPorObjeto(Entidade e);
	public Entidade consultarPorChavePrimaria(Class pClasse, Object pPrimaryKey);
	public Entidade consultarPorObjeto(Entidade e);
			
}
