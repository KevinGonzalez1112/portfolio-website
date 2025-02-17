import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

const ProjectCardLeft = (props) => 
{
    return (
        <HStack
            width = "90vw"
            marginBottom = "2vh"
        >
            <VStack
                width = "50%"
                padding = {10}
            >
                <Heading
                    paddingBottom = "3vh"
                >
                    { props.name }
                </Heading>
                { 
                    props.description.map((paragraph) => (
                        <Text 
                            paddingBottom = "1vh"
                            paddingLeft = "5vw"
                            paddingRight = "5vw"
                        >
                            { paragraph }
                        </Text>
                    )) 
                }
            </VStack>
            <VStack
                width = "50%"
                paddingRight = "3vw"
            >
                <Image 
                    src = { props.image }
                />
            </VStack>
        </HStack>
    )
}

export default ProjectCardLeft;
