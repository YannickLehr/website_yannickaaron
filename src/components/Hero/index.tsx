import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Container, Row, Col, Spacer, Button, Grid, Snippet } from '@nextui-org/react';

import { StyledTitle, StyledGradientTitle, StyledSubtitle } from './styles';

import Image from 'components/Image';

const Hero: React.FC = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('docs/guide/getting-started');
  };

  return (
    <Container display="flex" gap={0} justify="space-between" lg={true} wrap="nowrap">
      <Row align="center" wrap="wrap">
        <Col span={8}>
          <StyledTitle css={{ mb: 0 }}>Make&nbsp;</StyledTitle>
          <StyledGradientTitle css={{ mb: 0 }}>beautiful&nbsp;</StyledGradientTitle>
          <StyledTitle css={{ mb: 0, '@xsMax': { d: 'inline-block' } }}>
            websites regardless of your design experience.
          </StyledTitle>

          <StyledSubtitle>Beautiful, fast and modern React UI library.</StyledSubtitle>
        </Col>
        <Col
          span={4}
          css={{
            height: '100%',
            justifyContent: 'center'
          }}
        >
          <Image src="/assets/user_icon.png" alt="Picture of the author" responsive />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
