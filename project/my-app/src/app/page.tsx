"use client";

import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-2">
      <Button intent="primary" size="sm" onClick={() => alert("asd")}>
        Primary
      </Button>
      <Button intent="primary" size="md">
        Primary
      </Button>
      <Button intent="primary" size="lg">
        Primary
      </Button>
      <Button intent="primary" size="lg" variant="outline">
        Primary
      </Button>
      <Button intent="secondary" size="sm">
        Secondary
      </Button>
      <Button intent="secondary" size="md">
        Secondary
      </Button>
      <Button intent="secondary" size="lg">
        Secondary
      </Button>
      <Button intent="secondary" size="lg" variant="outline">
        Secondary
      </Button>
      <Button intent="danger" size="sm">
        Danger
      </Button>
      <Button intent="danger" size="md">
        Danger
      </Button>
      <Button intent="danger" size="lg">
        Danger
      </Button>
      <Button intent="danger" size="lg" variant="outline">
        Danger
      </Button>
      {/* Chip */}
      {/* <Chip label="Chip" intent="primary" />
      <Chip label="Chip" intent="secondary" />
      <Chip label="Chip" intent="danger" />
      <Chip label="Chip" intent="info" />
      <Chip label="Chip" intent="warning" />
      <Chip label="Chip" /> */}
    </div>
  );
}
