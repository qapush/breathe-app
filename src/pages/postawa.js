import Page from "../components/Page/Page";

import React from "react";

export default function Postawa({prev, next}) {
  return (
    <Page prev={prev} next={next}>
      <h1>Postawa</h1>
      <p>
      Większość ćwiczeń oddechowych można wykonywać równie efektywnie na leżąco, siedząc na krześle z podparciem czy całkiem płasko na podłodze. Pozycję należy dopasować do swojego poziomu zaawansowania. Najważniejsze aby to w jaki sposób siedzisz, czy leżysz nie utrudniało wykonywania ćwiczeń - nie napinało nadmiernie mięśni, nie odciągało myśli od oddechu. 
      </p>
      <h2>
      Niezależnie od tego jaką pozycję przyjmujesz zwróć uwagę:
      </h2>
      <ul>
        <li>
          <p>
          czy nie napinasz barków i szyi. Czy barki nie unoszą się do góry z wdechem.
          </p>
        </li>
        <li>
          <p>
          czy Twój kręgosłup jest prosty, nie zaokrąglasz górnych pleców i nie chowasz klatki piersiowej. 
          </p>
        </li>
        <li>
          <p>
          czy nie obciążasz odcinka lędźwiowego, puszczając całkiem luźno mięśnie brzucha.
          </p>
        </li>
        <li>
          <p>
          czy rozszerzasz obojczyki (otwierasz klatkę piersiową, a tym samym robisz miejsce na płynny oddech)
          </p>
        </li>
      </ul>
      <h2>Wskazówki:</h2>
      <ul>
        <li>
          <p>
          kiedy siedzisz wyobraź sobie, że z czubka Twojej głowy wychodzi sznureczek, na który nawleczony jest cały Twój kręgosłup. 
          </p>
        </li>
        <li>
          <p>
          Wyobrażaj sobie, że cały czas niewidzialna ręka utrzymuje Twoje ciało wyprostowane, właśnie przy pomocy tego sznurka. 
          </p>
        </li>
        <li>
          <p>
          Niech pozycja kosztuje Cię jak najmniej wysiłku i nie powoduje nadmiernego napięcia mięśni - staraj się by była lekka, ale stabilna, nie ściśnięta. 
          </p>
        </li>
      </ul>
      <h2>
        Tor oddechowy
      </h2>
      <p>
      Połóż jedną rękę na klatce piersiowej, drugą na brzuchu i zaobserwuj która część Twojego ciała unosi się w trakcie wdechu. Staraj się kierować oddech w okolice dolnych żeber, dzięki czemu aktywniej zapracujesz przeponą - głównym mięśniem oddechowym. Chcesz aby lekko unosił się brzuch, żebra rozszerzały się na boki, a szczyt klatki piersiowej i obojczyki pozostały nieruchome. 

      </p>
    </Page>
  );
}
