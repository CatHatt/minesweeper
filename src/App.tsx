import styles from './App.module.scss'
import Button from './Button'

function App() {
    return (
        <>
            <svg id={styles['crt-svg']}>
                <defs>
                    <pattern
                        id='pattern'
                        width='1'
                        height='4'
                        patternUnits='userSpaceOnUse'
                    >
                        <rect width='100%' height='100%' fill='white' />
                        <line x2='100%' stroke='#cccccc' stroke-width='4' />
                    </pattern>
                    <mask id='crt'>
                        <rect width='100%' height='100%' fill='url(#pattern)' />
                    </mask>
                </defs>
            </svg>
            <Button value={3} hidden={false} />
        </>
    )
}

export default App
