import styled from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons"

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: center;
`;

export const Logo = styled.Image`

`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_700
}))``;

export const HeaderContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
    padding-top: 54px;
    padding-bottom: 24px;
`;