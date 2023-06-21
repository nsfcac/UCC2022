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
import ImportantDate from "../components/sections/ImportantDate";
import {Avatar, Chip, Typography} from "@mui/material";

class Secondary extends React.Component {

    state = {
        demoModalActive: false
    }

    openModal = (e) => {
        e.preventDefault();
        this.setState({demoModalActive: true});
    }

    closeModal = (e) => {
        e.preventDefault();
        this.setState({demoModalActive: false});
    }

    render() {


        return (
            <React.Fragment>

                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">E2C: A Visual Simulator of Heterogeneous Computing Systems</h2>
                        <h5 style={{marginBottom:10}}>
                            <Chip avatar={<Avatar>A</Avatar>} label="Ali Mokhtari" variant="outlined"/>
                            <Chip avatar={<Avatar>M</Avatar>} label="Mohsen Amini Salehi" variant="outlined"/>
                        </h5>
                        <Typography variant="body2">
                            <em>
                            High Performance Cloud Computing (HPCC) Laboratory,
                            School of Computing and Informatics,
                            University of Louisiana at Lafayette
                            </em>
                        </Typography>
                        <br/>
                        <Typography variant="body1">
                            In this tutorial, we introduce E2C, a framework to simulate any type of heterogeneous computing system. By using E2C, the researchers can easily examine their system-level solutions (scheduling, load balancing, scalability, etc.) in a controlled environment within a short time and at no cost. In particular, E2C offers the following features: (i) simulating a heterogeneous computing system; (ii) implementing a newly developed scheduling method and plugging it into the system, and (iii) measuring power and other output-related things; (iv) visual aspects to ease learning for students. These features help researchers who study resource allocation solutions in distributed systems to test and evaluate their solutions easier and faster. Moreover, the graphical user interface would help students to gain a deeper knowledge of resource allocation procedures in distributed computing systems.
                        </Typography>
                    </div>
                </GenericSection>

            </React.Fragment>
        );
    }
}

// inline style
const formStyle = {
    maxWidth: '420px',
    margin: '0 auto'
}

export default Secondary;