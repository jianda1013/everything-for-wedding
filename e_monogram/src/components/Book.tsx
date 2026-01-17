import HTMLFlipBook from 'react-pageflip'
import backgroundImage from '../assets/images.png'
import './Book.css'

function Book() {
  return (
    <div className="book-container">
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
      >
        {/* Page 1 - Background Image */}
        <div className="page page-cover">
          <div 
            className="page-content page-background"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        </div>

        {/* Page 2 */}
        <div className="page">
          <div className="page-content">
            <h2>Page 2</h2>
            <p>Welcome to the monogram book</p>
            <p>This is a mock page for testing pagination.</p>
          </div>
        </div>

        {/* Page 3 */}
        <div className="page">
          <div className="page-content">
            <h2>Page 3</h2>
            <p>Continue reading...</p>
            <p>Turn the page to see more content.</p>
          </div>
        </div>

        {/* Page 4 */}
        <div className="page">
          <div className="page-content">
            <h2>Page 4</h2>
            <p>More story content here.</p>
            <p>The book continues to unfold.</p>
          </div>
        </div>

        {/* Page 5 */}
        <div className="page">
          <div className="page-content">
            <h2>Page 5</h2>
            <p>Final mock page</p>
            <p>This completes the initial pagination test.</p>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  )
}

export default Book
