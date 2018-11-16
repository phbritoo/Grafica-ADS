package projeto.model.dao;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Ignore;
import org.junit.Test;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.Cliente;
import projeto.model.entity.Endereco;
import projeto.model.exception.CampoNaoInformadoException;

public class ClienteTest {

	@Test
	public void testaConsultarClients() {
		Cliente cliente = new Cliente();
		cliente.setCPF("91263475477");
		cliente.setNome("Henrique");
		cliente.setEndereco(new Endereco());
		
		Fachada.getFachada().InserirCliente(cliente);
		
		Cliente cliente1 = new Cliente();
		cliente1.setCPF("70259886424");
		cliente1.setNome("Henrique2");
		cliente1.setEndereco(new Endereco());
		Fachada.getFachada().InserirCliente(cliente1);
		
		Cliente cliente2 = new Cliente();
		cliente2.setCPF("14830430451");
		cliente2.setNome("Henrique2");
		cliente2.setEndereco(new Endereco());
		Fachada.getFachada().InserirCliente(cliente2);
		
		
		
		List<Cliente> clientes= Fachada.getFachada().ConsultarClientes();
		
		assertEquals(3, clientes.size());
	}
	
	
	public void test1() {
		assertEquals(true, true);
	}

}
