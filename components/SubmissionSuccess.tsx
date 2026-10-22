import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SubmissionSuccess: React.FC = () => {
    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl border border-[#D2D7DF] p-12 text-center shadow-lg">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
                <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>

            <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-[#353535] mb-4"
            >
                Application Submitted!
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[#353535]/70 text-lg mb-8 leading-relaxed"
            >
                Thank you for reaching out. We've received your application and will get back to you shortly. A confirmation email has been sent to your inbox.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
            >
                <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#D2D7DF] font-bold text-[#353535] hover:bg-[#D2D7DF]/20 transition-all">
                    <Home className="w-5 h-5" />
                    Back to Home
                </Link>
                <Link to="/team" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-terracotta text-white font-bold hover:bg-terracotta/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Meet the Team
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </motion.div>
        </div>
    );
};

export default SubmissionSuccess;
