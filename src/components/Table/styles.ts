import styled from 'styled-components';
import { TPageButton, TTableBodyCell } from './types';

export const TableContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const TableContent = styled.table`
  width: 100%;
  box-shadow: ${({ theme }) =>
    `${theme.shadow.default.size} ${theme.shadow.default.color}`};
`;

export const TableHeaderCell = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 0.75rem;

  width: 50%;

  font-weight: bold;
  background-color: ${({ theme }) => theme.background.secondary};
`;

export const TableBodyCell = styled.td<TTableBodyCell>`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 0.75rem;
  color: ${({ theme, isLimit }) =>
    !isLimit ? theme.text.default : theme.text.custom};
  background-color: ${({ theme }) => theme.background.secondary};
`;

export const PageContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;
`;

export const PageButton = styled.button<TPageButton>`
  cursor: pointer;

  padding: 0.75rem;
  font-weight: ${({ selectedPage }) => (selectedPage ? 'bold' : 'normal')};

  background-color: ${({ theme }) => theme.background.secondary};
  border: 1px solid #dddddd;
  box-shadow: ${({ theme }) =>
    `${theme.shadow.default.size} ${theme.shadow.default.color}`};

  &:first-child {
    border-top-left-radius: 0.35rem;
    border-bottom-left-radius: 0.35rem;
  }

  &:last-child {
    border-top-right-radius: 0.35rem;
    border-bottom-right-radius: 0.35rem;
  }
`;
