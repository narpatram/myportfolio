import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionHeader from '../components/SectionHeader';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';

const ContactContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(4),
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  color: theme.palette.text.primary,
}));

const SocialLinks = styled(Box)({
  display: 'flex',
  gap: '20px',
  marginTop: '20px',
});

const SocialIcon = styled(Box)({
  color: 'white',
  fontSize: '2rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.2)',
    color: '#61DAFB',
  },
});

const DownloadButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: '10px 20px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '1rem',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
}));

const Contact = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/resume.pdf';
    link.download = 'Narpat_Ram_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SectionHeader title="Let's Catch Up" />
      <ContactContainer>
        <ContactInfo>

          <Typography variant="body1" sx={{ mb: 2 }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </Typography>
          <SocialLinks>
            <SocialIcon onClick={() => window.open('https://github.com/narpatram', '_blank')}>
              <SiGithub />
            </SocialIcon>
            <SocialIcon onClick={() => window.open('https://linkedin.com/in/narpatram', '_blank')}>
              <SiLinkedin />
            </SocialIcon>
            <SocialIcon onClick={() => window.open('mailto:napoo.iitkgp.44@gmail.com')}>
              <SiGmail />
            </SocialIcon>
          </SocialLinks>
        </ContactInfo>
        <DownloadButton variant = "outlined" onClick={handleResumeDownload} >
          Download My Resume
        </DownloadButton>
      </ContactContainer>
    </>
  );
};

export default Contact; 