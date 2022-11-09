import React from 'react';
import { Container, Row, Text, CSS } from '@nextui-org/react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export interface Props {
  css?: CSS;
  containerCss?: CSS;
}

const Footer: React.FC<Props> = ({ css, containerCss }) => {
  // const year = new Date().getFullYear();
  return (
    <Container
      fluid
      css={{
        zIndex: '$1',
        padding: '$md $sm',
        '@xsMax': {
          padding: '$sm $xs'
        },
        ...containerCss
      }}
      gap={2}
    >
      <Row css={css} justify="center">
        <Text
          span
          css={{
            fontSize: '$sm',
            color: '$accents7',
            dflex: 'center'
          }}
        >
          Created&nbsp;by&nbsp;
          <Link href="#" rel="noreferrer" target="_blank">
            Yannick Aron Lehr
          </Link>
        </Text>
      </Row>
      <Row align="center" justify="center">
        <Link href="#" rel="noreferrer" target="_blank">
          <FaGithub />
        </Link>
        <Link href="#" rel="noreferrer" target="_blank">
          <FaLinkedin />
        </Link>
      </Row>
    </Container>
  );
};

export default Footer;
