package runnerClassFile;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/features/StudentFeature.feature",
		glue= {"stepDefinition"},
	    plugin= {"pretty","html:test-output"})
public class runnerClass {

}
