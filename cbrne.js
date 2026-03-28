const cbrneData = [
    // --- CHEMICAL (C) ---
    {
        id: "nh3",
        kategorie: "C - Chemické",
        nazev: "Amoniak (Čpavek)",
        identifikace: "NH3 / UN 1005",
        piktogramy: ["compressed_gas.jpg", "corrosive.jpg", "toxic.jpg"],
        nebezpeci: "Silně dráždivý plyn, lehčí než vzduch. Poleptání sliznic, očí a dýchacích cest.",
        oopp: "Ochranný oblek, maska s filtrem typu K (zelený), při vysoké koncentraci IDP.",
        kontakt: "Slzení, křečovitý kašel, edém hrtanu, poleptání vlhké kůže.",
        lecba: "Odsun, kyslík, výplachy očí (borová voda/voda), monitoring plicního edému.",
        cave: "Drží se u stropu! Riziko výbuchu v uzavřeném prostoru při vysoké koncentraci."
    },
    {
        id: "cl2",
        kategorie: "C - Chemické",
        nazev: "Chlór",
        identifikace: "Cl2 / UN 1017",
        piktogramy: ["compressed_gas.jpg", "oxidizing.jpg", "toxic.jpg", "corrosive.jpg"],
        nebezpeci: "Žlutozelený plyn, těžší než vzduch. Prudce dusivý a korozivní.",
        oopp: "Protiplynový oděv (OPCH), IDP, filtr typu B (šedý).",
        kontakt: "Pálení očí, dušnost, pocit dušení, fialové zbarvení kůže (cyanóza).",
        lecba: "Absolutní klid (prevence edému plic!), kyslík, inhalace kortikoidů.",
        cave: "Klesá do údolí a sklepů! Neklid pacienta zhoršuje prognózu (spotřeba O2)."
    },
    {
        id: "hcn",
        kategorie: "C - Chemické",
        nazev: "Kyanovodík",
        identifikace: "HCN / UN 1051",
        piktogramy: ["flame.jpg", "toxic.jpg", "environmental.jpg"],
        nebezpeci: "Blokáda buněčného dýchání. Extrémně rychlý účinek (sekundy/minuty).",
        oopp: "Maximální ochrana, IDP, filtr typu B (šedý).",
        kontakt: "Zápach po hořkých mandlích, hyperventilace, pak křeče a bezvědomí.",
        lecba: "Antidota (4-DMAP, Hydroxocobalamin - Cyanokit), 100% kyslík.",
        cave: "Pozor na sekundární kontaminaci při dýchání z úst do úst!"
    },
    {
        id: "sarin",
        kategorie: "C - Chemické",
        nazev: "Sarin (GB)",
        identifikace: "Nervově paralytická látka",
        piktogramy: ["toxic.jpg"],
        nebezpeci: "Inhibice acetylcholinesterázy. Smrtelný v extrémně malých dávkách.",
        oopp: "Hermetický oblek (OPCH-05), IDP.",
        kontakt: "Mióza (špendlíkové zornice), slinění, dušnost, svalové záškuby, křeče.",
        lecba: "Atropin (opakovaně do suchosti sliznic), Obidoxim (Toxogonin).",
        cave: "Mióza je klíčový diagnostický znak!"
    },
    {
        id: "h2so4",
        kategorie: "C - Chemické",
        nazev: "Kyselina sírová",
        identifikace: "H2SO4 / UN 1830",
        piktogramy: ["corrosive.jpg"],
        nebezpeci: "Silná žíravina, dehydratuje tkáně (zuhelnatění). Reaguje s vodou.",
        oopp: "Kyselinovzdorný oblek, obličejový štít, rukavice.",
        kontakt: "Těžké poleptání, hluboké nekrózy, u očí riziko oslepnutí.",
        lecba: "Masivní oplach proudem vody (dlouhodobě), sterilní krytí.",
        cave: "Při polití velkého rozsahu hrozí šok a sepse."
    },

    // --- BIOLOGICAL (B) ---
    {
        id: "antrax",
        kategorie: "B - Biologické",
        nazev: "Antrax (Sněť slezinná)",
        identifikace: "Bacillus anthracis",
        piktogramy: ["biohazard.jpg"],
        nebezpeci: "Vysoce odolné spory. Plicní forma má téměř 100% úmrtnost bez léčby.",
        oopp: "Filtrační přetlakový oblek, maska FFP3.",
        kontakt: "Černý příškvark na kůži, horečka, u plicní formy náhlý kolaps.",
        lecba: "Antibiotika (Ciprofloxacin), symptomatická léčba.",
        cave: "Spory jsou nezničitelné běžnou dezinfekcí!"
    },
    {
        id: "ebola",
        kategorie: "B - Biologické",
        nazev: "Ebola (Virová hemoragická horečka)",
        identifikace: "Ebolavirus",
        piktogramy: ["biohazard.jpg"],
        nebezpeci: "Vysoká infekčnost krví a sekrety. Multiorgánové selhání.",
        oopp: "Celotělová bariérová ochrana (Tyvek), dvojité rukavice.",
        kontakt: "Vysoká horečka, bolesti svalů, následně vnitřní a vnější krvácení.",
        lecba: "Pouze symptomatická (rehydratace), experimentální antivirotika.",
        cave: "Infekční je i tělo zemřelého!"
    },
    {
        id: "variola",
        kategorie: "B - Biologické",
        nazev: "Pravé neštovice",
        identifikace: "Variola virus",
        piktogramy: ["biohazard.jpg"],
        nebezpeci: "Extrémně nakažlivé kapénkami. Celosvětově vymýcené (riziko zneužití).",
        oopp: "Maximální biologická ochrana, očkování (pokud existuje).",
        kontakt: "Horečka, typický hnisavý výsev po celém těle (ve stejné fázi).",
        lecba: "Symptomatická, izolace.",
        cave: "Vysoký potenciál pro bioterorismus."
    },
    {
        id: "botulotoxin",
        kategorie: "B - Biologické",
        nazev: "Botulismus",
        identifikace: "Clostridium botulinum (Toxin)",
        piktogramy: ["toxic.jpg"],
        nebezpeci: "Nejsilnější známý jed. Blokuje nervosvalový přenos.",
        oopp: "Standardní ochrana, pozor na aerosol.",
        kontakt: "Dvojité vidění, pokles víček, poruchy polykání, obrna dýchání.",
        lecba: "Antitoxin, umělá plicní ventilace (UPV).",
        cave: "Pacient je plně při vědomí, ale nemůže se hýbat!"
    },
    {
        id: "tularémie",
        kategorie: "B - Biologické",
        nazev: "Tularémie (Zaječí nemoc)",
        identifikace: "Francisella tularensis",
        piktogramy: ["biohazard.jpg"],
        nebezpeci: "Velmi nízká infekční dávka (stačí 10 bakterií). Přenos klíšťaty i aerosolem.",
        oopp: "FFP3 respirátor, rukavice.",
        kontakt: "Zvětšené uzliny, horečka, vřed v místě vstupu.",
        lecba: "Antibiotika (Streptomycin, Gentamicin).",
        cave: "Může být zneužito jako biologický aerosol."
    },

    // --- RADIOLOGICAL (R) ---
    {
        id: "cs137",
        kategorie: "R - Radiologické",
        nazev: "Cesium-137",
        identifikace: "Radioizotop (Gama/Beta zářič)",
        piktogramy: ["radioactive.jpg"],
        nebezpeci: "Ionizující záření. Nebezpečí ozáření i vnitřní kontaminace.",
        oopp: "Odstup, dozimetrie, ochrana dýchacích cest.",
        kontakt: "Nevolnost, zvracení, při kontaktu s kůží radiační popáleniny.",
        lecba: "Dekontaminace, Berlinská modř (vnitřně).",
        cave: "Poločas rozpadu 30 let. Dlouhodobé zamoření."
    },
    {
        id: "i131",
        kategorie: "R - Radiologické",
        nazev: "Jód-131",
        identifikace: "Radioaktivní jód",
        piktogramy: ["radioactive.jpg"],
        nebezpeci: "Hromadí se ve štítné žláze. Riziko po haváriích reaktorů.",
        oopp: "Dozimetrie, respirátor.",
        kontakt: "Zvýšené riziko rakoviny štítné žlázy po čase.",
        lecba: "Jodová profylaxe (KI tablety) – musí se podat VČAS.",
        cave: "KI tablety nechrání před jinými izotopy, pouze před Jodem!"
    },
    {
        id: "am241",
        kategorie: "R - Radiologické",
        nazev: "Americium-241",
        identifikace: "Alfa zářič (z detektorů kouře)",
        piktogramy: ["radioactive.jpg"],
        nebezpeci: "Nebezpečné hlavně při vdechnutí prachu (vnitřní alfa zářič).",
        oopp: "Ochrana dýchacích cest (FFP3) je kritická.",
        kontakt: "Dlouhodobé poškození kostí a jater.",
        lecba: "Chelatační terapie (DTPA).",
        cave: "Alfa záření papír nezastaví, ale kůže ano. Riziko je VNITŘNÍ."
    },
    {
        id: "co60",
        kategorie: "R - Radiologické",
        nazev: "Kobalt-60",
        identifikace: "Silný Gama zářič",
        piktogramy: ["radioactive.jpg"],
        nebezpeci: "Průmyslové zářiče. Vysoké dávky ozáření za krátkou dobu.",
        oopp: "Maximální odstup a stínění (olovo/beton).",
        kontakt: "Akutní nemoc z ozáření, destrukce kostní dřeně.",
        lecba: "Podpora krvetvorby, symptomatická léčba.",
        cave: "Při nálezu opuštěného zářiče se k němu nepřibližovat!"
    },
    {
        id: "rn222",
        kategorie: "R - Radiologické",
        nazev: "Radon",
        identifikace: "Radioaktivní plyn",
        piktogramy: ["radioactive.jpg"],
        nebezpeci: "Plyn z podloží. V uzavřených prostorách způsobuje rakovinu plic.",
        oopp: "Větrání, respirátor v prašném prostředí.",
        kontakt: "Chronické poškození plicní tkáně.",
        lecba: "Prevence, sanace objektů.",
        cave: "Neviditelný, bez zápachu. Nutné měření přístroji."
    }
];