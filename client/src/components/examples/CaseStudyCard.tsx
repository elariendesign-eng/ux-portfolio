import CaseStudyCard from '../CaseStudyCard';
import caseStudy1 from '@assets/generated_images/Case_study_1_mockup_5fda571d.png';

export default function CaseStudyCardExample() {
  return (
    <div className="p-8 max-w-md">
      <CaseStudyCard
        id="mobile-banking"
        title="Mobile Banking Redesign"
        description="Leading UX strategy for digital transformation of enterprise banking app"
        category="Financial Services"
        imageUrl={caseStudy1}
      />
    </div>
  );
}
