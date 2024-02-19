import { Grid, List, ListItemButton, ListItem, ListItemText } from '@mui/material';

export default function Layout() {
    return (
        <Grid item spacing={2}>
            <Grid item xs={8}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Inbox" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={4}>
            </Grid>
        </Grid>
    )
}