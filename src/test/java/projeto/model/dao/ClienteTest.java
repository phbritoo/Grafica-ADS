package projeto.model.dao;

import static org.junit.Assert.*;

import org.junit.Ignore;
import org.junit.Test;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.Cliente;
import projeto.model.exception.CampoNaoInformadoException;

public class ClienteTest {

	@Ignore
	@Test(expected=CampoNaoInformadoException.class)
	public void test() {
		Cliente cliente = new Cliente();
		Fachada.getFachada().InserirCliente(cliente);
	}
	
	
	public void test1() {
		assertEquals(true, true);
	}

}
