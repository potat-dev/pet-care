import { SimpleGrid, Image } from '@mantine/core';

interface ImageGalleryProps {
  links: string[];
}

export function ImageGallery({ links }: ImageGalleryProps) {
  return (
    <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing="md" verticalSpacing="md">
      {links.map((link) => (
        <Image radius="md" h={200} src={link} />
      ))}
    </SimpleGrid>
  );
}
