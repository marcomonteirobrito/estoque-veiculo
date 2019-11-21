import React, { Component } from 'react';
import $ from 'jquery';

import Button from '../Main/button';
import '../Create/create.css';

export default class Create extends Component {
  state = {
    id: '', placa: '', chassi: '', modelo: '', marca: '', ano: '',
  }

  handleSubmit = () => {
    let data = {
      id: this.state.id,
      placa: this.state.placa,
      chassi: this.state.chassi,
      modelo: this.state.modelo,
      marca: this.state.marca,
      ano: this.state.ano
    };

    $.ajax({
      method: 'put',
      url: 'http://localhost:3333/cars',
      data: JSON.stringify(data),
      contentType: "application/json",
      success: (retorno) => {
        console.log(retorno);
      },
      error: (retorno) => {
        console.log(retorno);
      }
    });
  }

  render() {
    return (
      <>
        <Button />
        <h1>Editar veículo pelo ID</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>Id</h2>
          <input type='text' onChange={(e) => this.setState({ id: e.target.value })} />
          <h2>Placa</h2>
          <input type='text' onChange={(e) => this.setState({ placa: e.target.value })} />
          <h2>Chassi</h2>
          <input type='text' onChange={(e) => this.setState({ chassi: e.target.value })} />
          <h2>Renavam</h2>
          <input type='text' onChange={(e) => this.setState({ renavam: e.target.value })} />
          <h2>Modelo</h2>
          <input type='text' onChange={(e) => this.setState({ modelo: e.target.value })} />
          <h2>Marca</h2>
          <input type='text' onChange={(e) => this.setState({ marca: e.target.value })} />
          <h2>Ano</h2>
          <input type='text' onChange={(e) => this.setState({ ano: e.target.value })} />
          <button type='submit'>Enviar</button>
        </form>
      </>
    );
  }
}