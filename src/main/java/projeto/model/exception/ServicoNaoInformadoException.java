package projeto.model.exception;

public class ServicoNaoInformadoException extends Exception{

	public ServicoNaoInformadoException() {
		super("� necess�rio informar pelo menos um servi�o para a Ordem de Servi�o!");
	}
}
