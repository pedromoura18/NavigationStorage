import styled from "styled-components/native";
import { MaterialIcons} from "@expo/vector-icons"

export const Container = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 6px;
    border-width: 1px;
    border-style: ${({ theme }) => theme.COLORS.GRAY_200};

    flex-direction: row;
    align-items: center;
    padding: 32px 24px;
    margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
    size: 32,
    color: theme.COLORS.GRAY_500,
    weight:'fill'
}))`
    margin-right: 20px;
`;