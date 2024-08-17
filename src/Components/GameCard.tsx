import { Button, ButtonGroup, Card, CardBody,CardFooter,Divider,Heading,Image, Stack,Text } from '@chakra-ui/react'

interface Props{
    id:number;
    title: string;
    thumbnail:string;
    short_description:string;
}

const GameCard = ({id,title,thumbnail,short_description}:Props) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={thumbnail}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
        {short_description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${id}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default GameCard