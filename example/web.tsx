/** @jsxImportSource sigl */
import $ from 'sigl'

import { ToggleElement } from '../src/toggle'

const Toggle = $.element(ToggleElement)

$.render(
  <>
    <Toggle />
    <Toggle value={true} />
  </>,
  document.body
)
