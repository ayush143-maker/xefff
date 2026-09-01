import { ConsciousnessProvider } from "@/components/ConsciousnessProvider";
import SiteStage from "@/components/SiteStage";

export default function Home() {
  return (
    <ConsciousnessProvider>
      <SiteStage />
    </ConsciousnessProvider>
  );
}
