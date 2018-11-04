<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title> Página Inicial </title>
    <!-- Bootstrap Core CSS -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/Form.css" rel="stylesheet">
    <!-- Custom Fonts -->
    <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
    <!-- Plugin CSS -->
    <link href="css/magnific-popup.css" rel="stylesheet">
    <!-- Theme CSS -->
    <link href="css/creative.min.css" rel="stylesheet">
      <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.0.min.js"></script> 
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.1/jquery.validate.min.js"></script> 
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
			<a class="navbar-brand page-scroll" href="ExibirListarUsuario">Listar
				Usuario</a> <a class="navbar-brand page-scroll"
				href="ExibirCadastroPerguntas">Cadastrar Perguntas</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse"
			id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav navbar-right">

				<li><a class="page-scroll"> <b>Bem vindo,
							${usuarioLogado.nome}</b></a></li> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
				<li><a class="page-scroll" href="logout"> Sair </a></li>

			</ul>
		</div>
		<!-- /.navbar-collapse -->
	</div>
	<!-- /.container-fluid --> </nav>

	<header>


	<div class="container">
		<div class="row main">
			<div class="panel-heading">
				<div class="panel-title text-center">
					<h1 class="title">Cadastro de Perguntas</h1>
					<hr />
				</div>

			</div>
			<div class="main-login main-center">

				<div class="mensagemCadastro">${mensagem}</div>

				<form class="form-horizontal" method="post" action="CadastrarPerguntas" id="meuForm">

					<div class="form-group">
						<label for="name" class="cols-sm-2 control-label">Pergunta</label>
							<div class="input-group">
								<span class="input-group-addon">
								<i class="glyphicon glyphicon-comment" aria-hidden="true"></i>
								</span> 
								<input type="text" class="form-control" name="descricao" id="descricao" placeholder="Digite sua Pergunta"/>
							</div>
						
					</div>

					

					<label for="" class="cols-sm-2 control-label">Disciplina</label> <select
						name="disciplina" id="disciplina"
						class="btn btn-primary btn-lg btn-block login-button">

						<option value="">Selecione</option>
						<c:forEach items="${listaDisciplina}" var="obj">
							<option value="${obj.id}">${obj.nome}</option>
						</c:forEach>
					</select> </br> <label for="" class="cols-sm-2 control-label">Nivel De
						Pergunta</label> <select name="nivel" id="nivel"
						class="btn btn-primary btn-lg btn-block login-button">

						<option value="">Selecione</option>
						<c:forEach items="${listaNivel}" var="obj">
							<option value="${obj.id}">${obj.nome}</option>
						</c:forEach>
					</select> </br>
					
					
					</br> 
					
					 <label for="" class="cols-sm-2 control-label">Resposta 1</label>

					
					<div class="input-group">
						<span class="input-group-addon"> 
						<input type="radio" name="optionsRadios" id="optionsRadios2" value="option1">
						</span> 
						<input type="text" name="" placeholder="Digite sua Resposta" autofocus="" class="form-control" >
					</div>


					 </br> 
					 
					 <label for="" class="cols-sm-2 control-label">Resposta 2</label>

					
					<div class="input-group">
						<span class="input-group-addon"> 
						<input type="radio" name="optionsRadios" id="optionsRadios2" value="option1">
						</span> 
						<input type="text" name="" placeholder="Digite sua Resposta" autofocus="" class="form-control" >
					</div>

					 </br> 
					 
					<label for="" class="cols-sm-2 control-label">Resposta 3</label>

				
					<div class="input-group">
						<span class="input-group-addon"> 
						<input type="radio" name="optionsRadios" id="optionsRadios2" value="option1">
						</span> 
						<input type="text" name="" placeholder="Digite sua Resposta" autofocus="" class="form-control" >
					</div>

					 </br>
					 
					  <label for="" class="cols-sm-2 control-label">Resposta 4</label>

					
					<div class="input-group">
						<span class="input-group-addon"> 
						<input type="radio" name="optionsRadios" id="optionsRadios2" value="option1">
						</span> 
						<input type="text" name="" placeholder="Digite sua Resposta" autofocus="" class="form-control" >
					</div>



                            </br> </br>
					
					
					
					<div class="form-group ">
						<button type="submit"
							class="btn btn-primary btn-lg btn-block login-button">Cadastrar</button>
					</div>

				</form>
			</div>
		</div>
	</div>


	</header>


</body>

</html>