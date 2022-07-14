import {Heading, Text, VStack, Button, HStack, AspectRatio, Image, Stack, Divider, useColorMode, useColorModeValue} from "@chakra-ui/react";

const Cart = () => {
    const {toggleColorMode} = useColorMode();
    const bgColor = useColorModeValue("gray.100", "whiteAlpha.50");
    const secondaryTextColor = useColorModeValue("gray.600", "gray.400")
    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg={bgColor}>
            <VStack spacing={3} alignItems="flex-start">
                <Heading size="2xl">Your Cart</Heading>
                <Text>If the price is too hard on your eyes
                    <Button onClick={toggleColorMode} variant="link" colorScheme="black">
                        Try changing the theme
                    </Button>
                </Text>
            </VStack>
            <HStack spacing={6} alignItems="center" w="full">
                <AspectRatio ratio={1} w={24}>
                    <Image src="/images/skateboard.jpg" alt="Skate board"/>
                </AspectRatio>
                <Stack spacing={0} w="full" direction="row" alignItems="center" justifyContent="space-between">
                    <VStack spacing={0} w="full" alignItems="flex-start">
                        <Heading size="md">Penny Board</Heading>
                        <Text color={secondaryTextColor}>NY9839899</Text>
                    </VStack>
                    <Heading size="sm" textAlign="end">€119</Heading>
                </Stack>
            </HStack>
            <VStack spacing={4} alignItems="stretch" w="full">
                <HStack justifyContent="space-between">
                    <Text color={secondaryTextColor}>Subtotal</Text>
                    <Heading size="sm">€119.00</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text color={secondaryTextColor}>Shipping</Text>
                    <Heading size="sm">€19.99</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text color={secondaryTextColor}>Taxes (estimated)</Text>
                    <Heading size="sm">€23.80</Heading>
                </HStack>
            </VStack>
            <Divider/>
            <HStack justifyContent="space-between" w="full">
                <Text color={secondaryTextColor}>Shipping</Text>
                <Heading size="l9">€162.79</Heading>
            </HStack>
        </VStack>
    );
}

export {Cart}