import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    className?: string;
    required?: boolean;
    name?: string;
}

export const Select: React.FC<SelectProps> = ({
    label,
    value,
    onChange,
    options,
    placeholder = "Select an option",
    className,
    required,
    name
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(opt => opt.value === value);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className={cn("relative", className)} ref={containerRef}>
            {label && (
                <label className="block text-sm font-semibold text-[#353535] mb-2">
                    {label} {required && "*"}
                </label>
            )}

            {/* Hidden Input for Form Validation */}
            <input
                type="text"
                className="sr-only"
                value={value}
                onChange={() => { }}
                required={required}
                name={name}
                onInvalid={(e) => {
                    e.preventDefault();
                    setIsOpen(true);
                    // Optional: Shake animation or visual error feedback
                }}
            />

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full px-4 py-3.5 rounded-xl border-2 text-left flex items-center justify-between transition-all outline-none bg-white",
                    isOpen ? "border-terracotta ring-2 ring-terracotta/10" : "border-[#D2D7DF] hover:border-[#BDBBB0]",
                    !value && "text-[#BDBBB0]",
                    value && "text-[#353535]"
                )}
            >
                <span className="truncate">
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown
                    className={cn(
                        "w-5 h-5 text-[#BDBBB0] transition-transform duration-200",
                        isOpen && "transform rotate-180 text-terracotta"
                    )}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-[#D2D7DF] overflow-hidden max-h-60 overflow-y-auto"
                    >
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => handleSelect(option.value)}
                                className={cn(
                                    "w-full px-4 py-3 text-left text-sm transition-colors flex items-center justify-between group",
                                    value === option.value
                                        ? "bg-terracotta/5 text-terracotta font-medium"
                                        : "text-[#353535] hover:bg-gray-50"
                                )}
                            >
                                {option.label}
                                {value === option.value && (
                                    <Check className="w-4 h-4 text-terracotta" />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
