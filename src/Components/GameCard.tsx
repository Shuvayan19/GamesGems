import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatfromIcon from "./PlatfromIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const altext = "thumnail of " + game.title + "game";
  const bgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <Card bg={bgColor}>
      <CardBody>
        <Image marginBottom={3} src={game.thumbnail} alt={altext} borderRadius="lg" />
          <HStack>
            <PlatfromIcon platform={game.platform} />
            <Spacer/>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              {game.genre}
            </Badge>
          </HStack>
        <Stack mt="6" spacing="2">
          <Heading size="md">{game.title}</Heading>
          <Text>{game.short_description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => window.open(game.game_url)}
          >
            Play Now
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
