// Importing UI Components

import { VStack } from "@chakra-ui/react";

// Importing Required Images

import lightTexture from "../images/box-texture.png"

const FullScreenSection = ({ children, ...boxProps}) =>
{
    return (
            <VStack
                minHeight = "100vh"
                width = "94vw"
                marginLeft = "5vw"
                overflowX = "hidden"
                backgroundImage = { lightTexture }
                color = "#FFFFFF"
                { ...boxProps }
            >
                { children }
            </VStack>
    )
}

export default FullScreenSection;