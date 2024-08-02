'use client'
import Reel from "@/interface/Reel";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

interface ReelViewProps {
    reel: Reel,
    width?: string,
    height?: string,
    withControls?: boolean,
    className?: string,
    onClick?: () => void
}

const ReelView = ({ reel, width = 'auto', height = 'auto', withControls = false, className, onClick }: ReelViewProps) => {
    const [thisReel, setThisReel] = useState<Reel>(reel);

    return (
        <Box
            as="video"
            controls={withControls}
            overflow="hidden"
            width={width}
            height={height}
            objectFit={'cover'}
            className={className}
            onClick={onClick}
        >
            <source src={thisReel.url} type="video/mp4" />
        </Box>
    );
}

export default ReelView;
