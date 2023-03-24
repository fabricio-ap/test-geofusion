import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: auto;
  height: calc(100vh - 9.75rem);
  padding: 3rem 5rem;

  background-color: ${({ theme }) => theme.background.default};
`;
