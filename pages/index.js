import Head from 'next/head'

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Image,
  Spacer,
  Text,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
} from '@chakra-ui/react';

import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
    
    <Flex style={{width:"85%", height:"500px"}} mx={"auto"}>
      
      <Container maxW='container.sm' my={"auto"} style={{zIndex:"10"}}>
        <Text fontSize='6xl'>Sahel HAOUCHET</Text>
        <Text fontStyle="italic" fontSize='4xl'>Web Developer & Data Analyst</Text>
      </Container>
      <Container maxW='container.sm' my={"auto"} style={{zIndex:"10"}}>
        <div>
          <Image src={'/images/logo2.svg'} alt={'logo'} w="450" pt="5"/>
        </div>
      </Container>


      <Container bg="#F5F94D" w="100px" h="2px" style={{position:"absolute", top:"15%", left:"45%", zIndex:"0"}}></Container>
      <Container bg="#4DAEF9" w="100px" h="2px" style={{position:"absolute", top:"50%", left:"2%", zIndex:"0", transform:"rotate(90deg)"}}></Container>

      <Container bg="#4DAEF9" w="200px" h="2px" style={{position:"absolute", top:"95%", right:"10%", zIndex:"0"}}></Container>
      <Container bg="#F5F94D" w="100px" h="2px" style={{position:"absolute", top:"90%", right:"8%", zIndex:"0", transform:"rotate(90deg)"}}></Container>

      <Container bg="#F5F94D" w="200px" h="3px" style={{position:"absolute", top:"105%", left:"20%", zIndex:"0"}}></Container>

      <Box border='2px' borderColor='#4DAEF9' w="20px" h="20px" style={{position:"absolute", top:"20%", left:"80%", zIndex:"0", transform:"rotate(70deg)"}}></Box>
      <Box border='2px' borderColor='#F5F94D' w="30px" h="30px" style={{position:"absolute", top:"98%", left:"80%", zIndex:"0", transform:"rotate(25deg)"}}></Box>
      <Box border='2px' borderColor='#F5F94D' w="20px" h="20px" style={{position:"absolute", top:"20%", left:"10%", zIndex:"0", transform:"rotate(55deg)"}}></Box>
      <Box border='2px' borderColor='#4DAEF9' w="20px" h="20px" style={{position:"absolute", top:"80%", left:"15%", zIndex:"0", transform:"rotate(70deg)"}}></Box>
      <Box border='2px' borderColor='#4DAEF9' w="15px" h="15px" style={{position:"absolute", top:"45%", left:"50%", zIndex:"0", transform:"rotate(55deg)"}}></Box>
      <Box border='2px' borderColor='#F5F94D' w="25px" h="25px" style={{position:"absolute", top:"95%", left:"40%", zIndex:"0", transform:"rotate(55deg)"}}></Box>
      

      
    </Flex>
    </>
  );
    
}
