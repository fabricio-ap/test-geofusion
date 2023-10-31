import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Header,
  Map,
  NumberInput,
  Table,
  TextInput
} from '../components';
import { changeBalance, changeSearch } from '../reducer';
import { RootState } from '../store';
import { capitalizeString } from '../utils';
import { filterData } from './helpers';
import { DataContainer, FilterContainer } from './styles';
import { TInputChange } from './types';

export const AppContent = () => {
  const {
    data: { data, filter }
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const { filteredData, markers } = filterData(data, filter.search);

  const onChangeSearch = ({ target }: TInputChange) =>
    dispatch(changeSearch(capitalizeString(target.value)));

  const onChangeBalance = ({ target }: TInputChange) =>
    dispatch(changeBalance(target.value));

  return (
    <Fragment>
      <Header />
      <Container>
        <FilterContainer>
          <TextInput
            value={filter.search}
            placeholder="Pesquisar"
            onChange={onChangeSearch}
          />
          <NumberInput
            value={filter.balance}
            label="Faturamento mínimo esperado"
            onChange={onChangeBalance}
          />
        </FilterContainer>
        <DataContainer>
          <Table data={filteredData} limit={filter.balance} />
          <Map data={markers} filter={filter.search} balance={filter.balance} />
        </DataContainer>
      </Container>
    </Fragment>
  );
};
