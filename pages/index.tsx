import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { DatabaseTable } from "../components/Database/DatabaseTable";
import { BlobAnimated } from "../components/misc/BlobVector";
import { NavigationBar } from "../components/navigation/NavigationBar";

const Home: NextPage = () => {
  const headerBg = useColorModeValue("gray.50", "gray.900");

  return (
    <Container p="0" paddingTop={"88px"} w="100%" minW="100%">
      <Head>
        <title>Nupp | Diet Tracker</title>
        <meta
          name="description"
          content="Nupp is application made for tracking macro nutrients and costs of diet plans, listing various products with detailed macronutrients and creating diet plans, recipes and many more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container p="0" minW="100%" h={"fit-content"} bg={headerBg}>
        <Container maxW="container.lg">
          <HStack>
            <VStack alignItems="start" spacing="48px" p={"16"} h="100%" w="50%">
              <Heading as="h1" size={"xl"} autoCapitalize="">
                NUTRITIOUS
                <br></br>
                APPLICATION
              </Heading>
              <Text>
                Looking for easy yet effective way to track your costs,
                macronutrients and eating habits? Nupp will save you!
              </Text>
              <Button variant="CTA">Create Diet Plan!</Button>
            </VStack>
            <VStack p={"16"} h="100%" w="50%">
              <Center position="relative">
                <BlobAnimated
                  id="svg1"
                  left="50%"
                  blur={true}
                  values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
	c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
	c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
	c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
	
	
	M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
	c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
	c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
	C48.9,198.6,57.8,191,51,171.3z;
	
	M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
	c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
	c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
	c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                  initialValue="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
	c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
	c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
	c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                ></BlobAnimated>
              </Center>
            </VStack>
          </HStack>
        </Container>
      </Container>
      <Container marginTop={"80px"} px="32px" maxW="container.lg">
        <DatabaseTable></DatabaseTable>
      </Container>
    </Container>
  );
};

export default Home;
