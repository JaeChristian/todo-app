import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../assets/home.css";
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
      ></Flex>
      <Flex
        borderRightWidth="1px"
        borderColor="gray.200"
        w={{ base: "100%", sm: "42.5%" }}
      >
        <Tasks tasks={tasks} loading={isTasksLoading} />
      </Flex>
      <Flex display={{ base: "none", sm: "flex" }}>view</Flex>
    </Flex>
  );
}

export default Home;
