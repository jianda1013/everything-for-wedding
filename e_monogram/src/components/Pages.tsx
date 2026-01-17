import { useMemo } from 'react'
import backgroundImage from '../assets/images.png'
import { useI18n } from '../i18n/context'
import './Book.css'

interface PageData {
    id: number
    content: React.ReactNode
    section: 'cover' | 'nina' | 'combination' | 'jianda'
}

// Helper function to create a page with content
function createPage(
    id: number,
    section: 'cover' | 'nina' | 'combination' | 'jianda',
    title: string,
    paragraphs: string[]
): PageData {
    if (section === 'cover') {
        return {
            id,
            section,
            content: (
                <div className="page page-cover">
                    <div
                        className="page-content page-background"
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                        }}
                    />
                </div>
            ),
        }
    }

    return {
        id,
        section,
        content: (
            <div className="page">
                <div className="page-content">
                    <h2>{title}</h2>
                    {paragraphs.map((para, idx) => (
                        <p key={idx}>{para}</p>
                    ))}
                </div>
            </div>
        ),
    }
}

export function usePages(): PageData[] {
    const { t } = useI18n()

    return useMemo(() => {
        // Cover page
        const coverPage = createPage(1, 'cover', '', [])

        // Nina's story pages (2-3 pages)
        const ninaPages: PageData[] = [
            createPage(2, 'nina', t('book.nina.beginning.title'), [
                t('book.nina.beginning.paragraph1'),
                t('book.nina.beginning.paragraph2'),
            ]),
            createPage(3, 'nina', t('book.nina.family.title'), [
                t('book.nina.family.paragraph1'),
                t('book.nina.family.paragraph2'),
            ]),
            createPage(4, 'nina', t('book.nina.journey.title'), [
                t('book.nina.journey.paragraph1'),
                t('book.nina.journey.paragraph2'),
            ]),
        ]

        // Combination part pages (2-3 pages) - where stories meet
        const combinationPages: PageData[] = [
            createPage(5, 'combination', t('book.combination.whenTwoPathsMeet.title'), [
                t('book.combination.whenTwoPathsMeet.paragraph1'),
                t('book.combination.whenTwoPathsMeet.paragraph2'),
            ]),
            createPage(6, 'combination', t('book.combination.theMeeting.title'), [
                t('book.combination.theMeeting.paragraph1'),
                t('book.combination.theMeeting.paragraph2'),
            ]),
            createPage(7, 'combination', t('book.combination.together.title'), [
                t('book.combination.together.paragraph1'),
                t('book.combination.together.paragraph2'),
            ]),
        ]

        // Jianda's story pages (2-3 pages)
        const jiandaPages: PageData[] = [
            createPage(8, 'jianda', t('book.jianda.beginning.title'), [
                t('book.jianda.beginning.paragraph1'),
                t('book.jianda.beginning.paragraph2'),
            ]),
            createPage(9, 'jianda', t('book.jianda.family.title'), [
                t('book.jianda.family.paragraph1'),
                t('book.jianda.family.paragraph2'),
                t('book.jianda.family.paragraph3'),
            ]),
            createPage(10, 'jianda', t('book.jianda.journey.title'), [
                t('book.jianda.journey.paragraph1'),
                t('book.jianda.journey.paragraph2'),
            ]),
        ]

        // Combine all pages in order: Cover → Nina's → Combination → Jianda's
        return [coverPage, ...ninaPages, ...combinationPages, ...jiandaPages]
    }, [t])
}
