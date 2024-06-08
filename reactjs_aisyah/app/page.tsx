import Image from 'next/image';

import { Stack, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: "24px", color: "red" }}>Home Movie List</h1>
      <h2 style={{ fontSize: "28px", color: "white" }}>Aisyah Nur Hasunah</h2>
      <h3 style={{ fontSize: "16px", color: "green" }}>kelas pemrograman web 2023-2024</h3>
      <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>;
    </div>
  );
} 
