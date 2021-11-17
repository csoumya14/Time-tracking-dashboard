import 'styled-components';
import { Url } from 'url';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        blue: string;
        lightRedForWork: string;
        softBlueForPlay: string;
        lightRedForStudy: string;
        limeGreenForExercise: string;
        violetForSocial:string;
        softOrangeForSelfCare:string;
      };
      neutral: {
        veryDarkBlue: string;
        darkBlue: string;
        desaturatedBlue: string;
        paleBlue: string;    
      };
    };
    backgroundImages:{
        work:string;
        play:string;
        study:string;
        exercise:string;
        social:string;
        selfCare:string;
    };
    mediaSize: {
      mobileSmall: string;
      mobile: string;
      tablet: string;
      laptop: string;
      desktop:string;
      desktopLarge:string;
    };
  }
}