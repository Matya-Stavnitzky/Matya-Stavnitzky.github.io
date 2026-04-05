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
