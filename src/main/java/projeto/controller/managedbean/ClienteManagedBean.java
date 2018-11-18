package projeto.controller.managedbean;

import javax.annotation.PostConstruct;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import projeto.model.Fachada.Fachada;
import projeto.model.dao.ClienteDAO;
import projeto.model.entity.Cliente;
import projeto.model.entity.Endereco;
import projeto.model.util.RetornoManagedBean;

@ViewScoped
@ManagedBean
public class ClienteManagedBean implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	Cliente cliente;
	Endereco endereco;
	
	ClienteDAO clienteDAO = new ClienteDAO();
	
	List<Cliente> listaClientes;
	List<Endereco> listaEnderecos;
	
	
	
	public List<Cliente> getListaClientes() {
		return listaClientes;
	}

	public void setListaClientes(List<Cliente> listaClientes) {
		this.listaClientes = listaClientes;
	}

	@PostConstruct
	public void atualizaListaClientes() {
		this.listaClientes = clienteDAO.consultarTodosOsClientes();
		
	}
	
	/*private Collection<Cliente> aColecaoClientes;*/
	
	public Cliente getCliente() {
		if (this.cliente == null) {
			this.cliente = new Cliente();
			this.cliente.setEndereco(new Endereco());
		}
		return this.cliente;
	}

	public void setCliente(Cliente pCliente) {
		this.cliente = pCliente;
	}
	
	public String inserir() {
		String resultado = "";
		if(this.cliente != null && this.cliente.getCPF() != null) {
			Fachada.getFachada().InserirCliente(this.cliente);
			resultado = RetornoManagedBean.INSERIDO;
		}
		return resultado;
	}
	
	public String excluir() {
		String resultado = "";
		if(this.cliente != null && this.cliente.getCPF() != null) {
			Fachada.getFachada().excluirCliente(this.cliente.getCPF());
			resultado = RetornoManagedBean.EXCLUIDO;
		}
		return resultado;
	}
	
	public String alterar() {
		String resultado = "";
		if(this.cliente != null && this.cliente.getCPF() != null) {
			Fachada.getFachada().alteraCliente(this.cliente);
			resultado = RetornoManagedBean.ALTERADO;
		}
		return resultado;
	}
	
	public String consultar(String cpf) {
		String resultado = "";
		if(this.cliente != null && this.cliente.getCPF() != null) {
			Fachada.getFachada().ProcurarCliente(this.cliente.getCPF());
			resultado = RetornoManagedBean.CONSULTAR;
		}
		return resultado;
	}
	
	/*public String consultaGeral() {
		this.aColecaoClientes = Fachada.getFachada().ConsultarClientes();
		
		return RetornoManagedBean.CONSULTAR;
		
	}*/

}
