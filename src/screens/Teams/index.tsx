import { View, Text, StyleSheet, Image } from "react-native"

import logoImg from "@assets/logo.png";

import { Container, Title } from "./styles"

export function Teams(){
    return(
        <Container>
            <Title>Groups</Title>
            <Image source={logoImg}/>
        </Container>
    )
}