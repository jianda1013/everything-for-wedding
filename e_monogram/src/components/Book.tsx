import { useMemo } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { getPages } from './Pages'
import './Book.css'

interface BookProps {
  startFromEnd: boolean
}

function Book({ startFromEnd }: BookProps) {
  // Get pages and arrange based on reading direction
  // Forward: Cover → Nina's story → Combination
  // Backward: Cover → Jianda's story → Combination
  const pages = useMemo(() => {
    const allPages = getPages()

    if (!startFromEnd) {
      // Forward reading: Cover → Nina's → Combination
      // Filter to include Cover, Nina's section, and Combination section
      return allPages.filter(
        (page) =>
          page.section === 'cover' ||
          page.section === 'nina' ||
          page.section === 'combination'
      )
    } else {
      // Backward reading: Cover → Jianda's → Combination
      // Extract pages in the correct order: Cover first, then Jianda's, then Combination
      const coverPage = allPages.find((page) => page.section === 'cover')
      const jiandaPages = allPages.filter((page) => page.section === 'jianda')
      const combinationPages = allPages.filter(
        (page) => page.section === 'combination'
      )
      const pages = [coverPage, ...jiandaPages, ...combinationPages]
      pages.reverse()
      return pages
    }
  }, [startFromEnd])

  return (
    <div className="book-container">
      {pages &&
        (
          // @ts-expect-error - react-pageflip types may not be fully compatible
          <HTMLFlipBook
            width={350}
            height={550}
            minWidth={250}
            maxWidth={500}
            minHeight={400}
            maxHeight={700}
            size="stretch"
            drawShadow={true}
            showCover={true}
            mobileScrollSupport={true}
            className="book"
            startPage={startFromEnd ? pages.length - 1 : 0}
          >
            {pages.map((page) => page && (
              <div key={page.id}>{page.content}</div>
            ))}
          </HTMLFlipBook>
        )
      }
    </div>
  )
}

export default Book
