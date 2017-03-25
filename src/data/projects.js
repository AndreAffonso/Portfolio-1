import ChapulinPicture from '../images/chapulin.png'
import ScoutfyPicture from '../images/scoutfy.jpg'
import ArcanjoPicture from '../images/arcanjo.png'
import ArkanoidPicture from '../images/arkanoid.jpg'

import ScoutfyImage1 from '../images/scoutfy1.png'
import ScoutfyImage2 from '../images/scoutfy2.png'
import ScoutfyImage3 from '../images/scoutfy3.png'

import ArcanjoImage1 from '../images/arcanjo1.jpg'
import ArcanjoImage2 from '../images/arcanjo2.jpg'
import ArcanjoImage3 from '../images/arcanjo3.png'
import ArcanjoImage4 from '../images/arcanjo4.png'
import ArcanjoImage5 from '../images/arcanjo5.png'

import Arkanoid1 from '../images/arkanoid1.jpg'
import Arkanoid2 from '../images/arkanoid.jpg'

const projects = [
   {
      "name": "Scoutfy",
      "route": "scoutfy",
      "date": "present",
      "picture": ScoutfyPicture,
      "images": [
         ScoutfyImage1,
         ScoutfyImage2,
         ScoutfyImage3
      ]
   },
   {
      "name": "Arcanjo",
      "route": "arcanjo",
      "date": "January 2017",
      "picture": ArcanjoPicture,
      "images": [
         ArcanjoImage1,
         ArcanjoImage2,
         ArcanjoImage4,
         ArcanjoImage5
      ]
   },
   {
      "name": "Chapulin Internship",
      "date": "May 2016",
      "route": "chapulin-internship",
      "picture": ChapulinPicture
   },
   {
      "name": "Arkanoid PVP",
      "date": "May 2014",
      "route": "arkanoid",
      "picture": ArkanoidPicture,
      "images": [
         ArkanoidPicture,
         Arkanoid1,
         Arkanoid2
      ]
   },
];


export default projects;
