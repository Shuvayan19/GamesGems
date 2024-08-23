import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import genreImgMap from "../services/genreListImg";
import { color } from "framer-motion";

const GenreList = () => {
  const genreList = useGenre(); // Assuming `useGenre` returns { genreList: string[] }
  const { colorMode } = useColorMode();
  console.log("current colorMode", colorMode);
  return (
    <List padding={2}>
      {genreList.map((g) => {
        // Conditionally apply style based on genre and theme
        const shouldApplyFilter =
          [
            "Mmorpg",
            "Shooter",
            "Strategy",
            "Action rpg",
            "Battle royale",
            "Arpg",
            "Fighting",
            "Card game",
            "Racing",
            "Mmo",
            "Fantasy",
          ].includes(g) && colorMode === "dark";

        return (
          <ListItem key={g}>
            <HStack>
              <Image
                paddingY="2px"
                boxSize="32px"
                borderRadius={8}
                src={genreImgMap[g]}
                style={shouldApplyFilter ? { filter: "invert(100%)" } : {}}
              />
              <Button onClick={() => console.log(g)} variant="link">
                {g}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
