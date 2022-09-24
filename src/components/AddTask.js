import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";
import requestHeaders from "../utils/requestHeaders";
import { API_URL } from "../utils/URLhandler";

function AddTask({ refetch }) {
  const [taskTitle, setTaskTitle] = useState("");
  const api = requestHeaders("tasks");
  const onSubmit = (e) => {
    e.preventDefault();
    const task = {
      title: taskTitle,
    };
    api
      .post(`${API_URL}/tasks`, task)
      .then((res) => {
        console.log(res.data, "success");
        refetch();
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(taskTitle);
  };

  return (
    <Box pl={2} pr={2} mt={2}>
      <form onSubmit={onSubmit}>
        <Input
          bg="gray.100"
          border="none"
          borderRadius="md"
          h="40px"
          fontWeight="600"
          fontSize="14px"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </form>
    </Box>
  );
}

export default AddTask;
