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
          <Heading as="h1" size="2xl" fontWeight="extrabold" mb={4}>
            Streamline Your ML Workflow with{" "}
            <Text as="span" color="blue.500">
              ALigned
            </Text>
          </Heading>
          <Text fontSize="xl" color="gray.500" maxW="2xl" mx="auto" mb={6}>
            The all-in-one platform for advanced feature management, data lineage visualization, and real-time model monitoring.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4} justifyContent="center">
            <Button colorScheme="blue" size="lg" height="14" px="8" fontSize="md">
              Get Started
            </Button>
            <Button variant="outline" size="lg" height="14" px="8" fontSize="md" as={Link} href="#waitlist">
              Join Waitlist
            </Button>
          </Stack>
        </Stack>
        <Box pos="relative" w="full" h={{ base: 64, md: "400px" }} borderRadius="lg" overflow="hidden" boxShadow="2xl">
          <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="Hero image" objectFit="cover" w="full" h="full" />
        </Box>
      </Stack>

      <Box py={16} bg="gray.50">
        <Container maxW="7xl">
          <Box textAlign="center" mb={12}>
            <Heading as="h2" size="xl" mb={4}>
              Powerful Features to Supercharge Your ML Workflow
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="xl" mx="auto">
              ALigned offers a suite of advanced tools to streamline your machine learning pipeline from data to deployment.
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {features.map((feature) => (
              <Box key={feature.title} bg="white" p={6} rounded="lg" textAlign="center" shadow="md">
                <Icon as={feature.icon} w={12} h={12} color="blue.500" mb={4} mx="auto" />
                <Heading as="h3" size="md" fontWeight="bold" mb={2}>
                  {feature.title}
                </Heading>
                <Text fontSize="md" color="gray.600">
                  {feature.text}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box id="waitlist" py={16}>
        <Container maxW="3xl" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>
            Get Early Access to ALigned
          </Heading>
          <Text fontSize="xl" color="gray.600" mb={8}>
            Be the first to revolutionize your ML workflow. Join our waitlist now!
          </Text>
          <Box maxW="md" mx="auto">
            <form onSubmit={handleSubmit}>
              <Stack direction={{ base: "column", md: "row" }} spacing={4} alignItems="center" justifyContent="center">
                <Input type="email" placeholder="Enter your email" size="lg" borderRadius="full" focusBorderColor="blue.500" required />
                <Button type="submit" colorScheme="blue" size="lg" borderRadius="full" px={8} height={14} fontSize="md">
                  Join Waitlist
                </Button>
              </Stack>
            </form>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;
