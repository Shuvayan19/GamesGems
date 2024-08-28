import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


interface Props {
  sortOrder?: string;
  onSortOrderChange: (s: string) => void;
}
const SortList = ({
  sortOrder = "relevance",
  onSortOrderChange,
}: Props) => {
  const sortOrderSet = [
    {
      id: "relevance",
      label: "Relevance"
    },
    {
      id: "popularity",
      label: "Popularity"
    },
    {
      id: "release-date",
      label: "Release Date"
    },
    {
      id: "alphabetical",
      label: "Alphabetical"
    },
  ];
  console.log(sortOrderSet);
  const currentOrderObj=sortOrderSet.find(s=>s.id===sortOrder);
  const currentOrder=currentOrderObj?<span style={{ fontSize: "smaller" }}>{currentOrderObj.label}</span>:"";
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentOrder}
      </MenuButton>
      <MenuList>
        {/*I have converted set to array dynamically using spread operator for mapping*/}
        {sortOrderSet.map((p) => (
          <MenuItem
            onClick={() => onSortOrderChange(p.id)}
            key={p.id}
            bg={p.id === sortOrder ? "blue.500" : "inherit"}
          >
            {p.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortList;
