import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell } from "sancho";

export default {
  title: "UI Component",
};

export const TableComponent = () => [
  <Table key="jsx" minWidth="600px">
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Height</TableCell>
        <TableCell>Sex</TableCell>
        <TableCell>Location</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Ben McMahen</TableCell>
        <TableCell>30</TableCell>
        <TableCell>180</TableCell>
        <TableCell>Male</TableCell>
        <TableCell>BC</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>James Bond</TableCell>
        <TableCell>53</TableCell>
        <TableCell>185</TableCell>
        <TableCell>Male</TableCell>
        <TableCell>England</TableCell>
      </TableRow>
    </TableBody>
  </Table>,
];
