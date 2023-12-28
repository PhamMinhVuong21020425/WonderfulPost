import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import { iconButtonClasses } from '@mui/joy/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

type Props = {
    rowPerPage: number;
    currentPage: number;
    totalRows: number;
    indexOfLastRow: number;
    indexOfFirstRow: number;
    setCurrentPage: (page: number) => void;
    handlePageChange: (page: number) => void;
}

function PaginationLaptop({
    rowPerPage,
    currentPage,
    totalRows,
    indexOfLastRow,
    indexOfFirstRow,
    setCurrentPage,
    handlePageChange
}: Props) {
    const totalPages = Math.ceil(totalRows / rowPerPage);
    const maxVisiblePages = 3; // Define the maximum number of visible page buttons
    const pageButtons = [];

    if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
            pageButtons.push(i);
        }
    } else {
        const halfVisiblePages = Math.floor(maxVisiblePages / 2);

        if (currentPage <= halfVisiblePages) {
            for (let i = 1; i <= maxVisiblePages - 1; i++) {
                pageButtons.push(i);
            }
            pageButtons.push('...');
            pageButtons.push(totalPages);
        } else if (currentPage >= totalPages - halfVisiblePages) {
            pageButtons.push(1);
            pageButtons.push('...');
            for (let i = totalPages - (maxVisiblePages - 2); i <= totalPages; i++) {
                pageButtons.push(i);
            }
        } else {
            pageButtons.push(1);
            pageButtons.push('...');
            for (let i = currentPage - halfVisiblePages; i <= currentPage + halfVisiblePages; i++) {
                pageButtons.push(i);
            }
            pageButtons.push('...');
            pageButtons.push(totalPages);
        }
    }

    return (
        <Box>
            <Box
                className="Pagination-laptop"
                sx={{
                    pt: 2,
                    gap: 1,
                    [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
                    display: {
                        xs: 'none',
                        md: 'flex',
                    },
                }}
            >
                <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    startDecorator={<KeyboardArrowLeftIcon />}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>

                <Box sx={{ flex: 1 }} />

                {pageButtons.map((page, index) => (
                    <React.Fragment key={index}>
                        {page === '...' ? (
                            <span>
                                <IconButton size="sm" color="neutral" disabled>
                                    <MoreHorizIcon />
                                </IconButton>
                            </span>
                        ) : (
                            <IconButton
                                size="sm"
                                variant={currentPage === page ? 'outlined' : 'plain'}
                                color="neutral"
                                onClick={() => setCurrentPage(typeof page === 'number' ? page : totalPages)}
                            >
                                {page}
                            </IconButton>
                        )}
                    </React.Fragment>
                ))}

                <Box sx={{ flex: 1 }} />

                <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    endDecorator={<KeyboardArrowRightIcon />}
                    disabled={indexOfLastRow >= totalRows || currentPage === totalPages}
                >
                    Next
                </Button>
            </Box>

        </Box>
    );
}

function PaginationMobile({
    rowPerPage,
    currentPage,
    totalRows,
    setCurrentPage,
    handlePageChange
}: Props) {
    const totalPages = Math.ceil(totalRows / rowPerPage);
    const maxVisiblePages = 2;

    const renderPageButtons = () => {
        const pageButtons = [];
        const maxButtonsToShow = Math.min(totalPages, maxVisiblePages);
        const halfVisiblePages = Math.floor(maxButtonsToShow / 2);

        let startPage = Math.max(1, currentPage - halfVisiblePages);
        let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

        if (endPage - startPage < maxButtonsToShow - 1) {
            startPage = Math.max(1, endPage - maxButtonsToShow + 1);
        }

        if (currentPage - startPage < halfVisiblePages) {
            endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);
        }

        if (endPage === totalPages && totalPages - startPage < maxButtonsToShow - 1) {
            startPage = Math.max(1, totalPages - maxButtonsToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageButtons.push(i);
        }

        return pageButtons;
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };

    return (
        <Box className="Pagination-mobile" sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', py: 2 }}>
            <Button
                onClick={() => handlePageChange(currentPage - 1)}
                size="sm"
                variant="outlined"
                color="neutral"
                startDecorator={<KeyboardArrowLeftIcon />}
                disabled={currentPage === 1}
            >
                Previous
            </Button>

            <Box sx={{ flex: 1 }} />

            <IconButton
                size="sm"
                color="neutral"
                onClick={handleFirstPage}
                disabled={currentPage === 1}
            >
                1
            </IconButton>

            {renderPageButtons().map((page, index) => (
                <React.Fragment key={index}>
                    {page !== 1 && page !== totalPages && (
                        <IconButton
                            size="sm"
                            variant={currentPage === page ? 'outlined' : 'plain'}
                            color="neutral"
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </IconButton>
                    )}
                </React.Fragment>
            ))}

            <IconButton
                size="sm"
                color="neutral"
                onClick={handleLastPage}
                disabled={currentPage === totalPages || totalRows === 0}
            >
                {totalPages}
            </IconButton>

            <Box sx={{ flex: 1 }} />

            <Button
                onClick={() => handlePageChange(currentPage + 1)}
                size="sm"
                variant="outlined"
                color="neutral"
                endDecorator={<KeyboardArrowRightIcon />}
                disabled={currentPage === totalPages || totalRows === 0}
            >
                Next
            </Button>
        </Box>
    );
}



export { PaginationLaptop, PaginationMobile };