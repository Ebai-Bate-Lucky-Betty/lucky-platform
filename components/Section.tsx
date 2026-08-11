import { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="px-10 py-24 max-w-5xl mx-auto scroll-mt-24">
      
      <h2 className="text-3xl font-medium text-blue-700">
        {title}
      </h2>

      <div className="mt-10">
        {children}
      </div>

    </section>
  );
}