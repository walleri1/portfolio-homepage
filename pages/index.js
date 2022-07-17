import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {IoLogoGithub, IoLogoVk, IoLogoLinkedin} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        mt={3}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Software Engineer based in Russian Federation!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Vitaliy Turov
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/vitaliy.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Vitaly is currently a hired software developer at <Link href={"https://www.eureca.ru/"} target="_blank">Eureca</Link> in St. Petersburg, Russian Federation.
        </Paragraph>
        <Paragraph>In my free time I like to learn new things like web development and mobile development and desktop development.</Paragraph>
        <Paragraph>
          I will publish my creative work both on my public <Link href="https://github.com/walleri1" target="_blank">GitHub</Link> repositories and on pages with my work.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Sarov, Russian Federation
        </BioSection>
        <BioSection>
          <BioYear>September 2015 to June 2017</BioYear>
          Studied two bachelor&apos;s degrees in
          UNN them. N. I. Lobachevsky, Faculty of Physics
        </BioSection>
        <BioSection>
          <BioYear>September 2017 to June 2020</BioYear>
          Received a bachelor&apos;s degree in
          NNSTU named after R. E. Alekseev, Institute of Radio Electronics and Information Technologies
        </BioSection>
        <BioSection>
          <BioYear>September 2020 to June 2022</BioYear>
          Obtaining a master&apos;s degree in
          NNSTU named after R. E. Alekseev, Institute of Radio Electronics and Information Technologies
        </BioSection>
        <BioSection>
          <BioYear>October 2018 to April 2019</BioYear>
          Worked at <Link href={"https://swtec.group"} target="_blank">SWTecNN</Link>
        </BioSection>
        <BioSection>
          <BioYear>September 2020 to present</BioYear>
          I work at <Link href={"https://radiogigabit.ru"} target="_blank">Radio Gigabit</Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Programming, Music, Ride in a car, Cycling, City walk
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/walleri1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @walleri1
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://vk.com/vturov97" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoVk />}
              >
                @vturov97
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/vitalyturov1997/" target="_blank">
              <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
              >
                @vitalyturov1997
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
