package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static io.restassured.RestAssured.*;
import io.restassured.response.*;
import static org.hamcrest.Matchers.equalTo;


public class StudentStepDefinition {
	
	String URL = null; 
	Response response = null;	 
	
	@Given("^Rest URL \"([^\"]*)\" of the student API$")
	public void rest_URL_of_the_student_API(String arg1) throws Throwable {		
		URL = arg1; 
	}

	@When("^student API is fired$")
	public void student_API_is_fired() throws Throwable {
		response = given().when().get(URL);
	}

	@Then("^the API should come up with the success response$")
	public void the_API_should_come_up_with_the_success_response() throws Throwable {
	    response.then().assertThat().statusCode(200);
	}
	
	@Then("^the API response should be as expected and should contain \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_API_response_should_be_as_expected_and_should_contain_and(int id, String name, int mark) throws Throwable {
	    response.then().assertThat().body("id[0]", equalTo(id));
	    response.then().assertThat().body("name[0]", equalTo(name));
	    response.then().assertThat().body("mark[0]", equalTo(mark));
	}
	
}
