import Link from "next/link"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { BlogHeader } from "@/components/blog-header"
import { BlogPostCard } from "@/components/blog-post-card"
import { BlogFooter } from "@/components/blog-footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <BlogHeader />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">최신 글</h2>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="검색..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-[200px]"
              />
            </div>
          </div>

          <div className="space-y-6">
            <BlogPostCard
              title="Next.js 14에서 달라진 점"
              excerpt="Next.js 14 버전에서 새롭게 추가된 기능과 변경된 사항들을 자세히 알아봅니다. App Router, Server Components, 그리고 성능 최적화에 대한 내용을 다룹니다."
              date="2023년 12월 15일"
              tags={["Next.js", "React", "프론트엔드"]}
              slug="nextjs-14-changes"
            />

            <BlogPostCard
              title="React 상태 관리 라이브러리 비교"
              excerpt="Redux, Zustand, Jotai, Recoil 등 다양한 React 상태 관리 라이브러리들의 장단점을 비교 분석합니다. 어떤 상황에서 어떤 라이브러리가 적합한지 알아봅시다."
              date="2023년 11월 28일"
              tags={["React", "상태관리", "프론트엔드"]}
              slug="react-state-management"
            />

            <BlogPostCard
              title="TypeScript 타입 시스템 심화"
              excerpt="TypeScript의 고급 타입 기능을 활용하여 더 안전하고 유지보수하기 좋은 코드를 작성하는 방법을 알아봅니다. 제네릭, 유틸리티 타입, 타입 가드 등을 다룹니다."
              date="2023년 11월 10일"
              tags={["TypeScript", "프론트엔드"]}
              slug="typescript-advanced-types"
            />

            <BlogPostCard
              title="Node.js와 Express로 RESTful API 만들기"
              excerpt="Node.js와 Express 프레임워크를 사용하여 확장 가능한 RESTful API를 구축하는 방법을 단계별로 알아봅니다. 미들웨어, 라우팅, 에러 처리 등을 다룹니다."
              date="2023년 10월 22일"
              tags={["Node.js", "Express", "백엔드"]}
              slug="nodejs-express-restful-api"
            />
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/posts"
              className="px-4 py-2 text-sm border border-gray-200 dark:border-gray-800 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              더 보기
            </Link>
          </div>
        </div>
      </main>
      <BlogFooter />
    </div>
  )
}
