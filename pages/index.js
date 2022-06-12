import Head from "next/head";
import React from 'react';
import { ReactNode } from "react";
import data from "../data/Text.json";
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
} from "@chakra-ui/react";

import { Container } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function Home() {


  return (
    <>
      <section style={{position:"relative"}} >
        <Flex style={{ width: "85%", height: "500px" }} mx={"auto"} mt={50}>
          <Container maxW="container.sm" my={"auto"} style={{ zIndex: "10" }}>
            <Text fontSize="6xl">Sahel HAOUCHET</Text>
            <Text fontStyle="italic" fontSize="4xl">
              {data.jobs}
            </Text>
          </Container>
          <Container maxW="container.sm" my={"auto"} style={{ zIndex: "10" }}>
            <div>
              <Image src={"/images/logo2.svg"} alt={"logo"} w="450" pt="5" />
            </div>
          </Container>

          
          <div id="lines">
            <Container
            bg="#F5F94D"
            w="100px"
            h="2px"
            style={{
              position: "absolute",
              top: "0%",
              left: "45%",
              zIndex: "0",
            }}
            ></Container>
            <Container
            bg="#4DAEF9"
            w="100px"
            h="2px"
            style={{
              position: "absolute",
              top: "40%",
              left: "2%",
              zIndex: "0",
              transform: "rotate(90deg)",
            }}
            ></Container>

            <Container
            bg="#4DAEF9"
            w="200px"
            h="2px"
            style={{
              position: "absolute",
              top: "95%",
              right: "10%",
              zIndex: "0",
            }}
            ></Container>
            <Container
            bg="#F5F94D"
            w="100px"
            h="2px"
            style={{
              position: "absolute",
              top: "90%",
              right: "8%",
              zIndex: "0",
              transform: "rotate(90deg)",
            }}
            ></Container>

            <Container
            bg="#F5F94D"
            w="200px"
            h="3px"
            style={{
              position: "absolute",
              top: "105%",
              left: "20%",
              zIndex: "0",
            }}
            ></Container>
          </div>

          <div id="cubes">
            <Box
            border="4px"
            borderColor="#4DAEF9"
            w="70px"
            h="70px"
            style={{
              position: "absolute",
              top: "0%",
              left: "80%",
              zIndex: "0",
              transform: "rotate(70deg)",
            }}
            ></Box>
            <Box
            border="2px"
            borderColor="#F5F94D"
            w="20px"
            h="20px"
            style={{
              position: "absolute",
              top: "60%",
              left: "78%",
              zIndex: "0",
              transform: "rotate(70deg)",
            }}
            ></Box>
            <Box
            border="2px"
            borderColor="#F5F94D"
            w="20px"
            h="20px"
            style={{
              position: "absolute",
              top: "5%",
              left: "10%",
              zIndex: "0",
              transform: "rotate(55deg)",
            }}
            ></Box>
            <Box
            border="2px"
            borderColor="#4DAEF9"
            w="50px"
            h="50px"
            style={{
              position: "absolute",
              top: "80%",
              left: "15%",
              zIndex: "0",
              transform: "rotate(70deg)",
            }}
            ></Box>
            <Box
            border="1px"
            borderColor="#4DAEF9"
            w="15px"
            h="15px"
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              zIndex: "0",
              transform: "rotate(55deg)",
            }}
            ></Box>
            <Box
            border="1px"
            borderColor="#F5F94D"
            w="25px"
            h="25px"
            style={{
              position: "absolute",
              top: "95%",
              left: "40%",
              zIndex: "0",
              transform: "rotate(55deg)",
            }}
            ></Box>
            <Box
            border="4px"
            borderColor="#F5F94D"
            w="45px"
            h="45px"
            style={{
              position: "absolute",
              top: "25%",
              left: "25%",
              zIndex: "0",
              transform: "rotate(68deg)",
            }}
            ></Box>
             <Box
            border="4px"
            borderColor="#4DAEF9"
            w="45px"
            h="45px"
            style={{
              position: "absolute",
              top: "100%",
              left: "65%",
              zIndex: "0",
              transform: "rotate(20deg)",
            }}
            ></Box>
          </div> 
        </Flex>

        <a variant='ghost' style={{
              position: "absolute",
              top: "105%",
              left: "47%",
              zIndex: "10",
            }}
            href="#me">
          <ChevronDownIcon  w={10} h={10}/>
        </a>
      </section>

      <section style={{position:"relative", marginTop:"10%"}}  id="me">
        
        <a style={{
              position: "absolute",
              top: "2%",
              left: "47%",
              zIndex: "10",
            }}
            href="#home">
          <ChevronUpIcon  w={10} h={10}/>
        </a>
        


        <Flex style={{ width: "85%", height: "750px" }} mx={"auto"} >
          <Container w="300px" h="350px" bg="#4DAEF9"
          style={{
            position: "absolute",
            top: "13%",
            left: "15%",
            zIndex: "10",
            }}>
          </Container>

          <Container maxW="container.sm" my={"auto"} style={{ zIndex: "10"}}>
              <Image src="/images/me.jpg" alt={"me"} w="50%" h="50%" mx="auto" mb="5" />
          </Container>

          <Container w="300px" h="350px" bg="#F5F94D"
          style={{
            position: "absolute",
            top: "40%",
            left: "23%",
            zIndex: "0",
            }}>
          </Container>


          <Container maxW="container.sm" my={"auto"} style={{ zIndex: "10" }} w="100%" h="50%" bg="#171923">
            <Flex justifyContent="center"  color="white" flexDirection="column">
              <Text my="5">{data.presentation1}</Text>
              <Text my="5">{data.presentation2}</Text>
              <Text my="5">{data.presentation3}</Text>
              <Text my="5">{data.presentation4}</Text>
              <Text my="5">{data.presentation5}</Text>
            </Flex>
          </Container>
          <Container maxW="container.sm" my={"auto"} w="100%" h="50%" bg="#4A5568" 
          style={{
            position: "absolute",
            top: "30%",
            left: "52%", 
            zIndex: "0",
            }}>

          </Container>
        </Flex>

        <a style={{
              position: "absolute",
              top: "88%",
              left: "47%",
              zIndex: "10",
            }}
            href="#home">
          <ChevronDownIcon  w={10} h={10}/>
        </a>
      </section>


      
    </>
  );
}
