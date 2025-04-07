import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/illustration1.svg").default,
    description: (
      <>
        Sapuniko prioritises ease of use. Sections are "drag and drop" and can
        be edited in the same place. The flexible WordPress post editor ensures
        comfortable blogging.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/illustration2.svg").default,
    description: (
      <>
        Sapuniko handles the hard part. Every step of the setup is covered in
        our documentation. Kickstart your process with our One Click Demo
        Import. Create a fully fledged website in seconds.
      </>
    ),
  },
  {
    title: "Showcase Your Work",
    Svg: require("@site/static/img/illustration3.svg").default,
    description: (
      <>
        Present your projects in a fresh light. With our detailed portfolio
        pages, you can guide the user through your creations like a story.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
