
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";

interface Props {
  platform?: string ;
  onPlatformChange: (p: string) => void;
}
const PlatformList = ({ platform="All Platforms", onPlatformChange }: Props) => {
  const platformSet=usePlatform();
  console.log(platformSet);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform}
      </MenuButton>
      <MenuList>
        {/*I have converted set to array dynamically using spread operator for mapping*/}
        {platformSet.map((p) => (
          <MenuItem
            onClick={() => onPlatformChange(p)}
            key={p}
            bg={p === platform ? "blue.500" : "inherit"}
          >
            {p}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
