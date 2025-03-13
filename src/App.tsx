import "@mantine/core/styles.css";
import { MantineProvider, Container } from "@mantine/core";
import { mantineTheme } from "./theme";
import BackgroundContainer from "./components/BackgroundContainer";
import QuestionnaireForm from "./components/QuestionnaireForm";

export default function App() {
  return (
    <MantineProvider theme={mantineTheme}>
      <Container size="md" py="xl">
        <BackgroundContainer>
          <QuestionnaireForm />
        </BackgroundContainer>
      </Container>
    </MantineProvider>
  );
}
