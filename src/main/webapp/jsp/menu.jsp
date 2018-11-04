<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

	<nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span> Menu <i
						class="fa fa-bars"></i>
				</button>
				<a class="navbar-brand page-scroll" href="#page-top"> Gráfica
					Digital </a>
			</div>
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					<li><a class="page-scroll"
						href="<c:url value="listarFuncionarios.jsp"></c:url>">Listar
							Funcionários</a></li>
					<li><a class="page-scroll"
						href="<c:url value="listarServicos.jsp"></c:url>">Listar
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