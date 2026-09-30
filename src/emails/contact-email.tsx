import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export function ContactEmail({
  name,
  email,
  phone,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>{subject}</Preview>

      <Body
        style={{
          background: "#f7f7f7",
          fontFamily: "Arial",
        }}
      >
        <Container
          style={{
            background: "#fff",
            padding: 30,
            borderRadius: 12,
          }}
        >
          <Heading>New Contact Message</Heading>

          <Text>
            <strong>Name:</strong> {name}
          </Text>

          <Text>
            <strong>Email:</strong> {email}
          </Text>

          <Text>
            <strong>Phone:</strong> {phone || "Not provided"}
          </Text>

          <Hr />

          <Heading as="h3">{subject}</Heading>

          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}