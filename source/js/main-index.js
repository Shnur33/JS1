const getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const idPhoto = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];
const url = "photo /i.jpg";

const discription = [
  "Описание придумайте самостоятельно1",
  "Описание придумайте самостоятельно2",
  "Описание придумайте самостоятельно3",
  "Описание придумайте самостоятельно4",
  "Описание придумайте самостоятельно5",
  "Описание придумайте самостоятельно6",
  "Описание придумайте самостоятельно7",
  "Описание придумайте самостоятельно8",
  "Описание придумайте самостоятельно9",
  "Описание придумайте самостоятельно10",
  "Описание придумайте самостоятельно11",
  "Описание придумайте самостоятельно12",
  "Описание придумайте самостоятельно13",
  "Описание придумайте самостоятельно14",
  "Описание придумайте самостоятельно15",
  "Описание придумайте самостоятельно16",
  "Описание придумайте самостоятельно17",
  "Описание придумайте самостоятельно18",
  "Описание придумайте самостоятельно19",
  "Описание придумайте самостоятельно20",
  "Описание придумайте самостоятельно21",
  "Описание придумайте самостоятельно22",
  "Описание придумайте самостоятельно23",
  "Описание придумайте самостоятельно24",
  "Описание придумайте самостоятельно25",
];

const createPhotos = () => {
  randomDiscription = getRandomNumber(0, discription.length - 1);
  randomLikes = getRandomNumber(15, 200);
  return {
    idPhoto: idPhoto[randomidPhoto],
    discription: discription[randomDiscription],
    likes: randomLikes,
  };
};
const usersPhoto = new Array(25).fill(null).map(() => createPhotos());
console.log(usersPhoto);

const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const avatar = [
  "img/avatar-buildimgavatar-1.svg.svg",
  "img/avatar-buildimgavatar-2.svg.svg",
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

//export { createComments };
