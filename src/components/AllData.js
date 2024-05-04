import React from "react";

const AllData = ({data}) =>{
    return( 
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Sold</th>
              <th>Date Of Sale</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.sold.toString()}</td>
                <td>{item.dateOfSale}</td>
                <td>{item.image}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default AllData;