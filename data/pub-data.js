// Publication data for the lab website — edit these arrays to add/update entries.
const JOURNALS = [
  {
    "year": 2026,
    "authors": "L. Kong, J.D. Vel\u00e1squez, M. Pant, J.S. Pan, V. Sn\u00e1\u0161el",
    "title": "On the Fuzzy Entropy and the Rankability of Data",
    "venue": "IEEE Open Journal of the Computer Society",
    "publisher": "IEEE",
    "quartile": "Q1"
  },
  {
    "year": 2026,
    "authors": "A. Tripathi, S. Srivastava, N. Arora, M. Pant, C. Singh",
    "title": "Bibliometric Analysis on Current Trends, Technology and Innovations in Women and Children Healthcare for Sustainable Economies",
    "venue": "International Journal of System Assurance Engineering and Management",
    "publisher": "Springer-Verlag",
    "quartile": "Q3"
  },
  {
    "year": 2026,
    "authors": "D. Nayak, M. Pant",
    "title": "Sustainable Supplier Selection for Textile Industry Using Unsupervised Machine Learning and MCDM Approach",
    "venue": "International Journal of System Assurance Engineering and Management",
    "publisher": "Springer-Verlag",
    "quartile": "Q3"
  },
  {
    "year": 2025,
    "authors": "A. Katharria, M. Pant, J.D. Vel\u00e1squez, V. Sn\u00e1\u0161el, K. Rajwar, K. Deep",
    "title": "Information Fusion in Smart Agriculture: Machine Learning Applications and Future Research Directions",
    "venue": "Information Fusion",
    "publisher": "Elsevier",
    "quartile": "Q1"
  },
  {
    "year": 2025,
    "authors": "A. Sharma, H. Singh, M. Pant",
    "title": "Pixels to Prose: A Comprehensive Survey of Image Captioning Techniques with Deep Learning and Generative Artificial Intelligence",
    "venue": "Neurocomputing",
    "publisher": "Elsevier",
    "quartile": "Q1"
  },
  {
    "year": 2025,
    "authors": "A. Tiwari, K. Bhattacharjee, M. Pant, J. Nowakova, V. Snasel",
    "title": "Optimal Codebook Generation Using Differential Evolution for Content-Based Medical Image Retrieval",
    "venue": "Journal of Medical and Biological Engineering",
    "publisher": "Springer-Verlag",
    "quartile": "Q4"
  },
  {
    "year": 2025,
    "authors": "L. Kong, J.D. Velasquez, V. Snasel, M. Pant, J.S. Pan, J. Nowakova",
    "title": "Enhancing Skin Cancer Detection Through Category Representation and Fusion of Pre-trained Models",
    "venue": "Information Fusion",
    "publisher": "Elsevier",
    "quartile": "Q1"
  },
  {
    "year": 2025,
    "authors": "S. Joshi, M. Pant, A. Malhotra, K. Deep, V. Snasel",
    "title": "A nnU-Net-based Automatic Segmentation of FCD Type II Lesions in 3D FLAIR MRI Images",
    "venue": "Frontiers in Artificial Intelligence",
    "publisher": "Frontiers",
    "quartile": "Q1"
  },
  {
    "year": 2025,
    "authors": "S. Kumar, M. Pant",
    "title": "Multi-criteria Sustainability Assessment of Sugarcane Production: An Ensemble Method Integrating Classical and Machine Learning Techniques",
    "venue": "Environmental and Sustainability Indicators",
    "publisher": "Elsevier",
    "quartile": "Q1"
  },
  {
    "year": 2025,
    "authors": "M. Singh, S.K. Jauhar, M. Pant, S.K. Paul",
    "title": "Modeling Third-party Reverse Logistics for Healthcare Waste Recycling in the Post-pandemic Era",
    "venue": "International Journal of Production Research",
    "publisher": "Informa UK (Taylor & Francis)",
    "quartile": "Q1"
  },
  {
    "year": 2025,
    "authors": "S. Kumar, M. Pant, A. Nagar",
    "title": "Forecasting the Sugarcane Yields Based on Meteorological Data Through Ensemble Learning",
    "venue": "IEEE Access",
    "publisher": "IEEE",
    "quartile": "Q2"
  },
  {
    "year": 2024,
    "authors": "V. Sn\u00e1\u0161el, J.D. Vel\u00e1squez, M. Pant, D. Georgiou, L. Kong",
    "title": "A Generalization of Multi-source Fusion-based Framework to Stock Selection",
    "venue": "Information Fusion",
    "publisher": "Elsevier",
    "quartile": "Q1"
  },
  {
    "year": 2024,
    "authors": "R. Jain, M. Pant, N.K. Tripathi",
    "title": "Generative Adversarial Networks in Healthcare Sector",
    "venue": "International Journal of Geoinformatics",
    "publisher": "Elsevier",
    "quartile": "Q2"
  },
  {
    "year": 2024,
    "authors": "A. Panwar, M. Pant",
    "title": "PCA Integrated DEA for Hostel Assessment of a Higher Education Institution",
    "venue": "International Journal of System Assurance Engineering and Management",
    "publisher": "Springer-Verlag",
    "quartile": "Q3"
  },
  {
    "year": 2024,
    "authors": "A.K. Yadav, S. Srivastava, M. Pant",
    "title": "A Generalized Software Reliability Prediction Model for Module-based Software Incorporating Testing Effort with Cost Model",
    "venue": "Life Cycle Reliability and Safety Engineering",
    "publisher": "Springer",
    "quartile": null
  },
  {
    "year": 2024,
    "authors": "A.S.K. Kannan, S.A. Balamurugan, M. Pant",
    "title": "A Condensed Hybrid Feature Selector for Enhancing Classifier Performance Using TOPSIS and Improved Rao Optimization",
    "venue": "International Journal of Business Intelligence and Data Mining",
    "publisher": null,
    "quartile": null
  },
  {
    "year": 2024,
    "authors": "S. Sharma, R. Shandilya, D. Dwivedi, M. Pant",
    "title": "Legal-as-a-service: Towards Developing Cloud-based Legal Tech System to Aid Lawyering in the Digital Age",
    "venue": "Legal Issues in the Digital Age",
    "publisher": null,
    "quartile": null
  },
  {
    "year": 2023,
    "authors": "S. Verma, M. Pant, V. Snasel",
    "title": "Web Service Location-allocation Using Discrete NSGA-II with Matrix-based Genetic Operations and a Repair Mechanism",
    "venue": "Journal of Ambient Intelligence and Humanized Computing",
    "publisher": null,
    "quartile": null
  },
  {
    "year": 2023,
    "authors": "S. Srivastava, M. Pant, V. Gupta",
    "title": "Analysis and Prediction of the Indian Stock Market: A Machine-learning Approach",
    "venue": "International Journal of System Assurance Engineering and Management",
    "publisher": "Springer-Verlag",
    "quartile": "Q3"
  },
  {
    "year": 2023,
    "authors": "V. Sn\u00e1\u0161el, I. Perfilieva, M. Singh, M. Pant, Z. Alijani, L. Kong",
    "title": "A Rankability-based Fuzzy Decision-making Procedure for Oil Supplier Selection",
    "venue": "Applied Soft Computing",
    "publisher": "Elsevier",
    "quartile": "Q1"
  },
  {
    "year": 2023,
    "authors": "A. Tiwari, K. Bhattacharjee, M. Pant, S. Srivastava, V. Snasel",
    "title": "An AI-enabled Research Support Tool for the Classification System of COVID-19",
    "venue": "Frontiers in Public Health",
    "publisher": "Frontiers",
    "quartile": null
  },
  {
    "year": 2023,
    "authors": "M. Singh, M. Pant, L. Kong, Z. Alijani, V. Sn\u00e1\u0161el",
    "title": "A PCA-based Fuzzy Tensor Evaluation Model for Multiple-criteria Group Decision Making",
    "venue": "Applied Soft Computing",
    "publisher": "Elsevier",
    "quartile": "Q1"
  },
  {
    "year": 2022,
    "authors": "S. Srivastava, M. Pant, S.K. Jauhar, A.K. Nagar",
    "title": "Analyzing the Prospects of Blockchain in Healthcare Industry",
    "venue": "Computational and Mathematical Methods in Medicine",
    "publisher": null,
    "quartile": null
  },
  {
    "year": 2022,
    "authors": "A. Tiwari, M. Pant",
    "title": "Optimized Deep-neural Network for Content-based Medical Image Retrieval in a Brownfield IoMT Network",
    "venue": "ACM Transactions on Multimedia Computing, Communications, and Applications",
    "publisher": "ACM",
    "quartile": "Q1"
  },
  {
    "year": 2022,
    "authors": "A. Panwar, M. Olfati, M. Pant, V. Snasel",
    "title": "A Review on the 40 Years of Existence of Data Envelopment Analysis Models: Historic Development and Current Trends",
    "venue": "Archives of Computational Methods in Engineering",
    "publisher": "Springer-Verlag",
    "quartile": "Q1"
  },
  {
    "year": 2022,
    "authors": "H. Singh, M. Pant, S. Khare",
    "title": "Object Detection Using Particle Swarm Optimisation and Kalman Filter to Track Partially-occluded Targets",
    "venue": "Defence Science Journal",
    "publisher": null,
    "quartile": null
  },
  {
    "year": 2022,
    "authors": "V. Pandey, M. Pant, V. Snasel",
    "title": "Blockchain Technology in Food Supply Chains: Review and Bibliometric Analysis",
    "venue": "Technology in Society",
    "publisher": "Elsevier",
    "quartile": "Q1"
  },
  {
    "year": 2022,
    "authors": "S.K. Jauhar, N. Singh, A. Rajeev, M. Pant",
    "title": "Measuring Paper Industry's Ecological Performance in an Imprecise and Vague Scenario: A Fuzzy DEA-based Analytical Framework",
    "venue": "Benchmarking: An International Journal",
    "publisher": "Emerald (MCB UP)",
    "quartile": "Q2"
  },
  {
    "year": 2021,
    "authors": "Bilal, M. Pant, V. Snasel",
    "title": "Design Optimization of Water Distribution Networks Through a Novel Differential Evolution",
    "venue": "IEEE Access",
    "publisher": "IEEE",
    "quartile": "Q2"
  },
  {
    "year": 2021,
    "authors": "Bilal, M. Pant, D. Rani",
    "title": "Large Scale Reservoir Operation Through Integrated Meta-heuristic Approach",
    "venue": "Memetic Computing",
    "publisher": "Springer-Verlag",
    "quartile": "Q2"
  },
  {
    "year": 2021,
    "authors": "H. Singh, M. Pant",
    "title": "Auto-minimum Resolvable Temperature Difference Method for Thermal Imagers",
    "venue": "Journal of Optics",
    "publisher": "IOP Publishing",
    "quartile": "Q2"
  },
  {
    "year": 2021,
    "authors": "S. Verma, M. Pant, V. Snasel",
    "title": "A Comprehensive Review on NSGA-II for Multi-objective Combinatorial Optimization Problems",
    "venue": "IEEE Access",
    "publisher": "IEEE",
    "quartile": "Q2"
  },
  {
    "year": 2021,
    "authors": "K. Bhattacharjee, M. Pant, S. Srivastava",
    "title": "Evolutionary Multiple Instance Boosting Framework for Weakly Supervised Learning",
    "venue": "Complex & Intelligent Systems",
    "publisher": "Springer-Verlag",
    "quartile": "Q2"
  },
  {
    "year": 2021,
    "authors": "M. Pant, M. Stanko, L. Sales",
    "title": "Differential Evolution for Early-phase Offshore Oilfield Design Considering Uncertainties in Initial Oil-in-place and Well Productivity",
    "venue": "Upstream Oil and Gas Technology",
    "publisher": null,
    "quartile": null
  },
  {
    "year": 2021,
    "authors": "K. Bhattacharjee, A. Tiwari, M. Pant, C.W. Ahn, S. Oh",
    "title": "Multiple Instance Learning with Differential Evolutionary Pooling",
    "venue": "Electronics",
    "publisher": "MDPI AG",
    "quartile": "Q2"
  },
  {
    "year": 2021,
    "authors": "P. Chauhan, M. Pant, K. Deep",
    "title": "Gompertz PSO Variants for Knapsack and Multi-Knapsack Problems",
    "venue": "Applied Mathematics \u2014 A Journal of Chinese Universities",
    "publisher": "Springer-Verlag",
    "quartile": "Q2"
  },
  {
    "year": 2021,
    "authors": "M. Singh, M. Pant",
    "title": "A Review of Selected Weighing Methods in MCDM with a Case Study",
    "venue": "International Journal of System Assurance Engineering and Management",
    "publisher": "Springer-Verlag",
    "quartile": "Q3"
  },
  {
    "year": 2020,
    "authors": "M. Ali, C.W. Ahn, M. Pant, S. Kumar, M.K. Singh, D. Saini",
    "title": "An Optimized Digital Watermarking Scheme Based on Invariant DC Coefficients in Spatial Domain",
    "venue": "Electronics",
    "publisher": "MDPI AG",
    "quartile": "Q2"
  },
  {
    "year": 2020,
    "authors": "N. Singh, M. Pant",
    "title": "Efficiency Assessment of Indian Paper Mills Through Fuzzy DEA",
    "venue": "Materials and Manufacturing Processes",
    "publisher": "Informa UK (Taylor & Francis)",
    "quartile": "Q2"
  },
  {
    "year": 2020,
    "authors": "Bilal, M. Pant, H. Zaheer, L. Garcia-Hernandez, A. Abraham",
    "title": "Differential Evolution: A Review of More Than Two Decades of Research",
    "venue": "Engineering Applications of Artificial Intelligence",
    "publisher": "Elsevier",
    "quartile": "Q1"
  },
  {
    "year": 2020,
    "authors": "K. Bhattacharjee, M. Pant, Y.D. Zhang, S.C. Satapathy",
    "title": "Multiple Instance Learning with Genetic Pooling for Medical Data Analysis",
    "venue": "Pattern Recognition Letters",
    "publisher": "Elsevier",
    "quartile": "Q2"
  },
  {
    "year": 2020,
    "authors": "A. Tiwari, S. Srivastava, M. Pant",
    "title": "Brain Tumor Segmentation and Classification from Magnetic Resonance Images: Review of Selected Methods from 2014 to 2019",
    "venue": "Pattern Recognition Letters",
    "publisher": "Elsevier",
    "quartile": "Q2"
  },
  {
    "year": 2020,
    "authors": "Bilal, M. Pant",
    "title": "Parameter Optimization of Water Distribution Network \u2014 A Hybrid Metaheuristic Approach",
    "venue": "Materials and Manufacturing Processes",
    "publisher": "Informa UK (Taylor & Francis)",
    "quartile": "Q2"
  },
  {
    "year": 2020,
    "authors": "M. Singh, M. Pant, R.D. Godiyal, A. Kumar Sharma",
    "title": "MCDM Approach for Selection of Raw Material in Pulp and Paper Making Industry",
    "venue": "Materials and Manufacturing Processes",
    "publisher": "Informa UK (Taylor & Francis)",
    "quartile": "Q2"
  },
  {
    "year": 2019,
    "authors": "N. Kushwaha, M. Pant",
    "title": "Modified Particle Swarm Optimization for Multimodal Functions and Its Application",
    "venue": "Multimedia Tools and Applications",
    "publisher": null,
    "quartile": null
  },
  {
    "year": 2019,
    "authors": "N. Kushwaha, M. Pant",
    "title": "Fuzzy Electromagnetic Optimization Clustering Algorithm for Collaborative Filtering",
    "venue": "Journal of Experimental & Theoretical Artificial Intelligence",
    "publisher": "Informa UK (Taylor & Francis)",
    "quartile": "Q2"
  },
  {
    "year": 2019,
    "authors": "M. Ramadas, M. Pant, A. Abraham, S. Kumar",
    "title": "Segmentation of Weather Radar Image Based on Hazard Severity Using RDE: Reconstructed Mutation Strategy for Differential Evolution Algorithm",
    "venue": "Neural Computing and Applications",
    "publisher": null,
    "quartile": null
  },
  {
    "year": 2019,
    "authors": "K. Bhattacharjee, M. Pant",
    "title": "Hybrid Particle Swarm Optimization-Genetic Algorithm Trained Multi-layer Perceptron for Classification of Human Glioma from Molecular Brain Neoplasia Data",
    "venue": "Cognitive Systems Research",
    "publisher": "Elsevier",
    "quartile": "Q2"
  }
];

const CONFERENCES = [
  {
    "year": 2026,
    "type": "Edited Volume",
    "authors": "M. Pant, K. Deep, A.K. Nagar (Eds.)",
    "title": "Machine Learning and Its Applications to Healthcare",
    "venue": "Springer Nature",
    "citations": null
  },
  {
    "year": 2025,
    "type": "Edited Volume",
    "authors": "K. Deep, M. Pant, A.K. Nagar (Eds.)",
    "title": "Soft Computing for Problem Solving: Proceedings of the 12th International Conference on Soft Computing for Problem Solving (SocProS 2023), Vol. 3",
    "venue": "Springer Nature",
    "citations": null
  },
  {
    "year": 2025,
    "type": "Conference Paper",
    "authors": "R. Tole, M. Pant",
    "title": "Optimization Models in Nurse Scheduling \u2014 A Review of the Last Five Years",
    "venue": "Contemporary Advancement in Evolutionary Multi-objective Optimization",
    "citations": null
  },
  {
    "year": 2025,
    "type": "Conference Paper",
    "authors": "V. Pandey, M. Pant",
    "title": "Vehicle Routing for Perishable Food with Freshness Preservation: A Heuristic-Enhanced NSGA-II",
    "venue": "International Conference on Swarm Intelligence",
    "citations": null
  },
  {
    "year": 2025,
    "type": "Conference Paper",
    "authors": "P. Verma, G. Kumawat, M. Singh, M. Pant, M.K. Barua",
    "title": "A Mathematical Stacking Ensemble Model for Prediction of Multiple Mental Disorders Among Students",
    "venue": "The Euro-China Conference on Intelligent Data Analysis and Applications",
    "citations": null
  },
  {
    "year": 2024,
    "type": "Edited Volume",
    "authors": "M. Pant, K. Deep, A. Nagar (Eds.)",
    "title": "Proceedings of the 12th International Conference on Soft Computing for Problem Solving: SocProS 2023, Volume 2",
    "venue": "Springer Nature",
    "citations": null
  },
  {
    "year": 2024,
    "type": "Conference Paper",
    "authors": "H. Singh, A. Sharma, M. Pant",
    "title": "Pixels to Prose: Understanding the Art of Image Captioning",
    "venue": "arXiv preprint arXiv:2408.15714",
    "citations": 10
  },
  {
    "year": 2024,
    "type": "Conference Paper",
    "authors": "S. Verma, M. Pant",
    "title": "ACSLs for Large-Scale Bounded Single Depot Multiple Travelling Salesman Problem",
    "venue": "IEEE Congress on Evolutionary Computation (CEC)",
    "citations": 2
  },
  {
    "year": 2024,
    "type": "Conference Paper",
    "authors": "A. Katharria, M. Pant, K. Deep, I. Devi",
    "title": "XAI-based Cattle Identification with YOLO and SIFT Technique",
    "venue": "IEEE International Conference on Future Machine Learning and Data Science",
    "citations": null
  },
  {
    "year": 2023,
    "type": "Edited Volume",
    "authors": "S. Agnihotri, K. Deep, A.K. Nagar, M. Pant, B.S. Rajpurohit, M. Thakur (Eds.)",
    "title": "Soft Computing for Problem Solving: Proceedings of the SocProS 2022",
    "venue": "Springer Verlag, Singapore",
    "citations": 1
  },
  {
    "year": 2023,
    "type": "Conference Paper",
    "authors": "S. Joshi, A. Panwar, M. Pant, K. Deep",
    "title": "Performance Analysis of Indian States and Union Territories for COVID-19 Management Through DEA and Machine Learning",
    "venue": "International Conference on Soft Computing for Problem-Solving",
    "citations": null
  },
  {
    "year": 2023,
    "type": "Conference Paper",
    "authors": "S. Srivastava, M. Pant, V. Gupta",
    "title": "Analysis and Prediction of Indian Stock Market: A Machine-Learning Approach",
    "venue": "International Conference on Soft Computing for Problem-Solving",
    "citations": 44
  },
  {
    "year": 2022,
    "type": "Conference Paper",
    "authors": "S. Verma, V. Pandey, M. Pant, V. Snasel",
    "title": "A Balanced Squad for Indian Premier League Using Modified NSGA-II",
    "venue": "IEEE Access",
    "citations": 10
  },
  {
    "year": 2021,
    "type": "Journal / Highly Cited",
    "authors": "S. Verma, M. Pant, V. Snasel",
    "title": "A Comprehensive Review on NSGA-II for Multi-objective Combinatorial Optimization Problems",
    "venue": "IEEE Access",
    "citations": 1155
  },
  {
    "year": 2020,
    "type": "Edited Volume",
    "authors": "A. Sikander, R. Singla, O.P. Verma, T.K. Sharma, M. Pant (Eds.)",
    "title": "Soft Computing: Theories and Applications \u2014 Proceedings of SoCTA 2018",
    "venue": "Springer",
    "citations": 4
  },
  {
    "year": 2020,
    "type": "Edited Volume",
    "authors": "M. Pant, T.K. Sharma, S. Basterrech, C. Banerjee (Eds.)",
    "title": "Performance Management of Integrated Systems and Its Applications in Software Engineering",
    "venue": "Springer Singapore",
    "citations": 5
  },
  {
    "year": 2019,
    "type": "Edited Volume",
    "authors": "A. Abraham, N. Gandhi, M. Pant (Eds.)",
    "title": "Innovations in Bio-Inspired Computing and Applications: Proceedings of IBICA 2018",
    "venue": "Springer",
    "citations": 9
  },
  {
    "year": 2018,
    "type": "Conference Paper",
    "authors": "N. Singh, M. Pant, A. Goel",
    "title": "ANN-embedded Data Envelopment Analysis Approach for Measuring the Efficiency of State Boards in India",
    "venue": "International Journal of System Assurance Engineering and Management",
    "citations": 20
  },
  {
    "year": 2017,
    "type": "Edited Volume",
    "authors": "K. Deep, J.C. Bansal, K.N. Das, A.K. Lal, H. Garg, A.K. Nagar, M. Pant (Eds.)",
    "title": "Proceedings of the Sixth International Conference on Soft Computing for Problem Solving",
    "venue": "Springer",
    "citations": 6
  },
  {
    "year": 2017,
    "type": "Conference Paper",
    "authors": "H. Zaheer, M. Pant, S. Kumar, O. Monakhov, E. Monakhova, K. Deep",
    "title": "A New Guiding Force Strategy for Differential Evolution",
    "venue": "International Journal of System Assurance Engineering and Management",
    "citations": 42
  },
  {
    "year": 2016,
    "type": "Edited Volume",
    "authors": "M. Pant, K. Deep, J.C. Bansal, A. Nagar, K.N. Das (Eds.)",
    "title": "Proceedings of the Fifth International Conference on Soft Computing for Problem Solving (SocProS 2015)",
    "venue": "Springer",
    "citations": 12
  },
  {
    "year": 2015,
    "type": "Edited Volume",
    "authors": "V. Sn\u00e1\u0161el, A. Abraham, P. Kr\u00f6mer, M. Pant, A. Muda (Eds.)",
    "title": "Innovations in Bio-Inspired Computing and Applications",
    "venue": "Proceedings of the 6th International Conference on Innovations in Bio-Inspired Computing",
    "citations": 27
  },
  {
    "year": 2015,
    "type": "Edited Volume",
    "authors": "J.C. Bansal, K.N. Das, K. Deep, A. Nagar, M. Pant (Eds.)",
    "title": "Proceedings of the Fourth International Conference on Soft Computing for Problem Solving: SocProS 2014",
    "venue": "Springer",
    "citations": null
  },
  {
    "year": 2014,
    "type": "Edited Volume",
    "authors": "M. Pant, K. Deep, A. Nagar, J.C. Bansal (Eds.)",
    "title": "Proceedings of the Third International Conference on Soft Computing for Problem Solving: SocProS 2013, Volume 2",
    "venue": "Springer",
    "citations": 1
  },
  {
    "year": 2014,
    "type": "Edited Volume",
    "authors": "B.V. Babu, A. Nagar, K. Deep, M. Pant, J.C. Bansal, K. Ray, U. Gupta (Eds.)",
    "title": "Proceedings of the Second International Conference on Soft Computing for Problem Solving (SocProS 2012)",
    "venue": "Springer",
    "citations": 4
  },
  {
    "year": 2012,
    "type": "Journal / Highly Cited",
    "authors": "M. Ali, P. Siarry, M. Pant",
    "title": "An Efficient Differential Evolution Based Algorithm for Solving Multi-objective Optimization Problems",
    "venue": "European Journal of Operational Research",
    "citations": 323
  },
  {
    "year": 2011,
    "type": "Journal / Highly Cited",
    "authors": "R. Thangaraj, M. Pant, A. Abraham, P. Bouvry",
    "title": "Particle Swarm Optimization: Hybridization Perspectives and Experimental Illustrations",
    "venue": "Applied Mathematics and Computation",
    "citations": 458
  },
  {
    "year": 2010,
    "type": "Journal / Highly Cited",
    "authors": "R. Thangaraj, M. Pant, K. Deep",
    "title": "Optimal Coordination of Over-current Relays Using Modified Differential Evolution Algorithms",
    "venue": "Engineering Applications of Artificial Intelligence",
    "citations": 232
  },
  {
    "year": 2007,
    "type": "Conference Paper",
    "authors": "M. Pant, T. Radha, V.P. Singh",
    "title": "A Simple Diversity Guided Particle Swarm Optimization",
    "venue": "IEEE Congress on Evolutionary Computation",
    "citations": 126
  }
];
