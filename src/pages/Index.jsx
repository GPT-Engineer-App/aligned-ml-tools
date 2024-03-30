import React from "react";
import { Box, Heading, Text, Button, Stack, Icon, useColorModeValue, createIcon, Container, SimpleGrid, Image, Link, Input, useToast } from "@chakra-ui/react";
import { FaDatabase, FaChartLine, FaShieldAlt, FaTags } from "react-icons/fa";

const features = [
  {
    title: "Data Lineage",
    text: "Collect data lineage through transformations, views, models, data sources, and visualize it in a way that's easy to understand.",
    icon: FaDatabase,
  },
  {
    title: "Real-Time Model Evaluation",
    text: "View how your models are performing in real-time, and get alerts when they're not performing as expected.",
    icon: FaChartLine,
  },
  {
    title: "Data Quality Assurance",
    text: "Ensure that your data is of the highest quality, and that it's ready to be used in your models.",
    icon: FaShieldAlt,
  },
  {
    title: "Data-set Annotation",
    text: "Generate data-sets for your models, and ensure that they are of the highest quality.",
    icon: FaTags,
  },
];

const Index = () => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Submitted.",
      description: "Thank you for your interest. We will get back to you soon.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW={"7xl"}>
      <Stack align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }} direction={{ base: "column", md: "row" }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text as={"span"} color={"blue.400"}>
              ALigned
            </Text>
            <br />
            <Text as={"span"} color={"gray.600"}>
              Machine Learning products made simple
            </Text>
          </Heading>
          <Text color={"gray.500"}>Redefine Machine Learning Data Management with Aligned: A Tool for Advanced Feature Management, Data Lineage Visualization, and Real-Time Model Monitoring.</Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }}>
              Get started
            </Button>
            <Link href="#waitlist">
              <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
                Join Waitlist
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Box pos={"relative"} height={"300px"} rounded={"2xl"} boxShadow={"2xl"} width={"full"} overflow={"hidden"}>
          <Image alt={"Hero Image"} fit={"cover"} align={"center"} w={"100%"} h={"100%"} src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3MTE4MjgwODd8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Box>
      </Stack>

      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Powerful Features</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            ALigned provides a comprehensive set of features to streamline your machine learning workflow.
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <Stack key={feature.title} align={"center"}>
                <Icon as={feature.icon} w={10} h={10} color={"blue.400"} />
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box id="waitlist" bg={useColorModeValue("gray.100", "gray.700")} p={6}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Join the Waitlist</Heading>
          <Text fontSize={"xl"}>Be among the first to experience the power of ALigned. Join our waitlist today!</Text>
          <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"} position={"relative"}>
            <form onSubmit={handleSubmit}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("white", "gray.800")}
                border={0}
                _focus={{
                  bg: useColorModeValue("white", "gray.800"),
                }}
              />
              <Button
                colorScheme={"blue"}
                bg={"blue.400"}
                px={6}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
              >
                Join Waitlist
              </Button>
            </form>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Index;
