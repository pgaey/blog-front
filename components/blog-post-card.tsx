import Link from "next/link"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  tags: string[]
  slug: string
}

export function BlogPostCard({ title, excerpt, date, tags, slug }: BlogPostCardProps) {
  return (
    <article className="border-b border-gray-100 dark:border-gray-800 pb-6">
      <Link href={`/posts/${slug}`} className="block group">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{excerpt}</p>
      </Link>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
        <time className="text-xs text-gray-500 dark:text-gray-500">{date}</time>
      </div>
    </article>
  )
}
