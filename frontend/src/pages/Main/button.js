import React from 'react';
import { Link } from 'react-router-dom';


export default function Button() {
  return (
    <>
      <button className="button">
        <Link id='button' to="/">Voltar</Link>
      </button>
    </>
  );
}