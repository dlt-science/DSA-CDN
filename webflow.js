console.log('Welcome! Started the script');
var json_data =
{
    "name": "Blockchain Taxonomy",
    "children": [
      {
        "name": "Consensus",
        "description": "Various consensus mechanisms used in blockchain networks.",
        "children": [
          {
            "name": "Byzantine Fault Tolerance (BFT) based",
            "description": "Consensus mechanisms based on Byzantine Fault Tolerance.",
            "children": [
              {
                "name": "Practical Byzantine Fault Tolerance (PBFT)",
                "description": "A consensus algorithm for distributed systems.",
                "children": null
              },
              {
                "name": "Federated Byzantine Agreement (FBA)",
                "description": "A consensus mechanism used in federated networks.",
                "children": null
              },
              {
                "name": "BFT-based variants",
                "description": "Variants of Byzantine Fault Tolerance consensus.",
                "children": [
                  {
                    "name": "Stellar Consensus Protocol (SCP)",
                    "description": "Consensus algorithm used by Stellar network.",
                    "children": null
                  },
                  {
                    "name": "Ripple Consensus Protocol (RCP)",
                    "description": "Consensus protocol of the Ripple network.",
                    "children": null
                  },
                  {
                    "name": "Tendermint",
                    "description": "A consensus engine for distributed ledgers.",
                    "children": null
                  }
                ]
              },
              {
                "name": "Proof of Authority (PoA)",
                "description": "A consensus mechanism where identity validators create blocks.",
                "children": null
              },
              {
                "name": "Proof of Stake (PoS) variants",
                "description": "Variants of Proof of Stake consensus.",
                "children": [
                  {
                    "name": "Liquid Proof of Stake (LPoS)",
                    "description": "A variant of PoS with fluid staking.",
                    "children": null
                  },
                  {
                    "name": "Nominated Proof of Stake (NPoS)",
                    "description": "A PoS variant where token holders nominate validators.",
                    "children": null
                  },
                  {
                    "name": "Delegated Proof of Stake (DPoS)",
                    "description": "A PoS variant where token holders vote for delegates.",
                    "children": null
                  }
                ]
              }
            ]
          },
          {
            "name": "Nakamoto Consensus based",
            "description": "Consensus mechanisms inspired by Satoshi Nakamoto's work.",
            "children": [
              {
                "name": "Delegated Proof of Stake (DPoS)",
                "description": "A variant of PoS where token holders elect delegates.",
                "children": null
              },
              {
                "name": "Proof of Activity (PoA)",
                "description": "A hybrid consensus mechanism combining PoW and PoS.",
                "children": null
              },
              {
                "name": "Proof of Weight (PoWeight)",
                "description": "A consensus mechanism based on the weight of network participants.",
                "children": null
              },
              {
                "name": "Proof of Work (PoW)",
                "description": "A consensus mechanism based on computational work.",
                "children": null
              },
              {
                "name": "Proof of Stake (PoS)",
                "description": "A consensus mechanism based on token ownership.",
                "children": null
              },
              {
                "name": "Proof of Elapsed Time (PoET)",
                "description": "A consensus mechanism ensuring fair leader election.",
                "children": null
              },
              {
                "name": "Proof of Importance (PoI)",
                "description": "A consensus mechanism giving weight to network participants' activity.",
                "children": null
              }
            ]
          },
          {
            "name": "Directed Acyclic Graph (DAG) based",
            "description": "Consensus mechanisms used in Directed Acyclic Graph architectures.",
            "children": [
              {
                "name": "Tangle",
                "description": "A consensus mechanism used by the IOTA network.",
                "children": null
              },
              {
                "name": "Hashgraph",
                "description": "A consensus algorithm developed by Swirlds.",
                "children": null
              },
              {
                "name": "Proof of Weight (PoWeight)",
                "description": "A consensus mechanism based on participant weights in a DAG.",
                "children": null
              }
            ]
          },
          {
            "name": "Hybrid Consensus",
            "description": "Consensus mechanisms combining different approaches.",
            "children": [
              {
                "name": "Block-lattice",
                "description": "A hybrid consensus mechanism used by Nano cryptocurrency.",
                "children": null
              },
              {
                "name": "Proof of Work (PoW) + Proof of Stake (PoS)",
                "description": "A hybrid consensus mechanism combining PoW and PoS.",
                "children": null
              },
              {
                "name": "Delegated Proof of Stake (DPoS) + Byzantine Fault Tolerance (BFT)",
                "description": "A hybrid consensus mechanism combining DPoS and BFT.",
                "children": null
              },
              {
                "name": "Proof of Authority (PoA) + Proof of Stake (PoS)",
                "description": "A hybrid consensus mechanism combining PoA and PoS.",
                "children": null
              }
            ]
          }
        ]
      },
       {
    "name": "Transaction Capabilities",
    "description": "Capabilities related to transactions on blockchain networks.",
    "children": [
      {
        "name": "Smart Contract Execution",
        "description": "Execution capabilities of smart contracts.",
        "children": [
          {
            "name": "Cross-chain Contract Calls",
            "description": "Executing smart contracts across different blockchains.",
            "children": null
          },
          {
            "name": "Confidential Smart Contracts (e.g., Trusted Execution Environments, Zero-Knowledge Proofs)",
            "description": "Smart contracts with privacy features.",
            "children": null
          },
          {
            "name": "Oracles and External Data Feeds",
            "description": "Integration of external data into smart contracts.",
            "children": null
          }
        ]
      },
      {
        "name": "Data Structures",
        "description": "Data structures used in blockchain networks.",
        "children": [
          {
            "name": "DAGs (e.g., Tangle, Hashgraph)",
            "description": "Directed Acyclic Graph data structures.",
            "children": null
          },
          {
            "name": "Verkle Trees",
            "description": "A type of tree data structure.",
            "children": null
          },
          {
            "name": "Merkle Trees (e.g., Binary, Patricia, Sparse)",
            "description": "Merkle tree variants used in blockchain networks.",
            "children": null
          }
        ]
      },
      {
        "name": "Transactional Models",
        "description": "Models for handling transactions on blockchain networks.",
        "children": [
          {
            "name": "Account-based (e.g., Ethereum)",
            "description": "Transaction model based on accounts.",
            "children": null
          },
          {
            "name": "Hybrid (UTXO + Account-based)",
            "description": "Combination of UTXO and account-based models.",
            "children": null
          },
          {
            "name": "UTXO-based (e.g., Bitcoin)",
            "description": "Transaction model based on Unspent Transaction Outputs.",
            "children": null
          }
        ]
      },
      {
        "name": "Scalability Enhancements",
        "description": "Techniques to enhance scalability of blockchain networks.",
        "children": [
          {
            "name": "Sharding and Parallelization",
            "description": "Partitioning of data and parallel processing.",
            "children": null
          },
          {
            "name": "Off-chain Scaling (e.g., State Channels, Sidechains)",
            "description": "Scaling solutions that occur off the main blockchain.",
            "children": null
          },
          {
            "name": "Block Size Optimization",
            "description": "Optimizing the size of blocks in blockchain networks.",
            "children": null
          },
          {
            "name": "Transaction Batching and Aggregation",
            "description": "Grouping transactions together for efficiency.",
            "children": null
          }
        ]
      }
    ]
  },
   {
    "name": "Scripting Languages",
    "description": "Different types of scripting languages used in blockchain development.",
    "children": [
      {
        "name": "Non-Turing-Complete",
        "description": "Scripting languages that are not Turing complete.",
        "children": [
          {
            "name": "Declarative (e.g., Simplicity, Ivy)",
            "description": "Declarative languages used for smart contract development.",
            "children": null
          },
          {
            "name": "Stack-based (e.g., Bitcoin Script)",
            "description": "Stack-based languages used in Bitcoin scripting.",
            "children": null
          }
        ]
      },
      {
        "name": "Turing-Complete",
        "description": "Scripting languages that are Turing complete.",
        "children": [
          {
            "name": "Execution Environments",
            "description": "Environments for executing Turing-complete smart contracts.",
            "children": [
              {
                "name": "Native Execution (e.g., Rust, C++)",
                "description": "Native languages for executing smart contracts.",
                "children": null
              },
              {
                "name": "General-purpose (e.g., Solidity, Vyper)",
                "description": "General-purpose languages for smart contract development.",
                "children": null
              },
              {
                "name": "Domain-specific (e.g., Plutus, Move)",
                "description": "Domain-specific languages for specific blockchain platforms.",
                "children": null
              }
            ]
          },
          {
            "name": "High-level Languages",
            "description": "Languages with high-level abstractions for smart contract development.",
            "children": null
          }
        ]
      },
      {
        "name": "Hybrid",
        "description": "Hybrid scripting languages combining Turing-complete and non-Turing-complete features.",
        "children": [
          {
            "name": "Turing-complete + Non-Turing-complete (e.g., Bitcoin Script + Taproot)",
            "description": "Languages combining features of Turing-complete and non-Turing-complete scripting.",
            "children": null
          }
        ]
      }
    ]
  },
  {
    "name": "Extensibility",
    "description": "Features enhancing the extensibility of blockchain networks.",
    "children": [
      {
        "name": "Smart Contract Languages",
        "description": "Languages used for writing smart contracts.",
        "children": [
          {
            "name": "Turing-complete (e.g., Solidity, Vyper)",
            "description": "Languages capable of expressing any computation.",
            "children": null
          },
          {
            "name": "Non-Turing-complete (e.g., Bitcoin Script)",
            "description": "Languages with limited expressive power.",
            "children": null
          },
          {
            "name": "Domain-specific (e.g., DAML, Chaincode)",
            "description": "Languages tailored for specific use cases or platforms.",
            "children": null
          }
        ]
      },
      {
        "name": "Virtual Machines",
        "description": "Execution environments for smart contracts.",
        "children": [
          {
            "name": "Ethereum Virtual Machine (EVM)",
            "description": "Virtual machine for executing Ethereum smart contracts.",
            "children": null
          },
          {
            "name": "WebAssembly (WASM)",
            "description": "Stack-based virtual machine with broad language support.",
            "children": null
          },
          {
            "name": "Custom Virtual Machines (e.g., IELE, MoveVM)",
            "description": "Customized virtual machines for specific blockchain platforms.",
            "children": null
          }
        ]
      },
      {
        "name": "Pluggable Consensus",
        "description": "Flexibility to swap consensus algorithms.",
        "children": [
          {
            "name": "Consensus Engines (e.g., Tendermint, Aura)",
            "description": "Modules responsible for achieving consensus.",
            "children": null
          },
          {
            "name": "Consensus Modules (e.g., PBFT, Raft)",
            "description": "Algorithm implementations used within consensus engines.",
            "children": null
          }
        ]
      },
      {
        "name": "Modular Architectures",
        "description": "Flexible architecture designs allowing customization and scalability.",
        "children": [
          {
            "name": "Service-oriented Architecture (SOA)",
            "description": "Architecture based on loosely coupled services.",
            "children": null
          },
          {
            "name": "Microservices (e.g., Hyperledger Fabric)",
            "description": "Architecture based on small, independent services.",
            "children": null
          },
          {
            "name": "Plugin Systems (e.g., Go-Ethereum)",
            "description": "Architecture allowing dynamic addition of features through plugins.",
            "children": null
          }
        ]
      }
    ]
  },
  {
    "name": "Governance",
    "description": "Mechanisms for decision-making and management of blockchain networks.",
    "children": [
      {
        "name": "Governance Mechanisms",
        "description": "Various mechanisms for governing blockchain networks.",
        "children": [
          {
            "name": "Forking (e.g., soft forks, hard forks)",
            "description": "Mechanism for proposing and implementing protocol changes.",
            "children": null
          },
          {
            "name": "Signaling (e.g., coin voting, miner voting)",
            "description": "Methods for signaling preferences within the network.",
            "children": null
          },
          {
            "name": "Upgradability (e.g., on-chain upgrades, off-chain upgrades)",
            "description": "Approaches for upgrading the protocol or network features.",
            "children": null
          },
          {
            "name": "Dispute Resolution (e.g., on-chain courts, off-chain arbitration)",
            "description": "Processes for resolving conflicts or disputes within the network.",
            "children": null
          },
          {
            "name": "Off-chain Governance",
            "description": "Governance mechanisms implemented outside the blockchain.",
            "children": null
          }
        ]
      },
      {
        "name": "Decision-making Processes",
        "description": "Processes for making decisions within blockchain networks.",
        "children": [
          {
            "name": "On-chain Governance",
            "description": "Decision-making processes executed directly on the blockchain.",
            "children": [
              {
                "name": "Informal Discussions (e.g., forums, chat rooms)",
                "description": "Informal discussions among community members.",
                "children": null
              },
              {
                "name": "Improvement Proposals (e.g., BIPs, EIPs)",
                "description": "Formal proposals for protocol or network improvements.",
                "children": null
              }
            ]
          },
          {
            "name": "Hybrid Governance",
            "description": "Combination of on-chain and off-chain decision-making processes.",
            "children": [
              {
                "name": "Stake-based Voting",
                "description": "Voting based on the amount of stake held by participants.",
                "children": null
              },
              {
                "name": "Quadratic Voting",
                "description": "Voting mechanism giving more weight to informed preferences.",
                "children": null
              },
              {
                "name": "Futarchy",
                "description": "Decision-making based on prediction markets.",
                "children": null
              },
              {
                "name": "Liquid Democracy",
                "description": "Combination of direct and delegative voting.",
                "children": null
              },
              {
                "name": "Token-based Voting",
                "description": "Voting based on ownership of specific tokens.",
                "children": null
              },
              {
                "name": "Off-chain Proposal + On-chain Voting",
                "description": "Proposals discussed off-chain and voted on-chain.",
                "children": null
              },
              {
                "name": "Multi-stakeholder Governance",
                "description": "Involvement of multiple stakeholders in decision-making.",
                "children": null
              }
            ]
          }
        ]
      },
      {
        "name": "Governance Structures",
        "description": "Structures for organizing governance within blockchain networks.",
        "children": [
          {
            "name": "Meritocratic Governance",
            "description": "Governance based on merit or contribution.",
            "children": null
          },
          {
            "name": "Plutocratic Governance",
            "description": "Governance based on wealth or token holdings.",
            "children": null
          },
          {
            "name": "Decentralized Autonomous Organizations (DAOs)",
            "description": "Organizations governed by smart contracts and token holders.",
            "children": null
          },
          {
            "name": "Foundations and Consortiums",
            "description": "Centralized entities governing blockchain projects.",
            "children": null
          },
          {
            "name": "Delegated Governance (e.g., DPoS)",
            "description": "Governance delegated to elected representatives.",
            "children": null
          }
        ]
      }
    ]
  },
  {
    "name": "Interoperability",
    "description": "Capabilities for interoperability between different blockchain networks.",
    "children": [
      {
        "name": "Cross-chain Communication",
        "description": "Mechanisms for communication between disparate blockchain networks.",
        "children": [
          {
            "name": "Sidechains and Pegged Sidechains",
            "description": "Chains linked to a main blockchain for interoperability.",
            "children": null
          },
          {
            "name": "Bridging Protocols (e.g., IBC, XCM)",
            "description": "Protocols facilitating communication between blockchains.",
            "children": null
          },
          {
            "name": "Atomic Swaps",
            "description": "Trustless exchange of assets between different blockchains.",
            "children": null
          },
          {
            "name": "Hash Time-Locked Contracts (HTLCs)",
            "description": "Contracts enabling secure cross-chain transactions.",
            "children": null
          }
        ]
      },
      {
        "name": "Interchain Frameworks",
        "description": "Frameworks for connecting multiple blockchain networks.",
        "children": [
          {
            "name": "Heterogeneous Sharding (e.g., Polkadot, Cosmos)",
            "description": "Sharding techniques across different blockchains.",
            "children": null
          },
          {
            "name": "Relay Chains and Parachains",
            "description": "Chains acting as relays between different blockchain networks.",
            "children": null
          },
          {
            "name": "Zones and Hubs",
            "description": "Intermediaries facilitating communication between blockchains.",
            "children": null
          }
        ]
      },
      {
        "name": "Blockchain-agnostic Protocols",
        "description": "Protocols enabling interoperability without dependence on specific blockchains.",
        "children": [
          {
            "name": "Cross-chain Message Passing (e.g., XCM, IBC)",
            "description": "Protocols for passing messages between blockchains.",
            "children": null
          },
          {
            "name": "Decentralized Oracles (e.g., Chainlink, Band Protocol)",
            "description": "Services providing off-chain data to on-chain smart contracts.",
            "children": null
          },
          {
            "name": "Interledger Protocol (ILP)",
            "description": "Protocol for transferring value across different ledgers and networks.",
            "children": null
          }
        ]
      },
      {
        "name": "Blockchain Migration",
        "description": "Techniques for migrating data and assets between blockchain networks.",
        "children": [
          {
            "name": "Chain Hopping (e.g., Atomic Crosschain Transactions)",
            "description": "Moving assets between chains without requiring a trusted intermediary.",
            "children": null
          },
          {
            "name": "State Channels and Plasma Chains",
            "description": "Off-chain solutions for scaling and interoperability.",
            "children": null
          },
          {
            "name": "Rollups (e.g., Optimistic Rollups, zk-Rollups)",
            "description": "Techniques for aggregating and compressing transactions on-chain.",
            "children": null
          }
        ]
      }
    ]
  },
  {
    "name": "Intraoperability",
    "description": "Capabilities for interoperability within a single blockchain network.",
    "children": [
      {
        "name": "Layer 2 Scaling",
        "description": "Scalability solutions built on top of the main blockchain.",
        "children": [
          {
            "name": "Plasma Chains",
            "description": "Sidechains for offloading transactions from the main chain.",
            "children": null
          },
          {
            "name": "State Channels",
            "description": "Off-chain channels for fast and inexpensive transactions.",
            "children": null
          },
          {
            "name": "Sidechains",
            "description": "Parallel blockchains connected to the main chain.",
            "children": null
          }
        ]
      },
      {
        "name": "Sharding",
        "description": "Techniques for partitioning data and transactions within the network.",
        "children": [
          {
            "name": "Network Sharding",
            "description": "Partitioning the network to improve scalability.",
            "children": null
          },
          {
            "name": "State Sharding",
            "description": "Partitioning the state of the blockchain.",
            "children": null
          },
          {
            "name": "Transaction Sharding",
            "description": "Partitioning transactions to improve throughput.",
            "children": null
          }
        ]
      },
      {
        "name": "Consensus Optimization",
        "description": "Optimizing consensus algorithms for improved performance.",
        "children": [
          {
            "name": "Parallel Transaction Execution",
            "description": "Executing transactions concurrently to improve throughput.",
            "children": null
          },
          {
            "name": "Consensus Batching",
            "description": "Batching consensus-related operations for efficiency.",
            "children": null
          },
          {
            "name": "Consensus Pipelining",
            "description": "Pipelining consensus operations for faster processing.",
            "children": null
          }
        ]
      },
      {
        "name": "Data Availability and Synchronization",
        "description": "Ensuring data availability and consistency within the network.",
        "children": [
          {
            "name": "Stateless Clients and Witnesses",
            "description": "Clients that do not maintain the full state of the blockchain.",
            "children": null
          },
          {
            "name": "Light Clients and Pruning",
            "description": "Clients that store only essential data for verification.",
            "children": null
          },
          {
            "name": "State Compression (e.g., Merkle Trees, Verkle Trees)",
            "description": "Techniques for compressing and efficiently storing blockchain state.",
            "children": null
          }
        ]
      }
    ]
  },
  {
    "name": "Native Currency/Tokenization",
    "description": "Features related to the native currency and tokenization within blockchain networks.",
    "children": [
      {
        "name": "Native Assets",
        "description": "Properties and characteristics of the native currency.",
        "children": [
          {
            "name": "Multiple Native Currencies",
            "description": "Support for multiple native currencies within the network.",
            "children": null
          },
          {
            "name": "Hybrid (Native Currency + Tokens)",
            "description": "Combination of native currency and tokenized assets.",
            "children": null
          },
          {
            "name": "Single Native Currency",
            "description": "Single currency used as the native asset within the network.",
            "children": null
          }
        ]
      },
      {
        "name": "Asset Issuance",
        "description": "Processes and standards for issuing tokens and assets on the blockchain.",
        "children": [
          {
            "name": "Security Tokens (e.g., ERC-1400, DS-Token)",
            "description": "Tokens representing ownership of real-world assets.",
            "children": null
          },
          {
            "name": "Stablecoins (e.g., Fiat-collateralized, Crypto-collateralized, Algorithmic)",
            "description": "Tokens pegged to stable assets or algorithms.",
            "children": null
          },
          {
            "name": "Fungible Tokens (e.g., ERC-20, BEP-2)",
            "description": "Tokens that are interchangeable and identical.",
            "children": null
          },
          {
            "name": "Non-Fungible Tokens (NFTs) (e.g., ERC-721, ERC-1155)",
            "description": "Unique tokens representing ownership of digital or physical assets.",
            "children": null
          }
        ]
      },
      {
        "name": "Asset Management",
        "description": "Management and control of tokenized assets within the network.",
        "children": [
          {
            "name": "Token Factories and Minters",
            "description": "Entities responsible for creating new tokens.",
            "children": null
          },
          {
            "name": "Token Burners and Redeemers",
            "description": "Entities responsible for destroying tokens or redeeming them for other assets.",
            "children": null
          },
          {
            "name": "Token Standards (e.g., ERC-20, ERC-721, BEP-2)",
            "description": "Standards defining the behavior and properties of tokens.",
            "children": null
          }
        ]
      },
      {
        "name": "Asset Ownership",
        "description": "Ownership and control of tokenized assets within the network.",
        "children": [
          {
            "name": "Multi-signature Wallets",
            "description": "Wallets requiring multiple signatures for transactions.",
            "children": null
          },
          {
            "name": "Hardware Wallets",
            "description": "Wallets stored on physical devices for enhanced security.",
            "children": null
          },
          {
            "name": "Custodial Wallets",
            "description": "Wallets managed by third-party custodians.",
            "children": null
          },
          {
            "name": "Non-custodial Wallets",
            "description": "Wallets where users control their private keys.",
            "children": null
          }
        ]
      }
    ]
  },
  {
    "name": "Security and Privacy",
    "description": "Features and techniques for ensuring security and privacy within blockchain networks.",
    "children": [
      {
        "name": "Cryptographic Primitives",
        "description": "Fundamental cryptographic tools used for securing blockchain networks.",
        "children": [
          {
            "name": "Hash Functions (e.g., SHA-256, Keccak-256)",
            "description": "Algorithms for generating fixed-size hash values.",
            "children": null
          },
          {
            "name": "Digital Signatures (e.g., ECDSA, EdDSA)",
            "description": "Mechanisms for authenticating the origin and integrity of data.",
            "children": null
          },
          {
            "name": "Encryption (e.g., AES, ChaCha20)",
            "description": "Methods for securing data through encryption.",
            "children": null
          },
          {
            "name": "Zero-Knowledge Proofs (e.g., zk-SNARKs, zk-STARKs)",
            "description": "Proofs that validate the truth of a statement without revealing underlying data.",
            "children": null
          }
        ]
      },
      {
        "name": "Privacy-Enhancing Techniques",
        "description": "Techniques for enhancing privacy and confidentiality within blockchain networks.",
        "children": [
          {
            "name": "Confidential Transactions (e.g., Pedersen Commitments, Bulletproofs)",
            "description": "Methods for concealing transaction amounts while preserving integrity.",
            "children": null
          },
          {
            "name": "Ring Signatures and Stealth Addresses",
            "description": "Techniques for obscuring the sender and recipient in transactions.",
            "children": null
          },
          {
            "name": "Mixers and Tumblers",
            "description": "Services for mixing transactions to obfuscate their origin.",
            "children": null
          },
          {
            "name": "Homomorphic Encryption",
            "description": "Encryption scheme allowing computations on encrypted data without decryption.",
            "children": null
          }
        ]
      },
      {
        "name": "Consensus Security",
        "description": "Security measures related to the consensus mechanism of blockchain networks.",
        "children": [
          {
            "name": "51% Attack Resistance",
            "description": "Measures to prevent a majority attack on the network.",
            "children": null
          },
          {
            "name": "Sybil Attack Resistance",
            "description": "Techniques for preventing the creation of multiple fake identities.",
            "children": null
          },
          {
            "name": "Long-Range Attack Resistance",
            "description": "Protection against attacks using older versions of the blockchain.",
            "children": null
          },
          {
            "name": "DDoS Attack Mitigation",
            "description": "Strategies for mitigating distributed denial-of-service attacks.",
            "children": null
          }
        ]
      },
      {
        "name": "Smart Contract Security",
        "description": "Measures for securing smart contracts within blockchain networks.",
        "children": [
          {
            "name": "Formal Verification",
            "description": "Mathematical proofs of smart contract correctness.",
            "children": null
          },
          {
            "name": "Static Analysis and Linting",
            "description": "Automated tools for detecting vulnerabilities in smart contracts.",
            "children": null
          },
          {
            "name": "Runtime Monitoring and Exception Handling",
            "description": "Tools for monitoring smart contracts during execution and handling exceptions.",
            "children": null
          },
          {
            "name": "Bug Bounties and Audits",
            "description": "Programs for incentivizing the discovery and reporting of smart contract bugs.",
            "children": null
          }
        ]
      }
    ]
  },
  {
    "name": "Codebase",
    "description": "Features and characteristics related to the codebase and development environment of blockchain networks.",
    "children": [
      {
        "name": "Coding Languages",
        "description": "Languages used for writing the codebase of blockchain networks.",
        "children": [
          {
            "name": "General-purpose (e.g., C++, Go, Rust)",
            "description": "Versatile languages commonly used for blockchain development.",
            "children": null
          },
          {
            "name": "Domain-specific (e.g., Solidity, Move)",
            "description": "Languages tailored specifically for blockchain and smart contract development.",
            "children": null
          },
          {
            "name": "Scripting Languages (e.g., JavaScript, Python)",
            "description": "Languages used for scripting tasks within blockchain networks.",
            "children": null
          }
        ]
      },
      {
        "name": "Software Licenses",
        "description": "Licensing models governing the distribution and use of blockchain software.",
        "children": [
          {
            "name": "Open Source (e.g., MIT, Apache 2.0, GPL)",
            "description": "Licenses allowing the source code to be freely used, modified, and distributed.",
            "children": null
          },
          {
            "name": "Proprietary and Closed Source",
            "description": "Software with restricted access to the source code.",
            "children": null
          },
          {
            "name": "Hybrid (Open Core + Proprietary Extensions)",
            "description": "Combination of open-source core software with proprietary extensions.",
            "children": null
          }
        ]
      },
      {
        "name": "Development Frameworks",
        "description": "Frameworks and tools used for developing and deploying blockchain applications.",
        "children": [
          {
            "name": "Modular Architectures (e.g., Microservices, Plugins)",
            "description": "Architectural patterns facilitating modularity and scalability.",
            "children": null
          },
          {
            "name": "Testing Frameworks (e.g., Unit Testing, Integration Testing)",
            "description": "Tools for testing the functionality and performance of blockchain applications.",
            "children": null
          },
          {
            "name": "Continuous Integration and Deployment (CI/CD)",
            "description": "Automated processes for continuously integrating and deploying code changes.",
            "children": null
          },
          {
            "name": "Documentation and Specification Languages (e.g., OpenAPI, YAML)",
            "description": "Languages and formats for documenting and specifying blockchain interfaces and protocols.",
            "children": null
          }
        ]
      },
      {
        "name": "Code Governance",
        "description": "Practices and tools for managing and governing the blockchain codebase.",
        "children": [
          {
            "name": "Version Control Systems (e.g., Git)",
            "description": "Systems for tracking and managing changes to the codebase.",
            "children": null
          },
          {
            "name": "Code Review and Pull Requests",
            "description": "Processes for reviewing and approving code changes.",
            "children": null
          },
          {
            "name": "Issue Tracking and Bug Reporting",
            "description": "Systems for reporting and managing software issues and bugs.",
            "children": null
          },
          {
            "name": "Community Contributions and Bounties",
            "description": "Programs for incentivizing community involvement and contributions.",
            "children": null
          }
        ]
      }
    ]
  },
  {
    "name": "Identity Management",
    "description": "Features and protocols for managing digital identities within blockchain networks.",
    "children": [
      {
        "name": "Identity Verification",
        "description": "Methods for verifying and authenticating digital identities.",
        "children": [
          {
            "name": "Decentralized Identity Verification",
            "description": "Verification processes that do not rely on centralized authorities.",
            "children": null
          },
          {
            "name": "Self-Sovereign Identity (SSI)",
            "description": "Frameworks empowering individuals with control over their own digital identities.",
            "children": null
          },
          {
            "name": "Centralized KYC/AML",
            "description": "Identity verification processes conducted by centralized entities for compliance purposes.",
            "children": null
          }
        ]
      },
      {
        "name": "Identity Standards and Protocols",
        "description": "Standards and protocols governing the management of digital identities.",
        "children": [
          {
            "name": "Verifiable Credentials (VCs)",
            "description": "Digital credentials attesting to the validity of identity attributes.",
            "children": null
          },
          {
            "name": "Identity Hubs and Wallets",
            "description": "Storage and management solutions for digital identity data.",
            "children": null
          },
          {
            "name": "Decentralized Identifiers (DIDs)",
            "description": "Decentralized identifiers used to reference digital identities.",
            "children": null
          }
        ]
      },
      {
        "name": "Privacy and Security",
        "description": "Measures for enhancing the privacy and security of digital identities.",
        "children": [
          {
            "name": "Zero-Knowledge Proofs (ZKPs)",
            "description": "Proofs that validate the truth of a statement without revealing underlying data.",
            "children": null
          },
          {
            "name": "Selective Disclosure and Minimization",
            "description": "Strategies for disclosing only necessary identity attributes.",
            "children": null
          },
          {
            "name": "Biometric Authentication",
            "description": "Authentication methods based on unique biological characteristics.",
            "children": null
          },
          {
            "name": "Multi-Factor Authentication (MFA)",
            "description": "Authentication methods requiring multiple forms of verification.",
            "children": null
          }
        ]
      },
      {
        "name": "Identity Recovery and Management",
        "description": "Processes and mechanisms for recovering and managing digital identities.",
        "children": [
          {
            "name": "Selective Disclosure and Minimization",
            "description": "Strategies for disclosing only necessary identity attributes.",
            "children": null
          },
          {
            "name": "Biometric Authentication",
            "description": "Authentication methods based on unique biological characteristics.",
            "children": null
          },
          {
            "name": "Multi-Factor Authentication (MFA)",
            "description": "Authentication methods requiring multiple forms of verification.",
            "children": null
          }
        ]
      }
    ]
  },
  {
    "name": "Charging and Rewarding Systems",
    "description": "Systems and mechanisms for managing transaction fees, rewards, and incentives within blockchain networks.",
    "children": [
      {
        "name": "Reward Distribution",
        "description": "Methods for distributing rewards and incentives within the network.",
        "children": [
          {
            "name": "Transaction Fees (e.g., Gas, Priority Fees)",
            "description": "Fees paid by users for executing transactions on the blockchain.",
            "children": null
          },
          {
            "name": "Staking Rewards and Inflation",
            "description": "Rewards distributed to network participants for staking their tokens.",
            "children": null
          },
          {
            "name": "Block Rewards (e.g., Fixed, Diminishing)",
            "description": "Rewards given to miners for validating and adding blocks to the blockchain.",
            "children": null
          }
        ]
      },
      {
        "name": "Fee Models",
        "description": "Models governing the calculation and collection of transaction fees.",
        "children": [
          {
            "name": "Variable Fees (e.g., Gas Markets, Congestion Pricing)",
            "description": "Fees that vary based on network congestion and demand.",
            "children": null
          },
          {
            "name": "Fee-less Transactions (e.g., Tangle, Block Lattice)",
            "description": "Transactions that do not require fees for processing.",
            "children": null
          },
          {
            "name": "Fixed Fees",
            "description": "Static fees that remain constant regardless of network conditions.",
            "children": null
          }
        ]
      },
      {
        "name": "Economic Models",
        "description": "Models governing the overall economic incentives and behavior within the network.",
        "children": [
          {
            "name": "Miner Extractable Value (MEV) and Front-Running",
            "description": "Incentives and risks associated with transaction ordering and block creation.",
            "children": null
          },
          {
            "name": "Monetary Policy (e.g., Inflation, Deflation)",
            "description": "Policies governing the issuance and circulation of the native cryptocurrency.",
            "children": null
          },
          {
            "name": "Tokenomics and Incentive Design",
            "description": "Design principles for creating effective token economies.",
            "children": null
          }
        ]
      },
      {
        "name": "Reward Mechanisms",
        "description": "Mechanisms for distributing rewards and incentives to network participants.",
        "children": [
          {
            "name": "Proof of Work (PoW) Mining",
            "description": "Reward mechanism used in proof-of-work consensus algorithms.",
            "children": null
          },
          {
            "name": "Proof of Stake (PoS) Staking",
            "description": "Reward mechanism used in proof-of-stake consensus algorithms.",
            "children": null
          },
          {
            "name": "Liquidity Mining and Yield Farming",
            "description": "Incentive mechanisms for providing liquidity to decentralized exchanges.",
            "children": null
          },
          {
            "name": "Airdrops and Bounties",
            "description": "Methods for distributing tokens as rewards or incentives.",
            "children": null
          }
        ]
      }
    ]
  }
]
  };
var m = [20, 320, 120, 140], // Increased margin on the left
w = 1600, // Adjusted width
h = 6000 - m[0] - m[2],
i = 0,
root;

var tree = d3.layout.tree()
.size([h, w]);

var diagonal = d3.svg.diagonal()
.projection(function(d) { return [d.y, d.x]; });

var vis = d3.select("#body").append("svg:g")
.attr("transform", "translate(" + m[3] + "," + m[0] + ")");

root = json_data;
root.x0 = h / 2;
root.y0 = 0;

function toggleAll(d) {
if (d.children) {
d.children.forEach(toggleAll);
toggle(d);
}
}
update(root);

function update(source) {
var duration = d3.event && d3.event.altKey ? 5000 : 500;
var nodes = tree.nodes(root).reverse();
nodes.forEach(function(d) { d.y = d.depth * 200; }); // Increased horizontal spacing
var node = vis.selectAll("g.node")
  .data(nodes, function(d) { return d.id || (d.id = ++i); });
var nodeEnter = node.enter().append("svg:g")
  .attr("class", "node")
  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
  .on("click", function(d) { toggle(d); update(d); });
nodeEnter.append("rect") // Add rectangle behind each node's name
  .attr("width", function(d) { return d.name.length * 7; }) // Adjust width based on name length
  .attr("height", 20) // Set height as per your preference
  .attr("x", function(d) { return d.children || d._children ? -d.name.length * 7 - 5 : 5; }) // Adjust x position
  .attr("y", -10) // Adjust y position
  .attr("rx", 5) // Rounded corners, adjust as needed
  .attr("ry", 5) // Rounded corners, adjust as needed
  .style("fill", "#fff") // Set background color
  .style("stroke", "#666"); // Set border color
nodeEnter.append('a')
  .attr('xlink:href', function(d) {
    return d.url;
  })
  .append("svg:text")
  .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
  .attr("dy", ".35em")
  .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
  .text(function(d) { return d.name; })
  .style('fill', function(d) {
    return d.free ? 'black' : '#999';
  })
  .style("fill-opacity", 1e-6);
nodeEnter.append("svg:title")
.text(function(d) {
  return d.description;
});
var nodeUpdate = node.transition()
  .duration(duration)
  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
nodeUpdate.select("rect") // Transition for rectangles
  .attr("width", function(d) { return d.name.length * 7; })
  .attr("x", function(d) { return d.children || d._children ? -d.name.length * 7 - 5 : 5; });
nodeUpdate.select("text")
  .style("fill-opacity", 1);
var nodeExit = node.exit().transition()
  .duration(duration)
  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
  .remove();
nodeExit.select("rect")
  .attr("width", 1e-6);
nodeExit.select("text")
  .style("fill-opacity", 1e-6);

var link = vis.selectAll("path.link")
  .data(tree.links(nodes), function(d) { return d.target.id; });
link.enter().insert("svg:path", "g")
  .attr("class", "link")
  .attr("d", function(d) {
    var o = {x: source.x0, y: source.y0};
    return diagonal({source: o, target: o});
  })
.transition()
  .duration(duration)
  .attr("d", diagonal);

link.transition()
  .duration(duration)
  .attr("d", diagonal);

link.exit().transition()
  .duration(duration)
  .attr("d", function(d) {
    var o = {x: source.x, y: source.y};
    return diagonal({source: o, target: o});
  })
  .remove();

// Stash the old positions for transition.
nodes.forEach(function(d) {
d.x0 = d.x;
d.y0 = d.y;
});
}

// Toggle children.
function toggle(d) {
if (d.children) {
d._children = d.children;
d.children = null;
} else {
d.children = d._children;
d._children = null;
}
}
