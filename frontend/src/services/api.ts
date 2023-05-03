
import axios, {AxiosError} from 'axios'
import { parseCookies } from 'nookies'
import { AuthTokenError } from '@/services/errors/AuthTokenError' 

import { signOut } from '@/contexts/AuthContext'

export function setupAPIClient(ctx = undefined){
    let cookies = parseCookies(ctx)

    const api = axios.create({
        baseURL:  process.env.BASEURL,
        headers: {
            Authorization: `Bearer ${cookies[process.env.AUTHCOOKIES]}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if (error.response.status === 401) {
            //qualquer erro 401(não autorizado) devemos deslogar o usuario
            if (typeof window !== undefined) {
                //Chamar a função para deslogar o usuario
                signOut()
            }else{
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error)
    })

    return api
}