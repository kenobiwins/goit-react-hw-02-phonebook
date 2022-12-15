import { Container } from 'components/Container/Container';

export const Section = ({ majorTitle, title, children }) => {
  return (
    <section>
      <Container>
        {majorTitle && <h1>{majorTitle}</h1>}
        {title && <h2>{title}</h2>}
        {children}
      </Container>
    </section>
  );
};
