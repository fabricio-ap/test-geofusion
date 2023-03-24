import React, { useState } from 'react';
import {
  PageButton,
  PageContainer,
  TableBodyCell,
  TableContainer,
  TableContent,
  TableHeaderCell
} from './styles';
import { TTable } from './types';

export const Table = ({ data, limit }: TTable) => {
  const [page, setPage] = useState(0);
  const pages = data.map((value, index) => index);

  const showData = Boolean(data.length);

  return (
    <TableContainer>
      <TableContent>
        <thead>
          <tr>
            <TableHeaderCell>Loja</TableHeaderCell>
            <TableHeaderCell>Faturamento</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {showData ? (
            data[page].map(({ name, revenue }) => (
              <tr key={name}>
                <TableBodyCell isLimit={revenue < (limit || 0)}>{name}</TableBodyCell>
                <TableBodyCell isLimit={revenue < (limit || 0)}>{revenue}</TableBodyCell>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </TableContent>
      <PageContainer>
        <PageButton onClick={() => data[page - 1] && setPage(page - 1)}>{`<`}</PageButton>
        {pages &&
          pages.map((item) => (
            <PageButton key={item} selectedPage={item === page} onClick={() => setPage(item)}>
              {item + 1}
            </PageButton>
          ))}
        <PageButton onClick={() => data[page + 1] && setPage(page + 1)}>{`>`}</PageButton>
      </PageContainer>
    </TableContainer>
  );
};
