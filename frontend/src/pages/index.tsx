import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nekoding</title>
        <meta
          name="description"
          content="Upgrade your skill. Start here with us"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100vh"
      >
        <Text
          fontSize="8xl"
          fontWeight="bold"
          bgGradient="linear(to-l, #8AD4EC,#EF96FF,#FF56A9,#FFAA6C)"
          bgClip="text"
          textAlign="center"
          mt="10"
        >
          Nekoding
        </Text>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          letterSpacing={15}
          bgGradient="linear(to-l, #8AD4EC,#EF96FF,#FF56A9,#FFAA6C)"
          bgClip="text"
          textAlign="center"
        >
          Coming Soon!
        </Text>
      </Flex>
    </div>
  );
};

export default Home;
