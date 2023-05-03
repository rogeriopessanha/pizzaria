
import Head from "next/head"
import Image from "next/image"
import styles from '@/styles/home.module.scss'
// import styles from '../styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzaria - Faça seu pedido</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria" />

        <div className={styles.login}>
          <form>
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

          <a className={styles.text}>Não possui uma conta? Cadastre-se</a>

        </div>
      </div>
    </>
  )
}
