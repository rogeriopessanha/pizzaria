import { useState, ChangeEvent } from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import styles from './styles.module.scss'

import { setupAPIClient } from "@/services/api";
import { toast } from "react-toastify";

import { canSSRAuth } from "@/utils/canSSRAuth";

import { FiUpload } from "react-icons/fi";
import Image from "next/image";
import { type } from "os";

type ItemProps = {
    id: string;
    name: string;
}

interface CategoryProps {
    categoryList: ItemProps[]
}

export default function Product({ categoryList }: CategoryProps) {

    // console.log(categoryList)

    const [avatarUrl, setAvatarUrl] = useState('')
    const [imageAvatar, setImageAvatar] = useState(null)

    const [categories, setCategories] = useState(categoryList || [])
    const [categorySelected, setCategorySelected] = useState()

    function handleFile(e: ChangeEvent<HTMLInputElement>) {

        if (!e.target.files) {
            return
        }

        const image = e.target.files[0]

        if (!image) {
            return
        }

        if (image.type === 'image/png' || image.type === 'image/jpeg') {

            setImageAvatar(image)
            setAvatarUrl(URL.createObjectURL(e.target.files[0]))
        }
    }

    //quando é selecionado uma nova categoria na lista
    function handleChangeCategory(e) {
        setCategorySelected(e.target.value)
    }

    return (
        <>
            <Head>
                <title>Novo produto - Pizzaria</title>
            </Head>

            <div>
                <Header />

                <main className={styles.container}>
                    <h1>Novo Produto</h1>

                    <form className={styles.form}>

                        <label className={styles.labelAvatar}>
                            <span>
                                <FiUpload size={30} color="#fff" />
                            </span>
                            <input type="file" accept="image/png, image/jpeg" onChange={handleFile} />

                            {avatarUrl && (
                                <Image className={styles.preview}
                                    src={avatarUrl}
                                    alt="Foto do produto"
                                    width={250}
                                    height={250}
                                />
                            )}
                        </label>

                        <select value={categorySelected} className={styles.select} onChange={handleChangeCategory} >

                            <option value={undefined} >Selecione uma categoria</option>
                            {categories.map((item, index) => {
                                return (
                                    <option key={item.id} value={index}>
                                        {item.name}
                                    </option>
                                )
                            })}

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

    const apiClient = setupAPIClient(ctx)

    const response = await apiClient.get('/category')

    // console.log(response.data)

    return {
        props: {
            categoryList: response.data
        }
    }
})