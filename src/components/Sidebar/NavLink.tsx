import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinksProps} from "@chakra-ui/react";
import { ElementType } from "react";

import { ActiveLink } from "./ActiveLink";


interface NavLinksProps extends ChakraLinksProps{
    icon: ElementType,
    children: string,
    href: string
}
export function NavLink({icon, children, href, ...rest }: NavLinksProps) {
    console.log(href)
    return (
        <ActiveLink href={href} passHref >
        <ChakraLink display="flex" {...rest}>
            <Icon as={icon} fontSize="20"/>
            <Text ml="4" fontWeight="medium">
                {children}
            </Text>
          </ChakraLink>
        </ActiveLink>
    )
}