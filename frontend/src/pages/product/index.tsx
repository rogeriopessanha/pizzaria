import { useState, FormEvent } from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import styles from './styles.module.scss'

import { setupAPIClient } from "@/services/api";
import { toast } from "react-toastify";

import { canSSRAuth } from "@/utils/canSSRAuth";

export default function Product(){
    // const [name, setName] = useState('')

    // async function handleRegister(event: FormEvent){
    //     event.preventDefault()

    //     if (name === '') {
    //         return
    //     }

    //     const apiClient = setupAPIClient()
    //     await apiClient.post('/category', {
    //         name: name
    //     })

    //     toast.success("Categoria cadastrada com sucesso!")
    //     setName('')
    // }

    return(
        <>
        <Head>
            <title>Novo produto - Pizzaria</title>
        </Head>

        <div>
            <Header/>

            <main className={styles.container}>
                <h1>Novo Produto</h1>

                <form className={styles.form}>
                    <select name="" id="">
                        <option value="">
                            Bebida
                        </option>
                        <option value="">
                            Pizza
                        </option>
                    </select>

                    <input 
                    type="text"
                    placeholder="Digite o nome do produto"
                    className={styles.input}
                     />

                    <input 
                    type="text"
                    placeholder="Digite o valor do produto"
                    className={styles.input}
                     />

                     <textarea
                     placeholder="Descreva seu produto..." 
                     className={styles.input}
                     
                     />

                     <button className={styles.buttonAdd} type="submit">
                        Cadastrar produto
                     </button>
                </form>

            </main>
            
        </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return{
        props: {
            
        }
    }
})