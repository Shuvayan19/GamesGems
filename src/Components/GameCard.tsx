import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatfromIcon from "./PlatfromIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const altext='thumnail of '+game.title+'game';
  return (
    <Card width="350px">
      <CardBody>
        <Image
          src={game.thumbnail}
          alt= {altext}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="2">
          <Heading size="md">{game.title}</Heading>
          <Text>{game.short_description}</Text>

          <PlatfromIcon platform={game.platform} />
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
