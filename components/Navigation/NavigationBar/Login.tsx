import {
  useColorModeValue,
  VStack,
  IconButton,
  Box,
  Container,
  FormLabel,
  Input,
  Spacer,
  HStack,
  Button,
  Stack,
  Divider,
  InputGroup,
  InputRightElement,
  Text,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { BsFillPersonFill, BsGoogle, BsFacebook } from "react-icons/bs";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import * as FormElements from "../../Input/Form/FormElements";

export const LoginButton = () => {
  const [isWindowVisible, setWindowVisible] = useState<boolean>(false);
  const buttonBg = useColorModeValue("gray.100", "gray.900");
  const ref = useRef<HTMLDivElement>(null);
  function handleClickOutside(event: MouseEvent): void {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setWindowVisible(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setWindowVisible(!isWindowVisible);
  };

  return (
    <VStack ref={ref} spacing="0" position={"relative"}>
      <IconButton aria-label="Log In" bg={buttonBg} onClick={handleClick}>
        <Box as={BsFillPersonFill} size="24px" color="green.400" />
      </IconButton>
      {isWindowVisible && <LoginWindow />}
    </VStack>
  );
};

const LoginWindow = () => {
  const bg = useColorModeValue("gray.100", "gray.800");

  return (
    <Container
      position={"absolute"}
      bg={bg}
      top="120%"
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
          Don&apos;t have account yet? <br></br>
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
