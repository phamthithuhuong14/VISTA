import React from "react";
import ImgPGAT from "../../public/image/ImgPGAT.svg";
import Footer from "./Footer";

type Props = {};

const PGAT = (props: Props) => {
  return (
    <div className="bg-black text-white min-h-screen pb-40">
      {/* Banner */}
      <div>
        <img src={ImgPGAT} alt="" className="w-full" />
      </div>

      {/* About Vistia */}
      <section className="py-10 px-6 md:px-16">
        <h2 className="text-4xl  font-bold text-blue-400 mb-4 text-center">
          About Vistia
        </h2>
        <p className=" text-xl tracking-wide leading-relaxed mb-4 font-mono font-normal text-justify">
          Vistia is an advanced AI-driven trading platform designed to simplify
          and automate crypto trading. Our solution tackles key trader
          challenges, including information overload, emotional decision-making,
          and the complexity of technical analysis.
        </p>
        <a href="#" className="text-sky-500 text-xl underline font-bold">
          See more...
        </a>
      </section>

      {/* About PGAT */}
      <section className="py-10 px-6 md:px-16">
        <h2 className="text-4xl text-center font-bold text-blue-400 mb-4">
          About PGAT
        </h2>
        <p className=" mb-10 text-xl tracking-wide leading-relaxed font-mono font-normal text-justify">
          The POKT Gateway Accelerator Tour (PGAT) is a 3-month accelerator
          designed to support builders shaping the future of gateways. Were
          selecting 6 talented builders to receive $25,000 each in USDC and gain
          exclusive access to the POKT Network, enabling them to bring
          innovative gateway solutions to life.
        </p>
        <div className="">
          <h1 className="font-mono text-2xl font-bold">Program Highlights</h1>
          <div className="tracking-wide leading-relaxed text-xl mt-2 text-justify">
          <p className="text-white">
              <span className="font-normal text-sky-400 inline">Funding:</span>
              <span className="inline ml-2">
              A $25K USDC grant to kickstart your development
              </span>
            </p>
            <p className="text-white">
              <span className="font-normal text-sky-400 inline">Programming:</span>
              <span className="inline ml-2">
                An immersive 3 months program dedicated to help you ship your
                gateway
              </span>
            </p>
            <p className="text-white">
              <span className="font-normal text-sky-400 inline">Mentorship:</span>
              <span className="inline ml-2">
              Work with experienced Web3 founders, developers, and industry advisors
              </span>
            </p>
            <p className="text-white">
              <span className="font-normal text-sky-400 inline">Showcase:</span>
              <span className="inline ml-2">
              Present your project to ecosystem partners, and the broader Web3 community
              </span>
            </p>
          </div>
        </div>
        <a href="#" className="text-sky-500 text-xl underline font-bold">
          See more...
        </a>
      </section>

      {/* About Pocket  */}
      <section className="py-10 px-6 md:px-16">
        <h2 className="text-4xl text-center font-bold text-blue-400 mb-4">
          About Pocket
        </h2>
        <p className=" mb-4 text-xl tracking-wide leading-relaxed font-mono font-normal text-justify">
          The POKT protocol is one of the first players in the Decentralized
          Physical Infrastructure (DePIN) space. It incentivizes and coordinates
          a decentralized network of node operators to provide open data access
          to anyone, while dramatically out performing and more cost effective
          then their centralized counterparts.
        </p>
        <p className="mb-4 text-xl tracking-wide leading-relaxed font-mono font-normal text-justify">
          Currently, POKT nodes serve blockchain RPCs, allowing applications to
          reliably interact with 30+ blockchains and Layer-2 networks. With one
          POKT integration, developers gain low-cost, resilient access to all
          supported networks.
        </p>

        <a href="#" className="text-sky-500 text-xl font-bold underline ">
          See more...
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default PGAT;
