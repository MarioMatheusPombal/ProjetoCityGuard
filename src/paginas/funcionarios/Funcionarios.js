import React from 'react';
import axios from 'axios';
import ResponsiveAppBar from "../../utils/navbar";
import ExcluirFuncionario from "./ExcluirFuncionario";
import funcionarios from "../styles/funcionarios.css";
import EditarFuncionario from "./EditarFuncionario";


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
                <h1 className={'title'}>Funcionarios</h1>
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
            </div>
            <div>
                <ExcluirFuncionario/>
            </div>
            <div>
                <EditarFuncionario/>
            </div>
        </div>
    );
}