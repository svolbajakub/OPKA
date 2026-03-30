const cbrneData = [
    // --- CHEMICAL (C) ---
    {
        id: "nh3",
        kategorie: "C - Chemické",
        nazev: "Amoniak (Čpavek)",
        identifikace: "NH3 / UN 1005",
        piktogramy: ["compressed_gas.jpg", "corrosive.jpg", "toxic.jpg"],
        vlastnosti: "Silně dráždivý plyn, lehčí než vzduch. Poleptání sliznic, očí a dýchacích cest.",
        oopp: "Ochranný oblek, maska s filtrem typu K (zelený), při vysoké koncentraci IDP.",
        klinika: "Slzení, křečovitý kašel, edém hrtanu, poleptání vlhké kůže.",
        lecba: "Odsun, kyslík, výplachy očí (borová voda/voda), monitoring plicního edému.",
        cave: "Drží se u stropu! Riziko výbuchu v uzavřeném prostoru při vysoké koncentraci."
    },
    {
        id: "cl2",
        kategorie: "C - Chemické",
        nazev: "Chlór",
        identifikace: "Cl2 / UN 1017",
        piktogramy: ["compressed_gas.jpg", "oxidizing.jpg", "toxic.jpg", "corrosive.jpg"],
        vlastnosti: "Žlutozelený plyn, těžší než vzduch. Prudce dusivý a korozivní.",
        oopp: "Protiplynový oděv (OPCH), IDP, filtr typu B (šedý).",
        klinika: "Pálení očí, dušnost, pocit dušení, fialové zbarvení kůže (cyanóza).",
        lecba: "Absolutní klid (prevence edému plic!), kyslík, inhalace kortikoidů.",
        cave: "Klesá do údolí a sklepů! Neklid pacienta zhoršuje prognózu (spotřeba O2)."
    },
    {
        id: "hno3",
        kategorie: "C - Chemické",
        nazev: "Kyselina dusičná",
        identifikace: "HNO3 / UN 2031 / CAS 7697-37-2",
        piktogramy: ["oxidizing.jpg", "ziravina.jpg"],
        vlastnosti: "Bezbarvá až nažloutlá kapalina s ostrým, štiplavým dráždivých zápachem <br> Na vzduchu může uvolňovat žlutohnědé toxické výpary oxidů dusíku <br> Dobře mísitelná s vodou, při ředění se uvolňuje teplo <br> Silné oxidační činidlo - reaguje s mnoho látkami a může podporovat hoření",
        oopp: "Důkladná ochrana očí a dýchacích cest - respirátor + štít/brýle <br> Dekontaminace nutná!",
        klinika: "<b> Inhalačně: </b> kašel, dušnost, bronchospazmus, plicní edém <br> <b> Kůže: </b> žluté zabarvení kůže, chemické poleptání <br> <b> Oči: </b> slzení, zarudnutí, leptání očí <br> <b> Požití: </b> krutá bolest v oblasti žaludku, zvracení, perforace GIT",
        lecba: "<b> Inhalační: </b> oxygenoterapie, salbutamol 2,5mg - 5mg nebul., dexamethason 4-8mg nebul., hydrocortison 200mg i.v./methylprednison 40-125mg i.v. <br> <b> Poleptání: </b> chlazení místa poleptání + analgezie <br> <b> Oči: </b> důkladný výplach spojivkového vaku <br> <b> Požití: </b>nevyvolávat zvracení",
        cave: "Silná žíravina - způsobuje chemické poleptání kůže a sliznic (pozor na oči!) <br> Dráždivé a toxické výpary - mohou vyvolat bronchospazmus a plicní edém (i pozdně) <br> SNP vždy ve vyvíšeném prostředí a proti větru <br>Inhalace toxických výparů - dráždění dýchacích cest <br> Sekundární kontaminace - při klinikau s kontaminovaným oděvem či tekutinou"
    },
    {
        id: "sarin",
        kategorie: "C - Chemické",
        nazev: "Sarin (GB)",
        identifikace: "Nervově paralytická látka",
        piktogramy: ["toxic.jpg"],
        vlastnosti: "Inhibice acetylcholinesterázy. Smrtelný v extrémně malých dávkách.",
        oopp: "Hermetický oblek (OPCH-05), IDP.",
        klinika: "Mióza (špendlíkové zornice), slinění, dušnost, svalové záškuby, křeče.",
        lecba: "Atropin (opakovaně do suchosti sliznic), Obidoxim (Toxogonin).",
        cave: "Mióza je klíčový diagnostický znak!"
    },
    {
        id: "h2so4",
        kategorie: "C - Chemické",
        nazev: "Kyselina sírová",
        identifikace: "H2SO4 / UN 1830",
        piktogramy: ["corrosive.jpg"],
        vlastnosti: "Silná žíravina, dehydratuje tkáně (zuhelnatění). Reaguje s vodou.",
        oopp: "Kyselinovzdorný oblek, obličejový štít, rukavice.",
        klinika: "Těžké poleptání, hluboké nekrózy, u očí riziko oslepnutí.",
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
        vlastnosti: "Vysoce odolné spory. Plicní forma má téměř 100% úmrtnost bez léčby.",
        oopp: "Filtrační přetlakový oblek, maska FFP3.",
        klinika: "Černý příškvark na kůži, horečka, u plicní formy náhlý kolaps.",
        lecba: "Antibiotika (Ciprofloxacin), symptomatická léčba.",
        cave: "Spory jsou nezničitelné běžnou dezinfekcí!"
    },
    {
        id: "ebola",
        kategorie: "B - Biologické",
        nazev: "Ebola (Virová hemoragická horečka)",
        identifikace: "Ebolavirus",
        piktogramy: ["biohazard.jpg"],
        vlastnosti: "Vysoká infekčnost krví a sekrety. Multiorgánové selhání.",
        oopp: "Celotělová bariérová ochrana (Tyvek), dvojité rukavice.",
        klinika: "Vysoká horečka, bolesti svalů, následně vnitřní a vnější krvácení.",
        lecba: "Pouze symptomatická (rehydratace), experimentální antivirotika.",
        cave: "Infekční je i tělo zemřelého!"
    },
    {
        id: "variola",
        kategorie: "B - Biologické",
        nazev: "Pravé neštovice",
        identifikace: "Variola virus",
        piktogramy: ["biohazard.jpg"],
        vlastnosti: "Extrémně nakažlivé kapénkami. Celosvětově vymýcené (riziko zneužití).",
        oopp: "Maximální biologická ochrana, očkování (pokud existuje).",
        klinika: "Horečka, typický hnisavý výsev po celém těle (ve stejné fázi).",
        lecba: "Symptomatická, izolace.",
        cave: "Vysoký potenciál pro bioterorismus."
    },
    {
        id: "botulotoxin",
        kategorie: "B - Biologické",
        nazev: "Botulismus",
        identifikace: "Clostridium botulinum (Toxin)",
        piktogramy: ["toxic.jpg"],
        vlastnosti: "Nejsilnější známý jed. Blokuje nervosvalový přenos.",
        oopp: "Standardní ochrana, pozor na aerosol.",
        klinika: "Dvojité vidění, pokles víček, poruchy polykání, obrna dýchání.",
        lecba: "Antitoxin, umělá plicní ventilace (UPV).",
        cave: "Pacient je plně při vědomí, ale nemůže se hýbat!"
    },
    {
        id: "tularémie",
        kategorie: "B - Biologické",
        nazev: "Tularémie (Zaječí nemoc)",
        identifikace: "Francisella tularensis",
        piktogramy: ["biohazard.jpg"],
        vlastnosti: "Velmi nízká infekční dávka (stačí 10 bakterií). Přenos klíšťaty i aerosolem.",
        oopp: "FFP3 respirátor, rukavice.",
        klinika: "Zvětšené uzliny, horečka, vřed v místě vstupu.",
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
        vlastnosti: "Ionizující záření. Nebezpečí ozáření i vnitřní kontaminace.",
        oopp: "Odstup, dozimetrie, ochrana dýchacích cest.",
        klinika: "Nevolnost, zvracení, při klinikau s kůží radiační popáleniny.",
        lecba: "Dekontaminace, Berlinská modř (vnitřně).",
        cave: "Poločas rozpadu 30 let. Dlouhodobé zamoření."
    },
    {
        id: "i131",
        kategorie: "R - Radiologické",
        nazev: "Jód-131",
        identifikace: "Radioaktivní jód",
        piktogramy: ["radioactive.jpg"],
        vlastnosti: "Hromadí se ve štítné žláze. Riziko po haváriích reaktorů.",
        oopp: "Dozimetrie, respirátor.",
        klinika: "Zvýšené riziko rakoviny štítné žlázy po čase.",
        lecba: "Jodová profylaxe (KI tablety) – musí se podat VČAS.",
        cave: "KI tablety nechrání před jinými izotopy, pouze před Jodem!"
    },
    {
        id: "am241",
        kategorie: "R - Radiologické",
        nazev: "Americium-241",
        identifikace: "Alfa zářič (z detektorů kouře)",
        piktogramy: ["radioactive.jpg"],
        vlastnosti: "Nebezpečné hlavně při vdechnutí prachu (vnitřní alfa zářič).",
        oopp: "Ochrana dýchacích cest (FFP3) je kritická.",
        klinika: "Dlouhodobé poškození kostí a jater.",
        lecba: "Chelatační terapie (DTPA).",
        cave: "Alfa záření papír nezastaví, ale kůže ano. Riziko je VNITŘNÍ."
    },
    {
        id: "co60",
        kategorie: "R - Radiologické",
        nazev: "Kobalt-60",
        identifikace: "Silný Gama zářič",
        piktogramy: ["radioactive.jpg"],
        vlastnosti: "Průmyslové zářiče. Vysoké dávky ozáření za krátkou dobu.",
        oopp: "Maximální odstup a stínění (olovo/beton).",
        klinika: "Akutní nemoc z ozáření, destrukce kostní dřeně.",
        lecba: "Podpora krvetvorby, symptomatická léčba.",
        cave: "Při nálezu opuštěného zářiče se k němu nepřibližovat!"
    },
    {
        id: "rn222",
        kategorie: "R - Radiologické",
        nazev: "Radon",
        identifikace: "Radioaktivní plyn",
        piktogramy: ["radioactive.jpg"],
        vlastnosti: "Plyn z podloží. V uzavřených prostorách způsobuje rakovinu plic.",
        oopp: "Větrání, respirátor v prašném prostředí.",
        klinika: "Chronické poškození plicní tkáně.",
        lecba: "Prevence, sanace objektů.",
        cave: "Neviditelný, bez zápachu. Nutné měření přístroji."
    }
];