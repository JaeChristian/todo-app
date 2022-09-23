import { Box, Text } from "@chakra-ui/react";
import Task from "./Task";

function Tasks({ tasks = [], loading }) {
  if (loading) return <Text>Loading</Text>;
  return (
    <Box w="100%">
      {tasks &&
        tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
    </Box>
  );
}

export default Tasks;
