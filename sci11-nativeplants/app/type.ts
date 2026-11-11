export type PageId = "landing" | "map" | "plants" | "plant" | "quiz" | "about";

export interface Plant {
  n: string;
  s: string;
  d: string;
  e: string;
  u: string;
  l: string;
  c: string;
}

export const PLANTS: Plant[] = [
  {
    n: "Agubangbang",
    s: "Medinilla pendula",
    d: "Agubangbang produces long, hanging clusters of pink to purplish flowers that develop into soft, dark purplish berries. It commonly grows in mossy forests and damp habitats, sometimes attached to other plants[cite: 17].",
    e: "Its fruits provide food for birds and contribute to local forest food webs. It is also an important component of the Cordillera's native forest vegetation and biodiversity[cite: 17].",
    u: "An ethnobotanical survey in Benguet documented its fruits as food, including snacks and desserts, and as decoration or garnish. The study also recorded its use as bird forage and a reported traditional medicinal use[cite: 17].",
    l: "UP Baguio Campus - East of College of Science[cite: 17]",
    c: "16.4059464, 120.5987206[cite: 17]"
  },
  {
    n: "Oriental Hawkweed",
    s: "Youngia japonica",
    d: "Oriental Hawkweed is a small herbaceous plant with a basal rosette of deeply lobed leaves and upright flowering stems. It produces clusters of small yellow flower heads, followed by seeds with fine, white, hair-like structures that aid wind dispersal[cite: 17].",
    e: "It contributes to vegetation in open areas, clearings, and riverbanks. Its flowers provide resources for visiting insects, while its lightweight seeds allow the species to spread through wind dispersal[cite: 17].",
    u: "Broader Asian references document its use as a food and in traditional medicine. However, these uses should not automatically be attributed to local Benguet communities without specific supporting evidence[cite: 17].",
    l: "UP Baguio Campus - East of College of Science[cite: 17]",
    c: "16.4061503, 120.5986096[cite: 17]"
  },
  {
    n: "Acystopteris Fern",
    s: "Acystopteris tenuisecta",
    d: "Acystopteris tenuisecta is a delicate fern with a creeping underground rhizome and finely divided, three-pinnate fronds. It commonly grows in moist forest valleys and along damp streamsides, particularly in mountainous environments[cite: 17].",
    e: "It contributes to the diversity of native fern communities in moist forest habitats. Its growth also adds vegetation to shaded forest-floor and rocky environments[cite: 17].",
    u: "No specific traditional or commercial use was verified in the botanical references consulted. Its primary documented significance for this project is its contribution to native fern biodiversity[cite: 17].",
    l: "UP Baguio Campus - East of College of Science[cite: 17]",
    c: "16.4059651, 120.5988151[cite: 17]"
  },
  {
    n: "Benguet Pine",
    s: "Pinus kesiya",
    d: "The Benguet Pine is a large evergreen tree with thick, deeply fissured bark and long, slender, bright-green needles usually arranged in bundles of three. It produces woody, oval-shaped seed cones[cite: 17].",
    e: "It is a light-demanding pioneer tree that naturally grows in open woodlands and disturbed areas. It forms characteristic pine forests that contribute to the Cordillera's highland ecosystem[cite: 17].",
    u: "Its wood is used for construction, timber, particleboard, and paper pulp. Its oleoresin is also collected for commercial purposes[cite: 17].",
    l: "UP Baguio Campus - East of Inang Laya[cite: 17]",
    c: "16.4056454, 120.5985087[cite: 17]"
  },
  {
    n: "Christella Fern",
    s: "Christella dentata",
    d: "Christella dentata is a fern with a creeping rhizome and clusters of divided, green fronds. Its leaflets have rounded segments, and the undersides of its fronds bear small reproductive structures called sori, which produce spores[cite: 17].",
    e: "It contributes to the natural vegetation of open sites, light forests, and streamside environments. Its growth adds to the diversity of native fern vegetation[cite: 17].",
    u: "No specific traditional or commercial use in Benguet was established by the sources reviewed. Its documented importance for this project is its contribution to native plant diversity and forest vegetation[cite: 17].",
    l: "UP Baguio Campus - Southwest of Inang Laya[cite: 17]",
    c: "16.4055408, 120.5983021[cite: 17]"
  },
  {
    n: "Dryopteris",
    s: "Dryopteris sparsa",
    d: "A rhizomatous fern with clustered fronds. Its leaves are divided into smaller leaflets, giving them a finely segmented appearance. It grows in moist, shaded environments[cite: 17].",
    e: "Helps provide vegetation cover on the forest floor and contributes to suitable microhabitats for small organisms. This ecological role is based on its growth form and habitat[cite: 17].",
    u: "Its main documented value in this entry is its ecological and botanical importance. A source from Papua New Guinea also documents its fronds as edible, but this should not be treated as evidence of local Philippine use[cite: 17].",
    l: "UP Baguio Campus - Stairs Going Down the College of Social Science Building[cite: 17]",
    c: "16.4057203, 120.5974492[cite: 17]"
  },
  {
    n: "Dianella",
    s: "Dianella ensifolia",
    d: "A perennial, clump-forming plant that can grow around 0.6–2 meters tall. It has long, narrow, sword-shaped leaves, small pale bluish-purple flowers, and shiny blue-purple berries[cite: 17].",
    e: "Adds vegetation cover and may provide food for wildlife through its berries. Its flowers also contribute to the resources available to visiting insects[cite: 17].",
    u: "Commonly grown as an ornamental plant, particularly in gardens and rockeries. PROSEA also documents traditional uses in other Southeast Asian countries, but these should not automatically be attributed to Filipino communities[cite: 17].",
    l: "UP Baguio Campus - Walkway leading to court a from exit gate[cite: 17]",
    c: "16.4052141, 120.5988778[cite: 17]"
  },
  {
    n: "Mayana",
    s: "Coleus scutellarioides",
    d: "A leafy plant known for its colorful foliage, which may have combinations of green, red, pink, purple, and yellow. Its leaves grow in opposite pairs along the stems. It produces small flowers on terminal spikes[cite: 17].",
    e: "Its foliage contributes to vegetation cover, while its flowers can provide resources for visiting insects[cite: 17].",
    u: "Widely grown as an ornamental plant because of its colorful leaves. Philippine references also document traditional external uses of its leaves[cite: 17].",
    l: "UP Baguio Campus - Walkway parallel to the exit driveway[cite: 17]",
    c: "16.4052925, 120.5989935[cite: 17]"
  },
  {
    n: "Impatiens",
    s: "Impatiens platypetala",
    d: "A flowering plant that can grow up to approximately one meter tall. It has oval to lance-shaped leaves with serrated edges and distinctive orange flowers with a white center. It is associated with damp, shaded environments[cite: 17].",
    e: "Its flowers can serve as a source of nectar and pollen for visiting insects and other flower visitors. It also contributes to the diversity of forest understory vegetation[cite: 17].",
    u: "Can be cultivated for ornamental purposes because of its attractive flowers. Its botanical and ecological value is also important in native plant conservation[cite: 17].",
    l: "UP Baguio Campus - In Front of Himnasyo Amianan[cite: 17]",
    c: "16.4061995, 120.5985177[cite: 17]"
  },
  {
    n: "Bayabang",
    s: "Nephrolepis cordifolia",
    d: "A fern with arching, pinnate fronds composed of numerous small leaflets. Its underground rhizomes produce fleshy, tuber-like structures and are covered with brownish scales[cite: 17].",
    e: "Contributes to ground vegetation cover and provides small habitats for organisms living in moist environments[cite: 17].",
    u: "Commonly cultivated as an ornamental fern. Botanical references also document food and traditional medicinal uses, although these should not be interpreted as recommendations for self-treatment[cite: 17].",
    l: "UP Baguio Campus - In Front of Himnasyo Amianan[cite: 17]",
    c: "16.4061664, 120.5985613[cite: 17]"
  }
];