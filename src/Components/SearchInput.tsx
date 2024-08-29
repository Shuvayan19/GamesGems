import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import {TfiSearch} from "react-icons/tfi";

const SearchInput = () => {
  return (
    <InputGroup>
        <InputLeftElement children={<TfiSearch/>}/>
        <Input borderRadius={20} placeholder='Search games...' variant="filled"/>
    </InputGroup>
  )
}

export default SearchInput