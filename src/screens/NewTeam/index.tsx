import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { Button } from '@components/button';
import { Input } from '@components/Input';

import { Container, HeaderContainer, Content } from './styles';
import React from 'react';

export function NewTeam() {
  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton />

        <Highlight
          title='Nova Equipe'
          subtitle='Crie uma equipe e adicione membros'
        />
      </HeaderContainer>

      <Content>
        <Input
          placeholder='Nome da equipe'
        />

        <Button
          title='Criar equipe'
        />
      </Content>
    </Container>
  );
}