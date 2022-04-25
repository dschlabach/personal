import React from "react";
import Layout from "../components/layout";

export default function about() {
  return (
    <Layout>
      <article class="mt-12 prose max-w-3xl mx-auto text-white">
        <h1 className="text-white font-bold text-center">About Me</h1>
        <p>
          Hi, I'm Daniel. I'm currently the Community Lead at{" "}
          <a
            className="text-blue-300 no-underline hover:underline"
            href="https://llama.xyz"
          >
            Llama
          </a>
          , a crypto startup building economic infrastructure for DAOs.
        </p>
        {/* <h2 className="text-white">A Few of My Favorite Things</h2>
        <ul>
          <li>Bookstores</li>
          <li>Music from the Grateful Dead ⚡🌹</li>
          <li>My dogs</li>
        </ul> */}
      </article>
    </Layout>
  );
}
