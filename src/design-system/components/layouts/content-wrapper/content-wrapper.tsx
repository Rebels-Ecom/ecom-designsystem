import styles from './content-wrapper.module.css'

const ContentWrapper = ({children} : {children : React.ReactNode} ) => {
    return(
        <div className={styles.contentWrapper}>
            {children}
        </div>
    )
}

export { ContentWrapper }