import { DefaultTheme } from 'styled-components';
import workImage from '../assets/icon-work.svg';
import playImage from '../assets/icon-play.svg';
import studyImage from '../assets/icon-study.svg';
import exerciseImage from '../assets/icon-exercise.svg';
import socialImage from '../assets/icon-social.svg';
import selfCareImage from '../assets/icon-self-care.svg';

const myTheme: DefaultTheme = {
  palette: {
    primary: {
        blue: 'hsl(246, 80%, 60%)',
        lightRedForWork: 'hsl(15, 100%, 70%)',
        softBlueForPlay: 'hsl(195, 74%, 62%)',
        lightRedForStudy: 'hsl(348, 100%, 68%)',
        limeGreenForExercise: 'hsl(145, 58%, 55%)',
        violetForSocial:'hsl(264, 64%, 52%)',
        softOrangeForSelfCare:'hsl(43, 84%, 65%)',   
    },
    neutral: {
      veryDarkBlue: 'hsl(226, 43%, 10%)',
      darkBlue: 'hsl(235, 46%, 20%)',
      desaturatedBlue: 'hsl(235, 45%, 61%)',
      paleBlue: 'hsl(236, 100%, 87%)',    
    },
  },
  backgroundImages:{
    work:`url(${workImage})`,
    play:`url(${playImage})`,
    study:`url(${studyImage})`,
    exercise:`url(${exerciseImage})`,
    social:`url(${socialImage})`,
    selfCare:`url(${selfCareImage})`,
  },
  mediaSize: {
    mobileSmall: '320px',
    mobile: '540px',
    tablet: '768px',
    laptop: '1024px',
    desktop:'1200px',
    desktopLarge:'1380px',
  },
};

export { myTheme };
