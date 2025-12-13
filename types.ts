import React from 'react';

// --- Data Schemas (JSON Structure Proposal) ---

export enum VerticalType {
  ACADEMY = 'academy',
  AGENCY = 'agency',
  HUB = 'hub'
}

export interface Module {
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Embedded Systems' | 'VLSI' | 'Software Development' | 'Data Science';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  modules: Module[];
  techStack: string[];
  thumbnailUrl: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  iconName: string; // Mapping to Lucide icons
}

// --- Component Props ---

export interface LayoutProps {
  children: React.ReactNode;
}