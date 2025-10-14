import { TouchableOpacityProps } from "react-native";
import { MaterialIcons} from "@expo/vector-icons"
import { Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
}

export function TeamCard() {
  return (
    <Container>
      <MaterialIcons name="groups" />

      <Title>Equipe 1</Title>
    </Container>
  )
}