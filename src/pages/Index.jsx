import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

function Index() {
  return (
    <Box bg="white" color="gray.900" minH="100vh">
      <Container maxW="6xl" py={{ base: "10", md: "20" }} px={{ base: "4", md: "10" }}>
        <Heading as="h1" size="2xl" fontWeight="bold" mb="4">
          Experience the Future
        </Heading>
        <Text fontSize="xl" mb="8">
          Explore our latest innovations and see how they can enhance your daily life.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading as="h3" size="lg" mb="4">
              Impeccable Design
            </Heading>
            <Text fontSize="md">Aesthetic and functionality combined to create products that not only look stunning but perform exceptionally.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb="4">
              Cutting-edge Technology
            </Heading>
            <Text fontSize="md">Experience the best with our state-of-the-art technology that pushes the boundaries of what's possible.</Text>
          </Box>
        </SimpleGrid>
        <Text fontSize="sm" textAlign="center" mt="20">
          &copy; {new Date().getFullYear()} ALigned. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}

export default Index;
