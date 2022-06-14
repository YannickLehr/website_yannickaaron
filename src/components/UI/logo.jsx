import { chakra } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
        <NextImage
          src="/logo_test.svg"
          width="180"
          height="350"
          alt="avatar bigheads"
          placeholder="blur"
          blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
          priority
        />
    </NextLink>
  );
};

export default Logo;
