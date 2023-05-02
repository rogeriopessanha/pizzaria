
import {useContext, FormEvent, useState, ChangeEvent} from 'react'

import Head from "next/head"
import Image from "next/image"
import styles from '../styles/home.module.scss'

import logoImg from '../../public/assets/logo2.svg'

import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

import { AuthContext } from "@/contexts/AuthContext"

import Link from "next/link"

export default function Home() {
  const {signIn} = useContext(AuthContext)

  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')

  const [loading, SetLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    let data = {
      email,
      password
    }

    await signIn(data)
  }
  return (
    <>
      <Head>
        <title>Pizzaria - Faça seu login</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image className={styles.image} src={logoImg} alt="Logo Pizzaria" />

        <div className={styles.login}>

        <h1>Entre na sua conta</h1>

          <form action="" onSubmit={handleLogin}>

            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => SetEmail(e.target.value)}
            />

            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => SetPassword(e.target.value)}
            />

            <Button
            type="submit"
            loading={false}
            >
              Entrar
            </Button>


          </form>

          <Link href="/signup" legacyBehavior>
          <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>


        </div>
      </div>
    </>
  )
}
