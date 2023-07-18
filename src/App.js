import './App.css';
import CharacterInfo from './character-info.js';
import {Button, Box, Grid} from '@mui/material';
import {AspectRatio} from '@mui/joy';
import { styled } from '@mui/material/styles';
// import characterPicture from './images/Jean.webp';
// import jeanSkill from './images/JeanSkill.jpg';
import images from './constants/images.js';
import * as React from 'react';

const BootstrapButton = styled(Button)({
  backgroundColor: '#171143',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '6%',
  '&:hover': {
    backgroundColor: '#281e73',
    borderColor: '#0062cc',
    boxShadow: 'none',
  }
});

let person = new CharacterInfo(
  'Jean',
  images.Jean,
  'Sword',
  ['Favonius Bladework', 'Gale Blade', 'Dandelion Breeze', 'Wind Companion', 'Let the Wind Lead', 'Guiding Breeze'],
  [images.JeanNormalAttack, images.JeanSkill, images.JeanBurst, images.JeanPassive1, images.JeanPassive2, images.JeanPassive3],
  ['Desc1', 'Desc2', 'Desc3', 'Desc4', 'Desc5', 'Desc6',])

function App() {
  return (
    <div className="App-background">
      <div className="App-top">
        <h1>
          Genshin Impact Character Archive
        </h1>
      </div>
      {/* <InfoDisplay /> */}
      <ShanaeTest />
    </div>
  );
}

//original setup with more stuff hard coded
// function InfoDisplay() {
//   return(
//     <Box
//       className="App-info-display"
//       sx={{p: 2}}  
//     >
//       <Grid container className="test">
//         <Grid item xs={12} md={4}>
//           <Grid item xs={12}>
//             <CharacterPicture />
//           </Grid>
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <Grid item xs={12}>
//             <CharacterName />
//           </Grid>
//           <Grid item xs={12}>
//             <SkillList />
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// function CharacterPicture() {
//   return(
//     <Box>
//       <AspectRatio
//         variant="none"
//         objectFit="contain"
//         ratio="3/4"
//         style={{position: "relative"}}
//       >
//         <img
//           src={characterPicture}
//           alt="Jean"
//         />
//       </AspectRatio>
//     </Box>
//   );
// }

// function SkillList() {
//   return(
//     <Box>
//       {/* <h3>
//         Weapon:
//       </h3>
//       <p>Sword</p> */}
//       {/* <WeaponName /> */}
//       <h3>
//         Talents:
//       </h3>
//       <p>Normal Attack</p>
//       <p>Gale Blade</p>
//       <p>Dandelion Breeze</p>
//       <p>Wind Companion</p>
//       <p>Let the Wind Lead</p>
//       <p>Guiding Breeze</p>
//     </Box>
//   );
// }

// function CharacterName() {
//   return(
//     <Box>
//       <h2>
//         Jean
//       </h2>
//     </Box>
//   );
// }

function CharacterNameAndPicture({characterName, characterPicture}) {
  return(
    <>
      {/* <Box>
        <AspectRatio
          variant="none"
          objectFit="contain"
          ratio="3/4"
          style={{position: "relative"}}
        >
          <img
            src={characterPicture}
            alt="testing"
          />
        </AspectRatio>
      </Box>
      <Box>
        <h2>
          {characterName}
        </h2>
      </Box> */}
      <div>
        <AspectRatio
          variant="none"
          objectFit="contain"
          ratio="3/4"
          style={{position: "relative"}}
        >
          <img
            src={characterPicture}
            alt="testing"
          />
        </AspectRatio>
      </div>
      <div>
        <h2>
          {characterName}
        </h2>
      </div>
    </>
  );
}

function WeaponName({characterWeapon}) {
  return(
    <div className="weaponline" style={{textAlign: "center"}}>
      <h3>Weapon: </h3>
      <p>{characterWeapon}</p>
    </div>
  );
}

function SkillCard({skillName, skillPicture, skillDescription}) {
  return(
    <Grid item xs={12} md={4}>
      <BootstrapButton
        variant="contained"
        sx={{width: "100%", minHeight: "40vh"}}
      >
      {/* <Button className="skill-card"> */}
        <div>
          <div style={{position: "relative"}}>
            <img src={skillPicture} alt="Skill" style={{width: "8em"}}/>
          </div>
          <div>
            <p>{skillName}</p>
          </div>
        </div>
      </BootstrapButton>
    </Grid>
    
  );
}

function ShanaeTest() {
  return(
    <Box
      className="App-info-display"
      sx={{p: 2}}  
    >
      <Grid container className="test" spacing={2}>
        {/* picture container */}
        <Grid item xs={12} md={4}>
          <Grid item xs={12}>
            <CharacterNameAndPicture characterName={person.name} characterPicture={person.picture}/>
          </Grid>
          <Grid item xs={12}>
            <WeaponName characterWeapon={person.weapon}/>
          </Grid>
        </Grid>

        {/* skill container */}
        <Grid container item xs={12} md={8} spacing={2}>
          <SkillCard skillName={person.skillNames[0]} skillPicture={person.skillImages[0]} skillDescription={person.skillDescriptions[0]}/>
          <SkillCard skillName={person.skillNames[1]} skillPicture={person.skillImages[1]} skillDescription={person.skillDescriptions[1]}/>
          <SkillCard skillName={person.skillNames[2]} skillPicture={person.skillImages[2]} skillDescription={person.skillDescriptions[2]}/>
          <SkillCard skillName={person.skillNames[3]} skillPicture={person.skillImages[3]} skillDescription={person.skillDescriptions[3]}/>
          <SkillCard skillName={person.skillNames[4]} skillPicture={person.skillImages[4]} skillDescription={person.skillDescriptions[4]}/>
          <SkillCard skillName={person.skillNames[5]} skillPicture={person.skillImages[5]} skillDescription={person.skillDescriptions[5]}/>
        </Grid>
      </Grid>
    </Box>
  );
}
export default App;