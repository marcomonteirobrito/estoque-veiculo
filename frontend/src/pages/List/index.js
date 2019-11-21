import React, { Component } from 'react';
import $ from 'jquery';

import Button from '../Main/button';
import './list.css'

export default class List extends Component {
  state = {
    cars: []
  }

  componentDidMount() {

    $.ajax({
      url: 'http://localhost:3333/cars',
      method: 'get',
      dataType: 'json',
      success: (cars) => {
        this.setState({
          cars
        })
      },
      error: (error) => {
        console.log(error);
      },
    })
  }

  render() {
    return (
      <div>
        <Button />
        <h1>Carros</h1>
        <ul>
          {this.state.cars.map(car =>
            <>
              <br />
              <li key={car.id}>
                <h2>Id: {car.id}</h2>
                <h2>Placa: {car.placa}</h2>
                <h2>Chassi: {car.chassi}</h2>
                <h2>Renavam: {car.renavam}</h2>
                <h2>Modelo: {car.modelo}</h2>
                <h2>Marca: {car.marca}</h2>
                <h2>Ano: {car.ano}</h2>
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }
}