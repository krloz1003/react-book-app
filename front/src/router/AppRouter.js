import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookList from '../components/BooksList';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route  element={<BookList />} path="/"/>
                        <Route element={<AddBook />} path="/add" />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;