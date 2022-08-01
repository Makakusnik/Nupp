import { Url } from "url";
import { CustomIcon } from "../components/Custom Icons/Icons";

export interface Data {
  name: string;
  secondaryData: string;
  energy: number;
  fats: number;
  carbs: number;
  proteins: number;
  salt: number;
  avgPrice: number;
}

export type CategoryType = {
  name: string;
  id: string;
};

export var categoriesData: CategoryType[] = [
  { name: "Obilniny", id: "1" },
  { name: "Pečivo", id: "2" },
  { name: "Jogurty", id: "3" },
  { name: "Mäso", id: "4" },
  { name: "Sladkosti", id: "5" },
  { name: "Bezlepkové Pečivo", id: "67" },
  { name: "Nápoje", id: "6" },
  { name: "Proteinové Milkshakey", id: "8" },
];

export type VendorType = {
  name: string;
  id: string;
  url?: string;
  residence?: string;
  image?: any;
};

export const VendorData: VendorType[] = [
  { name: "Coop Jednota", id: "1233", url: "www.kokotnakovo.sk", residence: "Bratislava, Pičná 8" },
  { name: "Lidl", id: "1533", url: "www.lidel.sk", residence: "Bratislava, Pičná 8" },
  { name: "Fakin Billa", id: "113", url: "www.BillaBillaBilla.sk", residence: "Bratislava, Pičná 8" },
  { name: "Coop Mountfield", id: "1245" },
];

export type FoodAdditive = {
  code: string;
  name: string;
  type: "healthy" | "warning" | "dangerous";
  id: string;
};

export const foodAdditives: FoodAdditive[] = [
  { id: "fadk", code: "E126", name: "Aluminium", type: "dangerous" },
  { id: "faak", code: "E152", name: "Gazorsd oiasdj fojasdfoi jasdoifjdosajfodsj oipazor", type: "healthy" },
  { id: "fsak", code: "E015", name: "Flumstick", type: "warning" },
];

export type Alergen = {
  name: string;
  id: string;
};

export const Alergens: Alergen[] = [
  { name: "nuts", id: "15" },
  { name: "Sulfur Dioxide", id: "25 " },
  { name: "Shmixid", id: "16" },
];

export type RecipeDataType = {
  name: string;
  id: string;
};

export const RecipeData = [
  { name: "Chillic Con Carne", id: "ID1232" },
  { name: "Buchty Na Pare", id: "ID22" },
  { name: "Spagety Ala Boloňezeee", id: "13" },
];

export type IngredientType = {
  name: string;
  brandName: string;
  id: string;
  weight: number;
};

export const SelectedIngredients: IngredientType[] = [
  { name: "Banana", brandName: "Ferrari", id: "12344", weight: 153 },
  { name: "Chleba", brandName: "Luis Vuitton", id: "12349", weight: 113 },
  { name: "Rozek", brandName: "Tesco", id: "12348", weight: 45 },
];

export type MarkType = {
  name: string;
  id: string;
  type: "healthy" | "warning" | "dangerous";
  iconName: CustomIcon;
};

export const MarkData = [
  { name: "Healthy Fats", id: "1223", description: "", iconName: "" },
  { name: "Fiber", id: "113" },
  { name: "Antioxidants", id: "1232213334" },
];

export const MarkData2 = [
  { name: "Healthy Fats2", id: "1223" },
  { name: "Fiber2", id: "113" },
  { name: "Antioxidants2", id: "1233334" },
  { name: "Antioxidants2", id: "123322334" },
];

export var data: Data[] = [
  {
    name: "Shay Whitaker",
    secondaryData: "ShitStain",
    energy: 1522,
    fats: 524,
    carbs: 213,
    proteins: 1680,
    salt: 1779,
    avgPrice: 0,
  },
  {
    name: "Samson Park",
    secondaryData: "Fakapple",
    energy: 429,
    fats: 1166,
    carbs: 44,
    proteins: 1994,
    salt: 1228,
    avgPrice: 72,
  },
  {
    name: "Wyoming Weber",
    secondaryData: "ShitStain",
    energy: 474,
    fats: 1042,
    carbs: 1462,
    proteins: 780,
    salt: 1024,
    avgPrice: 103,
  },
  {
    name: "Emma Horn",
    secondaryData: "GayHouse",
    energy: 1990,
    fats: 1900,
    carbs: 561,
    proteins: 504,
    salt: 321,
    avgPrice: 57,
  },
  {
    name: "Fritz Lowery",
    secondaryData: "FritziPiči",
    energy: 624,
    fats: 365,
    carbs: 1999,
    proteins: 1527,
    salt: 1076,
    avgPrice: 93,
  },
  {
    name: "Wylie Greer",
    secondaryData: "ShitStain",
    energy: 669,
    fats: 785,
    carbs: 1361,
    proteins: 920,
    salt: 1440,
    avgPrice: 88,
  },
  {
    name: "Nita Ochoa",
    secondaryData: "ShitStain",
    energy: 1085,
    fats: 498,
    carbs: 1801,
    proteins: 1343,
    salt: 1456,
    avgPrice: 68,
  },
  {
    name: "Honorato Petersen",
    secondaryData: "StalinIsCuck",
    energy: 1273,
    fats: 847,
    carbs: 1994,
    proteins: 1202,
    salt: 1934,
    avgPrice: 43,
  },
  {
    name: "Brynne Benson",
    secondaryData: "ShitStain",
    energy: 1993,
    fats: 193,
    carbs: 1182,
    proteins: 1961,
    salt: 1080,
    avgPrice: 103,
  },
  {
    name: "Carissa Battle",
    secondaryData: "PutinsRussy",
    energy: 1357,
    fats: 1007,
    carbs: 1039,
    proteins: 1218,
    salt: 1007,
    avgPrice: 107,
  },
  {
    name: "Zelda Butler",
    secondaryData: "ShitStain",
    energy: 899,
    fats: 878,
    carbs: 1826,
    proteins: 1104,
    salt: 813,
    avgPrice: 50,
  },
  {
    name: "Karleigh Fisher",
    secondaryData: "ShitStain",
    energy: 1235,
    fats: 231,
    carbs: 588,
    proteins: 1234,
    salt: 1767,
    avgPrice: 142,
  },
  {
    name: "Aretha Scott",
    secondaryData: "ShitStain",
    energy: 64,
    fats: 979,
    carbs: 1466,
    proteins: 861,
    salt: 1609,
    avgPrice: 88,
  },
  {
    name: "Iris Garcia",
    secondaryData: "ShitStain",
    energy: 62,
    fats: 1024,
    carbs: 659,
    proteins: 1335,
    salt: 1061,
    avgPrice: 117,
  },
  {
    name: "Shoshana Daniels",
    secondaryData: "ShitStain",
    energy: 948,
    fats: 560,
    carbs: 1572,
    proteins: 1651,
    salt: 1188,
    avgPrice: 67,
  },
  {
    name: "Oscar Baxter",
    secondaryData: "ShitStain",
    energy: 117,
    fats: 1661,
    carbs: 389,
    proteins: 1070,
    salt: 931,
    avgPrice: 14,
  },
  {
    name: "Keaton Roach",
    secondaryData: "ShitStain",
    energy: 535,
    fats: 1338,
    carbs: 1330,
    proteins: 1222,
    salt: 1079,
    avgPrice: 24,
  },
  {
    name: "Anjolie Mills",
    secondaryData: "ShitStain",
    energy: 139,
    fats: 636,
    carbs: 1071,
    proteins: 830,
    salt: 1634,
    avgPrice: 6,
  },
  {
    name: "Bruce Snyder",
    secondaryData: "ShitStain",
    energy: 1629,
    fats: 1078,
    carbs: 704,
    proteins: 445,
    salt: 1084,
    avgPrice: 72,
  },
  {
    name: "Aurelia Richard",
    secondaryData: "ShitStain",
    energy: 396,
    fats: 2000,
    carbs: 1909,
    proteins: 1432,
    salt: 209,
    avgPrice: 77,
  },
  {
    name: "Emery Frazier",
    secondaryData: "ShitStain",
    energy: 1702,
    fats: 0,
    carbs: 510,
    proteins: 1355,
    salt: 1045,
    avgPrice: 55,
  },
  {
    name: "Luke Simpson",
    secondaryData: "ShitStain",
    energy: 296,
    fats: 948,
    carbs: 1885,
    proteins: 1335,
    salt: 411,
    avgPrice: 142,
  },
  {
    name: "Clinton Avery",
    secondaryData: "ShitStain",
    energy: 1682,
    fats: 1194,
    carbs: 1023,
    proteins: 511,
    salt: 1300,
    avgPrice: 84,
  },
  {
    name: "Craig Byrd",
    secondaryData: "ShitStain",
    energy: 750,
    fats: 694,
    carbs: 1027,
    proteins: 1275,
    salt: 1539,
    avgPrice: 28,
  },
  {
    name: "Bradley Donovan",
    secondaryData: "ShitStain",
    energy: 1215,
    fats: 127,
    carbs: 1142,
    proteins: 22,
    salt: 411,
    avgPrice: 87,
  },
];
