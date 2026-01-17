import backgroundImage from '../assets/images.png'
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

export function getPages(): PageData[] {
    // Cover page
    const coverPage = createPage(1, 'cover', '', [])

    // Nina's story pages (2-3 pages)
    const ninaPages: PageData[] = [
        createPage(2, 'nina', "Nina's Story - Beginning", [
            'Nina was born in Beidou, Changhua, a small town in Taiwan.',
            'Growing up in a close-knit family, she learned the values of love and togetherness.',
        ]),
        createPage(3, 'nina', "Nina's Family", [
            'Her family includes Grandpa, Grandma, Dad, and Mom.',
            'She has an older sister who passed away when Nina was 5, and a younger brother, 5 years younger.',
        ]),
        createPage(4, 'nina', "Nina's Journey", [
            'Through life\'s ups and downs, Nina learned to cherish every moment.',
            'Her experiences shaped her into the person she is today.',
        ]),
    ]

    // Combination part pages (2-3 pages) - where stories meet
    const combinationPages: PageData[] = [
        createPage(5, 'combination', 'When Two Paths Meet', [
            'In life\'s journey, two separate paths began to converge.',
            'Nina and Jianda\'s stories were about to intertwine.',
        ]),
        createPage(6, 'combination', 'The Meeting', [
            'When Jianda and Nina met, their individual stories merged into one.',
            'Two lives became connected, creating a new chapter together.',
        ]),
        createPage(7, 'combination', 'Together', [
            'From this point forward, their stories combine into one beautiful narrative.',
            'Two hearts, one journey, an unending story of love.',
        ]),
    ]

    // Jianda's story pages (2-3 pages)
    const jiandaPages: PageData[] = [
        createPage(8, 'jianda', "Jianda's Story - Beginning", [
            'Jianda was born in Dalin, Chiay, a small town in Taiwan.',
            'From a young age, he learned the importance of family and hard work.',
        ]),
        createPage(9, 'jianda', "Jianda's Family", [
            'His family includes Dad (Air-Conditioner worker, fierce looking, likes to farm),',
            'Mom (full-time housewife, kind to everyone, good at cooking),',
            'and an older sister, 3 years older (grown up together, Pharmacy PhD now).',
        ]),
        createPage(10, 'jianda', "Jianda's Journey", [
            'His Grandma, who took good care of him when he was small,',
            'passed away when Jianda was in college, leaving lasting memories.',
        ]),
    ]

    // Combine all pages in order: Cover → Nina's → Combination → Jianda's
    return [coverPage, ...ninaPages, ...combinationPages, ...jiandaPages]
}
