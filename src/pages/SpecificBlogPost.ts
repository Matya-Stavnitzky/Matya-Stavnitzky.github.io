import { BaseComponent } from '../components/BaseComponent'
import { BlogPostComponent } from '../components/BlogPost'
import type { BlogPost } from '../types'
import { HeaderComponent } from '../components/HeaderComponent'
import type { ProfileData } from '../types'

type BlogPostPageProps = {
  post: BlogPost
  profile: ProfileData
  withBase: (path: string) => string
}


export class SpecificBlogPost extends BaseComponent {
  private readonly post: BlogPost
  private readonly withBase: (path: string) => string
  private readonly header: HeaderComponent

  constructor({ post, withBase, profile }: BlogPostPageProps) {
    super()
    this.post = post
    this.withBase = withBase
    this.header = new HeaderComponent(profile, this.withBase(''))
  }

  render(): string {
    const blogPost = new BlogPostComponent(this.post, this.withBase('blog/'))
    return `
      <div class="min-h-screen bg-orange-400 text-gray-900">
        ${this.header.render()}
        ${blogPost.render()}
      </div>
    `
  }
}