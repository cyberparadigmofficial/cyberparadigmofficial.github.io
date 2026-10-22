
import React from 'react';
import { Terminal, Shield, Target, Award, Users, Video, BookOpen, Presentation } from 'lucide-react';
import { Feature, GalleryItem, TeamMember } from './types';

export const HERO_HEADLINES = [
  "Workshops • Content • Community",
  "Hands-On Cybersecurity Learning",
  "Real-World Skills. Real Impact."
];

export const FEATURES: Feature[] = [
  {
    title: "Hands-on Cyber Labs",
    description: "Cloud-based sandbox environments designed to let you practice attacks and defenses in a safe, isolated space.",
    icon: <Terminal className="w-6 h-6 text-[#8A897C]" />
  },
  {
    title: "Guided Learning Paths",
    description: "Curated curriculums that take you from beginner to advanced roles with structured modules and assessments.",
    icon: <Target className="w-6 h-6 text-[#8A897C]" />
  },
  {
    title: "Gamified Progress",
    description: "Earn XP, unlock badges, and climb the leaderboard as you conquer complex security challenges.",
    icon: <Award className="w-6 h-6 text-[#8A897C]" />
  },
  {
    title: "Industry-Aligned Skills",
    description: "Labs modeled after real-world breaches and modern infrastructure to ensure skills are job-ready.",
    icon: <Shield className="w-6 h-6 text-[#8A897C]" />
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Advanced Malware Analysis Workshop",
    description: "An intensive session held at K-Hub where students learned to deconstruct contemporary ransomware samples in a secure lab environment.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Interactive CTF Competition",
    description: "Over 200 participants competed in our signature Capture The Flag event, solving real-world infrastructure vulnerabilities under pressure.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Corporate Awareness Training",
    description: "Partnering with institutions to spread cybersecurity awareness, teaching faculty and students about digital hygiene and defense.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Arvind Kumar",
    role: "Chief Mentor & K-Hub Lead",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  },
  {
    name: "Sandeep Varma",
    role: "Lead Platform Architect",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  },
  {
    name: "Priyanka Reddy",
    role: "Cybersecurity Educator",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  },
  {
    name: "Rahul Sharma",
    role: "Content & Community Lead",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  }
];

export const WORKSHOP_STATS = [
  { label: "Workshops Hosted", value: "40+" },
  { label: "Active Students", value: "2,500+" },
  { label: "College Partners", value: "15+" },
  { label: "Live Labs", value: "120+" }
];
