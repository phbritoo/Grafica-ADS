package projeto.model.converter;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;

import projeto.model.Fachada.Fachada;
import projeto.model.entity.OrdemServico;

public class OrdemServicoConverter implements Converter {

	public Object getAsObject(FacesContext context, UIComponent component, String value) {
		OrdemServico ordemservico = null;
		ordemservico = Fachada.getFachada().ProcurarOrdemServico(Integer.parseInt(value));
		return ordemservico;
	}

	public String getAsString(FacesContext context, UIComponent component, Object value) {
		String resposta = "";
		
		if(value != null) {
			OrdemServico ordemservico = (OrdemServico)value;
			resposta = ordemservico.getPK().toString();
		}
		return resposta;
	}

}
