<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Gráfica Digital</title>
<!-- Bootstrap Core CSS -->
<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="css/Form.css" rel="stylesheet">
<!-- Theme CSS -->
<link href="css/creative.min.css" rel="stylesheet">
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
						href="<c:url value="index.jsp"></c:url>">Home</a></li>
					<li><a class="page-scroll"
						href="<c:url value="jsp/login.jsp"></c:url>">Login</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<header>
	<div class="header-content">
		<div class="header-content-inner">
			<h1 id="homeHeading">Bem Vindo</h1>
			<hr>
			<p>Gráfica Digital</p>
			<a href="<c:url value="jsp/login.jsp"></c:url>" class="btn btn-primary btn-xl page-scroll">
				Acessar </a>
		</div>
	</div>
	</header>

</body>
</html>