package projeto.model.managedbean;

import java.util.Collection;

import javax.faces.bean.ManagedBean;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.Cliente;
import projeto.model.entity.Endereco;

@ManagedBean
public class ClienteManagedBean {
	
	private Cliente cliente;
	private Collection<Cliente> aColecaoClientes;
	
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
			resultado = "inserido";
		}
		return resultado;
	}
	
	public String excluir() {
		String resultado = "";
		if(this.cliente != null && this.cliente.getCPF() != null) {
			Fachada.getFachada().excluirCliente(this.cliente.getCPF());
			resultado = "excluido";
		}
		return resultado;
	}
	
	public String alterar() {
		String resultado = "";
		if(this.cliente != null && this.cliente.getCPF() != null) {
			Fachada.getFachada().alteraCliente(this.cliente);
			resultado = "alterado";
		}
		return resultado;
	}
	
	public String consultar(String cpf) {
		String resultado = "";
		if(this.cliente != null && this.cliente.getCPF() != null) {
			Fachada.getFachada().ProcurarCliente(this.cliente.getCPF());
			resultado = "consultar";
		}
		return resultado;
	}
	
	public String consultaGeral() {
		this.aColecaoClientes = Fachada.getFachada().ConsultarClientes();
		
		return "consultar";
		
	}

}
