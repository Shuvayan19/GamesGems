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

  // Helper function to render the button
  const renderButton = (g: string) => {
    const isAllGames = g === "All Games";

    return (
      <Button
        color={genre === g ? "blue.500" : "inherit"}
        fontSize={isAllGames ? "xx-large" : "medium"}
        marginY={isAllGames ? "10px" : "0"}
        onClick={() => onChangeGenre(g)}
        variant="link"
      >
        {g}
      </Button>
    );
  };

  return (
    <List padding={1}>
      {genreList.map((g) => {
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
            {g === "All Games" ? (
              renderButton(g) 
            ) : (
              <HStack>
                <Image
                  paddingY="2px"
                  boxSize="32px"
                  borderRadius={8}
                  src={genreImgMap[g]}
                  style={shouldApplyFilter ? { filter: "invert(100%)" } : {}}
                />
                {renderButton(g)}
              </HStack>
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
