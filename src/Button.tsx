import styles from './Button.module.scss'

type ButtonProps = {
    value: number | null
    hidden: boolean
}

function ButtonLayer(props: { isTop: boolean }) {
    return (
        <polygon
            fill='#000'
            stroke='#fff'
            strokeWidth={4}
            transform={`translate(0 ${props.isTop ? '-20' : '0'})`}
            points={(
                [
                    { x: '0', y: '20' },
                    { x: '20', y: '0' },
                    { x: '128', y: '0' },
                    { x: '128', y: '108' },
                    { x: '108', y: '128' },
                    { x: '0', y: '128' },
                ] as { x: string; y: string }[]
            )
                .map((value) => `${value.x},${value.y}`)
                .join(' ')}
        />
    )
}

export default function Button(props: ButtonProps) {
    const classes: string[] = [
        styles['button'],
        props.hidden ? styles['hidden'] : '',
    ]

    return (
        <svg
            className={classes.join(' ')}
            width={128}
            height={128}
            overflow='visible'
        >
            <ButtonLayer isTop={false} />
            <ButtonLayer isTop={true} />
        </svg>
    )
}
