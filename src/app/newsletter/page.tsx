import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/ui/Footer'
import { Mail, CheckCircle, Star, Users, TrendingUp } from 'lucide-react'
import BadgeButton from '@/components/ui/badge-button'
import Image from 'next/image'

const Newsletter = () => {
  const features = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Weekly Updates",
      description: "Get the latest UI components, design trends, and development tips delivered to your inbox every week."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Exclusive Content",
      description: "Access to premium components, templates, and early-bird discounts on new releases."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Access",
      description: "Join a community of 10,000+ developers and designers sharing their best practices and projects."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Industry Insights",
      description: "Stay ahead with insights on React, Next.js, Tailwind CSS, and modern web development trends."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      content: "The newsletter has been invaluable for staying updated with the latest React patterns and UI trends.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mike Johnson",
      role: "UI/UX Designer",
      content: "Love the component showcases and design inspiration. It's become my go-to resource.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Alex Rodriguez",
      role: "Full Stack Developer",
      content: "The code examples and tutorials are top-notch. Helped me level up my development skills significantly.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <BadgeButton>Stay Updated</BadgeButton>
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mt-8 mb-6">
            Join Our Newsletter
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get weekly insights, exclusive components, and stay ahead in modern web development.
            Join 10,000+ developers who trust our newsletter.
          </p>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto mb-12">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-neutral-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
            What You&apos;ll Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10,000+</div>
              <div className="text-gray-600 dark:text-gray-300">Subscribers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-300">Weekly Issues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-300">Open Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-neutral-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
            What Our Subscribers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-black dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
            Ready to Level Up Your Development?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of developers who are already getting value from our newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Subscribe Now
            </button>
          </div>
          <div className="flex items-center justify-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
            Join 10,000+ developers
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Newsletter