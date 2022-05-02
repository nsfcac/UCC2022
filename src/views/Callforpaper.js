import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull';
import Team from '../components/sections/Team';
import Roadmap from '../components/sections/Roadmap';
import Testimonial from '../components/sections/Testimonial';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import classNames from "classnames";
import ImportantDate from "../components/sections/ImportantDate";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

class Callforpaper extends React.Component {

    render() {
        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            ...props
        } = this.props;

        const genericSection04Header = {
            title: 'Paper Submission'
        };
        return (
            <React.Fragment>
                <Grid container spacing={2}>
                    <Grid item lg={9}>
                        <GenericSection>
                                <h2>Call for Papers</h2>
                                <p>The digital transformation of all areas of life is accelerated in this decade by
                                    novel cloud
                                    services, e-infrastructures, data platforms and cyber-physical system integration.
                                    This
                                    broader scope of cloud computing calls for technically sound contributions that
                                    combine
                                    scale with convenience and reliability. Society and economy depend on cloud
                                    applications
                                    delivering compute power on demand in every location along data paths as a general
                                    service
                                    to the public, in analogy to conventional utilities. The engineering of such systems
                                    and
                                    applications calls for scientifically proven approaches, methods, tools and
                                    technologies.</p>
                                <p>Providing a forum to review and discuss possible solutions, UCC is the premier
                                    IEEE/ACM
                                    conference for areas related to Cloud Computing as a Utility where leading
                                    researchers and
                                    practitioners in this important and growing field gather on an annual basis.</p>

                                <p>This will be the 14th UCC in a successful conference series of community-driven
                                    events.
                                    Previous events were held in Shanghai, China (Cloud 2009), Melbourne, Australia
                                    (Cloud 2010
                                    & UCC 2011), Chennai, India (UCC 2010), Chicago, USA (UCC 2012), Dresden, Germany
                                    (UCC
                                    2013), London, UK (UCC 2014), Limassol, Cyprus (UCC 2015), Shanghai, China (UCC
                                    2016),
                                    Austin, Texas, USA (UCC 2017), Zurich, Switzerland (UCC 2018), Auckland, New Zealand
                                    (UCC
                                    2019) and online during the pandemic (UCC 2020).</p>

                                <p>UCC 2021 will be hosted at the University of Leicester. The city of Leicester is a
                                    major city
                                    in the middle of country and is well connected to the rest of the world with road,
                                    rail and
                                    air networks.</p>

                                <p>UCC 2021 offers a technical programme, workshops, tutorials, and a doctoral
                                    symposium. The
                                    event will have a co-located 8th International Conference on Big Data Computing
                                    Applications
                                    and Technologies (BDCAT 2021).</p>

                                <p>Authors are invited to submit original, unpublished research manuscripts in all areas
                                    of
                                    Cloud and Utility Computing and related computing paradigms such as Fog/Edge,
                                    Serverless and
                                    Distributed Computing.</p>

                                <p>NEW in 2021: UCC submissions continue to use a double column format for review based
                                    on the
                                    new single-column template to facilitate the new ACM production process; the details
                                    are
                                    described in separate submission instructions.</p>

                                <p>Also NEW in 2021: Authors of accepted papers can opt into reproducible research
                                    decoration;
                                    the details are described below.</p>

                        </GenericSection>
                        <GenericSection topDivider>
                            <h2>Topics of interest include (but not limited to)</h2>
                            <ul>
                                <li>Formal and qualitative aspects of Cloud technology</li>
                                <li>Security, trust and privacy in Clouds, and Cloud-hosted Blockchains</li>
                                <li>Architectural models and patterns to achieve Utility in Clouds</li>
                                <li>Cloud business and legal implications beyond technology</li>
                                <li>Cloud Computing middleware, stacks, tools, delivery networks and services at all
                                    layers
                                    (XaaS)
                                </li>
                                <li>Cloud large-scale foundations for Big Data, IoT, and real-time analytics</li>
                                <li>Cloud management: autonomic, adaptive, self-*, SLAs, and monitoring</li>
                                <li>Cloud-native application design, engineering and serverless/microservice
                                    implementation
                                </li>
                                <li>Cloud, Fog and edge/mobile devices management, hierarchy models, and business
                                    models
                                </li>
                                <li>Designs and deployment models for Clouds: private, public, hybrid, federated,
                                    aggregated
                                </li>
                                <li>Economic and business models of Clouds and services</li>
                                <li>High Performance Computing and the Cloud</li>
                                <li>Innovative cloud applications and experiences</li>
                                <li>Integration of Cloud systems with Fog/edge and IoT devices, continuum
                                    computing
                                </li>
                                <li>Leading edge topics such as hybrid quantum clouds, coded computing and FHE</li>
                                <li>Mobile and energy-efficient use of Clouds</li>
                                <li>Networking for clouds and data centres</li>
                                <li>Performance analysis and modelling of cloud systems and applications</li>
                                <li>Policy languages and programming models</li>
                                <li>Principles and theoretical foundations of Utility Computing</li>
                                <li>Resource management and scalability: brokering, scheduling, capacity planning,
                                    and
                                    elasticity
                                </li>
                                <li>Utility-driven platforms for Clouds</li>
                                <li>Utility-driven models and mechanisms for interclouds / federations</li>
                                <li>Virtualization, containerization, composition, orchestration and other
                                    enablers
                                </li>
                            </ul>
                        </GenericSection>
                        <GenericSection topDivider>
                            <h2>Paper Submission</h2>
                            <p>
                                NEW in 2021: UCC submissions continue to use a double column format for review based
                                on the new single-column template to facilitate the new ACM production process.
                            </p>
                            <p>
                                Submitted manuscripts must represent original unpublished research that is not
                                currently under review for any other conference or journal. Manuscripts are
                                submitted in PDF format and may not exceed ten (10) ACM-formatted *double-column*
                                pages, including figures, tables, and references. The limit is six (6) pages for
                                workshop papers.
                            </p>
                            <p>
                                All manuscripts will be reviewed and judged on correctness, originality,technical
                                strength, rigour in analysis, quality of results, quality of presentation, and
                                interest and relevance to the conference attendees. Your submission is subject to a
                                determination that you are not under any sanctions by ACM.
                            </p>
                            <p>
                                Accepted papers will later be converted into single-column format through the ACM
                                TAPS process and therefore need to use the new templates that are single-column by
                                default. Switch them to double-column for authoring your paper. This is possible in
                                both the Word and the LaTeX templates.
                            </p>
                            <p>
                                LaTeX: \documentclass[sigconf,screen,review]{"{acmart}"}
                            </p>
                            <p>
                                Word: Format - Page - Columns - set to 2
                            </p>
                            <p>
                                At least one author of each paper must be registered for the conference in order for
                                the paper to be published in the proceedings. The conference proceedings will be
                                published by the ACM and made available online via the IEEE Xplore Digital Library
                                and ACM Digital Library.
                            </p>
                            <p>
                                Formatting: <a href={"https://www.acm.org/publications/taps/word-template-workflow"}
                                               target={"_blank"}>https://www.acm.org/publications/taps/word-template-workflow</a>
                            </p>
                            <p>
                                Main track submissions: <a href={"https://easychair.org/conferences/?conf=ucc2021"}
                                                           target={"_blank"}>https://easychair.org/conferences/?conf=ucc2021</a>
                            </p>
                            <p>
                                Workshop submissions: see respective workshop information
                            </p>
                        </GenericSection>
                    </Grid>
                    <Grid item lg={3}>
                        <GenericSection>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <ImportantDate className="gradient-section" style={{paddingTop:0}}/>
                                <p>Check separate UCC calls for workshops, tutorials and other tracks.</p>
                            </CardContent>
                        </Card>
                        </GenericSection>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

// inline style
const formStyle = {
    maxWidth: '420px',
    margin: '0 auto'
}

export default Callforpaper;
