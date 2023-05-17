import React from 'react';
import perfil from '../paginas/styles/perfil.css';
import imagem from '../imagens/cityguardnew_adobe_express.svg';
import bandeira from '../imagens/Bandeira_do_Tocantins.svg.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(titulo, data, tipo ,status) {
    return { titulo, data, tipo, status };
}

const rows = [
    createData('Ocorrência 1', '17/03/2023', 'Incêndio', 'Resolvida'),
    createData('Ocorrência 2', '21/02/2023', 'Acidente', 'Resolvida'),
    createData('Ocorrência 3', '19/04/2023', 'Assalto', 'Em aberto'),

];


export default function Formulario() {
    return (

        <div id='perfil'>
            <div id='cabeçalho'>
                <div id='titulo'>
                    <h1>PERFIL</h1>
                </div>

                <div id='foto-perfil'>
                    <img src={imagem}></img>
                </div>

                <div id='info-basica'>

                    <h2>NOME: CityGuard</h2>
                    <h2>PROPRIETÁRIO: Mario Matheus</h2>
                    <h2>E-MAIL: CityGuard.gmail.com</h2>
                    <h2>TELEFONE: (00) 00000-0000</h2>
                </div>

                <div id='bandeira-estado'>
                    <img id='to' src={bandeira}></img>
                </div>

            </div>

            <div id='conteudo'>
                <div id='informaçoes'>

                    <h3 className='seçoes'>Dados e Documentações</h3>

                    <h4 className='dados'>CNPJ</h4>
                    <p>00000121212121</p>

                    <h4 className='dados'>CNAE Oficial da Empresa</h4>
                    <p>12.21-21-21</p>

                    <h4 className='dados'>Tipo de contribuinte do IMCS</h4>
                    <p>Contribuinte IMCS</p>

                    <hr></hr>

                    <h3 className='seçoes'>Localização</h3>


                    <h4 className='dados'>Endereço</h4>
                    <p>Quadra 201 Sul - rua NSA</p>

                    <h4 className='dados'>Complemento</h4>
                    <p>Próximo ao Comics Pub</p>

                    <h4 className='dados'>Bairro</h4>
                    <p>Centro</p>

                    <h4 className='dados'>Número</h4>
                    <p>00</p>

                    <h4 className='dados'>CEP</h4>
                    <p>11111-000</p>

                    <h4 className='dados'>Município</h4>
                    <p>Palmas</p>

                    <h4 className='dados'>Estado</h4>
                    <p>Tocantins</p>


                    <button id='botao' type='submit'>Editar informações</button>

                    <hr></hr>

                    <h3 className='seçoes'>Ocorrências Registradas</h3>

                    <div style={{display:'flex', justifyContent:'center', width:'80%', margin:'auto', marginTop:'40px', marginBottom:'20px'}}>
                        <TableContainer component={Paper}>
                            <Table style={{borderColor:'primary', borderWidth:'30px', paddingBottom:'30px'}} sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Título da Ocorrência</TableCell>
                                        <TableCell align="right">Data</TableCell>
                                        <TableCell align="right">Tipo</TableCell>
                                        <TableCell align="right">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.titulo}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.titulo}
                                            </TableCell>
                                            <TableCell align="right">{row.data}</TableCell>
                                            <TableCell align="right">{row.tipo}</TableCell>
                                            <TableCell align="right">{row.status}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>


                </div>
            </div>
        </div>




    );
}

