import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import { Book } from '../book/book';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

type response = {
    code: number,
    message: string,
    data: Book[],
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Main: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([])
    useEffect(() => {
        axios.get<response>("http://localhost:8000/book/all")
            .then(resp => resp.data)
            .then(data => setBooks(data.data))
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <Container maxWidth="lg">
                <Grid container xs={12} spacing={1}>
                    {books.map((book, index) => {
                        return (
                            <>
                                <Grid item xs={4} key={index}>
                                    <Item>
                                        <Link to={`book/${book.ID}`}>{book.Name}</Link>
                                    </Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item>{book.Author}</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item>{book.Rating}</Item>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default Main;