import { useMemo, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import HTMLFlipBook from 'react-pageflip'
import { usePages } from './Pages'
import './Book.css'

function Book() {
  const [searchParams, setSearchParams] = useSearchParams()
  const flipBookRef = useRef<any>(null)
  const allPages = usePages()

  // Get direction from query params, default to 'forward'
  const direction = searchParams.get('direction') || 'forward'
  const startFromEnd = direction === 'backward'

  // Get page number from query params
  const pageParam = searchParams.get('page')
  const initialPage = pageParam ? parseInt(pageParam, 10) : undefined

  // Get pages and arrange based on reading direction
  // Forward: Cover → Nina's story → Combination
  // Backward: Cover → Jianda's story → Combination
  const pages = useMemo(() => {

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
  }, [startFromEnd, allPages])

  // Calculate start page
  const startPage = useMemo(() => {
    if (initialPage !== undefined && !isNaN(initialPage)) {
      // Ensure page is within valid range
      return Math.max(0, Math.min(initialPage, pages.length - 1))
    }
    return startFromEnd ? pages.length - 1 : 0
  }, [initialPage, startFromEnd, pages.length])

  // Update URL when page changes
  const handlePageFlip = (e: any) => {
    const newPage = typeof e === 'number' ? e : (e?.data ?? e?.page ?? 0)
    const currentPageFromUrl = searchParams.get('page')
    const currentPageNum = currentPageFromUrl ? parseInt(currentPageFromUrl, 10) : startPage
    
    // Only update if page actually changed
    if (newPage !== currentPageNum && !isNaN(newPage)) {
      setSearchParams((prev: URLSearchParams) => {
        const newParams = new URLSearchParams(prev)
        newParams.set('page', newPage.toString())
        return newParams
      }, { replace: true })
    }
  }

  // Sync page when URL changes (for back/forward navigation)
  useEffect(() => {
    if (flipBookRef.current && initialPage !== undefined && !isNaN(initialPage)) {
      const pageToGo = Math.max(0, Math.min(initialPage, pages.length - 1))
      const flipBook = flipBookRef.current.pageFlip || flipBookRef.current
      if (flipBook && typeof flipBook.flip === 'function') {
        // Small delay to ensure the component is fully mounted
        setTimeout(() => {
          flipBook.flip(pageToGo)
        }, 100)
      }
    }
  }, [initialPage, pages.length, startPage])

  return (
    <div className="book-container">
      {pages && (
        // @ts-expect-error - react-pageflip types may not be fully compatible
        <HTMLFlipBook
          ref={flipBookRef}
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
          startPage={startPage}
          onFlip={handlePageFlip}
        >
          {pages.map((page) => page && (
            <div key={page.id}>{page.content}</div>
          ))}
        </HTMLFlipBook>
      )}
    </div>
  )
}

export default Book
