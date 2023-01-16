import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const [isWide, setIsWide] = useState(false);

  const imageRef = useRef(null);

  const handleImageLoad = (): void => {
    const { width, height } = imageRef.current;
    if (width > 900 && width >= height) setIsWide(true);
    else setIsWide(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        w="fit-content"
        h="fit-content"
        maxW="fit-content"
        maxH="fit-content"
        bgColor="pGray.900"
        p="0"
      >
        <ModalBody w="100%" p="0">
          <Image
            ref={imageRef}
            maxW={isWide ? '900px' : 'unset'}
            maxH={isWide ? 'unset' : '600px'}
            onLoad={handleImageLoad}
            src={imgUrl}
            objectFit="cover"
          />
        </ModalBody>
        <ModalFooter justifyContent="flex-start">
          <Link href={imgUrl} target="_blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
