export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import Header from '@/components/Header'
import Feed from '@/components/Feed'
import { Flex } from '@chakra-ui/react'
import Suggestions from "@/components/Suggestions";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Página del feed de posts',
}

export default function Home() {
  return (
    <Flex>
      <Flex direction="column" flex="1">
        <Header />
        <Feed />
      </Flex>
      <Suggestions />
    </Flex>
  );
}
