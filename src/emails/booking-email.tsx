import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface BookingEmailProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  duration: string;
  price: string;
  date: string;
  time: string;
  notes?: string;
}

export function BookingEmail({
  name,
  email,
  phone,
  service,
  duration,
  price,
  date,
  time,
  notes,
}: BookingEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>New Booking from {name}</Preview>

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
          <Heading>New Booking Request</Heading>

          <Section>
            <Text>
              <strong>Name:</strong> {name}
            </Text>

            <Text>
              <strong>Email:</strong> {email}
            </Text>

            <Text>
              <strong>Phone:</strong> {phone}
            </Text>
          </Section>

          <Hr />

          <Heading as="h3">Appointment</Heading>

          <Text>
            <strong>Massage:</strong> {service}
          </Text>

          <Text>
            <strong>Duration:</strong> {duration}
          </Text>

          <Text>
            <strong>Price:</strong> {price}
          </Text>

          <Text>
            <strong>Date:</strong> {date}
          </Text>

          <Text>
            <strong>Time:</strong> {time}
          </Text>

          <Hr />

          <Heading as="h3">Notes</Heading>

          <Text>{notes || "None"}</Text>
        </Container>
      </Body>
    </Html>
  );
}