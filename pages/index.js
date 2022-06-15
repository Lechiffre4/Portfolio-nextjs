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
  HStack,
} from "@chakra-ui/react";

import { Container } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  const SkillContainer = useColorModeValue("gray.300", "gray.700")

  const PresentationContainer = useColorModeValue("gray.300", "gray.700")

  return (
    <>
      <section style={{ position: "relative" }}>
        <Flex style={{ width: "85%", height: "500px" }} mx={"auto"} mt={50}>
          <Container maxW="container.sm" my={"auto"} style={{ zIndex: "10" }} className={"Home-Text"}>
            <Text fontSize="50px" className={"Home-Text"}>Sahel HAOUCHET</Text>
            <Text fontStyle="italic" fontSize="40px" className={"Home-Text"}>
              {data.jobs}
            </Text>
          </Container>
          <Container maxW="container.sm" my={"auto"} style={{ zIndex: "10" }} className={"Home-logo"}>
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
      </section>

      <section style={{ marginTop: "20vh" }} id="me">

        <Flex
          style={{ width: "85%", height: "fit-content" }}
          className={"presentation-container"}
          mx={"auto"}
        >
          <Container maxW="container.sm" style={{position: "relative"}} my={"auto"}>
            <Box bg="#4DAEF9" className="presentation-BlueBox"></Box>
            <Image
              src="/images/me.JPG"
              style={{ zIndex: "10" }}
              alt={"me"}
              w="22vw"
              className="presentation-Image"
              mx="auto"
              mb="5"
            />
            <Box bg="#F5F94D" className="presentation-YellowBox"></Box>
          </Container>
          

          <Container
            my={"auto"}
            style={{
              zIndex: "10",
              height: "fit-content",
              position: "relative",
              transformStyle: "preserve-3d",
            }}
            w="100%"
            bg={PresentationContainer}
            className="presentation-Text"
          >
            <Flex justifyContent="center" flexDirection="column">
              <Text my="5">{data.presentation1}</Text>
              <Text my="5">{data.presentation2}</Text>
              <Text my="5">{data.presentation3}</Text>
              <Text my="5">{data.presentation4}</Text>
              <Text my="5">{data.presentation5}</Text>
            </Flex>
          </Container>
        </Flex>
      </section>

      <section style={{ position: "relative", marginTop: "10%" }} id="skills">
        <Container
          w={"fit-content"}
          px={"10%"}
          py={2}
          bg={SkillContainer}
          fontStyle={"italic"}
          textAlign={"center"}
          alignContent={"center"}
          style={{
            zIndex: "15",
            fontSize: "2.5rem",
          }}
        >
          <Text>{data.skills}</Text>
        </Container>

        <Flex style={{ width: "fit-content", height: "fit-content", position:"relative" }} mx={"auto"} my={20}>
          <Box bg="#F5F94D" className="skills-YellowBox"></Box>
          <Container
            w={"fit-content"}
            h={"fit-content"}
            pb={5}
            my={7}
            mx={10}
            bg={SkillContainer}
          >
            <Flex direction={"column"} mt={"7"}>
              <HStack justifyContent={"center"} my={"2"}>
                <Image
                  src="/images/Skills/cplusplus.png"
                  w="10vw"
                  maxWidth={"60px"}
                />
                <Image
                  src="/images/Skills/csharp.png"
                  w="10vw"
                  maxWidth={"60px"}
                />
                <Image
                  src="/images/Skills/python.png"
                  w="10vw"
                  maxWidth={"60px"}
                />
                <Image src="/images/Skills/js.png" w="10vw" maxWidth={"60px"} />
              </HStack>
              <HStack justifyContent={"center"} my={"2"}>
                <Image
                  src="/images/Skills/html.png"
                  w="12vw"
                  maxWidth={"82px"}
                />
                <Image src="/images/Skills/css.png" w="8vw" maxWidth={"50px"} />
                <Image
                  src="/images/Skills/django.png"
                  w="12vw"
                  maxWidth={"80px"}
                />
                <Image
                  src="/images/Skills/Firebase.png"
                  w="10vw"
                  maxWidth={"60px"}
                />
                <Image
                  src="/images/Skills/nextjs.png"
                  w="10vw"
                  maxWidth={"60px"}
                />
              </HStack>
              <HStack justifyContent={"center"} my={"2"}>
                <Image
                  src="/images/Skills/node-js.png"
                  w="10vw"
                  maxWidth={"60px"}
                />
                <Image
                  src="/images/Skills/PowerBI.png"
                  w="10vw"
                  maxWidth={"60px"}
                />
                <Image
                  src="/images/Skills/git.png"
                  w="10vw"
                  maxWidth={"60px"}
                />
                <Image
                  src="/images/Skills/sql.png"
                  w="10vw"
                  maxWidth={"60px"}
                />
              </HStack>
            </Flex>
          </Container>

          <Box bg="#4DAEF9" className="skills-BlueBox"></Box>
        </Flex>
      </section>
    </>
  );
}
