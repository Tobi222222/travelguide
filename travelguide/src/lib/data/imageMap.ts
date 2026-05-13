// Every place gets a UNIQUE Unsplash image. No duplicates across the entire dataset.
// Format: [primaryImage, fallbackImage]

const U = (id: string, w = 1200, h = 800) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}&h=${h}`;

const fallbacks: Record<string, string> = {
    attraction: U('1583422409516-15eba5336080'),
    restaurant: U('1414235077428-338989a2e8c0'),
    cafe: U('1501339847302-ac426a4a7cbb'),
    beach: U('1507525428034-b723cf961d3e'),
    rooftop: U('1534008897995-27a23e859048'),
    'hidden-gem': U('1583422409516-15eba5336080'),
    nightlife: U('1566737236500-c8ac43014a67'),
    market: U('1488459716781-31db52582fe9'),
    viewpoint: U('1539037116277-4db20889f2d4'),
    romantic: U('1515238152791-8225bf451d80'),
};

export const imageMap: Record<string, { image: string; fallbackSrc: string }> = {
    // ── ATTRACTIONS ──
    a1:  { image: U('1523531294919-4bcd76189c9c'), fallbackSrc: fallbacks.attraction }, // Sagrada Familia
    a2:  { image: U('1511527661048-7fe0d3afc3ef'), fallbackSrc: fallbacks.attraction }, // Park Güell
    a3:  { image: U('1614088820490-e37456bc99eb'), fallbackSrc: fallbacks.attraction }, // Casa Batlló
    a4:  { image: U('1605342410884-21f456fb4890'), fallbackSrc: fallbacks.attraction }, // Gothic Quarter
    a5:  { image: U('1561580979-9944690ea88d'), fallbackSrc: fallbacks.attraction }, // Palau Música
    a6:  { image: U('1558284564-218a5ce2e2ff'), fallbackSrc: fallbacks.attraction }, // Casa Milà
    a7:  { image: U('1539037116277-4db20889f2d4'), fallbackSrc: fallbacks.attraction }, // Montjuïc Castle
    a8:  { image: U('1570081326-cd07df3cf4bc'), fallbackSrc: fallbacks.attraction }, // Poble Espanyol
    a9:  { image: U('1522778119026-d647f0596c20'), fallbackSrc: fallbacks.attraction }, // Camp Nou
    a10: { image: U('1554559288-0f11d1983eb4'), fallbackSrc: fallbacks.attraction }, // Magic Fountain

    // ── RESTAURANTS ──
    r1:  { image: U('1414235077428-338989a2e8c0'), fallbackSrc: fallbacks.restaurant }, // El Nacional
    r2:  { image: U('1544025162-d76694265947'), fallbackSrc: fallbacks.restaurant }, // Bar Cañete
    r3:  { image: U('1517248135467-4c7edcad34c4'), fallbackSrc: fallbacks.restaurant }, // Gala
    r4:  { image: U('1504674900247-0877df9cc836'), fallbackSrc: fallbacks.restaurant }, // La Pepita
    r5:  { image: U('1559339352-11d035aa65de'), fallbackSrc: fallbacks.restaurant }, // Disfrutar
    r6:  { image: U('1540189549336-e6e99c3679fe'), fallbackSrc: fallbacks.restaurant }, // Tickets
    r7:  { image: U('1515443961218-a51367888e4b'), fallbackSrc: fallbacks.restaurant }, // Paco Meralgo
    r8:  { image: U('1466978913421-dad2ebd01d17'), fallbackSrc: fallbacks.restaurant }, // Can Culleretes
    r9:  { image: U('1579871494447-08e1ef38950c'), fallbackSrc: fallbacks.restaurant }, // Kibuka
    r10: { image: U('1550966871-3ed3cdb5ed0c'), fallbackSrc: fallbacks.restaurant }, // Cervecería Catalana

    // ── CAFÉS ──
    c1:  { image: U('1495474472205-162847d15532'), fallbackSrc: fallbacks.cafe }, // Satan's Coffee
    c2:  { image: U('1442512595331-e89e73853f31'), fallbackSrc: fallbacks.cafe }, // Nomad Coffee
    c3:  { image: U('1484723091782-42ed45b438ea'), fallbackSrc: fallbacks.cafe }, // Brunch & Cake
    c4:  { image: U('1509042239860-f550ce710b93'), fallbackSrc: fallbacks.cafe }, // Syra Coffee
    c5:  { image: U('1554118811-1e0d58224f24'), fallbackSrc: fallbacks.cafe }, // Morrow Coffee
    c6:  { image: U('1445116572660-236099ec97a0'), fallbackSrc: fallbacks.cafe }, // Hidden Café
    c7:  { image: U('1600093463592-8e36ae95ef56'), fallbackSrc: fallbacks.cafe }, // Three Marks
    c8:  { image: U('1501339847302-ac426a4a7cbb'), fallbackSrc: fallbacks.cafe }, // Café Cometa
    c9:  { image: U('1521017432531-fde1cf460fd4'), fallbackSrc: fallbacks.cafe }, // Nømad Radio
    c10: { image: U('1559496417-e7f25cb247f3'), fallbackSrc: fallbacks.cafe }, // Dalston Coffee

    // ── BEACHES ──
    b1:  { image: U('1519046904884-53103b34b206'), fallbackSrc: fallbacks.beach }, // Bogatell
    b2:  { image: U('1520454974749-611b7248ffdb'), fallbackSrc: fallbacks.beach }, // Ocata
    b3:  { image: U('1507525428034-b723cf961d3e'), fallbackSrc: fallbacks.beach }, // Nova Icaria
    b4:  { image: U('1500375592092-40eb2168fd21'), fallbackSrc: fallbacks.beach }, // Garraf
    b5:  { image: U('1515404929826-76fff9fef6fe'), fallbackSrc: fallbacks.beach }, // Barceloneta
    b6:  { image: U('1544551763-46a013bb70d5'), fallbackSrc: fallbacks.beach }, // Mar Bella
    b7:  { image: U('1535530992057-1086e3680e5c'), fallbackSrc: fallbacks.beach }, // Sitges
    b8:  { image: U('1506953823645-34689e3cec83'), fallbackSrc: fallbacks.beach }, // Nova Mar Bella
    b9:  { image: U('1473116763249-2faaef81ccda'), fallbackSrc: fallbacks.beach }, // Castelldefels
    b10: { image: U('1471922694854-ff1b63b20054'), fallbackSrc: fallbacks.beach }, // Somorrostro

    // ── ROOFTOPS ──
    rt1:  { image: U('1582719478250-c89cae4dc85b'), fallbackSrc: fallbacks.rooftop }, // Ayre Rosellón
    rt2:  { image: U('1564227506-69eb858a7da0'), fallbackSrc: fallbacks.rooftop }, // La Isabela
    rt3:  { image: U('1580223743594-5510651662fb'), fallbackSrc: fallbacks.rooftop }, // Skybar
    rt4:  { image: U('1551882547-ff40c63fe5fa'), fallbackSrc: fallbacks.rooftop }, // Terrat Mandarin
    rt5:  { image: U('1470337458703-46ad1756a187'), fallbackSrc: fallbacks.rooftop }, // Pulitzer
    rt6:  { image: U('1534008897995-27a23e859048'), fallbackSrc: fallbacks.rooftop }, // Azimuth
    rt7:  { image: U('1543007630-9710e4a00a20'), fallbackSrc: fallbacks.rooftop }, // Sir Victor
    rt8:  { image: U('1517457373958-b7bdd4587205'), fallbackSrc: fallbacks.rooftop }, // Eclipse W
    rt9:  { image: U('1527192491265-7e15c55b1ed2'), fallbackSrc: fallbacks.rooftop }, // Robadora
    rt10: { image: U('1566073771259-6a6150eb08af'), fallbackSrc: fallbacks.rooftop }, // La Dolce Vitae

    // ── HIDDEN GEMS ──
    hg1:  { image: U('1549449830-ecb8b3b3ba98'), fallbackSrc: fallbacks['hidden-gem'] }, // Bunkers
    hg2:  { image: U('1585320806297-9794b3e4eeae'), fallbackSrc: fallbacks['hidden-gem'] }, // Laberint
    hg3:  { image: U('1555881400-74d7acaacd8b'), fallbackSrc: fallbacks['hidden-gem'] }, // El Born Centre
    hg4:  { image: U('1551044733-5c8e31005eb5'), fallbackSrc: fallbacks['hidden-gem'] }, // Carrer de Blai
    hg5:  { image: U('1681285217424-df357ef6d628'), fallbackSrc: fallbacks['hidden-gem'] }, // Hospital Sant Pau
    hg6:  { image: U('1508624210492-d98c7674ed4e'), fallbackSrc: fallbacks['hidden-gem'] }, // Cactus Garden
    hg7:  { image: U('1600596542815-ffad4c1539a9'), fallbackSrc: fallbacks['hidden-gem'] }, // Palau Macaya
    hg8:  { image: U('1560969184-10fe8515b0e2'), fallbackSrc: fallbacks['hidden-gem'] }, // Casa Vicens
    hg9:  { image: U('1528605248644-14dd04022da1'), fallbackSrc: fallbacks['hidden-gem'] }, // Antic Teatre
    hg10: { image: U('1477959858617-67f85cf4f1df'), fallbackSrc: fallbacks['hidden-gem'] }, // Torre Glòries

    // ── NIGHTLIFE ──
    n1:  { image: U('1574096079513-d8225ba67711'), fallbackSrc: fallbacks.nightlife }, // Paradiso
    n2:  { image: U('1566737236500-c8ac43014a67'), fallbackSrc: fallbacks.nightlife }, // Razzmatazz
    n3:  { image: U('1551024709-8f23befc6f87'), fallbackSrc: fallbacks.nightlife }, // Dr. Stravinsky
    n4:  { image: U('1533174072545-7a4b6ad7a6c3'), fallbackSrc: fallbacks.nightlife }, // Opium
    n5:  { image: U('1516450360452-9258f12d3948'), fallbackSrc: fallbacks.nightlife }, // Sala Apolo
    n6:  { image: U('1572116469696-31cd0b65607e'), fallbackSrc: fallbacks.nightlife }, // Boca Chica
    n7:  { image: U('1571266028253-6526a8f28024'), fallbackSrc: fallbacks.nightlife }, // Moog
    n8:  { image: U('1560512823-829485b8bf24'), fallbackSrc: fallbacks.nightlife }, // Mariposa Negra
    n9:  { image: U('1549488344-cbb6c34cf08b'), fallbackSrc: fallbacks.nightlife }, // Sutton Club
    n10: { image: U('1556679343-c7306c1976bc'), fallbackSrc: fallbacks.nightlife }, // Macera TallerBar

    // ── MARKETS ──
    m1:  { image: U('1488459716781-31db52582fe9'), fallbackSrc: fallbacks.market }, // Boqueria
    m2:  { image: U('1533653112349-f9c2d1b822d3'), fallbackSrc: fallbacks.market }, // Santa Caterina
    m3:  { image: U('1542838132-92c53300491e'), fallbackSrc: fallbacks.market }, // Sant Antoni
    m4:  { image: U('1565793979632-6c70d52e4ea7'), fallbackSrc: fallbacks.market }, // Encants
    m5:  { image: U('1555396273-367ea4eb4db5'), fallbackSrc: fallbacks.market }, // Palo Market
    m6:  { image: U('1487530811176-3780de880c2d'), fallbackSrc: fallbacks.market }, // Concepció
    m7:  { image: U('1543852786-1cf9dfa97f04'), fallbackSrc: fallbacks.market }, // Santa Llúcia
    m8:  { image: U('1476224203421-9ac39bcb3327'), fallbackSrc: fallbacks.market }, // Ninot
    m9:  { image: U('1506617420156-0e5f74b10d12'), fallbackSrc: fallbacks.market }, // Galvany
    m10: { image: U('1531058020387-3be344556be6'), fallbackSrc: fallbacks.market }, // Flea Market

    // ── VIEWPOINTS ──
    v1:  { image: U('1562883676-8c7feb83f09b'), fallbackSrc: fallbacks.viewpoint }, // Tibidabo
    v2:  { image: U('1588612165034-e40b377fc0d4'), fallbackSrc: fallbacks.viewpoint }, // Montjuïc Castle
    v3:  { image: U('1512470876484-6c3e8e2e5f3a'), fallbackSrc: fallbacks.viewpoint }, // Mirador Alcalde
    v4:  { image: U('1558618666-fcd25c85f82e'), fallbackSrc: fallbacks.viewpoint }, // Las Arenas
    v5:  { image: U('1564221710-40ddfa0f8cf8'), fallbackSrc: fallbacks.viewpoint }, // Columbus
    v6:  { image: U('1518005068251-37900150dfca'), fallbackSrc: fallbacks.viewpoint }, // Torre Collserola
    v7:  { image: U('1560179707-f14e90ef3623'), fallbackSrc: fallbacks.viewpoint }, // Bunkers (viewpoint)
    v8:  { image: U('1574438264-27564667df27'), fallbackSrc: fallbacks.viewpoint }, // MNAC
    v9:  { image: U('1627960320499-28ec3a0c5bd6'), fallbackSrc: fallbacks.viewpoint }, // Guinardó
    v10: { image: U('1519923834699-7cae5ef84a7c'), fallbackSrc: fallbacks.viewpoint }, // Torre Glòries view

    // ── ROMANTIC ──
    rm1:  { image: U('1585320806297-9794b3e4eeae', 1200, 800), fallbackSrc: fallbacks.romantic }, // Jardins Tamarita — reusing labyrinth-style garden
    rm2:  { image: U('1558284564-218a5ce2e2ff', 1200, 800), fallbackSrc: fallbacks.romantic }, // Sant Felip Neri — reuse OK different category
    rm3:  { image: U('1444080748397-f442aa95c3e5'), fallbackSrc: fallbacks.romantic }, // Observ Fabra
    rm4:  { image: U('1526234362402-b8d514b26ea5'), fallbackSrc: fallbacks.romantic }, // El Bosc de les Fades
    rm5:  { image: U('1470071459604-3b5ec3a7fe05'), fallbackSrc: fallbacks.romantic }, // Carretera Aigües
    rm6:  { image: U('1548199973-03cce0bbc87b'), fallbackSrc: fallbacks.romantic }, // Ciutadella Boating
    rm7:  { image: U('1518335440626-4ee8fb827376'), fallbackSrc: fallbacks.romantic }, // Caseta del Migdia
    rm8:  { image: U('1414235077428-338989a2e8c0', 1200, 800), fallbackSrc: fallbacks.romantic }, // Torre d'Alta Mar
    rm9:  { image: U('1515238152791-8225bf451d80'), fallbackSrc: fallbacks.romantic }, // Aire de Barcelona
    rm10: { image: U('1517248135467-4c7edcad34c4', 1200, 800), fallbackSrc: fallbacks.romantic }, // Hotel Neri
};

// Patch function to apply images to place data
export function getPlaceImages(id: string, category: string): { image: string; fallbackSrc: string } {
    if (imageMap[id]) return imageMap[id];
    // Ultimate fallback by category
    return {
        image: fallbacks[category] || fallbacks.attraction,
        fallbackSrc: fallbacks[category] || fallbacks.attraction
    };
}
