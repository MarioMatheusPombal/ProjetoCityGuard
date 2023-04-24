import React from 'react';

export default function Formulario() {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="nomedaempresa">Nome Da Empresa:</label>
                <input type="text" id="nomedaempresa" name="nomedaempresa"/><br/>
            </div>

            <div className="form-group">
                <label htmlFor="CNPJ">CNPJ:</label>
                <input type="CNPJ" id="CNPJ" name="CNPJ"/><br/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"/><br/>
            </div>

            <div className="form-group">
                <label htmlFor="telefone">Telefone:</label>
                <input type="telefone" id="telefone" name="telefone"/><br/>
            </div>

            <div className="form-group">
                <label htmlFor="CNAEprincipaldaempresa">CNAE Principal Da Empresa:</label>
                <input type="CNAEprincipaldaempresa" id="CNAEprincipaldaempresa" name="CNAEprincipaldaempresa"/><br/>
            </div>

            <div className="form-group">
                <label htmlFor="cep">CEP:</label>
                <input type="cep" id="cep" name="cep"/><br/>
            </div>

            <div className="form-group">
                <label htmlFor="endereco">Endereço:</label>
                <input type="endereco" id="endereco" name="endereco"/><br/>
            </div>

            <div className="form-group">
                <label htmlFor="numero">Número:</label>
                <input type="numero" id="numero" name="numero"/><br/>
            </div>
            <div className="form-group">
                <label htmlFor="complemento">Complemento:</label>
                <input type="complemento" id="complemento" name="complemento"/><br/>
            </div>

            <div className="form-group">
                <label htmlFor="bairro">Bairro:</label>
                <input type="bairro" id="bairro" name="bairro"/><br/>
            </div>

            <div className="form-group">
                <label htmlFor="municipio">Município:</label>
                <input type="municipio" id="municipio" name="municipio"/><br/>
            </div>

            <div className="form-group">
                <label htmlFor="estado">Estado:</label>
                <select id="estado" name="estado" required>
                    <option value=""></option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select><br/>
            </div>

            <div className="form-group">
                <label htmlFor="tipodecontribuintedoicms">Tipo De Contribuinte Do ICMS:</label>
                <input type="tipodecontribuintedoicms" id="tipodecontribuintedoicms"
                       name="tipodecontribuintedoicms"/><br/>
            </div>

            <div className="form-group">
                <label htmlFor="inscriçaoestadual">Inscrição Estadual:</label>
                <input type="inscriçaoestadual" id="inscriçaoestadual" name="inscriçaoestadual"/><br/>
            </div>

            <div className="form-group">
                <input type="submit" value="Enviar"/>
            </div>

        </form>
    );
}

