
import { Box, Drawer, DrawerContent, DrawerOverlay, useBreakpointValue, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";
import { useSidebarDrawer } from "@/contexts/SidebarDrawerContex";

export function Sidebar() {
  const {onClose,isOpen} = useSidebarDrawer()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if(isDrawerSidebar){
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6"/>
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav/>
    </Box>
  );
}
