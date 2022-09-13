import React from 'react';
import KeyNoteSection from '../components/sections/KeyNoteSection';

const data = [
    {
        title:'IN SITU DATA ANALYTICS FOR NEXT GENERATION MOLECULAR DYNAMICS WORKFLOWS',
        authorName: 'Michela Taufer',
        orgName: 'Tickle College of Engineering, US',
        avatar: 'Michela Taufer.jpg',
        abstract: `Molecular dynamics (MD) simulations study important phenomena in chemistry, materials science, molecular biology, and drug design. They are also one of the most common simulations on petascale and, it is likely they will be equally common on exascale machines as those machines become more widely available. Next-generation supercomputers will have dramatically higher performance than current systems, generating more data that needs to be analyzed (i.e., in terms of number and length of molecular dynamics trajectories). The coordination of data generation and analysis cannot rely on manual, centralized approaches as it does now. 

This talk presents an interdisciplinary approach to tackle the data challenges of MD simulations. 
Through the creation of novel data analytics algorithms for in situ data analysis of relevant
structural molecular properties, the definition of MD-based machine learning (ML) techniques to automatically identify the molecular domains where the properties reside at runtime, and the integration of both algorithms and techniques into MD workflows at the extreme scale, we revolutionize data generation and analysis. By harnessing knowledge from MD simulations in situ, we transform MD workflows on next-generation supercomputers, enabling the workflows to steer MD simulations to more promising areas of the simulation space, identify the data that should be written to disk in underprovisioned parallel file systems, and index data for retrieval and postsimulation analysis.`,
        bio: `Michela Taufer is an ACM Distinguished Scientist and holds the Jack Dongarra Professorship in High Performance Computing in the Department of Electrical Engineering and Computer Science at the University of Tennessee Knoxville (UTK). She earned her undergraduate degrees in Computer Engineering from the University of Padova (Italy) and her doctoral degree in Computer Science from the Swiss Federal Institute of Technology or ETH (Switzerland). From 2003 to 2004 she was a La Jolla Interfaces in Science Training Program (LJIS) Postdoctoral Fellow at the University of California San Diego (UCSD) and The Scripps Research Institute (TSRI), where she worked on interdisciplinary projects in computer systems and computational chemistry.

Michela has a long history of interdisciplinary work with scientists. Her research interests include scientific applications on heterogeneous platforms (i.e., multi-core platforms and accelerators); performance analysis, modeling and optimization; Artificial Intelligence (AI) for cyberinfrastructures (CI); AI integration into scientific workflows, computer simulations, and data analytics. She has been serving as the principal investigator of several NSF collaborative projects. She also has significant experience in mentoring a diverse population of students on interdisciplinary research. Michela's training expertise includes efforts to spread high-performance computing participation in undergraduate education and research as well as efforts to increase the interest and participation of diverse populations in interdisciplinary studies.`
    },
    {
        title:'POWERING THE METAVERSE',
        authorName: 'Tania Lorido Botran',
        orgName: 'Roblox',
        avatar: 'Tania Lorido Botran.jpg',
        abstract: `Roblox is a global platform for 3D co-experience. Over 17 years it grew to 55 million daily active users across console, desktop, mobile, and VR in 180 countries. As the reader might guess, supporting such a large network of users on heterogeneous devices is not a trivial task. Powering the metaverse encompases a whole stack of problems: workload forecasting, scheduling to latency-critical tasks, edge-to-cloud connectivity, data center sustainability and fault-tolerant serverless environments. In this talk, we will deep dive into some of the challenges and discover how AI can help in many of them.`,
        bio: `Dr. Tania Lorido-Botran is a Research Scientist at Roblox. Prior to that, she worked at Microsoft and the Pacific Northwest National Laboratory. During her PhD, she had the opportunity to spend one year at Rice University and also did two internships at VMware and HP Labs. Dr. Lorido Botran received her PhD from the University of Deusto in Spain with a Cum Laude distinction, and her master’s degree in Distributed systems from University of the Basque Country with a highest marks distinction. Her current research interests span across ML for systems, data center sustainability and fault-tolerance.`
    },
    {
        title:'Vehicle Computing: Vision and Challenges',
        authorName: 'Weisong Shi',
        orgName: 'Wayne State University, US',
        avatar: 'Weisong Shi.jpg',
        abstract: `Vehicles have been majorly used for transportation in the last century. With the proliferation of onboard computing and communication capabilities, we envision that future connected vehicle (CVs) will be serving as a mobile computing platform in addition to their conventional transportation role for the next century. In this article, we present the vision of Vehicle Computing, i.e., CVs are the perfect computation platforms, and connected devices/things with limited computation capacities can rely on surrounding CVs to perform complex computational tasks. We also discuss Vehicle Computing from several aspects, including several key and enabling technologies, case studies, open challenges, and the potential business model.`,
        bio: `Dr. Weisong Shi is a Professor of Computer Science at Wayne State University, and directs the Connected and Autonomous Research (CAR) Laboratory, investigating performance, reliability, power- and energy-efficiency, trust and privacy issues of networked computer systems and applications. Dr. Shi is an internationally acclaimed leader in the edge computing and autonomous driving, his pioneer paper entitled “Edge Computing: Vision and Challenges” has been cited more than 5000 times. Dr. Shi is the chair of IEEE Computer Society Special Technology Community on Autonomous Driving Technologies (ADT), the steering committee member of the Autoware Foundation. He is an IEEE Fellow and an ACM Distinguished Scientist. More information can be found at http://weisongshi.org`
    },

]

class Keynote extends React.Component {
  render() {
    return (
      <React.Fragment>
          {data.map(d=><KeyNoteSection key={d.authorName} invertMobile imageFill className="illustration-section-03" content={d}/>)}
      </React.Fragment>
    );
  }
}

export default Keynote;
