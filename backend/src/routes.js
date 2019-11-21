import { Router } from 'express';
import cors from 'cors';

const routes = new Router();
routes.use(cors());

const cars = [
  {
    id: '1',
    placa: 'GGG-1313',
    chassi: 'asdfg123456',
    renavam: '123456',
    modelo: 'Hilux',
    marca: 'Toyota',
    ano: '2018',
  },
  {
    id: '2',
    placa: 'TTT-3333',
    chassi: 'asdfg123456',
    renavam: '123456',
    modelo: 'Jetta',
    marca: 'VW',
    ano: '2018',
  },
];


routes.post('/cars', (req, res) => {
  const { id, placa, chassi, renavam, modelo, marca, ano } = req.body;

  const car = {
    id,
    placa,
    chassi,
    renavam,
    modelo,
    marca,
    ano,
  };

  cars.push(car);

  return res.json(cars);
});

routes.get('/cars', (req, res) => {
  return res.json(cars);
});


routes.put('/cars', (req, res) => {
  const { id, placa, chassi, modelo, marca, ano } = req.body;

  const car = cars.find(car => car.id == id);

  car.placa = placa;
  car.chassi = chassi;
  car.modelo = modelo;
  car.marca = marca;
  car.ano = ano;

  return res.json(car);
});

routes.delete('/cars', (req, res) => {
  const { id } = req.body;

  const carId = cars.find(car => car.id == id);

  cars.splice(carId, 1);

  return res.json({ message: 'O carro foi deletado' });
});

export default routes;
