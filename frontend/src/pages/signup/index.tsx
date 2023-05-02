

import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import logoImg from '../../../public/assets/logo2.svg'

import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

import Link from "next/link"

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Faça seu cadastro agora</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image className={styles.image} src={logoImg} alt="Logo Pizzaria" />

        <div className={styles.login}>

            <h1>Faça seu cadastro</h1>

          <form action="">

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
          <a className={styles.text}>Já possui uma conta? Faça seu login</a>
          </Link>


        </div>
      </div>
    </>
  )
}
