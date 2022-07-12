import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGraduationCap } from 'react-icons/fa'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import {
  PageSlideFade,
  StaggerChildren,
  CardTransition,
} from 'components/shared/animations/page-transitions'
import { MotionBox } from 'components/shared/animations/motion'
import Header from 'components/shared/header'
import PageLayout from 'components/layouts/pageLayout'

import { resume } from 'data/resume'

interface WorkProps {
  position: string
  organization: string
  startDate: string
  colorMode: string
  endDate?: string
  website?: string
  summary?: string
}

interface EduProps {
  position: string
  organization: string
  startDate: string
  colorMode: string
  alt?: string
  endDate?: string
  studyType?: string
  courses?: string[]
}

const TURQUOISE = '#06b6d4'


const getLogo = (organization: string): string => {
  switch (organization) {
    case 'Frankfurt School of Finance & Management':
      return '/assets/images/organizations/fs.png'
    case 'The University of Western Australia':
      return '/assets/images/organizations/uwa.png'
    case 'Friedrich-List-Schule Wiesbaden':
      return '/assets/images/organizations/ioki.png'
    case 'You Logic AG':
      return '/assets/images/organizations/yl.jpg'
    case 'Green Init UG':
      return '/assets/images/organizations/ioki.png'
    case 'GSA - Global Student Accommodation':
      return '/assets/images/organizations/GSA.jpeg'
    case 'DB Cargo AG':
      return '/assets/images/organizations/db.png'
    case 'ioki – a DB company':
      return '/assets/images/organizations/ioki.png'
    default:
      return '/assets/images/placeholder.png'
  }
}

const EduCard = (props: EduProps) => {
  const { position, organization, startDate, colorMode, endDate, studyType, courses } = props

  const startDateString = startDate ? `${new Date(startDate).getMonth() + 1}/${new Date(startDate).getFullYear()}` : undefined
  const endDateString = endDate ? `${new Date(endDate).getMonth() + 1}/${new Date(endDate).getFullYear()}` : undefined
  
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: 'lg' }}
        bg={useColorModeValue('white', 'gray.800')}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="cover"
              fallbackSrc={'/assets/images/placeholder.png'}
              src={getLogo(organization)}
              alt={organization}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {organization}
              </Heading>
              <Heading
                align="left"
                fontSize="md"
                color={`mode.${colorMode}.career.subtext`}
              >
                {studyType}
              </Heading>
              <Heading
                align="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {position}
              </Heading>
            </Stack>
          </Flex>
          <Stack display={['none', 'none', 'flex', 'flex']}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {startDateString} to {endDateString ? endDateString : 'Present'}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={2}
          mt={3}
          isInline
          alignItems="center"
          display={['none', 'none', 'flex', 'flex']}
        >
          <Text align="left" fontSize="sm" color={`mode.${colorMode}.career.subtext`}></Text>
        </Stack>
      </Box>
    </CardTransition>
  )
}

const WorkCard = (props: WorkProps) => {
  const { position, organization, startDate, colorMode, endDate, website, summary } = props

  const startDateString = startDate ? `${new Date(startDate).getMonth() + 1}/${new Date(startDate).getFullYear()}` : undefined
  const endDateString = endDate ? `${new Date(endDate).getMonth() + 1}/${new Date(endDate).getFullYear()}` : undefined
  
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: 'lg' }}
        bg={useColorModeValue('white', 'gray.800')}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="cover"
              fallbackSrc={'/assets/images/placeholder.png'}
              src={getLogo(organization)}
              alt={organization}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {position}
              </Heading>
              <Heading
                align="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {organization}
              </Heading>
            </Stack>
          </Flex>
          <Stack display={['none', 'none', 'flex', 'flex']}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {startDateString} to {endDateString ? endDateString : 'Present'}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={2}
          mt={3}
          isInline
          alignItems="center"
          display={['none', 'none', 'flex', 'flex']}
        >
          <Text align="left" fontSize="sm" color={`mode.${colorMode}.career.subtext`}>{summary}</Text>
        </Stack>
      </Box>
    </CardTransition>
  )
}

const Resume = ({ work, education }) => {
  const { colorMode } = useColorMode()

  return (
    <PageLayout
      title="Resume"
      description="My educational and professional journey so far"
    >
      <PageSlideFade>
        <StaggerChildren>
        <Heading>
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Education
              </Header>
              <Stack pl={3}>
                <Box as={FaGraduationCap} size="25px" />
              </Stack>
            </Flex>
          </Heading>
          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={12}
          >
            {education.map((education, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <EduCard
                  key={index}
                  position={education.area}
                  organization={education.institution}
                  startDate={education.startDate}
                  endDate={education.endDate}
                  studyType={education.studyType}
                  courses={education.courses}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
          <MotionBox>
            <Heading>
              <Flex alignItems="center">
                <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                  Career
                </Header>
                <Stack pl={3}>
                  <Box as={BsFillBriefcaseFill} size="25px" />
                </Stack>
              </Flex>
            </Heading>
          </MotionBox>
          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={12}
          >
            {work.map((work, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <WorkCard
                  key={index}
                  position={work.position}
                  organization={work.company}
                  website={work.website}
                  startDate={work.startDate}
                  endDate={work.endDate}
                  summary={work.summary}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  )
}

export function getStaticProps() {
  return {
    props: {
      work: resume.work,
      education: resume.education,
    },
  }
}

export default Resume
