'use client';

import { Box, VStack, Link, Icon, Button } from "@chakra-ui/react";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaHome, FaSearch, FaCompass, FaInstagram, FaUserCircle } from "react-icons/fa";
import { SlPaperPlane } from "react-icons/sl";
import { TfiVideoClapper } from "react-icons/tfi";
import CreateButton from "./CreateButton";
import React, { useEffect, useState } from "react";
import Notifications from "./Notifications";
import Search from "./Search";
import ShowMessages from "./ShowMessages";
import { usePathname, useRouter } from "next/navigation";

export interface SidebarProps {
  showText?: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ showText = true }) => {

  const pathname = usePathname()
  const router = useRouter()

  const [showNotifications, setShowNotifications] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [showMessages, setShowMessages] = useState<boolean>(false)

  useEffect(() => {
    if (pathname === '/messages') {
      setShowMessages(true)
      showText = false
    } else {
      setShowMessages(false)
    }
  }, [pathname])

  const handleNotifications = () => {
    setShowNotifications(!showNotifications)
    setShowSearch(false)
    setShowMessages(false)
  }

  const handleSearch = () => {
    setShowSearch(!showSearch)
    setShowNotifications(false)
    setShowMessages(false)
  }

  const handleShowMessages = () => {
    setShowMessages(!showMessages)
    setShowNotifications(false)
    setShowSearch(false)
    if (pathname !== '/messages') {
      router.push('/messages');
    }
  }

  const calculateWidth = () => {
    if (showMessages) {
      return "50px"
    }
    return "auto"
  }

  return (
    <Box as="nav" width={calculateWidth()} padding="20px" bg="black" color="white" height="100vh" className="flex flex-row">
      <VStack spacing="20px" align="start" >
        <Link href="/"><Icon as={FaInstagram} boxSize="10" /></Link>
        <Link href="/"><Icon as={FaHome} boxSize="6" />  {showText ? "Inicio" : ""}</Link>
        <Button variant="unstyled" onClick={handleSearch} ><Icon as={FaSearch} boxSize="6" />{showText ? "Búsqueda" : ""}</Button>
        <Link href="/explore"><Icon as={FaCompass} boxSize="6" /> {showText ? "Explorar" : ""}</Link>
        <Link href="/reels"><Icon as={TfiVideoClapper} boxSize="6" /> {showText ? "Reels" : ""}</Link>

        <Button variant="unstyled" onClick={handleShowMessages}>
          <Icon as={SlPaperPlane} boxSize="6" /> {showText ? "Mensajes" : ""}
        </Button>

        <Button variant="unstyled" onClick={handleNotifications} ><Icon as={AiTwotoneHeart} boxSize="6" />{showText ? "Notificaciones" : ""}</Button>
        <CreateButton showText={showText}></CreateButton>
        <Link href="/profile"><Icon as={FaUserCircle} boxSize="6" /> {showText ? "Perfil" : ""}</Link>
      </VStack>
      {showNotifications && <Notifications />}
      {showSearch && <Search />}
      {showMessages && <ShowMessages />}
    </Box>
  );
};

export default Sidebar;
