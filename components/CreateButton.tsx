import { Icon } from '@chakra-ui/react';
import React, { useState, useRef, useEffect } from 'react';
import { FaPlus, FaRegFileVideo } from 'react-icons/fa';
import { MdOutlineAddBox } from 'react-icons/md';

export interface CreateButtonProps {
    showText?: boolean
}

const CreateButton: React.FC<CreateButtonProps> = ({ showText = true }) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleButtonClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div style={{ position: 'relative' }}>
            <button onClick={handleButtonClick} >
                <Icon as={MdOutlineAddBox} boxSize="6" /> {showText ? "Crear" : ""}
            </button>
            {showMenu && (
                <div ref={menuRef} style={{ position: 'absolute', top: '40px', left: '0', backgroundColor: '#333', color: '#fff', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', zIndex: 1000 }}>
                    <div style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <FaPlus style={{ marginRight: '10px' }} />
                        <span>Publicación</span>
                    </div>
                    <div style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <FaRegFileVideo style={{ marginRight: '10px' }} />
                        <span>Vídeo en directo</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateButton;
