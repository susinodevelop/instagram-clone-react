'use client';

import { Box, VStack, Link, Icon } from "@chakra-ui/react";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaHome, FaSearch, FaCompass, FaInstagram, FaUserCircle } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { SlPaperPlane } from "react-icons/sl";
import { TfiVideoClapper } from "react-icons/tfi";
import CreateButton from "./CreateButton";
import React from "react";

export interface SidebarProps {
  showText?: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ showText = true }) => {
  return (
    <Box as="nav" width="240px" padding="20px" bg="black" color="white" height="100vh">
      <VStack spacing="20px" align="start">
        <Icon as={FaInstagram} boxSize="10" />
        <Link href="/"><Icon as={FaHome} boxSize="6" />  {showText ? "Inicio" : ""}</Link>
        <Link href="/search"><Icon as={FaSearch} boxSize="6" /> {showText ? "Búsqueda" : ""}</Link>
        <Link href="/explore"><Icon as={FaCompass} boxSize="6" /> {showText ? "Explorar" : ""}</Link>
        <Link href="/reels"><Icon as={TfiVideoClapper} boxSize="6" /> {showText ? "Reels" : ""}</Link>
        <Link href="/messages"><Icon as={SlPaperPlane} boxSize="6" /> {showText ? "Mensajes" : ""}</Link>
        <Link href="/notifications"><Icon as={AiTwotoneHeart} boxSize="6" />{showText ? "Notificaciones" : ""}</Link>
        <CreateButton showText={showText}></CreateButton>
        <Link href="/profile"><Icon as={FaUserCircle} boxSize="6" /> {showText ? "Perfil" : ""}</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
