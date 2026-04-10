import { BaseComponent } from './BaseComponent'
import type { ProfileData } from '../types'

export class SidebarComponent extends BaseComponent {
  private readonly profile: ProfileData
  private readonly blogPath: string

  constructor(profile: ProfileData, blogPath: string) {
    super()
    this.profile = profile
    this.blogPath = blogPath
  }

  render(): string {
    const firstName = this.profile.name.split(' ')[0]
    const lastName = this.profile.name.split(' ').slice(1).join(' ')

    return `
      <aside class="w-full lg:w-[40%] flex-shrink-0 bg-gradient-to-r from-violet-200 to-orange-50 to-107% py-10 sm:py-12 lg:py-20 px-6 sm:px-10 lg:px-16 flex flex-col lg:h-screen lg:sticky lg:top-0">
        <div class="flex-1 flex flex-col justify-center lg:items-end">
          <h1 class="text-4xl sm:text-5xl lg:text-7xl text-left lg:text-right mb-5 lg:mb-12 text-gray-700 leading-20">
            ${firstName}<br>${lastName}
          </h1>

          <p class="text-gray-600 text-base lg:text-right rounded-lg p-1 leading-snug max-w-xl lg:max-w-none lg:ml-10 mb-10 lg:mb-16">
            ${this.profile.bio} My
            <a href="#research" class="scroll-to-research hover:text-violet-700 underline underline-offset-2 transition">research</a>
            focuses on thoughtful applications of technology. I love 
            <a href="#reading" class="scroll-to-reading hover:text-violet-700 underline underline-offset-2 transition">reading</a>, 
            writing, rock climbing, and photography.
          </p>

          <div class="bg-orange-50 rounded-full px-5 py-3 w-fit lg:self-end">
            <div class="text-gray-800 font-medium text-sm">
              
            
            <a href="${this.blogPath}" class="hover:text-violet-700 transition">Blog</a>
              <span class="mx-2">|</span>
  

              <a href="${this.profile.cvPath}" target="_blank" rel="noopener noreferrer" class="hover:text-violet-700 transition">CV</a>
              <span class="mx-2">|</span>
              <a href="${this.profile.linkedInUrl}" target="_blank" rel="noopener noreferrer" class="hover:text-violet-700 transition">LinkedIn</a>
            </div>
          </div>
        </div>

        <div class="mt-10 text-violet-300 text-sm">
          Last updated ${this.profile.updatedAt}<br>
          &copy; ${this.profile.copyright}
        </div>
      </aside>
    `
  }
}
