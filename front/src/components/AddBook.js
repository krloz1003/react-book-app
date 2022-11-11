import React from 'react';
import BookForm from './BookForm';
import {useNavigate} from 'react-router-dom';

const navigate = useNavigate();
const AddBook = ({history, books, setBooks}) => {
    console.log({history, books, setBooks});
    const handleOnSubmit = (book) => {
        console.log(book);
        setBooks([book,...books]);
        navigate('/');
    };

    return (
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddBook;