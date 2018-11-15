package projeto.model.dao;

import static org.junit.Assert.*;

import org.junit.Test;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.Endereco;
import projeto.model.entity.Funcionario;

public class FuncionarioTest {

	@Test
	public void test() {
		Funcionario funcionario = new Funcionario();
		funcionario.setCPF("25414948070");
		funcionario.setNome("Tito");
		Endereco endereco = new Endereco();
		endereco.setCEP("53130500");
		endereco.setCidade("Recife");
		endereco.setLogradouro("Rua da rua logradoura");
		endereco.setBairro("bairro endereço");
		funcionario.setEndereco(endereco);
		
		Fachada.getFachada().InserirFuncionario(funcionario);
	}

}
