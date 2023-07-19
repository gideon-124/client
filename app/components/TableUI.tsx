import React from "react";
import { TableContainer, Button } from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import { data } from "./RowData";

const TableUI = () => {
  interface DataRow {
    timestamp: string;
    purchaseid: number;
    email: string;
    name: string;
    source: string;
    status: string;
    select: string;
  }

  const columns = [
    {
      name: "TIMESTAMP",
      selector: (row: DataRow) => row.timestamp,
      sortable: true,
    },
    {
      name: "PURCHASE ID",
      selector: (row: DataRow) => row.purchaseid,
      sortable: true,
    },
    {
      name: "MAIL",
      selector: (row: DataRow) => row.email,
      sortable: true,
    },
    {
      name: "NAME",
      selector: (row: DataRow) => row.name,
      sortable: true,
    },
    {
      name: "SOURCE",
      selector: (row: DataRow) => row.source,
      sortable: true,
    }, 
    // since I customised the styles using react-data-table-component. I have used inline styles
    {
      name: "STATUS",
      selector: (row: DataRow) => row.status,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row: DataRow) => row.status === "Failed",

          style: {
            backgroundColor: "#db937d",
            maxWidth: "50px",
            color: "Red",
            borderRadius: "30px",
            boxSizing: "content-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "16px",
            marginRight: "50px",
            marginBottom: "10px",
          },
        },
        {
          when: (row: DataRow) => row.status === "Paid",
          style: {
            backgroundColor: "#8fe3a5",
            maxWidth: "50px",
            color: "Green",
            borderRadius: "30px",
            boxSizing: "content-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "16px",
            marginRight: "50px",
            marginBottom: "10px",
          },
        },
        {
          when: (row: DataRow) => row.status === "Waiting",
          style: {
            backgroundColor: "#f5dd07",
            maxWidth: "50px",
            color: "#A15C07",
            borderRadius: "30px",
            boxSizing: "content-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "16px",
            marginRight: "50px",
            marginBottom: "10px",
          },
        },
      ],
    },
    {
      name: "SELECT",
      selector: (row: DataRow) => <Button> {row.select}</Button>,
      // selector: (row: DataRow) =>  row.select,
      sortable: true,
    },
  ];

  return (
    <div>
      <TableContainer>
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationPerPage={7}
          paginationIconNext={"next"}
          paginationIconPrevious={"prev"}
          paginationRowsPerPageOptions={[7, 14, 21]}
        />
      </TableContainer>
    </div>
  );
};

export default TableUI;
