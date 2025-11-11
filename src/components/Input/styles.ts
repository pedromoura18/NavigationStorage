import { css } from "styled-components";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
flex: 1;
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_500};
    background-color: ${theme.COLORS.GRAY_100};
  `}
  
    border-radius: 8px;
    border-width: 1px;
    padding: 16px;
`;