import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const { state } = useLocation();
  const { project } = state;

  return (
    <VStack spacing={8} p={5}>
      <Heading>Project Details</Heading>
      <Box w="100%">
        <Text fontSize="2xl">Name: {project.name}</Text>
        <Text fontSize="xl">Description: {project.description}</Text>
        <Text fontSize="xl">Deadline: {project.deadline}</Text>
      </Box>
    </VStack>
  );
};

export default ProjectDetails;