import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react"
import { ForwardRefRenderFunction, forwardRef } from "react"

interface  InputProps extends ChakraInputProps {
    name: string,
    label?: string,
    error?: string 
}
const InputBase:ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
              id={name}
              name={name
              }
              focusBorderColor='pink.500'
              bg="gray.900"
              variant="filled"
              _hover={{bgColor:
              'gray.900'}}
              size="lg"
              {...rest}
              ref={ref} 
              />
              {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)