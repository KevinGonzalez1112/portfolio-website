// Importing UI Components

import { Heading, Text, VStack } from "@chakra-ui/react";

const ExperienceEntry = (props) =>
{
    return (
        <VStack
            align = "start"
            width = "100%"
            paddingBottom = "3vh"
            paddingLeft = "3vw"
            paddingRight = "4vw"
        >
            <Text
                fontWeight = "bold"
                color = "#FFA500"
                fontSize = "sm"
            >
                { props.dateRange }
            </Text>
            <Heading
                size = "md"
            >
                { props.title }
            </Heading>
            <Heading
                size = "md"
            >
                { props.company }
            </Heading>     
            <Text
                fontSize = "sm"
            >
                { props.description }
            </Text>
        </VStack>
    )
}

export default ExperienceEntry;
