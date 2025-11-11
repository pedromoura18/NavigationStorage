import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { Tab } from '@components/Tab';
import { Tag } from '@components/Tag';
import { Button } from '@components/button';

import { Container, HeaderContainer, Content, InputContainer, Tabs } from './styles';

export function AddMembers() {
  const [tab, setTab] = useState('Titular');

  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton />

        <Highlight
          title='Equipes'
          subtitle='Adicione os titulares e reservas'
        />
      </HeaderContainer>

      <Content>
        <InputContainer>
          <Input
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            placeholder='Adicione um membro'
          />

          <ButtonIcon
            borderRadius='RIGHT'
            icon='add-circle-outline'
          />
        </InputContainer>

        <Tabs>
          <FlatList
            data={['Titular', 'Reserva']}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Tab
                title={item}
                isActive={item === tab}
                onPress={() => setTab(item)}
              />
            )}
            horizontal
          />

          <Tag text={0} />
        </Tabs>
        <Button
          title='Deletar equipe'
          type='SECONDARY'
        />
      </Content>
    </Container>
  );
}