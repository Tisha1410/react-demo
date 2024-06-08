import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ setSearchQuery }) => {
    return (
        <Box width="100%" maxWidth="600px">
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                    style: { padding: '10px' },
                }}
                InputLabelProps={{
                    style: { fontSize: '1.2rem' },
                }}
            />
        </Box>
    );
};

export default SearchBar;


