import { BaseComponent } from './BaseComponent'
import type { BlogParagraph, BlogPost, BlogTextRun } from '../types'

export class BlogPostComponent extends BaseComponent {
  private readonly post: BlogPost
  private readonly backHref: string

  constructor(post: BlogPost, backHref: string) {
    super()
    this.post = post
    this.backHref = backHref
  }

  private renderRun(run: BlogTextRun): string {
    if (!run.citeId) {
      return run.text
    }

    const citation = this.post.citations?.find((entry) => entry.id === run.citeId)

    if (!citation) {
      return run.text
    }

    return `<a href="${citation.url}" target="_blank" rel="noopener noreferrer" class="text-violet-700 underline underline-offset-2 transition">${run.text}</a>`
  }

  private renderParagraph(paragraph: BlogParagraph): string {
    return `<p class="text-base sm:text-md leading-6 text-gray-600 mb-3">${paragraph.runs
      .map((run) => this.renderRun(run))
      .join('')}</p>`
  }

  render(): string {
    const citations = this.post.citations ?? []

    return `
      <main class="min-h-screen bg-orange-50 text-gray-900 px-6 sm:px-10 lg:px-20 py-10 sm:py-5 lg:py-10">
        <article class="mx-auto max-w-3xl">

          <!-- go back link
          <a href="${this.backHref}" class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-violet-700 transition mb-10">Back to blog</a>
          -->

          <header class="mb-10 sm:mb-5">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-700 mb-2">${this.post.title}</h1>
            <p class="text-base font-bold sm:text-lg leading-8 text-gray-600 max-w-2xl">${this.post.subtitle}</p>
          </header>

          ${this.post.photo ? `<figure class="mb-10 sm:mb-12"><img src="${this.post.photo}" alt="${this.post.photoAlt ?? ''}" class="w-full rounded-2xl border border-gray-200 object-cover" /></figure>` : ''}

          <div class="space-y-2">
            ${this.post.sections
              .map(
                (section) => `
                  <section>
                    ${section.heading ? `<h2 class="text-2xl sm:text-3xl tracking-tight text-gray-700 mb-2 mt-4">${section.heading}</h2>` : ''}
                    ${section.paragraphs.map((paragraph) => this.renderParagraph(paragraph)).join('')}
                  </section>
                `
              )
              .join('')}
          </div>

          ${
            false ? `<section class="mt-12 pt-8 border-t border-gray-200">
            <h2 class="text-2xl sm:text-3xl tracking-tight text-gray-700 mb-4">References</h2>
            <ol class="space-y-3 text-base sm:text-lg leading-8 text-gray-600">
              ${citations
                .map(
                  (citation) => `
                    <li>
                      <a href="${citation.url}" target="_blank" rel="noopener noreferrer" class="hover:text-violet-700 transition">${citation.label}</a>
                      ${citation.source ? `<span class="text-gray-500">${citation.source}</span>` : ''}
                      ${citation.year ? `<span class="text-gray-500">, ${citation.year}</span>` : ''}
                    </li>
                  `
                )
                .join('')}
            </ol>
          </section>`
              : ''
          }
        </article>
      </main>
    `
  }
}