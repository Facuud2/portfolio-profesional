import React from 'react';
import { FaReact, FaDocker, FaGitAlt, FaCrown } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss } from 'react-icons/si';
import { IoChatbubblesOutline, IoPeopleOutline, IoBulbOutline, IoAnalyticsOutline, IoGitNetworkOutline } from 'react-icons/io5';

// --- TECHNICAL SKILLS ---
export const ReactIcon: React.FC<{ className?: string }> = ({ className }) => (
    <FaReact className={className} />
);

export const TypeScriptIcon: React.FC<{ className?: string }> = ({ className }) => (
    <SiTypescript className={className} />
);

export const JavaScriptIcon: React.FC<{ className?: string }> = ({ className }) => (
    <SiJavascript className={className} />
);

export const DockerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <FaDocker className={className} />
);

export const GitIcon: React.FC<{ className?: string }> = ({ className }) => (
    <FaGitAlt className={className} />
);

export const TailwindCssIcon: React.FC<{ className?: string }> = ({ className }) => (
    <SiTailwindcss className={className} />
);


// --- SOFT SKILLS ---
export const CommunicationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IoChatbubblesOutline className={className} />
);

export const TeamworkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IoPeopleOutline className={className} />
);

export const ProblemSolvingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IoBulbOutline className={className} />
);

export const CriticalThinkingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IoAnalyticsOutline className={className} />
);

export const AdaptabilityIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IoGitNetworkOutline className={className} />
);

export const LeadershipIcon: React.FC<{ className?: string }> = ({ className }) => (
    <FaCrown className={className} />
);
