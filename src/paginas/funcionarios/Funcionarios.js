import React from 'react';
import axios from 'axios';
import ResponsiveAppBar from "../../utils/navbar";
import ExcluirFuncionario from "./ExcluirFuncionario";
import funcionarios from "../styles/funcionarios.css";
import EditarFuncionario from "./EditarFuncionario";
import CadastrarFuncionario from "./CadastrarFuncionario";


const baseURL = "http://localhost:1337";

export default function Funcionarios() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        axios.get(baseURL + '/api/funcionarios/?populate=foto').then((response) => {
            setPosts(response.data.data);
        });
    }, []);

    return (
        <div className={'cover'}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <div>
                <h1 className={'title'}>Funcionários</h1>
                <h2 className={'subtitle'}> Bem vindo à tela de funcionários.</h2>
                <h2 className={'subtitle'}>Exclua e edite informações dos funcionários de sua empresa aqui.</h2>


                <hr style={{marginBottom:'40px', width:'50%'}}></hr>


                <h2 className='title2'>Funcionários Ativos</h2>
                <ul className={'ul'}>
                    {posts.map((post) => (
                        <li key={post.id} className={'li'}>
                            <h2>{post.attributes.nome}</h2>
                            {
                                post.attributes.foto.data
                                && <img alt={post.attributes.nome}
                                        src={baseURL + post.attributes.foto.data.attributes.formats.thumbnail.url}/>
                            }
                            <p>ID: {post.id}</p>
                            <p>{post.attributes.email}</p>
                            <p>{post.attributes.status}</p>
                        </li>
                    ))}
                </ul>


                <hr style={{marginBottom:'40px', marginTop:'40px', width:'50%'}}></hr>

                <h2 className={'title2'}>Cadastrar Funcionário</h2>

            </div>

            <div style={{marginBottom:'5%', marginTop:'30px'}}>
                <CadastrarFuncionario/>
            </div>

            <div style={{marginBottom:'5%', marginTop:'30px'}}>
                <EditarFuncionario/>
            </div>

            <hr></hr>

            <div style={{marginBottom:'50px', marginTop:'30px'}}>
                <ExcluirFuncionario/>
            </div>


        </div>
    );
}