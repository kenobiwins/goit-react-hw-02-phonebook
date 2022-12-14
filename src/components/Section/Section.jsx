
export const Section = ({majorTitle,title,children}) => {
    return (
        <section>
            {majorTitle && <h1>{majorTitle}</h1>}
            {title && <h2>{title}</h2>}
            {children}
        </section>
    )
}