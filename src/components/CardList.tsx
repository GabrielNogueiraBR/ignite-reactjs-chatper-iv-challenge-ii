import { Grid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [imageModalUrl, setImageModalUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = (imageUrl: string): void => {
    setImageModalUrl(imageUrl);
    onOpen();
  };

  return (
    <>
      <Grid gap={10} mb="40px" templateColumns="repeat(3, 1fr)">
        {cards.map(card => (
          <Card data={card} viewImage={handleViewImage} />
        ))}
      </Grid>

      <ModalViewImage
        imgUrl={imageModalUrl}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
