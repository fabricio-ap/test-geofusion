import { useEffect, useState } from 'react';
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

  useEffect(() => {
    setPage(0);
  }, [data]);

  const previousPage = () => data[page - 1] && setPage(page - 1);
  const nextPage = () => data[page + 1] && setPage(page + 1);
  const changePage = (value: number) => setPage(value);

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
                <TableBodyCell isLimit={revenue < (limit || 0)}>
                  {name}
                </TableBodyCell>
                <TableBodyCell isLimit={revenue < (limit || 0)}>
                  {revenue}
                </TableBodyCell>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </TableContent>
      <PageContainer>
        <PageButton onClick={previousPage}>{`<`}</PageButton>
        {pages &&
          pages.map((item) => (
            <PageButton
              key={item}
              selectedPage={item === page}
              onClick={() => changePage(item)}
            >
              {item + 1}
            </PageButton>
          ))}
        <PageButton onClick={nextPage}>{`>`}</PageButton>
      </PageContainer>
    </TableContainer>
  );
};
