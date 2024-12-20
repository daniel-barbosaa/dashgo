import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number,
  registerPerPage?: number,
  currentPage?: number,
  onPageChange: (page: number) => void,
}

const siblingsCount = 1
generatePagesArray(2, 6)

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_, index) => {
    return from + index + 1
  }).filter(page => page > 0)
}

export function Pagination(
  {totalCountOfRegisters, 
  registerPerPage = 10,
  currentPage = 1, 
  onPageChange}: PaginationProps)
{
  // Dividindo as paginas, total de registros / registro por pagina(10)
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage)

  const previousPages = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []

  const nextPages = currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount , lastPage)) : []



  
  return (
    <Stack
      direction={["column","row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onChangePage={onPageChange} number={1} />
            {currentPage > (2 + siblingsCount) && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
              )}
          </>
        )}
        {/* Previous pages */}
        {previousPages.length > 0 && previousPages.map(page => {
          return (
            <PaginationItem onChangePage={onPageChange} key={page} number={page} />
          )
        })}
        <PaginationItem onChangePage={onPageChange} number={currentPage} isCurent/>
        {/* Next pages */}
        {nextPages.length > 0 && nextPages.map(page => {
          return (
            <PaginationItem onChangePage={onPageChange} key={page} number={page} />
          )
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
          {(currentPage + 1 + siblingsCount) < lastPage && (
            <Text color="gray.300" width="8" textAlign="center">...</Text>
          )}
            <PaginationItem onChangePage={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
