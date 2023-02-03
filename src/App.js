import { useState } from "react";
import Header from "./components/Header/Header";
import Income from "./components/Income/Income";
import IncomeDetails from "./components/IncomeDetails/IncomeDetails";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [active, setActive] = useState(0);
  const [income, setIncome] = useState("");
  const [incomeType, setIncomeType] = useState("net");
  const [frequency, setFrequency] = useState("Weekly");
  const [saveIncomeData, setSaveIncomeData] = useState({
    netWeekly: 0,
    frequency: "Weekly",
  });

  const activeHandler = (tabId) => {
    setActive(tabId);
  };

  const incomeHandler = (event) => {
    setIncome(event.target.value);
  };
  const incomeTypeHandler = (type) => {
    setIncomeType(type);
  };
  const frequencyHandler = (event) => {
    setFrequency(event.target.value);
  };
  const calculateHandler = () => {
    let weeklyIncome = 0;
    let netWeekly = 0;

    switch (frequency) {
      case "Weekly":
        weeklyIncome = income;
        break;
      case "Fortnightly":
        weeklyIncome = income / 2;
        break;
      case "Monthly":
        weeklyIncome = income / 4;
        break;
      case "Annually":
        weeklyIncome = income / 48;
        break;
    }

    netWeekly = incomeType === "net" ? weeklyIncome : weeklyIncome * 0.7;

    const incomeData = {
      netWeekly,
      frequency,
    };

    if (income > 0) {
      setSaveIncomeData(incomeData);
  
      setActive(1);
  
      setIncome("");
      setIncomeType("");
      setFrequency("Weekly");
    }
  };

  return (
    <div className="app-position">
        <Navigation activeTab={active} activeHandler={activeHandler} />
        <div className="card">
          <Header />
          {active === 0 && (
            <Income
              incomeHandler={incomeHandler}
              incomeTypeHandler={incomeTypeHandler}
              frequencyHandler={frequencyHandler}
              calculateHandler={calculateHandler}
              income={income}
              incomeType={incomeType}
              frequency={frequency}
            />
          )}
          {active === 1 && <IncomeDetails saveIncomeData={saveIncomeData} />}
        </div>
    </div>
  );
}

export default App;
