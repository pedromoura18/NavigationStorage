import { Container, Content, } from "./styles"
import { Header } from "@components/header";
import { HeaderContainer } from "@components/header/styles";
import { Highlight } from "@components/highlight";
import { TeamCard } from "@components/TeamCard";

export function Teams(){
    return(
        <Container>
            <HeaderContainer>
                <Header />

                <Highlight
                    title="Equipes" 
                    subtitle="Preparem suas equipes"
                    />
            </HeaderContainer>

          <Content>
            <TeamCard>
                
            </TeamCard>

          </Content>
        </Container>
    )
}