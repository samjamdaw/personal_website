import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

interface Props {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

export const Menu: React.FC<Props> = ({ open, anchorEl, onClose }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <HomeFilledIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="Passport Tool" />
        </ListItemButton>
      </List>
    </Popover>
  );
};