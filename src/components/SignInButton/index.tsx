import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'


export function SignInButton() {
    const { data: session } = useSession()

    return session ? (
        <button
            className={styles.btnSignIn}
            type="button"
            onClick={() => signOut()}
        >
                <FaGithub color="#52AACA"/>
                {session.user.name}
                <FiX
                color="#7C8D88"
                className={styles.closeIcon}
            />
        </button>
    ) : (
        <button
            className={styles.btnSignIn}
            type="button"
            onClick={() => signIn('github')}
        >
                <FaGithub color="#00B188"/>
                Sign In with Github
        </button>
    );
}