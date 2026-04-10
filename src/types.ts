export type ResearchItem = {
  title: string
  authors: string
  year: string
  pdf: string
  video?: string
}

export type ReadingItem = {
  title: string
  status: string
}

export type BlogTextRun = {
  text: string
  citeId?: string
}

export type BlogParagraph = {
  runs: BlogTextRun[]
}

export type BlogSection = {
  heading?: string
  paragraphs: BlogParagraph[]
}

export type BlogCitation = {
  id: string
  label: string
  url: string
  source?: string
  year?: string
}

export type BlogPost = {
  slug: string
  title: string
  subtitle: string
  photo?: string
  photoAlt?: string
  sections: BlogSection[]
  citations?: BlogCitation[]
}

export type ProfileData = {
  name: string
  bio: string
  cvPath: string
  linkedInUrl: string
  updatedAt: string
  copyright: string
}

export type PortfolioData = {
  profile: ProfileData
  research: ResearchItem[]
}
