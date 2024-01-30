import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { TableHead } from '@mui/material';

import CustomizedDialogs from './Dialog';
import ComboBox from './MultiSelect';

export function TablePaginationActions(props, { info }) {
  console.log(info)
  // const rows = info 
  // console.log(rows)


  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

// function createData(name, calories, fat) {
//   return { name, calories, fat };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7),
//   createData('Donut', 452, 25.0),
//   createData('Eclair', 262, 16.0),
//   createData('Frozen yoghurt', 159, 6.0),
//   createData('Gingerbread', 356, 16.0),
//   createData('Honeycomb', 408, 3.2),
//   createData('Ice cream sandwich', 237, 9.0),
//   createData('Jelly Bean', 375, 0.0),
//   createData('KitKat', 518, 26.0),
//   createData('Lollipop', 392, 0.2),
//   createData('Marshmallow', 318, 0),
//   createData('Nougat', 360, 19.0),
//   createData('Oreo', 437, 18.0),
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable({ info }) {

  // const[dialog,setDialogue] =React.useState(false)

  let rows = info
  //  console.table(rows)
  //  const columns = rows.map((item)=>(
  //   Object.keys(item).map((eachKey)=>{
  //     return eachKey
  //   })
  //  ))
  // console.log(rows)

  const columns = info.map((item) => {
    return Object.keys(item)
      .map((eachKey) => ({
        headerName: eachKey.toUpperCase(),
      }))
  })

  const keys = Object.keys(info[0])
  console.log(keys)




  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (


    <TableContainer component={Paper} sx={{ margin: "auto", width: "85%" }} >
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {columns[0].map((eachKey) => {
              // console.log(eachKey)
              return (
                <TableCell align="center">{eachKey.headerName} </TableCell>
              )
            })}
            <TableCell align="center">  Details  </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (

            <TableRow key={row.index}>
              {keys.map((key) => (
                <TableCell align='center' key={key}> {row[key]} </TableCell>
              ))}

              <TableCell style={{ width: 160 }} align="left">
                <CustomizedDialogs data={rows[index]} />
              </TableCell>

            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={3} />
            </TableRow>
          )}

        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}






// import { DataGrid } from '@mui/x-data-grid';

// // const columns = [
// //   { field: 'id', headerName: 'ID', width: 70 },
// //   { field: 'name', headerName: 'First name', width: 130 },
// //   { field: 'profession', headerName: 'Profession', width: 130 },
// //   { field: 'age',headerName: 'Age',type: 'number',width: 90,},
// //   { field: 'alterEgo',headerName: 'Alter Name',width: 160,
// //     // valueGetter: (params) =>
// //     //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
// //   },
// // ];

// export default function DataTable({info}) {
//     // console.log(info)
//     const rows =info
//     console.log(rows)
//     const columns = info.map((item)=>{
//        return Object.keys(item)
//        .map((eachKey)=>({
//         field:eachKey.toLowerCase(),
//         headerName:eachKey.toUpperCase(),
//         width:130
//       }))
//     })
//     console.log(columns)
//   return (
//     <div style={{ height: 400, width: '75%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns[0]}
//         initialState={{
//         pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         // checkboxSelection
//       />
//     </div>
//   );
//
//  }