import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
  Flex,
  HStack,
} from "@chakra-ui/react";
import * as React from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Image src={"/images/logo2.svg"} alt={"logo"} w="200px" pt="5" mx={"auto"}/>
      <HStack spacing={6} justifyContent={"center"}  pb={5}>
        <Text fontSize="sm">
          <a
            href="
                    https://www.linkedin.com/in/sahelhaouchet/
                    "
          >
            <FaLinkedin size="1.5rem" />
          </a>
        </Text>
        <Text fontSize="sm">
          <a
            href="
                    https://discordapp.com/users/640138023870136330/
                    "
          >
            <FaDiscord size="1.5rem" />
          </a>
        </Text>
        <Text fontSize="sm">
          <a
            href="
                    mailto:sahelhaouchet@gmail.com
                    "
          >
            <FaEnvelope size="1.5rem" />
          </a>
        </Text>
        <Text fontSize="sm">
          <a
            href="
                    https://github.com/Lechiffre4
                    "
          >
            <FaGithub size="1.5rem" />
          </a>
        </Text>
        <Text fontSize="sm">
          <a
            href="
                    https://t.me/Lechiffre4
                    "
          >
            <FaTelegramPlane size="1.5rem" />
          </a>
        </Text>
      </HStack>
      <Text fontSize="sm" color="subtle" pt={15} pb={5} textAlign={"center"}>
        &copy; {new Date().getFullYear()} HAOUCHET Sahel. All rights reserved.
      </Text>
    </>
  );
}
