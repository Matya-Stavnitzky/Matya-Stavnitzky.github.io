import './style.css'



// Portfolio data
type ResearchItem = {
  title: string
  authors: string
  year: string | number
  pdf: string
  video?: string
}

const sections = {
  decorative: {
    id: 'decorative',
    title: 'Decorative Elements',
    items: [],
  },
  research: {
    id: 'research',
    title: 'Research',
    items: [
      {
        title: 'Investigating the Effects of Photography on Recall.',
        authors: 'Matya Stavnitzky, Daniel Vogel, and Nikhita Joshi.',
        year: 'CHI EA 2026.',
        pdf: '/papers/photography-memory.pdf',
        video: 'https://www.youtube.com/watch?v=jdrIklLVwjc&feature=youtu.be',
      },
      {
        title: 'Thesis',
        authors: 'Matya Stavnitzky',
        year: '2026.',
        pdf: '/papers/COGS-Thesis.pdf',
        // video is optional
      },
    ] as ResearchItem[],
  },
  photography: {
    id: 'photography',
    title: 'Photography',
    items: [
      { title: 'Nature Collection', year: 2024 },
      { title: 'Urban Landscapes', year: 2024 },
      { title: 'Portrait Series', year: 2023 },
    ],
  },
  writing: {
    id: 'writing',
    title: 'Writing & Blog',
    items: [
      {
        title: 'The Future of AI Ethics',
        date: 'March 15, 2024',
        excerpt: 'Exploring ethical frameworks for AI development...',
      },
      {
        title: 'Photography as Philosophy',
        date: 'February 28, 2024',
        excerpt: 'How capturing moments reveals truth...',
      },
    ],
  },
}

// Create HTML structure
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="fixed inset-0 flex bg-orange-50 text-gray-900">
    <!-- LEFT SIDEBAR -->
    <aside class="w-[35%] flex-shrink-0 bg-gradient-to-r from-violet-200 to-orange-50 to-107% py-20 px-16 flex flex-col">
      <div class="flex-1 flex flex-col justify-center items-end flex-grow-[2]">
        <div class="flex-grow-[1]"></div>

        <!-- Title -->
        <h1 class="text-7xl text-right mb-12 text-gray-700 leading-none font-sans">
          Matya <br>Stavnitzky
        </h1>

        <!-- Info paragraph -->
        <p class="text-gray-600 text-base mb-16 text-right ml-10 rounded-lg p-1 text-1xl font-semibold mb-3 leading-snug">
          I am a Computer Science and Cognitive science student at Mount Allison University. My <a href="#research" class="scroll-to-research hover:text-violet-700 underline underline-offset-2 transition">research </a> focuses on thoughtful applications of technology. I love reading, writing, rock climbing, and photography.
        </p>

        <div class="flex-grow-[2]"></div>

        <!-- Links to other things -->
        <div class="bg-orange-50 rounded-full px-5 p-3 w-fit">
          <div class="text-gray-800 font-medium text-sm text-right">
            <a href="/papers/MStavnitzky-CV.pdf" target="_blank" rel="noopener noreferrer" class="hover:text-violet-700 transition">CV</a>
              <span class="mx-2">|</span>
            <a href="https://www.linkedin.com/in/matya-stavnitzky/" target="_blank" rel="noopener noreferrer" class="hover:text-violet-700 transition">LinkedIn</a>
          </div>
        </div>
      </div>

      <div>
        <span class="text-violet-300 text-sm"> 
          Last updated April 3, 2026 
          <br> 
          © Matya Stavnitzky
        </span>  
        <span class="text-gray-300 text-sm"> </span>
      </div> 
    </aside>


    <!-- RIGHT CONTENT -->
    <main class="min-h-full h-full flex-1 overflow-y-auto bg-orange-50">
      <!-- DECORATIVE SECTION -->
      <section id="decorative" data-section="decorative" class="block w-full min-h-screen flex items-center justify-center bg-orange-50 px-10">
          <div class="w-full max-w-3xl bg-orange-50">
            <div class="relative w-full h-96">
              <!-- Top Left circle -->
              <div class="absolute top-37 left-0 w-32 h-32 rounded-full bg-radial-[85%_90%_at_20%_30%] from-violet-500 via-violet-300 to-transparent flex items-center justify-center">
                <span class="absolute left-[23%] top-[28%] -translate-x-1/2 -translate-y-1/2 text-5xl text-violet-500 font-['Adamina'] ">★</span>
              </div>

              <!-- Bottom left circle -->
              <div class="absolute top-75 left-20 w-32 h-32 rounded-full bg-radial-[80%_65%_at_76%_50%] from-violet-500 via-violet-300 to-transparent flex items-center justify-center">
                <span class="absolute left-[76%] top-[56%] -translate-x-1/2 -translate-y-1/2 text-5xl text-violet-500 font-['Adamina'] ">★</span>
              </div>

              <!-- Center circle -->
              <div class="absolute top-45 left-40 w-32 h-32 rounded-full bg-radial-[80%_50%_at_30%] from-violet-500 via-violet-300 to-transparent flex items-center justify-center">
                <span class="absolute left-[28%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-5xl text-violet-500 font-['Adamina'] ">★</span>
              </div>

              <!-- Top right circle -->
              <div class="absolute bottom-80 right-40 w-32 h-32 rounded-full bg-radial-[90%_90%_at_20%_70%] from-violet-500 via-violet-300 to-transparent flex items-center justify-center">
                <span class="absolute left-[20%] top-[70%] -translate-x-1/2 -translate-y-1/2 text-5xl text-violet-500 font-['Adamina'] ">★</span>
              </div>

              <!-- Bottom right circle -->
              <div class="absolute bottom-0 right-12 w-32 h-32 rounded-full bg-radial-[90%_70%_at_90%] from-violet-500 via-violet-300 to-transparent flex items-center justify-center">
                <span class="absolute left-[90%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-5xl text-violet-500 font-['Adamina'] ">★</span>
              </div>

               <!-- inspo ack -->
               <!-- 
               <div class="absolute top-110 right-12">
                 <span class="text-gray-300 text-sm">blueberrries inspired by @rajin_design</span>
               </div> 
               -->
            </div>

            
          </div>
      </section>

      <!-- RESEARCH SECTION -->
      <section id="research" data-section="research" class="min-h-screen py-32 px-20 bg-orange-50">
        <div class="max-w-2xl">
          <div class="mb-10">
            <h2 class="text-6xl tracking-tight text-gray-700">
              Research
            </h2>
          </div>

          <div class="space-y-6">
            ${sections.research.items
              .map(
                (item) => `
              <article class="pb-5 border-b border-gray-200 last:border-b-0">
                <h3 class="text-1xl font-semibold mb-1 leading-snug text-gray-600">
                  ${item.title} ${item.authors} ${item.year}
                </h3>
                
                <div class="flex gap-4">
                  <div class="text-gray-800 font-medium text-sm">
                    <a href="${item.pdf}"  class="hover:text-violet-700 transition">PDF</a>
                    ${item.video
                      ? `<span class="mx-2">|</span>
                    <a href="${item.video}" target="_blank" rel="noopener noreferrer" class="hover:text-violet-700 transition">Video</a>`
                      : ''}
                  </div>

                </div>

              </article>
            `
              )
              .join('')}
          </div>
        </div>
      </section>

      <!-- PHOTOGRAPHY SECTION -->
      <!-- TO DO -->
      

      <!-- WRITING SECTION -->
      <!-- TO DO -->

      <!-- Reading Section -->
      <!-- TO DO -->
`

// Navigation functionality
const scrollOffset = 120

const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link')

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const sectionId = link.getAttribute('data-section')
    const targetSection = document.querySelector<HTMLElement>(
      `[data-section="${sectionId}"]`
    )

    if (targetSection) {
      const mainContent = document.querySelector<HTMLElement>('main')
      if (mainContent) {
        const targetOffset = Math.max(targetSection.offsetTop - scrollOffset, 0)
        mainContent.scrollTo({
          top: targetOffset,
          behavior: 'smooth',
        })
      }
    }
  })
})

// Intersection observer for active nav link
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('text-accent', 'bg-gray-100')
          link.classList.add('text-gray-700')
        })
        const activeLink = document.querySelector<HTMLAnchorElement>(
          `[data-section="${entry.target.getAttribute('data-section')}"]`
        )
        if (activeLink) {
          activeLink.classList.remove('text-gray-700')
          activeLink.classList.add('text-accent', 'bg-gray-100')
        }
      }
    })
  },
  {
    threshold: 0.3,
  }
)

document.querySelectorAll<HTMLElement>('[data-section]').forEach((section) => {
  observer.observe(section)
})

const researchExperienceLink = document.querySelector<HTMLAnchorElement>(
  '.scroll-to-research'
)

researchExperienceLink?.addEventListener('click', (e) => {
  e.preventDefault()
  const researchSection = document.querySelector<HTMLElement>('#research')
  const mainContent = document.querySelector<HTMLElement>('main')

  if (researchSection && mainContent) {
    mainContent.scrollTo({
      top: Math.max(researchSection.offsetTop - scrollOffset, 0),
      behavior: 'smooth',
    })
  }
})
