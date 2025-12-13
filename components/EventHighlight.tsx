import React, { useState } from 'react';
import { Target, Check, TrendingUp, ArrowRight, RefreshCcw, ShieldAlert, BarChart3, Brain } from 'lucide-react';

type Option = {
  label: string;
  score: number;
};

type Question = {
  id: number;
  text: string;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "How clear is your business direction for the next 12–24 months?",
    options: [
      { label: "I have a documented plan with milestones and accountability", score: 3 },
      { label: "I have clear goals but struggle with execution", score: 2 },
      { label: "I have ideas but nothing written or tracked", score: 1 },
      { label: "I have no documented goals or strategy", score: 0 },
    ]
  },
  {
    id: 2,
    text: "How confident are you in understanding and managing your business finances?",
    options: [
      { label: "I use financial reports (cash flow, budgets, forecasts) to guide decisions", score: 3 },
      { label: "I have basic records but don’t use them for decisions", score: 2 },
      { label: "I track income and expenses irregularly", score: 1 },
      { label: "I don’t separate personal and business finances", score: 0 },
    ]
  },
  {
    id: 3,
    text: "How compliant and risk-ready is your business right now?",
    options: [
      { label: "I’m fully compliant with systems in place to manage risk", score: 3 },
      { label: "I’m compliant but reactive when issues arise", score: 2 },
      { label: "I’m registered but behind on CIPC/SARS requirements", score: 1 },
      { label: "I’m not registered or unsure of my compliance status", score: 0 },
    ]
  },
  {
    id: 4,
    text: "How well do your systems support both performance and wellbeing?",
    options: [
      { label: "I have clear systems, delegation, and work-life balance", score: 3 },
      { label: "My operations are structured but not optimised", score: 2 },
      { label: "I have some systems but still feel stretched", score: 1 },
      { label: "Everything depends on me and feels overwhelming", score: 0 },
    ]
  }
];

const FinancialHealthScore: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handleStart = () => setStep('quiz');

  const handleAnswer = (score: number) => {
    const newScore = totalScore + score;
    if (currentQuestion < QUESTIONS.length - 1) {
      setTotalScore(newScore);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTotalScore(newScore);
      setStep('result');
    }
  };

  const resetQuiz = () => {
    setStep('intro');
    setCurrentQuestion(0);
    setTotalScore(0);
  };

  const getResult = () => {
    const maxScore = QUESTIONS.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage >= 80) return {
      title: "Strategic Powerhouse",
      description: "You have clear direction, financial control, and solid systems. Focus on advanced growth strategies and legacy building to maintain this momentum.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      icon: TrendingUp
    };
    if (percentage >= 50) return {
      title: "Growth in Progress",
      description: "You have a foundation, but gaps in planning, compliance, or systems are creating friction. Targeted improvements will unlock capacity and peace of mind.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      icon: BarChart3
    };
    return {
      title: "Foundation Needs Focus",
      description: "Your business is at risk due to gaps in strategy or compliance. Immediate action is needed to stabilize operations and reduce overwhelm.",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      icon: ShieldAlert
    };
  };

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-integratedwellth/30min'
      });
    } else {
      window.open('https://calendly.com/enquiries-integratedwellth/30min', '_blank');
    }
  };

  const result = getResult();
  const ResultIcon = result.icon;

  return (
    <section id="assessment" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
          
          {/* Left Side: Visuals */}
          <div className="bg-slate-900 text-white p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-block p-3 bg-white/10 rounded-xl mb-6 backdrop-blur-sm">
                <Target className="w-8 h-8 text-brand-400" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">Business Clarity Check</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Assess your strategic direction, financial control, compliance, and operational wellbeing in minutes.
              </p>
            </div>
            
            <div className="mt-8 relative z-10 space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium text-brand-200">
                <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center">
                   <Check className="w-4 h-4" /> 
                </div>
                Confidential
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-brand-200">
                 <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center">
                   <Check className="w-4 h-4" /> 
                </div>
                Instant Insights
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-brand-200">
                 <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center">
                   <Check className="w-4 h-4" /> 
                </div>
                Actionable Advice
              </div>
            </div>

            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-10 -mb-10"></div>
          </div>

          {/* Right Side: Interactive */}
          <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center min-h-[450px]">
            {step === 'intro' && (
              <div className="text-center animate-in fade-in duration-500">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Gain Clarity on Your Business</h4>
                <p className="text-slate-500 mb-8">
                  Take our quick diagnostic check to evaluate your strategy, compliance readiness, and systems.
                </p>
                <button 
                  onClick={handleStart}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/20 flex items-center justify-center gap-2 mx-auto"
                >
                  Start Assessment <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step === 'quiz' && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">
                    Question {currentQuestion + 1} / {QUESTIONS.length}
                  </span>
                  <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-500 transition-all duration-500 ease-out"
                      style={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-6 leading-snug">
                  {QUESTIONS[currentQuestion].text}
                </h4>

                <div className="space-y-3">
                  {QUESTIONS[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option.score)}
                      className="w-full p-4 text-left border border-slate-200 rounded-xl hover:border-brand-500 hover:bg-brand-50 transition-all group flex items-center justify-between"
                    >
                      <span className="font-medium text-slate-700 group-hover:text-brand-900">{option.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-600 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 'result' && (
              <div className="text-center animate-in fade-in zoom-in duration-500">
                <div className={`inline-flex p-4 rounded-full ${result.bgColor} mb-6`}>
                  <ResultIcon className={`w-8 h-8 ${result.color}`} />
                </div>
                
                <h4 className={`text-2xl font-serif font-bold mb-3 ${result.color}`}>
                  {result.title}
                </h4>
                
                <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
                  {result.description}
                </p>

                <div className="space-y-3">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center justify-center w-full py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors shadow-lg hover:shadow-brand-500/20"
                  >
                    Book a Strategy Review
                  </button>
                  <button 
                    onClick={resetQuiz}
                    className="flex items-center justify-center gap-2 w-full py-3 text-slate-400 hover:text-slate-600 font-medium transition-colors text-sm"
                  >
                    <RefreshCcw className="w-4 h-4" /> Retake Assessment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialHealthScore;
