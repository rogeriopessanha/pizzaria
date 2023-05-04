
import { useContext } from 'react'
import styles from '@/components/Header/styles.module.scss'
import Link from 'next/link'
import {FiLogOut} from 'react-icons/fi'

import { AuthContext } from '@/contexts/AuthContext'

export function Header(){

    const {signOut} = useContext(AuthContext)
    return(
        <header className={styles.headerContainer}>

            <div className={styles.headerContent}>
                <Link href="/dashboard" legacyBehavior>
                <img src="/logo.svg" width={60} height={50} alt="" />
                </Link>

                <nav className={styles.menuNav}>
                    <Link href="/category" legacyBehavior>
                        <a >Categoria</a>
                    </Link>

                    <Link href="/product" legacyBehavior>
                        <a >Cardapio</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color='#fff' size={24}/>
                    </button>
                </nav>
            </div>
        </header>
    )
}