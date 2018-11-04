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
                <a class="navbar-brand page-scroll" href="#page-top"> Gráfica Digital </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a class="page-scroll" href="<c:url value="ndex.jsp"></c:url>">Home</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="ExibirLogin">Login</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="ExibirCadastrarUsuario">Cadastre-se</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#contact">Quem Somos</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

	<header>
      
        	<div class="container">
				<div class="row main">
					<div class="panel-heading">
	               		<div class="panel-title text-center">
	               			
	               			<h1 class="title"> Login </h1>
	               			<hr />
	               		</div>
	              
	             	</div> 
				<div class="main-login main-center">
		
			<div style="color: red;" align="center"> <h3> ${msg} </h3> </div>
			
		<p>
		
				<form class="form-horizontal" method="post" action="efetuarLogin" id="Form1">


						<div class="form-group">
							<label for="email" class="cols-sm-2 control-label">E-mail</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i></span>
									<input type="email" class="form-control" name="email" id="email"  placeholder="Digite seu E-mail"required="required"autofocus=""/>
								</div>
							</div>
						</div>

						

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">Senha</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
									<input type="password" class="form-control" name="senha" id="senha"  placeholder="Digite sua senha" required="required"autofocus=""/>
								</div>
							</div>
						</div>
						
						
						<div class="form-group ">
							<button type="submit" class="btn btn-primary btn-lg btn-block login-button"> Entrar </button>
						</div>
						

				</form>
			
				</div>
			</div>
		</div>			

	</header>
	
</body>
</html>