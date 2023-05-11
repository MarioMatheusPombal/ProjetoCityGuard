import React from 'react';
import axios from 'axios';
import funcionarios from "../styles/funcionarios.css";


export default function EditarFuncionario() {
    const [funcionarioid, setFuncionarioid] = React.useState('');
    const [funcionarionome, setFuncionarionome] = React.useState('');
    const [funcionarioemail, setFuncionarioemail] = React.useState('');
    const [funcionariofoto, setFuncionariofoto] = React.useState('');

    const baseURL = "http://localhost:1337/api/funcionarios/";

    function editarFuncionarioId(id) {
        axios.put(baseURL + id, {
            nome: funcionarionome,
            email: funcionarioemail,
            foto: funcionariofoto
        }).then((response) => {
            console.log(response.data);
        });
    }

    return (
        <div>
            <div>
                <h1 className={'title'}>Editar Funcionario</h1>
                <form>
                    <label>
                        Funcionario ID:
                        <input type="text" name="funcionarioid" onChange={(e) => setFuncionarioid(e.target.value)}/>
                    </label>
                    <label>
                        Funcionario Nome:
                        <input type="text" name="funcionarionome" onChange={(e) => setFuncionarionome(e.target.value)}/>
                    </label>
                    <label>
                        Funcionario Email:
                        <input type="text" name="funcionarioemail"
                               onChange={(e) => setFuncionarioemail(e.target.value)}/>
                    </label>
                    <label>
                        Funcionario Foto:
                        <input type="file" name="funcionariofoto" onChange={(e) => setFuncionariofoto(e.target.value)}/>
                    </label>
                    <button type="button" onClick={() => editarFuncionarioId(funcionarioid)}>Editar</button>
                </form>
            </div>
        </div>
    );
}