import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill, BsFillPersonFill, BsGoogle, BsFacebook } from "react-icons/bs";
import { NavigationLink } from "./NavigationBarLink";
import * as FormElements from "../../Input/Form/FormElements";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { SearchBar } from "../../Input/SearchBar/SearchBar";

export const NavigationBar = () => {
  const [height, setHeight] = useState<string>("88px");
  const [backgroundOpacity, setBackgroundOpacity] = useState<number>(100);

  const barBg = useColorModeValue("gray.100", "gray.900");

  useEffect(() => {
    const handleScroll = (e: Event) => {
      setBackgroundOpacity(window.scrollY < 120 ? window.scrollY / 200 : 1);
      setHeight(window.scrollY < 150 ? "88px" : "64px");
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [backgroundOpacity]);

  return (
    <Flex
      as="nav"
      transition="height 0.5s ease-in-out"
      h={height}
      p={{ lg: "4px 64px", md: "4px 16px" }}
      columnGap={"8px"}
      alignContent={"center"}
      justifyContent="space-between"
      position="fixed"
      w="100%"
      zIndex="9999"
      _before={{
        transition: "opacity 0.5s ease-in-out",
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: barBg,
        zIndex: "0",
        left: "0",
        top: "0",
        opacity: backgroundOpacity,
      }}
    >
      <HStack spacing="48px" zIndex="1">
        <Center>
          <NextLink href="/" passHref>
            <Link>NUPP</Link>
          </NextLink>
        </Center>
        <HStack as="ul" spacing="16px">
          <li>
            <NavigationLink href="/">Homepage</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/diets">Diets</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/products">Products</NavigationLink>
          </li>
        </HStack>
      </HStack>
      <SearchBar />
      <HStack spacing={"16px"}>
        <ColorModeButton />
        <LoginButton />
      </HStack>
    </Flex>
  );
};

const ColorModeButton = () => {
  const buttonBg = useColorModeValue("gray.100", "gray.900");
  const { colorMode, toggleColorMode } = useColorMode();
  const IconColor = useColorModeValue("purple.800", "yellow.400");
  const Icon = useColorModeValue(BsMoonStarsFill, BsSunFill);

  return (
    <IconButton
      bg={buttonBg}
      aria-label="Toggle color mode"
      onClick={toggleColorMode}
      icon={<Box as={Icon} size="24px" color={IconColor} />}
    />
  );
};

const LoginButton = () => {
  const buttonBg = useColorModeValue("gray.100", "gray.900");

  return (
    <VStack spacing="0" position={"relative"}>
      <IconButton aria-label="Log In" bg={buttonBg}>
        <Box as={BsFillPersonFill} size="24px" color="green.400" />
      </IconButton>
      <LoginWindow></LoginWindow>
    </VStack>
  );
};

const LoginWindow = () => {
  const bg = useColorModeValue("gray.100", "gray.800");
  return (
    <Container
      position={"absolute"}
      bg={bg}
      top="100%"
      right="0"
      w="400px"
      h="fit-content"
      boxShadow="2xl"
      borderTop="5px solid"
      borderColor="green.400"
    >
      <VStack alignItems={"start"} spacing="16px" py="32px" px="24px">
        <Text fontWeight="bold" fontSize="14px">
          LOG IN TO YOUR ACCOUNT
        </Text>
        <FormElements.Wrapper isRequired={false}>
          <FormElements.LabelSection>
            <FormLabel htmlFor="email" whiteSpace={"nowrap"}>
              Email:
            </FormLabel>
          </FormElements.LabelSection>
          <FormElements.MainSection w="100%">
            <Input onChange={(e) => {}} type="email" id="email"></Input>
          </FormElements.MainSection>
        </FormElements.Wrapper>
        <PasswordField />
        <Spacer />
        <HStack w="100%" justifyContent={"space-between"}>
          <Button variant="CTA" w="14ch">
            Log In
          </Button>
          <Stack direction="row">
            <IconButton variant="ghost" aria-label="Log In With Gmail" icon={<BsGoogle size="24px" />} />
            <IconButton variant="ghost" aria-label="Log In With Facebook" icon={<BsFacebook size="24px" />} />
          </Stack>
        </HStack>
        <Spacer />
        <Divider />
        <Text>
          Don't have account yet? <br></br>
          <NextLink href="#">
            <Link color="green.300">Create an Account</Link>
          </NextLink>
        </Text>
      </VStack>
    </Container>
  );
};

const PasswordField = () => {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <FormElements.Wrapper isRequired={false}>
      <FormElements.LabelSection>
        <FormLabel htmlFor="password" whiteSpace={"nowrap"}>
          Password:
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection w="100%">
        <InputGroup>
          <Input type={isPasswordVisible ? "text" : "password"} id="password" />
          <InputRightElement>
            <IconButton
              aria-label="Show password"
              size="sm"
              onClick={togglePasswordVisibility}
              variant="ghost"
              icon={isPasswordVisible ? <MdVisibility size="16px" /> : <MdVisibilityOff size="16px" />}
            />
          </InputRightElement>
        </InputGroup>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};
