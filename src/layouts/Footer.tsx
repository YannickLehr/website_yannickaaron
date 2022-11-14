import React from 'react';
import { Container, Row, Text, CSS, Col } from '@nextui-org/react';
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
        borderTop: '1px solid $footerDivider',
        marginTop: '10px',
        shadow: '$sm',
        shadowColor: '$footerDivider',
        ...containerCss
      }}
      gap={2}
    >
      <Row align="center" justify="center">
        <div style={{ margin: 5 }}>
          <Link href="#">
            <FaGithub size={25} />
          </Link>
        </div>
        <div style={{ margin: 5 }}>
          <Link href="#">
            <FaLinkedin size={25} />
          </Link>
        </div>
      </Row>
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
    </Container>
  );
};

export default Footer;
