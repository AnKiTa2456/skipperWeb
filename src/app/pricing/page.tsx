import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/ui/Footer'
import { Check, Star } from 'lucide-react'
import BadgeButton from '@/components/ui/badge-button'
import Image from 'next/image'

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with basic components",
      features: [
        "Access to 50+ basic components",
        "Community support",
        "Basic documentation",
        "MIT License",
        "Regular updates"
      ],
      limitations: [
        "No commercial use",
        "Limited customization",
        "No premium support"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Best for individual developers and small teams",
      features: [
        "Access to 200+ premium components",
        "Advanced customization options",
        "Priority email support",
        "Commercial license included",
        "Weekly component updates",
        "Private Discord community",
        "Component API access",
        "Custom theme builder"
      ],
      limitations: [],
      popular: true,
      buttonText: "Start Pro Trial",
      buttonVariant: "primary"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Dedicated support manager",
        "Custom component development",
        "White-label options",
        "Advanced analytics",
        "On-premise deployment",
        "SLA guarantee",
        "Custom integrations"
      ],
      limitations: [],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline"
    }
  ]

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to Pro features until the end of your billing period."
    },
    {
      question: "Do you offer discounts for students or non-profits?",
      answer: "Yes! We offer 50% discounts for students and non-profit organizations. Contact us at support@skiper-ui.com with proof of status."
    },
    {
      question: "What's included in the commercial license?",
      answer: "The commercial license allows you to use Skiper UI components in commercial products, including SaaS applications, websites, and mobile apps."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with Pro or Enterprise plans, contact us within 30 days for a full refund."
    },
    {
      question: "Do you offer annual billing discounts?",
      answer: "Yes! Save 20% when you choose annual billing for Pro and Enterprise plans."
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <BadgeButton>Simple Pricing</BadgeButton>
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mt-8 mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Start free and scale as you grow. All plans include our core components and regular updates.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-black dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      /{plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <li key={limitIndex} className="flex items-center opacity-60">
                      <div className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-gray-500 dark:text-gray-400 line-through">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-700'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-neutral-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-neutral-900 rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-6 font-semibold text-black dark:text-white">Features</th>
                  <th className="p-6 font-semibold text-black dark:text-white">Free</th>
                  <th className="p-6 font-semibold text-blue-600">Pro</th>
                  <th className="p-6 font-semibold text-black dark:text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-6 text-gray-700 dark:text-gray-300">Components</td>
                  <td className="p-6 text-center">50+</td>
                  <td className="p-6 text-center font-semibold text-blue-600">200+</td>
                  <td className="p-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-6 text-gray-700 dark:text-gray-300">Commercial License</td>
                  <td className="p-6 text-center">❌</td>
                  <td className="p-6 text-center text-green-500">✅</td>
                  <td className="p-6 text-center text-green-500">✅</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-6 text-gray-700 dark:text-gray-300">Priority Support</td>
                  <td className="p-6 text-center">❌</td>
                  <td className="p-6 text-center text-green-500">✅</td>
                  <td className="p-6 text-center text-green-500">✅</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-6 text-gray-700 dark:text-gray-300">Custom Development</td>
                  <td className="p-6 text-center">❌</td>
                  <td className="p-6 text-center">❌</td>
                  <td className="p-6 text-center text-green-500">✅</td>
                </tr>
                <tr>
                  <td className="p-6 text-gray-700 dark:text-gray-300">Team Members</td>
                  <td className="p-6 text-center">1</td>
                  <td className="p-6 text-center">5</td>
                  <td className="p-6 text-center">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
            Trusted by Developers Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                &ldquo;The Pro plan has everything I need. The components are high-quality and the support is excellent.&rdquo;
              </p>
              <div className="flex items-center">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                  alt="User"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-black dark:text-white">Alex Johnson</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Frontend Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                &ldquo;Enterprise plan saved us months of development time. The custom components are exactly what we needed.&rdquo;
              </p>
              <div className="flex items-center">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                  alt="User"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-black dark:text-white">Sarah Chen</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">CTO, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                &ldquo;Started with Free, upgraded to Pro. The value is incredible. Highly recommend!&rdquo;
              </p>
              <div className="flex items-center">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  alt="User"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-black dark:text-white">Mike Rodriguez</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Indie Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-neutral-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of developers building amazing things with Skiper UI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors">
              View Components
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Pricing