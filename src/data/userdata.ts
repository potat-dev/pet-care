import { UserData } from '@/components/interfaces/UserData';

const userdata: UserData[] = [
  {
    username: 'denis',
    name: 'Denis Churilov',
    status: 'Happy cat owner',
    avatar: '/placeholder/avatar/denis.jpg',
    cards: [
      {
        image: '/placeholder/mars/09.jpg',
        title: 'Очень весенний, майский кот',
        date: '01.05.2024',
      },
      {
        image: '/placeholder/mars/07.jpg',
        title: 'Он очень сильно любит мандарины',
        date: '04.05.2024',
      },
      {
        image: '/placeholder/mars/08.jpg',
        title: 'Ну какой же он милый дурачок',
        date: '21.04.2024',
      },
      {
        image: '/placeholder/mars/04.jpg',
        title: 'Не вдупляет что происходит',
        date: '17.05.2024',
      },
      {
        image: '/placeholder/mars/01.jpg',
        title: 'Добряк лежит',
        date: '11.03.2024',
      },
      {
        image: '/placeholder/mars/10.jpg',
        title: 'Зацените эти ушки!!',
        date: '21.04.2024',
      },
    ],
    images: [
      '/placeholder/mars/01.jpg',
      '/placeholder/mars/02.jpg',
      '/placeholder/mars/03.jpg',
      '/placeholder/mars/04.jpg',
      '/placeholder/mars/05.jpg',
      '/placeholder/mars/06.jpg',
      '/placeholder/mars/07.jpg',
      '/placeholder/mars/08.jpg',
      '/placeholder/mars/09.jpg',
      '/placeholder/mars/10.jpg',
    ],
    friends: ['nastya', 'maksim'],
  },
  {
    username: 'nastya',
    name: 'Nastya Trofimova',
    status: 'Happy dog owner',
    avatar: '/placeholder/avatar/nastya.jpg',
    cards: [
      {
        image: '/placeholder/djera/09.jpg',
        title: 'Посмотрите, какой грациозный',
        date: '17.05.2024',
      },
      {
        image: '/placeholder/djera/10.jpg',
        title: 'Как же он сладко спит...',
        date: '17.05.2024',
      },
      {
        image: '/placeholder/djera/05.jpg',
        title: 'Греет нос, наверное ему холодно',
        date: '17.05.2024',
      },
      {
        image: '/placeholder/djera/02.jpg',
        title: 'Он очень солнечный :)',
        date: '17.05.2024',
      },
      {
        image: '/placeholder/djera/04.jpg',
        title: 'Райан Гослинг в фильме Драйв',
        date: '17.05.2024',
      },
    ],
    images: [
      '/placeholder/djera/01.jpg',
      '/placeholder/djera/02.jpg',
      '/placeholder/djera/03.jpg',
      '/placeholder/djera/04.jpg',
      '/placeholder/djera/05.jpg',
      '/placeholder/djera/06.jpg',
      '/placeholder/djera/07.jpg',
      '/placeholder/djera/08.jpg',
      '/placeholder/djera/09.jpg',
      '/placeholder/djera/10.jpg',
    ],
    friends: ['maksim', 'denis'],
  },
  {
    username: 'maksim',
    name: 'Maksim Barsukov',
    status: 'Happy cat owner',
    avatar: '/placeholder/avatar/maksim.jpg',
    cards: [
      {
        image: '/placeholder/brosha/06.jpg',
        title: 'Толстая креветка',
        date: '17.05.2024',
      },
      {
        image: '/placeholder/brosha/05.jpg',
        title: 'Злая редиска',
        date: '14.05.2024',
      },
      {
        image: '/placeholder/brosha/07.jpg',
        title: 'Ооооочень ленивый',
        date: '11.05.2024',
      },
    ],
    images: [
      '/placeholder/brosha/01.jpg',
      '/placeholder/brosha/02.jpg',
      '/placeholder/brosha/04.jpg',
      '/placeholder/brosha/05.jpg',
      '/placeholder/brosha/06.jpg',
      '/placeholder/brosha/07.jpg',
      '/placeholder/brosha/08.jpg',
      '/placeholder/brosha/09.jpg',
      '/placeholder/brosha/03.jpg',
      '/placeholder/brosha/10.jpg',
    ],
    friends: ['denis', 'nastya'],
  },
];

export default userdata;
