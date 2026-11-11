export type PageId = "landing" | "map" | "plants" | "plant" | "quiz" | "about";

export interface Plant {
  n: string;
  s: string;
  x: number;
  y: number;
  L: [string, string][];
  R: [string, string][];
}

export const PLANTS: Plant[] = [
  {
    n: "Benguet pine",
    s: "Pinus kesiya",
    x: 30,
    y: 35,
    L: [["Habitat", "Cool highlands, often in the Cordillera."], ["Height", "Tall evergreen tree."], ["Leaves", "Needles in bundles of three."]],
    R: [["Local use", "Timber and resin; a Baguio symbol."], ["Status", "Add conservation status here."], ["On campus", "Add where to find it."]]
  },
  {
    n: "Tree fern",
    s: "Cyathea sp.",
    x: 55,
    y: 55,
    L: [["Habitat", "Shaded, humid slopes and gullies."], ["Height", "A slender trunk topped with a crown of fronds."], ["Leaves", "Large, finely divided fronds."]],
    R: [["Local use", "Add traditional uses here."], ["Status", "Add conservation status here."], ["On campus", "Add where to find it."]]
  },
  {
    n: "Philippine lily",
    s: "Lilium philippinense",
    x: 70,
    y: 28,
    L: [["Habitat", "Open, grassy mountain slopes."], ["Flower", "Long white trumpet flowers."], ["Leaves", "Narrow, scattered along the stem."]],
    R: [["Local use", "Add traditional uses here."], ["Status", "Add conservation status here."], ["On campus", "Add where to find it."]]
  },
  {
    n: "Vireya rhododendron",
    s: "Rhododendron sp.",
    x: 42,
    y: 72,
    L: [["Habitat", "Montane forests and ridges."], ["Flower", "Clusters of bright, tubular blooms."], ["Leaves", "Thick, leathery, evergreen."]],
    R: [["Local use", "Add traditional uses here."], ["Status", "Add conservation status here."], ["On campus", "Add where to find it."]]
  }
];