import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Header,
  Map,
  NumberInput,
  Table,
  TextInput
} from '../components';
import {
  changeBalance,
  changeData,
  changeMarkers,
  changeSearch
} from '../reducer';
import { RootState } from '../store';
import { capitaizeString, sliceArray } from '../utils';
import { DataContainer, FilterContainer } from './styles';
import { TInputChange } from './types';

export const AppContent = () => {
  const {
    data: { defaultData, markers, data, filter }
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const newData = filter.search
      ? defaultData.filter(({ name }) =>
          name.toLowerCase().includes(filter.search.toLowerCase())
        )
      : defaultData;

    dispatch(changeData(sliceArray(newData, 10)));
    dispatch(changeMarkers(newData));
  }, [filter.search]);

  const onChangeSearch = ({ target }: TInputChange) =>
    dispatch(changeSearch(capitaizeString(target.value)));
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
          <Table data={data} limit={filter.balance} />
          <Map data={markers} filter={filter.search} balance={filter.balance} />
        </DataContainer>
      </Container>
    </Fragment>
  );
};
