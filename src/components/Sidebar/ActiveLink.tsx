import Link, { LinkProps } from "next/link";
import {usePathname} from 'next/navigation'
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement,
    shoudlMatchExactHref?: boolean
}

export function ActiveLink({children, shoudlMatchExactHref = false, ...rest}: ActiveLinkProps) {
    let isActive = false

    const path = usePathname()

    if(shoudlMatchExactHref && (path === rest.href || path === rest.as)){
        isActive = true
    } 
    if(!shoudlMatchExactHref && (path.startsWith(String(rest.href)) || path.startsWith(String(rest.as)))) {
        isActive = true
    }
    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}