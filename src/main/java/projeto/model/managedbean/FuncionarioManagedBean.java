package projeto.model.managedbean;

import java.util.Collection;

import javax.faces.bean.ManagedBean;

import projeto.model.entity.Funcionario;

@ManagedBean
public class FuncionarioManagedBean {

	private Funcionario funcionario;
	private Collection<Funcionario> aColecaoFuncionarios;

	public Funcionario getFuncionario() {
		if (this.funcionario == null) {
			this.funcionario = new Funcionario();
		}
		return this.funcionario;
	}

	public void setFuncionario(Funcionario pFuncionario) {
		this.funcionario = pFuncionario;
	}

//	public Collection<Funcionario> getColecaoFuncionarios() {
//		if (this.aColecaoFuncionarios == null) {
//			this.consultarGeral();
//		}
//		return aColecaoFuncionarios;
//	}
}