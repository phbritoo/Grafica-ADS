package projeto.view;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/cadastro")
public class CadastroServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.getWriter().append("A PrimeiraServlet foi executada, pelo método doGet(), às ")
				.append(new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(new Date()));
	}

	@Override
	protected void doPost(HttpServletRequest pRequest, HttpServletResponse pResponse)
			throws ServletException, IOException {
		doGet(pRequest, pResponse);

		Enumeration<String> parametros = pRequest.getParameterNames();
		while (parametros.hasMoreElements()) {
			String parametro = parametros.nextElement();
			String valor = pRequest.getParameter(parametro);
		}
		String valorDoParametro1 = pRequest.getParameter("nome");
		String valorDoParametro2 = pRequest.getParameter("email");
		String valorDoParametro3 = pRequest.getParameter("telefone");
		String valorDoParametro4 = pRequest.getParameter("senha");
		String valorDoParametro5 = pRequest.getParameter("csenha");

	}
}
