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
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HamburgerIcon } from '@chakra-ui/icons';




export default function Nav() {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const { menuState, togglemenuState} = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('transparent', 'transparent')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image src={'/images/logo2.svg'} alt={'logo'} w="150px" pt="5"/>

          <Flex alignItems={'center'}>
            
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}