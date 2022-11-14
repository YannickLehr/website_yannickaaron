import { Card, Text, Grid, Row, Container, Col } from '@nextui-org/react';

import SiteWrapper from 'layouts/SiteWrapper';
import { NextPage } from 'next';

import Hero from 'components/Hero';

const Home: NextPage = ({}) => {
  return (
    <SiteWrapper>
      <Hero />
      <h2>Dynamic Grid</h2>
      <Container gap={0}>
        <Row gap={1}>
          <Col>
            <MockItem text="1 of 3" />
          </Col>
          <Col>
            <MockItem text="2 of 3" />
          </Col>
          <Col>
            <MockItem text="3 of 3" />
          </Col>
        </Row>
      </Container>
      <h2>Fixed Grid</h2>
      <Grid.Container gap={2} justify="center">
        <Grid md={4} xs={12}>
          <MockItem text="1 of 3" />
        </Grid>
        <Grid md={4} xs={12}>
          <MockItem text="2 of 3" />
        </Grid>
        <Grid md={4} xs={12}>
          <MockItem text="3 of 3" />
        </Grid>
      </Grid.Container>
    </SiteWrapper>
  );
};

type MockItemProps = {
  text: string;
};

export const MockItem = ({ text }: MockItemProps) => {
  return (
    <Card css={{ h: '$24', $$cardColor: '$colors$primary' }}>
      <Card.Body>
        <Text h6 size={15} color="white" css={{ mt: 0 }}>
          {text}
        </Text>
      </Card.Body>
    </Card>
  );
};

export default Home;
