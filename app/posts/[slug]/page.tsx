import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"

// 실제로는 데이터베이스나 CMS에서 가져올 데이터
const mockPost = {
  title: "Next.js 14에서 달라진 점",
  content: `
# Next.js 14의 주요 변화

Next.js 14가 출시되면서 많은 개발자들이 새로운 기능들에 대해 궁금해하고 있습니다. 이번 포스트에서는 주요 변화점들을 살펴보겠습니다.

## 1. App Router의 안정화

App Router가 이제 완전히 안정화되었습니다. 기존의 Pages Router와 비교했을 때 다음과 같은 장점이 있습니다:

- 더 나은 성능
- 향상된 개발자 경험
- 서버 컴포넌트 지원

## 2. Server Actions

Server Actions는 서버에서 실행되는 함수를 클라이언트에서 직접 호출할 수 있게 해주는 기능입니다.

\`\`\`javascript
async function createPost(formData) {
  'use server'
  
  const title = formData.get('title')
  const content = formData.get('content')
  
  // 데이터베이스에 저장
  await db.post.create({
    data: { title, content }
  })
}
\`\`\`

## 3. 성능 최적화

Next.js 14에서는 다음과 같은 성능 최적화가 이루어졌습니다:

- 빌드 시간 단축
- 메모리 사용량 감소
- 더 빠른 Hot Reload

## 결론

Next.js 14는 개발자 경험과 성능 모두를 크게 향상시킨 버전입니다. 새로운 프로젝트를 시작한다면 적극적으로 고려해볼 만합니다.
  `,
  date: "2023년 12월 15일",
  readTime: "5분",
  tags: ["Next.js", "React", "프론트엔드"],
  author: "김개발",
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <BlogHeader />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          목록으로 돌아가기
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{mockPost.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{mockPost.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{mockPost.readTime} 소요</span>
              </div>
              <span>by {mockPost.author}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {mockPost.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </Link>
              ))}
            </div>
          </header>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="whitespace-pre-wrap leading-relaxed">{mockPost.content}</div>
          </div>
        </article>
      </main>
      <BlogFooter />
    </div>
  )
}
