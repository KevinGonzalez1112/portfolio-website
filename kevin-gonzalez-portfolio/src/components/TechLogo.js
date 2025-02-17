// Importing UI Components

import { Flex, HStack, Text } from "@chakra-ui/react";

// Importing Font Awesome Icon Libraries

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing Required Images 

import BoxTexture from "../images/box-texture.png"

const TechStackLogos = ({ data }) =>
{
    return (
        <Flex
            wrap = "wrap"
        >
            <HStack
                spacing = {[8, 8, 8]}
            >
                {
                    data.map((logo, index) => 
                    (
                        <HStack
                            index = {index}
                            backgroundImage = {BoxTexture}
                            padding = {2}
                        >
                            <FontAwesomeIcon
                                icon = {logo.icon}
                                size = "xl"
                            />
                            <Text
                                fontWeight = "bold"
                            >
                                {logo.name}
                            </Text>
                        </HStack>
                    ))
                }
            </HStack>
        </Flex>
    )
}

export default TechStackLogos;