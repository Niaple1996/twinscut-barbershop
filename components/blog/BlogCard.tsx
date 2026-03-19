import Link from 'next/link'
import type { BlogPost } from '@/types'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article>
      <Link
        href={`/blog/${post.slug}`}
        className="group block card-dark overflow-hidden h-full hover:border-[rgba(201,168,76,0.25)]"
      >
        {/* Category + read time */}
        <div
          className="px-6 pt-5 pb-4"
          style={{ borderBottom: '1px solid #1a1a1a' }}
        >
          <div className="flex items-center justify-between">
            <span
              className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}
            >
              {post.categoryLabel}
            </span>
            <span className="text-[11px]" style={{ color: '#5C564E' }}>{post.readTime}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <h3
            className="font-playfair text-[1.15rem] leading-snug group-hover:text-[#C9A84C] transition-colors"
            style={{ color: '#F5F0E8' }}
          >
            {post.title}
          </h3>
          <p className="text-[13px] leading-relaxed line-clamp-2" style={{ color: '#5C564E' }}>
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid #1a1a1a' }}>
            <time className="text-[11px]" style={{ color: '#3a3530' }} dateTime={post.datePublished}>
              {formatDate(post.datePublished)}
            </time>
            <span
              className="flex items-center gap-1.5 text-[12px] font-semibold group-hover:gap-2.5 transition-all"
              style={{ color: '#C9A84C' }}
            >
              Lesen
              <ArrowRightIcon size={12} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
