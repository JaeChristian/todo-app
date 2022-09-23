import { Checkbox, Flex, Text } from "@chakra-ui/react";

function Task({ task }) {
  console.log(task);
  return (
    <Flex
      gap={1}
      w="100%"
      _hover={{ bg: "gray.50" }}
      _focus={{ bg: "gray.100" }}
      pl={2}
      pr={2}
      tabIndex="1"
    >
      <Checkbox
        colorScheme="gray"
        borderColor="blackAlpha.300"
        _focusVisible={{}}
        _selected={{}}
        defaultChecked={task.completed}
        size="md"
      />
      <Flex
        borderBottom="solid 1px"
        borderBottomColor="gray.100"
        p={2}
        w="100%"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Text fontWeight="600" fontSize="14px">
          {task.title}
        </Text>
        {!task.list && (
          <Text fontSize="2xs" fontWeight="700" color="gray.400">
            Inbox
          </Text>
        )}
      </Flex>
    </Flex>
  );
}

export default Task;
