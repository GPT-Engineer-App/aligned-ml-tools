import React from "react";
import { Box, Heading, Text, Button, Stack, Icon, Container, SimpleGrid, Image, Input, useToast, Grid, GridItem } from "@chakra-ui/react";
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
    <>
      <Box bg="purple.600" color="white" py={48} textAlign="center">
        <Container maxW="3xl">
          <Heading as="h1" size="3xl" mb={6}>
            Streamline Your ML Workflow with ALigned
          </Heading>
          <Text fontSize="xl" mb={8}>
            The all-in-one platform for advanced feature management, data lineage visualization, and real-time model monitoring.
          </Text>
          <Button colorScheme="white" color="purple.600" size="lg" height={16} px={12} fontSize="xl">
            Get Started
          </Button>
        </Container>
      </Box>

      <Box py={24}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={12}>
            {features.map((feature) => (
              <GridItem key={feature.title} textAlign="center">
                <Icon as={feature.icon} w={20} h={20} color="purple.500" mb={6} mx="auto" />
                <Heading as="h3" size="lg" mb={4}>
                  {feature.title}
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  {feature.text}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box bg="gray.50" py={24}>
        <Container maxW="7xl">
          <SimpleGrid columns={6} spacing={8} alignItems="center">
            <Image src="/logo1.png" alt="Logo 1" />
            <Image src="/logo2.png" alt="Logo 2" />
            <Image src="/logo3.png" alt="Logo 3" />
            <Image src="/logo4.png" alt="Logo 4" />
            <Image src="/logo5.png" alt="Logo 5" />
            <Image src="/logo6.png" alt="Logo 6" />
          </SimpleGrid>
        </Container>
      </Box>

      <Box id="waitlist" py={24} textAlign="center">
        <Container maxW="xl">
          <Heading as="h2" size="2xl" mb={6}>
            Get Early Access
          </Heading>
          <Text fontSize="xl" mb={8}>
            Join our waitlist to be the first to revolutionize your ML workflow.
          </Text>
          <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={4} justifyContent="center">
              <Input type="email" placeholder="Enter your email" size="lg" borderRadius="full" focusBorderColor="purple.500" required />
              <Button type="submit" colorScheme="purple" size="lg" borderRadius="full" px={12} height={16} fontSize="xl">
                Join Waitlist
              </Button>
            </Stack>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Index;
