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
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                
                
                <a class="navbar-brand page-scroll" href="ExibirListarUsuario" >Listar Usuario</a>
                <a class="navbar-brand page-scroll" href="ExibirCadastroPerguntas" >Cadastrar Perguntas</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                   
                                        
                    <li>
                        <a class="page-scroll" > <b>Bem vindo,   ${usuarioLogado.nome}</b></a>
                    </li>
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    <li>
                        <a class="page-scroll" href="logout"> Sair </a>
                    </li>
                    
                    
           
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>



	<hr>
	<h3>Listar Usuarios</h3>
	<hr>
	
	<table border='1' style='width: 100%;'>
		<tr style='background-color: #E6E6E6; font-weight: bold;'>
			<td> ID </td>
			<td> NOME </td>
			<td> EMAIL </td>
			<td> SENHA </td>
			<td> TIPO USUARIO </td>
		</tr>

	<c:forEach var="user" items="${ExibirListarUsuario}">
		<tr>
	    	<td> ${user.id} </td>
	    	<td> ${user.nome} </td>
	    	<td> ${user.email} </td>
	    	<td> ${user.senha} </td>
	    	<td> ${user.tipoUsuarioFk} </td>
	    	<td>
	    		<a href="#?id=${produto.id}">Editar</a>
	    		<a href="#?id=${produto.id}">Remover</a>
	    	</td>
	    </tr>
	</c:forEach>
	</table>



</body>
</html>