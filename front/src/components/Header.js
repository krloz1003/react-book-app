import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Aplicación de Gestión de Libros</h1>  
            <hr />
            <div className='links'>
                <Link to="/" className="link"  >
                    Lista de libros
                </Link>
                <Link to="/add" className="link">
                    Añade Libro
                </Link>
            </div>
        </header>
    );
};

export default Header;
