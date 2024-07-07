import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Feed from '@/components/Feed'
import { Flex } from '@chakra-ui/react'
import Suggestions from "@/components/Suggestions";

export default function Home() {
  return (
    <Flex>
      <Sidebar />
      <Flex direction="column" flex="1">
        <Header />
        <Feed />
      </Flex>
      <Suggestions />
    </Flex>
  );
}
