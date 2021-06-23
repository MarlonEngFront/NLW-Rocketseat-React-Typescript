/* eslint-disable @typescript-eslint/no-unused-vars */
import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustration from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import googleIconImg from '../assets/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

import {TestContext} from '../App'
import { useContext } from 'react';

export function Home() {
    const history = useHistory();
    const value = useContext(TestContext)



    function handleCreateRoom() {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result)
        })

        history.push('/rooms/new');
    }
    return (
        <div id="page-auth">
            <aside>
                <img src={illustration} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tore as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <h1>{value}</h1>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}