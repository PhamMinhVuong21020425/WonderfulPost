import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='w-1/2'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead className='bg-lime-100'>
                            <TableRow>
                                <TableCell className='font-poppins text-red-500' align='left'>Dessert (100g serving)</TableCell>
                                <TableCell className='font-poppins' align="center">Calories</TableCell>
                                <TableCell className='font-poppins' align="center">Fat&nbsp;(g)</TableCell>
                                <TableCell className='font-poppins' align="center">Carbs&nbsp;(g)</TableCell>
                                <TableCell className='font-poppins' align="center">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                // key={row.name}
                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell className='font-poppins' align='left'>
                                        {row.name}
                                    </TableCell>
                                    <TableCell className='font-poppins' align="center">{row.calories}</TableCell>
                                    <TableCell className='font-poppins' align="center">{row.fat}</TableCell>
                                    <TableCell className='font-poppins' align="center">{row.carbs}</TableCell>
                                    <TableCell className='font-poppins' align="center">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}