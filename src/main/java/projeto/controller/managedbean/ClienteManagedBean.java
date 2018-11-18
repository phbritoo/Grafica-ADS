package projeto.controller.managedbean;

import javax.annotation.PostConstruct;
import java.util.List;

import javax.faces.bean.ManagedBean;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.Cliente;
import projeto.model.entity.Endereco;
import projeto.model.util.RetornoManagedBean;

@ManagedBean
public class ClienteManagedBean{
	
	Cliente cliente;
	List<Cliente> aListaClientes;
	String erro = null;
	

	public List<Cliente> getaListaClientes() {
		return aListaClientes;
	}

	public void setaListaClientes(List<Cliente> aListaClientes) {
		this.aListaClientes = aListaClientes;
	}
	
	public Cliente getCliente() {
		if (this.cliente == null) {
			this.cliente = new Cliente();
			this.cliente.setEndereco(new Endereco());
		}
		return this.cliente;
	}

	public String getErro() {
		return erro;
	}

	public void setErro(String erro) {
		this.erro = erro;
	}
	
	@PostConstruct
	public void atualizaListaClientes() {
		consultaGeral();
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
	
	public String consultaGeral() {
		this.aListaClientes = Fachada.getFachada().ConsultarClientes();
		
		return RetornoManagedBean.CONSULTAR;
		
	}

}
