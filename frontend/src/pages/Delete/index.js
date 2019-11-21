import React, { Component } from 'react';
import $ from 'jquery';

import Button from '../Main/button';

export default class Delete extends Component {

  handleSubmit = () => {
    let data = {
      id: this.state.id,
    };

    $.ajax({
      method: 'delete',
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
        <h1>Deletar um veiculo</h1>
        <h2> Informe o Id do veiculo a ser deletado </h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={(e) => this.setState({ id: e.target.value })} />
          <button type='submit'>Enviar</button>
        </form>
      </>
    );
  }
}