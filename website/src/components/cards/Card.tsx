import type * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardHeader } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


interface CardProps {
    title: string;
    icon: React.ReactNode;
}

function SelectActionCard(props: CardProps) {
  console.log('hello')
  const navigate = useNavigate();
  const route = props.title.replace(/\s+/g, '-').toLowerCase();
  console.log('hellooo') 

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
          <CardActionArea onClick={() => navigate(`/${route}`)}>
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
