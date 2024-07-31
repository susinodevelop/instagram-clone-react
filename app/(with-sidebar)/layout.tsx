import { Box } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="w-screen flex flex-row ">
            <Sidebar />
            <Box className="w-2/3 ml-[33.333333%]">
                {children}
            </Box>
        </div>
    );
}

export default RootLayout;