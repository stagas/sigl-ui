<h1>
sigl-ui <a href="https://npmjs.org/package/sigl-ui"><img src="https://img.shields.io/badge/npm-v1.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-178-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/sigl-ui@1.0.1/dist/sigl-ui.min.js"><img src="https://img.shields.io/badge/brotli-16.3K-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

UI elements and components for sigl

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i sigl-ui </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add sigl-ui </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add sigl-ui</code>
</td></tr></table>
</h4>

## Examples

<details id="example$web" title="web" open><summary><span><a href="#example$web">#</a></span>  <code><strong>web</strong></code></summary>  <ul>    <details id="source$web" title="web source code" open><summary><span><a href="#source$web">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/web.tsx">example/web.tsx</a>  <p>

```tsx
/** @jsxImportSource sigl */
import $ from 'sigl'

import { ToggleElement } from 'sigl-ui/toggle'

const Toggle = $.element(ToggleElement)

$.render(
  <>
    <Toggle />
    <Toggle value={true} />
  </>,
  document.body
)
```

</p>
</details></ul></details>

## API

<p>  <details id="NumberInputElement$1" title="Class" ><summary><span><a href="#NumberInputElement$1">#</a></span>  <code><strong>NumberInputElement</strong></code>    </summary>  <a href="src/number-input.tsx#L7">src/number-input.tsx#L7</a>  <ul>        <p>  <details id="constructor$2" title="Constructor" ><summary><span><a href="#constructor$2">#</a></span>  <code><strong>constructor</strong></code><em>()</em>    </summary>    <ul>    <p>  <details id="new NumberInputElement$3" title="ConstructorSignature" ><summary><span><a href="#new NumberInputElement$3">#</a></span>  <code><strong>new NumberInputElement</strong></code><em>()</em>    </summary>    <ul><p><a href="#NumberInputElement$1">NumberInputElement</a></p>        </ul></details></p>    </ul></details><details id="max$6" title="Property" ><summary><span><a href="#max$6">#</a></span>  <code><strong>max</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>100</code></span>  </summary>  <a href="src/number-input.tsx#L10">src/number-input.tsx#L10</a>  <ul><p>number</p>        </ul></details><details id="min$5" title="Property" ><summary><span><a href="#min$5">#</a></span>  <code><strong>min</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>0</code></span>  </summary>  <a href="src/number-input.tsx#L9">src/number-input.tsx#L9</a>  <ul><p>number</p>        </ul></details><details id="onmounted$20" title="Property" ><summary><span><a href="#onmounted$20">#</a></span>  <code><strong>onmounted</strong></code>    </summary>    <ul><p><span>EventHandler</span>&lt;<a href="#NumberInputElement$1">NumberInputElement</a>, <span>CustomEvent</span>&lt;any&gt;&gt;</p>        </ul></details><details id="onunmounted$21" title="Property" ><summary><span><a href="#onunmounted$21">#</a></span>  <code><strong>onunmounted</strong></code>    </summary>    <ul><p><span>EventHandler</span>&lt;<a href="#NumberInputElement$1">NumberInputElement</a>, <span>CustomEvent</span>&lt;any&gt;&gt;</p>        </ul></details><details id="step$7" title="Property" ><summary><span><a href="#step$7">#</a></span>  <code><strong>step</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>0.1</code></span>  </summary>  <a href="src/number-input.tsx#L11">src/number-input.tsx#L11</a>  <ul><p>number</p>        </ul></details><details id="value$4" title="Property" ><summary><span><a href="#value$4">#</a></span>  <code><strong>value</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>0</code></span>  </summary>  <a href="src/number-input.tsx#L8">src/number-input.tsx#L8</a>  <ul><p>number</p>        </ul></details><details id="mounted$8" title="Method" ><summary><span><a href="#mounted$8">#</a></span>  <code><strong>mounted</strong></code><em>($)</em>    </summary>  <a href="src/number-input.tsx#L13">src/number-input.tsx#L13</a>  <ul>    <p>    <details id="$$10" title="Parameter" ><summary><span><a href="#$$10">#</a></span>  <code><strong>$</strong></code>    </summary>    <ul><p><span>Context</span>&lt;<a href="#NumberInputElement$1">NumberInputElement</a> &amp; <span>JsxContext</span>&lt;<a href="#NumberInputElement$1">NumberInputElement</a>&gt; &amp; <span>Omit</span>&lt;{<p>    <details id="ctor$14" title="Parameter" ><summary><span><a href="#ctor$14">#</a></span>  <code><strong>ctor</strong></code>    </summary>    <ul><p><span>Class</span>&lt;<a href="#T$13">T</a>&gt;</p>        </ul></details>  <p><strong></strong>&lt;<span>T</span>&gt;<em>(ctor)</em>  &nbsp;=&gt;  <ul><span>CleanClass</span>&lt;<a href="#T$13">T</a>&gt;</ul></p>  <details id="ctx$18" title="Parameter" ><summary><span><a href="#ctx$18">#</a></span>  <code><strong>ctx</strong></code>    </summary>    <ul><p><a href="#T$17">T</a> | <span>Class</span>&lt;<a href="#T$17">T</a>&gt;</p>        </ul></details>  <p><strong></strong>&lt;<span>T</span>&gt;<em>(ctx)</em>  &nbsp;=&gt;  <ul><span>Wrapper</span>&lt;<a href="#T$17">T</a>&gt;</ul></p></p>} &amp; <span>__module</span> &amp; {}, <code>"transition"</code>&gt;&gt;</p>        </ul></details>  <p><strong>mounted</strong><em>($)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details></p></ul></details><details id="ToggleElement$31" title="Class" ><summary><span><a href="#ToggleElement$31">#</a></span>  <code><strong>ToggleElement</strong></code>    </summary>  <a href="src/toggle.tsx#L7">src/toggle.tsx#L7</a>  <ul>        <p>  <details id="constructor$32" title="Constructor" ><summary><span><a href="#constructor$32">#</a></span>  <code><strong>constructor</strong></code><em>()</em>    </summary>    <ul>    <p>  <details id="new ToggleElement$33" title="ConstructorSignature" ><summary><span><a href="#new ToggleElement$33">#</a></span>  <code><strong>new ToggleElement</strong></code><em>()</em>    </summary>    <ul><p><a href="#ToggleElement$31">ToggleElement</a></p>        </ul></details></p>    </ul></details><details id="onmounted$47" title="Property" ><summary><span><a href="#onmounted$47">#</a></span>  <code><strong>onmounted</strong></code>    </summary>    <ul><p><span>EventHandler</span>&lt;<a href="#ToggleElement$31">ToggleElement</a>, <span>CustomEvent</span>&lt;any&gt;&gt;</p>        </ul></details><details id="onunmounted$48" title="Property" ><summary><span><a href="#onunmounted$48">#</a></span>  <code><strong>onunmounted</strong></code>    </summary>    <ul><p><span>EventHandler</span>&lt;<a href="#ToggleElement$31">ToggleElement</a>, <span>CustomEvent</span>&lt;any&gt;&gt;</p>        </ul></details><details id="value$34" title="Property" ><summary><span><a href="#value$34">#</a></span>  <code><strong>value</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>false</code></span>  </summary>  <a href="src/toggle.tsx#L8">src/toggle.tsx#L8</a>  <ul><p>boolean</p>        </ul></details><details id="mounted$35" title="Method" ><summary><span><a href="#mounted$35">#</a></span>  <code><strong>mounted</strong></code><em>($)</em>    </summary>  <a href="src/toggle.tsx#L10">src/toggle.tsx#L10</a>  <ul>    <p>    <details id="$$37" title="Parameter" ><summary><span><a href="#$$37">#</a></span>  <code><strong>$</strong></code>    </summary>    <ul><p><span>Context</span>&lt;<a href="#ToggleElement$31">ToggleElement</a> &amp; <span>JsxContext</span>&lt;<a href="#ToggleElement$31">ToggleElement</a>&gt; &amp; <span>Omit</span>&lt;{<p>    <details id="ctor$41" title="Parameter" ><summary><span><a href="#ctor$41">#</a></span>  <code><strong>ctor</strong></code>    </summary>    <ul><p><span>Class</span>&lt;<a href="#T$13">T</a>&gt;</p>        </ul></details>  <p><strong></strong>&lt;<span>T</span>&gt;<em>(ctor)</em>  &nbsp;=&gt;  <ul><span>CleanClass</span>&lt;<a href="#T$13">T</a>&gt;</ul></p>  <details id="ctx$45" title="Parameter" ><summary><span><a href="#ctx$45">#</a></span>  <code><strong>ctx</strong></code>    </summary>    <ul><p><a href="#T$17">T</a> | <span>Class</span>&lt;<a href="#T$17">T</a>&gt;</p>        </ul></details>  <p><strong></strong>&lt;<span>T</span>&gt;<em>(ctx)</em>  &nbsp;=&gt;  <ul><span>Wrapper</span>&lt;<a href="#T$17">T</a>&gt;</ul></p></p>} &amp; <span>__module</span> &amp; {}, <code>"transition"</code>&gt;&gt;</p>        </ul></details>  <p><strong>mounted</strong><em>($)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details></p></ul></details><details id="Stretchy$22" title="Function" ><summary><span><a href="#Stretchy$22">#</a></span>  <code><strong>Stretchy</strong></code><em>({ children, height, key, part, width })</em>    </summary>  <a href="src/stretchy.tsx#L3">src/stretchy.tsx#L3</a>  <ul>    <p>    {<p>  <details id="children$30" title="Property" ><summary><span><a href="#children$30">#</a></span>  <code><strong>children</strong></code>    </summary>  <a href="src/stretchy.tsx#L9">src/stretchy.tsx#L9</a>  <ul><p><span>VKid</span></p>        </ul></details><details id="height$29" title="Property" ><summary><span><a href="#height$29">#</a></span>  <code><strong>height</strong></code>    </summary>  <a href="src/stretchy.tsx#L8">src/stretchy.tsx#L8</a>  <ul><p>number</p>        </ul></details><details id="key$26" title="Property" ><summary><span><a href="#key$26">#</a></span>  <code><strong>key</strong></code>    </summary>  <a href="src/stretchy.tsx#L5">src/stretchy.tsx#L5</a>  <ul><p>string</p>        </ul></details><details id="part$27" title="Property" ><summary><span><a href="#part$27">#</a></span>  <code><strong>part</strong></code>    </summary>  <a href="src/stretchy.tsx#L6">src/stretchy.tsx#L6</a>  <ul><p>string</p>        </ul></details><details id="width$28" title="Property" ><summary><span><a href="#width$28">#</a></span>  <code><strong>width</strong></code>    </summary>  <a href="src/stretchy.tsx#L7">src/stretchy.tsx#L7</a>  <ul><p>number</p>        </ul></details></p>}  <p><strong>Stretchy</strong><em>({ children, height, key, part, width })</em>  &nbsp;=&gt;  <ul><span>VKid</span></ul></p></p>    </ul></details></p>

## Credits

- [sigl](https://npmjs.org/package/sigl) by [stagas](https://github.com/stagas) &ndash; Web framework

## Contributing

[Fork](https://github.com/stagas/sigl-ui/fork) or [edit](https://github.dev/stagas/sigl-ui) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
