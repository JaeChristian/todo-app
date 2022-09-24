import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../assets/home.css";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import useFetch from "../hooks/useFetch";

function Home() {
  const navigate = useNavigate();
  // localStorage.removeItem("token");
  const { loading: authLoading, error: authError } = useFetch("authenticate");
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
        gap={2}
      >
        <AddTask refetch={refetchTasks} />
        <Tasks tasks={tasks} loading={isTasksLoading} />
      </Flex>
      <Flex display={{ base: "none", sm: "flex" }} className="view-task-panel">
        view
      </Flex>
    </Flex>
  );
}

export default Home;
