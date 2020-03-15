$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/StudentFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Student API Test",
  "description": "",
  "id": "student-api-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "To test the response body of the Student API",
  "description": "",
  "id": "student-api-test;to-test-the-response-body-of-the-student-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Rest URL \"\u003crestURL\u003e\" of the student API",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "student API is fired",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the API should come up with the success response",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "student-api-test;to-test-the-response-body-of-the-student-api;",
  "rows": [
    {
      "cells": [
        "restURL"
      ],
      "line": 9,
      "id": "student-api-test;to-test-the-response-body-of-the-student-api;;1"
    },
    {
      "cells": [
        "http://localhost:8080/StudentDetails"
      ],
      "line": 10,
      "id": "student-api-test;to-test-the-response-body-of-the-student-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "To test the response body of the Student API",
  "description": "",
  "id": "student-api-test;to-test-the-response-body-of-the-student-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Rest URL \"http://localhost:8080/StudentDetails\" of the student API",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "student API is fired",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the API should come up with the success response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/StudentDetails",
      "offset": 10
    }
  ],
  "location": "StudentStepDefinition.rest_URL_of_the_student_API(String)"
});
formatter.result({
  "duration": 290437700,
  "status": "passed"
});
formatter.match({
  "location": "StudentStepDefinition.student_API_is_fired()"
});
formatter.result({
  "duration": 1663424000,
  "status": "passed"
});
formatter.match({
  "location": "StudentStepDefinition.the_API_should_come_up_with_the_success_response()"
});
formatter.result({
  "duration": 36027800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "To test the response body of the Student API",
  "description": "",
  "id": "student-api-test;to-test-the-response-body-of-the-student-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Rest URL \"\u003crestURL\u003e\" of the student API",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "student API is fired",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the API response should be as expected and should contain \"\u003cid\u003e\", \"\u003cname\u003e\" and \"\u003cmark\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "student-api-test;to-test-the-response-body-of-the-student-api;",
  "rows": [
    {
      "cells": [
        "restURL",
        "id",
        "name",
        "mark"
      ],
      "line": 18,
      "id": "student-api-test;to-test-the-response-body-of-the-student-api;;1"
    },
    {
      "cells": [
        "http://localhost:8080/StudentDetails",
        "1",
        "Aravind",
        "95"
      ],
      "line": 19,
      "id": "student-api-test;to-test-the-response-body-of-the-student-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "To test the response body of the Student API",
  "description": "",
  "id": "student-api-test;to-test-the-response-body-of-the-student-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Rest URL \"http://localhost:8080/StudentDetails\" of the student API",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "student API is fired",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the API response should be as expected and should contain \"1\", \"Aravind\" and \"95\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/StudentDetails",
      "offset": 10
    }
  ],
  "location": "StudentStepDefinition.rest_URL_of_the_student_API(String)"
});
formatter.result({
  "duration": 132900,
  "status": "passed"
});
formatter.match({
  "location": "StudentStepDefinition.student_API_is_fired()"
});
formatter.result({
  "duration": 14308300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    },
    {
      "val": "Aravind",
      "offset": 64
    },
    {
      "val": "95",
      "offset": 78
    }
  ],
  "location": "StudentStepDefinition.the_API_response_should_be_as_expected_and_should_contain_and(int,String,int)"
});
formatter.result({
  "duration": 809258000,
  "status": "passed"
});
});