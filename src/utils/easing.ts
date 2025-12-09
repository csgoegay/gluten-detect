export const EASINGS = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  easeIn: [0.42, 0, 1, 1] as const,
  easeOut: [0, 0, 0.58, 1] as const,
  easeInOut: [0.42, 0, 0.58, 1] as const,
} as const;

export type EasingValue = typeof EASINGS[keyof typeof EASINGS];