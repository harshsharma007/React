import React, { useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// Register modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const App = () => {
  const [rowData] = useState([
    { name: "John Doe", age: 25, country: "USA" },
    { name: "John Doe", age: 25, country: "India" },
    { name: "Jane Smith", age: 30, country: "Canada" },
    { name: "Samuel Green", age: 35, country: "Australia" },
  ]);

  const getRowSpan = (params) => {
    const field = params.column.getColId();
    const currentRow = params.node;
    const currentData = currentRow.data;

    if (field !== "name" && field !== "age") return 1;

    const rowNodes = [];
    params.api.forEachNodeAfterFilterAndSort((node) => rowNodes.push(node));

    let groupStartIndex = currentRow.rowIndex;
    while (
      groupStartIndex > 0 &&
      rowNodes[groupStartIndex - 1]?.data?.name === currentData.name &&
      rowNodes[groupStartIndex - 1]?.data?.age === currentData.age
    ) {
      groupStartIndex--;
    }

    let spanCount = 0;
    for (let i = groupStartIndex; i < rowNodes.length; i++) {
      if (
        rowNodes[i]?.data?.name === currentData.name &&
        rowNodes[i]?.data?.age === currentData.age
      ) {
        spanCount++;
      } else {
        break;
      }
    }

    return currentRow.rowIndex === groupStartIndex ? spanCount : 0;
  };

  const [columnDefs] = useState([
    { 
      field: "name", 
      rowSpan: getRowSpan,
      cellClass: "merged-cell",
      filter: true 
    },
    { 
      field: "age", 
      rowSpan: getRowSpan,
      cellClass: "merged-cell",
      filter: true 
    },
    { field: "country", filter: true }
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        suppressRowTransform
        onGridReady={(params) => params.api.sizeColumnsToFit()}
      />
    </div>
  );
};

export default App;