import { Checkbox, Flex, Input, Text } from "@chakra-ui/react";

function ViewTask({ currentTask }) {
  let date = new Date(currentTask?.dueDate);
  let day = "";
  let month = "";

  switch (date.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "asdf";
  }

  switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "asdf";
  }

  const DateString = `${day}, ${month} ${date.getDate()}, ${
    date.getHours() % 12
  }:${date.getMinutes()} ${date.getHours() > 12 ? "PM" : "AM"}`;

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
          isChecked={currentTask.completed}
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
          value={currentTask?.title}
        />
        <Input
          placeholder="Description"
          fontSize="14px"
          fontWeight="500"
          border="none"
          _focusVisible={{}}
          value={currentTask?.body ? currentTask.body : ""}
        />
      </Flex>
    </Flex>
  ) : (
    <Flex justifyContent="center" alignItems="center" h="100%">
      <Text color="gray.400">Click on a task to view its details</Text>
    </Flex>
  );
}

export default ViewTask;
