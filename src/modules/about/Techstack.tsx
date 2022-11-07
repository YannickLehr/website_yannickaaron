/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Grid, Card, Text, Spacer } from '@nextui-org/react';

export default function Techstack() {
  const techstackList = [
    {
      title: 'React',
      img: '/techstack/react.png'
    },
    {
      title: 'Next JS',
      img: '/techstack/nextjs.png'
    },
    {
      title: 'Vue JS',
      img: '/techstack/vuejs.png'
    },
    {
      title: 'Nuxt JS',
      img: '/techstack/nuxtjs.png'
    },
    {
      title: 'Tailwind',
      img: '/techstack/tailwind.png'
    },
    {
      title: 'Bootstrap',
      img: '/techstack/bootstrap.png'
    },
    {
      title: 'Laravel',
      img: '/techstack/laravel.png'
    },
    {
      title: 'Tensorflow',
      img: '/techstack/tensorflow.png'
    },
    {
      title: 'Pytorch',
      img: '/techstack/pytorch.png'
    },
    {
      title: 'PostgreSQL',
      img: '/techstack/postgresql.png'
    },
    {
      title: 'MySQL',
      img: '/techstack/mysql.png'
    },
    {
      title: 'Figma',
      img: '/techstack/figma.png'
    },
    {
      title: 'Google Data Studio',
      img: '/techstack/datastudio.png'
    },
    {
      title: 'Power BI',
      img: '/techstack/powerbi.png'
    },
    {
      title: 'Tableau',
      img: '/techstack/tableau.png'
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
