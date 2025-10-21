import { TouchableOpacityProps } from "react-native";
import { MaterialIcons} from "@expo/vector-icons"
import { Container, Title, Icon} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
}

export function TeamCard({ title, ...rest }: Props ){
  return (
    <Container{...rest}>
      <Icon name="groups" />

      <Title>{title}</Title>
    </Container>
  )
}