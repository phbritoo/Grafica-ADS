package projeto.model.exception;

public class ObjetoNuloException extends Exception{
	public ObjetoNuloException(String objeto) {
		super("O objeto '"+ objeto +"' com valor nulo!");
	}
}
