import './styles/style.sass';

/*
 * Example of images import:
 * import './images/header/pencil.png'
*/
import './images/our-photos/phot1.jpg';
import './images/our-photos/phot2.jpg';
import './images/our-photos/phot3.jpg';
import './images/our-photos/phot4.jpg';
import './images/our-photos/phot5.jpg';
import './images/our-photos/phot6.jpg';
import './images/mentors/alex-karlovich.jpg';
import './images/mentors/alexander-gerasimov.jpg';
import './images/mentors/dzmitry-varabei.jpg';
import './images/mentors/konstantin-krivlenia.jpg';
import './images/mentors/paul-yuhnovich.jpg';
import './images/partners/EPAM-logo.svg';
import './images/partners/LIAA.png';
import './images/partners/logo-apalon.png';
import './images/partners/logo-devby.png';
import './images/partners/logo-egnyte.svg';
import './images/partners/logo-emerline.svg';
import './images/partners/logo-evolution-gaming.svg';
import './images/partners/logo-hqsoftware.png';
import './images/partners/logo-imaguru.svg';
import './images/partners/logo-keepsolid.svg';
import './images/partners/logo-madmaniak.svg';
import './images/partners/logo-microsoft.svg';
import './images/partners/logo-mozilla.svg';
import './images/partners/logo-nikofirm.png';
import './images/partners/logo-onliner.png';
import './images/partners/logo-oxagile.png';
import './images/partners/logo-rs.svg';
import './images/partners/logo-toptal.png';
import './images/partners/logo-yandex.svg';

const questionsFAQ = document.getElementsByClassName('questions')[0];

questionsFAQ.addEventListener('click', function(e) {
  const answer = e.path[0].nextElementSibling;
  answer.classList.toggle('ansver-visibility');
});
