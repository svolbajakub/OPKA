// OPKA – data. Generováno: 11. 10. 2026 14:55:07
const cbrneData = [
    {
        "id": "nh3",
        "kategorie": "C - Chemické",
        "nazev": "Amoniak (Čpavek)",
        "identifikace": "NH3 / UN 1005",
        "piktogramy": [
            "ghs04_compressed.png",
            "ghs05_corrosive.png",
            "ghs06_toxic.png"
        ],
        "vlastnosti": "Silně dráždivý plyn, lehčí než vzduch. Poleptání sliznic, očí a dýchacích cest.",
        "oopp": "Ochranný oblek, maska s filtrem typu K (zelený), při vysoké koncentraci IDP.",
        "klinika": "Slzení, křečovitý kašel, edém hrtanu, poleptání vlhké kůže.",
        "lecba": "Odsun, kyslík, výplachy očí (borová voda/voda), monitoring plicního edému.",
        "cave": "Drží se u stropu! Riziko výbuchu v uzavřeném prostoru při vysoké koncentraci."
    },
    {
        "id": "cl2",
        "kategorie": "C - Chemické",
        "nazev": "Chlór",
        "identifikace": "Cl2 / UN 1017",
        "piktogramy": [
            "ghs04_compressed.png",
            "ghs03_oxidizing.png",
            "ghs06_toxic.png",
            "ghs05_corrosive.png"
        ],
        "vlastnosti": "Žlutozelený plyn, těžší než vzduch. Prudce dusivý a korozivní.",
        "oopp": "Protiplynový oděv (OPCH), IDP, filtr typu B (šedý).",
        "klinika": "Pálení očí, dušnost, pocit dušení, fialové zbarvení kůže (cyanóza).",
        "lecba": "Absolutní klid (prevence edému plic!), kyslík, inhalace kortikoidů.",
        "cave": "Klesá do údolí a sklepů! Neklid pacienta zhoršuje prognózu (spotřeba O2)."
    },
    {
        "id": "hno3",
        "kategorie": "C - Chemické",
        "nazev": "Kyselina dusičná",
        "identifikace": "HNO3 / UN 2031 / CAS 7697-37-2",
        "piktogramy": [
            "ghs03_oxidizing.png",
            "ghs05_corrosive.png"
        ],
        "vlastnosti": "Bezbarvá až nažloutlá kapalina s ostrým, štiplavým dráždivých zápachem <br> Na vzduchu může uvolňovat žlutohnědé toxické výpary oxidů dusíku <br> Dobře mísitelná s vodou, při ředění se uvolňuje teplo <br> Silné oxidační činidlo - reaguje s mnoho látkami a může podporovat hoření",
        "oopp": "Důkladná ochrana očí a dýchacích cest - respirátor + štít/brýle <br> Dekontaminace nutná!",
        "klinika": "<b> Inhalačně: </b> kašel, dušnost, bronchospazmus, plicní edém <br> <b> Kůže: </b> žluté zabarvení kůže, chemické poleptání <br> <b> Oči: </b> slzení, zarudnutí, leptání očí <br> <b> Požití: </b> krutá bolest v oblasti žaludku, zvracení, perforace GIT",
        "lecba": "<b> Inhalační: </b> oxygenoterapie, salbutamol 2,5mg - 5mg nebul., dexamethason 4-8mg nebul., hydrocortison 200mg i.v./methylprednison 40-125mg i.v. <br> <b> Poleptání: </b> chlazení místa poleptání + analgezie <br> <b> Oči: </b> důkladný výplach spojivkového vaku <br> <b> Požití: </b>nevyvolávat zvracení",
        "cave": "Silná žíravina - způsobuje chemické poleptání kůže a sliznic (pozor na oči!) <br> Dráždivé a toxické výpary - mohou vyvolat bronchospazmus a plicní edém (i pozdně) <br> SNP vždy ve vyvíšeném prostředí a proti větru <br>Inhalace toxických výparů - dráždění dýchacích cest <br> Sekundární kontaminace - při kontaktu s kontaminovaným oděvem či tekutinou"
    },
    {
        "id": "sarin",
        "kategorie": "C - Chemické",
        "nazev": "Sarin (GB)",
        "identifikace": "Nervově paralytická látka · CAS 107-44-8",
        "piktogramy": [
            "ghs06_toxic.png"
        ],
        "vlastnosti": "Bojová nervově paralytická látka, inhibitor acetylcholinesterázy. Bezbarvá, téměř bez zápachu, velmi těkavá – expozice hlavně vdechnutím. Účinek během sekund až minut.",
        "oopp": "Protichemický oděv + IDP / ochranná maska s filtrem. <br> <b>Dekontaminace:</b> svléknout oděv (odstraní většinu kontaminace), oplach vodou s mýdlem. Ošetřovat až po dekontaminaci.",
        "klinika": "<b>Muskarinové:</b> mióza, slzení, slinění, bronchorea, bronchospasmus, zvracení, průjem, bradykardie <br> <b>Nikotinové:</b> fascikulace, svalová slabost až obrna dýchacích svalů <br> <b>CNS:</b> neklid, křeče, bezvědomí, útlum dechu",
        "lecba": "<b>Atropin</b> 2 mg i.v./i.m. (děti 0,02–0,05 mg/kg), zdvojovat á 5 min do atropinizace (suché sekrety, ústup bronchorey) – bez maximální dávky <br> <b>Benzodiazepin</b> při křečích (midazolam / diazepam) <br> Oxygenace, odsávání, zajištění DC <br> Oximy (obidoxim) podle dostupnosti a konzultace toxikologa",
        "cave": "Mióza je klíčový diagnostický znak! Riziko sekundární kontaminace posádky. Suxamethonium má prodloužený účinek – nepoužívat."
    },
    {
        "id": "h2so4",
        "kategorie": "C - Chemické",
        "nazev": "Kyselina sírová",
        "identifikace": "H2SO4 / UN 1830",
        "piktogramy": [
            "ghs05_corrosive.png"
        ],
        "vlastnosti": "Silná žíravina, dehydratuje tkáně (zuhelnatění). Reaguje s vodou.",
        "oopp": "Kyselinovzdorný oblek, obličejový štít, rukavice.",
        "klinika": "Těžké poleptání, hluboké nekrózy, u očí riziko oslepnutí.",
        "lecba": "Masivní oplach proudem vody (dlouhodobě), sterilní krytí.",
        "cave": "Při polití velkého rozsahu hrozí šok a sepse."
    },
    {
        "id": "antrax",
        "kategorie": "B - Biologické",
        "nazev": "Antrax (Sněť slezinná)",
        "identifikace": "Bacillus anthracis",
        "piktogramy": [
            "sym_biohazard.png"
        ],
        "vlastnosti": "Vysoce odolné spory. Plicní forma má téměř 100% úmrtnost bez léčby.",
        "oopp": "Filtrační přetlakový oblek, maska FFP3.",
        "klinika": "Černý příškvark na kůži, horečka, u plicní formy náhlý kolaps.",
        "lecba": "Antibiotika (Ciprofloxacin), symptomatická léčba.",
        "cave": "Spory jsou nezničitelné běžnou dezinfekcí!"
    },
    {
        "id": "ebola",
        "kategorie": "B - Biologické",
        "nazev": "Ebola (Virová hemoragická horečka)",
        "identifikace": "Ebolavirus",
        "piktogramy": [
            "sym_biohazard.png"
        ],
        "vlastnosti": "Vysoká infekčnost krví a sekrety. Multiorgánové selhání.",
        "oopp": "Celotělová bariérová ochrana (Tyvek), dvojité rukavice.",
        "klinika": "Vysoká horečka, bolesti svalů, následně vnitřní a vnější krvácení.",
        "lecba": "Pouze symptomatická (rehydratace), experimentální antivirotika.",
        "cave": "Infekční je i tělo zemřelého!"
    },
    {
        "id": "variola",
        "kategorie": "B - Biologické",
        "nazev": "Pravé neštovice",
        "identifikace": "Variola virus",
        "piktogramy": [
            "sym_biohazard.png"
        ],
        "vlastnosti": "Extrémně nakažlivé kapénkami. Celosvětově vymýcené (riziko zneužití).",
        "oopp": "Maximální biologická ochrana, očkování (pokud existuje).",
        "klinika": "Horečka, typický hnisavý výsev po celém těle (ve stejné fázi).",
        "lecba": "Symptomatická, izolace.",
        "cave": "Vysoký potenciál pro bioterorismus."
    },
    {
        "id": "botulotoxin",
        "kategorie": "B - Biologické",
        "nazev": "Botulismus",
        "identifikace": "Clostridium botulinum (Toxin)",
        "piktogramy": [
            "ghs06_toxic.png"
        ],
        "vlastnosti": "Nejsilnější známý jed. Blokuje nervosvalový přenos.",
        "oopp": "Standardní ochrana, pozor na aerosol.",
        "klinika": "Dvojité vidění, pokles víček, poruchy polykání, obrna dýchání.",
        "lecba": "Antitoxin, umělá plicní ventilace (UPV).",
        "cave": "Pacient je plně při vědomí, ale nemůže se hýbat!"
    },
    {
        "id": "tularemie",
        "kategorie": "B - Biologické",
        "nazev": "Tularémie (Zaječí nemoc)",
        "identifikace": "Francisella tularensis",
        "piktogramy": [
            "sym_biohazard.png"
        ],
        "vlastnosti": "Velmi nízká infekční dávka (stačí 10 bakterií). Přenos klíšťaty i aerosolem.",
        "oopp": "FFP3 respirátor, rukavice.",
        "klinika": "Zvětšené uzliny, horečka, vřed v místě vstupu.",
        "lecba": "Antibiotika (Streptomycin, Gentamicin).",
        "cave": "Může být zneužito jako biologický aerosol."
    },
    {
        "id": "cs137",
        "kategorie": "R - Radiologické",
        "nazev": "Cesium-137",
        "identifikace": "Radioizotop (Gama/Beta zářič)",
        "piktogramy": [
            "sym_radioactive.png"
        ],
        "vlastnosti": "Ionizující záření. Nebezpečí ozáření i vnitřní kontaminace.",
        "oopp": "Odstup, dozimetrie, ochrana dýchacích cest.",
        "klinika": "Nevolnost, zvracení, při kontaktu s kůží radiační popáleniny.",
        "lecba": "Dekontaminace, Berlinská modř (vnitřně).",
        "cave": "Poločas rozpadu 30 let. Dlouhodobé zamoření."
    },
    {
        "id": "i131",
        "kategorie": "R - Radiologické",
        "nazev": "Jód-131",
        "identifikace": "Radioaktivní jód",
        "piktogramy": [
            "sym_radioactive.png"
        ],
        "vlastnosti": "Hromadí se ve štítné žláze. Riziko po haváriích reaktorů.",
        "oopp": "Dozimetrie, respirátor.",
        "klinika": "Zvýšené riziko rakoviny štítné žlázy po čase.",
        "lecba": "Jodová profylaxe (KI tablety) – musí se podat VČAS.",
        "cave": "KI tablety nechrání před jinými izotopy, pouze před Jodem!"
    },
    {
        "id": "am241",
        "kategorie": "R - Radiologické",
        "nazev": "Americium-241",
        "identifikace": "Alfa zářič (z detektorů kouře)",
        "piktogramy": [
            "sym_radioactive.png"
        ],
        "vlastnosti": "Nebezpečné hlavně při vdechnutí prachu (vnitřní alfa zářič).",
        "oopp": "Ochrana dýchacích cest (FFP3) je kritická.",
        "klinika": "Dlouhodobé poškození kostí a jater.",
        "lecba": "Chelatační terapie (DTPA).",
        "cave": "Alfa záření zastaví už list papíru nebo pokožka – zevně téměř neškodí. Riziko je VNITŘNÍ (vdechnutí, požití, kontaminace rány)."
    },
    {
        "id": "co60",
        "kategorie": "R - Radiologické",
        "nazev": "Kobalt-60",
        "identifikace": "Silný Gama zářič",
        "piktogramy": [
            "sym_radioactive.png"
        ],
        "vlastnosti": "Průmyslové zářiče. Vysoké dávky ozáření za krátkou dobu.",
        "oopp": "Maximální odstup a stínění (olovo/beton).",
        "klinika": "Akutní nemoc z ozáření, destrukce kostní dřeně.",
        "lecba": "Podpora krvetvorby, symptomatická léčba.",
        "cave": "Při nálezu opuštěného zářiče se k němu nepřibližovat!"
    },
    {
        "id": "rn222",
        "kategorie": "R - Radiologické",
        "nazev": "Radon",
        "identifikace": "Radioaktivní plyn",
        "piktogramy": [
            "sym_radioactive.png"
        ],
        "vlastnosti": "Plyn z podloží. V uzavřených prostorách způsobuje rakovinu plic.",
        "oopp": "Větrání, respirátor v prašném prostředí.",
        "klinika": "Chronické poškození plicní tkáně.",
        "lecba": "Prevence, sanace objektů.",
        "cave": "Neviditelný, bez zápachu. Nutné měření přístroji."
    },
    {
        "id": "soman",
        "kategorie": "C - Chemické",
        "nazev": "Soman (GD)",
        "identifikace": "Nervově paralytická látka · CAS 96-64-0",
        "piktogramy": [
            "ghs06_toxic.png",
            "ghs08_health.png",
            "sym_toxic.png"
        ],
        "vlastnosti": "Bojová nervově paralytická látka, inhibitor acetylcholinesterázy. Bezbarvá kapalina s mírně ovocným / kafrovým zápachem. Proti sarinu méně těkavá – hrozí i expozice kůží.",
        "oopp": "Protichemický oděv + IDP / ochranná maska s filtrem. <br> <b>Dekontaminace:</b> svléknout oděv, oplach vodou s mýdlem.",
        "klinika": "Stejně jako sarin: mióza, slinění, bronchorea, bronchospasmus, fascikulace, svalová slabost, křeče, bezvědomí, útlum dechu.",
        "lecba": "<b>Atropin</b> 2 mg i.v./i.m. (děti 0,02–0,05 mg/kg), zdvojovat á 5 min do atropinizace <br> <b>Benzodiazepin</b> při křečích <br> Oxygenace, zajištění DC",
        "cave": "Velmi rychlé „stárnutí“ inhibovaného enzymu (minuty) – oximy prakticky neúčinné. Klíčový je atropin a benzodiazepiny."
    },
    {
        "kategorie": "C - Chemické",
        "id": "co",
        "nazev": "Oxid uhelnatý (CO)",
        "identifikace": "CO / UN 1016",
        "piktogramy": [
            "ghs02_flammable.png",
            "ghs04_compressed.png",
            "ghs06_toxic.png",
            "ghs08_health.png"
        ],
        "vlastnosti": "Bezbarvý plyn bez zápachu, hustota podobná vzduchu – rozptýlí se v celém prostoru. Hořlavý. Vzniká nedokonalým spalováním (kamna, karma, požáry, motory v uzavřeném prostoru).",
        "oopp": "Osobní detektor CO při vstupu do prostoru! Při vysoké koncentraci jen s IDP (hasiči). Větrání.",
        "klinika": "Bolest hlavy, závratě, nauzea, zvracení, zmatenost, synkopa, bolest na hrudi, křeče, bezvědomí. Často více postižených v jednom bytě (i zvířata).",
        "lecba": "<b>100% O₂</b> – maska s rezervoárem (15 l/min), u bezvědomí zajištění DC a FiO₂ 1,0 <br> Monitorace EKG (ischémie, arytmie) <br> Zvaž HBO: bezvědomí, neurologický deficit, těhotná, ischémie myokardu – konzultace",
        "cave": "<b>SpO₂ je falešně normální</b> (pulzní oxymetr nerozliší COHb). Třešňová barva kůže je vzácná a pozdní. U požárů vždy myslet i na kyanidy. Těhotná – plod postižen víc než matka."
    },
    {
        "kategorie": "C - Chemické",
        "id": "hcn",
        "nazev": "Kyanidy / kyanovodík",
        "identifikace": "HCN / UN 1051 · kyanidy (KCN, NaCN)",
        "piktogramy": [
            "ghs02_flammable.png",
            "ghs06_toxic.png",
            "ghs09_environment.png"
        ],
        "vlastnosti": "Blokáda buněčného dýchání (cytochromoxidázy). HCN – bezbarvý plyn / těkavá kapalina, zápach hořkých mandlí (necítí ho každý). Vzniká při hoření plastů, polyuretanu, vlny, hedvábí; galvanovny, laboratoře.",
        "oopp": "IDP, protichemický oděv. Kontaminovaný oděv svléknout. Neprovádět dýchání z úst do úst.",
        "klinika": "Rychlý nástup: dušnost, tachypnoe, bolest hlavy, zmatenost → křeče, bezvědomí, apnoe, oběhové selhání. Kůže spíš růžová (bez cyanózy), výrazná laktátová acidóza.",
        "lecba": "<b>100% O₂</b>, zajištění DC <br> <b>Hydroxokobalamin (Cyanokit)</b> 5 g i.v. během 15 min (děti 70 mg/kg), při přetrvávání lze opakovat 5 g <br> Léčba křečí, oběhová podpora, KPR podle ALS",
        "cave": "Pacient z požáru uzavřeného prostoru v bezvědomí / šoku / s laktátem → myslet na kyanidy i CO současně. Hydroxokobalamin barví kůži a moč do červena a ruší některá laboratorní vyšetření."
    },
    {
        "kategorie": "C - Chemické",
        "id": "h2s",
        "nazev": "Sulfan (sirovodík)",
        "identifikace": "H₂S / UN 1053",
        "piktogramy": [
            "ghs02_flammable.png",
            "ghs04_compressed.png",
            "ghs06_toxic.png",
            "ghs09_environment.png"
        ],
        "vlastnosti": "Bezbarvý plyn, těžší než vzduch – hromadí se v jímkách, kanalizaci, šachtách, nádržích, čističkách. Zápach zkažených vajec, ve vyšší koncentraci ochrnutí čichu (zápach „zmizí“). Hořlavý.",
        "oopp": "Vstup do prostoru jen s IDP a detektorem! Záchrana bez IDP = další oběti.",
        "klinika": "Pálení očí, kašel, dráždění DC. Vyšší koncentrace: náhlý kolaps („knockdown“), bezvědomí, apnoe, křeče, plicní edém (i pozdní).",
        "lecba": "Vyprostit z prostoru (jen hasiči s IDP) <br> <b>100% O₂</b>, ventilace, zajištění DC <br> Symptomatická léčba, observace kvůli plicnímu edému. Specifické antidotum se v PNP standardně nepoužívá.",
        "cave": "Typický scénář: více obětí v jímce – postupně padají zachránci. Nikdy nevstupovat bez IDP!"
    },
    {
        "kategorie": "C - Chemické",
        "id": "hf",
        "nazev": "Kyselina fluorovodíková",
        "identifikace": "HF / UN 1052 (bezvodý) · UN 1790 (roztok)",
        "piktogramy": [
            "ghs05_corrosive.png",
            "ghs06_toxic.png"
        ],
        "vlastnosti": "Proniká hluboko do tkání, váže vápník a hořčík. Používá se ve sklářství, leptání, čištění kovů, elektronice. Ředěné roztoky způsobují bolest až za několik hodin.",
        "oopp": "Chemický oděv, rukavice odolné HF (butyl, neopren), ochrana očí. Dekontaminace proudem vody.",
        "klinika": "<b>Kůže:</b> krutá bolest neodpovídající nálezu, bělavé zbarvení, nekrózy <br> <b>Systémově:</b> hypokalcémie, hypomagnezémie, hyperkalémie → prodloužení QT, komorové arytmie, KF <br> <b>Inhalace:</b> dráždění, bronchospasmus, plicní edém",
        "lecba": "Oplach velkým množstvím vody <br> <b>Kalcium glukonát gel 2,5 %</b> lokálně, opakovaně <br> <b>Calcium gluconicum 10 %</b> i.v. při známkách hypokalcémie / arytmiích <br> Monitorace EKG, analgezie <br> Oči: výplach vodou / FR",
        "cave": "I malá plocha (koncentrovaná HF > 1 % povrchu těla) může být smrtelná systémovou toxicitou. Vždy EKG monitorace a transport."
    },
    {
        "kategorie": "C - Chemické",
        "id": "fosgen",
        "nazev": "Fosgen",
        "identifikace": "COCl₂ / UN 1076",
        "piktogramy": [
            "ghs04_compressed.png",
            "ghs06_toxic.png",
            "ghs05_corrosive.png"
        ],
        "vlastnosti": "Bezbarvý plyn se zápachem shnilého sena, těžší než vzduch. Chemický průmysl (výroba plastů, pesticidů), vzniká i při hoření chlorovaných látek.",
        "oopp": "IDP, protichemický oděv. Svléknout kontaminovaný oděv.",
        "klinika": "Zpočátku jen mírné dráždění očí a DC nebo bez příznaků. Po latenci 1–24 h toxický plicní edém (dušnost, kašel, hypoxie).",
        "lecba": "Klid na lůžku, žádná fyzická námaha <br> O₂ podle SpO₂, bronchodilatancia <br> Transport a observace min. 24 h",
        "cave": "Pacient bez příznaků po expozici MUSÍ do nemocnice – edém plic se objeví až s odstupem. Námaha ho zhoršuje."
    },
    {
        "kategorie": "C - Chemické",
        "id": "nox",
        "nazev": "Oxidy dusíku",
        "identifikace": "NO₂ / UN 1067 · „nitrózní plyny“",
        "piktogramy": [
            "ghs03_oxidizing.png",
            "ghs04_compressed.png",
            "ghs06_toxic.png",
            "ghs05_corrosive.png"
        ],
        "vlastnosti": "Červenohnědý plyn s ostrým zápachem, těžší než vzduch. Silážní věže a jámy, svařování, výbuchy, reakce kyseliny dusičné s kovy.",
        "oopp": "IDP, protichemický oděv.",
        "klinika": "Dráždění očí a DC, kašel, bronchospasmus. Pozdní plicní edém (3–36 h). Možná methemoglobinémie.",
        "lecba": "Klid, O₂, bronchodilatancia (salbutamol) <br> Observace kvůli pozdnímu edému plic",
        "cave": "Silážní jáma – „silážní nemoc“, typicky zemědělci. Pacient bez příznaků po expozici patří k observaci."
    },
    {
        "kategorie": "C - Chemické",
        "id": "ofp",
        "nazev": "Organofosfáty (pesticidy)",
        "identifikace": "insekticidy – inhibitory acetylcholinesterázy",
        "piktogramy": [
            "ghs06_toxic.png",
            "ghs08_health.png",
            "ghs09_environment.png"
        ],
        "vlastnosti": "Zemědělské insekticidy (chlorpyrifos, dimethoát…). Stejný mechanismus jako bojové nervově paralytické látky. Expozice kůží, vdechnutím i požitím (sebevražedné pokusy).",
        "oopp": "Rukavice, ochrana očí, plášť. Svléknout oděv, oplach kůže vodou s mýdlem. Často typický zápach (petrolej, česnek).",
        "klinika": "<b>Muskarinové:</b> mióza, slinění, bronchorea, bronchospasmus, zvracení, průjem, pomočení, bradykardie <br> <b>Nikotinové:</b> fascikulace, slabost, obrna dýchacích svalů <br> <b>CNS:</b> zmatenost, křeče, kóma",
        "lecba": "<b>Atropin</b> 1–2 mg i.v. (děti 0,02–0,05 mg/kg), zdvojovat á 5 min do atropinizace (suché sekrety, ústup bronchorey, TF > 80, STK > 80) – bez maximální dávky <br> Benzodiazepin při křečích <br> O₂, odsávání, zajištění DC <br> Konzultace Toxikologického informačního střediska",
        "cave": "Sekundární kontaminace posádky (zvratky, oděv). Suxamethonium nepoužívat – prodloužená obrna. Mióza + bronchorea + bradykardie = myslet na organofosfáty."
    }
];
