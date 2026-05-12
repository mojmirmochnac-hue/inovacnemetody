type Method = {
  id: string;
  title: string;
  category: string;
  summary: string;
  when: string;
  principles: string[];
  tools: string[];
};

type Guide = {
  question: string;
  context: string;
  methods: string[];
};

const methods: Method[] = [
  {
    id: 'jtbd',
    title: 'Jobs to be Done (JTBD)',
    category: 'Zákazník a hodnota',
    summary: 'Rámec na pochopenie toho, akú prácu si zákazník produktom naozaj rieši. Nezačína demografiou, ale situáciou, motiváciou a pokrokom, ktorý chce človek dosiahnuť.',
    when: 'Keď potrebujete pochopiť skutočnú hodnotu pre zákazníka, nájsť biely priestor na trhu alebo preformulovať produkt okolo potrieb, nie okolo funkcií.',
    principles: ['zákazník si produkt najíma na prácu', 'funkčné, emočné a sociálne dimenzie potreby', 'oddelenie problému od riešenia', 'kontext rozhodnutia je dôležitejší než priemerný segment'],
    tools: ['Job Map', 'Job Story', 'interview o poslednom rozhodnutí', 'Forces of Progress'],
  },
  {
    id: 'odi',
    title: 'Outcome-Driven Innovation (ODI)',
    category: 'Zákazník a hodnota',
    summary: 'Praktická a merateľná verzia JTBD. Prekladá potreby zákazníka do želaných výsledkov a porovnáva ich dôležitosť so spokojnosťou.',
    when: 'Keď chcete rozhodovať podľa dát, prioritizovať príležitosti a investovať do potrieb s najväčším neuspokojeným potenciálom.',
    principles: ['trh je definovaný okolo práce', 'Job Map rozkladá prácu na kroky', 'želané výsledky majú merateľnú formuláciu', 'Opportunity Score ukazuje priority'],
    tools: ['Outcome Statement', 'Opportunity Landscape', 'Importance vs. Satisfaction', 'Market Segmentation Grid'],
  },
  {
    id: 'design-thinking',
    title: 'Design Thinking',
    category: 'Zákazník a hodnota',
    summary: 'Iteratívny prístup orientovaný na človeka. Spája empatiu, definovanie problému, tvorbu nápadov, prototypovanie a testovanie.',
    when: 'Keď problém nie je jasne definovaný, zákazník nevie presne povedať čo chce alebo potrebujete odhaliť potreby priamo v kontexte používania.',
    principles: ['empatia pred riešením', 'divergentné a konvergentné myslenie', 'rýchly prototyp namiesto dlhej diskusie', 'testovanie s reálnymi ľuďmi'],
    tools: ['Empathy Map', 'Customer Journey Map', 'Persona', 'How Might We', 'prototypovanie'],
  },
  {
    id: 'lean-startup',
    title: 'Lean Startup',
    category: 'Validácia',
    summary: 'Metodika na znižovanie rizika v neistote cez cyklus Build - Measure - Learn. Namiesto veľkého plánu stavia malé experimenty.',
    when: 'Keď máte nápad, ale neviete, či ho trh chce. Hodí sa pre startupy, nové produkty, nové segmenty aj interné inovačné tímy.',
    principles: ['MVP ako nástroj učenia', 'validované učenie', 'pivot alebo pokračovanie', 'metriky namiesto dojmov'],
    tools: ['MVP', 'A/B test', 'funnel analysis', 'cohort analysis', 'smoke test'],
  },
  {
    id: 'design-sprint',
    title: 'Design Sprint',
    category: 'Validácia',
    summary: 'Časovo ohraničený proces, ktorý za pár dní prevedie tím od problému cez rozhodnutie a prototyp až po test s používateľmi.',
    when: 'Keď je projekt zaseknutý, rozhodnutie drahé alebo potrebujete rýchlo overiť strategický smer pred vývojom.',
    principles: ['mapovanie problému', 'samostatné skicovanie riešení', 'jasný rozhodovateľ', 'realistický prototyp', 'test s približne piatimi používateľmi'],
    tools: ['Lightning Demos', 'Crazy 8s', 'Storyboard', 'User Testing Script'],
  },
  {
    id: 'sit',
    title: 'Systematic Inventive Thinking (SIT)',
    category: 'Produkt a nápady',
    summary: 'Metóda tvorby nápadov vo vnútri existujúceho systému. Využíva prvky, ktoré už produkt alebo proces má, a mení ich vzťahy.',
    when: 'Keď potrebujete inovovať existujúci produkt s obmedzenými zdrojmi alebo prekonať zvyknuté myslenie tímu.',
    principles: ['uzavretý svet', 'odčítanie', 'násobenie', 'rozdelenie', 'zjednotenie úloh', 'závislosť atribútov'],
    tools: ['Function Follows Form', 'Virtual Product', 'Path of Most Resistance'],
  },
  {
    id: 'triz',
    title: 'TRIZ',
    category: 'Produkt a nápady',
    summary: 'Systematická metóda riešenia technických protirečení. Hľadá vzory inovácií naprieč odvetviami a používa ich na nové riešenia.',
    when: 'Keď narazíte na technický konflikt typu pevnosť verzus hmotnosť, výkon verzus spotreba alebo kvalita verzus cena.',
    principles: ['technické protirečenie', 'ideálny konečný výsledok', '40 invenčných princípov', 'prenášanie riešení medzi doménami'],
    tools: ['Contradiction Matrix', '40 Inventive Principles', 'IFR', 'Substance-Field Analysis'],
  },
  {
    id: 'scamper',
    title: 'SCAMPER',
    category: 'Produkt a nápady',
    summary: 'Jednoduchá sada otázok na systematické vylepšenie existujúceho produktu: nahradiť, kombinovať, prispôsobiť, upraviť, použiť inak, odstrániť, obrátiť.',
    when: 'Pri brainstormingu, rýchlom hľadaní variantov a zlepšovaní existujúcej ponuky.',
    principles: ['Substitute', 'Combine', 'Adapt', 'Modify', 'Put to other use', 'Eliminate', 'Reverse'],
    tools: ['SCAMPER checklist', 'varianty funkcií', 'rýchle hodnotenie dopadu'],
  },
  {
    id: 'toc',
    title: 'Teória obmedzení (TOC)',
    category: 'Procesy',
    summary: 'Metóda zlepšovania systému cez identifikáciu a riadenie úzkeho hrdla. Zlepšenie mimo obmedzenia často nezlepší celý systém.',
    when: 'Pri meškaní, hromadení práce, zásobách, čakacích dobách alebo keď lokálne optimalizácie neprinášajú výsledok.',
    principles: ['identifikuj obmedzenie', 'vyťaž obmedzenie', 'podriaď systém obmedzeniu', 'zvýš kapacitu obmedzenia', 'opakuj'],
    tools: ['Drum-Buffer-Rope', 'Current Reality Tree', 'Evaporating Cloud', 'Future Reality Tree'],
  },
  {
    id: 'six-sigma',
    title: 'Six Sigma',
    category: 'Procesy',
    summary: 'Dátovo orientovaný prístup na znižovanie chybovosti a variability procesov. Typicky pracuje cez cyklus DMAIC.',
    when: 'Keď je cieľom stabilizovať proces, znížiť reklamácie, chyby, odchýlky alebo náklady na nekvalitu.',
    principles: ['Define', 'Measure', 'Analyze', 'Improve', 'Control'],
    tools: ['DMAIC', 'Pareto', 'control chart', 'root cause analysis'],
  },
  {
    id: 'fmea',
    title: 'FMEA',
    category: 'Procesy',
    summary: 'Analýza možných spôsobov zlyhania a ich dôsledkov. Pomáha predchádzať chybám ešte pred spustením produktu alebo procesu.',
    when: 'V návrhu produktu, výrobe, procesoch a všade tam, kde je cena chyby vysoká.',
    principles: ['identifikuj možné zlyhania', 'ohodnoť závažnosť', 'ohodnoť výskyt', 'ohodnoť odhaliteľnosť', 'prioritizuj riziko'],
    tools: ['DFMEA', 'PFMEA', 'RPN', 'preventívne opatrenia'],
  },
  {
    id: 'open-innovation',
    title: 'Open Innovation',
    category: 'Stratégia',
    summary: 'Využívanie externých aj interných tokov znalostí. Firma inovuje s partnermi, startupmi, univerzitami, dodávateľmi a zákazníkmi.',
    when: 'Keď interné R&D nestačí, potrebujete nové trhy, nové technológie alebo širší ekosystém spolupráce.',
    principles: ['inbound inovácie', 'outbound inovácie', 'spoločné IP', 'partnerstvá', 'komunity a výzvy'],
    tools: ['hackathon', 'startup scouting', 'univerzitné partnerstvá', 'innovation challenge'],
  },
  {
    id: 'scenario-planning',
    title: 'Scenárové plánovanie',
    category: 'Stratégia',
    summary: 'Tvorba viacerých možných budúcností a testovanie stratégie proti neistotám. Nejde o predpoveď, ale o robustnosť rozhodnutia.',
    when: 'Pri dlhodobom plánovaní, reguláciách, technologických zmenách alebo neistom trhu.',
    principles: ['kľúčové neistoty', 'scenáre budúcnosti', 'signály zmeny', 'robustné stratégie'],
    tools: ['2x2 scenario matrix', 'weak signals', 'backcasting', 'strategické implikácie'],
  },
  {
    id: 'delphi',
    title: 'Delphi metóda',
    category: 'Stratégia',
    summary: 'Anonymný viac-kolový zber expertných názorov. Pomáha dosiahnuť kvalifikovaný konsenzus tam, kde chýbajú tvrdé dáta.',
    when: 'Pri technologickom forecastingu, odhadoch trendov a rozhodovaní s vysokou neistotou.',
    principles: ['anonymita expertov', 'viac kôl', 'spätná väzba medzi kolami', 'hľadanie konsenzu'],
    tools: ['expert panel', 'dotazník', 'medián a rozptyl odpovedí', 'konsenzuálne vyhodnotenie'],
  },
  {
    id: 'bmc-vpc',
    title: 'Business Model & Value Proposition Canvas',
    category: 'Zákazník a hodnota',
    summary: 'Mapuje zákaznícke úlohy, bolesti a prínosy spolu s ponukou hodnoty a biznis modelom.',
    when: 'Pri tvorbe nového biznisu, pivotovaní, hľadaní product-market fitu alebo vysvetlení stratégie tímu.',
    principles: ['Customer Jobs', 'Pains', 'Gains', 'Pain Relievers', 'Gain Creators', '9 blokov biznis modelu'],
    tools: ['Value Proposition Canvas', 'Business Model Canvas', 'testovanie rizikových predpokladov'],
  },
  {
    id: 'circular-design',
    title: 'Cirkulárny dizajn',
    category: 'Udržateľnosť',
    summary: 'Navrhovanie produktov a služieb tak, aby minimalizovali odpad, predlžovali životnosť a umožňovali opätovné použitie materiálov.',
    when: 'Pri znižovaní environmentálnej stopy, nových reguláciách, materiálových nákladoch alebo hľadaní udržateľnej diferenciácie.',
    principles: ['životný cyklus', 'oprava a znovupoužitie', 'recyklácia', 'modularita', 'servitizácia'],
    tools: ['Life Cycle Thinking', 'material flow', 'repairability checklist', 'circular business model'],
  },
  {
    id: 'ai-innovation',
    title: 'AI-Powered Innovation',
    category: 'AI',
    summary: 'Využitie umelej inteligencie na rýchlejšie generovanie možností, analýzu dát, personalizáciu a experimentovanie.',
    when: 'Keď chcete zrýchliť vývoj, analyzovať veľké množstvo signálov, navrhovať varianty riešení alebo personalizovať službu.',
    principles: ['AI ako kopilot tímu', 'syntéza poznatkov', 'generovanie variantov', 'rýchle experimenty', 'ľudská kontrola rozhodnutí'],
    tools: ['prompting', 'syntetické prototypy', 'analýza spätnej väzby', 'AI-assisted research'],
  },
];

const guides: Guide[] = [
  {
    question: 'Kto je náš zákazník a aký problém nám v skutočnosti platí riešiť?',
    context: 'Máme produkt alebo službu, ale trh nereaguje tak, ako čakáme. Potrebujeme pochopiť skutočnú hodnotu a situáciu zákazníka.',
    methods: ['Jobs to be Done (JTBD)', 'Outcome-Driven Innovation', 'Design Thinking', 'Kano model', 'Value Proposition Canvas'],
  },
  {
    question: 'Ako bezpečne validovať nápad v neistote?',
    context: 'Máme nápad, ale nevieme, či ho trh chce. Cieľom je lacno a rýchlo získať dôkaz pred veľkou investíciou.',
    methods: ['Lean Startup', 'Design Sprint', 'Innovation Accounting', 'Business Model Canvas'],
  },
  {
    question: 'Ako generovať prelomové myšlienky, keď tím uviazol?',
    context: 'Tím opakuje rovnaké riešenia. Potrebujeme rozšíriť možnosti, ale stále mať systém na výber použiteľných konceptov.',
    methods: ['SCAMPER', 'SIT', 'TRIZ', 'Brainwriting', 'Morfologická analýza'],
  },
  {
    question: 'Ako prekonať technologické limity?',
    context: 'Riešenie naráža na technický konflikt alebo parametre, ktoré sa navzájom zhoršujú.',
    methods: ['TRIZ', 'SIT', 'Bionika', 'WOIS'],
  },
  {
    question: 'Ako reštrukturalizovať procesy a eliminovať plytvanie?',
    context: 'Proces mešká, hromadí sa práca, vznikajú chyby alebo sa zlepšenia strácajú v lokálnych optimalizáciách.',
    methods: ['Teória obmedzení', 'Six Sigma', 'FMEA', 'Hodnotová analýza', 'PDCA'],
  },
  {
    question: 'Ako strategicky navigovať v neistote?',
    context: 'Budúcnosť trhu, technológií alebo regulácie nie je jasná. Potrebujeme stratégiu, ktorá vydrží viac scenárov.',
    methods: ['Scenárové plánovanie', 'Delphi metóda', 'Open Innovation', 'Effectuation', 'Speculative Design'],
  },
  {
    question: 'Ako zakomponovať AI a udržateľnosť?',
    context: 'Chceme modernizovať inovácie a zároveň myslieť na dopady, efektivitu a nové obchodné modely.',
    methods: ['AI-Powered Innovation', 'Cirkulárny dizajn', 'Open Innovation', 'Lean Startup'],
  },
];

const process = [
  ['1', 'Pochop situáciu', 'Začni pozorovaním, rozhovormi a mapovaním zákazníckej práce.'],
  ['2', 'Pomenuj problém', 'Prelož zistenia do jasnej otázky typu Ako by sme mohli.'],
  ['3', 'Vyber metódu', 'Zvoľ postup podľa rizika: zákazník, nápad, validácia, proces alebo stratégia.'],
  ['4', 'Postav dôkaz', 'Vytvor prototyp, MVP alebo malý experiment s merateľným výsledkom.'],
  ['5', 'Rozhodni a iteruj', 'Podľa dôkazov pokračuj, zmeň smer alebo zavri slepú vetvu.'],
];

const categories = Array.from(new Set(methods.map((method) => method.category)));

export default function App() {
  return (
    <main>
      <section className="hero-band">
        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Sprievodca z priloženého projektu</p>
            <h1>Inovačné metódy pre produkt, proces aj stratégiu</h1>
            <p className="lead">
              Prehľad praktických postupov z pôvodného kódu: kedy ich použiť, na čo slúžia a ktoré nástroje patria k jednotlivým metódam.
            </p>
            <div className="hero-stats">
              <span><strong>{methods.length}</strong> metód</span>
              <span><strong>{categories.length}</strong> oblastí</span>
              <span><strong>{guides.length}</strong> rozhodovacích otázok</span>
            </div>
          </div>
          <div className="decision-panel">
            <p className="panel-title">Rýchla navigácia</p>
            {process.map(([number, title, text]) => (
              <div className="process-step" key={number}>
                <span>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-block">
        <div className="section-head">
          <p className="eyebrow">Ako vybrať metódu</p>
          <h2>Začni otázkou, ktorú rieši tím</h2>
        </div>
        <div className="guide-grid">
          {guides.map((guide) => (
            <article className="guide-card" key={guide.question}>
              <h3>{guide.question}</h3>
              <p>{guide.context}</p>
              <div className="tag-list">
                {guide.methods.map((method) => <span key={method}>{method}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="catalog-band">
        <div className="shell section-block">
          <div className="section-head wide">
            <p className="eyebrow">Katalóg metód</p>
            <h2>Metódy rozdelené podľa účelu</h2>
            <p>
              Obsah vychádza z dátových súborov pôvodnej aplikácie: methods.ts, guide.ts a rozšírených popisov metód. Firebase prihlasovanie a AI Studio časti som vynechal, aby web bežal stabilne ako verejná Netlify stránka.
            </p>
          </div>
          <div className="category-strip">
            {categories.map((category) => <span key={category}>{category}</span>)}
          </div>
          <div className="method-grid">
            {methods.map((method) => (
              <article className="method-card" key={method.id}>
                <p className="category">{method.category}</p>
                <h3>{method.title}</h3>
                <p className="summary">{method.summary}</p>
                <div className="when-box">
                  <strong>Kedy použiť</strong>
                  <span>{method.when}</span>
                </div>
                <div className="mini-columns">
                  <div>
                    <strong>Princípy</strong>
                    <ul>
                      {method.principles.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <strong>Nástroje</strong>
                    <ul>
                      {method.tools.map((tool) => <li key={tool}>{tool}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
