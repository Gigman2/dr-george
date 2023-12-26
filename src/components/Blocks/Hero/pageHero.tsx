import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { HiArrowLongRight } from 'react-icons/hi2'

interface IProp {
  title?: string
}

const PageHero: FC<IProp> = ({
  title,
}) => {
  return (
    <Box
      w="full"
      bgSize="contain"
      alignItems={"center"}
      minH={'calc(70vh - 150px)'}
      h={'70vh'}
      bg="base.blue-dark"
      position={"relative"}
      overflow={'hidden'}
    >
      <Flex align={"center"} justify={"center"} pos={"absolute"} top={0} left={0} bg={"#021821d6"} w={'100%'} h="100%">
        <Text color={"white"} textAlign={"center"} fontSize={64} fontWeight={600} letterSpacing={1.3}>{title}</Text>
      </Flex>
      <Image src="/images/hero image 2.png" alt="bg" />
    </Box>
  )
}

export default PageHero