import Link from "next/link"

export function BlogFooter() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 py-6 bg-white dark:bg-gray-950">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href="/"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
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
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-500">© 2023 개발 노트. All rights reserved.</p>
      </div>
    </footer>
  )
}
