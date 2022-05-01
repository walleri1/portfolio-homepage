import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Probability theory. Laboratory work. Qt">
    <Container>
      <Title>
        Probability theory. Laboratory work. Qt <Badge>2017</Badge>
      </Title>
      <P>
        Lab on Probability Theory in GUI Implementation in Qt C++
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Qt, C++</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/walleri1/Probability-theory.-Laboratory-work.-Qt" target={"_blank"}>
            github.com/walleri1/Probability-theory.-Laboratory-work.-Qt <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="https://github.com/walleri1/Probability-theory.-Laboratory-work.-Qt/raw/master/img/doc/1.PNG" alt="Probability theory. Laboratory work. Qt" />
      <WorkImage src="https://github.com/walleri1/Probability-theory.-Laboratory-work.-Qt/raw/master/img/doc/2.PNG" alt="Probability theory. Laboratory work. Qt" />
      <WorkImage src="https://github.com/walleri1/Probability-theory.-Laboratory-work.-Qt/raw/master/img/doc/3.PNG" alt="Probability theory. Laboratory work. Qt" />
      <WorkImage src="https://github.com/walleri1/Probability-theory.-Laboratory-work.-Qt/raw/master/img/doc/4.PNG" alt="Probability theory. Laboratory work. Qt" />
      <WorkImage src="https://github.com/walleri1/Probability-theory.-Laboratory-work.-Qt/raw/master/img/doc/5.PNG" alt="Probability theory. Laboratory work. Qt" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
