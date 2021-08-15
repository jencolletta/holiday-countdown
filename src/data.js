
/*Get Todays Date*/
var currentDate=new Date()

/*Get Halloweens Date*/
var halloweenDate=new Date(`October 31, ${currentDate.getFullYear()} 00:00:00`);
const timeUntilHalloween = halloweenDate.getTime() - currentDate.getTime()

/*Get Thanksgiving Date*/
var thanksgivingDate=new Date(`November 25, ${currentDate.getFullYear()} 00:00:00`);
const timeUntilThanksgiving = thanksgivingDate.getTime() - currentDate.getTime()

/*Get Christmas' Date*/
var christmasDate=new Date(`December 25, ${currentDate.getFullYear()} 00:00:00`);
const timeUntilChristmas = christmasDate.getTime() - currentDate.getTime()

/*Get New Years Eve Date*/
var newYearsDate=new Date(`January 1, ${currentDate.getFullYear()} 00:00:00`);
const timeUntilNewYears = newYearsDate.getTime() - currentDate.getTime()

/*Get Valentines Day Date*/
var valentinesDate=new Date(`Febuary 14, ${currentDate.getFullYear()} 00:00:00`);
const timeUntilValentines = valentinesDate.getTime() - currentDate.getTime()


export default [
  {
    id: 1,
    name: 'Halloween', 
    days: Math.abs(Math.ceil(timeUntilHalloween / (1000 * 60 * 60 * 24))),
    image:
      'https://internationalnewsagency.org/wp-content/uploads/2020/10/pumpkin-emoji-1200x900.png',
  },
  {
    id: 2,
    name: 'Thanksgiving',
    days: Math.abs(Math.ceil(timeUntilThanksgiving / (1000 * 60 * 60 * 24))),
    image:
      'https://64.media.tumblr.com/1ae9f0b83bb33f50905b393a53965322/tumblr_inline_nydkzdgLIc1s4rar7_1280.png',
  },
  {
    id: 3,
    name: 'Christmas',
    days: Math.abs(Math.ceil(timeUntilChristmas / (1000 * 60 * 60 * 24))),
    image:
      'https://pngimage.net/wp-content/uploads/2018/05/christmas-tree-emoji-png-2.png',
  },
  {
    id: 4,
    name: 'New Years Day',
    days: Math.abs(Math.ceil(timeUntilNewYears / (1000 * 60 * 60 * 24))),
    image:
      'https://pbs.twimg.com/media/DqwfauOXgAAm5_L.jpg',
  },
  {
    id: 5,
    name: 'Valentines Day',
    days: Math.abs(Math.ceil(timeUntilValentines / (1000 * 60 * 60 * 24))),
    image:
      'https://i.pinimg.com/originals/2d/ca/9d/2dca9d6dae33613bfd6d6fa1ba67872c.png',
  },
];
