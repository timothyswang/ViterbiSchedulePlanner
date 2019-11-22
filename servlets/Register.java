

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mongodb.*;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import static com.mongodb.client.model.Filters.*;
import static com.mongodb.client.model.Updates.*;
import com.mongodb.client.model.UpdateOptions;
import com.mongodb.client.result.*;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;


/**
 * Servlet implementation class Register
 */
@WebServlet("Register")
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Register() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	
		String name = request.getParameter("name");
		String password = request.getParameter("password");
		String email = request.getParameter("email");
		String major = request.getParameter("major");
		String gradyear = request.getParameter("gradyear");
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		MongoClient mongoClient = MongoClients.create();
		MongoDatabase database = mongoClient.getDatabase("ViterbiSchedule");
		MongoCollection<Document> majorsCollection = database.getCollection("Majors");
		MongoCollection<Document> usersCollection = database.getCollection("Users");
		
		Document document = majorsCollection.find(eq("_id", major)).first();
		
		Document newDocument = new Document("_id", email)
			.append("name", name)
			.append("email", email)
			.append("password",password)
			.append("major", major)
			.append("gradyear", gradyear)
			.append("major", document.get("schedule"));
		usersCollection.insertOne(newDocument);
		
		
		RequestDispatcher dispatch = getServletContext().getRequestDispatcher("/schedule.jsp");
		dispatch.forward(request,response);
	}
	


	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
	Block<Document> printBlock = new Block<Document>() {
	       public void apply(final Document document) {
	           System.out.println(document.toJson());
	       }
	};

}
