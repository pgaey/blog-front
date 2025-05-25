import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { Github, Twitter, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <BlogHeader />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-8">소개</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">안녕하세요! 👋</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                웹 개발에 관심이 많은 프론트엔드 개발자입니다. 새로운 기술을 배우고 경험을 공유하는 것을 좋아합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">주요 기술 스택</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Tailwind CSS",
                  "Git",
                  "Vercel",
                  "Figma",
                ].map((tech) => (
                  <div key={tech} className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md text-sm text-center">
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">관심 분야</h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 프론트엔드 개발 및 사용자 경험 개선</li>
                <li>• 웹 성능 최적화</li>
                <li>• 새로운 JavaScript/TypeScript 기능</li>
                <li>• React 생태계와 상태 관리</li>
                <li>• 디자인 시스템과 컴포넌트 설계</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">프로젝트</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium">개인 블로그</h3>
                    <Link
                      href="https://github.com"
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      target="_blank"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Next.js와 Tailwind CSS로 만든 미니멀한 개인 블로그
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">연락처</h2>
              <div className="flex gap-4">
                <Link
                  href="https://github.com"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  target="_blank"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  target="_blank"
                >
                  <Twitter className="h-5 w-5" />
                  <span>Twitter</span>
                </Link>
                <Link
                  href="mailto:example@email.com"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <BlogFooter />
    </div>
  )
}
