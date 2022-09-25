import { Box } from "@chakra-ui/react";
import Task from "./Task";

function Tasks({ tasks = [], loading, setCurrentTaskId }) {
  // if (loading) return <Text>Loading</Text>;
  return (
    <Box w="100%" overflowY="scroll" mt={3}>
      {tasks &&
        tasks.map((task) => {
          return (
            <Task
              task={task}
              key={task.id}
              setCurrentTaskId={setCurrentTaskId}
            />
          );
        })}
    </Box>
  );
}

export default Tasks;
