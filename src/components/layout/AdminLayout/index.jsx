import { Box } from '@mui/system';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '300px 1fr',
                gridTemplateRows: 'auto 1fr',
                gridTemplateAreas: `"header header"
                                    "sidebar main"`,
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    gridArea: 'header',
                }}
            >
                <Header />
            </Box>
            <div className="shadow scroll">
                <Box
                    sx={{
                        gridArea: 'sidebar',
                        overflowY: 'auto',
                        scrollBehavior: 'smooth',
                    }}
                >
                    <Sidebar />
                </Box>
            </div>
            <div className="scroll bg-secondary px-3 pt-2 overflow-y-auto transition-colors duration-300">
                <Box
                    sx={{
                        gridArea: 'main',
                    }}
                >
                    fsadfasdfas
                    <Outlet className="h-full" />
                </Box>
            </div>
        </Box>
    );
}

export default AdminLayout;
