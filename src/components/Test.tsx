import { Container } from '@mantine/core';

export function Demo() {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <Container {...demoProps}>Default Container</Container>

      <Container size="xs" {...demoProps}>
        xs Container
      </Container>

      <Container size="sm" {...demoProps}>
        sm Container
      </Container>

      <Container size="md" {...demoProps}>
        md Container
      </Container>

      <Container size="lg" {...demoProps}>
        lg Container
      </Container>

      <Container size="xl" {...demoProps}>
        xl Container
      </Container>

      {/* <Container px={0} size="30rem" {...demoProps}>
        30rem Container without padding
      </Container> */}
    </>
  );
}
