import { Box, VStack, Heading, Text } from "@chakra-ui/react";

// Importing Required Images

import lightTexture from "../images/box-texture.png"

const SideBar = () =>
{
    return (
        <Box
            backgroundImage = { lightTexture }
            position = "fixed"
            left = {0}
            top = {0}
            height = "100vh"
            width = "5vw"
            alignItems = "center"
            justifyContent = "center"
            borderRight = "2px solid red"
        >
            
        </Box>
    )
}

export default SideBar;