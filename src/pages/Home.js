import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/home.css";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import ViewTask from "../components/ViewTask";
import useFetch from "../hooks/useFetch";

function Home() {
  // localStorage.removeItem("token");
  const navigate = useNavigate();
  const { loading: authLoading, error: authError } = useFetch("authenticate");
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const {
    data: tasks,
    loading: isTasksLoading,
    error: tasksError,
    refetch: refetchTasks,
  } = useFetch("tasks");

  if (authLoading) {
    return <p>LOAAAAADDING</p>;
  }

  if (authError) {
    navigate("/login");
  }

  if (tasksError) console.log(tasksError);
  return (
    <Flex h="100%">
      <Flex
        borderRightWidth="1px"
        borderColor="gray.200"
        w="15%"
        display={{ base: "none", sm: "flex" }}
        className="sidebar"
      ></Flex>
      <Flex
        borderRightWidth="1px"
        borderColor="gray.200"
        w={{ base: "100%", sm: "42.5%" }}
        className="tasks-panel"
        flexDir="column"
      >
        <Flex p="17px" pr={2} pl={2} alignItems="center">
          <Heading fontSize="2xl">~ Inbox</Heading>
        </Flex>
        <AddTask refetch={refetchTasks} />
        <Tasks
          tasks={tasks}
          loading={isTasksLoading}
          setCurrentTaskId={setCurrentTaskId}
        />
      </Flex>
      <Box w="42.5%">
        <ViewTask currentTaskId={currentTaskId} refetch={refetchTasks} />
      </Box>
    </Flex>
  );
}

export default Home;
