import { Box, Button, Flex, Heading, Input, Table, Thead, Tbody, Tr, Th, Td, Text, VStack } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState("");

  const handleAddProject = () => {
    if (newProjectName.trim() !== "") {
      setProjects([...projects, { id: Date.now(), name: newProjectName }]);
      setNewProjectName("");
    }
  };

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  return (
    <VStack spacing={8} p={5}>
      <Heading>Project Management App</Heading>
      <Flex>
        <Input placeholder="Enter new project name" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} />
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddProject} ml={2}>
          Add Project
        </Button>
      </Flex>
      <Box w="100%">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Project Name</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects.map((project) => (
              <Tr key={project.id}>
                <Td>{project.name}</Td>
                <Td>
                  <Button size="sm" colorScheme="red" onClick={() => handleDeleteProject(project.id)}>
                    <FaTrash />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
};

export default Index;
