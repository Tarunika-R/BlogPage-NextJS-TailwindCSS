import React from 'react';
import Format from "@/app/layout/format"; // Import Format to wrap the page content

export default function About() {
  return (
    <Format>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          Learn more about our team and mission.
        </p>
      </section>
    </Format>
  );
}
