import { useState } from "react";

import './App.css';
import { ContactUs } from './ContactUs';
import MobileMenuIcon from './images/mobile-menu.png';
import Logo from './images/logo11.png';
import FeaturedOne from './images/featured1.png';
import FeaturedTwo from './images/featured2.png';
import FeaturedThree from './images/featured3.png';
import Kidzone from './images/kidzone.png';
import Automore from './images/automore.png';
import Logobalt from './images/logobalt.png';
import Dmlangai from './images/dmlangai.png';
import Angeloakmuo from './images/angeloakmuo.png';
import andrius from './images/andrius.png';
import migle from './images/migle.png';
import vilius from './images/vilius.png';
import Poster1 from './images/poster1.png';
import Poster2 from './images/poster2.png';
import Poster3 from './images/poster3.png';
import FbLogo from './images/fbLogo.png';

import Slideshow_one from './images/slideshow1.jpg';
import Graphics from './images/graphics.jpg';

function App() {

  const [submitMessage, setSubmitMessage] = useState('Parašykite atsiliepimą ir jūs!');

  const onSubmit = () => {

    const reviewsDiv = document.getElementById('reviews-scrolltop');
    const reviewsStart = document.getElementById('reviews');

    if (fields.name.length !== 0 || fields.text.length !== 0) {
    const newComments = [...allComments, { avatar: 'https://static.paslaugos.lt/static/img/avatar.svg', name: fields.name, date: fields.date, text: fields.text}];
    console.log(newComments);
    setSubmitMessage('Skelbiama...')
    setTimeout(() => {
      newComments.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });
      setAllComments(newComments);
      setFields({...fields, name: '', text: ''});
      setSubmitMessage('Atsiliepimas paskelbtas. Ačiū!');
      reviewsDiv.scrollTop = 0;
      reviewsStart.scrollIntoView();
    }, 2000);
    console.log(localStorage);
    } else {
      setSubmitMessage('Užpildykite abu laukelius.');
    }
  }

  const generateTodaysDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2,"0");

    return `${year}-${month}`;
    
  }

  const comments = [
    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_13172143/profilis.jpg',
      facebookProfile: false,
      name: 'Laura',
      date: '2023-06',
      text: 'Jūsų pastangų dėka mano tinklalapis dabar tarnauja kaip galinga platforma efektyviam mano verslo paslaugų pristatymui. Ačiū Jums už tai :)'
    },
    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_12889547/profilis.jpg',
      facebookProfile: false,
      name: 'Saulius Bužinskas',
      date: '2023-03',
      text: 'Iš esmės, esu labai patenkintas Jūsų darbo kokybe ir teikiamos paslaugos lygiu. Jūs viršijote mano lūkesčius, ir neabejoju, kad rekomenduosiu Jūsų paslaugas, kurie ieško tinklalapių kūrėjo. Dar kartą dėkoju už puikią svetainę.'
    }, {
      avatar: 'https://static.paslaugos.lt/static/img/avatar.svg',
      facebookProfile: false,
      name: 'Trendy Bar',
      date: '2023-01',
      text: 'Profesionali komunikacija, greitas ir optimalus reagavimas tiek į dideles, tiek į mažas internetinės svetainės vidaus ir išorės problemas, niekada nekilo jokių sunkumų dirbant su digital edge ir ateityje palaikysime ryšį su šiais savo srities specialistais.'
    },    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_11141649/profilis.jpg',
      facebookProfile: true,
      name: 'Indre Gataveckaite',
      date: '2023-05',
      text: 'Dėkoju Viliui už atliktą darbą ir malonų bendravimą. Puikiai išsprendė klausimus dėl kombinuoto prekių siuntimo. Atliktas darbas www.pagamintavienuolyne.lt'
    },    {
      avatar: 'https://static.paslaugos.lt/static/img/avatar.svg',
      facebookProfile: false,
      name: 'Pačiu laiku',
      date: '2023-05',
      text: 'Esame nuoširdžiai dėkingi įmonei už el. svetainę www.motinospienobankas.lt Darbai atlikti labai greitai, bendravimas malonus ir dėmesingas. AČIŪ!'
    },    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_7585611/profilis.jpg',
      facebookProfile: true,
      name: 'Egle Aleknaite',
      date: '2023-06',
      text: 'Sprendžia programines problemas operatyviai, pateikia įvairių variantų, kaip galima išspręsti vieną ar kitą netobulumą. Esu patenkinta. Kreipsiuosi dar kartą.'
    },    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_10422851/profilis.jpg',
      facebookProfile: true,
      name: 'Lukas Rudzevičius',
      date: '2022-12',
      text: 'Komunikacija vyko sklandžiai ir greitai, darbu likome patenkinti. Kaip greitai viskas bus atlikta priklausys tik nuo jūsų pačių. Viliui reikalinga tik informacija, o viskas toliau atliekama itin greitai.'
    },    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_3932423/profilis.jpg',
      facebookProfile: true,
      name: 'Pau Lius',
      date: '2023-06',
      text: 'Paslaugos atliktos kokybiškai, bei laiku. Labai malonus bendravimas, viskas atlikta maksimaliai gerai iki smulkiausių detalių.'
    },    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_10117702/profilis.jpg',
      facebookProfile: true,
      name: 'Rima',
      date: '2023-03',
      text: 'Noriu padėkoti Viliui ir jo komandai už sklandų ir kokybišką internetinės parduotuvės kūrimą bei visokeriopą pagalbą. Ačiū, labai džiaugiuosi, kad pasirinkau jus šiam darbui, pranokote lūkesčius :)'
    },    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_12137676/uab-rbm.jpg',
      facebookProfile: false,
      name: 'www.redbigmonster.lt',
      date: '2023-06',
      text: 'Sukūrėme ne vieną e-shop projektą ir dirbame kartu toliau. Digital edge komanda dirba greitai, kokybiškai bei už konkurencingą kainą. Rekomenduojame. Arūnas P.'
    },    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_9720190/profilis.jpg',
      facebookProfile: false,
      name: 'Rašto darbai',
      date: '2021-10',
      text: 'Su Viliaus komanda dirbome ties dviem nedideliais projektais. Asmeniškai pasiūlo geriausius variantus, padeda susirasti tinkamus būsimo sistemų ir dizainų pavyzdžius, iš anksto aptaria kaip kas būtų geriausia įgyvendinti. Savo srities profesionalas, atlieka darbą kokybiškai, greitai ir svarbiausia (!) į viską žiūri atsakingai. Netgi po įvykdytų darbų, ir mokėjimų už juos, elgiasi profesionaliai - naudojimosi metu atsiradus papildomiems klausimams noriai konsultuoja ir esant poreikiui pataiso ar pakoreguoja tinklapio veikimą.'
    },    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_9706832/profilis.jpg',
      facebookProfile: false,
      name: 'Dominyka Jundulaite',
      date: '2022-01',
      text: 'Greitai ir pagal visus mano pageidavimus sukūrė svetainę. Negailėjo laiko ir išsamiai paaškino kaip valdyti savo naujai sukurtą puslapį. Kilus kokiam klausimui visada greitai atrašydavo ir atsakydavo. Labai džiaugiuosi, kad pasirinkau juos. Nuoširdžiai rekomenduoju!'
    },    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_9665967/profilis.jpg',
      facebookProfile: true,
      name: 'Robertas Ivanauskas',
      date: '2023-03',
      text: 'Sukure svetaine viskas sklandziai, atliko koregavimus greitai ir be problemu. rekomenduoju'
    },    {
      avatar: 'https://static.paslaugos.lt/static/img/avatar.svg',
      facebookProfile: false,
      name: 'Mantas',
      date: '2022-04',
      text: 'Puikūs atsiliepimai apie Digital edge komanda. Vien tai, kad į susitikimą ateinama pasiruošus ir turint viziją bei demo versiją įrodo, kad požiūris į klientą yra profesionalus. Puikus bendravimas viso proceso metu: visada viską operatyviai paaiškina, pateikia nuorodas ir operatyviai atlieka reikiamas korekcijas. Bendravimo etika ir atliekamo darbo profesionalumas verti aukščiausio įvertinimo. Drąsiai rekomenduoju.'
    },    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_202691/sergio-tachinni.jpg',
      facebookProfile: true,
      name: 'Barbora Skučaitė',
      date: '2021-12',
      text: 'Puikus bendradarbiavimas, lengvas bendravimas,puikus užduočių išpildymas ir realizavimas :) Ačiū už kokybiškai atliktą darbą :)'
    },    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_9298957/profilis.jpg',
      facebookProfile: true,
      name: 'Tomas Ogonauskas',
      date: '2022-01',
      text: 'Labai ačiū Viliui už kokybiškai atliktą darbą. Malonus bendradarbiavimas, viską aiškiai ir kantriai paaiškina, parodo, kaip atlikti funkcijas. Pateisino visus lūkeščius, didelė rekomendacija!'
    },    {
      avatar: 'https://paslaugos-img.dgn.lt/profile_4_9213847/profilis.jpg',
      facebookProfile: true,
      name: 'Justinas Kisunas',
      date: '2023-03',
      text: 'Labai džiaugiuosi partneryste. Darbai daromi opreatyviai, kokybiškai ir tai yra svarbiausia ko reikia iš šios srities specialistų.'
    },    {
      avatar: 'https://static.paslaugos.lt/static/img/avatar.svg',
      facebookProfile: false,
      name: 'UAB Lupus',
      date: '2023-01',
      text: 'Labai greitai, labai tiksliai, labai kruopščiai ir kantriai. Visada ryšy, tiek telefonu, tiek paštu. Kainos - "nesunkios". :) Ačiū, Viliau! Rekomenduojam kitiems, ir patys dar naudosimės :)'
    },
  ]

    const [fields, setFields] = useState({
      avatar: 'https://static.paslaugos.lt/static/img/avatar.svg',
      name: "",
      date: generateTodaysDate(),
      text: "",
    });

    const [allComments, setAllComments] = useState(comments);

  

  const scrollToStart = () => {
    document.getElementById('start').scrollIntoView();
  }

  // const scrollToServices = () => {
  //   document.getElementById('services').scrollIntoView();
  // }

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView();
  }

  const scrollToAboutUs = () => {
    document.getElementById('team').scrollIntoView();
  }

  const scrollToContacts = () => {
    document.getElementById('contacts').scrollIntoView();
  }

  // const scrollToReviews = () => {
  //   document.getElementById('reviews').scrollIntoView();
  // }

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }



  return (
    <div className="App">
      <div id="myNav" className="overlay">
        <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
        <div className="overlay-content">
          <a className="link" href="#start" onClick={closeNav}>Paslaugos</a>
          <a className="link" href="#projects" onClick={closeNav}>Projektai</a>
          <a className="link" href="#team" onClick={closeNav}>Komanda</a>
          <a className="link" href="#reviews" onClick={closeNav}>Atsiliepimai</a>
          <a className="link" href="#contacts" onClick={closeNav}>Kontaktai</a>
        </div>
      </div>
      <div className='mobile-header'>
        <div className='mobile-logo'>
          <img src={Logo} alt=""/>
        </div>
        <div className='mobile-menu-icon' onClick={openNav}>
          <img alt="" src={MobileMenuIcon} />
          <div>MENIU</div>
        </div>
      </div>
      {/* <div className='responsive-menu'>
          <div className='item' onClick={scrollToStart}>
            PASLAUGOS
          </div>
          <div className='item' onClick={scrollToProjects}>
            PROJEKTAI
          </div>
          <div className='item' onClick={scrollToAboutUs}>
            KOMANDA
          </div>
          <div className='item' onClick={scrollToContacts}>
            KONTAKTAI
          </div>
      </div> */}
      {/* <div className='responsive-header'>
        <div className='wrapper'>
          <img src={TeamCodeLogo} className='logo-img'/>
          <div className='mobile-menu'>
            <img src={MobileMenuIcon} />
          </div>
        </div>
      </div> */}
      <div className='header-wrapper'>
      <div className='header'>
        <div className='logo'>
          <img alt="" src={Logo} />
        </div>
        <div className='contacts'>
            <div className='row'>
              Tel.: +37063631839
            </div>
            <div className='row'>
              El. paštas: info@digitaledge.lt
            </div>
        </div>
        <div className='navigation'>
          <div className='item' onClick={scrollToStart}>
            PASLAUGOS
          </div>
          <div className='item' onClick={scrollToProjects}>
            PROJEKTAI
          </div>
          <div className='item' onClick={scrollToAboutUs}>
            APIE MUS
          </div>
          <div className='item' onClick={scrollToContacts}>
            KONTAKTAI
          </div>
        </div>
      </div>
      </div>
        <div id='start' class="hero margin-top-90" style={{ backgroundImage: `url(${Slideshow_one})` }}>
        <div className='hero-wrapper'>
          <div className='hero-column'>
            <h3>INTERNETINIŲ SVETAINIŲ KŪRIMAS <br/>NUO <span>100 EUR</span></h3>
            <div className='line'>
              <div className='square'></div>
              Lengvai valdoma turinio valdymo sistema
            </div>
            <div className='line'>
              <div className='square'></div>
              Svetainės pritaikymas mobiliesiems įrenginiams
            </div>
            <div className='line'>
              <div className='square'></div>
              Unikalūs ir profesionalūs dizainai
            </div>
            <div className='line'>
              <div className='square'></div>
              Optimizacija paieškos sistemoms Google ir pan.
            </div>
            <div className='line'>
              <div className='square'></div>
              Socialinių tinklų integracija, Google maps ir pan.
            </div>
            <div className='line'>
              <div className='square'></div>
              Nuotraukų galerijos, kontaktų formos, rezervacijų sistemos
            </div>
            <div className='line'>
              <div className='square'></div>
              Daugiakalbystė
            </div>
            <div className='line'>
              <div className='square'></div>
              Nuolatinė pagalba po atliktų darbų
            </div>
            <div className='line'>
              <div className='square'></div>
              Nestandartiniai sprendimai, papildomos funkcijos ir t.t.
            </div>
            <div className="buttons-row">
              <div className="button" onClick={scrollToContacts}>
                SUSISIEKTI
              </div>
              <div className="button second" onClick={scrollToProjects}>
                ATLIKTI DARBAI
              </div>
            </div>
          </div>
          <div className='images'>
            <img alt="" src={FeaturedOne} className="first"/>
            <img alt="" src={FeaturedTwo} className='second'/>
            <img alt="" src={FeaturedThree} className='third' />
          </div>
        </div>
      </div>
      {/* <div className="slideshow">
        <div className='slideshow-flex row-reverse margin-bottom-10-percent'>
            <div className='col'>
              <h2>ELEKTRONINIŲ PARDUOTUVIŲ KŪRIMAS <br />NUO <span>300 EUR</span></h2>
              <ul>
                <li><div className='square'></div>SEO optimizacija - iškelsime Jus “Google” paieškose</li>
                <li><div className='square'></div>Įvairūs atsiskaitymo būdai</li>
                <li><div className='square'></div>Įvairios pristatymo galimybės</li>
                <li><div className='square'></div>Patogi turinio valdymo sistema</li>
                <li><div className='square'></div>Pilnas apmokymas kaip administruoti el. parduotuvę</li>
                <li><div className='square'></div>Daugiakalbystė</li>
                <li><div className='square'></div>Sąskaitos faktūros</li>
                <li><div className='square'></div>Pilna pagalba ir konsultacijos po svetainės sukūrimo</li>
              </ul>
            </div>
            <div className='col col-featured'>
              <img src={Kidzone} className="first"/>
              <img src={Automore} className='second'/>
              <img src={Logobalt} className='third' />
            </div>
          </div>
        </div> */}
        <div class="hero">
        <div className='hero-wrapper reverse'>
          <div className='hero-column'>
            <h3>ELEKTRONINIŲ PARDUOTUVIŲ KŪRIMAS <br/>NUO <span>300 EUR</span></h3>
            <div className='line'>
              <div className='square'></div>
              Lengvai valdoma turinio valdymo sistema
            </div>
            <div className='line'>
              <div className='square'></div>
              Lietuviškų ir užsienio bankų mokėjimų integracijos
            </div>
            <div className='line'>
              <div className='square'></div>
              Kurjerių integracija
            </div>
            <div className='line'>
              <div className='square'></div>
              Pardavimų, vartotojų elgsenos statistika ir kt.
            </div>
            <div className='line'>
              <div className='square'></div>
              Unikalūs ir profesionalūs dizainai
            </div>
            <div className='line'>
              <div className='square'></div>
              Daugiakalbystė
            </div>
            <div className='line'>
              <div className='square'></div>
              Nuolatinė pagalba po atliktų darbų
            </div>
            <div className="buttons-row">
              <div className="button" onClick={scrollToContacts}>
                SUSISIEKTI
              </div>
              <div className="button second" onClick={scrollToProjects}>
                ATLIKTI DARBAI
              </div>
            </div>
          </div>
          <div className='images'>
            <img alt="" src={Kidzone} className="first"/>
            <img alt="" src={Automore} className='second'/>
            <img alt="" src={Logobalt} className='third' />
          </div>
        </div>
      </div>
        <div class="hero" style={{ backgroundImage: `url(${Graphics})` }}>
        <div className='hero-wrapper'>
          <div className='hero-column'>
            <h3>GRAFIKOS DARBAI</h3>
            <div className='line'>
              <div className='square'></div>
              Svetainių dizainai
            </div>
            <div className='line'>
              <div className='square'></div>
              Logotipai
            </div>
            <div className='line'>
              <div className='square'></div>
              Vizitinės kortelės
            </div>
            <div className='line'>
              <div className='square'></div>
              Plakatai
            </div>
            <h3 className='margin-top-50'>REKLAMA</h3>
            <div className='line'>
              <div className='square'></div>
              Google Adwords reklama
            </div>
            <div className='line'>
              <div className='square'></div>
              Facebook reklama
            </div>
            <div className='line'>
              <div className='square'></div>
              Instagram reklama
            </div>
          </div>
          <div className='images'>
            <img alt="" src={Poster1} className="first"/>
            <img alt="" src={Poster2} className='second'/>
            <img alt="" src={Poster3} className='third' />
          </div>
        </div>
      </div>
      <div className='projects' id='projects'>
        <h2>ATLIKTI PROJEKTAI</h2>
        <div className='flex-container'>
          <div className='projects-grid'>
            <a className='grid-item' href="https://belaiko.lt">
              <p>BELAIKO.LT</p>
              <img alt="" src={FeaturedOne} />
            </a>
            <a className='grid-item' href="https://apdailosformatas.lt">
              <p>APDAILOSFORMATAS.LT</p>
              <img alt="" src={FeaturedTwo} />
            </a>
            <a className='grid-item' href="https://autobanga.lt">
              <p>AUTOBANGA.LT</p>
              <img alt="" src={FeaturedThree} />
            </a>
            <a className='grid-item' href="https://dmlangai.lt">
              <p>DMLANGAI.LT</p>
              <img alt="" src={Dmlangai} />
            </a>
            <a className='grid-item' href="https://angeloakmuo.lt">
              <p>ANGELOAKMUO.LT</p>
              <img alt="" src={Angeloakmuo} />
            </a>
            <a className='grid-item' href="https://kidzone.lt">
              <p>KIDZONE.LT</p>
              <img alt="" src={Kidzone} />
            </a>
            <a className='grid-item' href="https://automore.lt">
              <p>AUTOMORE.LT</p>
              <img alt="" src={Automore} />
            </a>
            <a className='grid-item' href="https://logobalt.lt">
              <p>LOGOBALT.LT</p>
              <img alt="" src={Logobalt} />
            </a>
          </div>
          <div className='text'>Kalbame ne žodžiais, o darbais.</div>
        </div>
      </div>
      <h2>KOMANDA</h2>
      <div className='team' id="team">
        <div className='team-col'>
          <div className='card'>
            <img alt="" src={andrius} />
            <div className='name'>Andrius</div>
            <div className='duty'>Programuotojas</div>
          </div>
          <div className='card'>
            <img alt="" src={migle} />
            <div className='name'>Miglė</div>
            <div className='duty'>Dizainerė</div>
          </div>
          <div className='card'>
            <img alt="" src={vilius} />
            <div className='name'>Vilius</div>
            <div className='duty'>Programuotojas</div>
          </div>
        </div>
        <div className='team-col-text'>
          <div className='title'>
            Kuo mes geresni už kitus?
          </div>
          <div className='content'>
          Nuo didelių dizaino agentūrų skiriamės tuo, kad esame nedidelė komanda, kuriai nereikia išlaikyti didelio ofiso su daug darbuotojų, būtent dėl to mes galime pasiūlyti konkurencingas paslaugų kainas. Taip pat mes patariame atsižvelgdami į kiekvieną projektą, o būna išklausę klientą užvedame jį ant kelio - kartais nereikia geriausio pasaulio sprendimo. Jei tai nedidelio verslo pradžia – kartais galima sutaupyti naudojant šablonus.
          </div>
          <div className='stats-row'>
            <div className='stats-row-item'>
              <span>100 +</span><br />
              Sukurtų projektų
            </div>
            <div className='stats-row-item'>
              <span>10 +</span><br />
              Metų patirtis
            </div>
          </div>
        </div>
      </div>
      <h2 id="reviews">ATSILIEPIMAI</h2>
      <div className='reviews-wrapper'>
        <div className='reviews-container'>
        <div className='test'>
          <div className='reviews-flex' id="reviews-scrolltop">
            {
              allComments.map(comment => 
                <div className='review'>
                <div className='row'>
                  <div className='avatar'>
                    {
                      comment.facebookProfile && 
                      <img src={FbLogo} className="fb-logo" alt="" />
                    }
                    <img alt="" src={comment.avatar} />
                  </div>
                  <div className='fields'>
                    <div className='item'>
                      Vartotojas
                    </div>
                    <div className='item'>
                      Data
                    </div>
                  </div>
                  <div className='fields names'>
                    <div className='item'>
                    {comment.name}
                    </div>
                    <div className='item'>
                    {comment.date}
                    </div>
                  </div>
                </div>
                <div className='review-text'>{comment.text}</div>
                </div>
                )
            }
          {/* <div className='review'>
            <div className='row'>
              <div className='avatar'>
                <img src="https://unsplash.it/67/67" />
              </div>
              <div className='fields'>
                <div className='item'>
                  Vartotojas
                </div>
                <div className='item'>
                  Data
                </div>
              </div>
              <div className='fields names'>
                <div className='item'>
                  local foods
                </div>
                <div className='item'>
                  2023-07-17
                </div>
              </div>
            </div>
            <div className='review-text'>Kreipiausi dėl turimo puslapio patobulinimo ir klaidų ištaisymo. Patiko komunikacija – atsakymai ir pasiūlymai buvo greiti ir konkretūs. Suderintus darbus atliko greičiau žadėto termino. Džiaugiuosi pasirinkęs būtent šią įmonę tarp tūkstančių kitų. Tikrai rekomenduoju!</div>
            </div>
            <div className='review'>
            <div className='row'>
              <div className='avatar'>
                <img src="https://unsplash.it/67/67" />
              </div>
              <div className='fields'>
                <div className='item'>
                  Vartotojas
                </div>
                <div className='item'>
                  Data
                </div>
              </div>
              <div className='fields names'>
                <div className='item'>
                  Gediminas
                </div>
                <div className='item'>
                  2022-01-17
                </div>
              </div>
            </div>
            <div className='review-text'>Puikiai atliktas darbas, įsiklausyta į mano pageidavimus. Rekomenduoju patikėti savo svetainės arba el. parduotuvės kūrimą Artix.lt!</div>
          </div> */}
          </div>
          <h3 style={{ textAlign: 'left', backgroundColor: '#007F9B', color: 'white', padding: '5px'}}>{submitMessage}</h3>
          <div className='write-comment'>Vartotojo vardas</div>
          <input type="text" className='input-text' onChange={(e) => setFields({...fields, name: e.target.value})} value={fields.name}/><br />
          <div className='write-comment'>Komentaras</div>
          <input type="text" className='input-text' onChange={(e) => setFields({...fields, text: e.target.value})} value={fields.text}/><br />
          <input type="button" value="Skelbti" onClick={onSubmit}/>
          </div>
          <h3>Ką apie mus kalba?</h3>
        </div>
      </div>
      <div className='contact-form' id='contacts'>
        <h2>KONTAKTAI</h2>
        <div className='form-wrapper'>
          <h3>Jei turite klausimų - parašykite mums žinutę ir mes mielai pakonsultuosime!</h3>
        {/* <form>
          <div className='contacts-info'>
            <img src={phoneIcon} /> Tel. Nr.: +37063631839
          </div>
          <div className='contacts-info margin-bottom'>
            <img src={mailIcon} /> El. paštas: info@nordnet.lt
          </div>
          <label>Vardas</label><br />
          <input type="text">

          </input><br />
          <label>El. pašto adresas</label><br />
          <input type="text">

          </input><br />
          <label>Žinutė</label><br />
          <textarea>
          </textarea>
          <input type='button' value="Siųsti"/>
        </form> */}
        {ContactUs()}
        </div>
      </div>
      <div className='contacts-wrapper'>
        <div className='flex-container'>
          <div className='logo'>
            <img alt="" src={Logo} />
          </div>
          <div className='col'>
            <h3>KONTAKTAI</h3>
            <p>El. paštas: info@digitaledge.lt</p>
            <p>Tel. Nr. +37063631839</p>
          </div>
          <div className='col'>
            <h3>DIGITALEDGE.LT</h3>
            <p>Verslo liudijimo Nr. 1077274</p>
            <p>Atsiskaitomoji sąskaita: LT1234567891011121314</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
