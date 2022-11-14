import { Navbar, Text, Avatar, Dropdown, Input } from '@nextui-org/react';
import { Logo } from 'components/Logo';
import Link from 'next/link';

import DarkModeSwitch from 'components/DarkModeSwitch';

const MainNavbar: React.FC = () => {
  const menuItems = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'About',
      href: '/about'
    }
  ];
  return (
    <Navbar variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%'
          }
        }}
      >
        <Logo />
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        {menuItems.map((item, index) => (
          <Navbar.Link href={item.link}>{item.title}</Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content
        css={{
          '@xs': {
            w: '12%',
            jc: 'flex-end'
          }
        }}
      >
        <Navbar.Item>
          <DarkModeSwitch />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {menuItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item.title}
            activeColor="secondary"
            css={{
              color: index === menuItems.length - 1 ? '$error' : ''
            }}
            isActive={index === 2}
          >
            <Link color="inherit" href={item.href}>
              {item.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
