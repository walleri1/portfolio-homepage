import {Box, Center, Container, Heading} from '@chakra-ui/react'
// import { SimpleGrid } from "@chakra-ui/react"
import Layout from '../components/layouts/article'
// import Section from '../components/section'
// import { WorkGridItem } from '../components/grid-item'

// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Paragraph from "../components/paragraph";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={3}>
        Works
      </Heading>

        <Box mb={4}>
            <Center><Paragraph>My work will be posted here.</Paragraph></Center>
        </Box>

      {/*<SimpleGrid columns={[1, 1, 2]} gap={6}>*/}
      {/*  <Section>*/}
      {/*    <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>*/}
      {/*      A Markdown note-taking app with 100+ plugins, cross-platform and*/}
      {/*      encrypted data sync support*/}
      {/*    </WorkGridItem>*/}
      {/*  </Section>*/}
      {/*</SimpleGrid>*/}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
