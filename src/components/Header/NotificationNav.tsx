import { HStack, Icon } from "@chakra-ui/react";
import { RiNavigationLine, RiUserAddLine } from "react-icons/ri";

export function NotificatioNav () {
    return (
        <HStack
            spacing={["6", "8"]}
            mx={["6","8"]}
            pr={["6","8"]}
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700">
                <Icon as={RiNavigationLine} fontSize="20"/>
                <Icon as={RiUserAddLine} fontSize="20"/>
            </HStack>
    )
}