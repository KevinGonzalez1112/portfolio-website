// Importing UI Components

import { Box, Flex, HStack, Link, Tooltip } from "@chakra-ui/react";

// Importing Font Awesome Icon Libraries

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoBar = ({ data }) =>
{
    return (
        <Flex
            wrap = "wrap"
            justify = "center"
            gap = {[2, 4, 6]}
            p = {[2, 6, 10]}
            color = "#FFFFFF"
            borderRadius = "2%"
        >
            <HStack
                spacing = {[8, 12, 16]}
            >
            {
                data.map((logo, index) => 
                (
                    <Tooltip
                        key = {index}
                        label = {logo.label}
                        hasArrow
                        offset = {[0, 10]}
                    >
                        <Link
                            href = {logo.link}
                            aria-label = {logo.label}
                        >
                            <Box
                                fontSize = {["1.2rem", "1.5rem", "2rem"]}
                            >
                                <FontAwesomeIcon 
                                    icon = {logo.icon} 
                                    size = "lg" 
                                />
                            </Box>
                        </Link>
                    </Tooltip>
                ))
            }
            </HStack>
        </Flex>
    )
}

export default LogoBar;