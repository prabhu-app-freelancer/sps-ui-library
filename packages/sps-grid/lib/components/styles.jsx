import styled from 'styled-components';

export const TableContainer = styled.div`
&.table-scroll {
 position: relative;
 width:100%;
 z-index: 1;
 margin: auto;
 overflow: auto;
 height: 350px;
}

.table-wrap {
 position: relative;
}

/* safari and ios need the tfoot itself to be position:sticky also */
&.table-scroll .tfoot,
&.table-scroll .tfoot .th,
&.table-scroll .tfoot .td {
 position: -webkit-sticky;
 position: sticky;
 bottom: 0;
 background: #666;
 color: #fff;
 z-index:4;
}

a:focus {
 background: red;
} /* testing links*/

.th:first-child {
 position: -webkit-sticky;
 position: sticky;
 left: 0;
 z-index: 2;
 background: #ccc;
}
.thead .th:first-child,
.tfoot .th:first-child {
 z-index: 5;
}
`;

export const Table = styled.div`
 &.table{
  width: 100%;
  min-width: 1680px;
  margin: auto;
  border-collapse: separate;
  border-spacing: 0;
  display: table;
 }
`;

export const TableHead = styled.div`
 &.thead {
  display: table-header-group;

  .th {
   background: #333;
   color: #fff;
   position: -webkit-sticky;
   position: sticky;
   top: 0;
  }
 }
`;

export const TableBody = styled.div`
 &.tbody {
  display: table-row-group;
 }
`;

export const TableFoot = styled.div`
 &.tfoot {
  display: table-footer-group;
 }
`;

export const TableTr = styled.div`
 &.tr {
  display: table-row;
 }
`;

export const TableTh = styled.div`
 &.th {
  padding: 5px 10px;
  border: 1px solid #000;
  background: #fff;
  vertical-align: top;
  display: table-cell;
 }
`;

export const TableTd = styled.div`
 &.td {
  padding: 5px 10px;
  border: 1px solid #000;
  background: #fff;
  vertical-align: top;
  display: table-cell;
 }
`;
