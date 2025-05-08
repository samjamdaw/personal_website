import type * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardHeader } from '@mui/material';
import Typography from '@mui/material/Typography';


interface CardProps {
    title: string;
    icon: React.ReactNode;
}

function SelectActionCard(props: CardProps) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      <Card>
          <CardActionArea>
              <CardContent sx={{ height: '100%' }}>
                  <CardHeader
                  avatar={props.icon}/>
                  <Typography variant="h5" component="div">
                    {props.title}
                  </Typography>
              </CardContent>
          </CardActionArea>
      </Card>
    </Box>
  );
}

export default SelectActionCard;
