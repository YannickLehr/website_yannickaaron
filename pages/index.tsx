import Home from 'components/home-page/home'
import SplitScreen from 'components/home-page/SplitScreen'
import PageLayout from 'components/layouts/pageLayout'
import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { Heading, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'

const Stat = (props: Props) => {
  const { label, value, ...boxProps } = props
  return (
    <Box
      px={{ base: '4', md: '6' }}
      py={{ base: '5', md: '6' }}
      bg="bg-surface"
      borderRadius="lg"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      {...boxProps}
    >
      <Stack>
        <Text fontSize="sm" color="muted">
          {label}
        </Text>
        <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>{value}</Heading>
      </Stack>
    </Box>
  )
}

const Index = (props) => {
  const { weatherData } = props
  return (
    <PageLayout title="Yannick Aaron Lehr - Tech Consultant">
      <Home/>
      {!weatherData.error && (
         <Box as="section" py={{ base: '4', md: '8' }}>
         <Container>
           <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: '5', md: '6' }}>
               <Stat label="Today" value={weatherData.daily.temperature_2m_max[0]} />
               <Stat label="Tomorrow" value={weatherData.daily.temperature_2m_max[1]} />
               <Stat label="in 2 days" value={weatherData.daily.temperature_2m_max[2]} />
           </SimpleGrid>
         </Container>
       </Box>
      )}
    </PageLayout>
  )
}

export async function getServerSideProps({ req }) {
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  //make a get request to geolaction-db to get the city 
  const response = await fetch(`https://geolocation-db.com/json/${ip}`);
  const data = await response.json();
  const response_weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.latitude}&longitude=${data.longitude}&daily=temperature_2m_max&timezone=UTC`);
  const data_weather = await response_weather.json();
  console.log(data_weather)
  return {
    props: {
      weatherData: data_weather,
    },
  }
}

export default Index
