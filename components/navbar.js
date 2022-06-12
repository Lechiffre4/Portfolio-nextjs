import { ReactNode } from 'react';
import {
  Box,
  Flex,
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
          <Box>Sahel's Portfolio</Box>

            <Flex >
                <Link href={'/'} p='4'>
                    <Text>Home</Text>
                </Link>
                
                <Link href={'/projects'} p='4'>
                    <Text>Projects</Text>
                </Link>

                <Link href={'/about'} p='4'>
                    <Text>About</Text>
                </Link>
                
                <Link href={'/contact'} p='4'>
                    <Text>Contact</Text>
                </Link>
            </Flex>
          <Flex alignItems={'center'}>
            
            




            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

            <Menu>
                <MenuButton>
                    <HamburgerIcon/>
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Link href={'/'}>Home</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={'/about'}>About</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={'/contact'}>Contact</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={'/projects'}>Projects</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={'/resume'}>Resume</Link>
                    </MenuItem>
                </MenuList>
            </Menu>

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}