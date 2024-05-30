export interface CardProps {
  image: string;
  title: string;
  date: string;
}

export interface UserData {
  username: string;
  name: string;
  status: string;
  avatar: string;
  cards: CardProps[];
  images: string[];
  friends: string[];
}
