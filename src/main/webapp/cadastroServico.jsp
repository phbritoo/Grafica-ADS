<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Cadastro de Funcionario</title>
<!-- Bootstrap Core CSS -->
<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="css/Form.css" rel="stylesheet">
<!-- Custom Fonts -->
<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link
	href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
	rel='stylesheet' type='text/css'>
<link
	href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic'
	rel='stylesheet' type='text/css'>
<!-- Plugin CSS -->
<link href="css/magnific-popup.css" rel="stylesheet">
<!-- Theme CSS -->
<link href="css/creative.min.css" rel="stylesheet">
<script type="text/javascript"
	src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.0.min.js"></script>
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.1/jquery.validate.min.js"></script>
</head>

<body id="page-top">
	<nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
	<div class="container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed"
				data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle navigation</span> Menu <i
					class="fa fa-bars"></i>
			</button>
			<a class="navbar-brand page-scroll" href="#page-top"> Gráfica
				Digital </a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse"
			id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav navbar-right">
				<li><a class="page-scroll"
					href="<c:url value="listarUsuarios.jsp"></c:url>">Listar
						Usuários</a></li>
				<li><a class="page-scroll"
					href="<c:url value="listarServico.jsp"></c:url>">Listar
						Serviços</a></li>
				<li><a class="page-scroll"
					href="<c:url value="cadastroFuncionario.jsp"></c:url>">Cadastrar
						Funcionario</a></li>
				<li><a class="page-scroll"
					href="<c:url value="cadastroServico.jsp"></c:url>">Cadastrar
						Serviço</a></li>
			</ul>
		</div>
	</div>
	</nav>
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
