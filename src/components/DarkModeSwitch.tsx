import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

import { BsSun } from 'react-icons/bs';
import { BsMoonStars } from 'react-icons/bs';

const DarkModeSwitch: React.FC = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Switch
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      size="xl"
      iconOn={<BsMoonStars />}
      iconOff={<BsSun />}
    />
  );
};

export default DarkModeSwitch;
