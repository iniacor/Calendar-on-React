const baseUrl = 'https://62da9225e56f6d82a7651b64.mockapi.io/api/v1/events';

const events = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    dateFrom: new Date(2022, 8, 1, 10, 15),
    dateTo: new Date(2022, 8, 1, 12, 0),
  },
  {
    id: 2,
    title: 'Go to the school',
    description: 'hello, 2 am',
    dateFrom: new Date(2022, 8, 2, 10, 15),
    dateTo: new Date(2022, 8, 2, 11, 0),
  },
  {
    id: 3,
    title: 'Lunch',
    description: '',
    dateFrom: new Date(2022, 8, 3, 10, 30),
    dateTo: new Date(2022, 8, 3, 11, 30),
  },
  {
    id: 4,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2022, 8, 4, 10, 30),
    dateTo: new Date(2022, 8, 4, 11, 0),
  },
];

export default events;
