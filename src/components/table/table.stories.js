import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './index';
import TableHeader from './table-header';
import TableFooter from './table-footer';
import TableCell from './table-cell';
import TableRow from './table-row';

import check from '../../img/check.png';

storiesOf('Basics|Table', module)
  .add('all tables', () =>
    <Table>
      <TableRow columns="3" body={false}>
        <TableHeader></TableHeader>
        <TableHeader bordered>LovData <b>PRO</b></TableHeader>
        <TableHeader bordered>LovData<b>.no</b></TableHeader>
      </TableRow>

      <TableRow columns="3">
        <TableCell>Statens personalhåndbok</TableCell>
        <TableCell bordered><img src={check} alt="check" /></TableCell>
        <TableCell bordered><img src={check} alt="check" /></TableCell>
      </TableRow>

      <TableRow columns="3">
        <TableCell>Statens personalhåndbok</TableCell>
        <TableCell bordered><img src={check} alt="check" /></TableCell>
        <TableCell bordered><img src={check} alt="check" /></TableCell>
      </TableRow>

      <TableRow columns="3">
        <TableCell>Historiske versjoner av gjeldende forskrifter</TableCell>
        <TableCell bordered><img src={check} alt="check" /></TableCell>
        <TableCell bordered><img src={check} alt="check" /></TableCell>
      </TableRow>

      <TableRow columns="3" body={false}>
        <TableFooter></TableFooter>
        <TableFooter bordered></TableFooter>
        <TableFooter bordered></TableFooter>
      </TableRow>
    </Table>
  );
