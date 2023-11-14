import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

type Book = {
    ID: number,
    Name: string,
    Description: string,
    Author: string,
    Genre: string,
    Rating: number,
}

type response = {
    code: number
    message: string
    data: Book
}

const BookComponent: React.FC = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState<Book>();

    useEffect(() => {
        if (!bookId) return;
        axios.get<response>(`http://localhost:8000/book?id=${bookId}`)
            .then(resp => resp.data)
            .then(data => setBook(data.data))
            .catch(error => {
                console.log(error);
            })
    }, [bookId]);
    return (
        <>
            <Link to="/">Main</Link>
            <h3>{book?.Name}</h3>
            <p>{book?.Author}</p>
            <p>{book?.Genre}</p>
            <p>{book?.Description}</p>
            <p>{book?.Rating}</p>
        </>
    )
}

export default BookComponent;
export type { Book };