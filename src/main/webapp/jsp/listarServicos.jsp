<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Lista de Serviços</title>
<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="../css/Form.css" rel="stylesheet">
<link href="../css/creative.min.css" rel="stylesheet">
</head>
<style type="text/css">
.pagina {
	margin: 0px;
}

.linha {
	text-align: center;
	font-size: 20px;
	color: #2E64FE;
	font-size: 20px;
}

.linha2 {
	text-align: center;
	font-size: 22px;
	color: white;
	font-size: 22px;
}

.tabela {
	border: 1px solid #000;
	border-collapse: collapse;
}
</style>
</head>

<body id="page-top">
	<c:import url="menu.jsp" />
	<header> 
		<br>
		<br>
		<div class="panel-heading">
	
			<div class="panel-title text-center">
				<h1 class="title">Lista de Serviços</h1>
				<hr />
			</div>
		</div>
		<br>
		<br>
		<center>
			<table class="tabela" id="tabelaListarUsuario" border='0'
				style='width: 60%; text-align: center'>
				<thead>
					<tr>
						<th class="linha">ID</th>
						<th class="linha">NOME DO SERVIÇO</th>
						<th class="linha">TIPO DO SERVIÇO</th>
						<th class="linha">AÇÕES</th>
					</tr>
				</thead>
				<tr>
					<td class="linha2">${servico.id}</td>
					<td class="linha2">${servico.nome}</td>
					<td class="linha2">${servico.tipo}</td>
					<td class='linha2'><a href="removerServico?id=${servico.id}"
						onclick=" return confirm('Confirma exclusão do registro')"
						class="btn btn-danger" role="button">Remover</a></td>
				</tr>
			</table>
		</center>
	</header>
</body>
</html>
