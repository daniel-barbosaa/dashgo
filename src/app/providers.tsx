'use client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider
        theme={theme}>{children}
      </ChakraProvider>
      <ReactQueryDevtools/>
  </QueryClientProvider>
)
}