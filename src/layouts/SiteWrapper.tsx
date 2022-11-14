import { Container } from '@nextui-org/react';
import Navbar from 'layouts/Navbar';
import Footer from 'layouts/Footer';

type Props = React.ComponentProps<typeof Container>;

const SiteWrapper: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <>
      <Navbar />
      <Container lg {...rest}>
        <div>{children}</div>
      </Container>
      <Footer />
    </>
  );
};

export default SiteWrapper;
