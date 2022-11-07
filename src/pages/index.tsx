import { Button } from '@nextui-org/react';

import SiteWrapper from 'layouts/SiteWrapper';
import Techstack from 'modules/about/Techstack';
import { NextPage } from 'next';

const Home: NextPage = ({}) => {
  return (
    <SiteWrapper>
      <Techstack />
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
        <Button>Click me</Button>
      </h1>
    </SiteWrapper>
  );
};

export default Home;
