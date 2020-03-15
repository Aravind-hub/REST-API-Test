Feature: Student API Test

  Scenario Outline: To test the response body of the Student API
    Given Rest URL "<restURL>" of the student API
    When student API is fired
    Then the API should come up with the success response

    Examples: 
      | restURL                              |
      | http://localhost:8080/StudentDetails |

  Scenario Outline: To test the response body of the Student API
    Given Rest URL "<restURL>" of the student API
    When student API is fired
    Then the API response should be as expected and should contain "<id>", "<name>" and "<mark>"

    Examples: 
      | restURL                              | id | name    | mark |
      | http://localhost:8080/StudentDetails |  1 | Aravind |   95 |
      