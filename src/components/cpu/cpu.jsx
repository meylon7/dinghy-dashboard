import React, { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Axios from "../../util/axiosInstance";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../Header";
import Data from '../../data/synthetic-data.json'

const CPU = () => {
  const [cpuData, setCpuData] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "left",
      align: "left",
      cellClassName: "name-column--cell",
    },
    {
      field: "state",
      headerName: "State",
      flex: 1,
      headerAlign: "left",
      align: "left",
    },
  ];
  const [cpudata, error, loading, refetch] = useAxios({
    axiosInstance: Axios,
    method: "GET",
    url:'',
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        'Accept': 'text/html'
      },
    },
  });
  return (
    <Box m="20px">
      <Header title="CPU" subtitle="CPU Util" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[150],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[150],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiButton-root":{
            color: '#579AAB'
          }
        }}
      >
        
          <DataGrid 
            rows={Data}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
      </Box>
    </Box>
  );
};

export default CPU;
