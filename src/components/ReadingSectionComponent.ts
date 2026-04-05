import { BaseComponent } from './BaseComponent'
import type { ReadingItem } from '../types'

export class ReadingSectionComponent extends BaseComponent {
  private readonly items: ReadingItem[]

  constructor(items: ReadingItem[]) {
    super()
    this.items = items
  }

  render(): string {
    const visibleItems = this.items.slice(0, 5)

    return `
      <section id="reading" class="bg-orange-50 min-h-[60vh] lg:min-h-screen px-6 sm:px-10 lg:px-12 py-16 sm:py-20 lg:py-28 lg:flex lg:items-center">
        <div class="max-w-2xl">
          <div class="mb-10">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-700">Reading List</h2>
          </div>
          
          <div class="space-y-2 lg:mb-5">
            ${visibleItems
              .map(
                (item) => `

                <article class="pb-0">
                  <div class="flex items-baseline justify-between gap-4 border-b border-transparent">
                    <h3 class="min-w-0 flex-1 truncate text-base sm:text-lg font-semibold mb-1 leading-snug text-gray-600" title="${item.title}">
                      ${item.title}
                    </h3>
                    <div class="shrink-0 text-gray-800 font-medium text-sm whitespace-nowrap">
                      ${item.status}
                    </div>
                  </div>
                </article>
                `
              )
              .join('')}
          </div>

          <!-- Button for when next page is made 
          <button type="button" class="inline-flex items-center justify-center rounded-full bg-radial from-violet-200 to-transparent px-8 py-3 text-gray-800 font-medium text-sm hover:bg-purple-200 transition">
            see more
          </button>
          --> 
        </div>
      </section>
    `
  }
}
