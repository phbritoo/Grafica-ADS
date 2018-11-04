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
<body class="corbody">


	<ul class="nav nav-tabs">
		<li role="presentation" class="active"><a
			href="ExibirCadastrarADM">Cadastrar Usuarios</a></li>
		<li role="presentation"><a href="listarADM">Lista Usuarios</a></li>
		
	</ul>
	
	
	
	<div class="mensagemAlterar"> ${mensagem} </div>

	<hr>
	<h3 class="titulo">Alterar Produto</h3>
	<hr>
	
	<div class="container">

<div class="row">

    <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
    
             
        <form  role="form" action="alterarADM" method="post">
		
			<h2> Alterar Usuario <small></small></h2>
			<hr class="colorgraph">
			
			</br> 
			
			<input type="hidden" name="id" value="${usuario.id}">
			
	
			<div class="form-group">
				<input type="text" name="nome" value="${usuario.nome}" id="display_name" class="form-control input-lg" placeholder="Digite seu Nome" tabindex="3">
			</div>
			
			<div class="form-group">
				<input type="email" name="email" value="${usuario.email}" id="email" class="form-control input-lg" placeholder="Digite Seu Email" tabindex="4">
			</div>
			
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-6">
					<div class="form-group">
						<input type="password" name="senha" value="${usuario.senha}" id="password" class="form-control input-lg" placeholder="Digite Sua Senha" tabindex="5">
					</div>
				</div>
				
				<div class="col-xs-12 col-sm-6 col-md-6">
					<div class="form-group">
						<input type="password" name="senhaConfirme" id="password_confirmation" class="form-control input-lg" placeholder="Confirme Sua Senha" tabindex="6">
					</div>
				</div>
			</div>
		
			
			<hr class="colorgraph">
			<div class="row">
				<div class="col-xs-12 col-md-6"><input type="submit" value="Enviar" class="btn btn-primary btn-block btn-lg" tabindex="7"></div>
				<div class="col-xs-12 col-md-6"><input type="reset" class="btn btn-success btn-block btn-lg" value="Limpar"></div>
			</div>
		</form>
	</div>
</div>
	

</body>
</html>