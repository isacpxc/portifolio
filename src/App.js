import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

function App() {
  return (
    <div className="portfolio-container">
      <div className="banner">🚧 Under Construction 🚧</div>

      <div className="main-content">
        <div className="profile-section">
          <img
            src={require("./img/port.jpg")}
            alt="Your profile"
            className="profile-image"
          />
          <h1 className="profile-name">Isac Costa</h1>
          <p className="profile-description">
            Computer Science student with experience in web development,
            blockchain development, academic research, communication and
            teamwork, and certified AWS Cloud Practitioner. Proficient in
            English, native Portuguese(Brazil). Interested in technology and
            ready to learn and work!
          </p>
          <div className="social-links">
            <a href="https://github.com/isacpxc" target="_blank">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/isaccosta-dev" target="_blank">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="http://lattes.cnpq.br/4295799395109590" target="_blank">
              <HiAcademicCap className="social-icon" />
            </a>
          </div>
        </div>

        <div className="projects-section">
          <h2 className="projects-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3 className="project-title">MyArt</h3>
              <p className="project-description">
                About NFT marketplace powered by its native token (MATK),
                enabling users to create, store (via IPFS), and trade
                AI-generated NFTs without local deployment. Integrated with
                MetaMask, it allows browsing other users' collections,
                buying/selling NFTs, and managing MATK on the Sepolia testnet.
              </p>
              <a
                href="https://github.com/isacpxc/myart"
                target="_blank"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
            <div className="project-card">
              <h3 className="project-title">Blockchain-noob</h3>
              <p className="project-description">
                About A fundamental blockchain system built in C, including
                transaction handling, hashing mechanisms, and Proof of Work.
                Features a GUI for ease of use. Includes instructions for
                compiling and running on Windows, with future Linux support
                planned.
              </p>
              <a
                href="https://github.com/isacpxc/blockchain-noob"
                target="_blank"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
            <div className="project-card">
              <h3 className="project-title">OurLibrary</h3>
              <p className="project-description">
                A decentralized platform for securely sharing books using
                Ethereum and smart contracts via Hardhat. Integrates with Pinata
                for IPFS storage. Includes backend setup instructions, Hardhat
                node deployment, and smart contract interaction. Works in sync
                with the front-end repository for seamless usability.
              </p>
              <a
                href="https://github.com/isacpxc/OurLibrary"
                target="_blank"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
            <div className="project-card">
              <h3 className="project-title">SuplyChain-MetaMask-Update</h3>
              <p className="project-description">
                This repository updates the MetaMask connection and frontend for
                smart contract interactions in the Supply Chain project from the
                *Ethereum Blockchain Developer Bootcamp With Solidity (2024)*
                course (Section 14). It ensures compatibility with the latest
                versions of relevant tools and functionalities.
              </p>
              <a
                href="https://github.com/isacpxc/SuplyChain-MetaMask-Update"
                target="_blank"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
            <div className="project-card">
              <h3 className="project-title">skylinersBoardGame</h3>
              <p className="project-description">
                A digital version of Skyliners board game, where players build
                skyscrapers to maximize visibility. Implemented in C using
                dynamic lists and stacks, the game includes structured gameplay,
                turn-based mechanics, and scoring based on visible buildings.
                Features clear compilation instructions and execution steps.
              </p>
              <a
                href="https://github.com/isacpxc/skylinersBoardGame"
                target="_blank"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
            <div className="project-card">
              <h3 className="project-title">ku-test</h3>
              <p className="project-description">
                Contains a knowledge test on blockchain, smart contracts, and
                NFT security. It includes explanations of consensus mechanisms,
                common smart contract vulnerabilities, and best practices for
                mitigation. Additionally, it features practical coding
                challenges, such as implementing an ERC-721 contract and
                deployment guidelines for testnet.
              </p>
              <a
                href="https://github.com/isacpxc/ku-test"
                target="_blank"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
