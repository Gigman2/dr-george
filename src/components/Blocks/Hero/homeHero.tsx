import { FC, useEffect, useState } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiArrowLongRight } from 'react-icons/hi2'
import { createClient } from '@/helpers/prismicClient'
import { AllDocumentTypes } from '../../../../prismicio-types'
import { NextPage } from 'next'
import Link from 'next/link'
import HomeHeroLangText from '@/internationalization/homeHero'
import { getLanguage } from '@/helpers/misc'

const HeroDesktop: NextPage = () => {
  const [data, setData] = useState([])
  const client = createClient({})
  const [lang,setLang] = useState('en')
  const text = HomeHeroLangText[lang]
  const defaultLang =  getLanguage()

  useEffect(() => {
      setLang(defaultLang)
  },[defaultLang])

  useEffect(() => {
    // Your asynchronous logic here
    const fetchData = async () => {
      const componentData = await client.getAllByType('home_hero', {
        fetchOptions: {
          cache: 'no-store',
          next: { tags: ['prismic', 'home_hero'] },
        }
      })

      setData(componentData)
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      w="full"
      alignItems={"center"}
      minH={'calc(100vh - 150px)'}
      h={'100vh'}
      bg="base.blue-dark"
      position={"relative"}
      overflow={'hidden'}
    >
      <Flex align={"center"} pos={"absolute"} top={0} left={0} bg={"#021821d6"} w={'100%'} h="100%" zIndex={3}>
        <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(7, 1fr)'}} gap={12}  px={{ base: 8, '2xl': 36 }}>
          <GridItem colSpan={{base: 2, md: 3,  lg: 5, xl: 3}}>
            <Text fontSize={{base: 44, md: 52, xl: 64}} textAlign={{base:"left"}} fontWeight={600} color={"white"} lineHeight={1.1}>{text.heroTitle}</Text>
            <Text mt={8} color={"white"} textAlign={{base:"left"}} fontSize={{base: 12, sm: 16}} fontFamily={"Montserrat"}>{text.subTitle}</Text>
            
            <Flex justify={{base: "center", lg: "flex-start"}}>
              <Flex mt={16} color="white" gap={4} fontSize={20}>
                <Link href={'https://www.instagram.com/drgwarthur'} target='_'>
                    <Icon fontSize={20} as={FaInstagram} color={"white"} />
                </Link>
                <Link href={'https://www.facebook.com/DrGWArthur?mibextid=LQQJ4d'} target='_'>
                    <Icon fontSize={20} as={FaFacebook} color={"white"}/>
                </Link>
                <Link href={'https://youtube.com/@DrGWArthur'} target='_'>
                    <Icon fontSize={20} as={FaYoutube} color={"white"} />
                </Link>
              </Flex>
            </Flex>

            {/* <Flex mt={24} justify={{base: "center", lg: "flex-start"}}>
              <Flex align={"center"} gap={2}>
                <Box width={2} h={2} rounded={"full"} bg={"whiteAlpha.500"}></Box>
                <Box width={3} h={3} rounded={"full"} bg={"whiteAlpha.800"}></Box>
                <Box width={2} h={2} rounded={"full"} bg={"whiteAlpha.500"}></Box>
                <Box width={2} h={2} rounded={"full"} bg={"whiteAlpha.500"}></Box>
              </Flex>
            </Flex> */}
          </GridItem>

          <GridItem colSpan={{base: 0,  lg: 2, xl: 3}} display={{base: 'none', xl: 'block'}}>
          </GridItem>

          <GridItem colSpan={{base: 0, lg: 1}} display={{base: 'none', lg: 'block'}}>
            <Flex w="100%" justify={"flex-end"} align={"center"} h="50vh">
              {/* <Icon as={HiArrowLongRight} color="gray.300" fontSize={48}/> */}
            </Flex>
          </GridItem>
        </Grid>
        <Box justifyContent={"flex-end"} display={{base: 'none', lg: 'flex'}} pos={"absolute"} bottom={{md: '-500px', xl: "-300px"}} right={{md: 0, lg: "-200px", xl: 24}}>
          <Image w={{md: "90%"}} src={data[0]?.data?.cutout_image?.url} alt="Rev George"/>
        </Box>
      </Flex>
      <Box pos={"absolute"} w="100%" h="100%" bgImage={data[0]?.data?.cover_image?.url} bgPos={"center"}>

      </Box>
    </Box>
  )
}

export default HeroDesktop
