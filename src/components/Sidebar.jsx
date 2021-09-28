import * as React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { AllInbox } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { useThemeDark } from 'utils';

export default function Sidebar() {
    const [expanded, setExpanded] = React.useState(false);
    const navigate = useNavigate();
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

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleNavigate = (destination) => {
        navigate(destination);
    };

    return (
        <div className="mt-3">
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                disablePadding
                sx={bg}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={text} />}
                    aria-controls="panel1bh-content"
                    onClick={() => handleNavigate('/app/actor/all')}
                    id="panel1bh-header"
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <RecentActorsIcon sx={text} />
                        </ListItemIcon>
                        <ListItemText sx={text} primary="Actors" />
                    </ListItemButton>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItem
                            sx={text}
                            disablePadding
                            onClick={() => handleNavigate('/app/actor/all')}
                        >
                            <ListItemButton>
                                <ListItemText primary="All" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            sx={text}
                            disablePadding
                            onClick={() =>
                                handleNavigate('/app/actor/pagination')
                            }
                        >
                            <ListItemButton>
                                <ListItemText primary="Pagination" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            sx={text}
                            disablePadding
                            onClick={() => handleNavigate('/app/actor/add')}
                        >
                            <ListItemButton>
                                <ListItemText primary="Add" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography>Users</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus
                        feugiat lectus, varius pulvinar diam eros in elit.
                        Pellentesque convallis laoreet laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <RecentActorsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat
                        nisl. Integer sit amet egestas eros, vitae egestas
                        augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <AccordionSummary
                onClick={() => handleNavigate('/app/404')}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <ListItemButton>
                    <ListItemIcon>
                        <ErrorOutlineIcon sx={text} />
                    </ListItemIcon>
                    <ListItemText primary="404 page" sx={text} />
                </ListItemButton>
            </AccordionSummary>
        </div>
    );
}
