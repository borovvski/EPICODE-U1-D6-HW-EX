console.log("Spaghetti alla Carbonara Recipe:");
let spaghetti;
spaghetti = 400;
let guanciale = 250;
let veryFreshEggYolk = 16;
let sixYolks = veryFreshEggYolk * 6;
let agedGratedPecorinoRomanoCheese = 50;
let rawBlackPepper = 4;
console.log("Ingredients for 4 persons:");
console.log("Spaghetti", spaghetti);
console.log("Guanciale", guanciale);
console.log("6 Fresh Yolks in grams", sixYolks);
console.log("Grated Cheese", agedGratedPecorinoRomanoCheese);
console.log("Pepper", rawBlackPepper);

console.log(
  "\nTo make carbonara, first cut the guanciale into 1cm layers, then into long strips."
);
console.log(
  "\nCombine the egg yolks with the cheese.",
  sixYolks + agedGratedPecorinoRomanoCheese
);
let carbonara = sixYolks + agedGratedPecorinoRomanoCheese;
console.log(
  "\nRoast the black pepper on a pan, and combine a small amount of it to the yolks and chees mixture, set aside the rest.",
  0.25 * rawBlackPepper + carbonara
);
let pepperCheeseAndYolks = 0.25 * rawBlackPepper + carbonara;
let pepperLeftOvers = 0.75 * rawBlackPepper;
console.log(
  "\nBrown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp, then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down."
);
console.log(
  "\nCook the pasta with a pinch of salt in the water (guanciale is already very salty);"
);
let absorbtionRate = 1.8;
let cookedSpaghettiWeight = spaghetti * absorbtionRate;
console.log(
  "\nset aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente.",
  cookedSpaghettiWeight
);
let creamySauce = 28;
console.log(
  "\nPour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat:",
  creamySauce
);
carbonara = cookedSpaghettiWeight + creamySauce + pepperCheeseAndYolks;
console.log(
  "\nMix the sauce with pasta and yolk and cheese mixture",
  carbonara
);
carbonara = carbonara + pepperLeftOvers;
console.log("\nAdd the remaining pepper and enoy!", carbonara);
