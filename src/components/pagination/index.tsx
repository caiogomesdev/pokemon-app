import React, { useContext } from 'react';
import { AppContext } from '../../hooks/app-provider';
import { Container, Text, TextCount, Button, None } from './styles';

const Pagination: React.FC = () => {
  const context = useContext(AppContext);
  return (
    <Container>
      {context?.pagination.hasPrevious ? (
        <Button onPress={context?.pagination.previousPage}>
          <Text>{'<'}</Text>
        </Button>
      ) : (
        <None />
      )}

      <TextCount>
        {context?.pagination.offSet} de {context?.pagination.total}
      </TextCount>

      {context?.pagination.hasNext ? (
        <Button onPress={context?.pagination.nextPage}>
          <Text>{'>'}</Text>
        </Button>
      ) : (
        <None />
      )}
    </Container>
  );
};

export default Pagination;
