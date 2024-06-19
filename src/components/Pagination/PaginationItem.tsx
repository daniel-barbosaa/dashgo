import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
    isCurent?: boolean,
    number: number
}

export function PaginationItem({isCurent = false, number}: PaginationItemProps) {
    if(isCurent){
        return (
            <Button
            size="sm"
            fontSize="xf"
            width="4"
            colorScheme="pink"
            disabled
            _disabled={{
              bg: "pink.500",
              cursor: "default",
            }}
          >
            {number}
          </Button>
        )
    }

    return (
        <Button
          size="sm"
          fontSize="xf"
          width="4"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          {number}
        </Button>
    )
}