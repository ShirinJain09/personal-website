
export interface NavItem {
  id: string;
  label: string;
  number: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  active?: boolean;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  linkUrl?: string;
}

export interface SkillItem {
  label: string;
  percentage: number;
}

export interface HobbyItem {
  icon: string;
  label: string;
  requirement: string;
}
