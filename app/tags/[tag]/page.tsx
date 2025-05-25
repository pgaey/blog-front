import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { BlogHeader } from "@/components/blog-header"
import { BlogPostCard } from "@/components/blog-post-card"
import { BlogFooter } from "@/components/blog-footer"

// 실제로는 데이터베이스에서 태그별로 필터링된 포스트를 가져올 것
const getPostsByTag = (tag: string) => {
  const allPosts = [
    {
      title: "Next.js 14에서 달라진 점",
      excerpt: "Next.js 14 버전에서 새롭게 추가된 기능과 변경된 사항들을 자세히 알아봅니다.",
      date: "2023년 12월 15일",
      tags: ["Next.js", "React", "프론트엔드"],
      slug: "nextjs-14-changes",
    },
    {
      title: "React 상태 관리 라이브러리 비교",
      excerpt: "Redux, Zustand, Jotai, Recoil 등 다양한 React 상태 관리 라이브러리들의 장단점을 비교 분석합니다.",
      date: "2023년 11월 28일",
      tags: ["React", "상태관리", "프론트엔드"],
      slug: "react-state-management",
    },
    {
      title: "TypeScript 타입 시스템 심화",
      excerpt:
        "TypeScript의 고급 타입 기능을 활용하여 더 안전하고 유지보수하기 좋은 코드를 작성하는 방법을 알아봅니다.",
      date: "2023년 11월 10일",
      tags: ["TypeScript", "프론트엔드"],
      slug: "typescript-advanced-types",
    },
  ]

  return allPosts.filter((post) => post.tags.includes(tag))
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getPostsByTag(params.tag)

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <BlogHeader />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/tags"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          태그 목록으로 돌아가기
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">#{params.tag}</h1>
          <p className="text-gray-600 dark:text-gray-400">{posts.length}개의 글이 있습니다.</p>
        </div>

        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                tags={post.tags}
                slug={post.slug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">이 태그에 해당하는 글이 없습니다.</p>
          </div>
        )}
      </main>
      <BlogFooter />
    </div>
  )
}
