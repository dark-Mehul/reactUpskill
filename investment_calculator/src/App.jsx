import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 5,

});
const inputIsValid = userInput.duration >= 1;

function handleChange(identifier, newValue) {

    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [identifier]: +newValue,
        };
    });

}
  return (
    <>
    <Header />
   <UserInput onChangeInput={handleChange} userInput={userInput}/>
   {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Result input={userInput} />}
   </>
  );
}

export default App
