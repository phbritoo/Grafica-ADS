<%@ page language="java" pageEncoding="UTF-8"
	contentType="text/html; charset=UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html class="no-js" lang="pt-br">
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="viewport"
	content="width=device-width,initial-scale=1,maximum-scale=1">
<link rel="icon" href="../images/icons/favicon.png">
<link rel="stylesheet" href="../css/main.css" type="text/css">
<title>Tele de Login</title>

</head>
<body>

	<div class="col-md-7">
		<form action="" method="post" class="featured__form" id="form">

			<h2 class="title">Efetuar Login</h2>

			<div class="col-md-12 col-sm-4">
				<input type="email" name="email" id="email" placeholder="Seu email"
					class="form-control required">
			</div>
			<div class="col-md-12 col-sm-4">
				<input type="password" name="senha" id="senha" maxlength="14"
					placeholder="Senha" class="form-control required ">
			</div>

			<div class="col-sm-12">
				<button type="submit" class="btn">Login</button>
			</div>

			<div class="col-sm-12">
				<br> <a href="<c:url value="../index.jsp"></c:url>"
					class="title"><center>Fazer Cadastro</center></a>
			</div>
		</form>
	</div>

	<script src="../js/scripts.js"></script>

</body>
</html>