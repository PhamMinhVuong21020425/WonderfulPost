import { Button } from "@mui/joy";
import Box from "@mui/joy/Box";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import React, { useState } from "react";

const test: string[] = [
    'a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
];

export default function Dashboard() {
    // State to manage individual modals for each item
    const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

    const renderModal = (item: string, index: number) => {
        return (
            <Modal
                open={openModalIndex === index}
                onClose={() => setOpenModalIndex(null)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ModalDialog>
                    <Typography level='body-sm'>{item}</Typography>
                </ModalDialog>
            </Modal>
        );
    };

    return (
        <Box display="flex">
            <Typography level="h2" component="h1">
                Staffs
            </Typography>
            {test.map((item, index) => (
                <React.Fragment key={index}>
                    <Button
                        variant="outlined"
                        style={{ margin: '10px 10px' }}
                        onClick={() => setOpenModalIndex(index)}
                    >
                        <Typography level='body-sm'>{item}</Typography>
                    </Button>
                    {renderModal(item, index)}
                </React.Fragment>
            ))}
        </Box>
    );
}
