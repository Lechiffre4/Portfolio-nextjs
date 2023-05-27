import Head from "next/head";
import React from 'react';
import { ReactNode, useEffect, useState } from "react";
import data from "../data/Text.json";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
	Grid,
	GridItem,
	SimpleGrid,
	VStack,
	keyframes
} from "@chakra-ui/react";

import { Container } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import MapModule from "../components/MapModule";
import CubeEmpty from "../components/CubeEmpty";
import CubeFull from "../components/CubeFull";

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode()

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}

	const SkillContainer = useColorModeValue("gray.300", "gray.700")
	const ProjectsContainer = useColorModeValue("gray.300", "gray.700")
	const PresentationContainer = useColorModeValue("gray.300", "gray.700")


	const [nbCubesEmpty, setNbCubesEmpty] = useState(0);
	const [nbCubesFull, setNbCubesFull] = useState(0);

	useEffect(() => {
		AOS.init();
		setNbCubesEmpty(getRandomInt(5, 15));
		setNbCubesFull(getRandomInt(5, 10));
	}, []);



	return (
		<>
			{/*Intro Section*/}
			<section style={{ position: "relative" }}>
				<Flex style={{ width: "85%", height: "500px" }} mx={"auto"} mt={50}>
					<Container
						maxW="container.sm"
						my={"auto"}
						style={{ zIndex: "10" }}
						className={"Home-Text"}
					>

						<Text fontSize="50px" className={"Home-Text"}>
							Sahel HAOUCHET
						</Text>

						<Text fontStyle="italic" fontSize="40px" className={"Home-Text"}>
							{data.jobs}
						</Text>
					</Container>
					<Container
						maxW="container.sm"
						my={"auto"}
						style={{ zIndex: "10" }}
						className={"Home-logo"}
					>
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
						{Array.from(Array(nbCubesEmpty), (e, i) => {
							const cubeColors = ["#4DAEF9", "#F5F94D"];
							let cubeColorSelected = cubeColors[getRandomInt(0, 2)];
							if (i % 2 == 0) { cubeColorSelected = cubeColors[1]; } else { cubeColorSelected = cubeColors[0]; }
							return <CubeEmpty color={cubeColorSelected} key={i} />
						})}
						{Array.from(Array(nbCubesFull), (e, i) => {
							const cubeColors = ["#4DAEF9", "#F5F94D"];
							let cubeColorSelected = cubeColors[getRandomInt(0, 1)];
							if (i % 2 == 0) { cubeColorSelected = cubeColors[1]; } else { cubeColorSelected = cubeColors[0]; }
							return <CubeFull color={cubeColorSelected} key={i} />
						})}

					</div>
				</Flex>
			</section>

			{/*Presentation Section*/}
			<section style={{ marginTop: "23vh" }} id="me">
				<Flex
					style={{ width: "85%", height: "fit-content" }}
					className={"presentation-container"}
					mx={"auto"}
				>
					<Container
						maxW="container.sm"
						style={{ position: "relative" }}
						my={"auto"}
					>
						<Box bg="#4DAEF9"
							style={{
								position: "absolute",
								top: "-10%",
								left: "15%",
								width: "40%",
								height: "60%",
								zIndex: "-1"
							}}></Box>
						<Image data-aos="zoom-out-right" data-aos-duration="1000"
							src="/images/me.JPG"
							style={{ zIndex: "10" }}
							alt={"me"}
							w="22vw"
							className="presentation-Image"
							mx="auto"
							mb="5"
						/>
						<Box bg="#F5F94D"
							style={{
								position: "absolute",
								top: "45%",
								right: "15%",
								width: "40%",
								height: "60%",
								zIndex: "-1",
							}}></Box>
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
							<Text textAlign="justify" my="5">{data.presentation1}</Text>
							<Text textAlign="justify" my="5">{data.presentation2}</Text>
							<Text textAlign="justify" my="5">{data.presentation3}</Text>
							<Text textAlign="justify" my="5">{data.presentation4}</Text>
							<Text textAlign="justify" my="5">{data.presentation5}</Text>
						</Flex>
					</Container>
				</Flex>
			</section>

			{/*Skills Section*/}
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

				<Flex
					style={{
						width: "fit-content",
						height: "fit-content",
						position: "relative",
					}}
					mx={"auto"}
					my={20}
				>
					<Box bg="#F5F94D"
						style={{
							position: "absolute",
							top: "0%",
							left: "0%",
							width: "60%",
							height: "60%",
							zIndex: "-1"
						}}></Box>
					<Container data-aos="flip-up" data-aos-offset="100"
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
								<Image src="/images/Skills/java.png" w="10vw" maxWidth={"60px"} />
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

					<Box bg="#4DAEF9"
						style={{
							position: "absolute",
							bottom: "0%",
							right: "0%",
							width: "60%",
							height: "60%",
							zIndex: "-1"
						}}></Box>
				</Flex>
			</section>


			{/*Projects Section*/}
			<section style={{ position: "relative", marginTop: "10%" }} id="projects">
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
					<Text>{data.projects}</Text>
				</Container>

				<SimpleGrid columns={[1, 2]} pt="10" px="15%" spacing={10}>

					<Box bg={ProjectsContainer} pb={"10"} data-aos="fade-right" data-aos-offset="200">
						<Image src="/images/projects/CinematesBanner.png" w="100%" />
						<Text textAlign={"center"} fontSize={"2rem"} my="1">
							{data.cinemates}
						</Text>
						<Box
							w="20"
							h="1"
							bg={"#F5F94D"}
							mx={"auto"}
							mb={"10"}
							borderRadius={"lg"}
						></Box>
						<SimpleGrid columns={1}>
							<Text textAlign={"center"} mx="5" h="20%">{data.cinematesDescription}</Text>

							<Text textAlign={"center"} fontSize={"1.3rem"} mt={10}>
								Teck Stack
							</Text>
							<Box
								w="20"
								h="1"
								bg={"#F5F94D"}
								mx={"auto"}
								mb={"5"}
								borderRadius={"lg"}
							></Box>
							<Flex justifyContent={"space-around"} mx={"25%"} mb="7">
								<Image
									src="/images/Skills/python.png"
									w="10vw"
									maxWidth={"50px"}
								/>
								<Image
									src="/images/Skills/django.png"
									w="10vw"
									maxWidth={"50px"}
								/>
								<Image
									src="/images/Skills/Firebase.png"
									w="10vw"
									maxWidth={"50px"}
								/>
							</Flex>
							<Center><Link bg="#4DAEF9" target="_blank" href="https://github.com/Lechiffre4/Cinemates" borderRadius={"3xl"} p="2"><Flex><Image src="/images/Skills/github.png" maxWidth={"25px"} /><Text alignContent={"center"}>Source Code</Text></Flex></Link></Center>
						</SimpleGrid>
					</Box>
					<Box bg={ProjectsContainer} pb={"10"} data-aos="fade-left" data-aos-offset="200">
						<Image src="/images/projects/SportSpotBanner.png" w="100%" />
						<Text textAlign={"center"} fontSize={"2rem"} my="1">
							{data.SportSpots}
						</Text>
						<Box
							w="20"
							h="1"
							bg={"#F5F94D"}
							mx={"auto"}
							mb={"10"}
							borderRadius={"lg"}
						></Box>
						<SimpleGrid columns={1}>
							<Text textAlign={"center"} mx="5" h="20%">{data.SportSpotDescription}</Text>

							<Text textAlign={"center"} fontSize={"1.3rem"} mt={10}>
								Teck Stack
							</Text>
							<Box
								w="20"
								h="1"
								bg={"#F5F94D"}
								mx={"auto"}
								mb={"5"}
								borderRadius={"lg"}
							></Box>
							<Flex justifyContent={"space-around"} mx={"25%"} mb="7">
								<Image
									src="/images/Skills/react.png"
									w="10vw"
									maxWidth={"50px"}
								/>
								<Image
									src="/images/Skills/typescript.png"
									w="10vw"
									maxWidth={"50px"}
								/>
								<Image
									src="/images/Skills/Firebase.png"
									w="10vw"
									maxWidth={"50px"}
								/>
							</Flex>
							<Center><Link bg="#4DAEF9" borderRadius={"3xl"} p="2"><Flex><Image src="/images/Skills/github.png" maxWidth={"25px"} /><Text alignContent={"center"}>Coming Soon</Text></Flex></Link></Center>
						</SimpleGrid>
					</Box>

					<Box bg={ProjectsContainer} pb={"10"} data-aos="fade-right" data-aos-offset="200">
						<Image src="/images/projects/alphonse.png" w="100%" />
						<Text textAlign={"center"} fontSize={"2rem"} my="1">
							{data.Alphonse}
						</Text>
						<Box
							w="20"
							h="1"
							bg={"#F5F94D"}
							mx={"auto"}
							mb={"10"}
							borderRadius={"lg"}
						></Box>
						<SimpleGrid columns={1}>
							<Text textAlign={"center"} mx="5" h="20%">{data.AlphonseDescription}</Text>

							<Text textAlign={"center"} fontSize={"1.3rem"} mt={10}>
								Teck Stack
							</Text>
							<Box
								w="20"
								h="1"
								bg={"#F5F94D"}
								mx={"auto"}
								mb={"5"}
								borderRadius={"lg"}
							></Box>
							<Flex justifyContent={"space-around"} mx={"25%"} mb="7">
								<Image
									src="/images/Skills/python.png"
									w="10vw"
									maxWidth={"50px"}
								/>
							</Flex>
							<Center><Link bg="#4DAEF9" target="_blank" href="https://github.com/Lechiffre4/Alphonse_Twitter_Bot" borderRadius={"3xl"} p="2"><Flex><Image src="/images/Skills/github.png" maxWidth={"25px"} /><Text alignContent={"center"}>Source Code</Text></Flex></Link></Center>
						</SimpleGrid>
					</Box>
					<Box bg={ProjectsContainer} pb={"10"} data-aos="fade-left" data-aos-offset="200">
						<Image src="/images/projects/Sky_AirLine_Corporation_banner.png" w="100%" />
						<Text textAlign={"center"} fontSize={"2rem"} my="1">
							{data.SkyAirLine}
						</Text>
						<Box
							w="20"
							h="1"
							bg={"#F5F94D"}
							mx={"auto"}
							mb={"10"}
							borderRadius={"lg"}
						></Box>
						<SimpleGrid columns={1}>
							<Text textAlign={"center"} mx="5" h="20%">{data.SkyAirLineDescription}</Text>

							<Text textAlign={"center"} fontSize={"1.3rem"} mt={10}>
								Teck Stack
							</Text>
							<Box
								w="20"
								h="1"
								bg={"#F5F94D"}
								mx={"auto"}
								mb={"5"}
								borderRadius={"lg"}
							></Box>
							<Flex justifyContent={"space-around"} mx={"25%"} mb="7">
								<Image
									src="/images/Skills/csharp.png"
									w="10vw"
									maxWidth={"50px"}
								/>
								<Image
									src="/images/Skills/unity.png"
									w="10vw"
									maxWidth={"50px"}
								/>
							</Flex>
							<Center><Link bg="#4DAEF9" target="_blank" href="https://github.com/Lechiffre4/SkyAirlineCorporation" borderRadius={"3xl"} p="2"><Flex><Image src="/images/Skills/github.png" maxWidth={"25px"} /><Text alignContent={"center"}>Source Code</Text></Flex></Link></Center>
						</SimpleGrid>
					</Box>

					<Box bg={ProjectsContainer} pb={"10"} data-aos="fade-right" data-aos-offset="200">
						<Image src="/images/projects/MockupTamagotchi_banner.png" w="100%" />
						<Text textAlign={"center"} fontSize={"2rem"} my="1">
							{data.Tamagotchi}
						</Text>
						<Box
							w="20"
							h="1"
							bg={"#F5F94D"}
							mx={"auto"}
							mb={"10"}
							borderRadius={"lg"}
						></Box>
						<SimpleGrid columns={1}>
							<Text textAlign={"center"} mx="5" h="20%">{data.TamagotchiDescription}</Text>

							<Text textAlign={"center"} fontSize={"1.3rem"} mt={10}>
								Teck Stack
							</Text>
							<Box
								w="20"
								h="1"
								bg={"#F5F94D"}
								mx={"auto"}
								mb={"5"}
								borderRadius={"lg"}
							></Box>
							<Flex justifyContent={"space-around"} mx={"25%"} mb="7">
								<Image
									src="/images/Skills/java.png"
									w="10vw"
									maxWidth={"50px"}
								/>
							</Flex>
							<Center><Link bg="#4DAEF9" target="_blank" href="https://github.com/Lechiffre4/Android-tamagotchi" borderRadius={"3xl"} p="2"><Flex><Image src="/images/Skills/github.png" maxWidth={"25px"} /><Text alignContent={"center"}>Source Code</Text></Flex></Link></Center>
						</SimpleGrid>
					</Box>
					<Box bg={ProjectsContainer} pb={"10"} data-aos="fade-left" data-aos-offset="200">
						<Image src="/images/projects/Portfolio_banner.png" w="100%" />
						<Text textAlign={"center"} fontSize={"2rem"} my="1">
							{data.Portfolio}
						</Text>
						<Box
							w="20"
							h="1"
							bg={"#F5F94D"}
							mx={"auto"}
							mb={"10"}
							borderRadius={"lg"}
						></Box>
						<SimpleGrid columns={1}>
							<Text textAlign={"center"} mx="5" h="20%">{data.PortfolioDescription}</Text>

							<Text textAlign={"center"} fontSize={"1.3rem"} mt={10}>
								Teck Stack
							</Text>
							<Box
								w="20"
								h="1"
								bg={"#F5F94D"}
								mx={"auto"}
								mb={"5"}
								borderRadius={"lg"}
							></Box>
							<Flex justifyContent={"space-around"} mx={"25%"} mb="7">
								<Image
									src="/images/Skills/nextjs.png"
									w="10vw"
									maxWidth={"50px"}
								/>
								<Image
									src="/images/Skills/js.png"
									w="10vw"
									maxWidth={"50px"}
								/>
							</Flex>
							<Center><Link bg="#4DAEF9" target="_blank" href="https://github.com/Lechiffre4/Portfolio-nextjs" borderRadius={"3xl"} p="2"><Flex><Image src="/images/Skills/github.png" maxWidth={"25px"} /><Text alignContent={"center"}>Source Code</Text></Flex></Link></Center>
						</SimpleGrid>
					</Box>

					<Box bg={ProjectsContainer} pb={"10"} data-aos="fade-right" data-aos-offset="200">
						<Image src="/images/projects/speech_recognition_banner.png" w="100%" />
						<Text textAlign={"center"} fontSize={"2rem"} my="1">
							{data.SpeechRecognition}
						</Text>
						<Box
							w="20"
							h="1"
							bg={"#F5F94D"}
							mx={"auto"}
							mb={"10"}
							borderRadius={"lg"}
						></Box>
						<SimpleGrid columns={1}>
							<Text textAlign={"center"} mx="5" h="20%">{data.SpeechRecognitionDescription}</Text>

							<Text textAlign={"center"} fontSize={"1.3rem"} mt={10}>
								Teck Stack
							</Text>
							<Box
								w="20"
								h="1"
								bg={"#F5F94D"}
								mx={"auto"}
								mb={"5"}
								borderRadius={"lg"}
							></Box>
							<Flex justifyContent={"space-around"} mx={"25%"} mb="7">
								<Image
									src="/images/Skills/python.png"
									w="10vw"
									maxWidth={"50px"}
								/>
							</Flex>
							<Center><Link bg="#4DAEF9" target="_blank" href="https://github.com/Lechiffre4/Android-tamagotchi" borderRadius={"3xl"} p="2"><Flex><Image src="/images/Skills/github.png" maxWidth={"25px"} /><Text alignContent={"center"}>Source Code</Text></Flex></Link></Center>
						</SimpleGrid>
					</Box>
					<Box bg={ProjectsContainer} pb={"10"} data-aos="fade-left" data-aos-offset="200">
						<Image src="/images/projects/FaceRecognition_banner.png" w="100%" />
						<Text textAlign={"center"} fontSize={"2rem"} my="1">
							{data.FaceRecognition}
						</Text>
						<Box
							w="20"
							h="1"
							bg={"#F5F94D"}
							mx={"auto"}
							mb={"10"}
							borderRadius={"lg"}
						></Box>
						<SimpleGrid columns={1}>
							<Text textAlign={"center"} mx="5" h="20%">{data.FaceRecognitionDescription}</Text>

							<Text textAlign={"center"} fontSize={"1.3rem"} mt={10}>
								Teck Stack
							</Text>
							<Box
								w="20"
								h="1"
								bg={"#F5F94D"}
								mx={"auto"}
								mb={"5"}
								borderRadius={"lg"}
							></Box>
							<Flex justifyContent={"space-around"} mx={"25%"} mb="7">

								<Image
									src="/images/Skills/python.png"
									w="10vw"
									maxWidth={"50px"}
								/>
							</Flex>
							<Center><Link bg="#4DAEF9" target="_blank" href="https://github.com/Lechiffre4/Portfolio-nextjs" borderRadius={"3xl"} p="2"><Flex><Image src="/images/Skills/github.png" maxWidth={"25px"} /><Text alignContent={"center"}>Source Code</Text></Flex></Link></Center>
						</SimpleGrid>
					</Box>

				</SimpleGrid>
			</section>

			{/*MAP Section*/}
			<section style={{ position: "relative", marginTop: "10%" }} id="projects">
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
					<Text>{data.MapTitle}</Text>
				</Container>
				<Box w="80vw" mx="auto" pt={10}>
					<MapModule />
					<Box bg={ProjectsContainer} h="fit-content" >
						<HStack alignContent="center" justifyContent="center" p="2">
							<Image src="/images/Markers/bleu.png" w={10} />
							<Text textAlign="center" fontSize={"0.8rem"} my="1">
								{data.MapList1}
							</Text>

							<Image src="/images/Markers/Jaune.png" w={10} />
							<Text textAlign="center" fontSize={"0.8rem"} my="1">
								{data.MapList2}
							</Text>

							<Image src="/images/Markers/Vert.png" w={10} />
							<Text textAlign="center" fontSize={"0.8rem"} my="1">
								{data.MapList3}
							</Text>
						</HStack>
					</Box>
				</Box>


			</section>

			
		</>
	);
}
