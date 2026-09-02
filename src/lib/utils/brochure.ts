/**
 * Utility to generate and trigger the download of an official Kyureeus Bootcamp Syllabus & Brochure
 */

export interface BrochureModule {
  number: string;
  module: string;
  topics: string;
  outcome: string;
  category?: string;
}

export function downloadBootcampBrochure(
  bootcampTitle: string,
  tagline: string,
  modules: BrochureModule[]
) {
  const content = `================================================================================
KYUREEUS CAPABILITY ARCHITECTURE & BOOTCAMPS
Official Curriculum & Program Brochure
================================================================================

Program: ${bootcampTitle.toUpperCase()}
Tagline: ${tagline}
Institution: Kyureeus (Building Enterprises, Creating Enduring Value)
Website: https://kyureeus.com
Support: admissions@kyureeus.com

--------------------------------------------------------------------------------
1. THE KYUREEUS PHILOSOPHY
--------------------------------------------------------------------------------
Kyureeus bootcamps are not collections of passive lectures. They are complete
systems for developing the high-leverage builders modern enterprises need.
Every track is organized around production-grade engineering, adversarial testing,
and verifiable evidence over superficial certifications.

--------------------------------------------------------------------------------
2. COMPLETE 16-MODULE CURRICULUM ROADMAP
--------------------------------------------------------------------------------

${modules
  .map(
    (m) => `[MODULE ${m.number}] ${m.module.toUpperCase()} ${m.category ? `(${m.category})` : ""}
• Topics & Coverage : ${m.topics}
• Actionable Outcome: ${m.outcome}
`
  )
  .join("\n--------------------------------------------------------------------------------\n")}

--------------------------------------------------------------------------------
3. ADMISSIONS & ENROLMENT
--------------------------------------------------------------------------------
• Delivery: Intensive hybrid cohorts, hands-on production sandboxes & live architecture reviews.
• Certification: Evidence-based capability portfolio & enterprise code repositories.
• Inquiries & Corporate Cohorts: Contact admissions@kyureeus.com

================================================================================
© ${new Date().getFullYear()} Kyureeus. All rights reserved.
================================================================================
`;

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute(
    "download",
    `Kyureeus_${bootcampTitle.replace(/\s+/g, "_")}_Brochure.txt`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
