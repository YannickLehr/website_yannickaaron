/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Grid, Card, Text, Spacer } from '@nextui-org/react';

export default function Techstack() {
  const techstackList = [
    {
      title: 'React',
      img: 'https://reactjs.org/logo-og.png'
    },
    {
      title: 'Pytorch',
      img: 'https://pytorch.org/assets/images/pytorch-logo.png'
    },
    {
      title: 'PostgreSQL',
      img: 'https://www.postgresql.org/media/img/about/press/elephant.png'
    }
  ];
  return (
    <Container>
      <h1>Technology Stack</h1>
      <h3>I usually use these libraries or frameworks in my projects</h3>
      <p>Check out a few of my most used technology stack</p>
      <Grid.Container gap={2} justify="flex-start">
        {techstackList.map((item, index) => (
          <Grid xs={6} sm={2} key={index}>
            <Card>
              <Card.Body css={{ p: 0 }}>
                <Card.Image src={item.img} width="50%" height={150} alt={item.title} />
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>{' '}
      <Spacer y={3} />
    </Container>
  );
}
