import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

interface User {
    id: string,
    name: string,
    email: string,
    createdAt: string
}

type GetUsers = {
    totalCount: number,
    users: User[]
}


export async function getUsers (page: number): Promise<GetUsers>  {
    const response = await api.get<{ users: User[] }>("/users", {
        params: {
            page: page
        }
    });
    const headers = response.headers
    const totalCount = Number(headers["x-total-count"])
    
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
    return {
        users,
        totalCount
    }
    }

export function useUsers(page: number){
    return useQuery<GetUsers>({
        queryKey: ["users", page],
        queryFn: () => getUsers(page),
        staleTime: 1000 * 60 * 10 // 10 seconds of data persistence
      });
}