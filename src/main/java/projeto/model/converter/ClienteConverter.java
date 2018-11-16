package projeto.model.converter;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.FacesConverter;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.Cliente;

@FacesConverter(forClass=Cliente.class)
public class ClienteConverter implements Converter {

	public Object getAsObject(FacesContext context, UIComponent component, String value) {
		Cliente cliente = null;
		cliente = Fachada.getFachada().ProcurarCliente(value);
		return cliente;
	}

	public String getAsString(FacesContext context, UIComponent component, Object value) {
		String resposta = "";
		
		if(value != null) {
			Cliente cliente = (Cliente)value;
			resposta = cliente.getCPF() + ":" + cliente.getNome();
		}
		return resposta;
	}

}
