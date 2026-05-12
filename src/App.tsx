const methods = [
  {
    name: 'Design Thinking',
    stage: 'Objavovanie potrieb',
    text: 'Pomaha porozumiet ludom, rychlo tvorit napady a testovat riesenia este pred velkou investiciou.',
  },
  {
    name: 'Lean Startup',
    stage: 'Overovanie napadu',
    text: 'Premiena hypotezy na male experimenty: zostav, zmeraj, nauc sa a uprav smer.',
  },
  {
    name: 'Jobs To Be Done',
    stage: 'Pochopenie zakaznika',
    text: 'Skuma, aku ulohu si zakaznik potrebuje splnit a preco si najima konkretne riesenie.',
  },
  {
    name: 'Open Innovation',
    stage: 'Spolupraca',
    text: 'Zapaja partnerov, komunitu, univerzity alebo zakaznikov do hladania a zlepsovania rieseni.',
  },
  {
    name: 'Design Sprint',
    stage: 'Rychly prototyp',
    text: 'Strukturovany tyzdenny proces na vyber smeru, prototypovanie a test s pouzivatelmi.',
  },
  {
    name: 'Systematic Inventive Thinking',
    stage: 'Tvorba rieseni',
    text: 'Vytvara nove napady systematickou upravou existujuceho produktu, procesu alebo sluzby.',
  },
];

const steps = ['Zmapuj problem', 'Vyber metodu', 'Navrhni experiment', 'Otestuj s ludmi', 'Zaved zlepsenie'];

export default function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Prakticky sprievodca</p>
          <h1>Inovacne metody pre rychlejsie rozhodovanie</h1>
          <p className="lead">
            Prehlad metod, ktore pomahaju vybrat spravny postup pri navrhu produktu, sluzby alebo zlepseni procesu.
          </p>
        </div>
        <div className="hero-panel" aria-label="Proces inovacie">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section-heading">
        <p className="eyebrow">Katalog metod</p>
        <h2>Vyber podla fazy, v ktorej sa nachadzas</h2>
      </section>

      <section className="method-grid">
        {methods.map((method) => (
          <article className="method-card" key={method.name}>
            <p>{method.stage}</p>
            <h3>{method.name}</h3>
            <span>{method.text}</span>
          </article>
        ))}
      </section>
    </main>
  );
}
