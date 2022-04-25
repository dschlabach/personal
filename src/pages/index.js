import React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="mt-8 md:mt-20 flex max-w-3xl">
        <div>
          <p>
            Hi, I'm Daniel. I'm currently the Community Lead at{" "}
            <a
              className="text-blue-300 hover:text-slate-100"
              href="https://llama.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Llama
            </a>
            , a crypto startup building economic infrastructure for DAOs.
          </p>
          <p className="mt-3">
            I write{" "}
            <a
              className="text-blue-300 hover:text-slate-100"
              href="https://eyesoftheworld.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eyes of the World
            </a>
            , a Substack exploring DAOs and web3. I also publish occasional
            explainer articles of crypto topics and protocols.
          </p>
          <div className="mt-8">
            <h2 className="mb-2 font-semibold text-2xl">Articles</h2>
            <a
              className="text-blue-300 hover:text-slate-100"
              href="https://mirror.xyz/schlabach.eth/EBBswvawc3Jiuu5PVKWbbHVLFHyba3XYtYXRLhZoT_4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Why I’m Leaving Harvard Business School to Join a Crypto Startup
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-16 flex flex-wrap md:flex-nowrap">
        <div className="pr-10 max-w-xl">
          <h2 className="mb-2 font-semibold text-2xl">Experience</h2>
          <ul className="list-disc pl-6">
            <li className="my-3">
              <span className="font-semibold">2022-present</span>: Community
              Lead at Llama
            </li>
            <li className="my-3">
              <span className="font-semibold">2021-2022</span>: First year
              student at Harvard Business School
            </li>
            <li className="my-3">
              <span className="font-semibold">2018-2021</span>: Investment
              Analyst at Duke University Management Company
            </li>
            <li className="my-3">
              <span className="font-semibold">2014-2018</span>: Duke University,
              B.S. Neuroscience & Russian
            </li>
            {/* <li className="my-3">
              Ethereum contributor{" "}
              <a
                className="text-blue-300 hover:text-slate-100"
                href="https://github.com/ethereum/ethereum-org-website/pull/1186"
              >
                (lol)
              </a>
            </li> */}
          </ul>
        </div>
        <div className="mt-8 md:mt-0 md:px-10 max-w-xl">
          <h2 className="mb-2 font-semibold text-2xl">Projects</h2>
          <ul className="list-disc pl-6">
            {" "}
            <li className="my-3">
              <a
                className="font-semibold text-blue-300 hover:text-slate-100"
                href="https://readbroca.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Broca
              </a>
              : A blog I wrote about trying to learn 3,000 Chinese characters in
              120 days.
            </li>
            <li className="my-3">
              <a
                className="font-semibold text-blue-300 hover:text-slate-100"
                href="https://readalong.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                ReadAlong
              </a>
              : A website I built to read dual-language stories.
            </li>
            <li className="my-3">
              <a
                className="font-semibold text-blue-300 hover:text-slate-100"
                href="https://filtrd.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Filtrd
              </a>
              : A full-stack application I built while teaching myself to code.
            </li>
            <li className="my-3">
              <a
                className="font-semibold text-blue-300 hover:text-slate-100"
                href="https://twitter.com/jeopardytweeter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jeopardy Tweeter
              </a>
              : A Jeopardy Twitter bot that tweets Jeopardy questions every
              hour.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
