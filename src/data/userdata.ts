interface CardProps {
  image: string;
  title: string;
  category: string;
}

interface Userdata {
  username: string;
  cards: CardProps[];
  images: string[];
}

const userdata: Userdata[] = [
  {
    username: 'denis',
    cards: [
      {
        image: '/placeholder/mars-08.jpg',
        title: 'Очень весенний, майский кот',
        category: '01.05.2024',
      },
      {
        image: '/placeholder/mars-06.jpg',
        title: 'Он любит апельсины',
        category: '04.05.2024',
      },
      {
        image: '/placeholder/mars-07.jpg',
        title: 'Ну какой же он милый дурачок',
        category: '21.04.2024',
      },
      {
        image: '/placeholder/mars-03.jpg',
        title: 'Не вдупляет что происходит',
        category: '17.05.2024',
      },
      {
        image: '/placeholder/mars-01.jpg',
        title: 'Добряк лежит',
        category: '11.03.2024',
      },
      {
        image: '/placeholder/mars-09.jpg',
        title: 'Зацените эти ушки!!',
        category: '21.04.2024',
      },
    ],
    images: [
      '/placeholder/mars-01.jpg',
      '/placeholder/mars-02.jpg',
      '/placeholder/mars-03.jpg',
      '/placeholder/mars-04.jpg',
      '/placeholder/mars-05.jpg',
      '/placeholder/mars-06.jpg',
      '/placeholder/mars-07.jpg',
      '/placeholder/mars-08.jpg',
      '/placeholder/mars-09.jpg',
      '/placeholder/mars-10.jpg',
      '/placeholder/mars-11.jpg',
    ],
  },
  {
    username: 'nastya',
    cards: [],
    images: [],
  },
  {
    username: 'maksim',
    cards: [],
    images: [],
  },
];

export default userdata;
