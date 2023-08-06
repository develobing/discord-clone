const dummyMessages = [
  {
    _id: 1,
    content: 'Hello, how are you?',
    sameDay: false,
    sameAuthor: false,
    author: {
      username: 'John Doe',
    },
    date: '2021-10-01',
  },
  {
    _id: 2,
    content: 'I am fine, thank you. How are you?',
    sameAuthor: false,
    sameDay: true,
    author: {
      username: 'Jane Doe',
    },
    date: '2021-10-01',
  },
  {
    _id: 3,
    content: 'I am fine too, thanks for asking.',
    sameAuthor: false,
    sameDay: true,
    author: {
      username: 'John Doe',
    },
    date: '2021-10-01',
  },

  {
    _id: 4,
    content: 'Hello, how are you?',
    sameAuthor: true,
    sameDay: true,
    author: {
      username: 'John Doe',
    },
    date: '2021-10-02',
  },

  {
    _id: 5,
    content: 'I am fine, thank you. How are you?',
    sameAuthor: false,
    sameDay: true,
    author: {
      username: 'Jane Doe',
    },
    date: '2021-10-02',
  },

  {
    _id: 6,
    content: 'I am fine too, thanks for asking.',
    sameAuthor: true,
    sameDay: true,
    author: { username: 'John Doe' },
    date: '2021-10-02',
  },

  {
    _id: 7,
    content: 'Hello, how are you?',
    sameAuthor: true,
    sameDay: false,
    author: {
      username: 'John Doe',
    },
    date: '2021-10-03',
  },
];

export default dummyMessages;
