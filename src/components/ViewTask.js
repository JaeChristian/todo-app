import { Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useAutoSave from "../hooks/useAutoSave";
import useFetch from "../hooks/useFetch";
import DateFormatter from "../utils/DateFormatter";

function ViewTask({ currentTaskId }) {
  const [currentTask, setCurrentTask] = useState(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  useAutoSave(
    {
      title: title,
      body: body,
      completed: isCompleted,
      id: currentTaskId,
      dueDate: currentTask?.dueDate,
    },
    currentTaskId
  );

  const {
    data: taskData,
    loading: taskLoading,
    error: taskError,
  } = useFetch(`tasks/${currentTaskId}`);

  useEffect(() => {
    setCurrentTask(taskData);
    setTitle(currentTask?.title);
    setBody(currentTask?.body);
    setIsCompleted(currentTask?.completed);
    console.log("rendered");
  }, [currentTask, taskData]);

  let formatDate = new DateFormatter(new Date(currentTask?.dueDate));
  const DateString = formatDate.dateToString();

  //   console.log(currentTask.completed);
  return currentTask ? (
    <Flex w="100%" flexDir="column">
      <Flex p={5} borderBottom="solid 1px" borderColor="gray.200" gap={4}>
        <Checkbox
          colorScheme="gray"
          borderColor="blackAlpha.300"
          _focusVisible={{}}
          _selected={{}}
          size="md"
          isChecked={isCompleted}
          onChange={() => setIsCompleted(!isCompleted)}
        />
        {currentTask.dueDate ? (
          <Text fontSize="15px" fontWeight="600" color="green.400">
            {DateString}
          </Text>
        ) : (
          <Text fontSize="15px" fontWeight="600" color="gray.400">
            Due Date
          </Text>
        )}
      </Flex>
      <Flex flexDir="column" pt={2}>
        <Input
          placeholder="Title"
          fontSize="16px"
          fontWeight="bold"
          border="none"
          _focusVisible={{}}
          value={title ? title : ""}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          wrap="soft"
          rows="20"
          style={{
            resize: "none",
            fontSize: "14px",
            fontWeight: "500",
            outline: "none",
            paddingLeft: "18px",
            paddingRight: "18px",
            border: "none",
          }}
          value={body ? body : ""}
          onChange={(e) => setBody(e.target.value)}
        />
        {/* <Input
          placeholder="Description"
          fontSize="14px"
          fontWeight="500"
          border="none"
          _focusVisible={{}}
          value={body ? body : ""}
          onChange={(e) => setBody(e.target.value)}
        /> */}
      </Flex>
    </Flex>
  ) : (
    <Flex justifyContent="center" alignItems="center" h="100%">
      <Text color="gray.400">Click on a task to view its details</Text>
    </Flex>
  );
}

export default ViewTask;
