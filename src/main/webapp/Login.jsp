<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Login</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" href="./Login.css">
</head>
<body>
	<h1>
		<img src="SC_Logo.png" alt="Schedule Builder" height="100">
	</h1>
	<div class="welcome">
		Welcome Back! 
	</div>
	<div class="login-page">
	  <div class="form">
	    <form class="login-form" action = "Login">
	      <input type="text" placeholder="username"/>
	      <input type="password" placeholder="password"/>
	      <button>login</button>
	      <p class="message">Not registered? <a href="Register.html">Create an account</a></p>
	    </form>
	  </div>
	</div>
	<h3 id="error"><%=session.getAttribute("message")%></h3>
</body>
</html>