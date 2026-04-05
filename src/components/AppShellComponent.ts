import { BaseComponent } from './BaseComponent'

export class AppShellComponent extends BaseComponent {
  private readonly sidebar: BaseComponent
  private readonly sections: BaseComponent[]

  constructor(sidebar: BaseComponent, sections: BaseComponent[]) {
    super()
    this.sidebar = sidebar
    this.sections = sections
  }

  render(): string {
    return `
      <div class="min-h-screen flex flex-col lg:flex-row bg-orange-50 text-gray-900">
        ${this.sidebar.render()}
        <main data-main-content class="w-full flex-1 bg-orange-50 lg:h-screen lg:overflow-y-auto">
          ${this.sections.map((section) => section.render()).join('')}
        </main>
      </div>
    `
  }
}
