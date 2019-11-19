<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>My Profile Page</title>
</head>
<body>
<h2> <%= session.getAttribute("name") %> </h2>
<h3> <%= session.getAttribute("major") %> </h3>
<h4> <%= session.getAttribute("gradyear") %> </h4>
</body>
</html>