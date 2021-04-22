import React, { forwardRef } from 'react'
import { GridProps as StyledGridProps } from 'styled-system'

import Box, { BoxProps, PolymorphicComponent } from '../primitives/Box'

type AutoFillFitOptions = {
  min: string
  max: string
}

export interface GridOptions {
  templateColumns?: StyledGridProps['gridTemplateColumns']
  gap?: BoxProps['gridGap']
  rowGap?: BoxProps['gridGap']
  columnGap?: BoxProps['gridGap']
  autoFlow?: StyledGridProps['gridAutoFlow']
  autoRows?: StyledGridProps['gridAutoRows']
  autoColumns?: StyledGridProps['gridAutoColumns']
  templateRows?: StyledGridProps['gridTemplateRows']
  templateAreas?: StyledGridProps['gridTemplateAreas']
  area?: StyledGridProps['gridArea']
  column?: StyledGridProps['gridColumn']
  row?: StyledGridProps['gridRow']
  autoFit?: AutoFillFitOptions | boolean
  autoFill?: AutoFillFitOptions | boolean
}

export type GridProps = Omit<
  BoxProps,
  | 'templateColumns'
  | 'gap'
  | 'rowGap'
  | 'columnGap'
  | 'autoFlow'
  | 'autoRows'
  | 'autoColumns'
  | 'templateRows'
  | 'templateAreas'
  | 'area'
  | 'column'
  | 'row'
> &
  GridOptions

const Grid = forwardRef<HTMLElement, GridProps>((props, ref) => {
  const {
    templateColumns,
    gap,
    rowGap,
    columnGap,
    autoFlow,
    autoRows,
    autoColumns,
    templateRows,
    templateAreas,
    area,
    column,
    row,
    autoFit,
    autoFill,
    sx,
    display = 'grid',
    ...rest
  } = props
  const styles = {
    ...(autoFit &&
      typeof autoFit === 'boolean' &&
      autoFit === true && {
        gridTemplateColumns: `repeat(auto-fit, minmax(100px, 1fr))`,
      }),
    ...(autoFit &&
      typeof autoFit === 'object' && {
        gridTemplateColumns: `repeat(auto-fit, minmax(${autoFit.min ?? '100px'}, ${autoFit.max ?? '1fr'}))`,
      }),
    ...(autoFill &&
      typeof autoFill === 'boolean' &&
      autoFill === true && {
        gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`,
      }),
    ...(autoFill &&
      typeof autoFill === 'object' && {
        gridTemplateColumns: `repeat(auto-fill, minmax(${autoFill.min ?? '100px'}, ${autoFill.max ?? '1fr'}))`,
      }),
  }
  return (
    <Box
      display={display}
      gridTemplateColumns={templateColumns}
      gridGap={gap}
      gridRowGap={rowGap}
      gridColumnGap={columnGap}
      gridAutoFlow={autoFlow}
      gridAutoRows={autoRows}
      gridAutoColumns={autoColumns}
      gridTemplateRows={templateRows}
      gridTemplateAreas={templateAreas}
      gridArea={area}
      gridColumn={column}
      gridRow={row}
      ref={ref}
      sx={{
        ...styles,
        ...sx,
      }}
      {...rest}
    />
  )
})

Grid.displayName = 'Grid'

export default Grid as PolymorphicComponent<GridProps>
