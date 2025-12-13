import React, { useState } from 'react';
import { Calculator, Check, TrendingUp, ArrowRight, RefreshCcw, ShieldAlert, BarChart3 } from 'lucide-react';

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
    text: "How often do you review your business financial statements?",
    options: [
      { label: "Weekly or Monthly", score: 3 },
      { label: "Only during tax season", score: 1 },
      { label: "Rarely or never", score: 0 },
    ]
  },
  {
    id: 2,
    text: "Are all your employees registered with valid Income Tax Numbers for 2026 compliance?",
    options: [
      { label: "Yes, fully verified", score: 3 },
      { label: "Working on it / Unsure", score: 1 },
      { label: "No", score: 0 },
    ]
  },
  {
    id: 3,
    text: "Do you have a clear strategy for VAT changes and cash flow?",
    options: [
      { label: "Yes, we have a forecast", score: 3 },
      { label: "We have some ideas", score: 1 },
      { label: "No strategy in place", score: 0 },
    ]
  },
  {
    id: 4,
    text: "How would you rate your current financial stress level?",
    options: [
      { label: "Low - I feel in control", score: 3 },
      { label: "Moderate - Occasional worry", score: 1 },
      { label: "High - Keeps me up at night", score: 0 },
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
      title: "Financial Fortress",
      description: "You're in a strong position! Your financial habits are solid. Let's focus on advanced wealth preservation and growth strategies to maintain this edge.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      icon: TrendingUp
    };
    if (percentage >= 50) return {
      title: "Growing Pains",
      description: "You have a foundation, but gaps in compliance or cash flow visibility could hold you back. A few strategic adjustments will unlock significant peace of mind.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      icon: BarChart3
    };
    return {
      title: "Critical Care Needed",
      description: "Your business health is at risk. Immediate action is recommended to secure cash flow and ensure 2026 tax compliance. We can help you turn this around.",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      icon: ShieldAlert
    };
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
                <Calculator className="w-8 h-8 text-brand-400" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">Financial Health Score</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Discover your business's financial maturity in under 60 seconds. See how you stack up for 2026.
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
                Instant Analysis
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
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Is your business 2026-ready?</h4>
                <p className="text-slate-500 mb-8">
                  Take our quick diagnostic quiz to evaluate your cash flow, tax readiness, and financial strategy.
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
                  <a 
                    href="#contact" 
                    className="flex items-center justify-center w-full py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors shadow-lg hover:shadow-brand-500/20"
                  >
                    Book a 15-Minute Review
                  </a>
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