import type { BlogPost } from '../../types'
import { catsAndWellbeingPost } from './catsAndWellbeing'
import { deathAndDisabilityPost } from "./deathAndDisability"

export const blogPosts: BlogPost[] = [catsAndWellbeingPost, deathAndDisabilityPost]

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug)