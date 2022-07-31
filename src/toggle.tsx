/** @jsxImportSource sigl */
import $ from 'sigl'

export interface ToggleElement extends $.Element<ToggleElement> {}

@$.element()
export class ToggleElement extends HTMLElement {
  @$.out() value = false

  mounted($: ToggleElement['$']) {
    const InputPart = $.part(({ value }) => (
      <>
        <input
          part="input"
          id="checkbox"
          type="checkbox"
          checked={value}
          onchange={function(this: HTMLInputElement) {
            $.value = this.checked
          }}
        />
        <label for="checkbox" />
      </>
    ))

    $.render(() => (
      <>
        <style>
          {$.css /*css*/`
          :host {
            --color: #18f;
            --size: 15px;
            display: inline-flex;
            width: var(--size);
            height: var(--size);
            position: relative;
            background: #000;
            border-radius: 100%;
            box-shadow: inset 0px 0.75px 1px #ccca;
          }

          label {
            cursor: pointer;
            width: calc(var(--size) * 0.7);
            height: calc(var(--size) * 0.7);
            position: absolute;
            left: calc(var(--size) * 0.15);
            top: calc(var(--size) * 0.15);
            border-radius: 100%;
            box-shadow: inset 0px 1px 1px #000, 0px 1.15px 1.95px 0px #ccc7;
            &:after {
              content: '';
              width: calc(var(--size) * 0.45);
              height: calc(var(--size) * 0.45);
              position: absolute;
              top: calc(var(--size) * 0.125);
              left: calc(var(--size) * 0.125);
              opacity: 0.35;
              background: var(--color);
              border-radius: 100%;
              box-shadow: inset 0px 1.45px 1px 0.25px #fff6, 0px 1px 1px #000;
            }
            &:hover::after {
              opacity: 0.55;
            }
          }

          input[type=checkbox] {
            visibility: hidden;
            &:checked + label:after {
              opacity: 1;
            }
          }
        `('')}
        </style>

        <div>
          <InputPart />
        </div>
      </>
    ))
  }
}
