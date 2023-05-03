
import { useContext, FormEvent } from 'react'
import Head from "next/head"
import Image from "next/image"
import styles from '@/styles/home.module.scss'
// import styles from '../styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {AuthContext} from '@/contexts/AuthContext'

import Link from "next/link"

export default function Home() {

  const {signIn} = useContext(AuthContext)

  async function handleLogin(event: FormEvent){
    event.preventDefault();

    let data = {
      email: "alguma@teste.com",
      password: "231324654"
    }

    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>Pizzaria - Página de Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria" />

        <div className={styles.login}>
        <h1>Entre na sua conta</h1>
        
          <form onSubmit={handleLogin}>
            <Input
            placeholder="Digite seu email"
            type="text"
            />
            <Input
            placeholder="Digite sua senha"
            type="password"
            />

            <Button
            type="submit"
            loading={false}
            >
              Entrar
            </Button>

          </form>

          <Link href="/signup" legacyBehavior>
           <a className={styles.text}>Nao possui uma conta? Cadastre-se</a>
          </Link>


        </div>
      </div>
    </>
  )
}
