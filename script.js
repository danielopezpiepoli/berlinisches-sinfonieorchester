// =========================================
// 1. DICCIONARIO DE IDIOMAS (I18N)
// =========================================
const content = {
    de: {
        /* --- NAVEGACIÓN GLOBAL & HEADER --- */
        home: "Startseite",
        about: "Über uns",
        project: "Das Projekt",
        musicians: "Musiker",
        director: "Musikdirektor",
        board: "Künstlerischer Beirat",
        calendar: "Kalender",
        upcoming: "Kommende Konzerte",
        past: "Vergangene Konzerte",
        gallery: "Galerie",
        audios: "Audio",
        videos: "Videos",
        photos: "Fotos",
        support: "Unterstützen",
        partners: "Partnerschaften",
        membership: "Vision Fördern",
        contact: "Kontakt",
        hero: "Berlinisches Sinfonieorchester",

        /* --- INDEX.HTML: HERO & SEASON SLIDER --- */
        "hero-subtitle": "Der neue Klang Berlins",
        "program-tag": "Programm",
        "season-title": "Saison 2026",
        "tag-next-concert": "Nächstes Konzert",
        "concert-1-title": "Beethoven: Sinfonie Nr. 3 \"Eroica\"",
        "concert-1-info": "Konzerthaus Berlin | 24. Okt. 2026 | 20:00",
        "btn-get-tickets": "Tickets Sichern",
        "tag-romantic-series": "Romantik-Reihe",
        "concert-2-title": "Mendelssohn: \"Schottische\" Sinfonie Nr. 3",
        "concert-2-info": "Berliner Philharmonie | 15. Nov. 2026 | 19:30",
        "tag-special-gala": "Sondergala",
        "concert-3-title": "The Sound of Cinema: Hollywood in Berlin",
        "concert-3-info": "Admiralspalast | 05. Dez. 2026 | 21:00",
        "tag-season-cta": "Saison 2026",
        "season-cta-title": "Gesamtes Repertoire & Termine —",
        "season-cta-desc": "Entdecken Sie alle Aufführungen dieses Jahres.",
        "btn-explore-season": "Ganze Saison Entdecken",

        /* --- INDEX.HTML: MISSION / ABOUT TEASER --- */
        "mission-tag": "Seit 2026",
        "mission-title": "Unsere Mission",
        "mission-desc": "Inspiriert von der sozialen Kraft von <strong>El Sistema</strong> und getragen von der Energie der globalen Diaspora, ist das Berlinische Sinfonieorchester ein lebendiges Labor im Herzen Berlins. Wir schlagen eine Brücke zwischen künstlerischer Exzellenz und beruflicher Perspektive und schaffen einen offenen Raum, in dem Musiker unterschiedlichster Hintergründe das symphonische Erlebnis neu definieren. Hier wird jede persönliche Geschichte zu einem universellen Klang – ein Beweis dafür, dass Musik die einzige grenzenlose Sprache ist.",
        "btn-more-about": "Mehr Über Uns",
        "recruitment-prelude": "Auf der Suche nach außergewöhnlichem Talent.",
        "btn-join-orchestra": "Dem Orchester Beitreten —",

        /* --- INDEX.HTML: HIGHLIGHTS & ARCHIVE --- */
        "archives-tag": "Archiv",
        "highlights-title": "Jüngste Höhepunkte",
        "badge-sold-out": "Ausverkauft",
        "highlight-1-title": "Lustgarten Flashmob",
        "highlight-1-info": "Berlin | Juli 2026",
        "highlight-2-title": "Kammermusik-Sessions",
        "highlight-2-info": "Berlin | Mai 2026",
        "archive-explore-link": "Unser vollständiges Archiv entdecken",

        /* --- FOOTER GLOBAL & PRE-FOOTER --- */
        "supported-by": "In Partnerschaft mit",
        "support-vision": "Vision Fördern",
        "impressum": "Impressum",
        "privacy": "Datenschutz",
        "footer-copyright": "© 2026 Berlinisches Sinfonieorchester e.V. Alle Rechte vorbehalten.",
        "footer-designer-credit": "Webdesign von",

        /* --- AUDIOS.HTML: ARCHIVO DE AUDIO --- */
        "audio-hero-tag": "Audioarchiv",
        "audio-page-title": "Ausgewählte Aufnahmen",
        "audio-intro": "Hören Sie Master-Aufnahmen und Live-Mitschnitte aus dem Archiv des Berlinischen Sinfonieorchesters.",
        "audio-1-tag": "Live-Aufnahme | Konzerthaus Berlin",
        "audio-1-title": "Johannes Brahms: Sinfonie Nr. 1 c-Moll op. 68 (IV. Adagio – Allegro non troppo)",
        "audio-1-artists": "Dirigent: Daniel Alejandro López | Berlinisches Sinfonieorchester",
        "audio-2-tag": "Kammeraufnahme | Berliner Philharmonie",
        "audio-2-title": "P. I. Tschaikowski: Serenade für Streicher C-Dur op. 48 (I. Pezzo in forma di sonatina)",
        "audio-2-artists": "BSO-Streicherensemble | Live-Konzertreihe",
        "audio-3-tag": "Eröffnungsgala | Admiralspalast",
        "audio-3-title": "Gioachino Rossini: Wilhelm Tell Ouvertüre (Finale)",
        "audio-3-artists": "Dirigent: Daniel Alejandro López | Berlinisches Sinfonieorchester",

        /* --- BOARD.HTML: VORSTAND & TEAM --- */
        "board-hero-tag": "Menschen hinter der Musik",
        "board-page-title": "Vorstand & Team",
        "board-intro": "Hinter den Proben und Konzertsälen steht eine engagierte Gruppe von Musikern, Organisatoren und Kreativen, die sich dem Aufbau einer inspirierenden, offenen Heimat für Orchestermusik in Berlin widmen.",
        
        /* Daniel López Piepoli */
        "board-daniel-tag": "Künstlerische Leitung",
        "board-daniel-role": "Vorsitzender, Künstlerischer Leiter & Musikdirektor",
        "board-daniel-lead": "Daniel gründete das Berlinische Sinfonieorchester aus einer klaren Überzeugung: Ein Orchester sollte eine lebendige, offene Gemeinschaft sein, in der außergewöhnliche musikalische Exzellenz auf echte menschliche Verbindung trifft.",
        "board-daniel-bio": "Als Vorsitzender und Musikdirektor gestaltet er die künstlerische Vision des Orchesters, dirigiert unsere Saisonprogramme und baut Kooperationen mit Berliner Kulturstätten auf. Er arbeitet eng mit Instrumentalisten der Stadt zusammen, um Talente zu fördern, mutiges Repertoire zu kuratieren und die nachhaltige soziale und musikalische Mission des Projekts zu sichern.",
        "board-daniel-btn": "Daniels Dirigentenbiografie lesen &rarr;",
        
        /* Stella Karalis */
        "board-stella-tag": "Künstlerische Planung",
        "board-stella-role": "Stellvertretende Vorsitzende & Künstlerische Betriebsdirektorin",
        "board-stella-lead": "Stella ist das unverzichtbare Bindeglied zwischen musikalischen Visionen und deren Bühnenumsetzung – mit unermüdlicher Energie und einem geschulten künstlerischen Gehör bei jeder Produktion.",
        "board-stella-bio": "Seite an Seite mit dem Musikdirektor kuratiert und balanciert Stella unsere Konzertprogramme, begutachtet Probespielaufnahmen und nutzt ihr weitreichendes Netzwerk, um herausragende Musiker für unser Ensemble zu gewinnen. Zudem verantwortet sie die Recherche, Notenlizenzierung und digitale Notenverteilung.",
        
        /* Gabriela Jose González */
        "board-gabriela-tag": "Finanzen & Entwicklung",
        "board-gabriela-role": "Schatzmeisterin",
        "board-gabriela-lead": "Gabriela sichert die finanzielle Nachhaltigkeit und transparente Führung des Orchesters, damit große künstlerische Visionen auf einem soliden Fundament wachsen können.",
        "board-gabriela-bio": "Als Schatzmeisterin koordiniert sie die jährliche Budgetplanung, überwacht die Produktionskosten der Konzerte und gewährleistet die steuerliche Gemeinnützigkeitskonformität des Vereins. Ihr sorgfältiges Finanzmanagement stellt sicher, dass jeder Förderbeitrag und jedes Ticket direkt unseren Musikern und Aufführungen zugutekommt.",
        
        /* Ebru Algül */
        "board-ebru-tag": "Musikerbetreuung",
        "board-ebru-role": "Schriftführerin & Leitung Kommunikation",
        "board-ebru-lead": "Ebru ist die verbindende Stimme unseres Ensembles, die den offenen Dialog, die herzliche Gemeinschaft und einen reibungslosen Ablauf fördert.",
        "board-ebru-bio": "Sie betreut die internen Kommunikationskanäle mit unseren Musikern, sammelt Feedback aus den Registern und berät das Team bei logistischen Anforderungen besonderer Instrumentierungen. Als Schriftführerin führt sie zudem die offiziellen Protokolle, Beschlüsse und vereinsrechtlichen Dokumente des e.V.",
        
        /* Isabel Barciela */
        "board-isabel-tag": "Prüfung & Compliance",
        "board-isabel-role": "Kassenprüferin",
        "board-isabel-lead": "Isabel sorgt mit unabhängigem und präzisem Blick für die Einhaltung höchster ethischer Standards und vereinsrechtlicher Transparenz.",
        "board-isabel-bio": "In ihrer Funktion als Kassenprüferin prüft sie die ordnungsgemäße Buchführung, Bankbewegungen und Finanzberichte gemäß den Vorgaben des deutschen Gemeinnützigkeitsrechts (<em>gemeinnütziger Verein</em>) – für vollkommenes Vertrauen unserer Mitglieder, Förderer und Partner.",
        
        /* Community Banner */
        "board-community-tag": "Begleiten Sie Unseren Weg",
        "board-community-title": "Eine offene, herzliche Gemeinschaft",
        "board-community-desc": "Ob Sie Orchestermusiker sind und bei uns mitspielen möchten, als Musikliebhaber unserem Förderkreis beitreten oder als Institution kulturell kooperieren wollen – wir freuen uns auf den Dialog mit Ihnen.",
        "board-community-btn-join": "Dem Orchester Beitreten &rarr;",
        "board-community-btn-support": "Vision Fördern",

        /* --- BOARD.HTML: VORSTAND & TEAM --- */
        "board-hero-tag": "Menschen hinter der Musik",
        "board-page-title": "Vorstand & Team",
        "board-intro": "Hinter den Proben und Konzertsälen steht eine engagierte Gruppe von Musikern, Organisatoren und Kreativen, die sich dem Aufbau einer inspirierenden, offenen Heimat für Orchestermusik in Berlin widmen.",
        
        /* Daniel López Piepoli */
        "board-daniel-tag": "Künstlerische Leitung",
        "board-daniel-role": "Vorsitzender, Künstlerischer Leiter & Musikdirektor",
        "board-daniel-lead": "Daniel gründete das Berlinische Sinfonieorchester aus einer klaren Überzeugung: Ein Orchester sollte eine lebendige, offene Gemeinschaft sein, in der außergewöhnliche musikalische Exzellenz auf echte menschliche Verbindung trifft.",
        "board-daniel-bio": "Als Vorsitzender und Musikdirektor gestaltet er die künstlerische Vision des Orchesters, dirigiert unsere Saisonprogramme und baut Kooperationen mit Berliner Kulturstätten auf. Er arbeitet eng mit Instrumentalisten der Stadt zusammen, um Talente zu fördern, mutiges Repertoire zu kuratieren und die nachhaltige soziale und musikalische Mission des Projekts zu sichern.",
        "board-daniel-btn": "Daniels Dirigentenbiografie lesen &rarr;",
        
        /* Stella Karalis */
        "board-stella-tag": "Künstlerische Planung",
        "board-stella-role": "Stellvertretende Vorsitzende & Künstlerische Betriebsdirektorin",
        "board-stella-lead": "Stella ist das unverzichtbare Bindeglied zwischen musikalischen Visionen und deren Bühnenumsetzung – mit unermüdlicher Energie und einem geschulten künstlerischen Gehör bei jeder Produktion.",
        "board-stella-bio": "Seite an Seite mit dem Musikdirektor kuratiert und balanciert Stella unsere Konzertprogramme, begutachtet Probespielaufnahmen und nutzt ihr weitreichendes Netzwerk, um herausragende Musiker für unser Ensemble zu gewinnen. Zudem verantwortet sie die Recherche, Notenlizenzierung und digitale Notenverteilung.",
        
        /* Gabriela Jose González */
        "board-gabriela-tag": "Finanzen & Entwicklung",
        "board-gabriela-role": "Schatzmeisterin",
        "board-gabriela-lead": "Gabriela sichert die finanzielle Nachhaltigkeit und transparente Führung des Orchesters, damit große künstlerische Visionen auf einem soliden Fundament wachsen können.",
        "board-gabriela-bio": "Als Schatzmeisterin koordiniert sie die jährliche Budgetplanung, überwacht die Produktionskosten der Konzerte und gewährleistet die steuerliche Gemeinnützigkeitskonformität des Vereins. Ihr sorgfältiges Finanzmanagement stellt sicher, dass jeder Förderbeitrag und jedes Ticket direkt unseren Musikern und Aufführungen zugutekommt.",
        
        /* Ebru Algül */
        "board-ebru-tag": "Musikerbetreuung",
        "board-ebru-role": "Schriftführerin & Leitung Kommunikation",
        "board-ebru-lead": "Ebru ist die verbindende Stimme unseres Ensembles, die den offenen Dialog, die herzliche Gemeinschaft und einen reibungslosen Ablauf fördert.",
        "board-ebru-bio": "Sie betreut die internen Kommunikationskanäle mit unseren Musikern, sammelt Feedback aus den Registern und berät das Team bei logistischen Anforderungen besonderer Instrumentierungen. Als Schriftführerin führt sie zudem die offiziellen Protokolle, Beschlüsse und vereinsrechtlichen Dokumente des e.V.",
        
        /* Isabel Barciela */
        "board-isabel-tag": "Prüfung & Compliance",
        "board-isabel-role": "Kassenprüferin",
        "board-isabel-lead": "Isabel sorgt mit unabhängigem und präzisem Blick für die Einhaltung höchster ethischer Standards und vereinsrechtlicher Transparenz.",
        "board-isabel-bio": "In ihrer Funktion als Kassenprüferin prüft sie die ordnungsgemäße Buchführung, Bankbewegungen und Finanzberichte gemäß den Vorgaben des deutschen Gemeinnützigkeitsrechts (<em>gemeinnütziger Verein</em>) – für vollkommenes Vertrauen unserer Mitglieder, Förderer und Partner.",
        
        /* Community Banner */
        "board-community-tag": "Begleiten Sie Unseren Weg",
        "board-community-title": "Eine offene, herzliche Gemeinschaft",
        "board-community-desc": "Ob Sie Orchestermusiker sind und bei uns mitspielen möchten, als Musikliebhaber unserem Förderkreis beitreten oder als Institution kulturell kooperieren wollen – wir freuen uns auf den Dialog mit Ihnen.",
        "board-community-btn-join": "Dem Orchester Beitreten &rarr;",
        "board-community-btn-support": "Vision Fördern",

        /* --- CONTACT.HTML: KONTAKT & ANFRAGEN --- */
        "contact-hero-tag": "Direkte Kommunikation",
        "contact-page-title": "Kontakt Aufnehmen",
        "contact-intro": "Für allgemeine Anfragen, Probespiele oder Presseanfragen schreiben Sie unserer Geschäftsstelle in Berlin über das untenstehende Formular oder per E-Mail.",
        "contact-office-title": "Geschäftsstelle",
        "contact-office-city": "Berlin, Deutschland",
        "contact-audition-title": "Bewerbungen & Probespiele",
        "contact-audition-desc": "Wenn Sie sich für offene Orchesterstellen oder Gastsolisten-Engagements bewerben, fügen Sie bitte Links zu unbearbeiteten Videoaufnahmen und Ihren Lebenslauf bei.",
        "contact-support-tag": "Mäzenatentum & Partnerschaften",
        "contact-support-title": "Möchten Sie unsere Vision fördern?",
        "contact-support-desc": "Wenn Sie ein Firmenpartner, eine Stiftung sind oder Mäzen werden möchten, entdecken Sie unsere individuellen Förderprogramme.",
        "contact-support-btn": "Förderprogramme Entdecken &rarr;",
        
        /* Formulario de Contacto */
        "contact-label-name": "Vollständiger Name *",
        "contact-label-email": "E-Mail-Adresse *",
        "contact-label-topic": "Betreff / Anliegen *",
        "contact-opt-general": "Allgemeine Anfrage & Tickets",
        "contact-opt-join": "Musiker & Probespielanfrage",
        "contact-opt-press": "Presse & Medienarbeit",
        "contact-opt-other": "Sonstiges",
        "contact-audition-welcome-title": "Wir freuen uns darauf, Ihre Musikalität kennenzulernen und gemeinsam zu musizieren.",
        "contact-audition-welcome-subtitle": "Erzählen Sie uns von Ihrem musikalischen Werdegang und teilen Sie unten Ihre aktuellen Aufnahmelinks.",
        "contact-label-instrument": "Hauptinstrument *",
        "contact-label-portfolio": "Video- / Audio-Portfolio (URL)",
        "contact-label-subject": "Betreff",
        "contact-label-message": "Nachricht *",
        "contact-btn-submit": "Nachricht Senden —",

        /* --- DIRECTOR.HTML: MUSIKDIREKTOR & BIOGRAFIE --- */
        "director-hero-tag": "Künstlerische Leitung",
        "director-hero-subtitle": "Musikdirektor & Gründer",
        "director-kicker": "Biografie",
        "director-title": "Ein geborener Kommunikator mit ansteckendem Charisma",
        "director-lead-bio": "<strong>Daniel López Piepoli</strong> (Venezuela, 1996) ist ein italienisch-venezolanischer Dirigent mit derzeitigem Lebensmittelpunkt in Berlin. Seine dirigentische Ausbildung erhielt er in seinem Heimatland Venezuela im Rahmen von <em>El Sistema</em>, dem von Maestro José Antonio Abreu ins Leben gerufenen Musikbildungsprogramm. Neben seiner enthusiastischen künstlerischen Vision und fundierten akademischen Vorbildung zeichnet ihn eine ausgeprägte Sprachaffinität aus (fließend in Englisch, Spanisch, Italienisch, Portugiesisch und Französisch).",
        "director-bio-p1": "Daniels Musizieren zeichnet sich durch bemerkenswerte Lebendigkeit, Sensibilität und Begeisterung aus. Dies führte ihn zum <strong>3. Preis beim New York Classical Music Competition (USA)</strong>, ins <strong>Halbfinale des 2. Internationalen Dirigierwettbewerbs im italienischen Bordighera</strong> sowie ins <strong>Finale der International Artists Competition (Österreich)</strong> im Jahr 2023, in dem er auch sein Italien-Debüt mit dem Jugendstreichorchester „Note Libere“ in Sanremo gab.",
        "director-bio-p2": "Im selben Jahr nahm er am 5. Internationalen BMI-Dirigierwettbewerb mit dem Bukarester Sinfonieorchester (Rumänien) und an der Eröffnungsausgabe des Internationalen „Borislav Ivanov“-Wettbewerbs für junge Dirigenten an der Staatsoper Varna (Bulgarien) als einziger ausgewählter Lateinamerikaner und Vertreter des gesamten amerikanischen Kontinents teil. 2024 gastierte er als Dirigent beim <em>Anima Orchestre et Art Lyrique</em> in Paris (Frankreich).",
        "director-bio-p3": "Daniel begann seine Dirigierstudien bei Ramón Moncada und Alexander Gómez und setzte sie an der Nationalen Experimentellen Universität der Künste in Caracas unter der Leitung des renommierten Komponisten und Dirigenten Alfredo Rugeles (ehemaliger Künstlerischer Leiter der Sinfónica Simón Bolívar) sowie Maestra Teresa Hernández (Leiterin des Lehrstuhls für Orchesterleitung und heutige Repräsentantin von El Sistema in Spanien) für den Bachelor fort. Meisterkurse absolvierte er u. a. bei Dick Van Gasteren, Miguel Ángel Monroy, Alfredo Ascanio, Eddy Marcano, Régulo Stabilito und David Cubek.",
        "director-quote": "«Ein Orchester ist nicht bloß ein Ensemble von Instrumenten; es ist ein gemeinsamer Herzschlag, in dem Disziplin, Spielfreude und tiefe menschliche Verbundenheit zu Klang verschmelzen.»",
        "director-bio-p4": "Als musikalischer Leiter gastierte Daniel regelmäßig am Pult venezolanischer Klangkörper wie dem Jugendsinfonieorchester Falcón, dem Jugendsinfonieorchester des Musikkonservatoriums Simón Bolívar, sowie den Jugendsinfonieorchestern La Victoria, San Sebastián de los Reyes, Ciudad Guayana und San Antonio de Los Altos. Er war Musikdirektor der INOF-Sinfonie in Los Teques, Chefdirigent der Kinder- und Jugendorchester von Coro und Assistenzdirigent des Regional del Este Jugendsinfonieorchesters in Caracas.",
        "director-bio-p5": "Geprägt von seiner Ausbildung bei El Sistema initiierte Daniel in Berlin ein zukunftsweisendes Gemeinschaftsprojekt eines Sinfonieorchesters, das sich vor allem aus Migranten und Geflüchteten zusammensetzt. Diese Arbeit stützt sich auf seine eigene Erfahrung als Posaunist, lyrischer Sänger und Arrangeur. Er studierte Posaune an der Lateinamerikanischen Posaunenakademie in Caracas, wirkte in Ensembles der venezolanischen Orchesterlandschaft mit und studierte Internationale Beziehungen an der Universidad Central de Venezuela. Seine Leidenschaft für Sprachen verband er in einem methodischen Konzept, das Sprachunterricht über die Strukturen klassischer Musik vermittelt.",
        "director-link-website": "Offizielle Website besuchen: danielopezpiepoli.com &rarr;",
        "director-btn-project": "Das Projekt & Vision",
        "director-btn-program": "Konzerte der Saison 2026",

        /* --- IMPRESSUM.HTML: RECHTLICHE HINWEISE --- */
        "impressum-hero-tag": "Gesetzliche Angaben",
        "impressum-page-title": "Impressum / Rechtliche Hinweise",
        "impressum-sub-intro": "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
        "impressum-sec1-title": "1. Betreiber der Website",
        "impressum-sec1-legal-form": "Eingetragener Verein (e. V.) nach deutschem Recht",
        "impressum-sec1-court": "Registergericht:",
        "impressum-sec1-reg-nr": "Registernummer:",
        "impressum-sec1-verify": "[Amtlich im Registerportal verifizieren &rarr;]",
        "impressum-sec1-seat": "Sitz des Vereins:",
        "impressum-sec1-tax": "Steuernummer (Finanzamt für Körperschaften I, Berlin):",
        "impressum-sec2-title": "2. Anschrift & Kontakt",
        "impressum-sec3-title": "3. Vertretungsberechtigter Vorstand (§ 26 BGB)",
        "impressum-sec3-desc": "Der Verein wird gerichtlich und außergerichtlich durch den geschäftsführenden Vorstand vertreten (jeweils mit Einzelvertretungsmacht gemäß Satzung):",
        "impressum-sec3-daniel-role": "(Vorsitzender)",
        "impressum-sec3-gabriela-role": "(Schatzmeisterin)",
        "impressum-sec3-extended": "<em>Erweiterter Vorstand:</em> Stella Karalis (Stellv. Vorsitzende), Ebru Algül (Schriftführerin).",
        "impressum-sec4-title": "4. Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)",
        "impressum-sec5-title": "5. Haftungsausschluss",
        "impressum-sec5-content-title": "Haftung für Inhalte",
        "impressum-sec5-content-text": "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.",
        "impressum-sec5-links-title": "Haftung für Links",
        "impressum-sec5-links-text": "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
        "impressum-sec5-copy-title": "Urheberrecht",
        "impressum-sec5-copy-text": "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
        "impressum-sec6-title": "6. Verbraucherstreitbeilegung",
        "impressum-sec6-p1": "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href=\"https://ec.europa.eu/consumers/odr/\" target=\"_blank\" rel=\"noopener noreferrer\">https://ec.europa.eu/consumers/odr/</a>.",
        "impressum-sec6-p2": "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",

        /* --- MUSICIANS.HTML: DIE MUSIKER & ROSTER --- */
        "musicians-hero-tag": "Orchesterensemble",
        "musicians-page-title": "Die Musiker",
        "musicians-intro": "Lernen Sie die internationalen Musiker, Stimmführer und Orchestermitglieder kennen, die den Klang des Berlinischen Sinfonieorchesters in den Berliner Konzertsälen zum Leben erwecken.",
        "musicians-nav-strings": "Streicher",
        "musicians-nav-woodwinds": "Holzbläser",
        "musicians-nav-brass": "Blechbläser",
        "musicians-nav-percussion": "Schlagwerk",

        /* Strings */
        "musicians-sec-strings-tag": "Sektion I",
        "musicians-sec-strings-title": "Streicher",
        
        "musicians-sub-violins1": "Erste Violinen",
        "musicians-vln1-p1-tag": "Stimmführerin",
        "musicians-vln1-p1-chair": "Konzertmeisterin",
        "musicians-vln1-p1-bio": "Konzertmeisterin des BSO. Bekannt für ihre ausdrucksstarke Phrasierung, kammermusikalische Führung und Hingabe an sinfonische Exzellenz in Berlin.",
        
        "musicians-vln1-p2-tag": "Deutschland",
        "musicians-vln1-p2-chair": "Erste Violine",
        "musicians-vln1-p2-bio": "Master-Absolventin mit Spezialisierung auf das romantische und klassische Orchesterrepertoire.",
        
        "musicians-vln1-p3-tag": "Deutschland",
        "musicians-vln1-p3-chair": "Erste Violine",
        "musicians-vln1-p3-bio": "Aktiver Kammersolist und Gastorchesterspieler auf europäischen Festivals.",
        
        "musicians-vln1-p4-tag": "Österreich",
        "musicians-vln1-p4-chair": "Erste Violine",
        "musicians-vln1-p4-bio": "Spezialisiert auf groß besetzte sinfonische Werke und Kammermusiksonaten.",

        "musicians-sub-violins2-violas": "Zweite Violinen & Bratschen",
        "musicians-vln2-p1-tag": "Stimmführer",
        "musicians-vln2-p1-chair": "Stimmführer Zweite Violine",
        "musicians-vln2-p1-bio": "Leitet die zweite Violingruppe mit rhythmischer Präzision und klanglicher Ausgewogenheit.",
        
        "musicians-vla-p1-tag": "Stimmführerin",
        "musicians-vla-p1-chair": "Solo-Bratsche",
        "musicians-vla-p1-bio": "Warme Mittelstimmen-Klangfarbe und geschätzte Pädagogin in Berliner Kammerensembles.",
        
        "musicians-vla-p2-tag": "Frankreich",
        "musicians-vla-p2-chair": "Bratsche",
        "musicians-vla-p2-bio": "Orchesterbratscher mit Schwerpunkt auf modernen Klangfarben und struktureller Balance.",

        "musicians-sub-cellos-basses": "Violoncelli & Kontrabässe",
        "musicians-vc-p1-tag": "Stimmführer",
        "musicians-vc-p1-chair": "Solo-Violoncello",
        "musicians-vc-p1-bio": "Gefeierter Solist, der dem tiefen Streicherkern Lyrik und Tiefe verleiht.",
        
        "musicians-vc-p2-tag": "Tschechien",
        "musicians-vc-p2-chair": "Violoncello",
        "musicians-vc-p2-bio": "Ensemble-Cellist mit Leidenschaft für romantische Orchesterklänge und folkloristische Idiome.",
        
        "musicians-cb-p1-tag": "Stimmführerin",
        "musicians-cb-p1-chair": "Solo-Kontrabass",
        "musicians-cb-p1-bio": "Solo-Kontrabassistin des BSO. Solides Fundament und dynamische Stimmführung im Zentrum der akustischen Architektur des Orchesters.",
        
        "musicians-cb-p2-tag": "Ungarn",
        "musicians-cb-p2-chair": "Kontrabass",
        "musicians-cb-p2-bio": "Kraftvolle Basspräsenz zur Verankerung des tiefsten Registers des Klangkörpers.",

        /* Woodwinds */
        "musicians-sec-woodwinds-tag": "Sektion II",
        "musicians-sec-woodwinds-title": "Holzbläser",
        
        "musicians-sub-flutes-oboes": "Flöten & Oboen",
        "musicians-fl-p1-tag": "Stimmführerin",
        "musicians-fl-p1-chair": "Solo-Flöte",
        "musicians-fl-p1-bio": "Solo-Flötistin des BSO. Geschätzt für ihren leuchtenden Ton, ihre ausdrucksstarke Agilität und vielseitige kammermusikalische Präsenz in Berlin.",
        
        "musicians-fl-p2-tag": "Frankreich",
        "musicians-fl-p2-chair": "Flöte / Piccolo",
        "musicians-fl-p2-bio": "Spezialisiert auf impressionistische Bläserfarben, Piccoloflöte und zeitgenössische Orchesterwerke.",
        
        "musicians-ob-p1-tag": "Stimmführer",
        "musicians-ob-p1-chair": "Solo-Oboe",
        "musicians-ob-p1-bio": "Warmer, zentrierter Oboenton und Spezialist für Soli auf dem Englischhorn.",

        "musicians-sub-clarinets-bassoons": "Klarinetten & Fagotte",
        "musicians-cl-p1-tag": "Stimmführerin",
        "musicians-cl-p1-chair": "Solo-Klarinette",
        "musicians-cl-p1-bio": "Solo-Klarinettistin des BSO. Ausgezeichnet für samtige Cantabile-Linien, virtuose Flexibilität und satten Ton in sinfonischen Konzertprogrammen.",
        
        "musicians-cl-p2-tag": "Finnland",
        "musicians-cl-p2-chair": "Klarinette",
        "musicians-cl-p2-bio": "Klarinettist und Bassklarinettist mit Schwerpunkt auf nordischen und spätromantischen Klangstrukturen.",
        
        "musicians-bn-p1-tag": "Stimmführer",
        "musicians-bn-p1-chair": "Solo-Fagott",
        "musicians-bn-p1-bio": "Meister des Doppelrohrblatts, geschätzt für warmes Fagott-Timbre und agile Staccato-Klarheit.",

        /* Brass */
        "musicians-sec-brass-tag": "Sektion III",
        "musicians-sec-brass-title": "Blechbläser",
        "musicians-sub-brass-all": "Hörner, Trompeten, Posaunen & Tuba",
        
        "musicians-hn-p1-tag": "Stimmführer",
        "musicians-hn-p1-chair": "Solo-Horn",
        "musicians-hn-p1-bio": "Edler Hornton, der heroische Fanfaren ebenso wie zarte Kammersoli mit meisterhafter Souveränität meistert.",
        
        "musicians-tpt-p1-tag": "Stimmführer",
        "musicians-tpt-p1-chair": "Solo-Trompete",
        "musicians-tpt-p1-bio": "Präzise Artikulation und strahlende Höhen in klassischen wie modernen Werken.",
        
        "musicians-tbn-p1-tag": "Stimmführer",
        "musicians-tbn-p1-chair": "Solo-Posaune",
        "musicians-tbn-p1-bio": "Satter Orchesterklang im tiefen Blech mit breiter Dynamik und kantablem Legato.",
        
        "musicians-tba-p1-tag": "Stimmführer",
        "musicians-tba-p1-chair": "Tuba",
        "musicians-tba-p1-bio": "Resonanter Tuba-Anker, der dem gesamten Blechbläserchor ein mächtiges akustisches Fundament verleiht.",

        /* Percussion */
        "musicians-sec-percussion-tag": "Sektion IV",
        "musicians-sec-percussion-title": "Schlagwerk & Pauken",
        "musicians-timp-p1-tag": "Stimmführer",
        "musicians-timp-p1-chair": "Solo-Pauke",
        "musicians-timp-p1-bio": "Zentraler rhythmischer Motor des Orchesters, der dramatische Intensität und dynamischen Drive von der Pauke aus steuert.",
        
        "musicians-perc-p2-tag": "Ukraine / Deutschland",
        "musicians-perc-p2-chair": "Schlagwerk",
        "musicians-perc-p2-bio": "Vielseitiger Schlagwerker an kleiner Trommel, Becken, großer Trommel und melodischen Mallet-Instrumenten.",

        /* Audition Banner */
        "musicians-audition-tag": "Probespiele & Besetzung",
        "musicians-audition-title": "Spielen Sie im Berlinischen Sinfonieorchester",
        "musicians-audition-desc": "Sind Sie eine versierte Instrumentalistin oder ein versierter Instrumentalist in Berlin? Wir führen fortlaufend Video-Probespiele und projektspezifische Ausschreibungen für Streicher, Holz-, Blechbläser und Schlagwerk durch.",
        "musicians-audition-btn": "Dem Orchester Beitreten &rarr;",

        /* --- PARTNERS.HTML: PARTNER & FÖRDERER --- */
        "partners-hero-tag": "Allianzen & Fördernetzwerk",
        "partners-page-title": "Partner & Förderer",
        "partners-intro": "Wir danken den Stiftungen, Unternehmenssponsoren, öffentlichen Institutionen und Kulturpartnern von Herzen, deren kontinuierliche und historische Unterstützung unsere sinfonischen Spielzeiten ermöglicht.",
        "partners-sec1-tag": "Öffentlicher & Kultureller Sektor",
        "partners-sec1-title": "Institutionelle & Spielstätten-Partner",
        "partners-sec2-tag": "Wirtschaft & Philanthropie",
        "partners-sec2-title": "Unternehmenssponsoren & Stiftungen",
        "partners-sec3-tag": "Medien & Öffentlichkeit",
        "partners-sec3-title": "Medien- & Community-Partner",
        "partners-cta-tag": "Unternehmenspartnerschaft",
        "partners-cta-title": "Verbinden Sie Ihre Marke mit sinfonischer Exzellenz",
        "partners-cta-desc": "Verbinden Sie Ihre Organisation mit herausragenden künstlerischen Leistungen und gesellschaftlicher Wirkung in Berlin. Wir bieten maßgeschneiderte Sponsoring-Pakete, VIP-Empfänge und internationale Markenpräsenz.",
        "partners-cta-btn-support": "Partnerschaftsmodelle Entdecken &rarr;",
        "partners-cta-btn-contact": "Geschäftsstelle Kontaktieren",

        /* --- PAST-CONCERTS.HTML: VERGANGENE KONZERTE & ARCHIV --- */
        "past-hero-tag": "Archiv & Rückblick",
        "past-page-title": "Vergangene Konzerte",
        "past-intro": "Eine Chronik früherer Spielzeiten, sinfonischer Meilensteine und Archivaufnahmen aus den Berliner Konzertsälen.",
        "past-filter-all": "Alle Spielzeiten",
        "past-filter-25-26": "Saison 2025/2026",
        "past-filter-24-25": "Eröffnungssaison 2024/2025",
        
        /* Evento 1 (Mayo 2026) */
        "past-e1-month": "MAI",
        "past-e1-tag": "Romantisches Repertoire",
        "past-e1-title": "Brahms: Sinfonie Nr. 1 c-Moll & Akademische Festouvertüre",
        "past-e1-w1": "<strong>J. Brahms:</strong> <em>Akademische Festouvertüre</em>, op. 80",
        "past-e1-w2": "<strong>J. Brahms:</strong> <em>Sinfonie Nr. 1 c-Moll</em>, op. 68",
        "past-e1-conductor": "<strong>Dirigent:</strong> Daniel Alejandro López",
        "past-e1-orchestra": "<strong>Orchester:</strong> Berlinisches Sinfonieorchester",
        
        /* Evento 2 (Febrero 2026) */
        "past-e2-month": "FEB",
        "past-e2-tag": "Wintergala",
        "past-e2-title": "Mozart & Tschaikowski: Serenaden für Streicher",
        "past-e2-w1": "<strong>W. A. Mozart:</strong> <em>Serenade Nr. 13 G-Dur</em>, KV 525 „Eine kleine Nachtmusik“",
        "past-e2-w2": "<strong>P. I. Tschaikowski:</strong> <em>Serenade für Streicher C-Dur</em>, op. 48",
        "past-e2-conductor": "<strong>Dirigent:</strong> Daniel Alejandro López",
        "past-e2-ensemble": "<strong>Ensemble:</strong> Streichersolisten des BSO",
        
        /* Evento 3 (Noviembre 2025 - Gala Inaugural) */
        "past-e3-month": "NOV",
        "past-e3-tag": "Eröffnungskonzert",
        "past-e3-title": "Eröffnungsgala: Dvořák Sinfonie Nr. 9 „Aus der Neuen Welt“",
        "past-e3-w1": "<strong>G. Rossini:</strong> <em>Wilhelm Tell Ouvertüre</em>",
        "past-e3-w2": "<strong>A. Dvořák:</strong> <em>Sinfonie Nr. 9 e-Moll</em>, op. 95 „Aus der Neuen Welt“",
        "past-e3-conductor": "<strong>Dirigent:</strong> Daniel Alejandro López",
        "past-e3-orchestra": "<strong>Orchester:</strong> Berlinisches Sinfonieorchester",

        /* Botones y Badges Comunes */
        "past-badge-archived": "Archivierte Aufführung",
        "past-badge-milestone": "Meilenstein-Konzert",
        "past-btn-watch": "<i class=\"fa-solid fa-play\"></i> Höhepunkte ansehen",
        "past-btn-listen": "<i class=\"fa-solid fa-headphones\"></i> Audio anhören",
        "past-btn-gallery": "<i class=\"fa-regular fa-image\"></i> Fotogalerie",

        /* Banner Final */
        "past-banner-tag": "Live-Erlebnis",
        "past-banner-title": "Erleben Sie unsere aktuelle Konzertsaison",
        "past-banner-desc": "Erleben Sie die kommenden sinfonischen Meisterwerke der Saison 2026 live in den traditionsreichen Konzertsälen Berlins.",
        "past-banner-btn": "Aktuelle Veranstaltungen ansehen &rarr;",

        /* --- PHOTOS.HTML: FOTOGALERIE --- */
        "photos-hero-tag": "Visuelle Chronik",
        "photos-page-title": "Fotogalerie",
        "photos-intro": "Fotografische Impressionen aus unseren Konzerten, Proben und Backstage-Momenten in Berlin.",
        
        /* Fotos & Bildunterschriften */
        "photos-p1-title": "Eröffnungsgala-Konzert",
        "photos-p2-title": "Konzentration in der Generalprobe",
        "photos-p3-title": "Streichersektion im Einklang",
        "photos-p4-title": "Backstage-Vorbereitung",
        "photos-p4-venue": "Solisten & Konzertmeisterin",
        "photos-p5-title": "Stehende Ovationen",
        "photos-p5-venue": "Saisonfinale | Konzerthaus Berlin",

        /* --- PRIVACY.HTML: DATENSCHUTZERKLÄRUNG (DSGVO) --- */
        "privacy-hero-tag": "Datenschutz & Privatsphäre",
        "privacy-page-title": "Datenschutzerklärung",
        "privacy-sub-intro": "Informationen zur Datenverarbeitung gemäß der EU-Datenschutz-Grundverordnung (DSGVO / GDPR).",
        "privacy-sec1-title": "1. Verantwortliche Stelle",
        "privacy-sec1-intro": "Verantwortlicher für die Datenverarbeitung auf dieser Website ist:",
        "privacy-sec1-board": "Vertreten durch den geschäftsführenden Vorstand (§ 26 BGB):",
        "privacy-sec1-daniel-role": "(Vorsitzender / President)",
        "privacy-sec1-gabriela-role": "(Schatzmeisterin / Treasurer)",
        
        "privacy-sec2-title": "2. Grundsätzliche Hinweise & SSL/TLS-Verschlüsselung",
        "privacy-sec2-p1": "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
        "privacy-sec2-p2": "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen oder Audition-Einsendungen, eine <strong>SSL/TLS-Verschlüsselung</strong>. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von <code>http://</code> auf <code>https://</code> wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.",
        
        "privacy-sec3-title": "3. Datenerfassung auf unserer Website",
        "privacy-sec3-logs-title": "Server-Log-Dateien",
        "privacy-sec3-logs-text": "Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse). Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung einer fehlerfreien und sicheren Bereitstellung der Website.",
        "privacy-sec3-contact-title": "Kontaktformular, Auditions & Mitgliedschaften",
        "privacy-sec3-contact-p1": "Wenn Sie uns per Kontaktformular (z. B. für allgemeine Anfragen, Auditions / Probespiele oder Mitgliedsanträge im Förderverein) Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
        "privacy-sec3-contact-p2": "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung Ihres Anliegens).",
        
        "privacy-sec4-title": "4. Externe Dienste & Medien",
        "privacy-sec4-yt-title": "YouTube-Einbettung",
        "privacy-sec4-yt-text": "Unsere Website bettet Videos von YouTube ein (Betreiber: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Wir nutzen YouTube im erweiterten Datenschutzmodus (<code>youtube-nocookie.com</code>), sodass erst beim Abspielen des Videos Daten an YouTube übertragen werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Interesse an einer ansprechenden Darstellung unseres künstlerischen Schaffens).",
        "privacy-sec4-pay-title": "Zahlungsdienste & Spenden (PayPal / Banküberweisung)",
        "privacy-sec4-pay-text": "Auf unserer Website (unter <em>Support the Vision</em>) bieten wir die Möglichkeit, Förderbeiträge oder Spenden via PayPal oder Banküberweisung zu leisten. Anbieter von PayPal ist die PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg. Bei Zahlung werden die eingegebenen Zahlungsdaten auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO an PayPal übermittelt.",
        
        "privacy-sec5-title": "5. Ihre Rechte als betroffene Person",
        "privacy-sec5-intro": "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:",
        "privacy-sec5-li1": "<strong>Auskunft (Art. 15 DSGVO):</strong> Kostenlose Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung.",
        "privacy-sec5-li2": "<strong>Berichtigung (Art. 16 DSGVO):</strong> Berichtigung unrichtiger oder unvollständiger Daten.",
        "privacy-sec5-li3": "<strong>Löschung (Art. 17 DSGVO):</strong> Löschung Ihrer bei uns gespeicherten Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
        "privacy-sec5-li4": "<strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.",
        "privacy-sec5-li5": "<strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Aushändigung der Daten in einem strukturierten, gängigen und maschinenlesbaren Format.",
        "privacy-sec5-li6": "<strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Widerspruch gegen die Verarbeitung Ihrer Daten aus Gründen, die sich aus Ihrer besonderen Situation ergeben.",
        "privacy-sec5-li7": "<strong>Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO):</strong> Beschwerderecht bei der zuständigen Aufsichtsbehörde: <em>Berliner Beauftragte für Datenschutz und Informationsfreiheit</em>.",
        "privacy-sec5-outro": "Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter <a href=\"mailto:info@berlinisches-sinfonieorchester.de\">info@berlinisches-sinfonieorchester.de</a> an uns wenden.",

        /* --- PROGRAM.HTML: SAISON 2026 & KONZERTKALENDER --- */
        "program-hero-tag": "Konzertsaison",
        "program-page-title": "Saison 2026",
        "program-intro": "Entdecken Sie unsere sinfonischen Programme in den renommierten Konzertsälen Berlins. Von monumentalen Meisterwerken der Klassik bis zu festlichen Filmmusik-Galas.",
        "program-filter-all": "Alle Konzerte",
        "program-filter-symphonic": "Sinfonische Reihe",
        "program-filter-special": "Sondergalas",
        "program-filter-chamber": "Kammermusik-Reihe",
        
        /* Evento 1 (Octubre 2026 - Beethoven) */
        "program-e1-month": "OKT",
        "program-e1-tag": "Sinfonische Reihe",
        "program-e1-title": "Beethoven: Sinfonie Nr. 3 Es-Dur „Eroica“",
        "program-e1-w1": "<strong>L. v. Beethoven:</strong> <em>Egmont-Ouvertüre</em>, op. 84",
        "program-e1-w2": "<strong>L. v. Beethoven:</strong> <em>Sinfonie Nr. 3 Es-Dur</em>, op. 55 „Eroica“",
        "program-e1-conductor": "<strong>Dirigent:</strong> Daniel Alejandro López",
        "program-e1-orchestra": "<strong>Orchester:</strong> Berlinisches Sinfonieorchester",
        
        /* Evento 2 (Noviembre 2026 - Mendelssohn) */
        "program-e2-month": "NOV",
        "program-e2-tag": "Romantische Reihe",
        "program-e2-title": "Mendelssohn: „Schottische“ Sinfonie Nr. 3",
        "program-e2-w1": "<strong>F. Mendelssohn:</strong> <em>Die Hebriden (Fingalshöhle)</em>, op. 26",
        "program-e2-w2": "<strong>F. Mendelssohn:</strong> <em>Sinfonie Nr. 3 a-Moll</em>, op. 56 „Schottische“",
        "program-e2-conductor": "<strong>Dirigent:</strong> Daniel Alejandro López",
        "program-e2-soloist": "<strong>Solist:</strong> Gast-Violinsolist (wird noch bekannt gegeben)",
        
        /* Evento 3 (Diciembre 2026 - Hollywood Gala) */
        "program-e3-month": "DEZ",
        "program-e3-tag": "Sondergala",
        "program-e3-title": "The Sound of Cinema: Hollywood in Berlin",
        "program-e3-w1": "<strong>Ausgewählte Filmmusiken von:</strong> John Williams, Hans Zimmer, Ennio Morricone & Bernard Herrmann",
        "program-e3-conductor": "<strong>Dirigent:</strong> Daniel Alejandro López",
        "program-e3-orchestra": "<strong>Orchester:</strong> Berlinisches Sinfonieorchester",
        
        /* Evento 4 (Diciembre 2026 - Barock) */
        "program-e4-month": "DEZ",
        "program-e4-tag": "Kammermusik-Reihe",
        "program-e4-title": "Winterbarock: Corelli, Vivaldi & Bach",
        "program-e4-w1": "<strong>A. Corelli:</strong> <em>Weihnachtskonzert</em>, op. 6 Nr. 8",
        "program-e4-w2": "<strong>A. Vivaldi:</strong> <em>Konzert für zwei Violinen a-Moll</em>, RV 522",
        "program-e4-w3": "<strong>J. S. Bach:</strong> <em>Brandenburgisches Konzert Nr. 3 G-Dur</em>, BWV 1048",
        "program-e4-ensemble": "<strong>Ensemble:</strong> Solisten des Berlinischen Sinfonieorchesters",

        /* Estados de Entradas y Botones */
        "program-status-available": "Karten Verfügbar",
        "program-status-presale": "Vorverkauf startet in Kürze",
        "program-status-soldout": "Ausverkauft",
        "program-btn-tickets": "Karten Kaufen &rarr;",
        "program-btn-inquire": "Anfragen / Warteliste",
        "program-btn-soldout": "Ausverkauft",

        /* Banner Final */
        "program-banner-tag": "Exklusiver Förderer-Zugang",
        "program-banner-title": "Besuchen Sie Proben & Sichern Sie Sich Vorzugsplätze",
        "program-banner-desc": "Mitglieder unseres Freundeskreises und Mäzenatenkreises erhalten bevorzugte Buchungszeiträume und persönliche Einladungen zu Generalproben in Berlin.",
        "program-banner-btn": "Vision Fördern &rarr;",

        /* --- PROJECT.HTML: DAS PROJEKT & MISSION --- */
        "project-hero-tag": "Identität & Vision",
        "project-page-title": "Das Projekt",
        "project-intro": "Das Berlinische Sinfonieorchester e.V. ist ein unabhängiger Klangkörper in Berlin, der künstlerische Exzellenz, gesellschaftliche Transformation und internationales musikalisches Erbe vereint.",
        
        "project-story-tag": "Unser Ursprung",
        "project-story-title": "Sinfonische Kunst im Herzen Berlins Neu Gedacht",
        "project-story-lead": "Berlin zählt zu den weltweit bedeutendsten Hauptstädten orchestraler Tradition. In diesem lebendigen Ökosystem wurde das Berlinische Sinfonieorchester mit einer klaren Mission gegründet: eine agile, leidenschaftliche und offene sinfonische Plattform zu schaffen, die tiefes klassisches Erbe mit zeitgenössischem Kulturleben verbindet.",
        "project-story-p": "Verwurzelt im pädagogischen und sozialen Geist von <em>El Sistema</em> versteht sich unser Ensemble nicht bloß als Aufführungskörper, sondern als gelebte Gemeinschaft, getragen von Solidarität, disziplinierter Hingabe und geteilter künstlerischer Vision.",
        "project-story-quote": "«Ein Orchester ist ein lebendiges Laboratorium menschlicher Einheit, in dem individuelle Stimmen über sich hinauswachsen, um eine erhabene gemeinsame Harmonie zu formen.»",
        
        "project-pillars-tag": "Grundwerte",
        "project-pillars-title": "Fundamente Unserer Arbeit",
        "project-pillar1-title": "Künstlerische Exzellenz",
        "project-pillar1-desc": "Wir nähern uns kanonischen Meisterwerken – von Beethoven und Brahms bis Dvořák – mit frischer interpretatorischer Energie und widmen uns ebenso Filmmusiken, zeitgenössischem Repertoire und genreübergreifenden Auftragswerken.",
        "project-pillar2-title": "Professionelle Plattform",
        "project-pillar2-desc": "Wir bilden eine Brücke zwischen anspruchsvoller Hochschulausbildung und dem professionellen Orchesterbetrieb, indem wir herausragenden Nachwuchsmusikern hochkarätige Bühnenerfahrung ermöglichen.",
        "project-pillar2-link": "Unser Orchester-Roster kennenlernen &rarr;",
        "project-pillar3-title": "Kulturelle Integration",
        "project-pillar3-desc": "Berlin ist eine Heimat globaler Kulturen. Unsere Musiker spiegeln internationale Lebenswege wider, fördern den interkulturellen Dialog und machen sinfonische Musik in der gesamten Stadt zugänglich.",
        
        "project-inst-tag": "Rechtlicher Rahmen & Struktur",
        "project-inst-p1": "Das Orchester ist als eingetragener Verein (<em>e. V.</em>) nach deutschem Recht organisiert und wegen der Förderung von Kunst und Kultur als gemeinnützig anerkannt.",
        "project-inst-p2": "Geleitet wird der Verein von einem gewählten geschäftsführenden Vorstand und einem künstlerischen Beirat, die sich steuerlicher Transparenz, musikalischer Qualität und nachhaltiger Kulturentwicklung verpflichten.",
        "project-inst-btn-board": "Vorstand & Struktur &rarr;",
        "project-inst-btn-director": "Musikdirektor kennenlernen &rarr;",
        
        "project-badge-title": "Gemeinnütziger Kulturverein",
        "project-badge-li1": "Eingetragen in Berlin, Deutschland",
        "project-badge-li2": "Steuerlich abzugsfähige Zuwendungen",
        "project-badge-li3": "Transparente Vereinsführung",
        "project-badge-btn": "Unsere Vision Fördern &rarr;",

        /* --- SUPPORT-VISION.HTML: FÖRDERUNG & MECENAZGO --- */
        "support-hero-tag": "Philanthropie & Wirkung",
        "support-page-title": "Die Vision Fördern",
        "support-intro": "Musik ist mehr als bloße Aufführung; sie ist ein Katalysator für gesellschaftliche Veränderung. Durch Ihre Unterstützung des Berlinischen Sinfonieorchesters e. V. fördern Sie außergewöhnliche Nachwuchsmusiker, stärken die kulturelle Integration in Berlin und tragen eine kompromisslose sinfonische Exzellenz.",
        
        /* 3 Säulen */
        "support-impact-1-title": "Künstlerische Perspektiven",
        "support-impact-1-desc": "Wir bieten eine erstklassige Plattform und professionelle Entwicklung für außergewöhnliche Musiker und schlagen eine Brücke von der Akademie auf die internationale Konzertbühne.",
        "support-impact-2-title": "Soziale Transformation",
        "support-impact-2-desc": "Verwurzelt in der Philosophie von <em>El Sistema</em> nutzen wir die verbindende Disziplin orchestralen Musizierens, um vielfältige Kulturen in Berlin zusammenzuführen.",
        "support-impact-3-title": "Kulturelle Lebendigkeit",
        "support-impact-3-desc": "Von den traditionsreichen Konzertsälen Berlins bis zu Open-Air-Aufführungen im öffentlichen Raum bringen wir sinfonische Musik nah an das heutige Publikum.",

        /* Förderkreise (Pillars of Patronage) */
        "support-tiers-tag": "Werden Sie Teil des Kreises",
        "support-tiers-title": "Säulen des Mäzenatentums",
        
        "support-t1-tag": "Individuelle Förderung",
        "support-t1-name": "Freundeskreis",
        "support-t1-focus": "Jährlicher Förderbeitrag",
        "support-t1-desc": "Ideal für engagierte Konzertbesucher, die das Orchester eng auf seinem künstlerischen Saisonweg begleiten möchten.",
        "support-t1-b1": "Bevorzugtes Buchungsfenster für alle Saisonkonzerte.",
        "support-t1-b2": "Namentliche Nennung in unseren gedruckten Konzertprogrammen.",
        "support-t1-b3": "Exklusive Förderer-Berichte des Musikdirektors.",
        "support-t1-btn-join": "Per Anfrage beitreten",
        "support-t1-btn-paypal": "<i class=\"fa-brands fa-paypal\"></i> Mit PayPal spenden",

        "support-t2-badge": "Hauptförderer",
        "support-t2-tag": "Nachhaltiges Mäzenatentum",
        "support-t2-name": "Mäzenatenkreis",
        "support-t2-focus": "Künstlerische & Pultpatenschaften",
        "support-t2-desc": "Fördert gezielt einzelne Orchesterstimmen, Meisterkurse und anspruchsvolle sinfonische Eigenproduktionen.",
        "support-t2-b1": "Alle Vorzüge des Freundeskreises.",
        "support-t2-b2": "Einladungen zu nicht-öffentlichen Generalproben im Konzerthaus & in der Philharmonie.",
        "support-t2-b3": "Persönliche Empfänge mit Dirigent, Solisten und Orchestermitgliedern.",
        "support-t2-btn-join": "Mäzen Werden &rarr;",

        "support-t3-tag": "Institutionell",
        "support-t3-name": "Unternehmen & Stiftungen",
        "support-t3-focus": "Strategische Kulturallianz",
        "support-t3-desc": "Maßgeschneiderte Partnerschaften für Unternehmen und Stiftungen mit Interesse an nachhaltigem gesellschaftlichem Engagement in Berlin.",
        "support-t3-link": "Aktuelles Partnernetzwerk ansehen &rarr;",
        "support-t3-b1": "Präsentative Logopräsenz auf allen Print-, Digital- und Medienpublikationen.",
        "support-t3-b2": "VIP-Kartenkontingente und exklusive Empfangsmöglichkeiten.",
        "support-t3-b3": "Kammermusik-Ensembles für institutionelle und unternehmerische Anlässe.",
        "support-t3-btn-join": "Partnerschaft Anfragen &rarr;",

        /* Satzung */
        "support-trans-tag": "Führung & Transparenz",
        "support-trans-title": "Gemeinnützige Integrität",
        "support-trans-card-title": "Vereinssatzung",
        "support-trans-card-desc": "Offizielle Satzung und Richtlinien zur gemeinnützigen Vereinsführung des Berlinischen Sinfonieorchesters e. V.",
        "support-trans-card-btn": "PDF Herunterladen <i class=\"fa-solid fa-arrow-down\"></i>",

        /* Steuern & Bankdaten */
        "support-tax-title": "Steuerliche Abzugsfähigkeit",
        "support-tax-desc": "Das Berlinische Sinfonieorchester e. V. ist als gemeinnützige Körperschaft anerkannt. Alle Spenden und Förderbeiträge sind im Rahmen des deutschen Steuerrechts voll abzugsfähig. Eine offizielle Zuwendungsbestätigung (<em>Spendenbescheinigung</em>) wird für alle Zuwendungen ausgestellt.",
        "support-bank-title": "Direkte Banküberweisung",
        "support-bank-holder": "Kontoinhaber:",
        "support-bank-divider": "oder Sofortüberweisung",
        "support-paypal-btn": "<i class=\"fa-brands fa-paypal\"></i> Über PayPal Spenden",
        "support-paypal-note": "Kreditkarte, Lastschrift & PayPal-Guthaben möglich.",

        /* Formulario de Contacto */
        "support-form-tag": "Direkter Dialog",
        "support-form-title": "Das Gespräch Beginnen",
        "support-form-lead": "Möchten Sie das Orchester fördern, eine Stimmgruppenpatenschaft übernehmen oder eine institutionelle Partnerschaft begründen? Lassen Sie uns wissen, wie Sie sich engagieren möchten.",
        "support-form-label-name": "Vollständiger Name / Ansprechpartner *",
        "support-form-label-email": "E-Mail-Adresse *",
        "support-form-label-org": "Organisation / Unternehmen (Optional)",
        "support-form-label-cat": "Förderkategorie *",
        "support-form-opt-friends": "Freundeskreis",
        "support-form-opt-patrons": "Mäzenatenkreis",
        "support-form-opt-corp": "Unternehmens- & Stiftungspartnerschaft",
        "support-form-opt-donation": "Individuelle Spende / Eigener Beitrag",
        "support-form-opt-other": "Sonstige Anfrage",
        "support-form-label-msg": "Nachricht / Vision *",
        "support-form-btn-submit": "Förderanfrage Absenden —",

        /* --- VIDEOS.HTML: VIDEOGALERIE & HIGHLIGHTS --- */
        "videos-hero-tag": "Audiovisuelles Archiv",
        "videos-page-title": "Video-Höhepunkte",
        "videos-intro": "Konzertmitschnitte, Einblicke hinter die Kulissen und musikalische Höhepunkte des Berlinischen Sinfonieorchesters in Berlin.",
        
        /* Video 1 (Schubert) */
        "videos-v1-tag": "Empfohlene Aufnahme | Admiralspalast",
        "videos-v1-title": "Schubert: Sinfonie Nr. 8 h-Moll „Unvollendete“ (I. Allegro moderato)",
        "videos-v1-meta": "Dirigent: Daniel Alejandro López | Eröffnungsgala",

        /* Video 2 (Beethoven) */
        "videos-v2-tag": "Konzerthaus Berlin",
        "videos-v2-title": "Beethoven: Sinfonie Nr. 3 Es-Dur „Eroica“ (I. Allegro con brio)",
        "videos-v2-meta": "Konzertmitschnitt | Mai 2025",

        /* Video 3 (Castellanos) */
        "videos-v3-tag": "Berliner Philharmonie",
        "videos-v3-title": "E. Castellanos: El río de las siete estrellas",
        "videos-v3-meta": "Konzert | März 2025",

        /* Video 4 (Dokumentation) */
        "videos-v4-tag": "Dokumentation",
        "videos-v4-title": "Die Entstehung eines unabhängigen Orchesters in Berlin",
        "videos-v4-meta": "Blick hinter die Kulissen & Probeneinblicke mit Musikdirektor Daniel Alejandro López"



    },
    en: {
        /* --- NAVEGACIÓN GLOBAL & HEADER --- */
        home: "Home",
        about: "About us",
        project: "The project",
        musicians: "Musicians",
        director: "Music Director",
        board: "Artistic Board",
        calendar: "Calendar",
        upcoming: "Upcoming events",
        past: "Past concerts",
        gallery: "Gallery",
        audios: "Audios",
        videos: "Videos",
        photos: "Photos",
        support: "Support us",
        partners: "Partnerships",
        membership: "Support the Vision",
        contact: "Contact",
        hero: "Berlinisches Sinfonieorchester",

        /* --- INDEX.HTML: HERO & SEASON SLIDER --- */
        "hero-subtitle": "The New Sound of Berlin",
        "program-tag": "Program",
        "season-title": "Season 2026",
        "tag-next-concert": "Next Concert",
        "concert-1-title": "Beethoven: Symphony No. 3 \"Eroica\"",
        "concert-1-info": "Konzerthaus Berlin | Oct 24, 2026 | 20:00",
        "btn-get-tickets": "Get Tickets",
        "tag-romantic-series": "Romantic Series",
        "concert-2-title": "Mendelssohn: \"Scottish\" Symphony No. 3",
        "concert-2-info": "Berliner Philharmonie | Nov 15, 2026 | 19:30",
        "tag-special-gala": "Special Gala",
        "concert-3-title": "The Sound of Cinema: Hollywood in Berlin",
        "concert-3-info": "Admiralspalast | Dec 05, 2026 | 21:00",
        "tag-season-cta": "Season 2026",
        "season-cta-title": "Complete Repertoire & Dates —",
        "season-cta-desc": "Discover every performance for this year.",
        "btn-explore-season": "Explore Full Season",

        /* --- INDEX.HTML: MISSION / ABOUT TEASER --- */
        "mission-tag": "Since 2026",
        "mission-title": "Our Mission",
        "mission-desc": "Inspired by the social power of <strong>El Sistema</strong> and fueled by the energy of the global diaspora, the Berlinisches Sinfonieorchester is a living laboratory in the heart of Berlin. We bridge the gap between artistic talent and professional opportunity, creating an open ground where musicians from all backgrounds meet to redefine the symphonic experience. Here, every story becomes a universal chord, proving that music is the only language without borders.",
        "btn-more-about": "More About Us",
        "recruitment-prelude": "Seeking extraordinary talent.",
        "btn-join-orchestra": "Join the Orchestra —",

        /* --- INDEX.HTML: HIGHLIGHTS & ARCHIVE --- */
        "archives-tag": "Archives",
        "highlights-title": "Recent Highlights",
        "badge-sold-out": "Sold Out",
        "highlight-1-title": "Lustgarten Flashmob",
        "highlight-1-info": "Berlin | July 2026",
        "highlight-2-title": "Chamber Sessions",
        "highlight-2-info": "Berlin | May 2026",
        "archive-explore-link": "Explore our full archive",

        /* --- FOOTER GLOBAL & PRE-FOOTER --- */
        "supported-by": "In partnership with",
        "support-vision": "Support the vision",
        "impressum": "Legal Notice",
        "privacy": "Privacy Policy",
        "footer-copyright": "© 2026 Berlinisches Sinfonieorchester e.V. All rights reserved.",
        "footer-designer-credit": "Web Design by",

        /* --- AUDIOS.HTML: ARCHIVO DE AUDIO --- */
        "audio-hero-tag": "Audio Archive",
        "audio-page-title": "Selected Recordings",
        "audio-intro": "Listen to master audio cuts and live recordings from the Berlinisches Sinfonieorchester archive.",
        "audio-1-tag": "Live Recording | Konzerthaus Berlin",
        "audio-1-title": "Johannes Brahms: Symphony No. 1 in C minor, Op. 68 (IV. Adagio - Allegro non troppo)",
        "audio-1-artists": "Conducted by Daniel Alejandro López | Berlinisches Sinfonieorchester",
        "audio-2-tag": "Chamber Recording | Berliner Philharmonie",
        "audio-2-title": "P. I. Tchaikovsky: Serenade for Strings in C major, Op. 48 (I. Pezzo in forma di sonatina)",
        "audio-2-artists": "BSO String Ensemble | Live Concert Series",
        "audio-3-tag": "Inaugural Gala | Admiralspalast",
        "audio-3-title": "Gioachino Rossini: William Tell Overture (Finale)",
        "audio-3-artists": "Conducted by Daniel Alejandro López | Berlinisches Sinfonieorchester",

        /* --- BOARD.HTML: BOARD & TEAM --- */
        "board-hero-tag": "People Behind the Music",
        "board-page-title": "The Board & Team",
        "board-intro": "Behind the rehearsals and concert halls is a close-knit group of musicians, organizers, and creators dedicated to building an inspiring, open home for orchestral music in Berlin.",
        
        /* Daniel López Piepoli */
        "board-daniel-tag": "Music Direction",
        "board-daniel-role": "President, Artistic & Music Director",
        "board-daniel-lead": "Daniel founded the Berlinisches Sinfonieorchester with a clear belief: that an orchestra should be a vibrant, welcoming community where exceptional musical rigor meets genuine human connection.",
        "board-daniel-bio": "As President and Music Director, he shapes the orchestra's artistic vision, conducts our season programs, and builds partnerships with Berlin’s cultural venues. He works closely with musicians across the city to scout talent, curate bold repertoire, and ensure the project remains sustainable and true to its social and musical mission.",
        "board-daniel-btn": "Read Daniel's Conductor Biography &rarr;",
        
        /* Stella Karalis */
        "board-stella-tag": "Artistic Planning",
        "board-stella-role": "Vice-President & Artistic Planning Director",
        "board-stella-lead": "Stella is the vital bridge between musical ideas and their stage execution, bringing tireless energy and a keen artistic ear to every production.",
        "board-stella-bio": "Working side by side with the Music Director, Stella helps curate and balance our concert programs, assesses audition recordings, and uses her extensive network to recruit outstanding instrumentalists for our roster. She also oversees the critical logistics of sheet music research, edition licensing, and digital score distribution.",
        
        /* Gabriela Jose González */
        "board-gabriela-tag": "Finance & Growth",
        "board-gabriela-role": "Treasurer",
        "board-gabriela-lead": "Gabriela protects the sustainability and transparent heartbeat of the orchestra, making sure great artistic ideas are backed by solid financial grounding.",
        "board-gabriela-bio": "As Treasurer, she coordinates annual budget forecasting, tracks concert production expenses, and oversees the association’s non-profit fiscal compliance. Her careful management ensures that every contribution from our patrons and ticket holders directly powers our musicians and concert productions.",
        
        /* Ebru Algül */
        "board-ebru-tag": "Musician Relations",
        "board-ebru-role": "Secretary & Chief of Communications",
        "board-ebru-lead": "Ebru is the voice that keeps our ensemble connected, fostering open dialogue, community warmth, and seamless coordination.",
        "board-ebru-bio": "She manages internal communication channels with our musicians, gathers feedback from the orchestra sections, and advises the artistic team on instrument logistics for unusual orchestrations. As Secretary, she also maintains the official legal documentation, meeting records, and administrative statutes of the association.",
        
        /* Isabel Barciela */
        "board-isabel-tag": "Audit & Compliance",
        "board-isabel-role": "Auditor",
        "board-isabel-lead": "Isabel provides an independent, meticulous eye to guarantee our adherence to ethical standards and non-profit integrity.",
        "board-isabel-bio": "Her role as Kassenprüferin ensures that the orchestra’s books, bank movements, and fiscal reports strictly follow German statutory law for non-profit entities (<em>gemeinnütziger Verein</em>), giving our members, sponsors, and grantmakers total peace of mind.",
        
        /* Community Banner */
        "board-community-tag": "Join Our Journey",
        "board-community-title": "An Open, Welcoming Community",
        "board-community-desc": "Whether you are an orchestral musician looking to play with us, a concert lover wishing to join our Friends Circle, or an institution seeking cultural collaboration, we would love to connect.",
        "board-community-btn-join": "Join the Orchestra &rarr;",
        "board-community-btn-support": "Support the Vision",

        /* --- CONTACT.HTML: CONTACT & INQUIRIES --- */
        "contact-hero-tag": "Direct Communication",
        "contact-page-title": "Get in Touch",
        "contact-intro": "For general inquiries, musician auditions, or press relations, write to our management in Berlin using the form below or via direct email.",
        "contact-office-title": "Central Office",
        "contact-office-city": "Berlin, Germany",
        "contact-audition-title": "Audition Submissions",
        "contact-audition-desc": "When contacting us regarding open positions or guest soloist engagements, please include links to unedited recordings and your musical resume.",
        "contact-support-tag": "Philanthropy & Partnerships",
        "contact-support-title": "Looking to Support Our Vision?",
        "contact-support-desc": "If you represent a corporate sponsor, foundation, or wish to become a patron, explore our dedicated support programs.",
        "contact-support-btn": "Explore Support Options &rarr;",
        
        /* Contact Form */
        "contact-label-name": "Full Name *",
        "contact-label-email": "Email Address *",
        "contact-label-topic": "Inquiry Topic *",
        "contact-opt-general": "General Inquiry & Ticketing",
        "contact-opt-join": "Musicians & Audition Inquiry",
        "contact-opt-press": "Press & Media Relations",
        "contact-opt-other": "Other",
        "contact-audition-welcome-title": "We are eager to discover your artistry and create music together.",
        "contact-audition-welcome-subtitle": "Tell us about your musical journey and share your recent performance links below.",
        "contact-label-instrument": "Primary Instrument *",
        "contact-label-portfolio": "Video / Audio Portfolio (URL)",
        "contact-label-subject": "Subject",
        "contact-label-message": "Message *",
        "contact-btn-submit": "Send Message —",

        /* --- DIRECTOR.HTML: MUSIC DIRECTOR & BIOGRAPHY --- */
        "director-hero-tag": "Artistic Leadership",
        "director-hero-subtitle": "Music Director & Founder",
        "director-kicker": "Biography",
        "director-title": "An Innate Communicator with Contagious Charisma",
        "director-lead-bio": "<strong>Daniel López Piepoli</strong> (Venezuela, 1996) is an Italian-Venezuelan conductor currently based in Berlin, Germany. He trained as a Conductor in his native country, Venezuela, in <em>El Sistema</em>, the music education program initiated by maestro José Antonio Abreu. Besides his enthusiastic artistic vision and academic preparation, he has a natural affinity for languages (conversational in English, Spanish, Italian, Portuguese, and French).",
        "director-bio-p1": "Daniel’s artistry is portrayed by remarkable vivacity, sensitivity, and enthusiasm, which led him to win the <strong>3rd Prize in the New York Classical Music Competition (USA)</strong>, to be <strong>semi-finalist in the 2nd Italian International Conducting Competition in Bordighera (Italy)</strong> and <strong>finalist in the International Artists Competition (Austria)</strong> in 2023, year in which he made his debut in Italy with the Youth Strings Orchestra “Note Libere” of Sanremo.",
        "director-bio-p2": "In the same year, he participated in the 5th BMI International Conducting Competition with the Bucharest Symphony (Romania) and in the inaugural edition of the “Borislav Ivanov” International Competition for Young Conductors with the Varna State Opera (Bulgaria) as the only Latin American and representative of the American continent selected. Recently, in 2024, he was guest conductor of the <em>Anima Orchestre et Art Lyrique</em> in Paris (France).",
        "director-bio-p3": "Daniel started studying Orchestral Conducting with Ramón Moncada and Alexander Gómez, later continuing under the guidance of maestro and composer Alfredo Rugeles (former Artistic Director of the Simón Bolívar Symphony) in the National Experimental University of Arts in Caracas for the Bachelor in conducting, and Maestra Teresa Hernández (National Director of the Integral Chair of Orchestra Conducting and currently representative of El Sistema in Spain). He attended masterclasses with Dick Van Gasteren, Miguel Ángel Monroy, Alfredo Ascanio, Eddy Marcano, Régulo Stabilito, and David Cubek.",
        "director-quote": "«An orchestra is not merely an ensemble of instruments; it is a collective pulse where discipline, joy, and deep human connection converge into sound.»",
        "director-bio-p4": "As musical director, Daniel was regularly invited to conduct several orchestras in his country, such as Falcón Regional Youth Symphony, Youth Symphony Orchestra of the Music Conservatory Simón Bolívar, La Victoria Youth Symphony, San Sebastián de los Reyes Youth Symphony, Ciudad Guayana Youth Symphony, and San Antonio de Los Altos Youth Symphony, eventually being appointed as Musical Director of INOF Symphony in Los Teques, Musical Conductor in charge of the Children and Youth Symphony Orchestras of Coro, and Assistant Conductor of the Regional del Este Youth Symphony in Caracas.",
        "director-bio-p5": "Strongly influenced by his own remarkable education as part of El Sistema, Daniel has begun a community project of a symphony orchestra in Berlin (Germany), mostly formed by immigrants and refugees, based on his own trajectory as trombone player, lyrical singer, and arranger. He studied trombone in the Latin American Academy of Trombones in Caracas, participated in several festivals dictated by the Simón Bolívar Symphony Orchestra of Venezuela and was an active member of the Youth Symphony Orchestras of Coro, Falcón, Chacao, Youth Symphony Orchestra of the Music Conservatory Simón Bolívar, Falcón Brass Ensemble, and the Central University of Venezuela Symphony. Besides, he also studied International Relations in the Central University of Venezuela and is passionate about languages, having created a program to teach languages through the bases of Classical Music.",
        "director-link-website": "Visit Official Website: danielopezpiepoli.com &rarr;",
        "director-btn-project": "The Project & Vision",
        "director-btn-program": "Season 2026 Concerts",

        /* --- IMPRESSUM.HTML: STATUTORY INFORMATION --- */
        "impressum-hero-tag": "Statutory Information",
        "impressum-page-title": "Legal Notice / Impressum",
        "impressum-sub-intro": "Information pursuant to § 5 German Digital Services Act (DDG).",
        "impressum-sec1-title": "1. Entity / Website Operator",
        "impressum-sec1-legal-form": "Registered association (e. V.) under German law",
        "impressum-sec1-court": "Registration Court:",
        "impressum-sec1-reg-nr": "Registration Number:",
        "impressum-sec1-verify": "[Verify at Registerportal &rarr;]",
        "impressum-sec1-seat": "Seat of the Association:",
        "impressum-sec1-tax": "Tax ID (Tax Office for Corporations I, Berlin):",
        "impressum-sec2-title": "2. Postal Address & Direct Contact",
        "impressum-sec3-title": "3. Authorized Representation (§ 26 BGB)",
        "impressum-sec3-desc": "The association is represented judicially and extrajudicially by the executive board (each with individual representation power pursuant to the statutes):",
        "impressum-sec3-daniel-role": "(President)",
        "impressum-sec3-gabriela-role": "(Treasurer)",
        "impressum-sec3-extended": "<em>Extended Board:</em> Stella Karalis (Vice-President), Ebru Algül (Secretary).",
        "impressum-sec4-title": "4. Responsible for Content (§ 18 Para. 2 MStV)",
        "impressum-sec5-title": "5. Legal Disclaimer",
        "impressum-sec5-content-title": "Liability for Content",
        "impressum-sec5-content-text": "As a service provider, we are responsible for our own content on these pages in accordance with general statutory law pursuant to § 7 Para. 1 DDG. According to §§ 8 to 10 DDG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances indicating unlawful activity. Obligations to remove or block the use of information under general statutory law remain unaffected.",
        "impressum-sec5-links-title": "Liability for External Links",
        "impressum-sec5-links-text": "Our site contains links to external websites of third parties over whose content we have no influence. Therefore, we cannot assume any liability for such third-party content. The respective provider or operator of the linked pages is always responsible for the content.",
        "impressum-sec5-copy-title": "Copyright",
        "impressum-sec5-copy-text": "The content and works published on these pages created by the site operators are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization beyond the scope of the copyright law requires the prior written consent of the respective author or creator.",
        "impressum-sec6-title": "6. Consumer Dispute Resolution",
        "impressum-sec6-p1": "The European Commission provides a platform for online dispute resolution (ODR): <a href=\"https://ec.europa.eu/consumers/odr/\" target=\"_blank\" rel=\"noopener noreferrer\">https://ec.europa.eu/consumers/odr/</a>.",
        "impressum-sec6-p2": "We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",

        /* --- MUSICIANS.HTML: THE MUSICIANS & ROSTER --- */
        "musicians-hero-tag": "Orchestral Ensemble",
        "musicians-page-title": "The Musicians",
        "musicians-intro": "Meet the international artists, section leaders, and orchestral players who bring the sound of the Berlinisches Sinfonieorchester to life across Berlin’s concert halls.",
        "musicians-nav-strings": "Strings",
        "musicians-nav-woodwinds": "Woodwinds",
        "musicians-nav-brass": "Brass",
        "musicians-nav-percussion": "Percussion",

        /* Strings */
        "musicians-sec-strings-tag": "Section I",
        "musicians-sec-strings-title": "Strings",
        
        "musicians-sub-violins1": "First Violins",
        "musicians-vln1-p1-tag": "Section Leader",
        "musicians-vln1-p1-chair": "Concertmaster",
        "musicians-vln1-p1-bio": "Concertmaster of the BSO. Renowned for her expressive phrasing, chamber leadership, and dedication to symphonic excellence in Berlin.",
        
        "musicians-vln1-p2-tag": "Germany",
        "musicians-vln1-p2-chair": "First Violin",
        "musicians-vln1-p2-bio": "Master of Music graduate specializing in romantic and classical orchestral repertoire.",
        
        "musicians-vln1-p3-tag": "Germany",
        "musicians-vln1-p3-chair": "First Violin",
        "musicians-vln1-p3-bio": "Active chamber soloist and guest orchestral player across European festivals.",
        
        "musicians-vln1-p4-tag": "Austria",
        "musicians-vln1-p4-chair": "First Violin",
        "musicians-vln1-p4-bio": "Specialized in large-scale symphonic works and chamber sonatas.",

        "musicians-sub-violins2-violas": "Second Violins & Violas",
        "musicians-vln2-p1-tag": "Principal Chair",
        "musicians-vln2-p1-chair": "Principal Second Violin",
        "musicians-vln2-p1-bio": "Leading the second violin section with rhythmic drive and tonal balance.",
        
        "musicians-vla-p1-tag": "Principal Chair",
        "musicians-vla-p1-chair": "Principal Viola",
        "musicians-vla-p1-bio": "Rich middle-voice timbre and devoted pedagogue within Berlin's chamber ensembles.",
        
        "musicians-vla-p2-tag": "France",
        "musicians-vla-p2-chair": "Viola",
        "musicians-vla-p2-bio": "Orchestral violist focusing on modern color palettes and textural balance.",

        "musicians-sub-cellos-basses": "Violoncellos & Double Basses",
        "musicians-vc-p1-tag": "Principal Chair",
        "musicians-vc-p1-chair": "Principal Cello",
        "musicians-vc-p1-bio": "Celebrated soloist bringing lyricism and depth to the lower string core.",
        
        "musicians-vc-p2-tag": "Czechia",
        "musicians-vc-p2-chair": "Violoncello",
        "musicians-vc-p2-bio": "Ensemble cellist passionate about romantic orchestral sonorities and folk idioms.",
        
        "musicians-cb-p1-tag": "Section Leader",
        "musicians-cb-p1-chair": "Principal Double Bass",
        "musicians-cb-p1-bio": "Principal Double Bass of BSO. Solid foundation and dynamic leadership at the heart of the orchestra's acoustic architecture.",
        
        "musicians-cb-p2-tag": "Hungary",
        "musicians-cb-p2-chair": "Double Bass",
        "musicians-cb-p2-bio": "Powerful bass presence anchoring the lowest register of the symphonic body.",

        /* Woodwinds */
        "musicians-sec-woodwinds-tag": "Section II",
        "musicians-sec-woodwinds-title": "Woodwinds",
        
        "musicians-sub-flutes-oboes": "Flutes & Oboes",
        "musicians-fl-p1-tag": "Section Leader",
        "musicians-fl-p1-chair": "Principal Flute",
        "musicians-fl-p1-bio": "Principal Flute of BSO. Admired for her luminous tone, expressive agility, and versatile chamber presence in Berlin.",
        
        "musicians-fl-p2-tag": "France",
        "musicians-fl-p2-chair": "Flute / Piccolo",
        "musicians-fl-p2-bio": "Specialized in impressionistic wind colours, piccolo, and contemporary orchestral works.",
        
        "musicians-ob-p1-tag": "Principal Chair",
        "musicians-ob-p1-chair": "Principal Oboe",
        "musicians-ob-p1-bio": "Warm, focused oboe sound and specialist in English horn orchestral solos.",

        "musicians-sub-clarinets-bassoons": "Clarinets & Bassoons",
        "musicians-cl-p1-tag": "Section Leader",
        "musicians-cl-p1-chair": "Principal Clarinet",
        "musicians-cl-p1-bio": "Principal Clarinet of BSO. Distinguished for velvety cantabile lines, virtuosic flexibility, and rich tone in symphonic concert programs.",
        
        "musicians-cl-p2-tag": "Finland",
        "musicians-cl-p2-chair": "Clarinet",
        "musicians-cl-p2-bio": "Clarinet and Bass Clarinet player dedicated to Nordic and late-romantic textures.",
        
        "musicians-bn-p1-tag": "Principal Chair",
        "musicians-bn-p1-chair": "Principal Bassoon",
        "musicians-bn-p1-bio": "Master of the double reed, providing warm bassoon timbre and agile staccato clarity.",

        /* Brass */
        "musicians-sec-brass-tag": "Section III",
        "musicians-sec-brass-title": "Brass",
        "musicians-sub-brass-all": "French Horns, Trumpets, Trombones & Tuba",
        
        "musicians-hn-p1-tag": "Principal Chair",
        "musicians-hn-p1-chair": "Principal Horn",
        "musicians-hn-p1-bio": "Noble horn sound delivering heroic fanfares and tender chamber solos with equal mastery.",
        
        "musicians-tpt-p1-tag": "Principal Chair",
        "musicians-tpt-p1-chair": "Principal Trumpet",
        "musicians-tpt-p1-bio": "Crisp articulation and ringing high register across classical and modern overtures.",
        
        "musicians-tbn-p1-tag": "Principal Chair",
        "musicians-tbn-p1-chair": "Principal Trombone",
        "musicians-tbn-p1-bio": "Rich orchestral low-brass presence with wide dynamic range and cantabile legato.",
        
        "musicians-tba-p1-tag": "Principal Chair",
        "musicians-tba-p1-chair": "Principal Tuba",
        "musicians-tba-p1-bio": "Resonant symphonic tuba anchor, providing immense acoustic foundation to the brass choir.",

        /* Percussion */
        "musicians-sec-percussion-tag": "Section IV",
        "musicians-sec-percussion-title": "Percussion & Timpani",
        "musicians-timp-p1-tag": "Principal Chair",
        "musicians-timp-p1-chair": "Principal Timpani",
        "musicians-timp-p1-bio": "Pivotal orchestral motor commanding rhythmic intensity and dramatic dynamic drive from the timpanist throne.",
        
        "musicians-perc-p2-tag": "Ukraine / Germany",
        "musicians-perc-p2-chair": "Percussion",
        "musicians-perc-p2-bio": "Multi-percussionist adept at snare, cymbals, bass drum, and melodic mallet instruments.",

        /* Audition Banner */
        "musicians-audition-tag": "Auditions & Roster",
        "musicians-audition-title": "Play With Berlinisches Sinfonieorchester",
        "musicians-audition-desc": "Are you an accomplished instrumentalist living in or visiting Berlin? We continually hold video auditions and project-based calls for string, wind, brass, and percussion players.",
        "musicians-audition-btn": "Join the Orchestra &rarr;",

        /* --- PARTNERS.HTML: PARTNERS & SPONSORS --- */
        "partners-hero-tag": "Alliances & Sustaining Network",
        "partners-page-title": "Partners & Sponsors",
        "partners-intro": "We extend our profound gratitude to the foundations, corporate sponsors, public institutions, and cultural partners whose ongoing and historic backing makes our symphonic seasons possible.",
        "partners-sec1-tag": "Public & Cultural Sector",
        "partners-sec1-title": "Institutional & Venue Partners",
        "partners-sec2-tag": "Private Sector & Philanthropy",
        "partners-sec2-title": "Corporate Sponsors & Foundations",
        "partners-sec3-tag": "Media & Outreach",
        "partners-sec3-title": "Media & Community Allies",
        "partners-cta-tag": "Corporate Partnership",
        "partners-cta-title": "Associate Your Brand with Symphonic Excellence",
        "partners-cta-desc": "Align your organization with high-caliber artistic achievement and community transformation in Berlin. We offer tailored sponsorship packages, VIP hospitality, and international branding.",
        "partners-cta-btn-support": "Explore Partnership Options &rarr;",
        "partners-cta-btn-contact": "Contact Executive Office",

        /* --- PAST-CONCERTS.HTML: PAST CONCERTS & ARCHIVE --- */
        "past-hero-tag": "Archive & Retrospective",
        "past-page-title": "Past Concerts",
        "past-intro": "A chronicle of previous symphonic seasons, orchestral milestones, and archival recordings performed across Berlin's cultural halls.",
        "past-filter-all": "All Seasons",
        "past-filter-25-26": "Season 2025/2026",
        "past-filter-24-25": "Inaugural Season 2024/2025",
        
        /* Event 1 (May 2026) */
        "past-e1-month": "MAY",
        "past-e1-tag": "Romantic Repertoire",
        "past-e1-title": "Brahms: Symphony No. 1 in C minor & Academic Festival Overture",
        "past-e1-w1": "<strong>J. Brahms:</strong> <em>Academic Festival Overture</em>, Op. 80",
        "past-e1-w2": "<strong>J. Brahms:</strong> <em>Symphony No. 1 in C minor</em>, Op. 68",
        "past-e1-conductor": "<strong>Conductor:</strong> Daniel Alejandro López",
        "past-e1-orchestra": "<strong>Orchestra:</strong> Berlinisches Sinfonieorchester",
        
        /* Event 2 (February 2026) */
        "past-e2-month": "FEB",
        "past-e2-tag": "Winter Gala",
        "past-e2-title": "Mozart & Tchaikovsky: Serenades for Strings",
        "past-e2-w1": "<strong>W. A. Mozart:</strong> <em>Serenade No. 13 in G major</em>, K. 525 \"Eine kleine Nachtmusik\"",
        "past-e2-w2": "<strong>P. I. Tchaikovsky:</strong> <em>Serenade for Strings in C major</em>, Op. 48",
        "past-e2-conductor": "<strong>Conductor:</strong> Daniel Alejandro López",
        "past-e2-ensemble": "<strong>Ensemble:</strong> String Soloists of BSO",
        
        /* Event 3 (November 2025 - Inaugural Gala) */
        "past-e3-month": "NOV",
        "past-e3-tag": "Inaugural Concert",
        "past-e3-title": "Inaugural Gala: Dvořák Symphony No. 9 \"From the New World\"",
        "past-e3-w1": "<strong>G. Rossini:</strong> <em>William Tell Overture</em>",
        "past-e3-w2": "<strong>A. Dvořák:</strong> <em>Symphony No. 9 in E minor</em>, Op. 95 \"From the New World\"",
        "past-e3-conductor": "<strong>Conductor:</strong> Daniel Alejandro López",
        "past-e3-orchestra": "<strong>Orchestra:</strong> Berlinisches Sinfonieorchester",

        /* Shared Buttons & Badges */
        "past-badge-archived": "Archived Performance",
        "past-badge-milestone": "Milestone Event",
        "past-btn-watch": "<i class=\"fa-solid fa-play\"></i> Watch Highlights",
        "past-btn-listen": "<i class=\"fa-solid fa-headphones\"></i> Listen Audio",
        "past-btn-gallery": "<i class=\"fa-regular fa-image\"></i> Photo Gallery",

        /* Bottom Banner */
        "past-banner-tag": "Live Experience",
        "past-banner-title": "Experience Our Current Concert Season",
        "past-banner-desc": "Join us live in Berlin's iconic concert halls for the upcoming symphonic masterpieces of Season 2026.",
        "past-banner-btn": "View Upcoming Events &rarr;",

        /* --- PHOTOS.HTML: PHOTO GALLERY --- */
        "photos-hero-tag": "Visual Chronicle",
        "photos-page-title": "Photo Gallery",
        "photos-intro": "Photographic impressions from our concerts, rehearsals, and backstage moments in Berlin.",
        
        /* Photos & Captions */
        "photos-p1-title": "Inaugural Gala Concert",
        "photos-p2-title": "Dress Rehearsal Focus",
        "photos-p3-title": "String Section in Unity",
        "photos-p4-title": "Backstage Preparation",
        "photos-p4-venue": "Soloists & Concertmaster",
        "photos-p5-title": "Standing Ovation",
        "photos-p5-venue": "Season Finale | Konzerthaus Berlin",

        /* --- PRIVACY.HTML: PRIVACY POLICY (GDPR) --- */
        "privacy-hero-tag": "Data Protection & Privacy",
        "privacy-page-title": "Privacy Policy",
        "privacy-sub-intro": "Information on data processing in accordance with the EU General Data Protection Regulation (GDPR / DSGVO).",
        "privacy-sec1-title": "1. Data Controller",
        "privacy-sec1-intro": "The controller responsible for data processing on this website is:",
        "privacy-sec1-board": "Represented by the executive board (§ 26 BGB):",
        "privacy-sec1-daniel-role": "(President)",
        "privacy-sec1-gabriela-role": "(Treasurer)",
        
        "privacy-sec2-title": "2. General Principles & SSL/TLS Encryption",
        "privacy-sec2-p1": "We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this Privacy Policy.",
        "privacy-sec2-p2": "For security reasons and to protect the transmission of confidential content, such as inquiries or audition submissions, this site uses <strong>SSL/TLS encryption</strong>. You can recognize an encrypted connection by the fact that the address line of the browser changes from <code>http://</code> to <code>https://</code> and by the lock symbol in your browser bar.",
        
        "privacy-sec3-title": "3. Data Collection on Our Website",
        "privacy-sec3-logs-title": "Server Log Files",
        "privacy-sec3-logs-text": "The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us (browser type, operating system, referrer URL, host name of the accessing computer, time of server request, IP address). The collection of this data is based on Art. 6 Para. 1 lit. f GDPR to ensure trouble-free and secure website delivery.",
        "privacy-sec3-contact-title": "Contact Form, Auditions & Memberships",
        "privacy-sec3-contact-p1": "If you submit inquiries via contact form (e.g. for general inquiries, auditions, or membership applications), your entries including the contact details provided will be stored for the purpose of processing the inquiry and for follow-up questions. We do not share this data without your consent.",
        "privacy-sec3-contact-p2": "The processing of this data is based on Art. 6 Para. 1 lit. b GDPR (contract performance or pre-contractual steps) and Art. 6 Para. 1 lit. f GDPR (legitimate interest in processing your request).",
        
        "privacy-sec4-title": "4. Third-Party Services & Media",
        "privacy-sec4-yt-title": "YouTube Embeds",
        "privacy-sec4-yt-text": "Our website embeds videos from YouTube (operator: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland). We use YouTube in enhanced privacy mode (<code>youtube-nocookie.com</code>), so that data is only transmitted to YouTube when playing the video. Legal basis is Art. 6 Para. 1 lit. f GDPR (legitimate interest in appealing presentation of our artistic work).",
        "privacy-sec4-pay-title": "Payment Services & Donations (PayPal / Bank Transfer)",
        "privacy-sec4-pay-text": "On our website (under <em>Support the Vision</em>) we provide the option to process patronage contributions or donations via PayPal or bank transfer. PayPal provider is PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg. When making a payment, transaction data is transmitted to PayPal on the basis of Art. 6 Para. 1 lit. b GDPR.",
        
        "privacy-sec5-title": "5. Your Rights as a Data Subject",
        "privacy-sec5-intro": "Under the applicable statutory provisions, you have the right at any time to:",
        "privacy-sec5-li1": "<strong>Access (Art. 15 GDPR):</strong> Free information regarding your stored personal data, origin, recipients, and purpose of processing.",
        "privacy-sec5-li2": "<strong>Rectification (Art. 16 GDPR):</strong> Rectification of inaccurate or incomplete data.",
        "privacy-sec5-li3": "<strong>Erasure (Art. 17 GDPR):</strong> Erasure of your personal data stored by us, unless statutory retention duties apply.",
        "privacy-sec5-li4": "<strong>Restriction of Processing (Art. 18 GDPR):</strong> Restriction of the processing of your personal data.",
        "privacy-sec5-li5": "<strong>Data Portability (Art. 20 GDPR):</strong> Provision of data in a structured, commonly used, and machine-readable format.",
        "privacy-sec5-li6": "<strong>Right to Object (Art. 21 GDPR):</strong> Objection to the processing of your data on grounds relating to your particular situation.",
        "privacy-sec5-li7": "<strong>Right to Lodge a Complaint (Art. 77 GDPR):</strong> Lodging a complaint with the competent supervisory authority: <em>Berliner Beauftragte für Datenschutz und Informationsfreiheit</em>.",
        "privacy-sec5-outro": "For this purpose or for further questions on data protection, you can contact us at any time at <a href=\"mailto:info@berlinisches-sinfonieorchester.de\">info@berlinisches-sinfonieorchester.de</a>.",

        /* --- PROGRAM.HTML: SEASON 2026 & CONCERT CALENDAR --- */
        "program-hero-tag": "Concert Season",
        "program-page-title": "Season 2026",
        "program-intro": "Explore our upcoming symphonic programs across Berlin's iconic concert halls. From monumental classical masterworks to cinematic gala evenings.",
        "program-filter-all": "All Events",
        "program-filter-symphonic": "Symphonic Series",
        "program-filter-special": "Special Galas",
        "program-filter-chamber": "Chamber Sessions",
        
        /* Event 1 (October 2026 - Beethoven) */
        "program-e1-month": "OCT",
        "program-e1-tag": "Symphonic Series",
        "program-e1-title": "Beethoven: Symphony No. 3 in E-flat Major \"Eroica\"",
        "program-e1-w1": "<strong>L. v. Beethoven:</strong> <em>Egmont Overture</em>, Op. 84",
        "program-e1-w2": "<strong>L. v. Beethoven:</strong> <em>Symphony No. 3 in E-flat Major</em>, Op. 55 \"Eroica\"",
        "program-e1-conductor": "<strong>Conductor:</strong> Daniel Alejandro López",
        "program-e1-orchestra": "<strong>Orchestra:</strong> Berlinisches Sinfonieorchester",
        
        /* Event 2 (November 2026 - Mendelssohn) */
        "program-e2-month": "NOV",
        "program-e2-tag": "Romantic Series",
        "program-e2-title": "Mendelssohn: \"Scottish\" Symphony No. 3",
        "program-e2-w1": "<strong>F. Mendelssohn:</strong> <em>The Hebrides (Fingal's Cave)</em>, Op. 26",
        "program-e2-w2": "<strong>F. Mendelssohn:</strong> <em>Symphony No. 3 in A minor</em>, Op. 56 \"Scottish\"",
        "program-e2-conductor": "<strong>Conductor:</strong> Daniel Alejandro López",
        "program-e2-soloist": "<strong>Soloist:</strong> Guest Violin Soloist (TBA)",
        
        /* Event 3 (December 2026 - Hollywood Gala) */
        "program-e3-month": "DEC",
        "program-e3-tag": "Special Gala",
        "program-e3-title": "The Sound of Cinema: Hollywood in Berlin",
        "program-e3-w1": "<strong>Selected Scores by:</strong> John Williams, Hans Zimmer, Ennio Morricone & Bernard Herrmann",
        "program-e3-conductor": "<strong>Conductor:</strong> Daniel Alejandro López",
        "program-e3-orchestra": "<strong>Orchestra:</strong> Berlinisches Sinfonieorchester",
        
        /* Event 4 (December 2026 - Baroque) */
        "program-e4-month": "DEC",
        "program-e4-tag": "Chamber Sessions",
        "program-e4-title": "Winter Baroque: Corelli, Vivaldi & Bach",
        "program-e4-w1": "<strong>A. Corelli:</strong> <em>Christmas Concerto</em>, Op. 6 No. 8",
        "program-e4-w2": "<strong>A. Vivaldi:</strong> <em>Concerto for Two Violins in A minor</em>, RV 522",
        "program-e4-w3": "<strong>J. S. Bach:</strong> <em>Brandenburg Concerto No. 3 in G major</em>, BWV 1048",
        "program-e4-ensemble": "<strong>Ensemble:</strong> Soloists of Berlinisches Sinfonieorchester",

        /* Ticket Statuses & Buttons */
        "program-status-available": "Tickets Available",
        "program-status-presale": "Presale Opening Soon",
        "program-status-soldout": "Sold Out",
        "program-btn-tickets": "Get Tickets &rarr;",
        "program-btn-inquire": "Inquire / Waitlist",
        "program-btn-soldout": "Sold Out",

        /* Bottom Banner */
        "program-banner-tag": "Exclusive Patron Access",
        "program-banner-title": "Attend Private Rehearsals & Secure Priority Seats",
        "program-banner-desc": "Members of our Friends Circle and Patron's Circle receive early booking windows and invitations to dress rehearsals across Berlin.",
        "program-banner-btn": "Support the Vision &rarr;",

        /* --- PROJECT.HTML: THE PROJECT & MISSION --- */
        "project-hero-tag": "Identity & Purpose",
        "project-page-title": "The Project",
        "project-intro": "The Berlinisches Sinfonieorchester e.V. is an independent symphonic ensemble established in Berlin, uniting artistic vigor, social transformation, and international musical heritage.",
        
        "project-story-tag": "Our Genesis",
        "project-story-title": "Reimagining Symphonic Art in the Heart of Berlin",
        "project-story-lead": "Berlin stands as one of the world's preeminent capitals of orchestral tradition. Within this vibrant ecosystem, the Berlinisches Sinfonieorchester was founded with a definitive mission: to create an agile, passionate, and inclusive symphonic platform capable of bridging deep classical heritage with contemporary cultural life.",
        "project-story-p": "Rooted in the pedagogical and social ethos of <em>El Sistema</em>, our ensemble believes that an orchestra is not merely a performance vehicle, but a micro-society driven by solidarity, rigorous discipline, and shared artistic pursuit.",
        "project-story-quote": "«An orchestra is an active laboratory of human unity, where individual voices transcend their limits to forge an elevated collective harmony.»",
        
        "project-pillars-tag": "Core Principles",
        "project-pillars-title": "Foundations of Our Work",
        "project-pillar1-title": "Artistic Excellence",
        "project-pillar1-desc": "We approach standard masterworks—from Beethoven and Brahms to Dvořák—with fresh interpretive energy, while actively championing film scores, modern repertoire, and cross-genre commissions.",
        "project-pillar2-title": "Professional Platform",
        "project-pillar2-desc": "We serve as a vital bridge between high-level conservatory training and the demanding professional orchestra circuit, offering exceptional emerging musicians high-profile stage experience.",
        "project-pillar2-link": "Meet our orchestral roster &rarr;",
        "project-pillar3-title": "Cultural Integration",
        "project-pillar3-desc": "Berlin is a home of global cultures. Our musicians reflect international backgrounds, fostering intercultural dialogue and making symphonic experiences accessible across the city.",
        
        "project-inst-tag": "Legal Framework & Governance",
        "project-inst-p1": "The orchestra is organized as a registered non-profit association (<em>eingetragener Verein - e.V.</em>) under German law, recognized for its public-benefit cultural mission (<em>Gemeinnützigkeit</em>).",
        "project-inst-p2": "Our governance is guided by an elected executive board and an artistic council committed to fiscal transparency, musical excellence, and sustainable cultural development.",
        "project-inst-btn-board": "Artistic Board & Governance &rarr;",
        "project-inst-btn-director": "Meet the Music Director &rarr;",
        
        "project-badge-title": "Non-Profit Cultural Entity",
        "project-badge-li1": "Registered in Berlin, Germany",
        "project-badge-li2": "Tax-Deductible Contributions",
        "project-badge-li3": "Transparent Non-Profit Governance",
        "project-badge-btn": "Support Our Vision &rarr;",

        /* --- SUPPORT-VISION.HTML: PHILANTHROPY & PATRONAGE --- */
        "support-hero-tag": "Philanthropy & Impact",
        "support-page-title": "Support the Vision",
        "support-intro": "Music is more than performance; it is a catalyst for social transformation. By supporting the Berlinisches Sinfonieorchester e.V., you empower exceptional emerging artists, foster cultural integration in Berlin, and sustain an uncompromising symphonic excellence.",
        
        /* 3 Pillars */
        "support-impact-1-title": "Artistic Opportunity",
        "support-impact-1-desc": "We provide a premier platform and professional development for extraordinary musicians, bridging academia and the global orchestral stage.",
        "support-impact-2-title": "Social Transformation",
        "support-impact-2-desc": "Rooted in the philosophy of <em>El Sistema</em>, we harness the collective discipline of orchestral music to unite diverse cultures across Berlin.",
        "support-impact-3-title": "Cultural Vitality",
        "support-impact-3-desc": "From Berlin's iconic concert halls to public open-air performances, we bring symphonic music closer to contemporary audiences.",

        /* Pillars of Patronage */
        "support-tiers-tag": "Join the Circle",
        "support-tiers-title": "Pillars of Patronage",
        
        "support-t1-tag": "Individual Patronage",
        "support-t1-name": "Friends Circle",
        "support-t1-focus": "Core Annual Support",
        "support-t1-desc": "Ideal for passionate concertgoers who wish to closely follow the orchestra's development and season journey.",
        "support-t1-b1": "Priority booking window for all season concerts.",
        "support-t1-b2": "Name recognition in our printed concert programs.",
        "support-t1-b3": "Exclusive patron communications from the Music Director.",
        "support-t1-btn-join": "Join via Inquiry",
        "support-t1-btn-paypal": "<i class=\"fa-brands fa-paypal\"></i> Donate with PayPal",

        "support-t2-badge": "Key Benefactor",
        "support-t2-tag": "Sustaining Philanthropy",
        "support-t2-name": "Patron's Circle",
        "support-t2-focus": "Artistic & Chair Sponsorship",
        "support-t2-desc": "Directly champions specific orchestral positions, masterclasses, and ambitious symphonic productions.",
        "support-t2-b1": "All benefits of the Friends Circle.",
        "support-t2-b2": "Invitations to private dress rehearsals at Konzerthaus & Philharmonie.",
        "support-t2-b3": "Private receptions with the conductor, soloists, and ensemble.",
        "support-t2-btn-join": "Become a Patron &rarr;",

        "support-t3-tag": "Institutional",
        "support-t3-name": "Corporate & Foundations",
        "support-t3-focus": "Strategic Cultural Alliance",
        "support-t3-desc": "Tailored alignment for organizations and foundations seeking meaningful social and cultural engagement in Berlin.",
        "support-t3-link": "View our current partner network &rarr;",
        "support-t3-b1": "Prominent logo presence across all print, digital, and media assets.",
        "support-t3-b2": "VIP corporate ticket allocations and private hospitality options.",
        "support-t3-b3": "Chamber music performances for institutional and corporate events.",
        "support-t3-btn-join": "Inquire Partnership &rarr;",

        /* Statutes */
        "support-trans-tag": "Governance & Transparency",
        "support-trans-title": "Non-Profit Integrity",
        "support-trans-card-title": "Association Statutes (Satzung)",
        "support-trans-card-desc": "Official statutes and non-profit governance regulations of Berlinisches Sinfonieorchester e.V.",
        "support-trans-card-btn": "Download PDF <i class=\"fa-solid fa-arrow-down\"></i>",

        /* Tax & Bank */
        "support-tax-title": "Tax-Deductible Contributions",
        "support-tax-desc": "Berlinisches Sinfonieorchester e.V. is recognized as a non-profit organization (<em>gemeinnütziger Verein</em>). All donations and patronage contributions are fully tax-deductible under German law. A formal donation receipt (<em>Spendenbescheinigung</em>) is issued for all contributions.",
        "support-bank-title": "Direct Bank Transfer",
        "support-bank-holder": "Account Holder:",
        "support-bank-divider": "or instant transfer",
        "support-paypal-btn": "<i class=\"fa-brands fa-paypal\"></i> Donate via PayPal",
        "support-paypal-note": "Credit Card, Debit & PayPal balance accepted.",

        /* Contact Form */
        "support-form-tag": "Direct Dialogue",
        "support-form-title": "Start the Conversation",
        "support-form-lead": "Interested in supporting the orchestra, sponsoring an instrument chair, or exploring institutional partnership? Let us know how you would like to engage.",
        "support-form-label-name": "Full Name / Contact Person *",
        "support-form-label-email": "Email Address *",
        "support-form-label-org": "Organization / Company (Optional)",
        "support-form-label-cat": "Support Category *",
        "support-form-opt-friends": "Friends Circle",
        "support-form-opt-patrons": "Patron's Circle",
        "support-form-opt-corp": "Corporate & Foundation Partnership",
        "support-form-opt-donation": "Individual / Custom Contribution",
        "support-form-opt-other": "Other Inquiry",
        "support-form-label-msg": "Message / Vision *",
        "support-form-btn-submit": "Submit Support Inquiry —",

        /* --- VIDEOS.HTML: VIDEO GALLERY & HIGHLIGHTS --- */
        "videos-hero-tag": "Audio-Visual Archive",
        "videos-page-title": "Video Highlights",
        "videos-intro": "Live performance recordings, behind-the-scenes documentaries, and concert highlights of the Berlinisches Sinfonieorchester in Berlin.",
        
        /* Video 1 (Schubert) */
        "videos-v1-tag": "Featured Recording | Admiralspalast",
        "videos-v1-title": "Schubert: Symphony no. 8 in B minor, “Unfinished”. (I. Allegro moderato)",
        "videos-v1-meta": "Conducted by Daniel Alejandro López | Inaugural Season Gala",

        /* Video 2 (Beethoven) */
        "videos-v2-tag": "Konzerthaus Berlin",
        "videos-v2-title": "Beethoven: 3rd Symphony, Eroica. (I. Allegro con brio)",
        "videos-v2-meta": "Live Performance Excerpt | May 2025",

        /* Video 3 (Castellanos) */
        "videos-v3-tag": "Berliner Philharmonie",
        "videos-v3-title": "E. Castellanos: El río de las siete estrellas",
        "videos-v3-meta": "Concert | March 2025",

        /* Video 4 (Documentary) */
        "videos-v4-tag": "Documentary",
        "videos-v4-title": "The Making of an Independent Orchestra in Berlin",
        "videos-v4-meta": "Behind the scenes & rehearsal insights with Music Director Daniel Alejandro López"


    }
};

// =========================================
// 2. ÍNDICE DE CONTENIDOS PARA BÚSQUEDA
// =========================================
const siteSearchIndex = [
    // --- PROGRAMACIÓN Y CONCIERTOS ---
    { 
        title: "Beethoven: Symphony No. 3 'Eroica'", 
        category: "Concert", 
        url: "program.html?event=1", 
        keywords: "eroica beethoven season 2026 konzerthaus tickets sinfonie konzert" 
    },
    { 
        title: "Mendelssohn: 'Scottish' Symphony No. 3", 
        category: "Concert", 
        url: "program.html?event=2", 
        keywords: "mendelssohn scottish schottische philharmonie romantic tickets" 
    },
    { 
        title: "The Sound of Cinema: Hollywood in Berlin", 
        category: "Special Gala", 
        url: "program.html?event=3", 
        keywords: "hollywood cinema movie film filmmusik gala admiralspalast tickets soundtrack" 
    },
    { 
        title: "Season 2026 Full Program & Repertoire", 
        category: "Calendar", 
        url: "program.html", 
        keywords: "season 2026 calendar repertoire events saison konzerte termine kalender tickets" 
    },
    { 
        title: "Past Concerts & Archives", 
        category: "Calendar", 
        url: "past-concerts.html", 
        keywords: "past concerts archive highlights lustgarten flashmob bode-museum vergangen rückblick" 
    },

    // --- PROYECTO, MISIÓN Y DIRECCIÓN ---
    { 
        title: "The Project & Mission", 
        category: "About us", 
        url: "project.html", 
        keywords: "project mission sistema el sistema history pillars integration education leitbild geschichte über uns" 
    },
    { 
        title: "Music Director: Daniel López Piepoli", 
        category: "Artistic Leadership", 
        url: "director.html", 
        keywords: "daniel lopez piepoli director music director conductor dirigent biography biografie künstlerische leitung founder" 
    },
    { 
        title: "Artistic Board & Team", 
        category: "Governance", 
        url: "board.html", 
        keywords: "board team stella karalis gabriela gonzalez ebru algul isabel barciela vorstand beirat leitung" 
    },
    { 
        title: "Orchestral Musicians & Roster", 
        category: "About us", 
        url: "musicians.html", 
        keywords: "musicians roster orchestra strings brass woodwinds percussion musiker orchester besetzung" 
    },

    // --- PARTICIPACIÓN Y CONTACTO ---
    { 
        title: "Auditions & Join the Orchestra", 
        category: "Recruitment", 
        url: "contact.html?topic=join", 
        keywords: "auditions join orchestra musician application probespiele mitspielen bewerbung instrument jobs" 
    },
    { 
        title: "Contact & General Inquiries", 
        category: "Contact", 
        url: "contact.html", 
        keywords: "contact email phone location management kontakt anfrage nachricht impressum" 
    },

    // --- MECENAZGO, TRANSPARENCIA Y DONACIONES ---
    { 
        title: "Support the Vision (Patronage & Donations)", 
        category: "Support", 
        url: "support-vision.html", 
        keywords: "support donate patron friends circle paypal iban bank tax-deductible spenden förderung förderverein mezenatentum" 
    },
    { 
        title: "Association Statutes (Satzung e.V.)", 
        category: "Governance", 
        url: "support-vision.html#statutes", 
        keywords: "statutes satzung pdf download gemeinnützigkeit non-profit legal e.v. verein transparency" 
    },
    { 
        title: "Institutional Partnerships & Sponsors", 
        category: "Support", 
        url: "partners.html", 
        keywords: "partners sponsors corporate foundations funding partnerschaften förderer stiftungen" 
    },

    // --- MULTIMEDIA ---
    { 
        title: "Media Gallery (Photos, Audios & Videos)", 
        category: "Gallery", 
        url: "photos.html", 
        keywords: "gallery photos videos audios media fotogalerie aufnahmen bilder mediathek" 
    },

    // --- LEGAL ---
    { 
        title: "Legal Notice (Impressum)", 
        category: "Legal", 
        url: "impressum.html", 
        keywords: "impressum legal notice registry vr 42493 b charlottenburg steuernummer vertretung rechtliches" 
    },
    { 
        title: "Privacy Policy (Datenschutz)", 
        category: "Legal", 
        url: "privacy.html", 
        keywords: "privacy policy datenschutz dsgvo gdpr datenschutzerklärung cookies rights" 
    }
];

// =========================================
// 3. INICIALIZACIÓN Y CONTROLADORES
// =========================================
document.addEventListener('DOMContentLoaded', function() {

    // --- A. GESTIÓN DEL CAMBIO DE IDIOMA & PERSISTENCIA ---
    function setLanguage(selectedLang) {
        if (!content[selectedLang]) return;

        // 1. Actualiza todos los elementos con atributo data-key (usando innerHTML para soportar &rarr;, <em>, <strong>)
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (content[selectedLang][key]) {
                el.innerHTML = content[selectedLang][key];
            }
        });

        // 2. Actualiza textos dinámicos del hero (si existe en la página actual)
        const heroTitle = document.querySelector('.hero-content h1');
        if (heroTitle && content[selectedLang].hero) {
            heroTitle.innerHTML = content[selectedLang].hero.replace('. ', '. <br>');
        }
        
        const heroSub = document.querySelector('.hero-content p');
        if (heroSub) {
            heroSub.textContent = selectedLang === 'de' ? "Der neue Klang Berlins" : "The New Sound of Berlin";
        }

        // 3. Actualiza texto y bandera en el selector del header
        const currentLangText = document.querySelector('.lang-current span');
        if (currentLangText) currentLangText.textContent = selectedLang.toUpperCase();

        const currentLangImg = document.querySelector('.lang-current .lang-flag');
        if (currentLangImg) {
            currentLangImg.src = selectedLang === 'de' ? "https://flagcdn.com/w20/de.png" : "https://flagcdn.com/w20/us.png";
            currentLangImg.alt = selectedLang.toUpperCase();
        }

        document.documentElement.lang = selectedLang;

        // 4. Guarda la preferencia para que persista al cambiar de página
        localStorage.setItem('bso_preferred_lang', selectedLang);
    }

    // Escucha clics en el dropdown de idiomas
    const langOptions = document.querySelectorAll('.lang-options a');
    langOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault(); 
            const href = option.getAttribute('href');
            if (href && href.includes('lang=')) {
                const urlParams = new URLSearchParams(href.split('?')[1]);
                const selectedLang = urlParams.get('lang');
                if (selectedLang) {
                    setLanguage(selectedLang);
                }
            }
        });
    });

    // Inicialización automática al cargar cualquier página:
    // Prioridad: 1) Parámetro en URL (?lang=de), 2) localStorage guardado, 3) Por defecto inglés ('en')
    const pageUrlParams = new URLSearchParams(window.location.search);
    const langFromUrl = pageUrlParams.get('lang');
    const savedLang = localStorage.getItem('bso_preferred_lang');
    const initialLang = (langFromUrl && content[langFromUrl]) 
        ? langFromUrl 
        : (savedLang && content[savedLang] ? savedLang : 'en');

    setLanguage(initialLang);

    // --- B. COMPACTACIÓN DEL HEADER AL SCROLL ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- C. MENÚ MOBILE & DROPDOWNS EN TOUCH ---
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const headerNav = document.getElementById('headerNav');
    const overlay = document.getElementById('menuOverlay');
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

    function toggleMenu() {
        mobileBtn.classList.toggle('active');
        headerNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
    }

    if (mobileBtn && headerNav && overlay) {
        mobileBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    }

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                e.stopPropagation();

                const parentDropdown = this.closest('.dropdown');
                if (!parentDropdown) return;

                const isOpen = parentDropdown.classList.contains('active');

                // Cierra otros dropdowns abiertos
                document.querySelectorAll('.dropdown.active').forEach(d => {
                    if (d !== parentDropdown) d.classList.remove('active');
                });

                // Alterna estado del dropdown actual
                if (isOpen) {
                    parentDropdown.classList.remove('active');
                } else {
                    parentDropdown.classList.add('active');
                }
            }
        });
    });

    // --- D. BUSCADOR EN VIVO (LIVE SEARCH + TECLADO) ---
    const searchBtn = document.getElementById('searchBtn');
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');
    let selectedIndex = -1;

    function closeSearch() {
        if (resultsContainer) {
            resultsContainer.classList.remove('active');
            resultsContainer.innerHTML = '';
        }
        selectedIndex = -1;
    }

    function updateSelection(items) {
        items.forEach((item, idx) => {
            if (idx === selectedIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('selected');
            }
        });
    }

    if (searchBtn && searchContainer && searchInput && resultsContainer) {
        searchBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            searchContainer.classList.toggle('active');
            
            if (searchContainer.classList.contains('active')) {
                searchInput.focus();
            } else {
                closeSearch();
                searchInput.value = '';
            }
        });

        // Filtrado dinámico mientras se escribe
        searchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            selectedIndex = -1;

            if (query.length < 2) {
                closeSearch();
                return;
            }

            const matches = siteSearchIndex.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.keywords.toLowerCase().includes(query) || 
                item.category.toLowerCase().includes(query)
            );

            if (matches.length > 0) {
                resultsContainer.innerHTML = matches.map(item => `
                    <a href="${item.url}" class="search-result-item">
                        <div class="search-result-category">${item.category}</div>
                        <div class="search-result-title">${item.title}</div>
                    </a>
                `).join('');
            } else {
                resultsContainer.innerHTML = `<div class="search-no-results">No results found for "${this.value}"</div>`;
            }

            resultsContainer.classList.add('active');
        });

        // Navegación con teclado
        searchInput.addEventListener('keydown', function(e) {
            const items = resultsContainer.querySelectorAll('.search-result-item');
            if (!resultsContainer.classList.contains('active') || items.length === 0) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                selectedIndex = (selectedIndex + 1) % items.length;
                updateSelection(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                selectedIndex = (selectedIndex - 1 + items.length) % items.length;
                updateSelection(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (selectedIndex >= 0 && items[selectedIndex]) {
                    items[selectedIndex].click();
                } else if (items.length > 0) {
                    items[0].click();
                }
            } else if (e.key === 'Escape') {
                closeSearch();
                searchContainer.classList.remove('active');
            }
        });

        // Cierre al hacer clic fuera del buscador
        document.addEventListener('click', function(e) {
            if (!searchContainer.contains(e.target)) {
                searchContainer.classList.remove('active');
                closeSearch();
            }
        });
    }

    // --- E. EVENT SLIDER (NAVEGACIÓN DIRECCIONAL ENTRE CARDS) ---
    const cards = document.querySelectorAll('.event-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    let currentIndex = 0;

    function updateSlider(index, direction = 'next') {
        cards.forEach(card => {
            card.style.display = 'none';
            card.classList.remove('swipe-reverse');
        });
        
        dots.forEach(dot => dot.classList.remove('active'));

        if (direction === 'prev') {
            cards[index].classList.add('swipe-reverse');
        }

        cards[index].style.display = 'block';
        dots[index].classList.add('active');

        // Control de visibilidad en extremos
        prevBtn.style.visibility = (index === 0) ? 'hidden' : 'visible';
        nextBtn.style.visibility = (index === cards.length - 1) ? 'hidden' : 'visible';
    }

    if (nextBtn && prevBtn && cards.length > 0) {
        nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                updateSlider(currentIndex, 'next');
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider(currentIndex, 'prev');
            }
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                const direction = (i < currentIndex) ? 'prev' : 'next';
                currentIndex = i;
                updateSlider(currentIndex, direction);
            });
        });
    }
});


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------CONTACT.HTML 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------CONTACT.HTML 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// --- F. GESTIÓN DEL FORMULARIO DE CONTACTO, AUDICIONES DINÁMICAS Y ENRUTAMIENTO DE ALIAS ---
const contactTopic = document.getElementById('contactTopic');
const musicianFields = document.getElementById('musicianFields');
const instrumentInput = document.getElementById('instrument');
const contactAccessKey = document.getElementById('contactAccessKey');
const contactEmailSubject = document.getElementById('contactEmailSubject');
const contactForm = document.getElementById('contactForm');

// Mapeo dinámico de llaves y asuntos según la opción elegida
const topicRouting = {
    general: {
        key: "aa41de98-218a-4163-a134-2779ec77ed2b", // info@
        subject: "[GENERAL] Website Inquiry"
    },
    join: {
        key: "2ae88f47-4d04-4db7-8926-52a34397a9a3", // orchesterbuero@
        subject: "[AUDITION] Musician Application"
    },
    press: {
        key: "e0dd833e-5c65-4964-ba69-912193d386e3", // d.lopez@
        subject: "[PRESS] Media / Press Inquiry"
    },
    other: {
        key: "aa41de98-218a-4163-a134-2779ec77ed2b", // info@
        subject: "[OTHER] General Inquiry"
    }
};

function handleTopicChange(topic) {
    // 1. Mostrar u ocultar campos de instrumento/grabación
    if (musicianFields) {
        const isAudition = (topic === 'join');
        musicianFields.style.display = isAudition ? 'block' : 'none';
        if (instrumentInput) {
            instrumentInput.required = isAudition;
        }
    }

    // 2. Cambiar dinámicamente la llave de destino y el asunto
    if (topicRouting[topic] && contactAccessKey && contactEmailSubject) {
        contactAccessKey.value = topicRouting[topic].key;
        contactEmailSubject.value = topicRouting[topic].subject;
    }
}

if (contactTopic) {
    // Escucha cambios manuales en el selector
    contactTopic.addEventListener('change', function() {
        handleTopicChange(this.value);
    });

    // Soporte para enlaces directos con parámetros (ej. contact.html?topic=join)
    const urlParams = new URLSearchParams(window.location.search);
    const topicParam = urlParams.get('topic');

    if (topicParam && topicRouting[topicParam]) {
        contactTopic.value = topicParam;
        handleTopicChange(topicParam);
    }
}

// Envío asíncrono vía AJAX (sin recarga de página)
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Sending Message...";
        submitBtn.disabled = true;

        const formData = new FormData(this);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                submitBtn.textContent = "Message Sent Successfully! ✓";
                submitBtn.style.backgroundColor = "#2e7d32";
                this.reset();
                handleTopicChange('general'); // Regresa al estado inicial
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = "";
                }, 4000);
            } else {
                submitBtn.textContent = "Error Sending. Try Again";
                submitBtn.disabled = false;
            }
        } catch (err) {
            submitBtn.textContent = "Connection Error. Try Again";
            submitBtn.disabled = false;
        }
    });
}


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------SUPPORT-VISION.HTML 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// --- G. GESTIÓN DE SUPPORT-VISION.HTML (SELECCIÓN DE TIER, COPIA DE IBAN, ASUNTO DINÁMICO Y AJAX) ---
const tierButtons = document.querySelectorAll('.btn-tier');
const patronLevelSelect = document.getElementById('patronLevel');
const patronEmailSubject = document.getElementById('patronEmailSubject');
const ibanCopyBtn = document.getElementById('ibanCode');
const patronInquiryForm = document.getElementById('patronInquiryForm');

// Diccionario de asuntos estructurados para filtrado en Gmail
const patronSubjectMap = {
    "Friends Circle": "[SUPPORT THE VISION] Friends Circle",
    "Patron's Circle": "[SUPPORT THE VISION] Patron's Circle",
    "Corporate Partnership": "[SUPPORT THE VISION] Corporate & Foundation Partnership",
    "Individual Donation": "[SUPPORT THE VISION] Individual & Custom Contribution",
    "Other": "[SUPPORT THE VISION] Other Inquiry | Support"
};

function updatePatronSubject(level) {
    if (patronEmailSubject && patronSubjectMap[level]) {
        patronEmailSubject.value = patronSubjectMap[level];
    }
}

// 1. Al hacer clic en un botón de Tier, preselecciona el nivel, actualiza el asunto y hace scroll suave
if (tierButtons.length > 0 && patronLevelSelect) {
    tierButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const selectedTier = this.getAttribute('data-tier');
            if (selectedTier) {
                e.preventDefault();
                patronLevelSelect.value = selectedTier;
                updatePatronSubject(selectedTier);
                
                const formTarget = document.getElementById('patronForm');
                if (formTarget) {
                    formTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// 2. Al cambiar manualmente el selector de categoría
if (patronLevelSelect) {
    patronLevelSelect.addEventListener('change', function() {
        updatePatronSubject(this.value);
    });
}

// 3. Copiar IBAN al portapapeles con un clic
if (ibanCopyBtn) {
    ibanCopyBtn.addEventListener('click', function() {
        const rawIban = this.textContent.trim().split(' ')[0] ? "DE00000000000000000000" : "";
        navigator.clipboard.writeText(rawIban).then(() => {
            const originalHTML = this.innerHTML;
            this.innerHTML = `Copied! <i class="fa-solid fa-check" style="color: var(--gold);"></i>`;
            setTimeout(() => {
                this.innerHTML = originalHTML;
            }, 2000);
        });
    });
}

// 4. Envío asíncrono con Web3Forms (sin redirección externa)
if (patronInquiryForm) {
    patronInquiryForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Sending Inquiry...";
        submitBtn.disabled = true;

        const formData = new FormData(this);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                submitBtn.textContent = "Inquiry Sent Successfully! ✓";
                submitBtn.style.backgroundColor = "#2e7d32";
                this.reset();
                updatePatronSubject("Friends Circle"); // Restablece asunto al valor por defecto
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = "";
                }, 4000);
            } else {
                submitBtn.textContent = "Error Sending. Try Again";
                submitBtn.disabled = false;
            }
        } catch (err) {
            submitBtn.textContent = "Connection Error. Try Again";
            submitBtn.disabled = false;
        }
    });
}


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------PROGRAM.HTML 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// --- H. FILTRO DE CONCIERTOS EN PROGRAM.HTML ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const concertCards = document.querySelectorAll('.concert-card');

    if (filterButtons.length > 0 && concertCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 1. Alternar clase activa en botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // 2. Filtrar tarjetas
                const filterValue = this.getAttribute('data-filter');

                concertCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'grid';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

// --- I. AUTO-SCROLL Y RESALTADO DE CONCIERTO EN PROGRAM.HTML ---
    const urlParams = new URLSearchParams(window.location.search);
    const eventIndex = parseInt(urlParams.get('event'), 10); // Lee 1, 2, 3...

    if (!isNaN(eventIndex) && eventIndex > 0) {
        const concertCards = document.querySelectorAll('.concert-card');
        const targetCard = concertCards[eventIndex - 1]; // Array base 0

        if (targetCard) {
            // Pequeño retardo para asegurar que la página renderizó el layout
            setTimeout(() => {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                targetCard.classList.add('highlight-focus');
                
                // Remueve la clase tras terminar la animación para dejar el DOM limpio
                setTimeout(() => {
                    targetCard.classList.remove('highlight-focus');
                }, 2300);
            }, 300);
        }
    }


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------(GALERIA)
VIDEOS.HTML, AUDIOS.HTML, PHOTOS.HTML 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// --- J. LIGHTBOX INTERACTIVO EN PHOTOS.HTML ---
    const photoItems = document.querySelectorAll('.photo-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightboxModal && photoItems.length > 0) {
        photoItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                const captionTitle = this.querySelector('.caption-title');
                const captionVenue = this.querySelector('.caption-venue');

                if (img) {
                    lightboxImg.src = img.src;
                    lightboxCaption.innerHTML = `${captionTitle ? captionTitle.textContent : ''} ${captionVenue ? `— <em>${captionVenue.textContent}</em>` : ''}`;
                    lightboxModal.style.display = 'flex';
                }
            });
        });

        // Cerrar al hacer clic en la X
        if (lightboxClose) {
            lightboxClose.addEventListener('click', () => {
                lightboxModal.style.display = 'none';
            });
        }

        // Cerrar al hacer clic en el fondo oscuro
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.style.display = 'none';
            }
        });

        // Cerrar con la tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxModal.style.display === 'flex') {
                lightboxModal.style.display = 'none';
            }
        });
    }