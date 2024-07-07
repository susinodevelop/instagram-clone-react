'use client';

import { Box, VStack, Link, Icon } from "@chakra-ui/react";
import { FaHome, FaSearch, FaCompass, FaInstagram, FaRegHeart, FaPlusSquare, FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box as="nav" width="240px" padding="20px" bg="black" color="white" height="100vh">
      <VStack spacing="20px" align="start">
        <Icon as={FaInstagram} boxSize="10" />
        <Link><Icon as={FaHome} boxSize="6" /> Inicio</Link>
        <Link><Icon as={FaSearch} boxSize="6" /> Búsqueda</Link>
        <Link><Icon as={FaCompass} boxSize="6" /> Explorar</Link>
        <Link><Icon as={FaRegHeart} boxSize="6" /> Notificaciones</Link>
        <Link><Icon as={FaPlusSquare} boxSize="6" /> Crear</Link>
        <Link><Icon as={FaUserCircle} boxSize="6" /> Perfil</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
