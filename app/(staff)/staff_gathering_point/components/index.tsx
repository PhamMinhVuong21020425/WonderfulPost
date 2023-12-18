'use client';
import React from 'react';
import SideBar from './SideBar';
import Header from './Header';
import palette from '@/app/styles/palette';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';

export default function Page() {
    return (
        <CssVarsProvider disableTransitionOnChange theme={palette}>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Header />
                <SideBar />
            </Box>
        </CssVarsProvider>
    )
}