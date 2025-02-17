// Importing UI Components

import { Heading, Text, VStack } from "@chakra-ui/react";

const EducationEntry = (props) =>
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
                { props.provider }
            </Heading>
            <Text
                fontSize = "sm"
            >
                { props.description }
            </Text>
        </VStack>
    )
}

export default EducationEntry;

/*
                <Text
                    fontWeight = "bold"
                >
                    Grade: 
                </Text>
                <Text>
                    { props.grade }
                </Text>
                <Text
                    fontWeight = "bold"
                >
                    Key Modules:
                </Text>
                <Text>
                    { props.modules }
                </Text>
                
                    else
    {
        return (
            <VStack
                align = "start"
                width = "100%"
                paddingBottom = "3vh"
                paddingLeft = "3vw"
            >
                <Text
                    fontWeight = "bold"
                    color = "#FFA500"
                >
                    { props.dateRange }
                </Text>
                <Heading
                    size = "lg"
                >
                    { props.title }
                </Heading>
                <Heading
                    size = "md"
                >
                    { props.provider }
                </Heading>
            </VStack>
        )
    }
                
                
                */