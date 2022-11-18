export const getRandomFromArray = (arrayLength: number) => Math.floor(Math.random() * arrayLength);

export function isOdd(num: number) {
  return num % 2;
}

const straffer = ["knebøy", "pushups", "situps", "utfall", "burpees", "spensthopp"];

export const getStraffe = (nummer: number) =>
  `10 straffe-${straffer[getRandomFromArray(straffer.length)]} mens du venter til${" "}
  ${nummer}. desember`;
