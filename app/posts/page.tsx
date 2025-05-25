import { BlogHeader } from "@/components/blog-header"
import { BlogPostCard } from "@/components/blog-post-card"
import { BlogFooter } from "@/components/blog-footer"

const allPosts = [
  {
    title: "Next.js 14에서 달라진 점",
    excerpt:
      "Next.js 14 버전에서 새롭게 추가된 기능과 변경된 사항들을 자세히 알아봅니다. App Router, Server Components, 그리고 성능 최적화에 대한 내용을 다룹니다.",
    date: "2023년 12월 15일",
    tags: ["Next.js", "React", "프론트엔드"],
    slug: "nextjs-14-changes",
  },
  {
    title: "React 상태 관리 라이브러리 비교",
    excerpt:
      "Redux, Zustand, Jotai, Recoil 등 다양한 React 상태 관리 라이브러리들의 장단점을 비교 분석합니다. 어떤 상황에서 어떤 라이브러리가 적합한지 알아봅시다.",
    date: "2023년 11월 28일",
    tags: ["React", "상태관리", "프론트엔드"],
    slug: "react-state-management",
  },
  {
    title: "TypeScript 타입 시스템 심화",
    excerpt:
      "TypeScript의 고급 타입 기능을 활용하여 더 안전하고 유지보수하기 좋은 코드를 작성하는 방법을 알아봅니다. 제네릭, 유틸리티 타입, 타입 가드 등을 다룹니다.",
    date: "2023년 11월 10일",
    tags: ["TypeScript", "프론트엔드"],
    slug: "typescript-advanced-types",
  },
  {
    title: "Node.js와 Express로 RESTful API 만들기",
    excerpt:
      "Node.js와 Express 프레임워크를 사용하여 확장 가능한 RESTful API를 구축하는 방법을 단계별로 알아봅니다. 미들웨어, 라우팅, 에러 처리 등을 다룹니다.",
    date: "2023년 10월 22일",
    tags: ["Node.js", "Express", "백엔드"],
    slug: "nodejs-express-restful-api",
  },
  {
    title: "웹 성능 최적화 가이드",
    excerpt:
      "웹사이트의 성능을 향상시키기 위한 다양한 기법들을 알아봅니다. 이미지 최적화, 코드 스플리팅, 캐싱 전략 등을 다룹니다.",
    date: "2023년 10월 5일",
    tags: ["성능최적화", "웹개발"],
    slug: "web-performance-optimization",
  },
  {
    title: "CSS Grid vs Flexbox 완벽 가이드",
    excerpt:
      "CSS Grid와 Flexbox의 차이점과 각각의 사용 사례를 자세히 알아봅니다. 언제 어떤 것을 사용해야 하는지 명확하게 정리했습니다.",
    date: "2023년 9월 18일",
    tags: ["CSS", "프론트엔드"],
    slug: "css-grid-vs-flexbox",
  },
]

export default function AllPosts() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <BlogHeader />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">전체 글</h1>
          <p className="text-gray-600 dark:text-gray-400">총 {allPosts.length}개의 글이 있습니다.</p>
        </div>

        <div className="space-y-6">
          {allPosts.map((post) => (
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
      </main>
      <BlogFooter />
    </div>
  )
}
