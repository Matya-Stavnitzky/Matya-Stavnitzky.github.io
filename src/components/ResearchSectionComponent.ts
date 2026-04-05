import { BaseComponent } from './BaseComponent'
import type { ResearchItem } from '../types'

export class ResearchSectionComponent extends BaseComponent {
  private readonly items: ResearchItem[]

  constructor(items: ResearchItem[]) {
    super()
    this.items = items
  }

  render(): string {
    return `
      <section id="research" class="min-h-[60vh] lg:min-h-screen py-16 sm:py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-orange-50">
        <div class="max-w-2xl">
          <div class="mb-10">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-700">Research</h2>
          </div>

          <div class="space-y-6">
            ${this.items
              .map(
                (item) => `
                  <article class="pb-5 border-b border-gray-200 last:border-b-0">
                    <h3 class="text-base sm:text-lg font-semibold mb-1 leading-snug text-gray-600">
                      ${item.title} ${item.authors} ${item.year}
                    </h3>

                    <div class="text-gray-800 font-medium text-sm">
                      <a href="${item.pdf}" class="hover:text-violet-700 transition">PDF</a>
                      ${
                        item.video
                          ? `<span class="mx-2">|</span><a href="${item.video}" target="_blank" rel="noopener noreferrer" class="hover:text-violet-700 transition">Video</a>`
                          : ''
                      }
                    </div>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>
      </section>
    `
  }
}
