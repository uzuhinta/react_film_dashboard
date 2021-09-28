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
import { DataGrid } from '@mui/x-data-grid';
import { data } from 'autoprefixer';

function PaginationPage() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        async function fetAllActor() {
            const response = await getAll();
            console.log(response.data.actors);
            setDatas(response.data.actors);
        }
        fetAllActor();
    }, []);

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

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Full name' },
        { field: 'dob', headerName: 'Birthday' },
        { field: 'summary', headerName: 'Summary', minWidth: 300 },
    ];

    const [pageSize, setPageSize] = React.useState(5);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div
                style={{
                    height: 'calc(100vh - 80px)',
                    width: '100%',
                    color: 'red',
                }}
            >
                {datas.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    <DataGrid
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) =>
                            setPageSize(newPageSize)
                        }
                        rowsPerPageOptions={[20, 40, 100]}
                        pagination
                        rows={datas}
                        columns={columns}
                    />
                )}
            </div>
        </motion.div>
    );
}

export default PaginationPage;
