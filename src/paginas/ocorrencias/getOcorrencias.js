import React from 'react';
import axios from 'axios';
import ocorrencias from '../styles/ocorrencias.css'

const baseURL = "http://localhost:1337/api/ocorrencias/";

export default function GetOcorrencias() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPosts(response.data.data);
        });
    }, []);

    return (
        <div>
            <ul className={'ul'}>
                {posts.map((post) => (
                    <li key={post.id} className={'lista-ocorrencias'}>
                        <h2>{post.attributes.titulo}</h2>
                        <p>{post.attributes.descricao}</p>
                        <img alt={"Imagem"}>{post.attributes.anexo}</img>
                        <p>[{post.attributes.coordenadas}]</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}