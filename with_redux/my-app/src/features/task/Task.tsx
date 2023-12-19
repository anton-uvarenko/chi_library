import React, {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {randomStatus, addTask, deleteTask, ITask, tasksSelector, taskThunk} from "./taskSlice";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TextField} from "@mui/material";

export const Task: FC = () => {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(tasksSelector);

    const handleClick = () => {
        dispatch(addTask({
            description: Math.random().toString(),
            id: tasks.length,
            status: randomStatus(),
        } as ITask))
    }

    const handleDelete = (id: number) => {
        dispatch(deleteTask(id))
    }

    useEffect(() => {
        dispatch(taskThunk());
    }, []);

    return (
        <>
            <Container maxWidth="sm">
                <Button onClick={handleClick}>add task</Button>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell>description</TableCell>
                                <TableCell>status</TableCell>
                                <TableCell>delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tasks.map(t => {
                                return (
                                    <TableRow>
                                        <TableCell>
                                            {t.id}
                                        </TableCell>
                                        <TableCell>
                                            {t.description}
                                        </TableCell>
                                        <TableCell>
                                            {t.status}
                                        </TableCell>
                                        <TableCell>
                                            <Button onClick={() => handleDelete(t.id)}>delete</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}