import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookList from '../components/BooksList';
import useLocalStorage from "../hooks/useLocalStorage";

const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route
                            //render={(props) => (
                            //    <BookList {...props} books={books} setBooks={setBooks} />
                            //)}
                            path="/"
                            element={<BookList books={books} setBooks={setBooks} />}
                        />
                        <Route
                            //render={(props) => (
                            //    <AddBook {...props} books={books} setBooks={setBooks} />                                
                            //)}
                            // Solución: https://ui.dev/react-router-pass-props-to-components
                            // Pendiente de cómo llmar a history,en la siguiente ruta
                            //https://blog.logrocket.com/migrating-react-router-v6-complete-guide/

                            // Conocer un poco de las rutas V6
                            // https://ui.dev/react-router-pass-props-to-components
                            element={<AddBook books={books} setBooks={setBooks} />}
                            path="/add" 
                            
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;