package projeto.controller.converter;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.Servico;

public class ServicoConverter implements Converter {

	public Object getAsObject(FacesContext context, UIComponent component, String value) {
		Servico servico = null;
		servico = Fachada.getFachada().ProcurarServico(Integer.parseInt(value));
		return servico;
	}

	public String getAsString(FacesContext context, UIComponent component, Object value) {
		String resposta = "";
		
		if(value != null) {
			Servico servico = (Servico)value;
			resposta = servico.getPK().toString();
		}
		return resposta;
	}

}
