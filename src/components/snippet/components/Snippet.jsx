import {
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  SkeletonText,
  useClipboard,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import Moment from 'react-moment';

import { MarkdownRenderer } from '../../../common/UIElements/markdownRenderer';
import { SocialShareLinks } from '../../../common/UIElements';

const Snippet = ({ snippet }) => {
  const { hasCopied, onCopy } = useClipboard(
    `${process.env.NEXT_PUBLIC_SITE_URL}/snippets/${snippet.slug}`
  );

  const textColor = useColorModeValue('text', '#fff');

  return (
    <>
      {/* Snippet body */}
      <Container maxW={'container.md'}>
        <VStack>
          <Box>
            {/* Last updated */}
            {snippet.updatedAt !== snippet.publishedAt && (
              <HStack
                alignSelf={'flex-start'}
                textTransform={'uppercase'}
                mt={7}
                mb={5}
              >
                <Box>
                  Last updated:{' '}
                  <Moment format="MMM DD, YYYY">{snippet.updatedAt}</Moment>
                </Box>
              </HStack>
            )}

            <SimpleGrid columns={[1, 2]}>
              <HStack alignSelf={'flex-start'} py={5} spacing={4}>
                {/* Author image */}
                <Avatar
                  name={snippet.author.name}
                  src={snippet.author.photo.url}
                />
                <VStack spacing={0}>
                  {/* Author name */}
                  <HStack>
                    <Box color={'brand.50'}>{snippet.author.name}</Box>{' '}
                    <Badge colorScheme={'green'}>Author</Badge>
                  </HStack>

                  {/* Published date */}
                  <Box alignSelf={'flex-start'} fontSize={'small'}>
                    <Moment format="MMM DD, YYYY">{snippet.publishedAt}</Moment>
                  </Box>
                </VStack>
              </HStack>

              {/* Social-media sharing links */}
              <HStack my={2}>
                <SocialShareLinks
                  toolTipPlacement={'top'}
                  isLoaded
                  onCopy={onCopy}
                  hasCopied={hasCopied}
                  slug={snippet.slug}
                  title={snippet.title}
                />
              </HStack>
            </SimpleGrid>

            <Divider />

            {/* Snippet title */}
            <SkeletonText isLoaded={!loading}>
              <Heading py={5}>{snippet.title}</Heading>
            </SkeletonText>
          </Box>

          {/* Snippet content */}
          <SkeletonText noOfLines={10} spacing={4} isLoaded={!loading}>
            <Box lineHeight={1.8} letterSpacing={'wide'} color={textColor}>
              <MarkdownRenderer content={snippet.content} />
            </Box>
          </SkeletonText>
          <Divider py={5} />
        </VStack>
      </Container>
    </>
  );
};

export default Snippet;
