import {Container, Divider, Heading} from '@chakra-ui/react'
import { SimpleGrid } from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbQtProbabilityTheory from '../public/images/works/qt_probability_theory_1.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={3}>
        Works
      </Heading>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="qt_probability_theory" title="Probability theory. Laboratory work. Qt" thumbnail={thumbQtProbabilityTheory}>
            Lab on Probability Theory in GUI Implementation in Qt C++
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
