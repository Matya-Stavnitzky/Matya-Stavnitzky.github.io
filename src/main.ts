import './style.css'
import { AppShellComponent } from './components/AppShellComponent'
import { DecorativeSectionComponent } from './components/DecorativeSectionComponent'
import { ResearchSectionComponent } from './components/ResearchSectionComponent'
import { SidebarComponent } from './components/SidebarComponent'
import { createPortfolioData } from './data/portfolioData'

class PortfolioApp {
  private readonly appRoot: HTMLDivElement
  private readonly data = createPortfolioData(this.withBase)

  constructor() {
    this.appRoot = document.querySelector<HTMLDivElement>('#app')!
  }

  initialize(): void {
    this.render()
    this.bindEvents()
  }

  private withBase(path: string): string {
    const baseUrl = import.meta.env.BASE_URL
    return `${baseUrl}${path.replace(/^\/+/, '')}`
  }

  private render(): void {
    const sidebar = new SidebarComponent(this.data.profile)
    const decorativeSection = new DecorativeSectionComponent()
    const researchSection = new ResearchSectionComponent(this.data.research)
    const appShell = new AppShellComponent(sidebar, [
      decorativeSection,
      researchSection,
    ])

    this.appRoot.innerHTML = appShell.render()
  }

  private bindEvents(): void {
    const researchLink = document.querySelector<HTMLAnchorElement>(
      '.scroll-to-research'
    )

    researchLink?.addEventListener('click', (event) => {
      event.preventDefault()

      const researchSection = document.querySelector<HTMLElement>('#research')
      const mainContent = document.querySelector<HTMLElement>('[data-main-content]')
      if (!researchSection) {
        return
      }

      const isDesktop = window.matchMedia('(min-width: 1024px)').matches

      if (isDesktop && mainContent) {
        mainContent.scrollTo({
          top: Math.max(researchSection.offsetTop - 90, 0),
          behavior: 'smooth',
        })
        return
      }

      researchSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }
}

new PortfolioApp().initialize()
