import { Box, Button, Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";

// Fell free to add your social media accounts!
const accounts = [
  { icon: FaGithub, path: "https://github.com/YannickAaron", title: "Github" },
  { icon: FaLinkedin, path: "https://www.linkedin.com/in/yannicklehr/", title: "Linkedin" },
  { icon: FaInstagram, path: "https://www.instagram.com/", title: "Instagram" },
];

const SocialAccounts = () => {
return (
    <Box py="2">
        {accounts.map((item, index) => (
        <ChakraLink
            href={item.path}
            aria-label={item.title}
            mx="2"
            _focus={{ outline: "none" }}
            key={index}
            isExternal
        >
            <Button aria-label={item.title}>
            <Icon as={item.icon} w="6" h="6" />
            </Button>
        </ChakraLink>
        ))}
    </Box>
  );
};

export default SocialAccounts;