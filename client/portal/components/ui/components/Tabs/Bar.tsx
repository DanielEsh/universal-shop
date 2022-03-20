import { useContext, useEffect, useRef, ReactNode } from 'react'
import classNames from 'classnames'
import { focusIn, Focus } from '@/ui/utils/focus-manager'
import { keyList, isKeyCode } from '@/ui/utils//isKeyCode'
import { TabsContext } from '@/ui/components/Tabs/Context'
import { Indicator } from '@/ui/components/Tabs/Indicator'

export type BarProps = {
  children: ReactNode
}

export const Bar = ({ children }: BarProps) => {
    const barRef = useRef<HTMLDivElement>(null)

    const { color, direction, activeTabIndicatorProperties } = useContext(TabsContext)

    const colorsList = {
        primary: 'bg-dark-500',
        secondary: 'bg-dark-500  dark:bg-light-500',
    }

    const classes = classNames(
        'relative flex p-2 rounded-md',
        colorsList[color],
        {
            ['flex-row']: direction === 'horizontal',
            ['flex-col']: direction === 'vertical',
        },
    )

    const onKeyDown = (event: KeyboardEvent) => {
        if (!barRef.current) {
            return
        }

        if (direction === 'horizontal') {
            if (isKeyCode(event.code, [keyList.LEFT])) {
                return focusIn(barRef.current, Focus.Previous | Focus.WrapAround)
            }

            if (isKeyCode(event.code, [keyList.RIGHT])) {
                focusIn(barRef.current, Focus.Next | Focus.WrapAround)
            }
        }

        if (direction === 'vertical') {
            if (isKeyCode(event.code, [keyList.UP])) {
                return focusIn(barRef.current, Focus.Previous | Focus.WrapAround)
            }

            if (isKeyCode(event.code, [keyList.DOWN])) {
                focusIn(barRef.current, Focus.Next | Focus.WrapAround)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown)

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const styles = {
        left: activeTabIndicatorProperties?.left,
        width: activeTabIndicatorProperties?.width,
        top: activeTabIndicatorProperties?.top,
        height: activeTabIndicatorProperties?.height,
    }

    return (
        <div
            ref={barRef}
            className={classes}
        >
            {activeTabIndicatorProperties && <Indicator styles={styles} />}
            {children}
        </div>
    )
}
