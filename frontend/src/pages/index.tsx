
import { useContext, FormEvent, useState } from 'react'
import Head from "next/head"
import Image from "next/image"
import styles from '@/styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {AuthContext} from '@/contexts/AuthContext'
import {toast} from 'react-toastify'

import Link from "next/link"

import { canSSRGuest } from '@/utils/canSSRGuest'

export default function Home() {

  const {signIn} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent){
    event.preventDefault();

    if (email === '' || password === '') {
      toast.error("Preencha todos os campos")
      return
    }

    setLoading(true)

    let data = {
      email,
      password
    }

    await signIn(data)

    setLoading(false)
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <Button
            type="submit"
            loading={loading}
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

export const getServerSideProps = canSSRGuest(async(ctx) => {
  return{
    props: {}
  }
})

