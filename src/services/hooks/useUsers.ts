import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

interface User {
    id: string,
    name: string,
    email: string,
    createdAt: string
}

export async function getUsers () {
    const response = await api.get<{ users: User[] }>("/users");
    const data = await response.data.users;
    const users = data.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: "long",
                year: 'numeric'
            })
        }
    })
    return users
    }

export function useUsers(){
    return useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
        staleTime: 1000 * 5 // 5 seconds
      });
}