package projeto.model.converter;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.FacesConverter;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.Funcionario;
@FacesConverter(forClass=Funcionario.class)
public class FuncionarioConverter implements Converter {

	public Object getAsObject(FacesContext context, UIComponent component, String value){
		Funcionario funcionario = null;
		funcionario = Fachada.getFachada().ProcurarFuncionario(value);
		
		return funcionario;
	}

	public String getAsString(FacesContext context, UIComponent component, Object value){
		String resposta = "";
		
		if(value != null) {
			Funcionario funcionario = (Funcionario)value;
			resposta = funcionario.getCPF() + ":" + funcionario.getNome();
		}
		return resposta;
	}

}
