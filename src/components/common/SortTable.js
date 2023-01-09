import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const SortTable = props => {
  const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
  };

  const { items, requestSort, sortConfig } = useSortableData(props.data);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }

    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div className="table-rep-plugin">
      <div className="table-responsive mb-0" data-pattern="priority-columns" >
        <Table id="sort-table" className="table">
          <Thead>
            <Tr>
              {props.columns.map(col => (
                <Th key={col.id} data-priority={col.id}>
                  <span className="avenir-h">{col.Header}</span>
                  <button type="button" onClick={() => requestSort(col.accessor)} className={getClassNamesFor(col.accessor)}>
                    <span className="avenir-h"></span>
                  </button>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {items.map(data => (
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

export default SortTable;