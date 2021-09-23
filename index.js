const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};


const animalsArray = farmAnimals.split(' ');


const [moo, neigh, baa, oink, cluck] = animalsArray;
const [bessie, , dolly, babe, little] = animalsArray;
const [blackAndWhite, , black, pink] = animalsArray;

const [red, orange, yellow, green, blue, indigo, violet] = colors;
const [r, o, y, g, b, indg , v] = colors;

const {muppetName, color, song, job, partner} = muppet;
const {song2, song4} = nestedMuppet.album.theMuppetMovie;
const {nestedJob, nestedPartner} = nestedMuppet;