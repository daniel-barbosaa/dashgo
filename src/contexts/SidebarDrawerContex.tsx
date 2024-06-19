'use client'
import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {  usePathname, useSearchParams } from 'next/navigation'
import { ReactNode, createContext, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode
}
type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarProvider ({children}: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    const path = usePathname()
   
    useEffect(() => {
        disclosure.onClose()
    },[path])
    
    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)