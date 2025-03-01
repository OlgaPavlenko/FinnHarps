import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

interface MyButtonProps {
  text: string;
  color?: string;
  onClick?: () => {};
}

const MyButton = ({ text, color }) => {
  return (
    <Button
      sx={{
        color: { color },
        position: 'relative',
        '& .button-content::after': {
          content: '""',
          display: 'block',
          width: '100%',
          height: '2px',
          backgroundColor: 'currentColor',
          position: 'absolute',
          bottom: '-4px',
          left: 0,
        },
      }}
    >
      <Typography className="button-content" sx={{ fontWeight: 'bold' }}>
        {text}
      </Typography>
    </Button>
  );
};

export default MyButton;
