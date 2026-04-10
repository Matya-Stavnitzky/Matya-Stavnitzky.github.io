import { BaseComponent } from './BaseComponent'
import type { ProfileData } from '../types'

export class HeaderComponent extends BaseComponent {
    private readonly profile: ProfileData
    private readonly homePath: string

    constructor(profile: ProfileData, homePath: string) {
        super()
        this.profile = profile
        this.homePath = homePath
    }

    render(): string {
        const firstName = this.profile.name.split(' ')[0]
        const lastName = this.profile.name.split(' ').slice(1).join(' ')

        return `
            <section id="header" class="w-full bg-gradient-to-r from-violet-200 to-orange-50 to-150% px-6 sm:px-10 lg:px-20 py-2 sm:py-3">
                <div class="relative mx-auto w-full max-w-3xl">
                    <a href="${this.homePath}" class="group absolute top-2 right-0 h-30 w-30 sm:h-15 sm:w-15 rounded-full bg-radial-[85%_90%_at_20%_30%] from-violet-500 via-violet-300 to-transparent" aria-label="Back to home">
                        <span aria-hidden="true" class="absolute left-[24%] top-[30%] -translate-x-1/2 -translate-y-1/2 text-lg sm:text-xl text-violet-500">★</span>
                        <span class="pointer-events-none absolute top-full mt-1 rounded-full bg-orange-50 px-3 py-1  text-gray-600 font-medium text-sm opacity-0 translate-y-5 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                            Home
                        </span>
                    </a>
                    <h1 class="text-xl sm:text-2xl lg:text-3xl font-medium leading-tight tracking-tight text-gray-600">
                        <span class="block">${firstName}</span>
                        <span class="block">${lastName}</span>
                    </h1>
                </div>
            </section>
        `
    }
}