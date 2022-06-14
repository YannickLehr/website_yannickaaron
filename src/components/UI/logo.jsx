import { chakra } from "@chakra-ui/react";
import { Box,Text } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Box py="2">
        <NextImage
          src="/logo_test.svg"
          width="180"
          height="350"
          alt="avatar bigheads"
          placeholder="blur"
          blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
          priority
        />
        </Box>
    </NextLink>
  );
};

export default Logo;
