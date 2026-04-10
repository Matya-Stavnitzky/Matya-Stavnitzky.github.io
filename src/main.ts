import './style.css'
import { AppShellComponent } from './components/AppShellComponent'
import { DecorativeSectionComponent } from './components/DecorativeSectionComponent'
import { ReadingSectionComponent } from './components/ReadingSectionComponent'
import { ResearchSectionComponent } from './components/ResearchSectionComponent'
import { SidebarComponent } from './components/SidebarComponent'
import { BlogPage } from './pages/BlogPage'
import { SpecificBlogPost } from './pages/SpecificBlogPost'
import { getBlogPost } from './data/blogPosts'
import { readingItems } from './data/readingData'
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

  private getBasePath(): string {
    const baseUrl = import.meta.env.BASE_URL
    return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  }

  private getAppPathname(): string {
    const url = new URL(window.location.href)
    const legacyPath = url.searchParams.get('path')
    const basePath = this.getBasePath()

    let pathname = legacyPath ?? url.pathname

    if (basePath && pathname.startsWith(basePath)) {
      pathname = pathname.slice(basePath.length) || '/'
    }

    if (!pathname.startsWith('/')) {
      pathname = `/${pathname}`
    }

    return pathname.replace(/\/+$/, '') || '/'
  }

  private getRoute(): { kind: 'home' | 'blog-index' | 'blog-post'; slug?: string } {
    const url = new URL(window.location.href)
    const legacyPost = url.searchParams.get('post')

    if (legacyPost) {
      return { kind: 'blog-post', slug: legacyPost }
    }

    const pathname = this.getAppPathname()

    if (pathname === '/blog') {
      return { kind: 'blog-index' }
    }

    if (pathname.startsWith('/blog/')) {
      const slug = pathname.slice('/blog/'.length)
      if (slug) {
        return { kind: 'blog-post', slug }
      }
    }

    return { kind: 'home' }
  }

  private withBase(path: string): string {
    const baseUrl = import.meta.env.BASE_URL
    return `${baseUrl}${path.replace(/^\/+/, '')}`
  }

  private render(): void {
    const route = this.getRoute()

    if (route.kind === 'blog-index') {
      const blogPage = new BlogPage({ withBase: this.withBase.bind(this), profile: this.data.profile })

      this.appRoot.innerHTML = blogPage.render()
      return
    }

    if (route.kind === 'blog-post' && route.slug) {
      const post = getBlogPost(route.slug)

      if (post) {
        const specificBlogPost = new SpecificBlogPost({
          post,
          withBase: this.withBase.bind(this),
          profile: this.data.profile,
        })

        this.appRoot.innerHTML = specificBlogPost.render()
        return
      }

      const blogPage = new BlogPage({ withBase: this.withBase.bind(this), profile: this.data.profile })

      this.appRoot.innerHTML = blogPage.render()
      return
    }

    const sidebar = new SidebarComponent(this.data.profile, this.withBase('blog/'))
    const decorativeSection = new DecorativeSectionComponent()
    const readingSection = new ReadingSectionComponent(readingItems)
    const researchSection = new ResearchSectionComponent(this.data.research)
    const appShell = new AppShellComponent(sidebar, [
      decorativeSection,
      researchSection,
      readingSection,
    ])

    this.appRoot.innerHTML = appShell.render()
  }

  private bindEvents(): void {
    const researchLink = document.querySelector<HTMLAnchorElement>(
      '.scroll-to-research'
    )
    const readingLink = document.querySelector<HTMLAnchorElement>(
      '.scroll-to-reading'
    )

    const scrollToSection = (sectionId: string): void => {
      const targetSection = document.querySelector<HTMLElement>(sectionId)
      const mainContent = document.querySelector<HTMLElement>('[data-main-content]')
      if (!targetSection) {
        return
      }

      const scrollTarget =
        targetSection.querySelector<HTMLElement>('h2') ?? targetSection

      const isDesktop = window.matchMedia('(min-width: 1024px)').matches

      if (isDesktop && mainContent) {
        const containerRect = mainContent.getBoundingClientRect()
        const targetRect = scrollTarget.getBoundingClientRect()
        const desktopOffset = mainContent.clientHeight * 0.30

        mainContent.scrollTo({
          top: Math.max(
            mainContent.scrollTop +
              (targetRect.top - containerRect.top) -
              desktopOffset,
            0
          ),
          behavior: 'smooth',
        })
        return
      }

      const mobileOffset = window.innerHeight * 0.1
      const top =
        window.scrollY + scrollTarget.getBoundingClientRect().top - mobileOffset

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: 'smooth',
      })
    }

    researchLink?.addEventListener('click', (event) => {
      event.preventDefault()
      scrollToSection('#research')
    })

    readingLink?.addEventListener('click', (event) => {
      event.preventDefault()
      scrollToSection('#reading')
    })
  }
}

new PortfolioApp().initialize()
