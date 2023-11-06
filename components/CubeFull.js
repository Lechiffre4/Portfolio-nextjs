import {
	Box,
	keyframes
} from "@chakra-ui/react";

export default function CubeFull(color) {

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	  }

	const cubeSize = getRandomInt(1, 30);
	

	const CubeX = getRandomInt(10, 90);
	const CubeY = getRandomInt(10, 90);



	{/*Intro cubes animations keyframes random rotation*/ }
	const CubeStart = Math.floor(Math.random() * 360);
	const CubeEnd = Math.floor(Math.random() * 360);
	const Cube = 
	keyframes`
		0% {
			transform: rotate(${CubeStart}deg);
		}
		50% {
			transform: rotate(${CubeEnd}deg);
		}
		100% {
			transform: rotate(${CubeStart}deg);
		}
	`;

	const animationDuration = getRandomInt(5, 20);

	return (
		<>
			<Box
				backgroundColor={color.color}
				w={cubeSize}
				h={cubeSize}
				animation={`${Cube} ${animationDuration}s ease-in-out infinite`}
				style={{
					position: "absolute",
					top: `${CubeY}%`,
					left: `${CubeX}%`,
					zIndex: "0",
				}}
			></Box>
		</>
	);
}