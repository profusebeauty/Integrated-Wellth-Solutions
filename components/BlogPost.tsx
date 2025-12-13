import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  ShieldCheck, 
  HelpCircle, 
  Percent, 
  Briefcase, 
  MonitorCheck, 
  Landmark, 
  AlertTriangle 
} from 'lucide-react';

interface BlogPostProps {
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </button>

        {/* Hero Image */}
        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl mb-10 group">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" 
            alt="Financial documents and calculator" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <span className="bg-brand-500 text-white px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wide shadow-md">
              Tax Strategy
            </span>
          </div>
        </div>

        {/* Header */}
        <header className="mb-12 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              December 2025
            </span>
            <span className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              Integrated Wellth Team
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-6">
            South Africa's 2026 Tax Compliance Blueprint for Businesses
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            With new regulations on the horizon, South African businesses must proactively adapt their financial operations for 2026. This guide consolidates the latest official announcements and expert analyses.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg prose-slate max-w-none text-slate-700">
          <div className="bg-brand-50 border-l-4 border-brand-500 p-6 rounded-r-xl mb-10">
            <p className="lead m-0 font-medium text-brand-900">
              We provide a clear, actionable roadmap for navigating impending changes to <strong>VAT rates, PAYE reconciliation rules, and SARS's digital systems</strong>.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-12 mb-6">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 m-0">Key SARS Compliance Changes</h2>
          </div>
          
          <p>
            The 2026 tax year introduces stricter enforcement and critical procedural shifts that require your attention now.
          </p>
          <ul className="list-disc pl-6 space-y-4 mb-8">
            <li>
              <strong>Mandatory Income Tax Numbers for All Employees</strong>: A pivotal change for employers is the end of the grace period for submitting PAYE reconciliations. Starting with the <strong>2026 Employer Filing Season</strong>, SARS will <strong>reject any reconciliation submitted without a valid Income Tax Reference Number for every employee</strong> required to register under the Income Tax Act. Previously, missing numbers triggered warnings; now, they will result in immediate rejection and potential administrative penalties.
            </li>
            <li>
              <strong>Enhanced Digital Security for eFiling</strong>: SARS continues to bolster the security of its digital platforms. Recent enhancements include <strong>mandatory Two-Factor Authentication (2FA) for all individual eFiling profiles</strong> and stricter password requirements. Furthermore, <strong>biometric facial recognition</strong> is being introduced for new eFiling registrations using a South African ID, adding a new layer of identity verification.
            </li>
            <li>
              <strong>Clarified Regulations for Specific Entities</strong>: SARS has released draft guidance to clarify the income tax exemption for bodies corporate, share block companies, and qualifying associations of persons, providing more certainty for these entities.
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-12 mb-6">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
              <Percent className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 m-0">Practical VAT Compliance Steps</h2>
          </div>

          <p>
            While the much discussed VAT rate increase to 16% scheduled for <strong>1 April 2026</strong> was proposed in the March 2025 budget, it is crucial to note that subsequent legislation introduced in April 2025 proposed maintaining the rate at 15%. Businesses should monitor the final parliamentary approval of the <em>Rates and Monetary Amounts and the Amendment of Revenue Laws Bill</em> for confirmation.
          </p>
          <p>Regardless of the final rate decision, several other VAT-related changes require action:</p>
          <ol className="list-decimal pl-6 space-y-4 mb-8">
            <li>
              <strong>Prepare for System Updates</strong>: Ensure your accounting, ERP, and point-of-sale systems can accommodate potential rate changes. Review all tax codes and rounding rules.
            </li>
            <li>
              <strong>Audit Contracts and Pricing</strong>: Evaluate existing customer and supplier contracts for clauses related to VAT changes. Plan communications and update price lists, quotes, and marketing materials well in advance of any effective date.
            </li>
            <li>
              <strong>Understand New Exemptions and Proposals</strong>:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Foreign Digital Services</strong>: Since 1 April 2025, foreign suppliers of electronic services (e.g., software) are exempt from VAT registration if they supply <strong>exclusively to VAT-registered South African businesses</strong>.</li>
                <li><strong>Low-Value Imports</strong>: Be aware of the proposal to remove VAT exemption thresholds on low-value imported goods, which would affect the cost of importing small items.</li>
              </ul>
            </li>
            <li>
              <strong>Master the Fundamentals</strong>: Remember the compulsory registration threshold remains <strong>R1 million in taxable supplies over 12 months</strong>. Voluntary registration is possible if supplies exceed R50,000. Familiarize yourself with the different VAT categories (standard-rated, zero-rated, exempt) and their correct application.
            </li>
          </ol>

          <div className="flex items-center gap-4 mt-12 mb-6">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
              <Landmark className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 m-0">VAT Rate Changes and Cash Flow Planning</h2>
          </div>

          <p>The uncertainty around the 2026 rate underscores the need for flexible cash flow planning. Here’s how to model different scenarios:</p>
          <ul className="list-disc pl-6 space-y-4 mb-8">
            <li><strong>Scenario Planning</strong>: Create separate cash flow forecasts for a stable 15% rate and an increased 16% rate. This will help you visualize the impact on both your output tax (collected from customers) and input tax (paid to suppliers).</li>
            <li><strong>Manage the Transition</strong>: If a rate increase is implemented, special <strong>transitional rules</strong> will apply. You must carefully review transactions spanning the effective date (e.g., advance payments, long-term contracts) to determine the correct VAT rate. Misapplication can lead to cash shortfalls or SARS queries.</li>
            <li><strong>Pricing Strategy</strong>: Decide whether your business will absorb the potential increase or pass it on to customers. This decision will directly affect your sales volume, revenue, and VAT liability.</li>
            <li><strong>Reconcile Proactively</strong>: Meticulous record-keeping and timely VAT return submissions are essential to avoid penalties and ensure you are correctly claiming input tax deductions, which improves cash flow.</li>
          </ul>

          <div className="flex items-center gap-4 mt-12 mb-6">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 m-0">Employer Obligations for PAYE</h2>
          </div>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden border border-slate-200">
              <thead className="bg-brand-50 text-brand-900">
                <tr>
                  <th className="p-4 font-bold border-b border-brand-100">Obligation</th>
                  <th className="p-4 font-bold border-b border-brand-100">Key Action for 2026</th>
                  <th className="p-4 font-bold border-b border-brand-100">Deadline & Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Employee Tax Registration</td>
                  <td className="p-4 text-slate-600">Obtain a valid <strong>Income Tax Number</strong> for every employee.</td>
                  <td className="p-4 text-slate-600"><strong>Before February 2026</strong> reconciliation submissions. Use e@syFile, eFiling, or SARS branch services.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Monthly Submissions (EMP201)</td>
                  <td className="p-4 text-slate-600">Accurately calculate and withhold employees' tax, SDL, and UIF.</td>
                  <td className="p-4 text-slate-600">Monthly, by the 7th of the following month.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Annual Reconciliation (EMP501)</td>
                  <td className="p-4 text-slate-600">Submit the Employer Reconciliation Declaration with <strong>all employee tax numbers</strong>.</td>
                  <td className="p-4 text-slate-600">The 2026 season deadline will be announced; prepare data early.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Tax Certificates (IRP5/IT3(a))</td>
                  <td className="p-4 text-slate-600">Issue to each employee.</td>
                  <td className="p-4 text-slate-600">Aligns with the EMP501 submission deadline.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Record Keeping</td>
                  <td className="p-4 text-slate-600">Maintain all payroll records for <strong>five years</strong> from the submission date.</td>
                  <td className="p-4 text-slate-600">Essential for audits or disputes.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-8">
            Additionally, ensure your payroll software is updated with the latest <strong>2026 tax tables, rebates, and thresholds</strong> announced in the annual budget.
          </p>

          <div className="flex items-center gap-4 mt-12 mb-6">
            <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
              <MonitorCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 m-0">SARS eFiling Registration Checklist</h2>
          </div>

          <ol className="list-decimal pl-6 space-y-4 mb-8">
            <li><strong>Gather Required Documents</strong>: Before starting, prepare digital copies of identity documents, proof of business address (e.g., a utility bill less than 3 months old), and relevant business formation documents (e.g., CK1 for companies, trust deed).</li>
            <li><strong>Initiate Registration</strong>: Visit the <a href="https://www.sars.gov.za" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline font-semibold">SARS eFiling website</a> and click "REGISTER".</li>
            <li><strong>Complete Biometric Verification (if applicable)</strong>: New registrants using a South African ID will be guided through a <strong>facial recognition process</strong> via their device's camera.</li>
            <li><strong>Set Up Enhanced Security</strong>: Create a strong password (min. 8 chars, upper/lower case, number, special character) and configure <strong>Two-Factor Authentication (2FA)</strong> with your preferred contact method.</li>
            <li><strong>Add Tax Types</strong>: Once registered, navigate to the dashboard to add the relevant tax types for your business (e.g., Income Tax, VAT, PAYE).</li>
            <li><strong>Familiarize Yourself with the Platform</strong>: Explore the portals for submitting returns, making payments, and managing outstanding queries.</li>
          </ol>

          <h3 className="text-xl font-serif font-bold text-slate-900 mt-8 mb-4">Navigating Compliance with Confidence</h3>
          <p>
            The evolving tax landscape requires businesses to be agile, informed, and meticulous. The most critical immediate action is for employers to <strong>verify and obtain tax numbers for all employees</strong> to avoid 2026 reconciliation rejections. For VAT, while preparing for potential changes, ensure your foundational compliance—registration, invoicing, and filing—is flawless.
          </p>
          <p>
            Staying ahead involves <strong>regularly checking the official SARS website</strong> for final legislation and guides, and considering consultation with a <strong>registered tax practitioner</strong> for complex scenarios. Proactive adaptation is not just about avoiding penalties; it's about building a resilient and efficient financial foundation for your business's future.
          </p>

          <hr className="my-12 border-slate-200" />

          {/* Q&A Section */}
          <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-100 p-2 rounded-full">
                <HelpCircle className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 m-0">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Q: When is the deadline for obtaining employee tax numbers?</h4>
                <p className="text-slate-600">A: You must have these ready before the <strong>February 2026</strong> employer reconciliation submission. We recommend starting the verification process immediately to avoid rejections.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Q: Is the VAT increase confirmed for April 2026?</h4>
                <p className="text-slate-600">A: No, it is not yet finalized. While a 16% rate was proposed, subsequent legislation suggested maintaining 15%. Businesses should prepare their systems for both scenarios until the final <em>Rates and Monetary Amounts</em> bill is passed.</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Q: I already have an eFiling profile. Do I need to re-register for facial recognition?</h4>
                <p className="text-slate-600">A: Generally, no. Facial recognition is primarily for <strong>new</strong> registrations. However, existing users must ensure they have enabled Two-Factor Authentication (2FA) and updated their passwords to meet new security standards.</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Q: What happens if I submit my EMP501 without an employee tax number?</h4>
                <p className="text-slate-600">A: Unlike previous years where you might have received a warning, in 2026 SARS will <strong>reject</strong> the entire reconciliation. This could lead to non-compliance status and administrative penalties.</p>
              </div>
            </div>
          </section>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-xs text-yellow-800 flex gap-3">
             <div className="shrink-0 mt-0.5">
               <AlertTriangle className="w-4 h-4" />
             </div>
             <p>
               <strong>Disclaimer</strong>: This guide synthesizes information from SARS publications, government announcements, and professional tax alerts available as of December 2025. Tax laws are subject to change. This article is for informational purposes and should not be construed as formal tax advice. For advice tailored to your specific situation, please consult a qualified tax professional.
             </p>
          </div>

        </article>
      </div>
    </div>
  );
};

export default BlogPost;