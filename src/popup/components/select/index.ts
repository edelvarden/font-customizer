import { SelectOption } from '@types'
import { html, TemplateResult } from 'lit'
import './select.css'

interface SelectComponentProps {
  id: string
  value?: string | undefined
  options: SelectOption[]
  handleChange: (event: Event) => void
}

export default function SelectComponent(props: SelectComponentProps): TemplateResult {
  const { id, value, options, handleChange } = props

  return html`
    <div style="position: relative">
      <select id="${id}" class="select" @change=${handleChange} .value="${value ?? ''}">
        ${options.map(
          (option) =>
            html`<option value="${option.fontId}" ?selected=${option.fontId === value}>
              ${option.displayName}
            </option>`,
        )}
      </select>
    </div>
  `
}