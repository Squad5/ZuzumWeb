import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../axios/Api';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';
import bzz from '../../assets/images/bzz.png';

import './styles.css';
import '../../components/css/global.css';

const Login = () => {
    const history = useHistory();
    const [msg, setMsg] = useState();
    const [entrar, setEntrar] = useState();
    const [login, setLogin] = useState({
        nome: "",
        senha: ""
    });
    const controleLogin = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        });
    }
    async function upLogin(event) {
        event.preventDefault();

        await API.post('/Login.php', login)
            .then((response) => {
                if (response.data.sucess === true) {
                    setEntrar(true);
                    const idUser = response.data.id;
                    history.push(`/fases/${idUser}`);
                } else {
                    setEntrar(false);
                    setMsg(false);
                    resInfo(msg);
                }
            })
    }

    function resInfo(msg) {
        setTimeout(() => {
            setMsg(msg);
        }, 3000);
    }
    return (
        <>
            <div id="cor-de-fundo">
                <Nav id="nav-login"/>
                <main id="container-login">
                    <div className="section-abelha">
                        <img src={bzz} id="bzz"/>
                    </div>
                    <div className="section-login" id="section-log">
                        <form onSubmit={upLogin} className="box-login">
                            <label className="form-title">LOGIN</label>
                            <input onChange={controleLogin} type="text" className="input-login" name="nomeLog" placeholder="USUÁRIO" />
                            <input onChange={controleLogin} type="password" className="input-login" name="senhaLog" placeholder="SENHA" />
                            <Link to="/cadastrar" className="link">Ainda não tem conta? <aqui id="clique-aqui">Clique aqui</aqui></Link>
                            <div className="box-btn-play">
                                <button className="btn-play mt-3">
                                    <p><i class="fas fa-play"></i></p>
                                </button>
                            </div>
                            {
                                msg === false && <div id="alert" className="alert alert-danger mx-auto mt-4 w-75" role="alert"> Erro ao fazer login </div>
                            }
                        </form>
                    </div>
                    <div className="section-vazio"></div>
                </main>
            </div>
        </>
    )
}
export default Login;
