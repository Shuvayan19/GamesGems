import { Card,CardBody,CardFooter,Divider,Skeleton, SkeletonText, Stack } from '@chakra-ui/react'


const GameCardSkeletons = () => {
  return (
    <Card width='300px'>
        
        <CardBody>
            <Skeleton height='200px' borderRadius='lg '/>
            <Stack mt={6} spacing={2}>
                <SkeletonText />
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <Skeleton/>
        </CardFooter>

            
        
    </Card>
  )
}

export default GameCardSkeletons