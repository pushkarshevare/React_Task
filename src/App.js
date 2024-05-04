import React, { useEffect, useState } from 'react';
import './App.css';
import AllData from './components/AllData';
import FilterByMonth from './components/FilterByMonth';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

function App() {
  const [data, setData] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSelectChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  let componentToRender;

  switch (selectedComponent) {
    case 'FilterByMonth':
      componentToRender = <FilterByMonth jsondata={data} />;
      break;
      case 'BarChart':
        componentToRender = <BarChart chartData={data}/>;
        break;
      case 'PieChart':
        componentToRender = <PieChart chartData={data}/>;
        break;
      default:
      componentToRender = <AllData data={data} />;
  }

  return (
  
  <div className="App">
        <h2>Select Component</h2>
          <select value={selectedComponent} onChange={handleSelectChange}>
              <option value="AllData">All Data</option>
              <option value="FilterByMonth">Filter By Month</option>
              <option value="BarChart">Bar Chart</option>
              <option value="PieChart">Pie Chart</option>
          </select>
          {componentToRender}
  </div>
       
  );
}

export default App;
