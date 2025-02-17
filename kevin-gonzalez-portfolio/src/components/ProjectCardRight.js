import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

const ProjectCardRight = (props) => 
{
    return (
        <HStack
            width = "90vw"
            marginBottom = "5vh"
        >
            <VStack
                width = "50%"
                paddingLeft = "3vw"
            >
                <Image 
                    src = { props.image }
                />
            </VStack>
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
        </HStack>
    )
}

export default ProjectCardRight;
