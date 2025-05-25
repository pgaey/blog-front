import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BlogSidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-muted"
            />
          </div>
          <CardTitle>김개발</CardTitle>
          <CardDescription>프론트엔드 개발자</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-center text-muted-foreground">
            웹 개발과 새로운 기술에 관심이 많은 개발자입니다. React, Next.js, TypeScript를 주로 사용합니다.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">Github</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:example@email.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">구독하기</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">인기 태그</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">프론트엔드</Badge>
            <Badge variant="secondary">백엔드</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">CSS</Badge>
            <Badge variant="secondary">HTML</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">인기 시리즈</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Link href="#" className="block text-sm hover:underline">
            Next.js로 블로그 만들기 (5)
          </Link>
          <Link href="#" className="block text-sm hover:underline">
            TypeScript 기초부터 실전까지 (8)
          </Link>
          <Link href="#" className="block text-sm hover:underline">
            React 상태 관리 마스터하기 (6)
          </Link>
          <Link href="#" className="block text-sm hover:underline">
            웹 성능 최적화 가이드 (4)
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
