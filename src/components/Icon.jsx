import {
  Anchor,
  Activity,
  Sparkles,
  BrushCleaning,
  Smile,
  Layers,
  WandSparkles,
  Baby,
  Scissors,
  Syringe,
  Zap,
  ShieldCheck,
  Siren,
  Stethoscope,
  ScanLine,
  SmilePlus,
  PenTool,
  MoonStar,
} from 'lucide-react';

const ICONS = {
  Anchor,
  Activity,
  Sparkles,
  BrushCleaning,
  Smile,
  Layers,
  WandSparkles,
  Baby,
  Scissors,
  Syringe,
  Zap,
  ShieldCheck,
  Siren,
  Stethoscope,
  ScanLine,
  SmilePlus,
  PenTool,
  MoonStar,
};

export default function Icon({ name, size = 22, strokeWidth = 1.8, ...rest }) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp size={size} strokeWidth={strokeWidth} {...rest} />;
}
