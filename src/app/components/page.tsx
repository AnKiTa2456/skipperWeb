import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/ui/Footer'
import { Code, Eye, Star, Download, Heart } from 'lucide-react'
import BadgeButton from '@/components/ui/badge-button'
import Link from 'next/link'

const Components = () => {
  const components = [
    {
      id: 1,
      name: "Animated Button",
      description: "Beautiful animated buttons with hover effects and multiple variants",
      category: "Buttons",
      downloads: "2.3k",
      likes: 456,
      preview: "https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Button+Preview",
      tags: ["animation", "hover", "variants"],
      featured: true
    },
    {
      id: 2,
      name: "Card Carousel",
      description: "Interactive card carousel with smooth animations and touch support",
      category: "Layout",
      downloads: "1.8k",
      likes: 324,
      preview: "https://via.placeholder.com/300x200/059669/FFFFFF?text=Carousel+Preview",
      tags: ["carousel", "cards", "animation"],
      featured: true
    },
    {
      id: 3,
      name: "Modal Dialog",
      description: "Accessible modal dialogs with backdrop blur and keyboard navigation",
      category: "Overlays",
      downloads: "3.1k",
      likes: 678,
      preview: "https://via.placeholder.com/300x200/DC2626/FFFFFF?text=Modal+Preview",
      tags: ["modal", "dialog", "accessibility"],
      featured: false
    },
    {
      id: 4,
      name: "Input Field",
      description: "Customizable input fields with validation and error states",
      category: "Forms",
      downloads: "4.2k",
      likes: 892,
      preview: "https://via.placeholder.com/300x200/7C3AED/FFFFFF?text=Input+Preview",
      tags: ["input", "forms", "validation"],
      featured: true
    },
    {
      id: 5,
      name: "Navigation Menu",
      description: "Responsive navigation menus with dropdown support",
      category: "Navigation",
      downloads: "2.7k",
      likes: 543,
      preview: "https://via.placeholder.com/300x200/EA580C/FFFFFF?text=Nav+Preview",
      tags: ["navigation", "menu", "responsive"],
      featured: false
    },
    {
      id: 6,
      name: "Data Table",
      description: "Sortable and filterable data tables with pagination",
      category: "Data Display",
      downloads: "1.9k",
      likes: 387,
      preview: "https://via.placeholder.com/300x200/0891B2/FFFFFF?text=Table+Preview",
      tags: ["table", "data", "pagination"],
      featured: false
    }
  ]

  const categories = ["All", "Buttons", "Forms", "Layout", "Navigation", "Overlays", "Data Display"]

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <BadgeButton>Component Library</BadgeButton>
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mt-8 mb-6">
            Beautiful Components
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Copy-paste ready components built with React, Next.js, and Tailwind CSS.
            Save hours of development time with our pre-built UI components.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Components</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15k+</div>
              <div className="text-gray-600 dark:text-gray-300">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2.8k</div>
              <div className="text-gray-600 dark:text-gray-300">Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">MIT</div>
              <div className="text-gray-600 dark:text-gray-300">License</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Components Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((component) => (
              <div
                key={component.id}
                className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Component Preview */}
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-700 dark:to-neutral-600 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {component.category === "Buttons" && "🔘"}
                    {component.category === "Forms" && "📝"}
                    {component.category === "Layout" && "📐"}
                    {component.category === "Navigation" && "🧭"}
                    {component.category === "Overlays" && "📋"}
                    {component.category === "Data Display" && "📊"}
                  </div>
                  {component.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Component Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
                        {component.name}
                      </h3>
                      <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                        {component.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {component.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {component.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {component.downloads}
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {component.likes}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors">
                      <Code className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of developers using Skiper UI components to build faster and better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                View Pricing
              </button>
            </Link>
            <Link href="/newsletter">
              <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors">
                Get Updates
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Components