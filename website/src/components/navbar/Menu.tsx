import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

interface Props {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

export const Menu: React.FC<Props> = ({ open, anchorEl, onClose }) => {
  const navigate = useNavigate();
  
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
        <ListItemButton onClick={() => navigate('/')}>
          <ListItemIcon>
            <HomeFilledIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/passport')}>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="Passport Tool" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/contract')}>
          <ListItemIcon>
            <DocumentScannerIcon />
          </ListItemIcon>
          <ListItemText primary="Contract Tool" />
        </ListItemButton>
      </List>
    </Popover>
  );
};

