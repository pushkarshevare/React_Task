import React, {  useState } from "react";
import AllData from "./AllData";



const FilterByMonth = ({ jsondata }) => {
    const [selectedMonth, setSelectedMonth] = useState(3);

    const handleSelectChange = (event) => {
        setSelectedMonth(event.target.value);
    };
        let componentToRender;
        

        const filterData = jsondata.filter(item => {
            const date = new Date(item.dateOfSale);
            const saleMonth = date.getMonth() + 1;
            return saleMonth === parseInt(selectedMonth);
        });
        componentToRender = <AllData data={filterData} />;
    return(
        <div>
        <h2>Select Month</h2>
    
          <select value={selectedMonth} onChange={handleSelectChange}>
              <option value="" >Select Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
          </select>
          {componentToRender}
  </div>
    )
}

export default FilterByMonth;