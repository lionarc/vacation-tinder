import { TextInput, Radio, Textarea, Group } from "@mantine/core";

export default function FormFields({ form }) {
  return (
    <>
      <TextInput
        label="Wie dürfen wir dich nennen?"
        placeholder="Dein Vorname oder Superhelden-Pseudonym"
        required
        {...form.getInputProps("firstName")}
      />

      <TextInput
        label="Der mysteriöse erste Buchstabe deines Nachnamens"
        placeholder="Gib ihn preis!"
        maxLength={1}
        required
        {...form.getInputProps("lastNameInitial")}
      />

      <Radio.Group
        label="1. Deine Urlaubsplanung gleicht eher..."
        required
        {...form.getInputProps("question1")}
      >
        <Group mt="xs">
          <Radio
            value="spontaneous"
            label="Einem Blindflug - Ich buche spontan und hoffe, dass das Hotel existiert"
          />
          <Radio
            value="wellPlanned"
            label="Einer militärischen Operation - Ich habe Excel-Tabellen und einen Notfallplan"
          />
          <Radio
            value="mixed"
            label="Einem kontrollierten Chaos - Grobe Planung mit Raum für Überraschungen"
          />
        </Group>
      </Radio.Group>

      <Radio.Group
        label="2. Dein idealer Urlaubsort ist..."
        required
        {...form.getInputProps("question2")}
      >
        <Group mt="xs">
          <Radio
            value="beach"
            label="Strand - Wo ich Sand an unmöglichen Körperstellen finde"
          />
          <Radio
            value="mountains"
            label="Berge - Je höher, desto mehr Instagram-Likes"
          />
          <Radio
            value="city"
            label="Stadt - Damit ich nach 20.000 Schritten endlich bereuen kann, keine Wanderschuhe mitgenommen zu haben"
          />
          <Radio
            value="countryside"
            label="Landschaft - Wo Kühe meine besten Freunde werden"
          />
        </Group>
      </Radio.Group>

      <Radio.Group
        label="3. Dein Aktivitätslevel im Urlaub?"
        required
        {...form.getInputProps("question3")}
      >
        <Group mt="xs">
          <Radio
            value="veryActive"
            label="Vom Sonnenaufgangs-Yoga zum Mitternachts-Tauchen - Schlaf ist für Schwache"
          />
          <Radio
            value="moderatelyActive"
            label="Ich sehe Sehenswürdigkeiten, aber nur wenn sie nicht bergauf liegen"
          />
          <Radio
            value="relaxed"
            label="Mein größter Erfolg ist, wenn ich vom Liegen zum Essen aufstehe"
          />
        </Group>
      </Radio.Group>

      <Radio.Group
        label="4. Verpflegung im Urlaub - du bevorzugst..."
        required
        {...form.getInputProps("question4")}
      >
        <Group mt="xs">
          <Radio
            value="allInclusive"
            label="All-Inclusive - Weil ich den Wert meines Armbändchens mit 7 Desserts pro Tag amortisieren muss"
          />
          <Radio
            value="selfCatering"
            label="Selbstverpflegung - Ich koche aus lokalen Zutaten, die ich nicht identifizieren kann"
          />
          <Radio
            value="mixed"
            label="Gemischt - Frühstücksbuffet attackieren und abends planlos durch die Stadt irren"
          />
        </Group>
      </Radio.Group>

      <Radio.Group
        label="5. Kulturelles Programm im Urlaub bedeutet für dich..."
        required
        {...form.getInputProps("question5")}
      >
        <Group mt="xs">
          <Radio
            value="veryImportant"
            label="Ich kenne die Museumsaufseher nach drei Tagen beim Vornamen"
          />
          <Radio
            value="somewhatImportant"
            label="Ich fotografiere alles Kulturelle für Instagram, ohne zu wissen was es ist"
          />
          <Radio
            value="notImportant"
            label="Das einzige Kulturelle ist die Bakterienkultur in meinem vergessenen Strandhandtuch"
          />
        </Group>
      </Radio.Group>

      <Radio.Group
        label="6. In puncto Abenteuer vs. Erholung bist du..."
        required
        {...form.getInputProps("question6")}
      >
        <Group mt="xs">
          <Radio
            value="relaxation"
            label="Team Hängematte - Mein größtes Risiko ist ein Sonnenbrand durch Einschlafen"
          />
          <Radio
            value="adventure"
            label="Team Indiana Jones - Mit Jetlag noch schnell den Vulkan besteigen, warum nicht?"
          />
          <Radio
            value="both"
            label="Team Schizophren - Morgens Bungee-Jumping, nachmittags Wellness"
          />
        </Group>
      </Radio.Group>

      <Radio.Group
        label="7. Dein idealer Urlaub dauert..."
        required
        {...form.getInputProps("question7")}
      >
        <Group mt="xs">
          <Radio
            value="weekend"
            label="Ein Wochenende - Genug Zeit, um den Jetlag zu bekommen, aber nicht zu überwinden"
          />
          <Radio
            value="oneWeek"
            label="Eine Woche - Perfekt um am letzten Tag endlich zu entspannen"
          />
          <Radio
            value="twoWeeks"
            label="Zwei Wochen - Lang genug, um zu vergessen, wie meine Kollegen heißen"
          />
          <Radio
            value="longerThanTwoWeeks"
            label="Länger - Mein Ziel ist es, dass die Pflanze zuhause mich nicht mehr erkennt"
          />
        </Group>
      </Radio.Group>

      <Textarea
        label="Stell dir vor, du gewinnst eine Million im Lotto und musst sie SOFORT für einen einzigen Urlaubstag ausgeben. Wie sieht dieser Tag aus?"
        placeholder="Lass deinen Fantasien freien Lauf. Je absurder, desto besser!"
        minRows={4}
        required
        {...form.getInputProps("openQuestion")}
      />

      <TextInput
        label="Deine Telefonnummer (falls wir einen geheimen Urlaubsgewinn verlosen wollen)"
        placeholder="+49 123 4567890"
        required
        {...form.getInputProps("phoneNumber")}
      />
    </>
  );
}
