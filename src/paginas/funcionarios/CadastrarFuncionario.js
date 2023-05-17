import React, { useState } from 'react';
import axios from 'axios';


const Form = () => {



    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [foto, setFoto] = useState(false);
    const [funcao, setFuncao] = useState('');

    const uploaddados = async e => {
        e.preventDefault();
        const funcionario = {
            nome: nome,
            email: email,
            senha: senha,
            foto: foto,
            funcao: funcao
        }


        const formdata = new FormData()
        formdata.append('files', foto[0])
        axios.post('http://localhost:1337/api/upload', formdata).then((response)=>{
            window.alert('Funcionário Salvo')

            const imageId = response.data[0].id

            axios.post('http://localhost:1337/api/funcionarios',{
                data: {
                    "nome": funcionario.nome,
                    "email": funcionario.email,
                    "senha": funcionario.senha,
                    "foto":  imageId,
                    "ativo": true,
                    "Funcao": funcionario.funcao,

                }
            }).then(res => {
                console.log(res.data)
            })
            window.location.reload(true);
        }).catch((error)=>{
            window.alert('erro')
        })





    }



    return(
        <form onSubmit={uploaddados}>
            <label>Nome: </label>
            <input className={'text'} type="text" placeholder="Insira seu Nome"  name="name" required="" onChange={e => setNome(e.target.value)}></input>
            <label>E-mail: </label>
            <input className={'text'}  type="email" placeholder="Insira seu e-mail"  name="email" required=""onChange={e => setEmail(e.target.value)}></input>
            <label>Senha: </label>
            <input className={'text'} style={{width:"100%", padding:"10px", borderRadius:"5px", border:"1px solid #ccc"}} type="password" placeholder="Insira sua senha"  name="senha" required=""onChange={e => setSenha(e.target.value)}></input>
            <label>Função: </label>
            <input className={'text'} type="text" placeholder="Insira a Função"  name="funcao" required="" onChange={e => setFuncao(e.target.value)}></input>
            <label>Foto: </label>
            <input type="file" placeholder="Insira seu Nome"  name="foto" onChange={e =>setFoto(e.target.files)}></input>
            <button className={'text'} type='submit'> Cadastrar</button>
        </form>
    );
};

export default Form;