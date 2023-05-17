import React, { useState, useEffect } from 'react';
import axios from 'axios';
const EditarFuncionario = () =>{

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [funcao, setFuncao] = useState('');
    const[funcionarioId, setFuncionarioId]= useState (0);
    const [modalAberta, setmodalAberta] = useState(false);

    const [ funcionarios, setFuncionarios]= useState([]);

    useEffect(()=>{
        axios.get('http://localhost:1337/api/funcionarios').then((response)=> {
            setFuncionarios(response.data.data)
        })
    },[])

    const abrirModal = (funcionario) =>{
        setFuncionarioId(funcionario.id)
        setNome(funcionario.attributes.nome)
        setEmail(funcionario.attributes.email)
        setFuncao(funcionario.attributes.Funcao)
        setmodalAberta(true)
    }


    const uploaddados = async e => {
        e.preventDefault();
        const funcionario = {
            nome: nome,
            email: email,
            funcao: funcao


        }

        if(senha) {
            funcionario.senha= senha
        }



        axios.put('http://localhost:1337/api/funcionarios/'+ funcionarioId,{
            data: funcionario
        }).then(res => {
            console.log(res.data)
        })
        window.location.reload(true);
    }

    return(

        <div>
            <h2 className={'title2'}>Editar Funcionário</h2>

            <table className={'TabelaFuncionario'}>


                <tbody>

                    <tr className={'cabecalho'}>
                        <td>nome</td>
                        <td> email</td>
                        <td> função</td>
                        <td> </td>
                    </tr>
                {funcionarios.map((funcionario, index)=>{
                    return(

                        <tr key= {index}>

                            <td className={'tdFuncionario'}>{funcionario.attributes.nome} </td>
                            <td className={'tdFuncionario'}>{funcionario.attributes.email} </td>
                            <td className={'tdFuncionario'}>{funcionario.attributes.Funcao} </td>
                            <td>
                                <button className={'Btable'}  onClick={()=> {abrirModal(funcionario)}}>Editar</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>


            {modalAberta &&
                <div style={{marginTop:'40px'}}>
                    <form style={{width:'89%'}} onSubmit={uploaddados}>
                        <label>Nome: </label>
                        <input className={'text'} type="text" placeholder="Insira seu Nome"  name="name" required="" value={nome} onChange={e => setNome(e.target.value)}></input>
                        <label>E-mail: </label>
                        <input className={'text'} type="email" placeholder="Insira seu e-mail"  name="email" required="" value={email} onChange={e => setEmail(e.target.value)}></input>
                        <label>Senha: </label>
                        <input className={'text'} style={{width:"100%", padding:"10px", borderRadius:"5px", border:"1px solid #ccc"}} type="password" placeholder="Insira sua senha"  name="senha" required=""  value={senha} onChange={e => setSenha(e.target.value)}></input>
                        <label>Função: </label>
                        <input className={'text'} type="text" placeholder="Insira a Função"  name="funcao" required="" value={funcao} onChange={e => setFuncao(e.target.value)}></input>
                        <button type='submit'> salvar</button>
                    </form>
                </div>
            }
        </div>
    )
}
export default EditarFuncionario;