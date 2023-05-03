

import Head from "next/head"
import Image from "next/image"
import styles from '@/styles/home.module.scss'
// import styles from '../styles/home.module.scss'

import logoImg from '../../../public/logo.svg'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import Link from "next/link"

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Faça seu cadastro agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria" />

        <div className={styles.login}>
            <h1>Criando sua conta</h1>
            
          <form>
            <Input
            placeholder="Digite seu nome"
            type="text"
            />
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
