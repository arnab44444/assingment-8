import React from 'react';
import questions from './QA.json'
import { FaCalendarAlt } from 'react-icons/fa';

const QuestionsBlog = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
                    Blogs
                </h1>
                <p className="text-md text-center text-gray-600 mb-6">
                    Let's explore some basic concepts that will make you a good developer
                </p>
                <div className="space-y-6">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm"
                        >
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                {item.question}
                            </h2>
                            <p className="text-sm text-gray-600 mb-4">
                                <span className="font-semibold text-gray-800">Answer:</span> {item.answer}
                            </p>
                            <div className="flex items-center text-gray-500 text-sm">
                                <FaCalendarAlt className="mr-2" />
                                <span>Added at {new Date(item.timestamp).toLocaleDateString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionsBlog;