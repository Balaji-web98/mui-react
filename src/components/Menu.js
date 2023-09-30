import { Accessibility, Explore, Flight, Info, ListOutlined, LocalActivity, Place } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const Menu = () => {
    return (
        <Box padding={2} flex={1} sx={{ display: { xs: 'none', sm: 'block' } }} >
            <Box position='fixed'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Flight />
                            </ListItemIcon>
                            <ListItemText primary="Plan your Trip" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Things to do" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Explore />
                            </ListItemIcon>
                            <ListItemText primary="Explore" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Accessibility />
                            </ListItemIcon>
                            <ListItemText primary="facts" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Place />
                            </ListItemIcon>
                            <ListItemText primary="places" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocalActivity />
                            </ListItemIcon>
                            <ListItemText primary="Tickets" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Info />
                            </ListItemIcon>
                            <ListItemText primary="Help" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box >
    )
}

export default Menu