package projeto.model.dao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Test;

import projeto.model.entity.Correntista;

public class CorrentistaDAOTeste {
	
	@Test
	public void testarCreateCorrentistaDAO() throws ParseException {
		Correntista c = new Correntista();
		
		SimpleDateFormat teste = new SimpleDateFormat("dd/MM/yyyy");
		Date d = teste.parse("21/12/2012");

		c.setCPF("123.456.123.00");
		c.setNome("Gildoso");
		
		c.setDataNascimento(d);
		
		CorrentistaDAO.create(c);	
	
	}
	
//	@Test
//	public void testarUpdateCorrentistaDAO(){
//		Correntista c = new Correntista();
//		c.setCPF("123.123.123-99");
//		c.setNome("PH");
//		//c.setDataCadstro("1999/08/08");
////		c.setDataNascimento(1996/08/06);	
//	}
//	
//	@Test
//	public void testarDeleteCorrentistaDAO(){
//		Correntista c = new Correntista();
//		c.setCPF("123.123.123-99");
//		c.setNome("PH");
//		//c.setDataCadstro("1999/08/08");
//		//c.setDataNascimento("1996/08/06");	
//	}
	

}
