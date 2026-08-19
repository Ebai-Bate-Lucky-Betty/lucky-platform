import Link from "next/link";

import { homeContent } from "@/data/home";

export default function Transition() {
  const { transition } = homeContent;

  return (
    <section className="who-is-lucky">
      <div className="who-is-lucky-inner">

        <div
          className="who-is-lucky-background"
          aria-hidden="true"
        >
          {transition.backgroundText}
        </div>


        <div className="who-is-lucky-content">

          <p className="who-is-lucky-eyebrow">
            {transition.eyebrow}
          </p>


          <h2 className="who-is-lucky-title">
            {transition.title.lineOne}
            <br />
            {transition.title.lineTwo}
          </h2>


          <div className="who-is-lucky-bottom">

            <p className="who-is-lucky-description">
              {transition.description}
            </p>


            <Link
              href={transition.cta.href}
              className="who-is-lucky-cta"
            >
              {transition.cta.label}{" "}
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}