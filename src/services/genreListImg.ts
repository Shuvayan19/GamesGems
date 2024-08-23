// Import images
import actionImg from '../assets/GenreLogo/action.png';
import arpgImg from '../assets/GenreLogo/ARPG.png';
import battleRoyaleImg from '../assets/GenreLogo/battleroyale.png';
import cardGameImg from '../assets/GenreLogo/cardgame.png';
import fantasyImg from '../assets/GenreLogo/Fantasy.png';
import fightingImg from '../assets/GenreLogo/fighting.png';
import mmoImg from '../assets/GenreLogo/mmo.png';
import mmoarpgImg from '../assets/GenreLogo/mmoarpg.png';
import mmorpgImg from '../assets/GenreLogo/mmorpg.png';
import mobaImg from '../assets/GenreLogo/moba.png';
import racingImg from '../assets/GenreLogo/racing.png';
import socialImg from '../assets/GenreLogo/social.png';
import sportsImg from '../assets/GenreLogo/sports.png';
import strategyImg from '../assets/GenreLogo/strategy.png';
import shooterImg from '../assets/GenreLogo/shooter.png';

const genreImgMap: { [key: string]: string } = {
  'Action': actionImg,
  'Action game': actionImg,
  'Arpg': arpgImg,
  'Action rpg': arpgImg,
  'Battle royale': battleRoyaleImg,
  'Card game': cardGameImg,
  'Fantasy': fantasyImg,
  'Fighting': fightingImg,
  'Mmo': mmoImg,
  'Mmoarpg': mmoarpgImg,
  'Mmorpg': mmorpgImg,
  'Moba': mobaImg,
  'Racing': racingImg,
  'Social': socialImg,
  'Sports': sportsImg,
  'Strategy': strategyImg,
  'Shooter': shooterImg,
};
export default genreImgMap;