import React from "react";
import Particles from "react-tsparticles"
import ParticleConfig from "./Config/ParticleConfig"

export default function ParticleBackground() {
    return (
        <Particles params={ParticleConfig}></Particles>
    );
}