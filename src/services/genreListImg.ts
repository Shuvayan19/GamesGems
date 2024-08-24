// Import images
import action from "../assets/GenreLogo/gun.png";
import arpgImg from "../assets/GenreLogo/ARPG.png";
import battleRoyaleImg from "../assets/GenreLogo/battleroyale.png";
import cardGameImg from "../assets/GenreLogo/cardgame.png";
import fantasyImg from "../assets/GenreLogo/Fantasy.png";
import fightingImg from "../assets/GenreLogo/fighting.png";
import mmoImg from "../assets/GenreLogo/mmo.png";
import mmoarpgImg from "../assets/GenreLogo/mmoarpg.png";
import mmorpgImg from "../assets/GenreLogo/mmorpg.png";
import mobaImg from "../assets/GenreLogo/moba.png";
import racingImg from "../assets/GenreLogo/racing.png";
import socialImg from "../assets/GenreLogo/social.png";
import sportsImg from "../assets/GenreLogo/sports.png";
import strategyImg from "../assets/GenreLogo/strategy.png";
import shooterImg from "../assets/GenreLogo/shooter.png";
import actionImg from "../assets/GenreLogo/action-game.png";

const genreImgMap: { [key: string]: string } = {
  Action: action,
  "Action Game": actionImg,
  ARPG: arpgImg,
  "Action RPG": arpgImg,
  "Battle Royale": battleRoyaleImg,
  "Card Game": cardGameImg,
  Fantasy: fantasyImg,
  Fighting: fightingImg,
  MMO: mmoImg,
  MMOARPG: mmoarpgImg,
  MMORPG: mmorpgImg,
  MOBA: mobaImg,
  Racing: racingImg,
  Social: socialImg,
  Sports: sportsImg,
  Strategy: strategyImg,
  Shooter: shooterImg,
};
export default genreImgMap;
