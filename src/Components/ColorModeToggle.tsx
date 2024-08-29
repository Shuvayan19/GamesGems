import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        size="sm"
        colorScheme="green"
        onChange={toggleColorMode}
      />
      <Text fontSize="sm" whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeToggle;
