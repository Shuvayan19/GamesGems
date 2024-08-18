import { Button, ButtonGroup, Card, CardBody,CardFooter,Divider,Heading,Image, Stack,Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGame'
import PlatfromIcon from './PlatfromIcon'

interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={game.thumbnail}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='2'>
      <Heading size='md'>{game.title}</Heading>
      <Text>
        {game.short_description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${game.id}
      </Text>
      <PlatfromIcon platform={game.platform} />
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={()=>window.open(game.game_url)}>
        {game.platform==='Web Browser'?'Play Now':'Download'}
      </Button>
      
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default GameCard