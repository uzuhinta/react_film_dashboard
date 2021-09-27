import { Box } from '@mui/system';
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
                    backgroundColor: 'primary.main',
                }}
            >
                Header
            </Box>
            <Box sx={{ gridArea: 'sidebar', backgroundColor: '#0f0' }}>
                Sidebar
            </Box>
            <Box sx={{ gridArea: 'main' }}>
                <Outlet />
            </Box>
        </Box>
    );
}

export default AdminLayout;
