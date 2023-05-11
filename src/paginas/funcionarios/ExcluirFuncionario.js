import React, {useEffect} from 'react';
import axios from 'axios';

export default function ExcluirFuncionario() {
    const [funcionarios, setFuncionarios] = React.useState([]);
    const [funcionarioid, setFuncionarioid] = React.useState('');

    const baseURL = "http://localhost:1337/api/funcionarios/";

    function excluirFuncionarioId(id) {
        axios.delete(baseURL + id).then((response) => {
            console.log(response.data);
        });
    }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setFuncionarios(response.data.data);
        })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div>
                <h1 className={'title'}>Excluir Funcionario</h1>
                <form>
                    <label>
                        Funcionario ID:
                        <input type="text" name="funcionarioid" onChange={(e) => setFuncionarioid(e.target.value)}/>
                    </label>
                    <button type="button" onClick={() => excluirFuncionarioId(funcionarioid)}>Excluir</button>
                </form>
            </div>
        </div>
    );
}