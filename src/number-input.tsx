/** @jsxImportSource sigl */
import $ from 'sigl'

export interface NumberInputElement extends $.Element<NumberInputElement> {}

@$.element()
export class NumberInputElement extends HTMLElement {
  @$.out() value = 0
  min = 0
  max = 100
  step = 0.1

  mounted($: NumberInputElement['$']) {
    const InputPart = $.part(({ value, min, max, step }) => (
      <input
        part="input"
        type="number"
        value={value}
        onchange={function(this: HTMLInputElement) {
          $.value = Math.min(max, Math.max(min, +this.value))
          this.value = '' + $.value
        }}
        min={min}
        max={max}
        step={step}
      />
    ))

    $.render(() => (
      <>
        <style>
          {$.css /*css*/`
          :host {
            display: inline-flex;
            --selection-background: #18f;
            --selection-color: #fff;
          }

          input[type=number] {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;

            border: none;
            color: currentColor;
            font-family: inherit;
            font-size: inherit;
            background: none;
            text-align: center;
            outline: none;

            &::selection {
              background: var(--selection-background);
              color: var(--selection-color);
            }
          }
          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: inner-spin-button;
            opacity: 0.5;
            filter: invert();
            position: absolute;
            top: 0px;
            right: 0px;
            margin: 0;
            padding: 0;
            height: 100%;

            &:hover {
              opacity: 1;
            }
          }
        `('')}
        </style>

        <InputPart />
      </>
    ))
  }
}
