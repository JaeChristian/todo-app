import { Box } from "@chakra-ui/react";
import Task from "./Task";

function Tasks({ tasks = [], loading, setCurrentTask }) {
  // if (loading) return <Text>Loading</Text>;
  return (
    <Box w="100%">
      {tasks &&
        tasks.map((task) => {
          return (
            <Task task={task} key={task.id} setCurrentTask={setCurrentTask} />
          );
        })}
    </Box>
  );
}

export default Tasks;
