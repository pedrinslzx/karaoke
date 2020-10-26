import { RefObject, useEffect } from 'react'
export interface MoveKey {
  up: string
  down: string
  enter: string
}
interface ArgumentsUseButtonsNavigation {
  el: RefObject<HTMLButtonElement>[]
  moveKey?: MoveKey
}
export type UseButtonsNavigation = (
  data: ArgumentsUseButtonsNavigation
) => {
  finish: () => void
}
export const useButtonsNavigation: UseButtonsNavigation = data => {
  const app = {
    moveKey: {
      up: 'ArrowUp',
      down: 'ArrowDown',
      enter: 'Enter'
    },
    ...data,
    selectIndex: 0,
    buttonsMax: data.el.length,
    exec: (code: number) => {
      try {
        app.el[code].current?.click()
      } catch (e) {
        console.error(e)
      }
    },
    render: () => {
      app.el.forEach((e, i) => {
        if (app.selectIndex === i) {
          e.current?.classList.add('selected')
        } else {
          e.current?.classList.remove('selected')
        }
      })
    },
    _listener: (e: KeyboardEvent) => {
      e.preventDefault()
      if (e.code === app.moveKey.down) {
        if (app.selectIndex + 1 <= app.buttonsMax) {
          app.selectIndex++
        } else {
          console.warn('Max')
        }
      }

      if (e.code === app.moveKey.up) {
        if (app.selectIndex - 1 >= 0) {
          app.selectIndex--
        } else {
          console.warn('Min')
        }
      }

      if (e.code === app.moveKey.enter) {
        app.exec(app.selectIndex)
      }
      app.render()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', app._listener)
    app.render()
    return () => document.removeEventListener('keydown', app._listener)
  })
  return {
    finish: () => document.removeEventListener('keydown', app._listener)
  }
}
