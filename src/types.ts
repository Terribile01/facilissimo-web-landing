export interface AuditAnswers {
  businessName: string;
  businessType: string;
  websiteUrl: string;
  manualTasks: string;
  mainStress: string;
}

export interface PillarCard {
  id: string;
  title: string;
  description: string;
  details: string[];
  metricLabel?: string;
  metricVal?: string;
  metricDiff?: string;
  iconName: string;
}

export interface WorkflowStep {
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}
