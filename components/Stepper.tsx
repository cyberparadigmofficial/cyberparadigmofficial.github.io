import React, { useState, ReactElement, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';

interface StepProps {
    children: React.ReactNode;
}

export const Step: React.FC<StepProps> = ({ children }) => {
    return <div className="w-full">{children}</div>;
};

interface StepperProps {
    children: ReactElement<StepProps>[];
    initialStep?: number;
    onStepChange?: (step: number) => void;
    onFinalStepCompleted?: () => void;
    backButtonText?: string;
    nextButtonText?: string;
    submitButtonText?: string;
    isSubmitting?: boolean;
}

const Stepper: React.FC<StepperProps> = ({
    children,
    initialStep = 1,
    onStepChange,
    onFinalStepCompleted,
    backButtonText = "Previous",
    nextButtonText = "Next",
    submitButtonText = "Submit",
    isSubmitting = false
}) => {
    const [currentStep, setCurrentStep] = useState(initialStep);
    const totalSteps = React.Children.count(children);

    useEffect(() => {
        if (onStepChange) {
            onStepChange(currentStep);
        }
    }, [currentStep, onStepChange]);

    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleNext = () => {
        // Validation Logic
        if (containerRef.current) {
            const inputs = containerRef.current.querySelectorAll('input, select, textarea');
            let isValid = true;
            for (const input of inputs) {
                if (!(input as HTMLInputElement).checkValidity()) {
                    isValid = false;
                    (input as HTMLInputElement).reportValidity();
                    break; // stop at first invalid input to focus/report
                }
            }
            if (!isValid) return;
        }

        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1);
        } else {
            if (onFinalStepCompleted) {
                onFinalStepCompleted();
            }
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    // Calculate progress percentage
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                    {Array.from({ length: totalSteps }).map((_, index) => {
                        const stepNumber = index + 1;
                        const isCompleted = stepNumber < currentStep;
                        const isCurrent = stepNumber === currentStep;

                        return (
                            <React.Fragment key={stepNumber}>
                                <div className="flex flex-col items-center relative z-10">
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            backgroundColor: isCompleted || isCurrent ? '#E07A5F' : '#FFF',
                                            borderColor: isCompleted || isCurrent ? '#E07A5F' : '#D2D7DF',
                                            color: isCompleted || isCurrent ? '#FFF' : '#8A897C',
                                        }}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold transition-colors duration-300`}
                                    >
                                        {isCompleted ? <Check className="w-5 h-5" /> : stepNumber}
                                    </motion.div>
                                    <div className={`text-xs mt-2 font-medium ${isCurrent ? 'text-terracotta' : 'text-[#8A897C]'}`}>
                                        Step {stepNumber}
                                    </div>
                                </div>
                                {stepNumber < totalSteps && (
                                    <div className="flex-1 h-[2px] mx-4 bg-[#D2D7DF] relative">
                                        <motion.div
                                            initial={{ width: '0%' }}
                                            animate={{ width: isCompleted ? '100%' : '0%' }}
                                            className="absolute top-0 left-0 h-full bg-terracotta transition-all duration-500"
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            {/* Step Content */}
            <div ref={containerRef} className="bg-white rounded-3xl border border-[#D2D7DF] p-8 md:p-12 shadow-sm relative overflow-hidden min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col"
                    >
                        {children[currentStep - 1]}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
                <button
                    onClick={handleBack}
                    disabled={currentStep === 1 || isSubmitting}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${currentStep === 1 || isSubmitting
                        ? 'text-[#BDBBB0] cursor-not-allowed bg-transparent'
                        : 'text-[#353535] hover:text-terracotta hover:bg-terracotta/5'
                        }`}
                >
                    <ChevronLeft className="w-5 h-5" />
                    {backButtonText}
                </button>

                <button
                    onClick={handleNext}
                    disabled={isSubmitting}
                    className={`flex items-center gap-3 bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-[0.98] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                    {currentStep === totalSteps ? (
                        isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            submitButtonText
                        )
                    ) : (
                        nextButtonText
                    )}
                    {currentStep !== totalSteps && !isSubmitting && <ChevronRight className="w-5 h-5" />}
                </button>
            </div>
        </div>
    );
};

export default Stepper;
