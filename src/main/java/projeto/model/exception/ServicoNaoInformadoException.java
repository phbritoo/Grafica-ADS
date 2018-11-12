package projeto.model.exception;

public class ServicoNaoInformadoException extends Exception{

	public ServicoNaoInformadoException() {
		super("É necessário informar pelo menos um serviço para a Ordem de Serviço!");
	}
}
