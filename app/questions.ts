export type Difficulty = "easy" | "medium" | "hard";

export type QuizQuestion = {
  id: string;
  question: string;
  answer: string;
  wrongOptions: readonly [string, string, string, string];
  difficulty: Difficulty;
  source: string;
};

/**
 * Places the answer among the wrong options at an index derived from `id`.
 * The order is pure so server and client render the same choices.
 */
export function orderedOptions(
  question: Pick<QuizQuestion, "id" | "answer" | "wrongOptions">,
): string[] {
  const options = [...question.wrongOptions];
  if (options.includes(question.answer)) {
    throw new Error(`Answer is also a wrong option for ${question.id}`);
  }

  const answerIndex = hashString(question.id) % (options.length + 1);
  options.splice(answerIndex, 0, question.answer);
  return options;
}

function hashString(value: string): number {
  // FNV-1a, kept in uint32 so the choice slot stays stable across runtimes.
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export const questions: readonly QuizQuestion[] = [
  {
    id: "slime-exp",
    question: "How much EXP does a Slime give?",
    answer: "12 EXP",
    wrongOptions: ["8 EXP", "10 EXP", "14 EXP", "15 EXP"],
    difficulty: "easy",
    source: "https://meowdb.com/msclassic/monsters/7",
  },
  {
    id: "zombie-mushroom-exp",
    question: "How much EXP does a Zombie Mushroom give?",
    answer: "45 EXP",
    wrongOptions: ["35 EXP", "40 EXP", "41 EXP", "50 EXP"],
    difficulty: "easy",
    source: "https://meowdb.com/msclassic/monsters/21",
  },
  {
    id: "max-character-level",
    question: "What is the maximum character level in MapleStory Classic World?",
    answer: "Level 100",
    wrongOptions: ["Level 70", "Level 120", "Level 150", "Level 200"],
    difficulty: "easy",
    source:
      "https://meowdb.com/msclassic/guides/what-is-maplestory-classic-worlds",
  },
  {
    id: "red-potion-cost",
    question: "How many mesos does a Red Potion cost from most NPC shops?",
    answer: "50 mesos",
    wrongOptions: ["25 mesos", "100 mesos", "150 mesos", "220 mesos"],
    difficulty: "easy",
    source: "https://meowdb.com/msclassic/item-db/270",
  },
  {
    id: "kpq-unlock-level",
    question: "At what level does the Kerning City Party Quest unlock?",
    answer: "21",
    wrongOptions: ["10", "15", "25", "30"],
    difficulty: "easy",
    source:
      "https://meowdb.com/msclassic/guides/kerning-city-party-quest-kpq-guide",
  },
  {
    id: "cleric-heal",
    question: "What does Cleric's Heal do besides restoring party HP?",
    answer: "Damages undead monsters",
    wrongOptions: [
      "Cures status ailments",
      "Revives party members",
      "Raises party max HP",
      "Reflects damage",
    ],
    difficulty: "easy",
    source: "https://meowdb.com/msclassic/skills/cleric/heal",
  },
  {
    id: "mano-map",
    question: "Which map does the snail boss Mano roam?",
    answer: "Thicket Around the Beach III",
    wrongOptions: [
      "The Pig Beach",
      "Land of Wild Boar",
      "Parched Land",
      "The Blue Mushroom Forest",
    ],
    difficulty: "medium",
    source: "https://meowdb.com/msclassic/monsters/700004",
  },
  {
    id: "dark-marbles",
    question: "How many Dark Marbles do you collect in the 2nd job test?",
    answer: "30",
    wrongOptions: ["10", "20", "50", "100"],
    difficulty: "medium",
    source: "https://meowdb.com/msclassic/guides/warrior-class-guide",
  },
  {
    id: "king-slime-drop",
    question: "What item does King Slime drop in the Kerning City Party Quest?",
    answer: "Squishy Shoes",
    wrongOptions: [
      "Companion's Magic Box",
      "Slime Bubble",
      "Pan Lid",
      "Blue Snail Shell",
    ],
    difficulty: "medium",
    source: "https://meowdb.com/msclassic/monsters/800003",
  },
  {
    id: "wetbottom-secret-book",
    question:
      "What equipment does the last step of Mr. Wetbottom's Secret Book reward?",
    answer: "Sauna Robe",
    wrongOptions: [
      "Bathrobe",
      "Old Raggedy Cape",
      "Weighted Earrings",
      "Squishy Shoes",
    ],
    difficulty: "medium",
    source: "https://meowdb.com/msclassic/quest-tracker/10508",
  },
  {
    id: "alex-runaway",
    question: "Why did Alex, the kid in Kerning City, run away from home?",
    answer: "A fight with his strict father",
    wrongOptions: [
      "To become a Thief",
      "His mother's watch was stolen",
      "He got lost after a ship trip",
      "To hunt treasure in Sleepywood",
    ],
    difficulty: "medium",
    source: "https://meowdb.com/msclassic/quest-tracker/10300",
  },
  {
    id: "jr-wraith-weakness",
    question: "Which two elements is the Jr. Wraith weak to?",
    answer: "Holy and Fire",
    wrongOptions: [
      "Ice and Lightning",
      "Holy and Ice",
      "Fire and Poison",
      "Lightning and Holy",
    ],
    difficulty: "medium",
    source: "https://meowdb.com/msclassic/monsters/32",
  },
  {
    id: "red-drake-weakness",
    question: "Which element is the Red Drake weak to?",
    answer: "Ice",
    wrongOptions: ["Fire", "Holy", "Lightning", "Poison"],
    difficulty: "medium",
    source: "https://meowdb.com/msclassic/monsters/50",
  },
  {
    id: "haste-max",
    question: "At max level, what does Haste give for 300 seconds?",
    answer: "Speed +30, Jump +10",
    wrongOptions: [
      "Speed +40, Jump +20",
      "Speed +20, Jump +20",
      "Speed +30, Jump +20",
      "Speed +40, Jump +10",
    ],
    difficulty: "medium",
    source: "https://meowdb.com/msclassic/skills/assassin/haste",
  },
  {
    id: "flying-medicine",
    question:
      "In the Icarus questline, which Ellinia fairy gives you the Flying Medicine?",
    answer: "Wing the Fairy",
    wrongOptions: [
      "Arwen the Fairy",
      "Rowen the Fairy",
      "Athena Pierce",
      "Maya",
    ],
    difficulty: "medium",
    source: "https://meowdb.com/msclassic/quest-tracker/10320",
  },
  {
    id: "mushmom-spawn",
    question: "The original Mushmom spawns in which hidden map near Henesys?",
    answer: "Someone Else's House",
    wrongOptions: [
      "The Grave of Mushmom",
      "Someone Else's Grave",
      "The Blue Mushroom Forest",
      "The Field South of Ellinia",
    ],
    difficulty: "hard",
    source: "https://meowdb.com/msclassic/monsters/700000",
  },
  {
    id: "arwen-glass-shoe",
    question: "Arwen and the Glass Shoe gives one of which two random items?",
    answer: "Piece of Ice or Fairy Wing",
    wrongOptions: [
      "Star Rock or Moon Rock",
      "Pink Anthurium or Red Ginseng",
      "Hat Accuracy Scroll or Overall DEX Scroll",
      "Cake or Pig Illustrated",
    ],
    difficulty: "hard",
    source: "https://meowdb.com/msclassic/quest-tracker/10200",
  },
  {
    id: "thief-job-instructor",
    question: "Where is the Thief Job Instructor who runs the 2nd job test?",
    answer: "Construction Site North of Kerning City",
    wrongOptions: [
      "Thieves' Hideout",
      "Kerning City Civic Center",
      "Line 1 <Area 1>",
      "B2 <Subway Depot>",
    ],
    difficulty: "hard",
    source: "https://meowdb.com/msclassic/npcs/424",
  },
  {
    id: "elixir-restore",
    question: "What percentage of HP and MP does an Elixir restore?",
    answer: "35%",
    wrongOptions: ["25%", "50%", "75%", "100%"],
    difficulty: "hard",
    source: "https://meowdb.com/msclassic/item-db/274",
  },
  {
    id: "jr-balrog-level",
    question: "What level is Jr. Balrog?",
    answer: "80",
    wrongOptions: ["43", "60", "70", "100"],
    difficulty: "hard",
    source: "https://meowdb.com/msclassic/monsters/700001",
  },
  {
    id: "improved-mp-recovery",
    question:
      "How many levels of Improved MP Recovery do you need before learning Max MP Increase?",
    answer: "3",
    wrongOptions: ["1", "5", "10", "20"],
    difficulty: "hard",
    source: "https://meowdb.com/msclassic/skills/magician/max-mp-increase",
  },
  {
    id: "cheapest-pet-food",
    question: "Which NPC sells Pet Food at the cheapest price, 30 mesos?",
    answer: "Doofus (Henesys)",
    wrongOptions: [
      "Valen (Florina Beach)",
      "Mina (Lith Harbor)",
      "Arturo (Perion)",
      "Mr. Smith (Henesys)",
    ],
    difficulty: "hard",
    source: "https://meowdb.com/msclassic/item-db/269",
  },
];
