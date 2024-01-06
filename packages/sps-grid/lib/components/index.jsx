import React from 'react';
import {
 TableContainer, Table, TableHead, TableBody, TableFoot, TableTr, TableTh,
 TableTd
} from './styles';

function GridTable() {
 return (<TableContainer id="table-scroll" className="table-scroll">
  <Table id="main-table" className="main-table table">
   <TableHead className="thead">
    <TableTr className="tr">
     <TableTh className="th">Header 1</TableTh>
     <TableTh className="th">Header 2</TableTh>
     <TableTh className="th">Header 3 with longer content</TableTh>
     <TableTh className="th">Header 4 text</TableTh>
     <TableTh className="th">Header 5</TableTh>
     <TableTh className="th">Header 6</TableTh>
     <TableTh className="th">Header 7</TableTh>
     <TableTh className="th">Header 8</TableTh>
    </TableTr>
   </TableHead>
   <TableBody className="tbody">
   <TableTr className="tr">
     <TableTh className="th">First top Column</TableTh>
     <TableTd className="td">Cell content
      test </TableTd>
     <TableTd className="td"><a href="#">Cell content longer</a></TableTd>
     <TableTd className="td">Cell content with more content and more content Cell </TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td"><a href="#">Cell content longer</a></TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
    <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
    <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
    <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
    <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
    <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
    <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
    <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
    <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
    <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   <TableTr className="tr">
     <TableTh className="th">Left Column<br />
      last</TableTh>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content longer</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
     <TableTd className="td">Cell content</TableTd>
    </TableTr>
   </TableBody>
   <TableFoot className="tfoot">
    <TableTr className="tr">
     <TableTh className="th">Footer 1</TableTh>
     <TableTd className="td">Footer 2</TableTd>
     <TableTd className="td">Footer 3</TableTd>
     <TableTd className="td">Footer 4</TableTd>
     <TableTd className="td">Footer 5</TableTd>
     <TableTd className="td">Footer 6</TableTd>
     <TableTd className="td">Footer 7</TableTd>
     <TableTd className="td">Footer 8</TableTd>
    </TableTr>
   </TableFoot>
  </Table>
 </TableContainer>)
}
export default GridTable;