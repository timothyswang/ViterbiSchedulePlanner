<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="HomePage.css">
	<meta charset="UTF-8">
<style>
* {
  box-sizing: border-box;
}
.menu {
  float: left;
  width: 20%;
}
.button {
  padding: 8px;
  margin-top: 7px;
  background-color: white;
  border-bottom: 1px solid #f1f1f1;
}
.main {
  float: left;
  width: 60%;
  padding: 0 20px;
  background-color: #c70e3a;
  overflow: hidden;
}


@media only screen and (max-width:800px) {
  /* For tablets: */
  .main {
    width: 80%;
    padding: 0;
  }
  .right {
    width: 100%;
  }
}
@media only screen and (max-width:500px) {
  /* For mobile phones: */
  .menu, .main, .right {
    width: 100%;
  }
}
</style>
</head>
<body style="font-family:Verdana; background-color:#ba0b35;">
<div class="header">
	<table>
		<tr>
			<td><img class="logo" src="ScheduleBuilderLogo.png" style="width:350px; height:200px;"/></td>
			
		</tr>
	</table>
	<form id="formA"><button id="Login">Login</button></form>
	<form id="formB"><button id="Register">Register</button></form>
				
</div>

<div style="background-color:#f1f1f1;padding:15px;">
  <p>This is a website made to help Computer Science majors at the University of Southern California build their own schedules.This website will guide you through your course requirements and help you build the perfect schedule!</p>
  <br>
  <br>
  <h4> Please Select Your Major:
</div>
<div style="overflow:auto">
  <div class="menu">
    <div class="button">CSCI</div>
    <div class="button">CS Games</div>
    <div class="button">CECS</div>
    <div class="button">CSBA</div>
    <form id="formC"><button id="Schedule">Schedule!</button></form>
  </div>
  

</body>
</html>