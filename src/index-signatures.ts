export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'tom', underTwenty: false };


profile.name = 'tom';
profile.age = 43;
profile.nationality = 'Japan';
