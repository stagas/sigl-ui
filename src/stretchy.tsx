/** @jsxImportSource sigl */

export const Stretchy = (
  { key, part, width, height, children }: {
    key?: string
    part?: string
    width: number
    height: number
    children?: JSX.Element
  },
): JSX.Element => (
  <svg
    key={key}
    part={part}
    viewBox={`0 0 ${width} ${height}`}
    preserveAspectRatio="xMidYMid meet"
  >
    <foreignObject x="0" y="0" width={width} height={height}>
      <div
        style={{
          width: width + 'px',
          height: height + 'px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </foreignObject>
  </svg>
)
