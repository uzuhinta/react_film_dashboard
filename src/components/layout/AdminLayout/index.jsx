import { Box } from '@mui/system';
import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '240px 1fr',
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
            <div className="shadow">
                <Box
                    sx={{
                        gridArea: 'sidebar',
                        overflowY: 'auto',
                        scrollBehavior: 'smooth',
                    }}
                >
                    Sidebar
                </Box>
            </div>
            <div className="bg-secondary  transition-colors duration-300">
                <Box
                    sx={{
                        gridArea: 'main',
                        overflowY: 'auto',
                        scrollBehavior: 'smooth',
                    }}
                >
                    <Outlet />
                </Box>
            </div>
        </Box>
    );
}

export default AdminLayout;
