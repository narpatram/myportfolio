import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const GradientTypography = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'left',
  marginBottom: theme.spacing(4),
  position: 'relative',
})) as typeof Typography;

interface SectionHeaderProps {
  title: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const SectionHeader = ({ title, variant = 'h4' }: SectionHeaderProps) => {
  return (
    <GradientTypography variant={variant} component="h2">
      {title}
    </GradientTypography>
  );
};

export default SectionHeader; 