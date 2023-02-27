import { Container, Title } from './Layout.styled';

export const Layout = ({ title, children }) => {
  return (
    <Container>
      <header></header>
      <main>
        <Title>{title}</Title>
        {children}
      </main>
      <footer></footer>
    </Container>
  );
};
