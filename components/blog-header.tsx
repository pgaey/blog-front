"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="container max-w-4xl mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          개발 노트
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-gray-600 dark:hover:text-gray-300">
              홈
            </Link>
            <Link
              href="/posts"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              글
            </Link>
            <Link
              href="/tags"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              태그
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              소개
            </Link>
          </nav>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container max-w-4xl mx-auto md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-sm hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              홈
            </Link>
            <Link
              href="/posts"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              글
            </Link>
            <Link
              href="/tags"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              태그
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              소개
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
