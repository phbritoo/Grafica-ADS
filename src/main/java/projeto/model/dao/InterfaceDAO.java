package projeto.model.dao;

import java.util.List;

import javax.persistence.EntityManager;

public interface InterfaceDAO<T> {
	
	public void inserir(T pEntidade);
	
	public T inserirMerge(T pEntidade);
	
	public void alterar(T entidade);
	
	public void excluirPorChavePrimaria(Class pClasse, Object pPrimarykey);
	
	public void excluirPorObjeto(T entidade);
	
	public void excluirPorObjetoDireto(T entidade);
	
	public T consultarPorChavePrimaria(Class pClasse, Object pPrimaryKey);
	
	public T consultarPorObjeto(T pEntidade);
	
	public List<T> consultarGeral(Class pClasse, String tabela);

}
