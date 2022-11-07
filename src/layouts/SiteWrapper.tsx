import { Container } from '@nextui-org/react';
import Navbar from 'layouts/Navbar';

type Props = React.ComponentProps<typeof Container>;

const SiteWrapper: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <>
      <Container lg {...rest}>
        <Navbar />
        <div>{children}</div>
      </Container>
    </>
  );
};

export default SiteWrapper;
