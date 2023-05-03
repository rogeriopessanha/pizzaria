
import {useState, FormEvent} from 'react'

import Head from "next/head"
import Image from "next/image"
import styles from '@/styles/home.module.scss'

import logoImg from '../../../public/logo.svg'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import Link from "next/link"

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setloading] = useState(false)

  async function handleSignUp(event: FormEvent ){
    event.preventDefault();

    if (name === '' || password === '') {
      alert("PREENCHA TODOS OS CAMPOS")
      return
    }

    setloading(true)
  }

  return (
    <>
      <Head>
        <title>Faça seu cadastro agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria" />

        <div className={styles.login}>
            <h1>Criando sua conta</h1>
            
          <form onSubmit={handleSignUp}>
            <Input
            placeholder="Digite seu nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
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
              Cadastre-se
            </Button>

          </form>

          <Link href="/" legacyBehavior>
           <a className={styles.text}>Já tem uma conta? Faça o login</a>
          </Link>


        </div>
      </div>
    </>
  )
}
