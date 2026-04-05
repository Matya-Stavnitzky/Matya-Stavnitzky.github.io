import { BaseComponent } from './BaseComponent'

export class DecorativeSectionComponent extends BaseComponent {
  render(): string {
    return `
      <section id="decorative" class="w-full min-h-[50vh] lg:min-h-screen flex items-center justify-center bg-orange-50 px-4 sm:px-8 lg:px-10 py-10">
        <div class="relative mx-auto w-full max-w-xl lg:max-w-3xl h-72 sm:h-96">

            <!-- Top Left circle -->
            <div class="absolute top-[40%] left-[10%] w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-radial-[85%_90%_at_20%_30%] from-violet-500 via-violet-300 to-transparent">
                <span class="absolute left-[23%] top-[28%] -translate-x-1/2 -translate-y-1/2 text-4xl text-violet-500 font-['Adamina'] ">★</span>
            </div>

            <!-- Bottom left circle -->
            <div class="absolute top-[78%] left-[18%] w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-radial-[80%_65%_at_76%_50%] from-violet-500 via-violet-300 to-transparent">
                <span class="absolute left-[76%] top-[56%] -translate-x-1/2 -translate-y-1/2 text-4xl text-violet-500 font-['Adamina'] ">★</span>
            </div>

            <!-- Center circle -->
            <div class="absolute top-[50%] left-[30%] w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-radial-[80%_50%_at_30%] from-violet-500 via-violet-300 to-transparent">
                <span class="absolute left-[28%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-4xl text-violet-500 font-['Adamina'] ">★</span>
            </div>
            
            <!-- Top right circle -->
            <div class="absolute bottom-[85%] right-[26%] w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-radial-[90%_90%_at_20%_70%] from-violet-500 via-violet-300 to-transparent">
                <span class="absolute left-[20%] top-[70%] -translate-x-1/2 -translate-y-1/2 text-4xl text-violet-500 font-['Adamina'] ">★</span>
            </div>
            
            <!-- Bottom right circle -->
            <div class="absolute top-[80%] right-[4%] w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-radial-[90%_70%_at_90%] from-violet-500 via-violet-300 to-transparent">
                <span class="absolute left-[90%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-4xl text-violet-500 font-['Adamina'] ">★</span>
            </div>

        </div>
      </section>
    `
  }
}
