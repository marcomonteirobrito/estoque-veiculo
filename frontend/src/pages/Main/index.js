import React from 'react';
import { Link } from 'react-router-dom';

import './main.css';
import { FaEdit, FaTrashAlt, FaAlignJustify, FaPlusSquare } from 'react-icons/fa';

export default function Main() {
  return (
    <>
      <h1 id="tittle">Locarro</h1>
      <div className="center">
        <ul>
          <Link id="link" to="/list"><FaAlignJustify />Listar</Link>
          <Link id="link" to="/create"><FaPlusSquare />Criar</Link>
          <Link id="link" to="/update"><FaEdit />Editar</Link>
          <Link id="link" to="/delete"><FaTrashAlt />Deletar</Link>
        </ul>
      </div>
    </>
  );
}

