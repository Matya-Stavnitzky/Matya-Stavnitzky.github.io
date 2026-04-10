import { BaseComponent } from '../components/BaseComponent'
import { blogPosts } from '../data/blogPosts'
import type { BlogPost } from '../types'
import { HeaderComponent } from '../components/HeaderComponent'
import type { ProfileData } from '../types'

type BlogPageProps = {
  withBase: (path: string) => string
  profile: ProfileData
}

export class BlogPage extends BaseComponent {
  private readonly withBase: (path: string) => string
  private readonly header: HeaderComponent

  constructor({ withBase, profile }: BlogPageProps) {
    super()
    this.withBase = withBase
    this.header = new HeaderComponent(profile, this.withBase(''))
  }

  private renderPostCard(post: BlogPost): string {
    const href = this.withBase(`blog/${post.slug}/`)

    return `
      <article class="pb-6 border-b border-gray-200 last:border-b-0">
        ${post.photo ? `<a href="${href}" class="block mb-4"><img src="${post.photo}" alt="${post.photoAlt ?? ''}" class="w-full h-56 object-cover rounded-2xl border border-gray-200" /></a>` : ''}
        <h2 class="text-2xl sm:text-3xl tracking-tight text-gray-700 mb-2">
          <a href="${href}" class="hover:text-violet-700 transition">${post.title}</a>
        </h2>
        <p class="text-base sm:text-lg leading-8 text-gray-600 mb-4">${post.subtitle}</p>
        <a href="${href}" class="text-sm font-medium text-gray-600 hover:text-violet-700 transition">Read post</a>
      </article>
    `
  }

  render(): string {
    return `
      <div class="min-h-screen bg-orange-50 text-gray-900">
        ${this.header.render()}
        <main class="px-6 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-20">
          <article class="mx-auto max-w-3xl">
            <a href="${this.withBase('')}" class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-violet-700 underline underline-offset-2 transition mb-10">Back to home</a>

            <header class="mb-10 sm:mb-12">
              <h1 class="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-700 mb-4">Blog</h1>
              <p class="text-base sm:text-lg leading-8 text-gray-600 max-w-2xl">Notes, essays, and long-form posts collected in one place.</p>
            </header>

            <div class="space-y-8">
              ${blogPosts.map((post) => this.renderPostCard(post)).join('')}
            </div>
          </article>
        </main>
      </div>
    `
  }

}