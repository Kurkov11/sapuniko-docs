import React from "react";
import Layout from "@theme/Layout";

export default function IllustrationInfo() {
  return (
    <Layout>
      <header class="hero hero--primary heroBanner_qdFl">
        <div class="container">
          <h1 class="hero__title sapuniko-illustration-copyright-title">
            Thanks to Storyset for the site illustrations!
          </h1>
        </div>
      </header>
      <main
        style={{ display: "flex", justifyContent: "center", fontSize: "25px" }}
      >
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0,
            paddingBlock: 50,
          }}
        >
          <li>
            <a
              href="https://storyset.com/web"
              target="_blank"
              className="navbar__item navbar__link"
              style={{ textDecoration: "underline" }}
            >
              Web illustrations
            </a>
          </li>
          <li>
            <a
              href="https://storyset.com/people"
              className="navbar__item navbar__link"
              style={{ textDecoration: "underline" }}
              target="_blank"
            >
              People illustrations
            </a>
          </li>
          <li>
            <a
              href="https://storyset.com/work"
              className="navbar__item navbar__link"
              style={{ textDecoration: "underline" }}
              target="_blank"
            >
              Work illustrations
            </a>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
