'use client'
import {Button, Flex, Stack} from '@chakra-ui/react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from '@/components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';


type SignInFormData = {
    email: string,
    password: string
}

const signInDataSchema = yup.object({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória')
})

export default function SignIn () {
    const {register, handleSubmit, formState:{ errors }} = useForm<SignInFormData>({
        resolver: yupResolver(signInDataSchema)
    })

    const handleSignIn: SubmitHandler<SignInFormData> = (data) => {
        console.log(data)
    }


    return (
       <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex as="form" w="100%" maxW={360} p={8} bg="gray.800" borderRadius={8} flexDirection="column" onSubmit={handleSubmit(handleSignIn)}>
            <Stack spacing={4}>
               <Input  type="email" label="E-mail" {...register('email')} error={errors.email?.message}/>
               <Input type="password" label='Senha' {...register('password')} error={errors.password?.message}/>
            </Stack>
            <Button colorScheme='pink' type='submit' mt={6} size="lg">Entrar</Button>
        </Flex>
       </Flex>
    )
}