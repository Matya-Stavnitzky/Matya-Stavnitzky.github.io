import type { BlogPost } from '../../types'

export const catsAndWellbeingPost: BlogPost = {
  slug: 'cats-and-wellbeing',
  title: 'Cats and Wellbeing',
  subtitle: 'A short example post showing inline linked citations in the main text.',
  sections: [
    {
      paragraphs: [
        {
          runs: [
            { text: 'Studies have found that ' },
            {
              text: 'cats can improve wellbeing',
              citeId: 'cat-wellbeing-study',
            },
            {
              text: ' by lowering stress and encouraging calm routines.',
            },
          ],
        },
        {
          runs: [
            {
              text: 'This structure keeps the prose in the data file while still letting a phrase point directly to its source.',
            },
          ],
        },
      ],
    },
    {
      heading: 'What this format supports',
      paragraphs: [
        {
          runs: [
            {
              text: 'Each paragraph is built from text runs, so you can attach a citation to only the phrase that needs it instead of wrapping the whole paragraph in a link.',
            },
          ],
        },
        {
          runs: [
            {
              text: 'The page can also render an optional image, section headings, and a references list at the bottom.',
            },
          ],
        },
      ],
    },
  ],
  citations: [
    {
      id: 'cat-wellbeing-study',
      label: 'Example wellbeing citation',
      url: 'https://example.com/cats-and-wellbeing',
      source: 'Example source',
      year: '2026',
    },
  ],
}