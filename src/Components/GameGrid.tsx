import { Image, SimpleGrid, Spinner, Text, VStack, Flex } from "@chakra-ui/react";
import useFilteredGames from "../hooks/useFilteredGames";
import GameCard from "./GameCard";
import GameCardSkeletons from "./GameCardSkeletons";
import sad from "../assets/sad.png";

interface Props {
  genre?: string;
  platform?: string;
  sortOrder?:string;
  search?:string;
}

const GameGrid = ({ genre, platform,sortOrder,search }: Props) => {
  const { filteredGames, isLoading, error } = useFilteredGames(genre || "", platform || "",sortOrder||"",search||"");
  console.log("Games fetched...", filteredGames.length);
  const skeletons = [1, 2, 3, 4, 5];
  if(search!="")console.log(search)
  return (
    <Flex direction="column" w="100%"  justify="center" align="center" padding="5px">
      
      {isLoading && <Spinner />}
      {filteredGames && Array.isArray(filteredGames) && filteredGames.length > 0 ? (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          spacing={3}
          w="100%"
        >
          {isLoading && skeletons.map((s) => <GameCardSkeletons key={s} />)}
          {filteredGames.map((g) => <GameCard game={g} key={g.id} />)}
        </SimpleGrid>
      ) : (
        <VStack spacing={3}>
          <Image src={sad} boxSize="80px" />
          <Text fontSize={"xx-large"} fontWeight={500}>No Games Found!</Text>
        </VStack>
      )}
    </Flex>
  );
};

export default GameGrid;
