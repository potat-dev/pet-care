export type PetBreed = 'dog' | 'cat' | 'bird' | 'fish' | 'reptile' | 'other';

export type PetType = {
  name: string;
  breed: PetBreed;
  birthdate: string;
  weight: number;
  photo: string;
  description: string;
};
