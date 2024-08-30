import { Heading } from '@chakra-ui/react';

interface Props {
  genre?: string;
  platform?: string;
}

const DynamicName = ({ genre = 'All Games', platform = 'All Platforms' }: Props) => {
  // Helper function to determine the correct heading
  const getHeading = () => {
    const isGenreDefault = genre === 'All Games';
    const isPlatformDefault = platform === 'All Platforms';
    const genreIncludesGame = genre.toLowerCase().includes('game');

    if (isPlatformDefault && isGenreDefault) return 'Games';

    if (isGenreDefault) return `${platform} Games`;

    if (isPlatformDefault) return genreIncludesGame ? genre : `${genre} Games`;

    return `${platform} ${genre}${!genreIncludesGame ? ' Games' : ''}`;
  };

  const heading = getHeading();

  return (
    <Heading
      as="h1"
      fontSize={heading.length > 20 ? '2xl' : '3xl'}
      noOfLines={1}
      wordBreak="break-word"
    >
      {heading.trim()}
    </Heading>
  );
};

export default DynamicName;
