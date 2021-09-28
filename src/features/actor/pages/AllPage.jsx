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
import { useThemeDark } from 'utils';

function AllPage() {
    const [datas, setDatas] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [selectedActor, setSelectedActor] = useState({});

    useEffect(() => {
        async function fetAllActor() {
            const response = await getAll();
            console.log(response);
            setDatas(response.data.actors);
        }
        fetAllActor();
    }, []);

    const handleClick = (e, actor) => {
        console.log(actor);
    };

    const isDark = useThemeDark();

    const bg = {
        backgroundColor: `${isDark ? '#2d3748' : '#ffffff'}`,
        transition: 'all ease 0.3s',
        padding: 0,
    };

    const text = {
        color: `${isDark ? '#f7fafc' : '#2d3748'}`,
        transition: 'all ease 0.3s',
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <TableContainer component={Paper} sx={bg}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={text}>ID</TableCell>
                            <TableCell sx={text}>Full name</TableCell>
                            <TableCell sx={text} align="right">
                                Birth day
                            </TableCell>
                            <TableCell sx={text} align="right">
                                Summary
                            </TableCell>
                            <TableCell sx={text} align="right">
                                Image
                            </TableCell>
                            <TableCell sx={text} align="right">
                                Slug
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.map((row) => (
                            <TableRow
                                onClick={(e) => handleClick(e, row)}
                                key={row.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell sx={text} component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell sx={text} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell sx={text} align="right">
                                    {row.dob}
                                </TableCell>
                                <TableCell sx={text} align="right">
                                    {row.summary
                                        ? row.summary
                                        : 'No information'}
                                </TableCell>
                                <TableCell sx={text} align="right">
                                    {row.img}
                                </TableCell>
                                <TableCell sx={text} align="right">
                                    {row.slug}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </motion.div>
    );
}

export default AllPage;
