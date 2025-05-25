import Link from "next/link"
import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"

const tags = [
  { name: "React", count: 8 },
  { name: "Next.js", count: 6 },
  { name: "TypeScript", count: 5 },
  { name: "프론트엔드", count: 12 },
  { name: "백엔드", count: 4 },
  { name: "Node.js", count: 3 },
  { name: "JavaScript", count: 7 },
  { name: "CSS", count: 4 },
  { name: "상태관리", count: 2 },
  { name: "성능최적화", count: 3 },
  { name: "웹개발", count: 9 },
  { name: "Express", count: 2 },
]

export default function TagsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <BlogHeader />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">태그</h1>
          <p className="text-gray-600 dark:text-gray-400">관심 있는 주제의 글들을 찾아보세요.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tags.map((tag) => (
            <Link
              key={tag.name}
              href={`/tags/${tag.name}`}
              className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{tag.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{tag.count}개</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <BlogFooter />
    </div>
  )
}
