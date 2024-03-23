import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'zjx9j3an',
    dataset: 'production',
    apiVersion: '2024-03-20',
    useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
    return imgBuilder.image(source);
}