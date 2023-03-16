const getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const avatar = [
  "img/avatar-1.svg",
  "img/avatar-2.svg",
  "img/avatar-3.svg",
  "img/avatar-4.svg",
  "img/avatar-5.svg",
  "img/avatar-6.svg",
];

const message = [
  "Все отлично!",
  "В целом все не плохо.Но не все.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?",
  "Когда делаете фотографии, хорошо бы убирать палец из кадра.",
];
const names = [
  "Александр",
  "Женек",
  "Анна",
  "Антон",
  "Ника",
  "Андрюха",
  "Денис",
];

const createComments = () => {
  const randomId = getRandomNumber(0, id.length - 1);
  const randomAvatar = getRandomNumber(0, avatar.length - 1);
  const randomMessage = getRandomNumber(0, message.length - 1);
  const randomName = getRandomNumber(0, names.length - 1);

  return {
    id: id[randomId],
    avatar: avatar[randomAvatar],
    message: message[randomMessage],
    name: names[randomName],
  };
};
console.log(createComments());
