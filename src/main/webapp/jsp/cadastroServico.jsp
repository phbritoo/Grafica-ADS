<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Cadastro de Serviço</title>
<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="../css/Form.css" rel="stylesheet">
<link href="../css/creative.min.css" rel="stylesheet">
</head>

<body id="page-top">
	<c:import url="menu.jsp" />
	<header>
	<div class="container">
		<div class="row main">
			<div class="panel-heading">
				<div class="panel-title text-center">
					<h1 class="title">Cadastro de Serviço</h1>
					<hr />
				</div>

			</div>
			<div class="main-login main-center">
				<form class="form-horizontal" method="post"
					action="<c:url value="xxxxxxx"></c:url>" id="Form1">

					<div class="form-group">
						<label for="name" class="cols-sm-2 control-label">Servico</label>
						<div class="cols-sm-10">
							<div class="input-group">
								<span class="input-group-addon"><i
									class="glyphicon glyphicon-user" aria-hidden="true"></i></span> <input
									type="text" class="form-control" name="servico" id="nome"
									placeholder="Digite o nome do servico" required="required" autofocus="" />
							</div>
						</div>
					</div>

					<label for="" class="cols-sm-2 control-label">Servico</label> <select
						name="disciplina" id="disciplina"
						class="btn btn-primary btn-lg btn-block login-button">

						<option value="">Selecione</option>
					</select> </br> <label for="" class="cols-sm-2 control-label">Funcionario</label>
					<select name="nivel" id="nivel"
						class="btn btn-primary btn-lg btn-block login-button">

						<option value="">Selecione</option>
					</select> </br>

					<div class="form-group ">
						<button type="submit"
							class="btn btn-primary btn-lg btn-block login-button">Cadastrar Serviço</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	</header>
</body>
</html>
