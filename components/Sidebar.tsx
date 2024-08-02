'use client';

import { Box, VStack, Icon, Button } from "@chakra-ui/react";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaHome, FaSearch, FaCompass, FaInstagram, FaUserCircle } from "react-icons/fa";
import { SlPaperPlane } from "react-icons/sl";
import { TfiVideoClapper } from "react-icons/tfi";
import CreateButton from "./CreateButton";
import React, { useEffect, useState } from "react";
import NotificationsView from "./NotificationsView";
import SearchView from "./SearchView";
import MessagesView from "./MessagesView";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Sidebar: React.FC = () => {

  const userId = 1 //TODO cambiar al añadir contexto y autenticacion
  const pathname = usePathname()
  const router = useRouter()

  const [isShowText, setIsShowText] = useState<boolean>(true)
  const [showNotifications, setShowNotifications] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [showMessages, setShowMessages] = useState<boolean>(false)

  useEffect(() => {
    if (pathname === '/messages') {
      setShowMessages(true)
      setIsShowText(true)
    } else {
      setShowMessages(false)
    }
  }, [pathname])

  //TODO las variables estas meterlas en un contexto react
  const showText = () => {
    if (showNotifications || showSearch || showMessages) {
      setIsShowText(false)
    } else {
      setIsShowText(true)
    }
  }

  useEffect(() => {
    showText()
  }, [showNotifications, showSearch, showMessages])

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
    <Box as="nav" zIndex="1" width={calculateWidth()} padding="20px" color="white" className="flex fixed t-0 l-0 w-1/3 h-screen bg-black">
      <VStack spacing="20px" align="start" >
        <Link href="/"><Icon as={FaInstagram} boxSize="10" /></Link>
        <Link href="/"><Icon as={FaHome} boxSize="6" />  {isShowText ? "Inicio" : ""}</Link>
        <Button variant="unstyled" onClick={handleSearch} ><Icon as={FaSearch} boxSize="6" />{isShowText ? "Búsqueda" : ""}</Button>
        <Link href="/explore"><Icon as={FaCompass} boxSize="6" /> {isShowText ? "Explorar" : ""}</Link>
        <Link href="/reels"><Icon as={TfiVideoClapper} boxSize="6" /> {isShowText ? "Reels" : ""}</Link>

        <Button variant="unstyled" onClick={handleShowMessages}>
          <Icon as={SlPaperPlane} boxSize="6" /> {isShowText ? "Mensajes" : ""}
        </Button>

        <Button variant="unstyled" onClick={handleNotifications} ><Icon as={AiTwotoneHeart} boxSize="6" />{isShowText ? "Notificaciones" : ""}</Button>
        <CreateButton showText={isShowText}></CreateButton>
        <Link href={`/profile/${userId}`}>
          <Icon as={FaUserCircle} boxSize="6" /> {isShowText ? "Perfil" : ""}
        </Link>
      </VStack>
      <div className="ml-[50px]">
        {showNotifications && <NotificationsView />}
        {showSearch && <SearchView />}
        {showMessages && <MessagesView />}
      </div>
    </Box>
  );
};

export default Sidebar;
