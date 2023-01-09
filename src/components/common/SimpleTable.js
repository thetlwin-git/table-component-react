import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const SimpleTable = props => {  
  return (
    <div className="table-rep-plugin">
      <div className="table-responsive mb-0" data-pattern="priority-columns" >
        <Table id="simple-table" className="table">
          <Thead>
            <Tr>
              {props.columns.map(col => (
                <Th key={col.id} data-priority={col.id}>
                  <span className="avenir-h">{col.Header}</span>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {props.data.map(data => (
              <Tr key={data.id}>
                <Td><span className="avenir-b">{data.name}</span></Td>
                <Td><span className="avenir-b">{data.position}</span></Td>
                <Td><span className="avenir-b">{data.age}</span></Td>
                <Td><span className="avenir-b">{data.office}</span></Td>
                <Td><span className="avenir-b">{data.startDate}</span></Td>
                <Td><span className="avenir-b">{data.salary}</span></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}

export default SimpleTable;