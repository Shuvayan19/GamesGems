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

interface Props {
  onChangeGenre: (g: string) => void;
  genre: string;
}
const GenreList = ({ onChangeGenre, genre }: Props) => {
  const genreList = useGenre(); // Assuming `useGenre` returns { genreList: string[] }
  const { colorMode } = useColorMode();
  console.log("current colorMode", colorMode);
  return (
    <List padding={2}>
      {genreList.map((g) => {
        // Conditionally apply style based on genre and theme
      // console.log("Is current genre:", genre === g, "Current genre:", genre, "Genre:", g);

        const shouldApplyFilter =
          [
            "MMORPG",
            "Shooter",
            "Strategy",
            "Action RPG",
            "Battle Royale",
            "ARPG",
            "Fighting",
            "Card Game",
            "Racing",
            "MMO",
            "Fantasy",
            "Action Game",
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
              
              <Button
                color={genre === g ? "blue.500" : "inherit"}
               

                onClick={() => onChangeGenre(g)}
                variant="link"
              >
              
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
