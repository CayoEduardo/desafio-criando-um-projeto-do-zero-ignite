import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(process.env.PRISMIC_URL, {
    req,
    accessToken: process.env.PRISMIC_API_ENDPOINT,
  });

  return prismic;
}
