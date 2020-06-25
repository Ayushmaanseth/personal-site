const positions = [{
  company: 'The Alan Turing Institute',
  position: 'Open Source Developer',
  link: 'https://github.com/Ayushmaanseth/sktime',
  daterange: 'March 2020 - Present',
  points: [
    'Working on the open source python library SKTIME, mainly with implenenting algorithms and fraeworks',
    'Currently working on implementing DirRec strategy for regression forecasting for reducing forecasting to (time series) regression',
    'Implemented Time Series Transformer using tsfresh for automatic feature extraction and deployed to the sktime package.',
    "Refactored legacy code classes for custom Time Series Classifier and Regressor, reducing on code fragility and immobility.",
  ],
}, {
  company: 'UCL and Microsoft Research',
  position: 'Software Research Intern',
  link: '',
  daterange: 'June 2019 - August 2019',
  points: [
    'Worked on optimization of user-defined hash functions by minimizing mutual information and maximizing joint entropy of hashed fields',
    'Optimized the hash function execution in different open-source projects. Current hash bucket collision rate improvement is up-to 85.43\%',
    "Submitted the research paper titled 'Bespoke Hashing With Variable Entropy Exploration' for ISSTA'20 based on the research and improvements of PySchneider",
  ],
}, {
  company: 'Goldman Sachs',
  position: 'Spring Week Intern',
  link: '',
  daterange: 'April 2019 - April 2019',
  points: [
    'Shadowed under Global Investment Research, Finance and Risk Engineering, Strats and Fixed Income Currencies, and Commodities.  Gained an insight of leveraging different technologies to solve complex problems',
    'Formulated design for an anomaly detection system for OTC(Over-The-Counter) contracts using Unsupervised Learning.  Gained in depth understanding about different design processes, requirements and workflow at the firm',
  ],
}, {
  company: 'Facebook',
  position: 'Hack-A-Project Intern',
  link: 'https://github.com/Ayushmaanseth/stuDYING',
  daterange: 'February 2019 - March 2019',
  points: [
    'Developed stuDYING - an online social platform for meet-ups in proximity of location using React.js forfront-end, Flask for RESTful API and Google Maps API in collaboration with Facebook, London',
    'Gained insight about different products at Facebook and their connection with end-users',
  ],
}, {
  company: 'Great Ormond Street Hospital for Children',
  position: 'Game Developer',
  link: 'https://www.researchgate.net/publication/341223831_125_Reward_rush_for_GOSH_development_of_a_mobile_augmented_reality_application_App_to_improve_patient_experience_at_GOSH/',
  daterange: 'February 2016 - March 2016',
  points: [
    'Developed an AR (Augmented Reality) game for the sick children of Great Ormond Street Hospital(GOSH) using Unity3D.',
    'Used Vuforia SDK for marker-based AR, scripting in C\#',
    'Introduced Machine Vision capabilities using TensorFlowSharp and Microsoft Azure Custom Vision API',
  ],
}, {
  company: 'Teaching Assistant',
  position: 'UCL ChangeMakers Project',
  link: 'https://matroid.com',
  daterange: 'June 2018 - October 2019',
  points: [
    'Helped students aged 11-17 to learn to code small robots and bio-locomoted robotic animals using the BBC Micro:bit.',
  ],
},
];

export default positions;
