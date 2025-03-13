import { useRef } from "react";
import { Title, Text, Stack, Button } from "@mantine/core";
import { isNotEmpty, matches, useForm } from "@mantine/form";
import FormFields from "./FormFields";
import { firePalmTreeConfetti } from "../utils/confettiEffect";

export default function QuestionnaireForm() {
  const buttonRef = useRef(null);

  const form = useForm({
    initialValues: {
      firstName: "",
      lastNameInitial: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      openQuestion: "",
      phoneNumber: "",
    },
    validate: {
      firstName: isNotEmpty("Name ist erforderlich"),
      lastNameInitial: isNotEmpty("Initial ist erforderlich"),
      question1: isNotEmpty("Bitte wählen Sie eine Option"),
      question2: isNotEmpty("Bitte wählen Sie eine Option"),
      question3: isNotEmpty("Bitte wählen Sie eine Option"),
      question4: isNotEmpty("Bitte wählen Sie eine Option"),
      question5: isNotEmpty("Bitte wählen Sie eine Option"),
      question6: isNotEmpty("Bitte wählen Sie eine Option"),
      question7: isNotEmpty("Bitte wählen Sie eine Option"),
      openQuestion: isNotEmpty("Bitte beantworten Sie die Frage"),
      phoneNumber: matches(
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
        "Bitte geben Sie eine gültige Telefonnummer ein"
      ),
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Trigger confetti with the button reference
    firePalmTreeConfetti(buttonRef.current);

    // Delayed alert to allow confetti to be visible
    setTimeout(() => {
      alert("Fragebogen erfolgreich gesendet!");
      form.reset();
    }, 800);
  };

  return (
    <>
      <Title order={1} mb="xs" ta="center">
        Gewinne deine Traumreise mit der P3 Reiseagentur!
      </Title>
      <Text size="lg" c="dimmed" ta="center" mb="lg">
        In nur 8 Fragen zum Traumziel!
      </Text>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack spacing="md">
          <FormFields form={form} />

          <Button ref={buttonRef} type="submit" mt="md" size="md" fullWidth>
            Fertschhh und abschicken!
          </Button>
        </Stack>
      </form>
    </>
  );
}
