import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'


const Ministry: FC = () => {
  return (
    <Box
        bg={'#102033'}
        py={20}
    >
        <Text color={"white"} fontWeight={"bold"} fontSize={24} textAlign={"center"}>Listen to the latest Audio Messages</Text>
        <Flex direction={"column"} justify={'center'} align={"center"}>
            <Text textAlign={"center"} w={124} mt={12} color={"white"} fontFamily={"Montserrat"}>
                Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.
            </Text>
        </Flex>

        <Box px={4} mt={24} pos={"relative"}>
            <Flex 
                pos={"absolute"} 
                h={"100%"} w={72} 
                left={0} top={0}
                align={"center"}
                pl={16}
                bg={"linear-gradient(90deg, rgba(16,32,51,1) 46%, rgba(16,32,51,0.8576680672268908) 58%, rgba(16,32,51,0.5663515406162465) 77%, rgba(16,32,51,0.08735994397759106) 93%, rgba(16,32,51,0) 100%)"}>
                <Icon as={HiArrowLongLeft} color="white" fontSize={40}/>
            </Flex>
            <Flex gap={8} align={"center"}>
                <Box w={64} h={64} bg="gray.500" flex={1}></Box>
                <Box w={96} h={96} bg="gray.500"></Box>
                <Box w={64} h={64} bg="gray.500" flex={1}></Box>
                <Box w={64} h={64} bg="gray.500" flex={1}></Box>
                <Box w={64} h={64} bg="gray.500" flex={1}></Box>
            </Flex>
            <Flex 
                pos={"absolute"} 
                h={"100%"} w={72} 
                right={0} top={0}
                align={"center"}
                justify={"center"}
                pl={0}
                bg={"linear-gradient(270deg, rgba(16,32,51,1) 46%, rgba(16,32,51,0.8576680672268908) 58%, rgba(16,32,51,0.5663515406162465) 77%, rgba(16,32,51,0.08735994397759106) 93%, rgba(16,32,51,0) 100%)"}>
                <Icon as={HiArrowLongRight} color="white" fontSize={40}/>
            </Flex>
        </Box>
        <Flex justify={"center"}>
            <CustomButton mt={24} w={48} title='View More' bgColor={"white"} rounded="none" fontSize={16} color="black" fontFamily="Garamond" />
        </Flex>
    </Box>
  )
}

export default Ministry