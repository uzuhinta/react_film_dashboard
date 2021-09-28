import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { getAll } from 'api/actorApi';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function AllPage() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        async function fetAllActor() {
            const response = await getAll();
            console.log(response);
            setDatas(response.data.actors);
        }
        fetAllActor();
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Full name</TableCell>
                            <TableCell align="right">Birth day</TableCell>
                            <TableCell align="right">Summary</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">Slug</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.dob}</TableCell>
                                <TableCell align="right">
                                    {row.summary
                                        ? row.summary
                                        : 'No information'}
                                </TableCell>
                                <TableCell align="right">{row.img}</TableCell>
                                <TableCell align="right">{row.slug}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </motion.div>
    );
}

export default AllPage;
