import type { PortfolioData } from '../types'
import { lastUpdatedDate } from './generatedBuildInfo'

export const createPortfolioData = (
  withBase: (path: string) => string
): PortfolioData => ({
  profile: {
    name: 'Matya Stavnitzky',
    bio: 'I am a Computer Science and Cognitive Science student at Mount Allison University.',
    cvPath: withBase('papers/MStavnitzky-CV.pdf'),
    linkedInUrl: 'https://www.linkedin.com/in/matya-stavnitzky/',
    updatedAt: lastUpdatedDate,
    copyright: 'Matya Stavnitzky',
  },
  research: [
    {
      title: 'Investigating the Effects of Photography on Recall.',
      authors: 'Matya Stavnitzky, Daniel Vogel, and Nikhita Joshi.',
      year: 'CHI EA 2026.',
      pdf: withBase('papers/photography-memory.pdf'),
      video: 'https://www.youtube.com/watch?v=jdrIklLVwjc&feature=youtu.be',
    },
    {
      title: 'On Experts and Algorithms: Who Decides When AI Decides?',
      authors: 'Matya Stavnitzky.',
      year: '2026.',
      pdf: withBase('papers/COGS-Thesis.pdf'),
    },
  ],
})
