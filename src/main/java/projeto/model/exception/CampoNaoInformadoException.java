package projeto.model.exception;

public class CampoNaoInformadoException extends Exception{
	
	public CampoNaoInformadoException(String campo) {
		super("O campo '"+ campo +"' n�o possui valor informado!");
	}

}
